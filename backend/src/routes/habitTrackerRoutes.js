const express = require( 'express' );
const router = express.Router();
const habitTrackerController = require( '../controllers/habitTrackerController' );

router.get( '/', habitTrackerController.getAllHabits );

router.get( '/:habitId', habitTrackerController.getOneHabit );
// router.get( '/', habitTrackerController.getOneHabit );

router.post( '/', habitTrackerController.createNewHabit );

router.patch(
    '/',
    habitTrackerController.updateOneHabit
);

router.delete(
    '/',
    habitTrackerController.deleteOneHabit,
);

module.exports = router;