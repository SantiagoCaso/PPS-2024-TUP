

export const Input = ({ name,label, register,placeholder, errors }) => {
  return (
    <div className="input-container">
      <label className="font-[500]">{label}</label>
      <input {...register(name)} placeholder={placeholder} className="input" />
      <p>{errors?.message}</p>
    </div>
  );
};
