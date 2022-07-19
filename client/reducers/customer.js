const reducers = (customerDetails = [], action) => {
  switch (action.type) {
    case "DELETE_CUSTOMER":
      return customerDetails.filter(
        (customer) => customer._id !== action.payload
      );
    case "UPDATE_CUSTOMER":
      return customerDetails.map((customer) =>
        customer._id === action.payload._id ? action.payload : customer
      );
    case "FETCH_ALL_CUSTOMER":
      return action.payload;
    case "CREATE_CUSTOMER":
      return [...customerDetails, action.payload];
    default:
      return customerDetails;
  }
};
export default reducers;
