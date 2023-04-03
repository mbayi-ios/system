
const { initiateSTKPush, stkPushCallback, confirmPayment } = require("../controllers/lipanampesa.controller")
const { accessToken} = require('../middlewares/generateAccessToken')

const router = require("express").Router() 

router.route("/stkPush").post(accessToken, initiateSTKPush)
router.route("/stkPushCallback/:Order_ID").post(stkPushCallback)
router.route("/confirmPayment/:CheckoutRequestID").post(accessToken, confirmPayment)


module.exports = router;