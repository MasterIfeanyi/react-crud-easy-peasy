import { createStore } from "easy-peasy";
import { postsModel } from "./features"

export default createStore({ 
    posts: postsModel
});