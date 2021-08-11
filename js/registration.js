

var email;
var password ;


function setCookie(cname , cvalue ,exdays){

    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}


//get cookies
function getCookie(name)
{
    
    var cookie=document.cookie.split("; ")
    var value
    cookie.forEach(function(onesidecookie)
    {
       var cookiepart=onesidecookie.split("=")
     
      if(cookiepart[0]==name)
        {

           
            value= cookiepart[1]
        }
       
    })
    
    return value
}
//get all cookies
function getAllCookies()
{
   var cookie=document.cookie.split(";")
   return (cookie)
}

function Register()
{
    var nameRegular=/^([a-zA-Z]+)$/;
    var emailRegular=/^([a-zA-Z0-9\.-]+)@.([a-zA-Z0-9-]+).com$/;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    email= document.getElementById("Email").value;
     password = document.getElementById("password").value;
    var confirmPass =document.getElementById("confirm_password").value;

    if(fname !== ""  && lname !== "" && email !== "" &&password!==""&&confirmPass!==""){
        if(nameRegular.test(fname)&&nameRegular.test(lname)){
            if(emailRegular.test(email)){
                if(password === confirmPass && password.length >= 8)
            {

                setCookie("firstName ",fname);
                setCookie("lastName", lname);
                setCookie("Email",email);
                setCookie("password",password);
                setCookie("confirmPass",confirmPass);
                document.forms[0].reset();
                alert("done");
                window.location.replace("login.html");

               
    
            }else{
                alert("wrong password");
                document.getElementById("password").value="";
                document.getElementById("confirm_password").value="";
            }
    
            
    
                    }else{
                        alert("invalid email");
                        document.getElementById("Email").value="";
                    }
                }
                else{
                    alert("name must be characters only")
                }
    


    }else{
        alert("You must fill all inputs");
    }
    
}






function Login(){
var getEmail=getCookie("Email");
var getPass=getCookie("password")
    var loginMail = document.getElementById("loginMail").value;
    var loginPass = document.getElementById("loginPass").value;
console.log(loginMail);
console.log(loginPass)
    if(loginMail === getEmail && loginPass === getPass )
    {
        alert("success");
    
        window.location.replace("start.html");
    
    }
    else{alert("fail");}


   }
  




