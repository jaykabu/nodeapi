const mongoose = require('mongoose');
const validator = require('validator')

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist"],
        validate(value) {
            if(!validator.isEmail(value)){
                throw  new Error("Invalid email")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: [true, "Phone number already exist"],
        minlength: 10
    },
    address: {
        type: String,
        required: true,
    }
});

//We will create a new collection

const Register = new mongoose.model('Register', registerSchema)

module.exports = Register;
