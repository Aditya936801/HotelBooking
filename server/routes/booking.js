import express from "express"
import {createBooking,getBookings,cancelBooking} from "../controllers/booking.js"

const router = express.Router()

router.get("/",getBookings)
router.post("/createBooking",createBooking)
router.get("/cancel/:id",cancelBooking)


export default router