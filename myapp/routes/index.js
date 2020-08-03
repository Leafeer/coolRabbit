var express = require('express');
var router = express.Router();
let mysql = require('mysql')

// let db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   port: 3306,
//   database: 'coolrabbit'
// })
// db.connect()
// db.query('select * from user', (err, data) => {
//   console.log('succ1', data)
// })
// db.end()

// 获取时间写法
// let requestTime  = (req, res, next)=>{
//   req.requestTime  = Date.now()
//   next()
// }
// router.use (requestTime)


/* GET home page. */
router.get('/', function(req, res, next) {
  req.getConnection((err, conn) => {
    if (err) {
      return next(err)
    } else {
      conn.query('select * from user', [], (err,result) => {
        if (err) {
          return next (err);
        } else {
          console.log(result)
          res.json(result);
        }
      })
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
