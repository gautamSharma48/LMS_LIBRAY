import { Schema, models, model } from "mongoose";

// Define the User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  token: {
    type: String, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// Clear the model from the Mongoose cache if it exists
if (models['lms-user']) {
  delete models['lms-user'];
}


// Check if the model already exists in the models cache
const UserModel = model('lms-user', userSchema);

export default UserModel;
