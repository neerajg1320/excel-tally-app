import logo from './logo.svg';
import './App.css';
import TaggableTable from "./components/taggableTable";
import {excelToJson} from "@glassball/excel";

function App() {
  return (
    <div className="App">
      <h1>React Tally</h1>
      <div>
        <input type="file" />
      </div>
      <div>
        {/*<TaggableTable />*/}
      </div>
    </div>
  );
}

export default App;
