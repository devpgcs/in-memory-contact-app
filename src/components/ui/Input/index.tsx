interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label of the input, if any.
   */
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="w-full space-y-1">
      {!!label && <label className="font-semibold text-slate-700">{label}</label>}
      <input {...props} className="border p-3 rounded-md block w-full" />
    </div>
  );
};

export default Input;
