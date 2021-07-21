import refs from './refs';
import currentDeposit from './currentDeposit';
import setPercent from './setPercent';
import listDeposits from './listDeposits';
import actionRefreshForm from './refreshForm';
import { setAttributeMinTermInput, addClassCurrentTickmarks } from './setTerm';

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
        if (el.type === currentDeposit.type) {
            currentDeposit.term = currentDeposit.minTerm;
        }
    })
}

const doInputEvent = (target) => {
    const setTerm = () => {
        target.value = currentDeposit.minTerm
    }

    target.addEventListener('input', setTerm)
    const event = new Event('input');
    target.dispatchEvent(event)
    addClassCurrentTickmarks();
    target.removeEventListener('input', setTerm)
}

const setTypeDeposit = (e) => {
    setTypeCurrentDeposit(e);
    setPercent();
    setMinTermCurrentDeposit(listDeposits);
    setTermCurrentDeposit(listDeposits);
    setAttributeMinTermInput(currentDeposit.type);
    addClassCurrentTickmarks();
    doInputEvent(refs.termDeposit);
    actionRefreshForm.setHeightBoxProfitChart();
    actionRefreshForm.setProfit();
    actionRefreshForm.setTextProfitChart();
    actionRefreshForm.setTotalPercent();
    actionRefreshForm.setResultTotalText();
}

refs.typeDeposit.addEventListener('change', setTypeDeposit)