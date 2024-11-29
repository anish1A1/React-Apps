import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  classNameName = "",
}) {
  const amountInputId = useId();

  return (
    <div classNameName={`bg-white p-3 rounded-lg text-sm flex ${classNameName}`}>
      <div classNameName="w-1/2">
        <label htmlFor={amountInputId} classNameName="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          classNameName="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
         
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div classNameName="w-1/2 flex flex-wrap justify-end text-right">
        <p classNameName="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          classNameName="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
