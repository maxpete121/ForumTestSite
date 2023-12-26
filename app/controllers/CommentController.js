import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { commentService } from "../services/CommentService.js"
import { getFormData } from "../utils/FormHandler.js"




export class CommentController{
    constructor(){
        console.log('Comment Controller Loaded')
    }


    async closeCommentForm(){
        let content = ''
        document.getElementById('comment-form').innerHTML = content
    }

    async buildCommentForm(){
        let comment = AppState.comments
        let content = Comment.commentFormTemplate()
        document.getElementById('comment-form').innerHTML = content
    }

    async postComment(){
        try {
            event.preventDefault()
            let form = event.target
            let formData = getFormData(form)
            formData.postedBy = AppState.account.id
            await commentService.postComment(formData)
            await form.reset()
            this.closeCommentForm()
        } catch (error) {
            
        }
    }
}