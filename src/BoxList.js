import { useState } from "react";
import Box from "./Box";
import "./BoxList.css";
import NewBoxForm from "./NewBoxForm"
import { v4 as uuid } from 'uuid';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const createBox = (color, width, height) => {
    setBoxes(() => ([...boxes, {backgroundColor: color, width: width, height: height, id: uuid()}]));
  };

  const remove = (id) => {
    setBoxes(boxes.filter(item => item.id !== id))
  }

  return (
    <div className="box-container">
      <h1>Boxes!</h1>
      <NewBoxForm createBox={createBox}/>
      {boxes.map(box => (
        <Box
        backgroundColor={box.backgroundColor}
        width={box.width}
        height={box.height}
        key={box.id}
        remove={() => remove(box.id)}
      />
      ))}
    </div>
  );
};

export default BoxList;
