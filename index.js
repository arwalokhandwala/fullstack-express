const express=require('express');
const cookieParser=require('cookie-parser');
const pg = require('pg');
const sha256=require('js-sha256');

const configs= {
    user: 'frontline',
    host: '127.0.0.1',
    database: 'demo',
    port: 5432
  };

// SALT value
const SALT="I love Doctor Strange";

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

// Basic app setup
// console.log(process,'---Process in index.js')
const app=express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true,
}))

console.log("Done creatign app");

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);


app.set('views', __dirname+'/views');

app.set('view engine', 'jsx');

// Tell express to serve static files from public/ directory
app.use(express.static('public'));

// Use cookie parser
app.use(cookieParser());



// Setup routes

app.get("/",(request,response)=>{

	if(!request.cookies['loggedIn']) {
		response.render('login')
	} else {
		let mango=request.cookies['mango'];
		let loginCookieValue=request.cookies['loggedIn']


		if(loginCookieValue===sha256(`true-${SALT}-${mango}`)) {
			response.render('hello')
		} else {
			response.clearCookie('loggedIn')
			response.render('login')
		}

		
	}
})

app.post("/storepassword",(request,response)=>{

	// Get username and password
	let { username, password } = request.body

	password=sha256(password);
	// Store username and password in Database
	pool.query(`SELECT * FROM credentials where username='${username}'`,(err,result)=>{
		if(result.rows.length===0){
			pool.query(`INSERT INTO Credentials (username,hash_pass) VALUES('${username}','${password}') RETURNING *`,(err,insertRes)=>{
				if(err) {
					console.log(err, ' Errrrorrr');
				} else {
					// set cookie called loggedIn
					response.cookie("loggedIn",sha256(`true-${SALT}-${sha256(insertRes.rows[0].id)}`))
					response.cookie('mango',`${sha256(insertRes.rows[0].id)}`)
					response.render("hello")
				}
			})
		} else {
			if(result.rows[0]["hash_pass"]===password) {
				// set cookie called loggedIn
				response.cookie("loggedIn",sha256(`true-${SALT}-${sha256(insertRes.rows[0].id)}`))
				response.cookie("mango",`${sha256(insertRes.rows[0].id)}`)
				response.render("hello")
			} else {
				// password doesn't match
				response.render("login")
			}
		}
	})

	
	
})


app.get('/hello',(request, response)=>{
	response.render('hello')
})

app.get('/visits', (request,response)=>{
	// Get exisitng cookie value
	let visits= request.cookies['visits'];

	//Check if cookie was previously set
	if(!visits) {
		visits={
			count: 1
		}
	} else {

		visits=JSON.parse(visits);

		visits={
			count: parseInt(visits.count)+1
		}
	}

	response.cookie('visits',JSON.stringify(visits))
	response.send(`You have visited this website ${visits.count} times!`)
})

app.get('/students',(request,response)=> {
	let obj = {
		students: [
			{name: "Arwa",no:"2345"},
			{name: "Bob",no:"2905"},
			{name: "Ron",no:"2665"},
			{name: "Hermoine",no:"2565"},
			{name: "Voldemort",no:"2445"},
		]
	}

	response.send(obj)
})

app.get("/bootstrap",(req,res)=>{
	res.render('bootstrap')
})

// Listen on Server

app.listen(3000,()=>{
	console.log('Server is listening on port 3000')
})

