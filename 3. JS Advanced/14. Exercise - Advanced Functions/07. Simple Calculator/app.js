function calculator() {
    let [firstNum, secondNum, resultCell] = '';

    function clearInputs() {
        firstNum.value = '';
        secondNum.value = '';
    }

    let functions = {
        init: function (selector1, selector2, resultSelector) {
            firstNum = document.querySelector(selector1);
            secondNum = document.querySelector(selector2);
            resultCell = document.querySelector(resultSelector);
        },

        add: () => {
            let result = Number(firstNum.value) + Number(secondNum.value);
            resultCell.value = result;
            clearInputs();
        },

        subtract: () => {
            let result = Number(firstNum.value) - Number(secondNum.value);
            resultCell.value = result;
            clearInputs();
        }   
    }
    return functions;
}


const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



