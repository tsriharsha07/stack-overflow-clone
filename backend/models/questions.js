const mongoose=require('mongoose');


const questionSchema=mongoose.Schema({
    questionTitle:{
        type:String,
        required:[true,'Question must have a title']
    },
    questionBody:{
        type:String,
        required:[true,'Question must have a Body']
    },
    tags:{
        type:[String],
        required:[true,'Question must have atleast one tag']
    },
    noOfAnswers:{
        type:Number,
        default:0
    },
    upVote:{
        type:[String],
        default:[]
    },
    downVote:{
        type:[String],
        default:[]
    },
    userPosted:{
        type:String,
        required:[true,'Question must have an author']
    },
    userId:{
        type:String
    },
    postedOn:{
        type:Date,
        default:Date.now
    },
    answer:[{
        answerBody:{
            type:String,
        },
        userAnswered:{
            type:String,
        },
        answeredOn:{
            type:Date,
            default:Date.now
        },
    }]
});

module.exports = mongoose.model('Question', questionSchema)