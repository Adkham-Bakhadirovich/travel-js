

let elTitle=document.querySelector(".title")

let money=prompt("Alisher safar uchun qancha puliz bor:");

let ticket=500
let hotel=250
let museum=10
let umumiy=500*12800+250*12800+10*13360;

console.log(umumiy);

if(umumiy<=money){
  elTitle.textContent="Oq yo'l Alisher"
}
else{
  elTitle.textContent="Alisher pulingiz yetmaydi,sabr qiling"
}
