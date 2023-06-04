import axios from "axios";
const apiClient=axios.create({
    baseURL:"http://localhost:5001/api/v1/",
})
apiClient.defaults.withCredentials=true;
export default apiClient;