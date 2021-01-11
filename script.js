'use strict';

const rangeAmount = document.querySelector('.range');
const rangeValue = document.getElementById("rangeValue").textContent;
const period = document.getElementById('monthly');
const interest = document.querySelector('.rate').textContent;;
const monthlyPayment = document.querySelector('.monthlyPayment');
const rate = interest_format();
// console.log(rangeAmount.value, rangeValue, period.value, rate);

period.addEventListener("input", function(){
    cal(rangeAmount, period, rate);
});

rangeAmount.addEventListener("input", function(){
    cal(rangeAmount, period, rate);
});

function cal(rangeAmount, period, rate){
    const amount = rangeAmount.value;
    const month = period.value;
    const interest_rate_r = (rate/100)/12;
    const discount_factor = (((1+interest_rate_r) ** month)-1) / (interest_rate_r*((1+interest_rate_r)**month));
    const payment_monthly = (amount/discount_factor).toFixed(2);
    const monthly = payment_monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
    monthlyPayment.innerHTML= `$${monthly}`;

}

function interest_format(){
    const rateFormat = interest.slice(0, -1);
    return rateFormat;
}


cal(rangeAmount, period, rate);