import { useContext } from "react";
import { ColorContext } from "../App";

const Button = () => {
    const color = useContext(ColorContext)
  return (
    <>
      <section
        style={{ height: "200px", width: "100vw", backgroundColor: color }}
      ></section>
    </>
  );
};

export default Button;
