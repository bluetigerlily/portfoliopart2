const {Client} = require('pg')
const client = new Client({
	user: "postgres",
	password: "4271",
	host: "local",
	port: 5432,
	database: "postgres",
	schema: "TRMS"
}) 


client.connect()
.then(() => console.log("Connected Successfully"))
.then(() => client.query("select * from user"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())