export const InputPassword = ({
  name,
  label,
  register,
  placeholder,
  errors,
}) => {
  return (
    <div className="input-container">
      <label className="font-[500]">{label}</label>
      <input
        type="password"
        {...register(name)}
        placeholder={placeholder}
        className="input"
      />
      <p>{errors?.message}</p>
    </div>
  );
};
