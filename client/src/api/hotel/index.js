import {BASE_URL} from "../common/constant"
import axios from "axios"
const endpoints ={
    getHotel:"/hotel/getHotel/",
    
}

export const get_hotel_by_city = async(value)=>{

      const response = await axios.get(BASE_URL + endpoints.getHotel+value);
    return response

}

