async function getJoke(){
 try{
 let res=await fetch(
 "https://api.chucknorris.io/jokes/random"
 );
 let data=await res.json();

 document.getElementById("joke").innerText=
 data.value;

 }catch(error){
 document.getElementById("joke").innerText=
 "Error loading joke";
 }
}
