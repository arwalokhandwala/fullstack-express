const React = require('react');

class Bootstrap extends React.Component {
	render() {
		return (
			<html lang="en">
			  <head>
			    <meta charset="utf-8"/>
			    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

			   
			    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
			    <link rel="stylesheet" href="/css/page.css"/>

			    <title>Bootstrap Demo</title>
			  </head>
			  <body>
			    <h1>In Bootstrap</h1>

			    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
			    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
			    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>


			    <div className="container-fluid">
			    	<div className="row">
					  <div className="col-sm-6">
					    Level 1: Column takes 1/2 the width of the page
					    <div className="row">
					      <div className="col-sm-4">
					        Level 2: This column takes 1/3 the width of it's parent column
					      </div>
					      <div className="col-sm-8">
					        Level 2: This column takes 2/3 the width of it's parent column
					      </div>
					    </div>
					  </div>
					</div>
					<p className="text-left text-lowercase">Left aligned text.</p>
					<p className="text-center text-capitalize">Center aligned text.</p>
					<p className="text-right">Right aligned text.</p>
					<p className="text-nowrap">Justified text.</p>
					<p className="text-justify">No wrap textkdjshfdhfkasjhfakhflahlfjahdslfkadljfhsjdfhasdfhasjhfkjashfkjasskjfasd ak fkdjsfsdfadakd  sdjfldsj   f adsf sdjhfkjh s ssdfhfhfasdkfdf'd  djjfgfbn sdlkjfldjlfjdslfkll andfj.</p>
					<ul className="list-inline">
					  <li>I will have no list-style and left-margin</li>
					  <li>Me neither!</li>
					</ul>
					</div>
					<br/>
<button type="button" class="btn btn-default">Default</button>

<button type="button" class="btn btn-primary">Primary</button>

<button type="button" class="btn btn-success">Success</button>

<button type="button" class="btn btn-info">Info</button>

<button type="button" class="btn btn-warning">Warning</button>

<button type="button" class="btn btn-danger">Danger</button>

<button type="button" class="btn btn-link">Link</button>

			    
			  </body>
			</html>

			)
	}
}

module.exports=Bootstrap;