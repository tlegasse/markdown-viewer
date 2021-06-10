import React from "react";
import { MarkdownViewer } from "./features/markdown-viewer/MarkdownViewer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tanner's fantastic markdown previewer
      </header>
      <div className="body">
        <MarkdownViewer />
      </div>
    </div>
  );
}

export default App;
