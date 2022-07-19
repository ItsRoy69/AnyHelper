const reducers = (pemDetails = [], action) => {
  switch (action.type) {
    case "DELETE_PEM":
      return pemDetails.filter((pem) => pem._id !== action.payload);
    case "UPDATE_PEM":
      return pemDetails.map((pem) =>
        pem._id === action.payload._id ? action.payload : pem
      );
    case "FETCH_ALL_PEM":
      return action.payload;
    case "CREATE_PEM":
      return [...pemDetails, action.payload];
    default:
      return pemDetails;
  }
};
export default reducers;
