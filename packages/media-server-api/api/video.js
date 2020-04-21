const fs = require('fs');
const source = require('../source');

function video(req, res) {
  console.log('req', req.params.id);
  const movieId = req.params.id;
  const movieInfo = source.filter( item => movieId === item.id )[0];
  if (movieInfo && movieInfo.stream_path) {
    streaming(req, res, movieInfo.stream_path);
  } else {
    res.status(404).end('');
  }
}

function streaming(req, res, stream_path) {

  const path = stream_path;
  const stat = fs.statSync(path)
  console.log('stat', stat);
  
  const fileSize = stat.size
  const range = req.headers.range
  console.log('range', range);

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1

    if(start >= fileSize) {
      res.status(416).send('Requested range not satisfiable\n'+start+' >= '+fileSize);
      return
    }
    
    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }

    res.writeHead(206, head)
    file.pipe(res)
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
}

module.exports = video;