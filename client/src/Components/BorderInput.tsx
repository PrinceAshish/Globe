import styles from './InputWithLabel.module.css';

const BorderInput = ({ label, ...inputProps }:string ) => (
  <div className={styles.inputContainer}>
    <label className={styles.label}>{label}</label>
    <input className={styles.input} {...inputProps} />
  </div>
);

export default BorderInput;