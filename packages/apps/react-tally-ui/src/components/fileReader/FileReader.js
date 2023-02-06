// import ReadExcel from "./readExcel";
import {useState} from "react";
import {ReadExcel} from "@glassball/read-excel";

const FileReader = () => {
  const [data, setData] = useState([]);

  const handleComplete = (json) => {
    console.log(`json:`, json);
    setData(json.data);
  };

  return (
    <>
      <ReadExcel onComplete={handleComplete} />
      <pre>
        {data && JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
}

export default FileReader;