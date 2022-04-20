const mongoose = require("mongoose")
const url = "mongodb://localhost/valiateDB"

mongoose.connect(url).then(()=> {
    console.log("MonogDB all the way.")
}).catch((err) => {
    console.log(err)
})

module.exports = mongoose