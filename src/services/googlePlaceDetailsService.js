import axios from "axios";

export const fetchPlaceDetails = async (placeId) => {
    const url = process.env.GOOGLE_PLACE_DETAILS_ENDPOINT;
    const response = await axios.get(url, {
        params: {
            place_id: placeId,
            key: process.env.GOOGLE_API_KEY,
        },
    });
    return response.data;
}