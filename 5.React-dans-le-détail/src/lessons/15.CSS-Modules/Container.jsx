import "./Container.css";
import styles from "./Container.module.css";

export default function Container() {
  console.log(styles);
  
  return (
    <div>
      <h1>CSS Modules</h1>
      <h1 className="title">Titre</h1>
      <h1 className={styles.title}>Titre CSS Modules</h1>
    </div>
  )
}
