const express = require( 'express' );
const router = express.Router();
const habitTrackerController = require( '../controllers/habitTrackerController' );

router.get( '/', habitTrackerController.getAllHabits );

router.get( '/:habitId', habitTrackerController.getOneHabit );

router.post( '/', habitTrackerController.createNewHabit );

router.patch(
    '/:habitId',
    habitTrackerController.updateOneHabit
);

router.delete(
    '/:habitId',
    habitTrackerController.deleteOneHabit,
);

module.exports = router;