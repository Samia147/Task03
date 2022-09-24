const  express= require("express");
const { userSignup, loginUser } = require("../controllers/userController");


//express ap
const router = express();
//list of videos
router.post("/signup", userSignup);
router.post("/login", loginUser);

module.exports= router;