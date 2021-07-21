import currentDeposit from './currentDeposit';
import refs from './refs';
import listDeposits from './listDeposits';
import { roundAmount } from './setAmount';

const setPercentDayTextContent = () => {
    refs.percentDayDeposit.textContent = `${roundAmount(currentDeposit.percent / 30)}%`
}

const setPercentCurrentDeposit = () => {
    listDeposits.forEach((el) => {
        if (el.type === currentDeposit.type) {
            currentDeposit.percent = el.percent[currentDeposit.currency]
        }
    });
}

const setPercent = () => {
    if (!currentDeposit.type) {
        return
    }
    
    setPercentCurrentDeposit();
    setPercentDayTextContent();
}

export default setPercent