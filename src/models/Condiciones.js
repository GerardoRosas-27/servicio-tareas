const { Schema, model } = require('mongoose');

const condicionesSchema = new Schema({
    estado: {
        type: Boolean,
        required: true
    },
    n_condicion: {
        type: Number,
        required: true
    },
    tp_condicion: {
        type: String,
        required: true
    },
    cobertura: {
        type: String,
        required: true
    },
    aplicado: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    vigencia: {
        type: String,
        required: true
    }
})
const Condiciones = model('condiciones', condicionesSchema);
const modelCondiciones = {};

modelCondiciones.find = async (id) => {
    try {
        const result = await Condiciones.findById(id);

        if (result != null) {
            return result;
        } else {
            return { "ms": "danger" }
        }

    } catch (error) {
        return { "ms": "danger" }
    }
}
modelCondiciones.findall = async () => {
    try {
        const result = await Condiciones.find();
        return result;
    } catch (error) {
        return { "ms": "danger" }
    }
}

modelCondiciones.insert = async (data) => {
    try {
        const newCondi = new Condiciones(data);
        const result = await newCondi.save();
        if(result != null){
            return {'ms': 'success'}
        }else{
            return { "ms": "danger" }
        }
    } catch (error) {
        return { "ms": "danger" }
    }
}
modelCondiciones.delete = async (id) => {
    try {
        const result = await Condiciones.remove({ _id: id });
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

module.exports = modelCondiciones;