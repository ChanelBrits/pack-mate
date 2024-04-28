import React from "react";

export default function Item({ item }) {
  const styles = {
    textDecoration: item.packed ? "line-through" : "none",
  };

  return (
    <li>
      <span style={styles}>
        {item.quantity} {item.description}
      </span>
      <button className="delete">❌</button>
    </li>
  );
}
