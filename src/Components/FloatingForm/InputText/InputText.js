import "./InputText.css";

const InputText = ({ placeholder, value, setValue }) => {
  return (
    <input
      className="input-text my-3"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default InputText;
