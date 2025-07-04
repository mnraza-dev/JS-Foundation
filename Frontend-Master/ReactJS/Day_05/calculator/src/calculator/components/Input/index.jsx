import "./style.css";
export default function Input({placeholder = "", onInput = () => {}}) {
  function handleInput (e) {
    onInput(e.target.value);
  };
  return (
    <input
      onInput={handleInput}
      placeholder={placeholder}
      className="input"
      type="text"
    />
  );
}
