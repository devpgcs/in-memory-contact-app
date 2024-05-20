import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant which will determine the background color
   */
  variant?: ButtonVariant;
}

const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  const background: Record<ButtonVariant, string> = {
    primary: "bg-purple-500",
    secondary: "bg-slate-500",
    danger: "bg-red-500",
  };

  return (
    <button {...props} className={`py-2 px-6 rounded-md text-white ${background[variant]} ${props.className ?? ""}`} />
  );
};

export default Button;
