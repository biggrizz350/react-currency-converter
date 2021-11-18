import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions
    } = props   //Destructure the props into the currencyOptions

    return (
        <div>
            <input type="number" className="input"/>
            <select>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))} {/*Translates array of currency options into actual options*/}
    
            </select>
        </div>
    )
}
