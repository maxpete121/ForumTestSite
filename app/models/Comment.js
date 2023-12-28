import { AppState } from "../AppState.js"
import { Post } from "./Post.js"





export class Comment{
    constructor(data){
        this.id = data.id
        this.postedBy = data.postedBy
        this.body = data.body
        this.postId = data.postId
        this.user = data.user
    }


     get commentsTemplate(){
        return`
        <div class="comment-card">
        <span class="d-flex">
            <h6 class="me-2">Posted By:</h6>
            <h6>${this.user}</h6>
        </span>
        <span>
            <p>${this.body}</p>
        </span>
        <span>
        <button onclick="app.CommentController.deleteComment('${this.id}')">Delete</button>
        </span>
    </div>
        `
    }



    
}


// postedBy: {type: Schema.Types.ObjectId, ref: 'Account'},
// postId: {type: String, required: true},
// likes: {type: Schema.Types.ObjectId, ref: 'Like'},
// body: {type: String, required: true, maxLength: 150}