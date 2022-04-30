import axios from "axios"
//pour standardiser le travielle 
export default axios.create({
    baseURL:"http://localhost:3001/api"
   
})