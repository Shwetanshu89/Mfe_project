import React from "react";

// const AppFromMfe1 = React.lazy(() => import("mfe1/App"));

function App() {
  return (
    <div>
      <h1>MFE2</h1>
      <div>
        {/* <React.Suspense fallback="Loading Button">
          <AppFromMfe1 />
        </React.Suspense> */}
        <input placeholder="MFE2 InputBox" type="text"></input>
      </div>
      <h1>MFE2</h1>
    </div>
  );
}

export default App;
