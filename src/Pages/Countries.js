/* eslint-disable react-hooks/exhaustive-deps */
import {top15HighestPopCountries, top15LowestPopCountries} from '../fetch/countries';
import BarChartApp from '../Components/BarChartApp/BarChartApp';
import PieChartApp from '../Components/PieChartApp/PieChartApp';
import { useEffect, useState } from 'react';

const Countries = () => {
    const [highestPop, setHighestPop] = useState([]);
    const [lowestPop, setLowestPop] = useState([]);

    const getCountriesData = async () => {
        setHighestPop(await top15HighestPopCountries());
        setLowestPop(await top15LowestPopCountries());
    }

    useEffect(() => {
        getCountriesData();
    },[])



    let barChartDataHighest = []
    let barChartSeriesHighest = []
    let barChartDataLowest = []
    let barChartSeriesLowest = []

    let pieLowest = [];
    let pieHighest = [];

    const formatCountryData = () => {
        highestPop.forEach((country, index) => {
            barChartDataHighest.push(country.name.common );
            barChartSeriesHighest.push(country.population);
            pieHighest.push({
                id: index,
                value:country.population,
                label: country.name.common
            })
        })
        lowestPop.forEach((country, index) => {
            barChartDataLowest.push(country.name.common );
            barChartSeriesLowest.push(country.population);
            pieLowest.push({
                id: index,
                value:country.population,
                label: country.name.common
            })
        })
    }

    if(lowestPop.length > 0 && highestPop.length > 0) {
        formatCountryData();
    }


    return (
        <div className="countries">
            {highestPop.length > 0 & lowestPop.length > 0 &&
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
export default Countries;