const Textarea = ({
  col,
  row,
  placeholder,
  className,
  errors,
  name,
  ...props
}) => {
  return (
    <>
      <textarea
        className={`form-textarea ${className}`}
        cols={col}
        rows={row}
        placeholder={placeholder}
        name={name}
        {...props}
      ></textarea>
      {errors ? <span className="errors">{errors}</span> : ""}
    </>
  );
};

export default Textarea;
