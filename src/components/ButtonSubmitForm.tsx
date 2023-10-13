const textButtonSubmitForm = {
  button: "Enviar",
}

const ButtonSubmitForm = () => {
  return (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex ml-4 mt-4 md:mt-0"
    >
      <button type="submit" className="rounded-lg bg-defaultRed font-bold text-lg p-3 border-none cursor-pointer text-white hover:text-hoverdefaultRed">
        {textButtonSubmitForm.button}
      </button>
    </div>
  );
};

export default ButtonSubmitForm;
