import Posts from "#pages/posts";
import ShowPost from "#pages/posts/show/";

const Routes = [
  {
    pathname: "/admin/posts",
    component: Posts,
  },
  {
    // path name (show) is going to be replace by the id or slug
    pathname: "/admin/posts/show",
    component: ShowPost,
  },
];

export default Routes;
