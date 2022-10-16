import React from "react";
import Form from "./components/Form";
import { fundsSelector } from "./redux/features/funds/fundsSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const funds = useAppSelector(fundsSelector);
  return (
    <>
      <ul>
        {funds.map(({ value, timestamp }, index) => (
          <li key={index}>
            {value} - {new Date(timestamp).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <Form />
    </>
  );
}

export default App;
