import { HTMLAttributes } from "react";

interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The label of the counter. E.g.: "By email: value" or "By phone: value".
   */
  label: string;
  /**
   * The value of the counter. E.g.: "Label: 10".
   */
  value: number;
}

const Counter = ({ label, value, ...props }: CounterProps) => {
  return (
    <div {...props} className={"rounded-md py-2 px-4 " + (props.className ?? "")}>
      <p className="text-sm text-slate-700">
        {label}: {value}
      </p>
    </div>
  );
};

export default Counter;
