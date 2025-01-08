import axios from "axios";


export const getRoutes = async (origin, destination) => {
    const url = process.env.GOOGLE_DIRECTION_ENDPOINT;
    console.log("getRoutes", url);
    const response = await axios.get(url, {
        params: {
            origin,
            destination,
            key: process.env.GOOGLE_API_KEY,
        },
    });
    return response.data;
}