import React, { useState, useEffect } from 'react'
import logo from './assets/logo.png';
import { countries } from './assets/countries';
import { useDispatch, useSelector } from 'react-redux';
import { dateActions } from '../store/actions/dateActions';
const Header = () => {
    const dispatch = useDispatch();
    const [countryCode, setCountryCode] = useState("PK");

    const handleChange = (event) => {
        setCountryCode(event.target.value)
    }
    const list = useSelector(state => state.dateReducer) 
 
    useEffect(() => {
        dispatch(dateActions(countryCode))
    }, [dispatch, countryCode])
    return (
        <>
            <head className="px-4 py-2 flex items-center justify-around">
                <div className="flex items-center">
                    <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
                    <h1 className="text-xl text-gray-500 flex item-center fond-bold">
                        Calendar
                    </h1>
                </div>
                <div className="flex items-center">
                    <select name="country" id="country" defaultValue={countryCode} onChange={handleChange} className="w-full outline-none h-10 px-4 py-2 bg-gray-200 border border-gray-200 rounded-lg">
                        {countries.map((country, index) => {
                            return <option key={index} value={country.code}>{country.label}</option>
                        })}
                    </select>
                </div>

            </head>
        </>
    )
}

export default Header

