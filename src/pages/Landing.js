import React, { useContext, useEffect, useMemo, useState } from "react";
import Table from "rc-table";
import { Link, useParams } from "react-router-dom";
import { stateContext } from "../components/StateProvider";
import * as API from "../request";

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
    render: (value, row, index) => (
      <>
        <Link to={`/content/${type}/edit?id=${value?._id}`}>Edit</Link>
        <Link to={`/content/${type}/view?id=${value?._id}`}>View</Link>
      </>
    ),
  });

  return col;
};

export default function Landing(props) {
  const { state } = useContext(stateContext);
  const params = useParams();
  const [landingData, setLandingData] = useState([]);

  useEffect(() => {
    props.setFields(state?.contentTypes);
  }, [params?.type]);

  const fetchLandingPageData = async () => {
    const data = await API.getLandingData(params?.type);
    setLandingData(data);
  };

  useEffect(() => {
    fetchLandingPageData();
  }, []);

  const cols = useMemo(
    () => generateColumns(props.schema.fields, params?.type),
    [props?.schema, params?.type]
  );

  return (
    <div style={{ padding: "15px" }}>
      <Link to={`/content/${params?.type}/create`}>Create</Link>

      <Table columns={cols} data={landingData} />
    </div>
  );
}
