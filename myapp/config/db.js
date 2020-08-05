let mysql = require('mysql')
let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'coolrabbit'
})

function query(sql,callback){
    console.log(11)
    pool.getConnection((err,connection)=>{
        connection.query(sql, (err,rows)=>{
            callback(err,rows)
            connection.release()
            return
        })
    })
}

exports.query = query