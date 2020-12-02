import Post from "#root/models/Post";

class PostController {
  /**
   * Fetch all posts.
   */
  static async index() {
    const results = await Post.findAll();

    return results;
  }
  // create
  // update
  // delete
  // softDelete
}

export default PostController;
