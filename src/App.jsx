import React from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div>
      <Logo />
      <Form
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <PackingList />
      <Stats />
    </div>
  );
}
