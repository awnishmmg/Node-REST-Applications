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

    console.log(request.body);
    
    response.status(200)
            .json({
                "message":"post Request for Emp Resource",
                "code":200,
                "status":true,
                "error":false,
                "data":request.body,
            });
});

//Export the Router
module.exports = router;
