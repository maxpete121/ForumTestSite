import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from "../services/AxiosService.js"
import { postService } from "../services/PostService.js"
import { Pop } from "../utils/Pop.js"
import { getFormData } from "../utils/FormHandler.js"
import { Account } from "../models/Account.js"
import { commentService } from "../services/CommentService.js"
import { Comment } from "../models/Comment.js"

function _drawPosts(){
    let allPosts = AppState.Posts
    let content = ''
    allPosts.forEach(post => content += post.postTemplate)
    document.getElementById('post-view').innerHTML = content
}

function _drawComments(){
    let allComment = AppState.activeComments
    let content = ''
    allComment.forEach(comment => content += comment.commentsTemplate)
    document.getElementById('comment-draw').innerHTML = content
}

export class PostController{
    constructor(){
        console.log('Post Controller Loaded')
        AppState.on('account', this.getPosts)
        AppState.on('Posts', _drawPosts)
    }


    async getPosts(){
        try {
            postService.getPosts()
        } catch (error) {
            Pop.error('Posts not found')
        }
    }

    async showForm(){
        try {
            let posts = AppState.Posts
            let content = Post.formTemplate()
            document.getElementById('form-view').innerHTML = content
        } catch (error) {
            Pop.error('Form not found')
        }
    }

    async newPost(){
            event.preventDefault()
            let form = event.target
            let postData = getFormData(form)
            postData.profileId = AppState.account.id
            console.log(postData)
            await postService.newPost(postData)
            form.reset()

    }

    async foundComments(postId){
        let comments = AppState.Comments
        let foundComments = comments.filter(comment => comment.postId == postId)
        AppState.activeComments = foundComments
        console.log('test draw', foundComments)
        _drawComments()
    }

    async drawPostView(postId){
        try {
            let posts = AppState.Posts
            let viewPost = posts.find(post => post.id == postId)
            AppState.activePost = viewPost
            let content = viewPost.singlePostTemplate
            let newId = AppState.activePost.id
            document.getElementById('comment-view-main').innerHTML = content
            this.foundComments(newId)
        } catch (error) {
            Pop.error('Post not found')
        }
    }

    async deletePost(postId){
        try {
            await postService.deletePost(postId)
        } catch (error) {
            
        }
    }
}