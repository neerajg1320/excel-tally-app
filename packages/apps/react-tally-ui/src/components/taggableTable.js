import {useMemo} from "react";
import {BasicTable} from '@glassball/table';

const TaggableTable = () => {
  const data = useMemo(() => {
    return [
      {
        name: "Alice",
        age: 25
      },
      {
        name: "Bob",
        age: 26
      },
    ]
  }, []);

  const columns = useMemo(
      () => {
        return [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Type",
            accessor: "age",
          }
        ]
      }, []);

  return (
      <BasicTable {...{data, columns}} />
  );
}

export default TaggableTable;