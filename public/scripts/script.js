let url='http://localhost:3000/students'

fetch(url)
	.then(res=>res.json())
	.then(res=>{
		console.log(res, "Inside second then()")
		document.body.innerHTML=`<h1>Hey Welcome!! You are a valid user :)</h1>`
	})
