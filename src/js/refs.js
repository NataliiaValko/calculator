export default {
    typeDeposit: document.querySelector('.details__select'),
    percentDeposit: document.querySelector('.details__text--accent'),
    percentDepositResult: document.querySelector('.result__percent-value'),

    currencyListDeposit: document.querySelector('.currency__list'),
    currencyCurrentDeposit: document.querySelector('.details__amount-currency'),

    amountDepositRange: document.querySelector('.details__amount-rang'),
    amountDepositInput: document.querySelector('.details__amount-input'),
    amountInvested: document.querySelector('.result__schedule-amount .result__schedule-value'),
    amountInvestedSchedule: document.querySelector('.result__schedule-amount .result__invest-schedule'),
    amountInvestedResult: document.querySelector('.result__amount-value'),

    amountTotalProfit: document.querySelector('.result__schedule-profit .result__schedule-value'),
    amountProfitSchedule: document.querySelector('.result__schedule-profit .result__invest-schedule'),
    amountStartInvestedSchedule: document.querySelector('.result__invest-schedule--part'),
    amountProfitResult: document.querySelector('.result__total-value'),

    termDeposit: document.querySelector('.details__term-input'),
    startDeposit: document.querySelector('.details__term-start'),
    endDeposit: document.querySelector('.details__term-end'),

    buttonInvestNow: document.querySelector('.button')
}