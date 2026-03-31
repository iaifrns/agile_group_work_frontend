
const TopMenuItem = ({ name, active, onclick }) => {
  return (
    <button className={"tab " + active} onClick={onclick}>
      {name}
    </button>
  );
};

export default TopMenuItem;
