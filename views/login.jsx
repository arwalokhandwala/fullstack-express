const React=require('react');

class Login extends React.Component {
	render(){
		return (
			<html>
				<body>
					<form action="/storepassword" method="POST">
						Username: <input type="text" name="username" />
						<br/>
						Password: <input type="password" name="password" />
						<br/>
						<input type="submit" value="submit"/>
					</form>
				</body>
			</html>
			)
	}
}

module.exports=Login;