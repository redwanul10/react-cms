import React, { useContext, useEffect, useMemo } from "react";
import Table from "rc-table";
import { Link, useParams } from "react-router-dom";
import { stateContext } from "../components/StateProvider";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    render: (value) => <div className="column1">{value}</div>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 100,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 200,
  },
  {
    title: "Operations",
    dataIndex: "",
    key: "operations",
    render: () => (
      <>
        <Link to="/content/post/create">Edit</Link>
        <Link to="/content/post/create">View</Link>
      </>
    ),
  },
];

const generateColumns = (list, type) => {
  if (!list) return;
  const col = [];

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    let obj = {
      title: element.key,
      dataIndex: element.key,
      key: element.key,
      width: 100,
    };
    if (index === 0) {
      obj.render = (value) => <div className="column1">{value}</div>;
    }
    col.push(obj);
  }

  col.push({
    title: "Operations",
    dataIndex: "",
    key: "operations",
    render: () => (
      <>
        <Link to={`/content/${type}/create`}>Edit</Link>
        <Link to={`/content/${type}/create`}>View</Link>
      </>
    ),
  });

  return col;
};

const data = [
  { name: "Jack", age: 28, address: "some where", key: "1" },
  { name: "Rose", age: 36, address: "some where", key: "2" },
];
export default function Landing(props) {
  console.log(props.schema, "schema");

  const { state } = useContext(stateContext);
  const params = useParams();

  useEffect(() => {
    props.setFields(state.contentTypes);
  }, [params?.type]);

  const cols = useMemo(
    () => generateColumns(props.schema.fields, params?.type),
    [props?.schema, params?.type]
  );

  return (
    <div style={{ padding: "15px" }}>
      <Link to={`/content/${params?.type}/create`}>Create</Link>

      <Table columns={cols} data={props.posts} />
    </div>
  );
}
