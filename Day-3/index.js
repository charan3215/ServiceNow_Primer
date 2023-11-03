//pattern
const num=parseInt(prompt("How many rows"));
for(let i=0;i<=num;i++)
{
    let st="*";
    for(let j=0;j<i;j++)
    {
       st=st+"*";
    }
   console.log(st);
}
console.log(clear);
for(let i=0;i<=num;i++)
{
    console.log("*".repeat(i));
}

// Factorial
const n=parseInt(prompt("enter number"));
var sum=1;
for(let i=1;i<=n;i++)
{
    sum=sum*i;
}
console.log(sum);

//Arithmetic Operations
var s=0;
const a=parseInt(prompt("enter First number"));
const b=parseInt(prompt("enter second number"));
const userInput=String(prompt("Enter your choice 1.sum 2.minus 3.Mul 4.Div"))
if(userInput=="sum")
{
    s=a+b;
    console.log(s);
}
else if(userInput=="minus")
{
    if(a>b)
    {
        s=a-b;
        console.log(s);
    }
    else if(b>a){
        s=b-a;
        console.log(s);
    }
}
else if(userInput=="Mul")
{
    s=a*b;
    console.log(s);
}
else if(userInput=="Div")
{
    s=a%b;
    console.log(s);
}



 
