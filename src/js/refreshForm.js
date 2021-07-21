import refs from './refs';
import currentDeposit from './currentDeposit';
import { roundAmount } from './setAmount';

const zoom = 0.16;

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

const getAmountTotalResult = () => {
    const amount = Number(currentDeposit.amount) + currentDeposit.profit;
    return `${amount.toFixed(2)} ${currentDeposit.currency.toUpperCase()}`
}

const actionRefreshForm = {
    setHeightBoxChart() {
        refs.amountInvested.textContent = `${currentDeposit.amount.toFixed(2)} ${currentDeposit.currency.toUpperCase()}`;
        animation({
            duration: 800,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                    if (currentDeposit.amount <= 1000) {
                        refs.amountInvestedChart.style.height = `${progress * + currentDeposit.amount * zoom}px`;
                    } else {
                        refs.amountInvestedChart.style.height = `${progress * + 1000 * zoom}px`;
                    }
            }
        })
    },
    
    setHeightBoxInvestChart() {
        refs.amountInvested.textContent = `${currentDeposit.amount.toFixed(2)} ${currentDeposit.currency.toUpperCase()}`;
        animation({
            duration: 800,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                    if (currentDeposit.amount <= 1000) {
                        refs.amountStartInvestedChart.style.height = `${progress * + currentDeposit.amount * zoom}px`;
                    } else {
                        refs.amountStartInvestedChart.style.height = `${progress * + 1000 * zoom}px`;
                    }
            }
        })
    },

    setCurrentCurrencyTextContentInput() {
        refs.currencyCurrentDeposit.textContent = currentDeposit.currency.toUpperCase();
    },

    setAmountInvestChartTextContent() {
        refs.amountInvested.textContent = `${currentDeposit.amount} ${currentDeposit.currency.toUpperCase()}`
    },

    setHeightBoxProfitChart() {
        animation({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                refs.amountProfitChart.style.height = `${progress * + currentDeposit.profit * zoom}px`;
            }
        })
    },
    
    setProfit() {
        const profit = currentDeposit.amount * currentDeposit.percent / 100 / 12 * currentDeposit.term;
        currentDeposit.profit = roundAmount(profit);
    },
    
    setTextProfitChart() {
        refs.amountTotalProfit.textContent = getAmountTotalResult()
    },
    
    setTextInvestment(){
        refs.amountInvestedResult.textContent = `${currentDeposit.amount} ${currentDeposit.currency.toUpperCase()}`
    },
    
    setTotalPercent() {
        refs.percentDepositResult.textContent = `${roundAmount(currentDeposit.term * currentDeposit.percent / 12)} %`
    },
    
    setResultTotalText() {
        console.log(currentDeposit)
        refs.amountProfitResult.textContent = getAmountTotalResult()
    }    
}

export default actionRefreshForm;