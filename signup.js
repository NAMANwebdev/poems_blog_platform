let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function signup(){

    let username = document.getElementById("username").value
    let number = document.getElementById("number").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    
    
    if (number.length != 10 ) {
        alert("enter valid mobile number")
    }

    else if(number.length == 0){
        alert("enter mobile number")
    }

    else{

        userData ={
            username : username,
            number : number , 
            password : password ,
            email : email
        }

        
    
        let users = [...getUsersdata,userData];
      localStorage.setItem("usersdata", JSON.stringify(users));


      alert("Signup Successfull");
      window.location.href = "login.html"
    
    
    
    
    
    }

}





