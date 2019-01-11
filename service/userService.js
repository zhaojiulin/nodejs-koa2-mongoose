'use strict';
/**
 * 实现层
 */
const userDao= require('../dao/userDao')

exports.signUp=async(params)=>{
    if(!params){
        return {message:'参数错误',code:-1}
    }
     let data = await userDao.signUp(params)
     return data;
}
exports.getUser=async(params)=>{
    if(!params){
        return {message:'参数错误',code:-1}
    }
    let data = await userDao.findById(params)
    return data;
}

exports.update=async(params)=>{
    if(!params){
        return {message:'参数错误',code:-1}
    }
    let data = await userDao.updateUser(params)
    return data;
}
