import axios  from "axios";

export default (url = "https://fakestoreapi.com") =>{
    return axios.create({
        baseURL: url
    })
}
