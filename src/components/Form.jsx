import React from "react";

export default function Form(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!props.description) return;

    const newItem = {
      description: props.description,
      quantity: props.quantity,
      packed: false,
      id: Date.now(),
    };

    props.setDescription("");
    props.setQuantity(1);
  };

  const handleDescChange = (event) => {
    props.setDescription(event.target.value);
  };

  const handleQuantityChange = (event) => {
    props.setQuantity(Number(event.target.value));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={props.quantity} onChange={handleQuantityChange}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={props.description}
        onChange={handleDescChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
}
