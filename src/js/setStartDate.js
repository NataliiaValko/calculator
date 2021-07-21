import refs from './refs';
import currentDeposit from './currentDeposit';

const setEndDeposit = (date) => {
    if (date.includes('NaN')) {
        return
    }

    refs.endDeposit.value = date;
}

const getMonth = (date) => {
    const term = parseInt(currentDeposit.term);
    const monthStart = date.slice(3, 5);
    const monthEnd = (parseInt(monthStart) + term) > 12
        ? parseInt(monthStart) + term - 12
        : parseInt(monthStart) + term;
    
    return String(monthEnd).length === 1
        ? `0${monthEnd}`
        : monthEnd;
}

const getYear = (date) => {
    const monthStart = date.slice(3, 5);
    const yearStart = date.slice(6);
    return getMonth(date) > monthStart
        ? parseInt(yearStart)
        : parseInt(yearStart) + 1;
}

const setStartDeposit = (e) => {
    const date = e.target.value;
    currentDeposit.dateStart = date;
    setEnd(date);
}

const setEnd = (date) => {
    if (date) {
        const day = date.slice(0, 2);
        const month = getMonth(date)
        const year = getYear(date)
        const dateEnd = `${day}.${month}.${year}`
        setEndDeposit(dateEnd)
    }
}

refs.startDeposit.addEventListener('focusout', setStartDeposit);
export default setEnd;