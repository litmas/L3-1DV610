import React from 'react'
import ExerciseComponent from '../components/ExerciseComponent'

/**
 * Represents a handler for managing exercise data.
 */
class ExerciseHandler {
  
  /**
   * Constructor for creating a new instance of exercise class.
   *
   * @returns {void}
   */
  constructor () {
    this.exercises = []
  }

  /**
   * Fetches exercises based on user preferences.
   * This method can be extended to include filtering logic.
   *
   * @param {string} muscleGroup
   * @returns {Array} Filtered exercises
   */
  fetchExercises (muscleGroup) {
    return this.exercises.filter(exercise => exercise.muscleGroup === muscleGroup)
  }
}

/**
 * Represents an Exercise component that displays parameters for each textbox.
 * Includes details for muscle, type, and difficulty selection.
 * Utilizes an ExerciseHandler for handling exercise related actions.
 * Renders an ExerciseComponent for interactive exercise generation.
 *
 * @returns {JSX.Element} The Exercise component with parameters and ExerciseComponent.
 */
const Exercise = () => {
  const exerciseHandler = new ExerciseHandler()

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Exercise Generator</h1>
      <h2 className="text-1xl font-bold text-center mb-6 text-gray-800">These are the parameters for each textbox</h2>

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

      <ExerciseComponent handler={exerciseHandler} />
    </div>
  )
}

export default Exercise
