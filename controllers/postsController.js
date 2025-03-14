const posts = require('../data/posts')

// index
function index(req, res){
  res.send('post list here')
}
// show
function show(req, res){
  const postSlug = req.params.slug
  res.send(`this is post with slug:${postSlug}`)
}
// store
function store(req, res){
  res.send('add new post')
}
// update
function update(req, res){
  const postSlug = req.params.slug
  res.send(`update entire post with slug:${postSlug}`)
}
// modify
function modify(req, res){
  const postSlug = req.params.slug
  res.send(`modify post with slug:${postSlug}`)
}
// destroy
function destroy(req, res){
  const postSlug = req.params.slug
  res.send(`delete post with slug:${postSlug}`)
}

module.exports = { index, show, store, update, modify, destroy}