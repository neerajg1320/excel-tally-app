import logo from './logo.svg';
// import './App.css';
import TaggableTable from "./components/taggableTable";
import FileReader from "./components/fileReader/FileReader";

function App() {

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
