const currencyFirstEl=document.querySelector(".maMonnaie-first");
const worthFirstEl=document.getElementById("worth-first");
const currencySecondEl=document.querySelector(".maMonnaie-second");
const worthSecondEl=document.getElementById("worth-second");
const exchangeRate=document.getElementById("exchange-rate");
updateRate();
function updateRate() {
    fetch(` https://v6.exchangerate-api.com/v6/19bbc865b74e679d38d263ce/latest/${currencyFirstEl.value}`)
    .then((rens)=>rens.json())
    .then((data)=>{
        const rate=data.conversion_rates[currencySecondEl.value];
        console.log(rate)
        exchangeRate.innerText=`1 ${currencyFirstEl.value} = ${rate+" "+currencySecondEl.value}`;
        worthSecondEl.value=(worthFirstEl.value*rate).toFixed(4)
    })
     
}
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate)
worthFirstEl.addEventListener("input", updateRate)

