var request = require('request');
var access_token = TODO_GET_IT_MANUALLY;

function callMeAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/me",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

function callEmailAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

function main(done){
	callMeAPI(access_token,function(err, res){
		if (err) {done(err)}
		else{
			var firstname = res.localizedFirstName;
			var lastname = res.localizedLastName;
			callEmailAPI(access_token,function(err, res){
				if (err) {done(err)}
				else{
					var email = res.elements[0]["handle~"].emailAddress;
					console.log(firstname+" "+lastname+" "+email);
					done(null,"success");
				}
			});
		}
	});
}

main(function(a,b){});