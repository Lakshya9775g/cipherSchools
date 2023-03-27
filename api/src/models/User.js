import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return validator.isEmail(v);
      },
      message: 'Please enter a valid Email'
    }
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return validator.isMobilePhone(v);
      },
      message: 'Please enter a valid phone number'
    }
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  password: {
    type: String,
    required: true
  },
},{
  toJSON: {
      transform: function (doc, ret) {
          delete ret.password; // exclude password field from the response
      }
  }
}
);

export default mongoose.model('User',userSchema);