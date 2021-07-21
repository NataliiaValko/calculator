import refs from './refs';
import currentDeposit from './currentDeposit';
import setPercent from './setPercent';
import listDeposits from './listDeposits';
import actionRefreshForm from './refreshForm';
import { setAttributeMinTermInput, addClassCurrentTickmarks, getTermDeposit } from './setTerm';
import { messageTermError } from './toastr';
// const debounce = require('lodash.debounce');

const setTypeCurrentDeposit = (e) => {
    currentDeposit.type = e.target.value;
}

const setMinTermCurrentDeposit = (list) => {
    list.forEach(el => {
        if (el.type === currentDeposit.type) {
            currentDeposit.minTerm = el.minTerm;
        }
    })
}

const setTermCurrentDeposit = (list) => {
    list.forEach(el => {
        // console.log(el)
        if (el.type === currentDeposit.type) {
            currentDeposit.term = currentDeposit.minTerm;
        }
    })
}

const doInput = (target) => {
    const handler = () => {
        target.value = currentDeposit.minTerm
    }
    target.addEventListener('input', handler)
    const event = new Event('input');
    target.dispatchEvent(event)
    addClassCurrentTickmarks();
    target.removeEventListener('input', handler)
}

const setTypeDeposit = (e) => {
    setTypeCurrentDeposit(e);
    setPercent();
    setMinTermCurrentDeposit(listDeposits);
    setTermCurrentDeposit(listDeposits);
    setAttributeMinTermInput(currentDeposit.type);
    addClassCurrentTickmarks();
    // debounce(getTermDeposit, 300);
    
    doInput(refs.termDeposit);
    actionRefreshForm.setHeightBoxProfitChart();
    actionRefreshForm.setProfit();
    actionRefreshForm.setTextProfitChart();
    actionRefreshForm.setTotalPercent();
    actionRefreshForm.setResultTotalText();
}

refs.typeDeposit.addEventListener('change', setTypeDeposit)