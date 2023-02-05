import logo from './logo.svg';
import './App.css';
import TaggableTable from "./components/taggableTable";

function App() {
  return (
    <div className="App">
      <h1>React Tally</h1>
      <div>
        <TaggableTable />
      </div>
    </div>
  );
}

export default App;
