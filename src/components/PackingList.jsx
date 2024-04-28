import React from "react";
import Item from "./Item";
import { initialItems } from "../listData.js";

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
