import PropTypes from "prop-types"
import styles from './Button.module.css'

function Button({children, onClick, type}) {
    return (
        <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any,
  type: PropTypes.any
}

export default Button
