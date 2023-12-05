import axios from "axios"
import { BASE_URL } from "./constants"

const config ={
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
}

export const callApi =async (resourse)=>{

    const {data} =await axios.get(`${BASE_URL}/${resourse}`,config)
    return data;
}