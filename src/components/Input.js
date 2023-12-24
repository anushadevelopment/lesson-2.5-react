import styles from "./Input.module.css"
function Input({label, value, onChange}) {
    const handleChange = (event) => {
        onChange(event.target.value);
    }
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input className={styles.input} value={value} onChange={handleChange}></input>
    </div>
  );
}

export default Input;
