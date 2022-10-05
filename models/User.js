const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: [],
    friends: []
});

// create the Username model using the UsernameSchema
const User = model('User', UserSchema);


// export the Username model
module.exports = User;