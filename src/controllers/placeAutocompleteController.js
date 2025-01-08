import {getAutocompletion} from "../services/googlePlaceAutocompleteService.js";


export const getSuggestions = async (req, res) => {
    let _result = null;
    const query = req.query.q;
    const sessionToken = req.query.sessionToken || null;

    try {
        await getAutocompletion(query, sessionToken)
            .then((result) => {
                _result = result;
            })
            .catch((error) => {
                console.error(error);
                // return res.status(500).json({ message: error.message });
            });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.send({
        result: _result
    })
}