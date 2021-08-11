//set cookies 
function setCookie(name,value,nday)
{
    var date=new Date();
    var set=date.getDay+nday
    date.setDate(set)
    document.cookie=name+"="+value+";expires"+date.toUTCString()
    
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
//delete cookie
function deleteCookie(name)
{
    var cookie=document.cookie.split(";")
    cookie.forEach(function(onesidecookie){
        var cookiepart=onsidecookie.split("=")
        if(cookiepart[1]==name)
        {
            setCookie(cookiepart[0],cookiepart[1],-1000)
        }
    })

}
//update cookie
function updateCookie(name,value,nday)
{
    var cookie=document.cookie.split("; ")
    cookie.forEach(function(onesidecookie)
    {
      var cookiepart=onesidecookie.split("=")
      if(cookiepart[0]==name)
        {
            setCookie(name,value,nday)
        }
    })  
}