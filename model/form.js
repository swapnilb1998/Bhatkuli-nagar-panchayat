const mongoose = require("mongoose");

module.exports = mongoose.model("form", 
    (mongoose.Schema(
        {
            house_id:{ type: String, require: [true, "Please Enter house_id........"] },
            name:{ type: String, require: [true, "Please Enter name........"] },
            mobileNo: { type: String, require: [true, "Please Enter mobileNo........"] },
            address: { type: String, require: [true, "Please Enter address........."] },
            prabhagh_no: { type: String, require: [true, "Please Enter prabhagh_no..........."] },
            vard_no: { type: String, require: [true, "Please Enter  vard_no........"] },
            malmata: { type: String, require: [true, "Please Enter malmata........"] },
            ghar: { type: String, require: [true, "Please Enter ghar......... "] },
            sowchlaychePrkar:{ type: String, require: [true, "Please Enter sowchlaychePrkar......... "] },
            surveyName:{ type: String, require: [true, "Please Enter surveyName......... "] },
            mobileNo1:{ type: String, require: [true, "Please Enter  mobileNo1......... "] }
        })
    ));
