import React from 'react';
import ExerciseComponent from '../components/ExerciseComponent';

/**
 * Represents a handler for managing exercise data.
 */
class ExerciseHandler {
  constructor() {
    this.exercises = [];
  }

  /**
   * Fetches exercises based on user preferences.
   * This method can be extended to include filtering logic.
   * @param {string} muscleGroup
   * @returns {Array} Filtered exercises
   */
  fetchExercises(muscleGroup) {
    // Example business logic
    return this.exercises.filter(exercise => exercise.muscleGroup === muscleGroup);
  }
}

/**
 * Represents an Exercise component that generates exercises.
 * This component includes a title and an ExerciseComponent for displaying exercises.
 * @returns {JSX.Element} The Exercise component JSX.
 */
const Exercise = () => {
  const exerciseHandler = new ExerciseHandler();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Exercise Generator</h1>
      <ExerciseComponent handler={exerciseHandler} />
    </div>
  );
};

export default Exercise;
