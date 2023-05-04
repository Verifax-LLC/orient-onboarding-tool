import React from "react";
import CurrencyInput from "react-currency-input-field";
import { CurrencyInputOnChangeValues } from "react-currency-input-field/dist/components/CurrencyInputProps";

interface VCurrencyInputProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  required: boolean;
  value: number;
  prefix: string;
  defaultValue: number;
  decimalsLimit: number;
  onValueChange: (
    value?: string,
    name?: string,
    values?: CurrencyInputOnChangeValues | undefined
  ) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
}

const VCurrencyInput: React.FC<VCurrencyInputProps> = (
  props: VCurrencyInputProps
) => {
  const inputClass = `input input-bordered${props.error ? " input-error" : ""}`;
  return (
    <div className="form-control">
      {props.label && <label className="label">{props.label}</label>}
      <CurrencyInput
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        prefix={props.prefix}
        defaultValue={props.defaultValue}
        decimalsLimit={props.decimalsLimit}
        onValueChange={props.onValueChange}
        onBlur={props.onBlur}
        className={inputClass}
      />
      {props.error && <span className="text-xs text-error">{props.error}</span>}
    </div>
  );
};

export default VCurrencyInput;
