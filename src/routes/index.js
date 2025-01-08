import express from 'express';
import {getPlaceDetails} from "../controllers/placeDetailsController.js";
import {getSuggestions} from "../controllers/placeAutocompleteController.js";
import {getRoutes} from "../controllers/directionsController.js";
import {validateJWT} from "../middlewares/authMiddleware.js";

const router = express.Router();

// TODO: Uncomment on production
// router.use(validateJWT)

router.get('/place/details/:placeId', getPlaceDetails)

router.get('/place/autocomplete', getSuggestions)

router.get('/directions', getRoutes)

export default router;
