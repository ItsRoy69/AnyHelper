import mongoose from "mongoose";
import CustomerDetails from "../models/customerDetails.js";

export const getCustomer = async (req, res) => {
  try {
    const customerDetails = await CustomerDetails.find();
    // console.log(customerDetails);
    res.status(200).json(customerDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createCustomer = async (req, res) => {
  const customer = req.body;

  const newCustomer = new CustomerDetails(customer);
  try {
    await newCustomer.save();

    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  const { id: _id } = req.params;
  const customer = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No Customer with that id");
  }

  const updatedCustomer = await CustomerDetails.findByIdAndUpdate(
    _id,
    { ...customer, id },
    { new: ture }
  );
  res.json(updatedCustomer);
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No Customer with that id");
  }

  await CustomerDetails.findByIdAndRemove(id);

  res.json({ message: "Customer deleted successfully" });
};
