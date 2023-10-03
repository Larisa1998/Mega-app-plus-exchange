import "./Button.css";

const Button = ({ text, style, onClick = () => {} }) => {
  return (
    <button className={'btn my-3 btn-'+style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
