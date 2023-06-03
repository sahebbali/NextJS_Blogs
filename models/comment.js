import {Schema, model, models} from 'mongoose'

const commentSchema = new Schema({
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "Blog",
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        
    },
    text: {
        type: String,
        required: true,
     },
    
    
}, {timestamps:true});

export default models?.Comment || model('Comment', commentSchema);