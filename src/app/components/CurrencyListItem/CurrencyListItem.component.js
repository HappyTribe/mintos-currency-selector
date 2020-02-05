import React from 'react'
import classNames from 'classnames'

const CurrencyListItem = ({ currency, listType, onUpdateCurrency }) => (
    <div
        className={classNames('currency-list__item', {
            'is-active': currency.isActive && listType === 'active',
        })}
        onClick={listType === 'all' ? onUpdateCurrency : () => {}}>
        {listType === 'all' && (
            <input type="checkbox" checked={currency.isActive} onChange={() => {}} />
        )}
        {listType === 'active' && (
            <button className="currency-list__close" onClick={onUpdateCurrency}>
                X
            </button>
        )}
        {currency.key}
    </div>
)

export default CurrencyListItem
