import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { Post } from "../models/Post.js"
import { commentService } from "../services/CommentService.js"
import { postService } from "../services/PostService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"





export class CommentController{
    constructor(){
        console.log('Comment Controller Loaded')
        AppState.on('account', this.getComments)
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
        this.postIdPush(postId)
    }

    async postIdPush(postId){
        let posts = AppState.Posts
        let foundPost = posts.find(post => post.id == postId)
        AppState.activePost = foundPost
        console.log(AppState.activePost)
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
            let postId = AppState.activePost.id
            // formData.postedBy = AppState.account.id
            // formData.postId = postId
            await commentService.postComment(formData, postId)
            this.getComments()
        } catch (error) {
            
        }
    }

    async deleteComment(commentId){
        await commentService.deleteComment(commentId)
        postService.getPosts()
    }
}