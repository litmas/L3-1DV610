import React from 'react'
import WorkoutSplitComponent from '../components/WorkoutSplitComponent'

/**
 * Class representing a handler for generating workout splits.
 */
class WorkoutSplitHandler {

  /**
   * Constructor for creating a new instance of class.
   * Initializes the 'splits' property as an empty array.
   *
   * @returns {void}
   */
  constructor () {
    this.splits = []
  }

  /**
   * Generate workout splits based on user input.
   *
   * @param {number} days
   * @returns {Array} An array of generated splits.
   */
  generateWorkoutSplits (days) {
    // Example business logic for split generation
    const splits = Array.from({ length: days }, (_, i) => `Day ${i + 1}: Split ${i % 2 === 0 ? 'Upper Body' : 'Lower Body'}`)
    this.splits.push(...splits)
    return splits
  }
}

/**
 * Represents a function that returns a component for creating a workout split.
 * Uses a WorkoutSplitHandler for handling workout split data.
 *
 * @returns {JSX.Element} The component for creating a workout split.
 */
const WorkoutSplit = () => {
  const workoutSplitHandler = new WorkoutSplitHandler()

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create a Workout Split</h1>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Type:</h2>
      <p className="text-gray-700 text-lg mb-4 px-4 py-2 bg-gray-100 rounded-lg text-center">
        cardio, olympic_weightlifting, plyometrics, powerlifting, strength, stretching, strongman
      </p>

      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Difficulty:</h2>
      <p className="text-gray-700 text-lg mb-4 px-4 py-2 bg-gray-100 rounded-lg text-center">
        beginner, intermediate, expert
      </p>
      <WorkoutSplitComponent handler={workoutSplitHandler} />
    </div>
  )
}

export default WorkoutSplit
