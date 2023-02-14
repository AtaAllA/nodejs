const fs = require('fs');
const http=require('http');
const { parse } = require('path');


////////////// Q 1 /////////////////////


let productDB =JSON.parse( fs.readFileSync("products.json",'utf-8'))
    console.log(productDB)


    /////////////////// Q2 ///////////////// 



const server=http.createServer(function(req,res)
{


let products =JSON.parse( fs.readFileSync("products.json",'utf-8'))
console.log(productDB)
    

    let urls=req.url.split('/');

    if(urls[1]=='home'){

    res.write("<h1>Welcome to our APIs</h1>");  
    }



    else if((urls[1]=='products') && isFinite(urls[2]))
    {
        let id = urls[2]
        let product = productsDB[parseInt(id)]
        products = JSON.stringify(product)
        console.log(id);
        res.write(products)
    }


    else if((urls[1]=='products'))
    {
    // let productDB =JSON.parse( fs.readFileSync("products.json",'utf-8'))
    // console.log(productDB)
    //     res.write(productDB).JSON.stringfy

        res.write(JSON.stringify(productDB));

    }


    else
    {
        res.writeHead(404);
        res.write('<h1>not found</h1>')
    }

    res.end()
   
})

server.listen(4000,function()
{
    console.log('enta f el server ya 3m ');
})
