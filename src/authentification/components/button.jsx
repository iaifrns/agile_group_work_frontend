import '../login.css'

const CustomButton = ({ text }) => {
  return (
    <button type="submit" class="btn btn-primary">
      {text}
    </button>
  );
};

export { CustomButton };
