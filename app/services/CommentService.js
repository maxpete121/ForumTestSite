import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { api } from "./AxiosService.js"




class CommentService{

    async getComments(){
        const response = await api.get('api/comments')
        let allComments = response.data.map(comment => new Comment(comment))
        AppState.Comments = allComments
    }

    async postComment(formData){
        if(formData != undefined){
            formData.postedBy = AppState.account.id
        }
        let response = await api.post('api/comments', formData)
        console.log(response)
        let newComment = new Comment(response.data)
        AppState.comments.push(newComment)
    }
}

export const commentService = new CommentService()