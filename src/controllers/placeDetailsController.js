import {fetchPlaceDetails} from "../services/googlePlaceDetailsService.js";

export const getPlaceDetails = async (req, res) => {
    let _result = null;

    try {
        await fetchPlaceDetails(req.params.placeId)
            .then((result) => res.json(result))
            .then((result) => {
                _result = result;
            })
            .catch((error) => {
                console.error(error.message);
                // return res.status(500).json({ message: error.message });
            });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    return res.send({
        id: req.params.id,
        result: _result,
        key: process.env.GOOGLE_API_KEY
    })
}
