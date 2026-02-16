import '../login.css'

const CustomButton = ({ text, submit }) => {
  return (
    <button type="submit" onClick={submit} class="btn btn-primary">
      {text}
    </button>
  );
};

export { CustomButton };
