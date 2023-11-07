let user={
    uname:"",
    upass:"",
    ucity:""
}

let formEle=document.getElementById('ele');
let arr=[];

function eventRegistration(event)
{

    event.preventDefault();


    let name=document.getElementById("userName").value;
    let password=document.getElementById("pass").value;
    let loc=document.getElementById("Location").value;


    user.uname=name;
    user.upass=password;
    user.ucity=loc;
    
    
    
    arr.push(user);

    console.log(arr);

}

formEle.addEventListener('submit',eventRegistration);