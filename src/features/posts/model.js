import {action, thunk, computed} from "easy-peasy"
import axios from "axios"

export const postsModel = {
  lists: [],
  status: null,
  addPosts: action((state, payload) => {
    state.lists.push(...payload)
  }),
  setStatus: action((state, payload) => {
    state.status = payload
  }),
  initEditMode: action((state, { idx }) => {
    state.lists[idx].mode = "edit"
  }),
  removePost: action((state, payload) => {
    state.lists = state.lists.filter(({id}) => id !== payload.id)
  }),
  updateState: action((state, { id, body }) => {
    // state.lists[idx] = body
    state.lists = state.lists.map(post => post.id === id ? {...body} : post)
  }),
  fetchPosts: thunk(async (actions, payload) => {
    try {
      actions.setStatus("loading")
      const { data } = await axios.get("https://ifeanyi-json-server-easy-peasy.herokuapp.com/tasks")
      actions.addPosts(data)
      actions.setStatus("success")
    } catch {
      actions.setStatus("failed")
    }
  }),
  deletePosts: thunk(async (actions, {id}) => {
    try {
      actions.setStatus("loading")
      await axios.delete(`https://ifeanyi-json-server-easy-peasy.herokuapp.com/tasks/${id}`)
      actions.setStatus("success")
      actions.removePost({id})
    } catch {
      actions.setStatus("failed")
    }
  }),
  getPostById: computed((state) => {
    return (id) => state.lists.find(post => (post.id).toString() === id);
  }),
  editPost: "",
  setEditPost: action((state, payload) => {
    state.editPost = payload;
  }),
  updatePost: thunk(async (actions, editData, helpers) => {
    // destructure id from the user edit 
    const { id } = editData;
    try {
      // make axios request
      const { data } = await axios.put(`https://ifeanyi-json-server-easy-peasy.herokuapp.com/tasks/${id}`, editData);
      actions.updateState({id, body: data})
      actions.setEditPost("")
    } catch {
      actions.setStatus("failed")
    }
  }),
  savePost: thunk(async (actions, newData, helpers) => {   
    try {
      actions.setStatus("loading")
      const { data } = await axios.post("https://ifeanyi-json-server-easy-peasy.herokuapp.com/tasks", newData)
      actions.addPosts(data)
      actions.setStatus("success")
    } catch {
      actions.setStatus("failed")
    }
  })
}