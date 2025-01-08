import axios from "axios";


export const getAutocompletion = async (input, sessionToken = null) => {
    console.log(input)
    const url = process.env.GOOGLE_PLACE_AUTOCOMPLETE_ENDPOINT;
    const response = await axios.get(url, {
        params: {
            input,
            key: process.env.GOOGLE_API_KEY,
            sessiontoken: sessionToken, // Optional
        },
    });
    return response.data;
}