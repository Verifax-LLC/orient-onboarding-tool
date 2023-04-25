import { FC } from "react";
import "./VSelect.css";

interface Option {
  value: string | number;
  label: string;
}

interface VSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  required?: boolean;
  name?: string;
  value?: string | number;
  error?: string;
  options: Option[];
}

export const VSelect: FC<VSelectProps> = (props: VSelectProps) => {
  const selectClass = `select select-bordered${
    props.error ? " select-error" : ""
  }`;

  return (
    <div className="form-control">
      {props.label && <label className="label">{props.label}</label>}
      <select
        className={selectClass}
        onChange={props.onChange}
        required={props.required}
        name={props.name}
        value={props.value}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {props.error && <span className="text-xs text-error">{props.error}</span>}
    </div>
  );
};
