import PostModel from "./PostModel";

class PostController {
  /**
   * Fetch all posts.
   */
  static async index() {
    const results = await PostModel.findAll();

    return results;
  }
  // create
  // update
  // delete
  // softDelete
}

export default PostController;
