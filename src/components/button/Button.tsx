import "./_button.scss"
import Spinner from "../Spinner";
import React from "react";

interface ButtonProps {
  btnText: string,
  onClick?: () => void,
  theme: string,
  disabled?: boolean,
  type?: "button" | "submit" | "reset" ,
  loading?: boolean,
  variant?: string
}

const Button = ({
  btnText,
  onClick,
  theme = "primary",
  disabled = false,
  type = "button",
  loading = false,
  variant
}: ButtonProps) => {

  const handleClick = (e: any) => {
    e.preventDefault()
    onClick && onClick()
  }
  return (
    <button
      role="button"
      className={`cc-button ${loading ? 'cc-button--loading' : `cc-button--${theme}`} ${disabled && "cursor-not-allowed"} ${theme !== 'transparent' ? 'shadow-btnShadowOne': ''} ${variant}`}
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <Spinner containerVariant='mr-2'/>} {btnText}
    </button>
  )
}

export default Button;
