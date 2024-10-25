import React from 'react';
import WorkoutComponent from '../components/WorkoutComponent';

/**
 * Class representing a WorkoutHandler which manages workouts.
 */
class WorkoutHandler {
  constructor() {
    this.workouts = [];
  }

  /**
   * Creates a new workout.
   * This method simulates creating a workout and adding it to the collection.
   * @param {string} workoutName
   */
  createWorkout(workoutName) {
    // Example business logic
    const newWorkout = { name: workoutName, id: Date.now() };
    this.workouts.push(newWorkout);
    return newWorkout;
  }
}

/**
 * Represents a workout component that allows users to create a new workout session.
 * @returns {JSX.Element} The rendered workout component.
 */
const Workout = () => {
  const workoutHandler = new WorkoutHandler();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create a Workout</h1>
      <WorkoutComponent handler={workoutHandler} />
    </div>
  );
};

export default Workout;
