import axios from "axios";
import { toast } from "react-toastify";
import { SERVER_BACKEND } from "../../constant/constant";
import "react-toastify/dist/ReactToastify.css";

export const add = (name, price, quantity, weight, boughtSource, category) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    name,
    price,
    quantity,
    weight,
    boughtSource,
    category,
  });
  console.log(body);
  return axios.post(`${SERVER_BACKEND}/good`, body, config);
};

export const edit = (id, {name, price, quantity, weight, boughtSource, category}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    name,
    price,
    quantity,
    weight,
    boughtSource, 
    category,
  });
  console.log(body);
  id=id._id;
  return axios.post(`${SERVER_BACKEND}/good/` + id, body, config);
};

export const getGoods = () => {
  try {
    return axios.get(`${SERVER_BACKEND}/goods`);
  } catch (error) {
    console.log(error);
    toast.warn(`Something is wrong!`, {
      position: "top-center",
    });
  }
};

export const getGoodById = (id) => {
  return axios.get(`${SERVER_BACKEND}/good/` + id);
};

export const deleteGoodById = (id) => {
  console.log(id);
  try {
    axios.delete(`${SERVER_BACKEND}/good/` + id);
    toast("Waren ist gelöscht!", {
      className: "custom-toast f-bold",
      position: toast.POSITION.BOTTOM_CENTER,
    });
  } catch (error) {
    console.log(error);
    toast("error orcurred", {
      className: "custom-toast f-bold",
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const refresh = () => {
  window.location.reload(false);
};
