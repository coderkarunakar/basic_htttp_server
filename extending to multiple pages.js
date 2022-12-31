//in this we will be extending multiple pages of html..


//in this file we will be using the nodemon and with  this there is a lot of useage..
//no need to restart the code again i.e no need to write the code again ..
//but where as in the node we need to restart the code..



//in this file we will be rendering the basic html file and like we will be knowing its content-type in the 
//in the response header of network in the inspect page...



    //serving response to the  browser...


    const http=require('http'); //in this line we are getting (http ) module by using require. function...
    //now we can use all the fucntionalities of http.and with the help of require fucntion both client and server both uses the http all fucntionalites...
    
    const port=8000;
    const fs=require('fs');  //here fs is a module it is used for reading nd writing from html. files...here just creating a variable in order to hold that property

    //in this line we are creating a function with 2 arguments called request and response..


    //this is the syntax for handling all the request and response..part..and requestHandler handles all the requests...
    function requestHandler(request,response){
        console.log(request.url);  //mainly this line is used to get the request url
        response.writeHead(200,{'content-type':'text/html'})  //here just gave success code +content- type...
        
        //writeHead mehtod is for returning a status code to the browser....   like 200 for success and it's content-type..



//here let us take some switch cases..this is for what request url is given to us ..with this only our pages are getting changed in the browser...


let filepath;
switch (request.url ){              //this line decides the all request url were given..
    case '/':                   //note:forward slash means home pathi.e root path..
        filepath='./index.html'
        break;

    case '/profile':
        filepath='./profile.html'
        break;

    default:
        filepath='./404.html'


}


//this syntax is for read the file..

fs.readFile(filepath,function(err,data){
    if(err){
        console.log('error',err);
        return response.end("<h1>Error!mama inka vadile ra..</h1>")
    }
    return response.end(data);

})


    }


    const server=http.createServer(requestHandler);  //in this line simply server is just created... 
    
    


    //this is the last part and here server is getting started....this is the simple syntax..

    //in this line we are using server.listen with this we can make our port(8000 i.e which we defined..) to run if it wont run then our function error will run..
    server.listen(port,function(err){       
        if(err){
            console.log(err);
            return;
        }
        console.log("server is up and running on the  port just  on look  kaka... ",port);
    
    });
    
    //note:we can open our created server using (localhost:portno)  or using code (127.0.0.1 portno)  both performs same operation we can use anyof this..



    //note:always remember that if u change the code in the editor then need to restart the code in the
    //editor...