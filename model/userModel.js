/**
 * 用户表
 * @type {*|mongoose|Mongoose}
 */
const mongoose = require('../config/mongodb')
let Schema = mongoose.Schema;
let postSchema = new Schema({
     username:{
         type:String,
         required:true,
         trim:true
     },
     password:{
         type:String,
         required:true
    },
     mobile:{
         type:String,
         required:true
     },
    gender:{
         type:Number,
    },
    interest:{
         type:String
    },
    desc:{
         type:String
    }
},{
    collection: 'user',versionKey:false,
    timestamps: { createdAt: 'reg', updatedAt: 'updateTime' }
});
let postModel = mongoose.model('user',postSchema);
module.exports = postModel;
