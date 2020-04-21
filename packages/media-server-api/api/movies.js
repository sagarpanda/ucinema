const source = require('../source');

function movies(req, res) {
  const data = source.map(item => {
    return {
      id: item.id,
      title: item.title,
      url: '/video/' + item.id,
      type: 'other',
      category: 'movie',
      hidden: false
    }
  })
  res.status(200).json(data);
}

module.exports = movies;