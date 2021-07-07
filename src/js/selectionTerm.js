import refs from './refs';
import currentDeposit from './currentDeposit';
const debounce = require('lodash.debounce');

const getTermDeposit = (e) => {    
        // console.log(e.target.value);
        // console.log(currentDeposit)
        currentDeposit.term = e.target.value;
        // return e.target.value

}

refs.termDeposit.addEventListener('input', debounce(getTermDeposit, 300))
