import * as api from "../api";

export const getPEM = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPEM();

    dispatch({ type: "FETCH_ALL_PEM", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPEM = (pem) => async (dispatch) => {
  try {
    const { data } = await api.createPEM(pem);
    dispatch({ type: "CREATE_PEM", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePEM = (id, pem) => async (dispatch) => {
  try {
    const { data } = await api.updatePEM(id, pem);
    dispatch({ type: "UPDATE_PEM", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePEM = (id) => async (dispatch) => {
  try {
    await api.deletePEM(id);
    dispatch({ type: "DELETE_PEM", payload: id });
  } catch (error) {
    console.log(error);
  }
};
