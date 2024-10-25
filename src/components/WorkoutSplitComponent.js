import React, { useState } from 'react'
import WorkoutPlanner from '../assignmentL2/workoutModule/workoutPlanner.js'

/**
 * Class representing a Workout Split Manager for creating workout plans.
 */
class WorkoutSplitManager {
  /**
   * Constructor for creating a new instance.
   *
   * @return {void}
   */
  constructor () {
    this.workoutPlanner = new WorkoutPlanner()
  }

  /**
   * Creates a workout split based on the selected split type, workout type, and difficulty level.
   *
   * @param {string} selectedSplitType - The type of workout split selected (e.g., Upper/Lower, Push/Pull).
   * @param {string} workoutType - The type of workout (e.g., Strength training, Cardio).
   * @param {string} difficulty - The difficulty level of the workout split (e.g., Beginner, Intermediate, Advanced).
   * @returns {object} An object containing the created workout split plan and any potential error message.
   */
  async createWorkoutSplit (selectedSplitType, workoutType, difficulty) {
    try {
      const createdSplit = await this.workoutPlanner.createWorkoutSplit(selectedSplitType, workoutType, difficulty)
      return { plan: createdSplit, error: null }
    } catch (err) {
      return { plan: {}, error: err.message }
    }
  }
}

/**
 * Renders a workout plan with detailed exercise information for each day and muscle group.
 *
 * @param {object} props - The props object containing the workout plan to render.
 * @param {object} props.workoutPlan - The workout plan object to render.
 * @returns {JSX.Element} - The rendered workout plan component.
 */
const WorkoutPlanRenderer = ({ workoutPlan }) => {

  /**
   * Renders details of a given exercise.
   *
   * @param {object} exercise - The exercise object containing details.
   * @returns {JSX.Element} - JSX element with exercise details.
   */
  const renderExerciseDetails = (exercise) => (
    <>
      <span className="font-semibold">Name:</span> {exercise.name} <br />
      <span className="font-semibold">Type:</span> {exercise.type} <br />
      <span className="font-semibold">Muscle:</span> {exercise.muscle} <br />
      <span className="font-semibold">Difficulty:</span> {exercise.difficulty} <br />
      <span className="font-semibold">Instructions:</span> {exercise.instructions}
    </>
  )

  /**
   * Renders the workout plan for each day with corresponding muscle groups and exercises.
   *
   * @returns {JSX.Element} The rendered workout plan
   */
  const renderWorkoutPlan = () => (
    Object.entries(workoutPlan).map(([day, muscles]) => (
      <div key={day} className="mb-6">
        <h3 className="text-lg font-bold text-gray-700">{day}</h3>
        {typeof muscles === 'object' && !Array.isArray(muscles)
          ? (
              Object.entries(muscles).map(([muscleGroup, exercises]) => (
            <div key={muscleGroup} className="mt-4">
              <h4 className="text-md font-bold text-gray-600">{muscleGroup}</h4>
              <ul className="list-disc list-inside mt-2">
                {exercises.map((exercise, index) => (
                  <li key={index} className="mb-2">
                    {renderExerciseDetails(exercise)}
                  </li>
                ))}
              </ul>
            </div>
              ))
            )
          : (
          <p>{muscles}</p>
            )}
      </div>
    ))
  )

  return <div>{renderWorkoutPlan()}</div>
}

/**
 * Represents a form component for creating a workout split.
 *
 * @param {object} WorkoutForm - The WorkoutForm component props.
 * @param {Function} WorkoutForm.onSubmit - Function to handle form submission.
 * @param {string} WorkoutForm.selectedSplitType - The selected split type for the workout.
 * @param {string} WorkoutForm.workoutType - The type of workout.
 * @param {string} WorkoutForm.difficulty - The difficulty level of the workout.
 * @param {Function} WorkoutForm.setSelectedSplitType - Function to set the selected split type.
 * @param {Function} WorkoutForm.setWorkoutType - Function to set the workout type.
 * @param {Function} WorkoutForm.setDifficulty - Function to set the workout difficulty.
 * @returns {JSX.Element} - The WorkoutForm component.
 */
const WorkoutForm = ({ onSubmit, selectedSplitType, workoutType, difficulty, setSelectedSplitType, setWorkoutType, setDifficulty }) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <FormSelect
      label="Split Type:"
      value={selectedSplitType}
      onChange={(e) => setSelectedSplitType(e.target.value)}
      options={[
        { value: 'pplSplit', label: 'Push/Pull/Legs Split' },
        { value: 'arnoldSplit', label: 'Arnold Split' },
        { value: 'fullBodySplit', label: 'Full Body Split' },
        { value: 'upperLowerSplit', label: 'Upper/Lower Split' },
        { value: 'fourDaySplit', label: 'Four-Day Split' },
        { value: 'fiveDaySplit', label: 'Five-Day Split' }
      ]}
    />
    <FormInput
      label="Type:"
      value={workoutType}
      onChange={(e) => setWorkoutType(e.target.value)}
      required
    />
    <FormInput
      label="Difficulty:"
      value={difficulty}
      onChange={(e) => setDifficulty(e.target.value)}
      required
    />
    <button
      type="submit"
      className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
    >
      Create Workout Split
    </button>
  </form>
)

/**
 * Functional component representing the Workout Split Component.
 * Manages the state for selected split type, workout type, difficulty, workout plan, error, and split type.
 * Utilizes a WorkoutSplitManager for creating workout splits.
 * Handles form submission and renders components based on state.
 *
 * @returns {JSX.Element} The Workout Split Component JSX
 */
const WorkoutSplitComponent = () => {
  const [selectedSplitType, setSelectedSplitType] = useState('')
  const [workoutType, setWorkoutType] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [workoutPlan, setWorkoutPlan] = useState({})
  const [error, setError] = useState(null)
  const [splitType, setSplitType] = useState('')

  const workoutSplitManager = new WorkoutSplitManager()

  /**
   * Handles form submission by preventing the default form behavior,
   * creating a workout split based on selected parameters,
   * and updating the workout plan, error state, and selected split type accordingly.
   *
   * @param {Event} event - The event object triggered by the form submission
   */
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const { plan, error } = await workoutSplitManager.createWorkoutSplit(selectedSplitType, workoutType, difficulty)
    setWorkoutPlan(plan)
    setError(error)
    setSplitType(selectedSplitType)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <WorkoutForm
        onSubmit={handleFormSubmit}
        selectedSplitType={selectedSplitType}
        workoutType={workoutType}
        difficulty={difficulty}
        setSelectedSplitType={setSelectedSplitType}
        setWorkoutType={setWorkoutType}
        setDifficulty={setDifficulty}
      />
      {error && <p className="mt-4 text-red-500">{`Error: ${error}`}</p>}
      {Object.keys(workoutPlan).length > 0 && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            {splitType.charAt(0).toUpperCase() + splitType.slice(1)} Workout Plan
          </h2>
          <WorkoutPlanRenderer workoutPlan={workoutPlan} />
        </div>
      )}
    </div>
  )
}

/**
 * A component for rendering a select dropdown form element with label and options.
 *
 * @param {object} props - The props object
 * @param {string} props.label - The label to display for the select dropdown
 * @param {string} props.value - The current selected value for the select dropdown
 * @param {Function} props.onChange - The callback function to handle value change
 * @param {Array} props.options - The array of options to render in the select dropdown
 */
const FormSelect = ({ label, value, onChange, options }) => (
  <label className="block">
    <span className="text-gray-700 font-bold">{label}</span>
    <select
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
)

/**
 * Represents a form input component.
 *
 * @param {object} props - The props object.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {Function} props.onChange - The function to handle the input change event.
 * @param {boolean} props.required - Indicates if the input field is required.
 * @returns {JSX.Element} A JSX element representing a form input field with label.
 */
const FormInput = ({ label, value, onChange, required }) => (
  <label className="block">
    <span className="text-gray-700 font-bold">{label}</span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
    />
  </label>
)

export default WorkoutSplitComponent
