export const ReUsableButton = ({ text, onClick, isSubmitBtn = false }) => (
  <button type={isSubmitBtn ? 'submit' : 'button'} onClick={onClick}>
    {text}
  </button>
);
