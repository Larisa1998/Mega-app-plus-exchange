import "./FloatingForm.css";
import InputText from "./InputText/InputText";
import Button from "./Button/Button";

const FloatingForm = ({ title, inputs, submit }) => {
  return (
    <div className="floating-form d-flex flex-column justify-content-center align-items-center">
      <p className="text-32">{title}</p>
      {inputs.length > 0 &&
        inputs.map((input, key) => (
          <InputText
            key={key}
            placeholder={input.placeholder}
            value={input.defaultValue}
            setValue={input.setValue}
          />
        ))}
      <Button
        text={submit.text}
        style={submit.style}
        onClick={submit.onClick}
      />
    </div>
  );
};
export default FloatingForm;
