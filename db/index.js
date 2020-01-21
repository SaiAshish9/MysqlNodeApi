const mysql=require('mysql')

const pool= mysql.createPool({
  connectionLimit:10,
  password:'99999',
  user:'saiashish',
  database:'first',
  host:'localhost',
  port:'3308'
})

let first={};
first.all=()=>{
return new Promise((resolve,reject)=>{
pool.query('SELECT * FROM first',(err,results)=>{
  if(err){
    return reject(err)
  }
return resolve(results)
})
})
}

module.exports=first
