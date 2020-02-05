import { hot } from 'react-hot-loader'
import React, { useState } from 'react'

import { CurrencyList } from './components/index'
import { initialCurrencies } from './state'

import './styles.scss'

const App = () => {
    const [currencies, setCurrencies] = useState(initialCurrencies)

    const onUpdateCurrencies = ({ key, isActive }) => {
        const newCurrencies = currencies.slice()
        newCurrencies.find(currency => currency.key === key).isActive = isActive
        setCurrencies(newCurrencies)
    }

    return (
        <div className="container">
            <CurrencyList
                currencies={currencies.filter(currency => currency.isActive)}
                listType="active"
                onUpdateCurrencies={onUpdateCurrencies}
            />
            <CurrencyList
                currencies={currencies}
                listType="all"
                onUpdateCurrencies={onUpdateCurrencies}
            />
        </div>
    )
}

export default hot(module)(App)
