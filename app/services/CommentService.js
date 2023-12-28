import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { api } from "./AxiosService.js"
import { Comment } from "../models/Comment.js"




class CommentService{

    async getComments(){
        const response = await api.get('api/comments')
        console.log(response)
        const allComments = await response.data.map(comments => new Comment(comments))
        AppState.Comments = allComments
        console.log(AppState.Comments)
    }

    async postComment(formData, postId){
        if(formData != undefined){
            formData.postedBy = AppState.account.id
            formData.postId = postId
            formData.user = AppState.account.name
        }
        let response = await api.post('api/comments', formData)
        console.log(response)
        let newComment = new Comment(response.data)
        AppState.Comments.push(newComment)
    }

    async deleteComment(commentId){
        const response = api.delete(`api/comments/${commentId}`)
        let comments = AppState.Comments
        let commentIndex = comments.findIndex(comment => comment.id == commentId)
        AppState.Comments.splice(commentIndex, 1)
        let commentA = AppState.activeComments
        let commentAIndex = commentA.findIndex(comment => comment.id == commentId)
        AppState.activeComments.splice(commentAIndex, 1)
    }
}

export const commentService = new CommentService()