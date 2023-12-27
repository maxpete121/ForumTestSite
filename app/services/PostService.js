import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { getFormData } from "../utils/FormHandler.js"
import { api } from "./AxiosService.js"





class PostService{

    async getPosts(){
        let response = await api.get('api/posts')
        console.log('Posts', response)
        const allPosts = response.data.map(post => new Post(post))
        AppState.Posts = allPosts
        console.log(allPosts)
    }

    async newPost(postData){
        let response = await api.post('api/posts', postData)
        let newPost = new Post(response.data)
        console.log(newPost)
        AppState.Posts.push(newPost)
    }

    async deletePost(postId){
        let response = await api.delete(`api/posts/${postId}`)
        let posts = AppState.Posts
        let deleteP = posts.findIndex(post => postId == post.id)
        AppState.Posts.splice(deleteP, 1)
    }

}

export const postService = new PostService()