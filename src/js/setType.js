import refs from './refs';
import currentDeposit from './currentDeposit';
import setPercent from './setPercent';
import actionRefreshForm from './refreshForm';

const getTypeDeposit = (e) => {
    currentDeposit.type = e.target.value;
    setPercent();
    actionRefreshForm.setHeightBoxProfitChart();
    actionRefreshForm.setProfit();
    actionRefreshForm.setTextProfitChart();
    actionRefreshForm.setTotalPercent();
    actionRefreshForm.setResultTotalText();
}

refs.typeDeposit.addEventListener('change', getTypeDeposit)