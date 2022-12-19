import Axios from "axios";

export const seaveModel = async (model) => {
  const res = await Axios.post("/module", model);
  console.log("success fully created", res.data);
};

export const getModels = async (model) => {
  const res = await Axios.get("/module", model);
  const modifiedArr = res.data.map((item) => ({
    name: item.name,
    fields: item.schema,
  }));
  return modifiedArr;
};

export const saveContent = async (moduleName, moduleData) => {
  const res = await Axios.post("/content/create", { moduleName, moduleData });
  console.log(res.data);
};

export const getLandingData = async (moduleName) => {
  const res = await Axios.get(`/content/${moduleName}`);
  return res.data;
};

export const getContentDetails = async (moduleName, id) => {
  const res = await Axios.get(`/content/${moduleName}/${id}`);
  return res.data;
};
