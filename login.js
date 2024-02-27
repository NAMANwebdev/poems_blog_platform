let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin(){
    
    let mobile = document.getElementById("number").value;

    let password = document.getElementById("pass").value;

   let count = 0;

     if(mobile.length !== 10)
     {
        alert("Mobile number should be of 10 digits")
     }
     else if(mobile.length == 0)
     {
        alert("Enter Mobile Number")
     }

     else{

     
    for(let i=0;i<getUsersdata.length;i++)
    {
        if(mobile == getUsersdata[i].number)
        {
            if(password == getUsersdata[i].password)
            {
                const displayname = getUsersdata[i].username;
                const displayemail = getUsersdata[i].email
                console.log(displayname)
               
                console.log("sucess")
                alert("Sign in Successful");
               
                localStorage.setItem("displayname", displayname)
                localStorage.setItem("displayemail" , displayemail)
                window.location.href = "dashboard.html"

            }
            else{
                alert("Invalid Password");
            }
        }
        else{
            count++;
            console.log(count)
        }

    }
    }
   
    if(count == getUsersdata.length){
        console.log("fail")

        alert("User is Not registered, Sign up to Continue")
        window.location.href = "signup.html"

    }

    

}

