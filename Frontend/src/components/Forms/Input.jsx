export const Input = ({ name, label, register, placeholder, errors }) => {
  return (
    <div className="input-container">
      <label className="font-[500] text-gray-700 tracking-tight text-sm tablet:text-base">
        {label}
      </label>
      <input {...register(name)} placeholder={placeholder} className="input autofill:bg-red-200" />
      <p className="text-red-500 text-[13px] font-medium leading-[13px] mt-1">
        {errors?.message}
      </p>
    </div>
  );
};
