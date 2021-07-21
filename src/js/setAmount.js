import refs from './refs';
import currentDeposit from './currentDeposit';
import actionRefreshForm from './refreshForm';
import { messageAmountWarning } from './toastr';
const debounce = require('lodash.debounce')

const onErrorsBorder = () => {
        refs.amountDepositInput.classList.add('color-border--invalid');
}

const offErrorsBorder = () => {
        refs.amountDepositInput.classList.remove('color-border--invalid')
}

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

const setAmountDepositRang = (e) => {
        offErrorsBorder();
        refs.amountDepositInput.value = setAmount(e).toFixed(2);
}

const setAmountDepositInput = (e) => {
        onErrorsBorder()

        if (e.target.value > 1000) {
                messageAmountWarning()
            return
        }

        offErrorsBorder();
        refs.amountDepositRange.value = setAmount(e);
}

refs.amountDepositRange.addEventListener('change', debounce(setAmountDepositRang, 500))
refs.amountDepositInput.addEventListener('input', debounce(setAmountDepositInput, 500))

export { roundAmount}