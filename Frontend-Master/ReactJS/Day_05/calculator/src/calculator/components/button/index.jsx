import "./style.css";
export default function Button({
  className = "button",
  label = "",
  onClick = () => {},
}) {
  return (
    <button className={`${className} button`} onClick={onClick}>
      {label}
    </button>
  );
}
