import refs from './refs';
const throttle = require('lodash.throttle');

const getAmountDepositRang = (e) => {    
        // console.log(e.target.value);
        refs.amountDepositInput.value = Math.floor(e.target.value * 100) / 100;
        return e.target.value
}

const getAmountDepositInput = (e) => {    
        // console.log(e.target.value);
        refs.amountDepositRange.value = Math.floor(e.target.value * 100) / 100;
        return e.target.value
}

refs.amountDepositRange.addEventListener('input', throttle(getAmountDepositRang, 400))
refs.amountDepositInput.addEventListener('input', throttle(getAmountDepositInput, 400))