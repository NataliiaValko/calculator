import refs from './refs';
// const $ = require('jquery')

const setEndDeposit = (data) => {
    if (data.includes('NaN')) {
        return
    }
    refs.endDeposit.value = data;
}

const getMonth = (data) => {
    const monthStart = data.slice(3, 5);
    const monthEnd = (parseInt(monthStart) + 9) > 12
        ? parseInt(monthStart) + 9 - 12
        : parseInt(monthStart) + 9;
    return String(monthEnd).length === 1
        ? `0${monthEnd}`
        : monthEnd;
}

const getYear = (data) => {
    const monthStart = data.slice(3, 5);
    const yearStart = data.slice(6);
    return getMonth(data) < monthStart && getMonth(data) !== monthStart
        ? parseInt(yearStart) + 1
        : parseInt(yearStart);
    
}

const getStartDeposit = (e) => {
    const data = e.target.value;
    const day = data.slice(0, 2);
    const month = getMonth(data)
    const year = getYear(data)
    const dataEnd = `${day}.${month}.${year}`

    if (data) {
        setEndDeposit(dataEnd)
    }
}

refs.startDeposit.addEventListener('focusout', getStartDeposit);
