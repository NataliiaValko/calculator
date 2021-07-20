import refs from './refs';
import currentDeposit from './currentDeposit';
import setEnd from './setStartDate';
import actionRefreshForm from './refreshForm';
const debounce = require('lodash.debounce');

const addClassCurrent = (target) => {
    refs.termListDeposit.forEach(el => {
            if (el.classList.contains('tickmarks__item--current')) {
                el.classList.remove('tickmarks__item--current')
        }
        
            if (el.dataset.value === target.value) {
                    el.classList.add('tickmarks__item--current')
            }
    })
}

const getTermDeposit = (e) => {
        currentDeposit.term = e.target.value;
         if (currentDeposit.dateStart) {
                setEnd(currentDeposit.dateStart);
        }

        addClassCurrent(e.target)
        actionRefreshForm.setHeightBoxProfitChart();
        actionRefreshForm.setProfit();
        actionRefreshForm.setTextProfitChart();
        actionRefreshForm.setTotalPercent();
        actionRefreshForm.setResultTotalText();
}

refs.termDeposit.addEventListener('input', debounce(getTermDeposit, 300))
