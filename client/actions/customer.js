import * as api from "../api";

export const getCustomer = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCustomer();

    dispatch({ type: "FETCH_ALL_CUSTOMER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCustomer = (customer) => async (dispatch) => {
  try {
    const { data } = await api.createCustomer(customer);
    dispatch({ type: "CREATE_CUSTOMER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCustomer = (id, customer) => async (dispatch) => {
  try {
    const { data } = await api.updateCustomer(id, customer);
    dispatch({ type: "UPDATE_CUSTOMER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    await api.deleteCustomer(id);
    dispatch({ type: "DELETE_CUSTOMER", payload: id });
  } catch (error) {
    console.log(error);
  }
};
