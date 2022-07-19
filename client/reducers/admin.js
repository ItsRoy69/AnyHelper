const reducers = (adminDetails = [], action) => {
  switch (action.type) {
    case "DELETE_ADMIN":
      return adminDetails.filter((admin) => admin._id !== action.payload);
    case "UPDATE_ADMIN":
      return adminDetails.map((admin) =>
        admin._id === action.payload._id ? action.payload : admin
      );
    case "FETCH_ALL_ADMIN":
      return action.payload;
    case "CREATE_ADMIN":
      return [...adminDetails, action.payload];
    default:
      return adminDetails;
  }
};
export default reducers;
