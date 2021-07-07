import refs from './refs';

const setEndDeposit = (data) => {
    console.log(data);
    refs.endDeposit.value = data + 300;
        // return e.target.value
}

refs.endDeposit.addEventListener('focusout', getStartDeposit);

// const getResult = () => {
//     console.log(refs.startDeposit.value);
// }

// refs.form.addEventListener('submit', getResult)

