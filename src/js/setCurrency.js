import refs from './refs';
import currentDeposit from './currentDeposit';
import listDeposits from './listDeposits';
import setPercent from './setPercent';
import actionRefreshForm from './refreshForm';

const setCurrentClass = (target) => {
    refs.allCurrency.forEach(el => {
        if (el.classList.contains('currency__item--current')) {
        el.classList.remove('currency__item--current')
        }
    })

    target.classList.add('currency__item--current')
}

const getCurrencyDeposit = (e) => {
    if (!e.target.classList.contains('currency__value')) {
        return
    }
    const currency = e.target.dataset.currency;
    currentDeposit.currency = currency;
    setCurrentClass(e.target)
    setPercent(listDeposits);
    actionRefreshForm.setCurrentCurrencyTextContentInput();
    actionRefreshForm.setAmountInvestChartTextContent();    
    actionRefreshForm.setHeightBoxProfitChart();
    actionRefreshForm.setProfit();
    actionRefreshForm.setTextProfitChart();
    actionRefreshForm.setTotalPercent();
    actionRefreshForm.setResultTotalText();
}

refs.currencyListDeposit.addEventListener('click', getCurrencyDeposit)