const reducers = (shopDetails = [], action) => {
  switch (action.type) {
    case "DELETE_SHOP":
      return shopDetails.filter((shop) => shop._id !== action.payload);
    case "UPDATE_SHOP":
      return shopDetails.map((shop) =>
        shop._id === action.payload._id ? action.payload : shop
      );
    case "FETCH_ALL_SHOP":
      return action.payload;
    case "CREATE_SHOP":
      return [...shopDetails, action.payload];
    default:
      return shopDetails;
  }
};
export default reducers;
