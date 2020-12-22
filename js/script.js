const grossAmount= document.querySelector('.grossAmount');
const btn = document.querySelector('.calculate');
const health = document.querySelector('.health');
const costs = document.querySelector('.cost');
const charged = document.querySelector('.charged');
const downloaded = document.querySelector('.downloaded');
const pay = document.querySelector('.pay');
const health1 = 0;


const action = (e) => {
    e.preventDefault();
    health.value = health1;
    costs.value = (grossAmount.value * 20 / 100).toFixed(2);
    charged.value = ((grossAmount.value - costs.value) * 17 / 100).toFixed(2);
    downloaded.value = ((grossAmount.value - costs.value) * 17 / 100).toFixed();
    pay.value = (grossAmount.value - downloaded.value).toFixed(2);
}


btn.addEventListener('click', action);