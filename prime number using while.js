let a = parseInt(prompt("Enter the number"))
let b = 1
let cod = 0
while(b<=a){
    if(a%b==0){
      let cod =  cod + 1 
    }b++
}
if(cod==1){
    alert("Prime number")
}
else{
    alert("Not a prime number")
}