import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"




class CommentService{

    async postComment(formData){
        let response = await api.post('api/comments', formData)
        console.log(response)
        let newComment = new Comment(response.data)
        AppState.comments.push(newComment)
    }
}

export const commentService = new CommentService()