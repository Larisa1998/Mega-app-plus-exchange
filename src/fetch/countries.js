import axios from "axios";

const getCountries = async () => {
    let countries;
    await axios.get('https://restcountries.com/v3.1/all').then(res => countries = res.data)

    return countries
}

export const top15HighestPopCountries = async () => {
    const countries = await getCountries();
    
    let top15 = [];
    for(let i = 0; i < countries.length - 1; i++) {
        for(let j = i + 1; j < countries.length; j++) {
            if(countries[i] < countries[j]) {
                let aux = countries[i];
                countries[i] = countries[j];
                countries[j] = aux;
            }
        }
    }
    console.log(top15)
    for(let i = 0; i < 15; i++)
        top15[i] = countries[i]
    return top15;
}

export const top15LowestPopCountries = async () => {
    const countries = await getCountries();
    let top15 = [];
    for(let i = 0; i < countries.length - 1; i++) {
        for(let j = i + 1; j < countries.length; j++) {
            if(countries[i] > countries[j]) {
                let aux = countries[i];
                countries[i] = countries[j];
                countries[j] = aux;
            }
        }
    }
    for(let i = 0; i < 15; i++)
        top15[i] = countries[i]
    return top15;
}