/* eslint-disable react-hooks/exhaustive-deps */
import { top10HighestCurrency, top10LowestCurrency } from '../fetch/exchange';
import BarChartApp from '../Components/BarChartApp/BarChartApp';
import PieChartApp from '../Components/PieChartApp/PieChartApp';
import { useEffect, useState } from 'react';

const Exchange = () => {
    const [highestCurrency, setHighestCurrency] = useState([]);
    const [lowestCurrency, setLowestCurrency] = useState([]);

    const getCurrencyData = async () => {
        setHighestCurrency(await top10HighestCurrency());
        setLowestCurrency(await top10LowestCurrency());
    }
    
    useEffect(() => {
        getCurrencyData();

    },[])

    
    let barChartDataHighest = []
    let barChartSeriesHighest = []
    let barChartDataLowest = []
    let barChartSeriesLowest = []

    let pieLowest = [];
    let pieHighest = [];



    const formatCurrencyData = () => {

        highestCurrency.forEach((currency, key) => {
            barChartDataHighest.push(currency[1] );
            barChartSeriesHighest.push(currency[0]);
            pieHighest.push({
                id: key,
                value:currency[0],
                label: currency[1]
            })
            
        })
        lowestCurrency.forEach((currency, index) => {
            barChartDataLowest.push(currency[1] );
            barChartSeriesLowest.push(currency[0]);
            pieLowest.push({
                id: index,
                value:currency[0],
                label: currency[1]
            })
        })
    }

    console.log('highestCurrency:', highestCurrency);
    console.log('lowestCurrency:', lowestCurrency);


    if(lowestCurrency.length > 0 && highestCurrency.length > 0) {
        formatCurrencyData();
    }


    return (
        <div className="countries">
            {highestCurrency.length > 0 & lowestCurrency.length > 0 &&
            <div className='d-flex flex-row flex-wrap row'>
                <div className='col-6'>
                    <BarChartApp data={barChartDataHighest} series={barChartSeriesHighest} />
                </div>
                <div className='col-6'>
                    <BarChartApp data={barChartDataLowest} series={barChartSeriesLowest} />
                </div>
                <div className='col-6'>
                    <PieChartApp data={pieHighest} />
                </div>
                <div className='col-6'>
                    <PieChartApp data={pieLowest} />
                </div>
            </div>
            }
        </div>
    )
}
export default Exchange;