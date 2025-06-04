const accountId=144553 // only way to declare constant

//2 way to declare variable
let accountEnail="kshitij@google.com"
var password="12345"
accountCity="varanasi"

//keywords have fixed meaning in compiler
// accountId=2 // not allowed 
accountEnail="ks@ks.com"
password="2121"
accountCity="banglore"
let accountState;
console.log(accountId);
console.table([accountId,accountEnail,password,accountCity,accountState])


/*
Prefer not to use var 
because of issues in block scope and functional scope 
*/