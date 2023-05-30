const express = require("express");
const {json} = require("body-parser");
const dotenv = require("dotenv")
const cors = require("cors");
const axios = require("axios");
const cloudinary = require("cloudinary")

// dotenv.config();
// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET,
//     secure: true
//   });
//   console.log(cloudinary)

const { parsed: config } = dotenv.config();

const app = express();

app.use(cors());
app.use(json())


//const BASE_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image`;
const BASE_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}`;
const auth = {
    
    username: process.env.API_KEY,
    password: process.env.API_SECRET,
}



app.get('/photos', async (req, res) => {
    // try{
    //     // const response = await cloudinary.v2.api.resources()
    //     //     params: {
    //     //         next_cursor: req.query.next_cursor
            
    //     // }
        const response = await axios.get(BASE_URL + "/resources/image", {
            auth,
            params: {
                next_cursor: req.query.next_cursor,
            }
        })
        
        // return res.send(response)
        return res.send(response.data)
//     }

//    catch(e) {
//     console.log("error", e)
//     return res.send(e)
//    }
})



const PORT = 7010;
app.listen(process.env.PORT, console.log(`Listening on port: ${PORT}`))