const router = require('express').Router();


// You can require and use your routes here ;)

router.get('/',(req,res)=>{
res.send("this is vendor data")
})
module.exports = router;