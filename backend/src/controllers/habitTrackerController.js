const habitService = require( '../services/habitTrackerService' );

const getAllHabits = ( req, res ) => {
    const { query } = req;
    if( !query.habitId ) {
        const allHabits = habitService.getAllHabits();
        res.send( allHabits );
    } else {
        getOneHabit( req, res );
    }
};

const getOneHabit = ( req, res ) => {
    const {
        params: { habitId },
    } = req;
    if( !habitId ) {
        return res.send( 'No habitId' );
    }
    const habit = habitService.getOneHabit( habitId );
    res.send( habit );
};

const createNewHabit = ( req, res ) => {
    const { body } = req;
    if(
        !body.name ||
        !body.icon ||
        !body.target ||
        !body.days
    ) {
        return res.status( 400 ).send( 'Please enter a name or icon' );
    }
    const newHabit = {
        icon  : body.icon,
        name  : body.name,
        target: body.target,
        days  : body.days,
    };
    const createdHabit = habitService.createNewHabit( newHabit );
    res.status( 201 ).send( {
        status: 'OK',
        data  : createdHabit,
    } );
};

const updateOneHabit = ( req, res ) => {
    const {
        body,
        query: { habitId },
    } = req;
    if( !habitId ) {
        return res.send( 'No habitId' );
    }
    const updatedWorkout = habitService.updateOneHabit(
        habitId,
        body
    );
    res.send( { status: 'OK', data: updatedWorkout } );
};

const deleteOneHabit = ( req, res ) => {
    const {
        query: { habitId },
    } = req;
    if( !habitId ) {
        return res.send( 'No habitId' );
    }
    habitService.deleteOneHabit( habitId );
    res.status( 204 ).send( { status: 'OK' } );
};

module.exports = {
    getAllHabits,
    getOneHabit,
    createNewHabit,
    updateOneHabit,
    deleteOneHabit,
};