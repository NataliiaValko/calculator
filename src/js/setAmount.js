import refs from './refs';
import currentDeposit from './currentDeposit';
import actionRefreshForm from './refreshForm';
import { messageAmountWarning } from './toastr';
const debounce = require('lodash.debounce')

const roundAmount = (amount) => {
        return Math.floor(amount * 100) / 100;
}

const setAmount = (e) => {
    const amount = roundAmount(e.target.value);
    currentDeposit.amount = amount;
    actionRefreshForm.setHeightBoxChart();
    actionRefreshForm.setHeightBoxInvestChart();
    actionRefreshForm.setAmountInvestChartTextContent();
    actionRefreshForm.setHeightBoxProfitChart();
    actionRefreshForm.setProfit();
    actionRefreshForm.setTextProfitChart();
    actionRefreshForm.setTextInvestment();
    actionRefreshForm.setTotalPercent();
    actionRefreshForm.setResultTotalText();
        
    return amount;
}

const getAmountDepositRang = (e) => {
        refs.amountDepositInput.value = setAmount(e).toFixed(2);
}

const getAmountDepositInput = (e) => {
        if (e.target.value > 1000) {
            messageAmountWarning()
            return
        }

        refs.amountDepositRange.value = setAmount(e);
}

refs.amountDepositRange.addEventListener('input', debounce(getAmountDepositRang, 500))
refs.amountDepositInput.addEventListener('input', debounce(getAmountDepositInput, 500))

export { roundAmount}