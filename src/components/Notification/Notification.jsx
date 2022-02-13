import styles from "./Notification.module.css"
import PropTypes from "prop-types";

const Notification = ({message}) => ( 
    <p className={styles.title}>{message}</p>
)

Notification.propTypes = {
  message: PropTypes.string,
}

export default Notification;