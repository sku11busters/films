import React from "react";
import Stars from "./components/Stars";

const App: React.FC = () => {
  return (
    <div>
      <h1>Рейтинг фильма</h1>
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
    </div>
  );
};

export default App;
