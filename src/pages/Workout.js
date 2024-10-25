import React from 'react'
import WorkoutComponent from '../components/WorkoutComponent'

/**
 * Class representing a WorkoutHandler which manages workouts.
 */
class WorkoutHandler {
  /**
   * Constructor for creating a new instance of the class.
   * Initializes the workouts array.
   *
   * @return {void}
   */
  constructor () {
    this.workouts = []
  }

  /**
   * Creates a new workout.
   * This method simulates creating a workout and adding it to the collection.
   *
   * @param {string} workoutName The name of the workout to be created.
   *
   * @return {Object} The newly created workout object with properties 'name' and 'id'.
   */
  createWorkout (workoutName) {
    // Example business logic
    const newWorkout = { name: workoutName, id: Date.now() }
    this.workouts.push(newWorkout)
    return newWorkout
  }
}

/**
 * Represents a workout component that allows users to create a new workout session.
 *
 * @returns {JSX.Element} The rendered workout component.
 */
const Workout = () => {
  const workoutHandler = new WorkoutHandler()

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create a Workout</h1>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Muscle:</h2>
      <p className="text-gray-700 text-lg mb-4 px-4 py-2 bg-gray-100 rounded-lg text-center">
        abdominals, abductors, adductors, biceps, calves, chest, forearms, glutes, hamstrings, lats, lower_back, middle_back, neck, quadriceps, traps, triceps
      </p>

      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Type:</h2>
      <p className="text-gray-700 text-lg mb-4 px-4 py-2 bg-gray-100 rounded-lg text-center">
        cardio, olympic_weightlifting, plyometrics, powerlifting, strength, stretching, strongman
      </p>

      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Difficulty:</h2>
      <p className="text-gray-700 text-lg mb-4 px-4 py-2 bg-gray-100 rounded-lg text-center">
        beginner, intermediate, expert
      </p>
      <WorkoutComponent handler={workoutHandler} />
    </div>
  )
}

export default Workout
