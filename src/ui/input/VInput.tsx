import { FC } from "react";
import "./VInput.css";

interface VInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
  regex?: RegExp;
  required?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  error?: string;
  adornment?: string;
}

export const VInput: FC<VInputProps> = (props: VInputProps) => {
  const inputClass = `input input-bordered${props.error ? " input-error" : ""}`;

  return (
    <div className="form-control">
      {props.label && <label className="label">{props.label}</label>}
      <div
        className={`relative input-container${
          props.adornment ? " input-with-adornment" : ""
        }`}
      >
        {props.adornment && (
          <div className="adornment absolute left-0 top-0 bottom-0 flex items-center pl-2 text-gray-400 border-r border-gray-300">
            {props.adornment}
          </div>
        )}
        <input
          className={inputClass}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required={props.required}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          style={
            props.adornment
              ? { paddingLeft: `calc(${props.adornment.length}ch)` }
              : {}
          }
        />
      </div>
      {props.error && <span className="text-xs text-error">{props.error}</span>}
    </div>
  );
};
