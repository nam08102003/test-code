const Button = ({ type, value, className, ...props }) => {
  return (
    <button type={type} className={`btn ${className}`} {...props}>
      {value}
    </button>
  );
};

export default Button;
