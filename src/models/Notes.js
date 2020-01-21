const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})
const Notes = model('Note', noteSchema);
const modelNotes = {};

modelNotes.find = async (id) => {
    try {
        const result = await Notes.findById(id);

        if (result != null) {
            return result;
        } else {
            return { "ms": "danger" }
        }

    } catch (error) {
        return { "ms": "danger" }
    }
}
modelNotes.findall = async () => {
    try {
        const result = await Notes.find();
        return result;
    } catch (error) {
        return { "ms": "danger" }
    }
}
modelNotes.insert = async (data) => {
    try {
        const newNote = new Notes(data);
        const result = await newNote.save();
        if(result != null){
            return {'ms': 'success'}
        }else{
            return { "ms": "danger" }
        }
    } catch (error) {
        return { "ms": "danger" }
    }
}
modelNotes.update = async (id, data) => {
    try {
        const result = await Notes.updateOne({ _id: id }, data);
        console.log(result);
        if (parseInt(result.nModified) == 1) {
            return { 'ms': "success" };
        } else {
            return { 'ms': "danger" }
        }
    } catch (error) {
        return { 'ms': "danger" };
    }
}
modelNotes.delete = async (id) => {
    try {
        const result = await Notes.remove({ _id: id });
        console.log(result);
        if (parseInt(result.deletedCount) == 1) {
            return { 'ms': "success" };
        } else {
            return { 'ms': "danger" }
        }
    } catch (error) {
        return { 'ms': "danger" }
    }
}

module.exports = modelNotes;
