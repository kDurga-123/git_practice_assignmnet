let name = "Racecar";
let bag = "";
for(let i = name-1; i>=0;i--){
    bag+=name[i];
    
}
if(name!=bag){
    console.log("Yes");
}
else{
    console.log("No")
}