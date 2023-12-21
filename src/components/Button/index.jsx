//CSS
import styles from "./styles.module.css";

const BtnModal = (props) => {
  return (
    <button className={styles.btn} onClick={props.onclick}>
      {props.name}
    </button>
  );
};

export default BtnModal;
