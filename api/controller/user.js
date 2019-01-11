/**
 * 控制层
 */
const userService = require('../../service/userService')

exports.signUp = async(ctx,next)=>{
    let params = ctx.request.body
    let data = await userService.signUp(params)

    return ctx.body = data
}

exports.getUser = async(ctx,next)=>{
    let params = ctx.request.body
    let data = await userService.getUser(params)

    return ctx.body = data
}

exports.updateUser = async(ctx,next)=>{
    let params = ctx.request.body
    let data = await userService.update(params)

    return ctx.body = data
}
