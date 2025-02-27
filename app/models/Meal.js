const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    categoryid:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.models.Meal || mongoose.model("Meal", mealSchema);