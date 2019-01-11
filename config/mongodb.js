/**
 * 数据库连接
 * @type {*|Mongoose}
 */
var mongoose = require('mongoose');
mongoose.connect(com.env.mongodb,{
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("数据库连接成功！");
});
module.exports = mongoose;
