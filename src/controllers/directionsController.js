import {getRoutes as getDirections} from "../services/googleDirectionService.js";

export const getRoutes = async (req, res) => {
    let _result = null;
    let errors = {};
    const origin = req.query.origin;
    const destination = req.query.destination;

    if (!origin) {
        errors.origin = "Origin is required";
    }

    if (!destination) {
        errors.destination = "Destination is required";
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).send({
            errors: errors,
            status: "error",
        })
    }

    try {
        await getDirections(origin, destination)
            .then(result => {
                _result = result;
                console.log(result)
            })
            .catch((error) => {
                console.error(error.message);
                // return res.status(500).json({ message: error.message });
            })
    } catch (err) {
        return res.status(500).json({ message: error.message });
    }

    res.send({
        query: {
            origin: origin,
            destination: destination,
        },
        result: _result,
        status: "success",
    })

}