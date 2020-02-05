import React, { Fragment } from 'react'
import classNames from 'classnames'

import { CurrencyListItem } from '../index'

const CurrencyList = ({ currencies, listType, onUpdateCurrencies }) => (
    <Fragment>
        <h5 className="currency-list__title">Currency List: {listType}</h5>
        <ul className="currency-list">
            {currencies.map(currency => (
                <CurrencyListItem
                    key={currency.key}
                    currency={currency}
                    listType={listType}
                    onUpdateCurrencies={onUpdateCurrencies}
                />
            ))}
        </ul>
    </Fragment>
)

export default CurrencyList
