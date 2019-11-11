const koaBody = require('koa-body');
const router = require('koa-router')();
// const User = require('../model/user');

// router.get('/users', async (ctx, next) => {
//     // const user = await User.findAll({
//     //     where: { isdelete: 0 },
//     // })
//     const user = await new Promise((res,rej)=>{
//         console.log('user---')
//         return res('user')
//     })
//     ctx.body = user;
// });

router.get('/users', (ctx, next) => {
    // const user = await User.findAll({
    //     where: { isdelete: 0 },
    // })
    ctx.body = 'user';
});


module.exports = router
