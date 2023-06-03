import {Schema, model, models} from 'mongoose'

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 4,
    },
    desc: {
        type: String,
        required: true,
        min: 6,
    },
    imageUrl: {
        type: String,
        required: true,
     },
    category: {
        type: String,
        required: true,
        enum: [
            'Nature',
            'Mountain',
            'Ocean',
            'wildflie',
            'Forest'
        ],
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: [],
    }
    
}, {timestamps:true});

export default models?.Blog || model('Blog', blogSchema);