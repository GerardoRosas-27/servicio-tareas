const modelNotes = require('../models/Notes');
const notes = {};
notes.getNotes = async (req, res) => {
    const result = await modelNotes.findall();
    res.json(result);
}

notes.getNote = async (req, res) =>{
    const { id } =  req.params;
    const result = await modelNotes.find(id);
    res.json(result);
}

notes.createNote = async (req, res) =>{
    console.log(req.body);
    delete req.body._id;
    const result = await modelNotes.insert(req.body);
    console.log(result);
    res.json(result);
}

notes.updateNote = async (req, res) =>{
    const { id } = req.params;
    console.log(id);
  
    delete req.body._id;
    console.log(req.body);
    const result = await modelNotes.update(id, req.body);
    res.json(result);
}

notes.deleteNote = async (req, res) =>{
    const { id } = req.params;
    console.log(id);
    const result = await modelNotes.delete(id);
    console.log(result);
    res.json(result);
}

module.exports = notes;