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


    async closeCommentForm(postIds){
        let content = ''
        document.getElementById(`${postIds}1`).style.display = 'none'
        document.getElementById(`${postIds}`).innerHTML = content
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