import React, { useState } from "react";
import "./App.css";
import { story } from "./story";
import Matrix from "./matrix";
import { toGrid } from "./helpers";

function App() {
  const [position, setPosition] = useState([]);

  let selected = story;
  for (var i = 0; i < position.length; i++) {
    selected = selected.options[position[i]];
  }

  const list = selected?.options
    ? toGrid(
        // eslint-disable-next-line no-labels
        // eslint-disable-next-line no-unused-expressions
        selected.options.map((option) => {
          return {
            html: `
        <h2>${option.title}</h2>
        <img src="${option.img}" style="width:20rem;max-width:100%;max-height:100%;"/>
      `,
          };
        })
      )
    : [];
  const onClickOption = (index, cellIndex) => {
    let elementIndex = index * list[0].length + cellIndex;
    setPosition([...position, elementIndex]);
  };

  return (
    <>
      <h1>{selected.title}</h1>
      <h4>{selected.text}</h4>
      {selected.options ? (
        <Matrix list={list} params={{ childs: { onClick: onClickOption } }} />
      ) : (
        <button onClick={() => setPosition([])}>Empezar de cero</button>
      )}
      {!!position.length && (
        <button onClick={() => setPosition([...position.slice(0, -1)])}>
          deshacer
        </button>
      )}
    </>
  );
}

export default App;
