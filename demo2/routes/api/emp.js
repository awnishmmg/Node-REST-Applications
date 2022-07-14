const express = require("express");
const router = express.Router();

//Router Middleware
router.get('/',(request,response,next)=>{
    response.status(200)
            .json({
                "message":"Get Request for Emp Resource",
                "code":200,
                "status":true,
                "error":false,
                "data":[],
            });
});

router.post('/',(request,response,next)=>{
    response.status(200)
            .json({
                "message":"post Request for Emp Resource",
                "code":200,
                "status":true,
                "error":false,
                "data":[
                    {"user":"vikas"}
                ],
            });
});

//Export the Router
module.exports = router;
