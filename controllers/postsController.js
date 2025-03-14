const { log } = require('console')
const posts = require('../data/posts')

// index
function index(req, res) {
  res.json(posts)
}
// show
function show(req, res) {
  const postSlug = req.params.slug
  const post = posts.find(post => post.slug === postSlug)
  if(!post){
    res.send('post not found')
  }
  res.json(post)
}
// store
function store(req, res) {
  res.send('add new post')
}
// update
function update(req, res) {
  const postSlug = req.params.slug
  res.send(`update entire post with slug:${postSlug}`)
}
// modify
function modify(req, res) {
  const postSlug = req.params.slug
  res.send(`modify post with slug:${postSlug}`)
}
// destroy
function destroy(req, res) {

  const postSlug = req.params.slug
  const post = posts.find(post => post.slug === postSlug)
  if(!post){
    res.send('post not found')
  }

  posts.splice(posts.indexOf(post), 1)
  console.log(posts);

  res.send(`deleted post with slug ${postSlug}`)

}

module.exports = { index, show, store, update, modify, destroy }