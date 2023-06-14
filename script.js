 
 
 var variable;
 var balancevalue=5000;
 var amount;
 console.log("enter")
 uservarible=Number( prompt("please enter your option(1-withdraw , 2-depose ,3-transfer) "))

 switch(uservarible){
    case 1:
   amount=Number  (prompt("plaese enter your with draw a mount :"));
   if (balancevalue>= amount && balancevalue>0){
    balancevalue-= amount;
    alert("your transction accept, you withdraw "+ amount);

   }
   else{
    alert("wrong amount")
   }
  break;

  case 2:
    alert("welcome in 2 condition ");
   break;

   default:
    alert("wronge input please enter 1 or 2 ")

 }
  
 