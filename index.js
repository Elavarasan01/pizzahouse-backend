const http = require("node:http");
const fs=require("node:fs")

const server=http.createServer((req,res)=>{

if(req.url ==="/home" || req.url ==="/"){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify({
        storeName : "PizzaHut",
        outlet:"Hyderabad",
        profit :200000,
        production:"1000-pizza/day"
    }));
}else if(req.url ==="/about"){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify({
        Branches:["Tamilnadu","Kerala","Karnataka","Hyderabad"],
        delivarypartners:["Zomatto","swiggy","zepto"]
    })); 
}else if(req.url ==="/api"){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify({
        ordernumber:5,
        customerName:"Balaji",
        Address:"Trichy"
    })
);
}else{
    res.writeHead(404);
    res.end("Page not found");
}   
});

server.listen(2000,()=>{
    console.log("Server running on port 3000");
});

