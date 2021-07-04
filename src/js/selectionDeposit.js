import refs from './refs';

const getTypeDeposit = (e) => {
    // console.log (e.target.value)
    return e.target.value
}

refs.typeDeposit.addEventListener('change', getTypeDeposit)
// console.log (refs.typeDeposit.value)

