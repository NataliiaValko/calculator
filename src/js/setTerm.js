import refs from './refs';
import currentDeposit from './currentDeposit';
import setEnd from './setStartDate';
import actionRefreshForm from './refreshForm';
import listDeposits from './listDeposits';
import { messageTermError } from './toastr';
const debounce = require('lodash.debounce');

const onValidTerm = () => {
        // console.log(currentDeposit.term)
        // console.log(currentDeposit.minTerm)
        // console.log(currentDeposit.term < currentDeposit.minTerm)
        return currentDeposit.minTerm === 0
            ? false
                : currentDeposit.term < currentDeposit.minTerm
}

const addClassCurrentTickmarks = () => {
    refs.termListDeposit.forEach(el => {
            if (el.classList.contains('tickmarks__item--current')) {
                el.classList.remove('tickmarks__item--current')
        }
        
            if (el.dataset.value === refs.termDeposit.value) {
                    console.log(el)
                    el.classList.add('tickmarks__item--current')
            }
    })
}

// const setAttributeMinTerm = (el) => {
//         // console.log(refs.termDeposit.getAttribute('value'));
        
//         // console.log(refs.termDeposit.getAttribute('value'));
// }

const setAttributeValueInput = () => {
        // console.log(refs.termDeposit.getAttribute('value'));
        refs.termDeposit.setAttribute('value', currentDeposit.term);
        // console.log(refs.termDeposit.getAttribute('value'));
}

const setAttributeMinTermInput = (type) => {
        listDeposits.forEach(el => {
                if (el.type === type) {
            refs.termDeposit.setAttribute('value', el.minTerm);
            }
        }
    )
}

const setTermCurrentDeposit = (e) => {
        currentDeposit.term = e.target.value;
        console.log(currentDeposit.term)
}

const setTermDeposit = (e) => {
        // console.log('8568568')
        // if (onValidTerm()) {
        //         // console.log('wewew')
        //     messageTermError();
        //     return
        // };

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

// const setTermValue = (e) => {
// //   if (onValidTerm()) {
// //                 // console.log('wewew')
// //             messageTermError();
// //             return
// //         };

//         setTermCurrentDeposit(e);
//          if (currentDeposit.dateStart) {
//                 setEnd(currentDeposit.dateStart);
//         }

//         addClassCurrentTickmarks();
//         setAttributeValue();
//         actionRefreshForm.setHeightBoxProfitChart();
//         actionRefreshForm.setProfit();
//         actionRefreshForm.setTextProfitChart();
//         actionRefreshForm.setTotalPercent();
//         actionRefreshForm.setResultTotalText();
//           // e.target.value = e.target.getAttribute('value')
// }

refs.termDeposit.addEventListener('change', debounce(setTermDeposit, 150))
// refs.termDeposit.addEventListener('input', debounce(setTermValue, 300))

export { setAttributeMinTermInput, addClassCurrentTickmarks}