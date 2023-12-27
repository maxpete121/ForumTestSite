import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { api } from "./AxiosService.js"




class CommentService{

    async getComments(){
        const response = await api.get('api/comments')
        console.log(response)
        let allComments = await response.data.map(comment => new Comment(comment))
        AppState.Comments = allComments
        console.log(AppState.Comments)
    }

    async postComment(formData, postId){
        if(formData != undefined){
            formData.postedBy = AppState.account.id
            formData.postId = postId
        }
        let response = await api.post('api/comments', formData)
        console.log(response)
        let newComment = new Comment(response.data)
        AppState.comments.push(newComment)
    }
}

export const commentService = new CommentService()