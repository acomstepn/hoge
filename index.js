var app  = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send("<h1>It works.hoge</h1>");
})

const port = 80;
http.listen(port, function(){   //80番ポートでlistenする
  // ユーザーを変更する
     process.setuid(1000);
  //
       console.log('listening on *:'+port);
       });
