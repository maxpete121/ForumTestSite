import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { Post } from "../models/Post.js"
import { commentService } from "../services/CommentService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"





export class CommentController{
    constructor(){
        console.log('Comment Controller Loaded')
        AppState.on('Posts', this.getComments)
    }


    async closeCommentForm(postId){
        let content = ''
        document.getElementById(`${postId}1`).style.display = 'none'
        document.getElementById(`${postId}`).innerHTML = content
    }

    async buildCommentForm(postId){
        let comment = AppState.comments
        let content = ''
        AppState.Posts.find(post => content = post.commentFormTemplate)
        document.getElementById(`${postId}1`).style.display = 'block'
        document.getElementById(`${postId}`).innerHTML = content
    }

    async getComments(){
        try {
            commentService.getComments()
        } catch (error) {
            Pop.error('Cant find comments')
        }
    }

    async postComment(postId){
        try {
            event.preventDefault()
            let form = event.target
            let formData = getFormData(form)
            // formData.postedBy = AppState.account.id
            // formData.postId = postId
            await commentService.postComment(formData, postId)
            form.reset()
            this.closeCommentForm(postId)
        } catch (error) {
            
        }
    }
}