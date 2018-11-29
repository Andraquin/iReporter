// requiring express
import express from 'express';
import controllers from '../controllers';


const router = express.Router();

// INDEX - displays a list of Red-Flag records
router.get('/red-flags', controllers.getRedFlags);

// SHOW - displays more information about a specific red-flag
router.get('/red-flags/:id', controllers.getSpecificRedFlag);

// CREATE - adds new red-flag record to the DB (data structure)
router.post('/red-flags', controllers.createRedFlag);

// EDIT - for editing a particular red-flag location
router.patch('/red-flags/:id/location', controllers.editLocation);

// EDIT - for editing a particular red-flag record's comment
router.patch('/red-flags/:id/comment', controllers.editComment);

export default router;