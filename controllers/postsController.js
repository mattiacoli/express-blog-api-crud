
const posts = require('../data/posts')

// index
function index(req, res) {
  let filterPosts = posts
  const tag = req.query.tag
  if(tag){
    filterPosts = posts.filter(post => post.tags.includes(tag))
  }

  res.json(filterPosts)
}
// show
function show(req, res) {
  const postSlug = req.params.slug
  const post = posts.find(post => post.slug === postSlug)
  if(!post){
    return res.status(404).json({
      error : "error 404",
      message : "post not found"
    })
  }
  res.json(post)
}
// store
function store(req, res) {

  // create new object
  const newPost = {
    title : req.body.title,
    slug : req.body.slug,
    content : req.body.content,
    image : req.body.image,
    tags : req.body.tags
  }
  // save new object in array
  posts.push(newPost)
  // log the array with the new post
  console.log(posts);
  // return new post on postman
  res.status(201).json(newPost)

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

  posts.splice(posts.indexOf(post), 1)
  console.log(posts);

  res.sendStatus(204)

}

module.exports = { index, show, store, update, modify, destroy }