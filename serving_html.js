//in this file we will be rendering the basic html file and like we will be knowing its content-type ,code status,
//in the response header of network in the inspect page...



    //serving response to the  browser...


    const http=require('http'); //in this line we are getting (http ) module by using require. function...
    //now we can use all the fucntionalities of http.and with the help of require fucntion both client and server both uses the http all fucntionalites...
    
    const port=8000;  //this will make us to run our code in 8000 port..

    //in this line we are creating a function with 2 arguments called request and response..
//and requestHandler is just an function name no need to worry about it...

    function requestHandler(request,response){
        console.log(request.url);
        response.writeHead(200,{'content-type':'text/html'})  //here just gave success code +content- type...
        
        //writeHead mehtod is for returning a status code to the browser....   like 200 for success and it's content-type..

        response.end('<h1>Gotcha mama~!<h1>');  //end is used to end the response process...
    }
    
    const server=http.createServer(requestHandler);  // this line is for creating the server..
    
    
    //in this line we are using server.listen with this we can make our port(8000 i.e which we defined..) to run if it wont run then our function error will run..
    server.listen(port,function(err){       
        if(err){
            console.log(err);
            // return;
        }
        console.log("server is up and running on the  port ",port);
    
    });
    
    //note:we can open our created server using (localhost:portno)  or using code (127.0.0.1 portno)  both performs same operation we can use anyof this..



    //note:always remember that if u change the code in the editor then need to restart the code in the
    //editor...