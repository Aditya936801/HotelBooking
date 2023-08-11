import {BASE_URL} from "../common/constant"
import axios from "axios"

const endpoints ={
    createBooking:"/booking/createBooking/",
    getBooking:"/booking/",
    cancelBooking:"/booking/cancel/"
    
}


export const create_booking = async(value)=>{
    

      const response = await axios.post(BASE_URL + endpoints.createBooking,value);
    return response

}
export const get_booking = async(value)=>{

      const response = await axios.get(BASE_URL + endpoints.getBooking,{headers:{id:value}});
    return response

}
export const cancel_booking = async(value)=>{

      const response = await axios.get(BASE_URL + endpoints.cancelBooking+value);
    return response

}
