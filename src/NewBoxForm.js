import { useState } from "react";

const NewBoxForm = ({ createBox }) => {
  // define the initial state values
  // in this case it's an object
  const initialState = {
    color: "",
    height: "",
    width: "",
  };

  // create our piece of state using the initial state values
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    const { color, height, width } = formData;
    createBox(color, `${height}px`, `${width}px`)
    // setFormData(initialState)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(entry => ({...entry, [name]: value}))
   }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="heigh">Height</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />
    <button>Create Box</button>
    </form>
  );
};

export default NewBoxForm;
