



export class Post{
    constructor(data){
        this.name = data.name
        this.subtext = data.subtext
        this.body = data.body
        this.profileId = data.profileId
        this.likeId = data.likeId
        this.commentId = data.commentId
    }
}



// name: {type: String, required: true, maxLength: 30},
// subText: {type: String, required: true, maxLength: 80},
// body: {type: String, required: true, maxLength: 200},
// profileId: {type: Schema.Types.ObjectId, ref: 'Account'},
// likeId: {type: Schema.Types.ObjectId, ref: 'Like'},
// commentId: {type: Schema.Types.ObjectId, ref: 'Comment'}