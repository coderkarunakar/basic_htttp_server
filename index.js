
            //creating our own server...and opening server in the local host 8000



const http=require('http'); //in this line we are getting (http ) module by using require. function...
//now we can use all the fucntionalities of http.and with the help of require fucntion both client and server both uses the http all fucntionalites...

const port=8000;

const server=http.createServer();  //in this line simply server is just created... 


//in this line we are using server.listen with this we can make our port(8000 i.e which we defined..) to run if it wont run then our function error will run..
server.listen(port,function(err){       
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up and running on the  port ",port);

})

//note:we can open our created server using (localhost:portno)  or using code (127.0.0.1 portno)  both performs same operation we can use anyof this..


//Remaining left code please refer (serving _response_to_browser.js) file