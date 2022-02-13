import styles from "./FeedbackOptions.module.css"
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
  return (
    <>
      {Object.keys(options).map(key => (
        <button
          onClick={onLeaveFeedback}
          type="button"
          className={styles.button}
          key={key}
          value={key}
        >{key}</button>
      ))}
    </>
  );  
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
