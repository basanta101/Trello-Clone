// Button.js
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onClick, children, type = "primary", classes = {} }) => {
    return (
        <button className={`${styles.button} ${styles[type]} ${classes?.button}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']),
    classes: PropTypes.object
};

export default Button;
