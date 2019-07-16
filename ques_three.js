var http = require('http');
const fs = require('fs');
var happy,prime_data,happy_data;

var server=http.createServer(function (req, res) {
    //for reading text file two
    fs.readFile("two.txt",(err,data)=>{
        if (err) throw err;
        happy_data= data.toString();
        merge2();
        
})
//for reading text file one

fs.readFile("one.txt",(err,data)=>{
    if (err) throw err;
    prime_data=data.toString();
    merge1();

})
//searching of common number
function merge1(){
    var pd = prime_data.split(",");
    console.log(pd)
    merge2();
    var hd = happy.split(",");
    console.log(hd)
    var arr=[];
    for(var i=0;i<=pd.length;i++){
        for(var j=0;j<=hd.length;j++){
            if((pd[i]==hd[j]) && (pd[i]!=undefined)){
                 console.log(pd[i]);
                 arr=arr+pd[i];
            }
        }
    }
    console.log(arr);    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(arr);
    return res.end();

}

function merge2(){
    happy=happy_data;
}

})
server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(8080);
console.log("server is running on http://localhost:8080");
