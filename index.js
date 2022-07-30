const express = require("express");
const app = express();
const bodyParser        =       require("body-parser");
// var router = express.Router(); 

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 8000;

const address = {
    city: "ranchi",
    state: "jharkhand"
};

const images = ["Shimla", "Kahsmir"];

app.get("/", (req, res) => {
    return res.status(200).json(images);
})

app.get("/details", (req, res) => {
    const type = req.body.type;
    const obj = {};

    if (type === "school") {
        obj.name = "Oxford";
        obj.class = 12;
        obj.section = 'A';
    } else if (type === "college") {
        obj.name = "NIT JSR";
        obj.year = 2;
        obj.honors = "CSE";
    }

    return res.status(200).json({ 
        data: obj
    });
})

app.post("/owner/registration", (req, res) => {
    const {name, username, email, password, mobile} = req.body;

    // Code to save user to a database

    return res.status(201).send("Your registration is successful");
})

app.put("/update/address", (req, res) => {
    const {city} = req.body;

    address.city = city;
    // Code to save user to a database

    return res.status(201).send("City has been updated successfully");
})

app.delete("/delete/image", (req, res) => {
    const {imageName} = req.body;

    for( var i = 0; i < images.length; i++){ 
                                   
        if (images[i] === imageName) { 
            images.splice(i, 1); 
            i--; 
        }
    }

    return res.status(201).send("Image has been removed");
})

app.listen(port, function()
{
    console.log("server is running on port : ",port);
});