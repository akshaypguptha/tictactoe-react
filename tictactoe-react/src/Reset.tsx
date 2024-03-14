interface Props {
  onClick: () => void;
}
const Reset = (props: Props) => {
  return (
    <button type="button" className="btn btn-warning" onClick={props.onClick}>
      Reset Game
    </button>
  );
};

export default Reset;
