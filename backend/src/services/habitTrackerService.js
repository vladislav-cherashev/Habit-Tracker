const habit = require( '../database/habit' );
const { v4: uuid } = require( 'uuid' );

const getAllHabits = () => {
    const allHabits = habit.getAllHabits();
    return allHabits;
};

const getOneHabit = ( habitId ) => {
    const oneHabit = habit.getOneHabit( habitId );
    return oneHabit;
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
    const updatedHabit = habit.updateOneHabit(
        habitId,
        changes
    );
    return updatedHabit;
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