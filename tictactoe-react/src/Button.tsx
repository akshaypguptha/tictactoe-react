import { useState } from "react";

interface Props {
  curPlayer: string;
  // pos: number;
  value: string;
  onClick: () => boolean;
}

const Button = (props: Props) => {
  let buttonStyle = {
    color: "",
    width: "4ch",
    height: "4ch",
    align: "center",
    background: "",
  };

  let setButtonColor: any;
  let setBackgroundColor: any;
  [buttonStyle.color, setButtonColor] = useState("");
  [buttonStyle.background, setBackgroundColor] = useState("white");

  const handleClick = () => {
    if (props.curPlayer === "W") {
      return;
    }
    if (props.onClick() === true) {
      if (props.curPlayer === "X") {
        setButtonColor("green");
      } else {
        setButtonColor("red");
      }
      setBackgroundColor("cyan");
    }
  };

  return (
    <button
      type="button"
      className="btn btn-outline-primary"
      data-bs-toggle="button"
      style={buttonStyle}
      onClick={handleClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
