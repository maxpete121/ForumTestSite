import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { getFormData } from "../utils/FormHandler.js"





class PostService{

    async getPosts(){
        const posts = await api.get('')
    }

    async newPost(postData){
        const response = await api.post('api/posts', postData)
        const newPost = new Post(response.data)
        AppState.Posts.push(newPost)
    }
}

export const postService = new PostService()