import refs from './refs';

const listTypesDeposite = {
    SHORT_TERM: 'short-term',
    STANDART: 'standart',
    LONG_TERM: 'long-term'
}

const getTypeDeposit = (e) => {
    e.target.value
}
refs.typeDeposit.addEventListener('change', getTypeDeposit)
console.log (refs.typeDeposit.value)