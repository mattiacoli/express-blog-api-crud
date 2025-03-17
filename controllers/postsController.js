
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
  // find post by slug
  const postSlug = req.params.slug
  const post = posts.find(post => post.slug === postSlug)
  // handle message 404 if post not found
  if(!post){
    return res.status(404).json({
      error: "error 404",
      message : "post not found"
    })
  }

  // edit all object key
  post.title = req.body.title
  post.slug = req.body.slug
  post.content = req.body.content
  post.image = req.body.image
  post.tags = req.body.tags

  // check edits in array
  console.log(posts);

  // return edited post on postman
  res.json(post)

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