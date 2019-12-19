import axios from "axios";

const instance = axios.create({
	baseURL: "https://cosmeticsshop-a575e.firebaseio.com/"
});

export default instance;
