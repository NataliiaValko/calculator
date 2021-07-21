import toastr from 'toastr';

const messageAmountInvalid = 'Enter amount no more 1000.00, please!';
const messageTermInvalid = minTerm => `You can’t use less than the minimum term! Increase it please! Minimal term is ${minTerm} months.`;

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

const messageAmountWarning = () => toastr.warning(messageAmountInvalid);
const messageTermError = (minTerm) => toastr.error(messageTermInvalid(minTerm));

export { messageAmountWarning, messageTermError }