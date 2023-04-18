import { FC } from "react";

interface VInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
  regex?: RegExp;
  required?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  error?: string;
}

export const VInput: FC<VInputProps> = (props: VInputProps) => {
  const inputClass = `input input-bordered${props.error ? " input-error" : ""}`;

  return (
    <div className="form-control">
      {props.label && <label className="label">{props.label}</label>}
      <input
        className={inputClass}
        onChange={props.onChange}
        onBlur={props.onBlur}
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
      />
      {props.error && <span className="text-xs text-error">{props.error}</span>}
    </div>
  );
};
