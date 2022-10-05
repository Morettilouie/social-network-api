const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

// create the Username model using the UsernameSchema
const User = model('User', UserSchema);


// export the Username model
module.exports = User;