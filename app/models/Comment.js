




export class Comment{
    constructor(data){
        this.postedBy = data.postedBy
        this.body = data.body
    }

    static commentHomeTemplate(){
        return`
        
        `
    }

    static commentFormTemplate(){
        return `
        <form onsubmit="app.CommentController.postComment()">
        <div>
            <h5>Your Comment:</h5>
            <textarea name="body" id="" cols="35" rows="3"></textarea>
        </div>
        <div>
            <button>Post</button>
        </div>
    </form>
        `
    }

    get commentTemplate(){
        return`
        <div class="comment-card">
        <span class="d-flex">
            <h6 class="me-2">Posted By:</h6>
            <h6></h6>
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