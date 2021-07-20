export default {
    form: document.querySelector('.details__form'),
    typeDeposit: document.querySelector('.details__select'),
    percentDayDeposit: document.querySelector('.details__text--accent'),
    percentDepositResult: document.querySelector('.result__percent-value'),

    currencyListDeposit: document.querySelector('.currency__list'),
    allCurrency:document.querySelectorAll('.currency__value'),
    currencyCurrentDeposit: document.querySelector('.details__amount-currency'),

    amountDepositRange: document.querySelector('.details__amount-rang'),
    amountDepositInput: document.querySelector('.details__amount-input'),
    amountInvested: document.querySelector('.result__chart-amount .result__chart-value'),
    amountInvestedChart: document.querySelector('.result__chart-amount .result__invest-chart'),
    amountInvestedResult: document.querySelector('.result__amount-value'),

    amountTotalProfit: document.querySelector('.result__chart-profit .result__chart-value'),
    amountStartChart: document.querySelector('.result__chart-profit .result__invest-chart'),
    amountProfitChart: document.querySelector('.result__chart-profit .result__profit-chart'),
    amountStartInvestedChart: document.querySelector('.result__invest-chart--part'),
    amountProfitResult: document.querySelector('.result__total-value'),

    termDeposit: document.querySelector('.details__term-input'),
    termListDeposit: document.querySelectorAll('.tickmarks__item'),
    startDeposit: document.querySelector('.details__term-start'),
    endDeposit: document.querySelector('.details__term-end'),

    buttonInvestNow: document.querySelector('.button')
}