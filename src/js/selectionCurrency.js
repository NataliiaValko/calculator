import refs from './refs';

const getCurrencyDeposit = (e) => {
    // console.log (e.target.dataset.currency)
    return e.target.dataset.currency
}

refs.currencyListDeposit.addEventListener('click', getCurrencyDeposit)

// console.log (refs.getCurrencyDeposit.value)