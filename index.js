
function sendMail(){
    var params ={
        fname:document.getElementById('fname').value ,
        lname:document.getElementById('lname').value ,
        email:document.getElementById('email').value ,
        location:document.getElementById('location').value ,
        phone:document.getElementById('phone').value ,
        activity:document.getElementById('activity').value ,
        from:document.getElementById('from').value ,
        to:document.getElementById('to').value ,
        message:document.getElementById('message').value 
    };
   if(params.fname==''){
    alert('First Name Cannot be Empty');
   }else if(params.lname==''){
    alert('Last Name Cannot be Empty');
   }else if(params.email==''){
    alert('Email Cannot be Empty');
    }else if(params.location==''){
    alert('Location Cannot be Empty');
    }else if(params.phone==''){
    alert('phone Cannot be Empty');
    }else if(params.activity==''){
    alert('Activity Cannot be Empty');
    }else if(params.from==''){
    alert('Start Date Cannot be Empty');
    }else if(params.to==''){
    alert('End Date Cannot be Empty');
    }else if(params.to==''){
    alert('End Date Cannot be Empty');
    }else if(params.message==''){
    alert('Message Cannot be Empty');
    }else{
        const serviceID = 'service_adcsl0t';
        const templateId = "template_c1qk4dn" ;
    
        emailjs.send(serviceID,templateId,params).
        then(
            res =>{
                document.getElementById('fname').value="" ,
                document.getElementById('lname').value ="" ,
                document.getElementById('email').value ="",
                document.getElementById('location').value ="",
                document.getElementById('phone').value ="" ,
                document.getElementById('activity').value ="",
                document.getElementById('from').value ="" ,
                document.getElementById('to').value ="",
                document.getElementById('message').value =""
                console.log(res);
                alert("Message Sent Successfully,Wait for the response") ;
            }
        )
        .catch((err)=>console.log(err));

    }





   
}


     
