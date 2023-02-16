//in this file we will be using the nodemon and with  this there is a lot of useage..
//no need to restart the code again i.e no need to write the code again ..
//but where as in the node we need to restart the code..



//in this file we will be rendering the basic html file and like we will be knowing its content-type  
//in the response header of network in the inspect page...



    //serving response to the  browser...(FROM server to the browser...)


    const http=require('http'); //in this line we are getting (http ) module by using require. function...
    //now we can use all the fucntionalities of http.and with the help of require fucntion both client and server both uses the http all fucntionalites...
    
    const port=8000;
    const fs=require('fs');  //here fs(file specific) is a module it is used for ( reading nd writing from html.) files...here just creating a variable in order to hold that property

    //in this line we are creating a function with 2 arguments called request and response..

    function requestHandler(request,response){
        console.log(request.url);  //this request.url is used to get the requested url(i.e 200) given below.. for success 
        response.writeHead(200,{'content-type':'text/html'})  //here just gave success code +content- type..res.writeHead() sends the response http status code 200 to the browser..
        
        //writeHead mehtod is for (returning a status code to the browser)....   like 200 for success and it's content-type..(i.e it belongs to html,css,js or any file it belongings to...)



                                    //Linking takes place.. here.

            //here 3 arguments were given that is 1.path of the file,2.error,3.file data...
            

            //simplest way to read a file is .readFile method with this the file we give will be read...
            //here first it takes I,e call back parameter is error next correct data...
            // fs is just we declared above in order to read and write html files... 
             
            //here readfile is reading the index.html file..
        fs.readFile('./index.html',function(err,data){
            if(err){
                console.log('errror',err)
                return response.end("<h1>Error!</h1>")  //here end fucntion is used to end the response processs
            }
            return response.end(data);  //this line is just like an else statement if no error it return the correct data...

        })  //here it is an synchronous mehtod.. with this linking of html file takes place ,and here the format for linking is ./ dot slash...(./index.html)file is linked here...

        // response.end('<h1>Gotcha mama~!<h1>');  //end is used to end the response process.and prints something in the browser..page..
  
    }

    
    //this http is used for transmitting the html files..

    const server=http.createServer(requestHandler);  //in this line simply server is just created...  with this line only actuall our web page is running without this it can't..
    
    
    //in this line we are using server.listen with this we can make our port(8000 i.e which we defined..) to run if it wont run then our function error will run..
    server.listen(port,function(err){       
        if(err){
            console.log(err);
            return;
        }
        console.log("server is up and running on the  port just please look  kaka... ",port);  //this get printed on our terminal vs code..
    
    });
    
    //note:we can open our created server using (localhost:portno)  or using code (127.0.0.1 portno)  both performs same operation we can use anyof this..



    //note:always remember that if u change the code in the editor then need to restart the code in the
    //editor...