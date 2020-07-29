import axios from "axios";
import { toast } from "react-toastify";
import { SERVER_BACKEND } from "../../constant/constant";

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
  return axios.post(`${SERVER_BACKEND}/good`, body, config);
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
  try {
    axios.delete(`${SERVER_BACKEND}/good/` + id);
    toast("delete succeeded", {
      className: "custom-toast",
      position: toast.POSITION.BOTTOM_CENTER,
    });
  } catch (error) {
    console.log(error);
    toast("error orcurred", {
      className: "custom-toast",
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

/* export const refresh = () => {
  window.location.reload(false);
}; */
