import mongoose from "mongoose";

/**
 * Create mongoose schema
 */
const schema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  departement: {
    type: String,
    required: true,
    minlength: 2,
  },
  location: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  number: {
    type: Number,
    required: true,
  },
  image: String,
});

const Employee = mongoose.model("employee", schema);

export default Employee;
