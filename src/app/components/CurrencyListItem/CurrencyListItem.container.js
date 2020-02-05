import React, { useCallback } from 'react'

import Component from './CurrencyListItem.component'

const CurrencyListItem = ({ currency, listType, onUpdateCurrencies }) => {
    const onUpdateCurrency = useCallback(() => {
        onUpdateCurrencies({
            key: currency.key,
            isActive: !currency.isActive,
        })
    }, [currency.key, currency.isActive])

    return <Component currency={currency} listType={listType} onUpdateCurrency={onUpdateCurrency} />
}

export default CurrencyListItem
