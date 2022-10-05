const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String
    },
    reactions: []
});

const ReactionSchema = new Schema({
    reactionId: {
        type: String
    },
    reactionBody: {
        type: String,
        
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);


// export the Thought model
module.exports = Thought;