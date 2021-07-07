import refs from './refs';
import currentDeposit from './currentDeposit';

const getTypeDeposit = (e) => {
    currentDeposit.type = e.target.value;
    // console.log (e.target.value)
    // return e.target.value
}

refs.typeDeposit.addEventListener('change', getTypeDeposit)
// console.log (refs.typeDeposit.value)

