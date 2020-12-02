import Post from "#root/models/Post";

class PostController {
  // index
  static async index() {
    const results = await Post.findAll();

    res.json(results);
  }
  // create
  // update
  // delete
  // softDelete
}

export default PostController;
