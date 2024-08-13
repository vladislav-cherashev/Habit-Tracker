const habit = require( '../database/habit' );
const { v4: uuid } = require( 'uuid' );

const getAllHabits = () => {
    const allHabits = habit.getAllHabits();
    return allHabits;
};

const getOneHabit = ( habitId ) => {
    const workout = habit.getOneHabit( habitId );
    return workout;
};

const createNewHabit = ( newHabit ) => {
    const habitToInsert = {
        ...newHabit,
        id       : uuid(),
        createdAt: new Date().toLocaleString( 'en-US', {
            timeZone: 'UTC',
        } ),
        updatedAt: new Date().toLocaleString( 'en-US', {
            timeZone: 'UTC',
        } ),
    }

    const createdHabit = habit.createNewHabit(
        habitToInsert );
    return createdHabit;
};

const updateOneHabit = ( habitId, changes ) => {
    const updatedWorkout = habit.updateOneHabit(
        habitId,
        changes
    );
    return updatedWorkout;
};

const deleteOneHabit = ( habitId ) => {
    habit.deleteOneHabit( habitId );
};

module.exports = {
    getAllHabits,
    getOneHabit,
    createNewHabit,
    updateOneHabit,
    deleteOneHabit,
};