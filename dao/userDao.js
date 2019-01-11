const postModel = require('../model/userModel');
/**
 * 保存用户信息
 */
exports.signUp=async(params)=>{
    console.log(params)
    try {
        let result = await postModel.create(params);
        return {message:null,code:1,data:result ? result:null};
    }catch (message){
        return { message:JSON.stringify(message) , code:-1,data:null};
    }
}

/**
 * 查询用户信息
 * @param params
 * @returns {Promise<*>}
 */
exports.findById=async(params)=>{
    console.log(params)
    try {
        let result = await postModel.findById(params.id)
        return {message:null,code:1,data:result ? result:null};
    }catch (message){
        return { message:JSON.stringify(message) , code:-1,data:null};
    }
}

/**
 * 修改用户信息
 * @param params
 * @returns {Promise<*>}
 */
exports.updateUser=async(params)=>{
    console.log(params)
    try {
        let result = await postModel.updateOne({_id:params.id},{$set:params});
        return {message:null,code:1,data:result ? result:null};
    }catch (message){
        return { message:JSON.stringify(message) , code:-1,data:null};
    }
}
