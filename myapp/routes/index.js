var express = require('express');
var router = express.Router();

let db = require('../config/db')
const Unity = require('../unity/Unity').default
const r = Unity.send


// 获取时间写法
// let requestTime  = (req, res, next)=>{
//   req.requestTime  = Date.now()
//   next()
// }
// router.use (requestTime)


/* GET home page. */

console.log(r('', 200, 1, 'error'))
router.get('/', function(req, res, next) {
  db.query('select * from user',(err,rows) => {
    console.log(1)
    if (err) {
      
      res.send(r('', 200, 1, 'error'))
    } else {
      res.send(r(rows))
    }
  })
  // console.log('chenggong')
  // let sqlData = null
  // db.query('select * from user', (err, data => {
  //   console.log('succ', data)
  //   sqlData = data
  // }))
  // res.send(sqlData)
  
});

router.get('/user', function(req, res, next) {
  res.send('index');
});
module.exports = router;
