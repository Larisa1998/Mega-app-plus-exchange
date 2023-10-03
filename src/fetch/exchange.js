import axios from "axios";

const getCurrency = async () => {
    let currency;
    await axios.get('https://api.exchangerate.host/latest/?base=RON').then(res => currency = res.data);
    console.log(currency.rates)
    
    return currency;
}

export const top10HighestCurrency = async () => {
    const currency = await getCurrency();
    console.log(currency);

    const currencyKeyArray = Object.keys(currency.rates);
    const currencyValueArray = Object.values(currency.rates);

    console.log(currencyKeyArray);
    console.log(currencyValueArray);
    
    let top10 = [];
    for(let i = 0; i < currencyValueArray.length - 1; i++) {
        for(let j = i + 1; j < currencyValueArray.length; j++) {
            if(currencyValueArray[i] < currencyValueArray[j]) {
                let aux = currencyValueArray[i];
                let aux2 = currencyKeyArray[i];
                currencyValueArray[i] = currencyValueArray[j];
                currencyKeyArray[i] = currencyKeyArray[j];
                currencyValueArray[j] = aux;
                currencyKeyArray[j] = aux2;
            }
        }
    }
    for(let i = 0; i < 10; i++)
    top10[i] = [currencyValueArray[i], currencyKeyArray[i]]
        console.log(top10);
    // for(let i = 0; i < 10; i++)
    //     top10[i] = currencyKeyArray[i]
    //     console.log(top10);
    return top10;
}


export const top10LowestCurrency = async () => {
    const currency = await getCurrency();
    console.log(currency);

    const currencyKeyArray = Object.keys(currency.rates);
    const currencyValueArray = Object.values(currency.rates)

    console.log(currencyKeyArray);
    console.log(currencyValueArray);
    
    let top10 = [];
    for(let i = 0; i < currencyValueArray.length - 1; i++) {
        for(let j = i + 1; j < currencyValueArray.length; j++) {
            if(currencyValueArray[i] > currencyValueArray[j]) {
                let aux = currencyValueArray[i];
                let aux2 = currencyKeyArray[i];
                currencyValueArray[i] = currencyValueArray[j];
                currencyKeyArray[i] = currencyKeyArray[j];
                currencyValueArray[j] = aux;
                currencyKeyArray[j] = aux2;
            }
        }
    }
    for(let i = 0; i < 10; i++)
        top10[i] = [currencyValueArray[i], currencyKeyArray[i]]
        console.log(top10);
    // for(let i = 0; i < 10; i++)
    //     top10[i] = currencyKeyArray[i]
    //     console.log(top10);
    return top10;
}

