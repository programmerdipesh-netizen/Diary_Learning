function Button({
  text,
  children,
  bgColor,
  textColor,
  borderColor,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg border-2 ${bgColor} ${textColor} ${borderColor} ${className}`}
    >
      {children || text}
    </button>
  );
}

export default Button;
