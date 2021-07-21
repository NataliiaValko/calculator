import refs from './refs';
import currentDeposit from './currentDeposit';
import setEnd from './setStartDate';
import actionRefreshForm from './refreshForm';
import listDeposits from './listDeposits';
import { messageTermError } from './toastr';
const debounce = require('lodash.debounce');

const addClassCurrentTickmarks = () => {
    refs.termListDeposit.forEach(el => {
            if (el.classList.contains('tickmarks__item--current')) {
                el.classList.remove('tickmarks__item--current')
        }
            if (el.dataset.value === refs.termDeposit.value) {
                el.classList.add('tickmarks__item--current')
            }
    })
}

const setAttributeValueInput = () => {
        refs.termDeposit.setAttribute('value', currentDeposit.term);
}

const setAttributeMinTermInput = (type) => {
        listDeposits.forEach(el => {
                if (el.type === type) {
            refs.termDeposit.setAttribute('value', el.minTerm);
            }
        }
    )
}

const resetTermForMinTerm = (e) => {
        e.target.value = currentDeposit.minTerm
}

const setTermCurrentDeposit = (e) => {
        currentDeposit.term = e.target.value;
}

const setTermDeposit = (e) => {
        if (e.target.value < currentDeposit.minTerm) {
                messageTermError(currentDeposit.minTerm);
                resetTermForMinTerm(e)
                addClassCurrentTickmarks();
            return
        }

        setTermCurrentDeposit(e);
         if (currentDeposit.dateStart) {
                setEnd(currentDeposit.dateStart);
        }

        addClassCurrentTickmarks();
        setAttributeValueInput();
        actionRefreshForm.setHeightBoxProfitChart();
        actionRefreshForm.setProfit();
        actionRefreshForm.setTextProfitChart();
        actionRefreshForm.setTotalPercent();
        actionRefreshForm.setResultTotalText();
}

refs.termDeposit.addEventListener('change', debounce(setTermDeposit, 150))

export { setAttributeMinTermInput, addClassCurrentTickmarks}