const currency_one = document.getElementById("currency_one");
const amount_one = document.getElementById("amount-one");
const currency_two = document.getElementById("currency-two");
const amount_two = document.getElementById("amount-two");

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
    const currencyOneValue = currency_one.value;
    const currencyTwoValue = currency_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.rates[currencyTwoValue];

            rate.innerText = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue}`;

            amount_two.value = (amount_one.value * rate).toFixed(2);
        });
}
currency_one.addEventListener("click", calculate);
amount_one.addEventListener("input", calculate);
currency_two.addEventListener("click", calculate);
amount_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
});
calculate();