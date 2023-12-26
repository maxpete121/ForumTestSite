import { AppState } from "../AppState.js"




export class Post{
    constructor(data){
        this.name = data.name
        this.subText = data.subText
        this.body = data.body
        this.profileId = data.profileId
        this.id = data.id
    }

    get postTemplate(){
        return`
        <div class="w-50 bg-white rounded-2 mt-3">
        <div class="d-flex">
        <h6 class="me-2">Post Name</h6>
        <h6>${this.name}</h6>
        </div>
        <div>
        <div>${this.subText}</div>
        </div>
        <div>
        <div>${this.body}</div>
        </div>
        <div>
        ${this.deleteButton}
        </div>
    </div>
        `
    }

    get deleteButton(){
        if(this.profileId = AppState.account.id){
            return `<button onclick="app.PostController.deletePost('${this.id}')">Delete</button>`
        }else{
            return ``
        }
    }

    static formTemplate(){
        return`
        <form onsubmit="app.PostController.newPost()">
        <div>
            <label for="">Name</label>
            <input type="text" name="name" required placeholder="Post Name...">
        </div>
        <div>
            <label for="">Topic</label>
            <input type="text" name="subText" required placeholder="Post Topic...">
        </div>
        <div>
            <label for="">Your Post</label>
            <textarea name="body" id="" cols="50" rows="5"></textarea>
        </div>
        <div>
        <button type="submit">Post</button>
        </div>
        </form>
        `
    }

}



// name: {type: String, required: true, maxLength: 30},
// subText: {type: String, required: true, maxLength: 80},
// body: {type: String, required: true, maxLength: 200},
// profileId: {type: Schema.Types.ObjectId, ref: 'Account'},
// likeId: {type: Schema.Types.ObjectId, ref: 'Like'},
// commentId: {type: Schema.Types.ObjectId, ref: 'Comment'}