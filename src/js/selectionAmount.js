import refs from './refs';
import currentDeposit from './currentDeposit';
const throttle = require('lodash.throttle');
const debounce = require('lodash.debounce')

const roundAmount = (amount) => {
        return Math.floor(amount * 100) / 100;
}

const animation = ({timing, draw, duration}) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    let progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) {
        requestAnimationFrame(animate);
    }
  });
}

const setAmount = (e) => {
    const amount = roundAmount(e.target.value);
    currentDeposit.amount = amount;
    refs.amountInvested.textContent = `${currentDeposit.amount} ${currentDeposit.currency.toUpperCase()}`;
    animation({
        duration: 800,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            refs.amountInvestedSchedule.style.height = `${progress * +amount * 0.2}px`;
            refs.amountStartInvestedSchedule.style.height = `${progress * +amount * 0.2}px`;
        }
    })
    return amount;
}

const getAmountDepositRang = (e) => {
        refs.amountDepositInput.value = setAmount(e);
}

const getAmountDepositInput = (e) => {
        refs.amountDepositRange.value = setAmount(e);
}

refs.amountDepositRange.addEventListener('input', debounce(getAmountDepositRang, 500))
refs.amountDepositInput.addEventListener('input', debounce(getAmountDepositInput, 500))