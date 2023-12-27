import { AppState } from "../AppState.js"
import { Post } from "./Post.js"





export class Comment{
    constructor(data){
        this.postedBy = data.postedBy
        this.body = data.body
        this.postId = data.postId
    }

    static commentHomeTemplate(){
        return`
        
        `
    }


    get commentTemplate(){
        return`
        <div class="comment-card">
        <span class="d-flex">
            <h6 class="me-2">Posted By:</h6>
            <h6>${this.postedBy.name}</h6>
        </span>
        <span>
            <p></p>
        </span>
    </div>
        `
    }



    
}


// postedBy: {type: Schema.Types.ObjectId, ref: 'Account'},
// postId: {type: String, required: true},
// likes: {type: Schema.Types.ObjectId, ref: 'Like'},
// body: {type: String, required: true, maxLength: 150}