import React from "react";

const AppFromMfe1 = React.lazy(() => import("mfe1/App"));
const AppFromMfe2 = React.lazy(() => import("mfe2/App"));

function App() {
  return (
    <div>
      <h1>Container App</h1>
      <AppFromMfe1 />
      <AppFromMfe2 />
    </div>
  );
}

export default App;
