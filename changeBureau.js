function changeBureau(input) {

    let bitcoinAmount = Number(input[0]);
    let chineseYuanAmount = Number(input[1]);
    let comission = Number(input[2]);

    let bitcoinToLv = 1168;
    let yuanToUsd = 0.15;
    let usdToLv = 1.76;
    let eurToLv = 1.95;

    let bitcoinInLv = bitcoinAmount * bitcoinToLv;
    let yuanInUsd = chineseYuanAmount * yuanToUsd;
    let yuanInLv = yuanInUsd * usdToLv;
    
    let totalNoComission = bitcoinInLv + yuanInLv;

    let comissionAmount = (comission/100) * totalNoComission;

    let total = totalNoComission - comissionAmount;

console.log((total/1.95).toFixed(2));
}

changeBureau(['1','5','5']);