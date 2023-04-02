const Input = ({
  className,
  label,
  name,
  placeholder,
  type,
  errors,
  ...props
}) => {
  return (
    <div className="form-input">
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {errors ? <span className="errors">{errors}</span> : ""}
    </div>
  );
};

export default Input;
