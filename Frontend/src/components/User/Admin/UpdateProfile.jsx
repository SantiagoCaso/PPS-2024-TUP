const UpdateProfile = () => {
  return (
    <form
      action=""
      className="space-y-12 border-4 border-black border-solid p-[10px] rounded-lg m-5 h-full"
    >
      <input type="text" name="nombre" placeholder="Nombre" />
      <input type="email" name="email" placeholder="Correo electrónico" />
    </form>
  );
};

export default UpdateProfile;
