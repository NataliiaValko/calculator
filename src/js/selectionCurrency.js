import refs from './refs';
import currentDeposit from './currentDeposit';

const setCurrent = (target) => {
    refs.allCurrency.forEach(el => {
        if (el.classList.contains('currency__item--current')) {
        el.classList.remove('currency__item--current')
        }
    })

    target.classList.add('currency__item--current')
}

const getCurrencyDeposit = (e) => {
    const currency = e.target.dataset.currency;
    currentDeposit.currency = currency;
    refs.currencyCurrentDeposit.textContent = currency.toUpperCase();
    refs.amountInvested.textContent = `${currentDeposit.amount} ${currentDeposit.currency.toUpperCase()}`
    setCurrent(e.target)
}

refs.currencyListDeposit.addEventListener('click', getCurrencyDeposit)