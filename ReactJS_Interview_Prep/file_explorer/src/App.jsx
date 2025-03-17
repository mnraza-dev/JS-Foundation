import React, { useState } from "react";
import explorer from "./data/folderData.js";
import Folder from "./components/Folder.jsx";
const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  console.log(explorerData);

  return (
    <div>
      <h1>File Explorer</h1>
      <Folder explorer={explorerData} />
    </div>
  );
};

export default App;
