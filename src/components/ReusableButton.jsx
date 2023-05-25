import classes from './ReusableButton.module.scss';

export const ReusableButton = ({
  text,
  onClick,
  isSubmitBtn = false,
  className = '',
  ...rest
}) => (
  <button
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    className={`${className} ${classes.button}`}
    type={isSubmitBtn ? 'submit' : 'button'}
    onClick={onClick}
  >
    {text}
  </button>
);
