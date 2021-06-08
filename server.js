const express = require('express');

var app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



app.get('/', function(req, res){
	res.render('index.html');
});


app.post('/', function(req, res){

	const js = {
		result:'success'
	}

	res.send(js);
});


app.listen(3000, ()=>{
	console.log('서버가 실행 중입니다.');
});