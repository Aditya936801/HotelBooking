import express from "express"
import {createHotel,getHotel,updateHotel,deleteHotel,getHotelByCity} from "../controllers/hotel.js"

const router = express.Router()

router.get("/getHotel",getHotel)
router.get("/getHotel/:location",getHotelByCity)
router.post("/createHotel",createHotel)
router.post("/updateHotel",updateHotel)
router.post("/deleteHotel",deleteHotel)

export default router