import logo from './logo.svg';
// import './App.css';
import TaggableTable from "./components/taggableTable";
import FileReader from "./components/fileReader/FileReader";
import {remoteCall, removeAllListeners} from "@glassball/electron-client-remote";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    console.log(`App: First Render`);
    remoteCall('ui:start', 'STARTED');

    return () => {
      removeAllListeners();
      console.log(`App: Destroyed`);
    }
  });

  return (
    <div className="App">
      <h1>React Tally</h1>
      <div>
        <FileReader />
      </div>
      <div>
        {/*<TaggableTable />*/}
      </div>
    </div>
  );
}

export default App;
