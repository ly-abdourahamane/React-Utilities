import React, { useState, useEffect } from "react";

export default function MyHooks(props) {
  const [count, setCount] = useState(0);
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [name, setName] = useState("Djeina");
  const [selectedValue, setSelectedValue] = useState("");

  const { numbers } = props;

  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number * 1024}</li>
  ));

  useEffect(() => {
    console.log(props);
  });

  function clickMe() {
    console.log("click me");
  }

  function handleClick(e) {
    e.preventDefault();
    console.log("Le lien a été cliqué.", e);
  }

  function handleClickToggle() {
    setIsToggleOn(!isToggleOn);
    setCount(count + 1);
  }

  function handleSubmit() {
    console.log(name, selectedValue);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function selectCandleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>Vous avez cliqué {count} fois</p>
      <h2>Il est {new Date().toLocaleTimeString()}.</h2>

      <button onClick={clickMe}>Click me</button>
      <div>{/* <a href="#" onClick={handleClick}>Clique ici</a> */}</div>
      <div>
        <button onClick={handleClickToggle}>{isToggleOn ? "ON" : "OFF"}</button>
      </div>

      <div>
        <ul>{listItems}</ul>
      </div>

      <h1>Gestion de formulaires</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom
          <input type="text" value={name} onChange={handleChange} />
        </label>

        <div>
          Select
          <label>
            Choisissez votre parfum favori :
            <select value={selectedValue} onChange={selectCandleChange}>
              <option value="grapefruit">Pamplemousse</option>
              <option value="lime">Citron vert</option>
              <option value="coconut">Noix de coco</option>
              <option value="mango">Mangue</option>
            </select>
          </label>
        </div>

        <p>
          <input type="file" />
        </p>

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
