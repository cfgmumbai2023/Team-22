const mongoose = require('mongoose');

const objective = mongoose.Schema({
    studentId:{type: Number, required:true},
    fraction:{type: Number, required:true, minimum:0, maximum:10},
    addition:{type: Number, required:true, minimum:0, maximum:10},
    subtraction:{type: Number, required:true, minimum:0, maximum:10},
    two_words:{type: Number, required:true, minimum:0, maximum:10},
    vocabulary:{type: Number, required:true, minimum:0, maximum:10},
    traditional_modern_game:{type: Number, required:true, minimum:0, maximum:10},
    mumbai_map_topography:{type: Number, required:true, minimum:0, maximum:10},
    lemonSharbat_making:{type: Number, required:true, minimum:0, maximum:10},
    stamping_design:{type: Number, required:true, minimum:0, maximum:10},
    family_member_identification:{type: Number, required:true, minimum:0, maximum:10},
    museumThings_identification:{type: Number, required:true, minimum:0, maximum:10},
})
module.exports = mongoose.model("Evaluation",Evaluation);