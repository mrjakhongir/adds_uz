import axios from "axios";

export const request = ({url,method,data,headers}) =>{
    return axios({
        baseURL:"http://azizbek.samandardev.uz/v1",
        url,
        method,
        data,
        headers
    })
}