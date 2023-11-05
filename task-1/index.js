//leap year
var year=parseInt(prompt("enter Year"));
var bool;
if(year%4==0)
{
    if(year%100==0)
    {
        if(year%400==0)
        {
            bool=true;
        }
        else
        {
            bool=false;
        }
    }
    else
    {
        bool=true;
    }
}
else
{
    bool=false;
}
if(bool)
{
    console.log("leap year");
}
else
{
    console.log("Not a leap");
}


// //Grade calculation

var numberGrade=parseInt(prompt("Enter the student's Numerical grade(1 t0 100"));
if(numberGrade>=90)
    console.log("A");
else if(numberGrade>=80 && numberGrade<=89)
    console.log("B");
else if(numberGrade>=70 && numberGrade<=79)
    console.log("C");
else if(numberGrade>=60 && numberGrade<=69)
    console.log("D");
else if(numberGrade<60)
    console.log("F");


//Factorial calculation


var factProduct=((num,product=1)=>
{

    for(let i=1;i<=num;i++)
    {
        product*=i;
    }
    console.log(product)

})
factProduct(parseInt(prompt("enter Number")));

//Number Guessing

var user=parseInt(prompt("enter number"));
const randomNumber=Math.floor(Math.random()*100)+1;

while(user!=randomNumber)
{
    
    if(user>randomNumber)
    {
        let value=user-randomNumber;
        alert(`you have to add number  ${value}`);
        
    }
    else if(user<randomNumber)
    {
        let val=randomNumber-user;
        alert(`your have to subtract number ${val}`);
        
    }
   
    
    user=parseInt(prompt("enter"));
  
}
alert("you entered correct number");




