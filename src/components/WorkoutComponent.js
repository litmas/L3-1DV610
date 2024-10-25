import React from 'react';
import WorkoutPlanner from '../assignmentL2/workoutModule/workoutPlanner';

/**
 * Class representing a Workout Component.
 * @extends React.Component
 */
class WorkoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muscles: '',
      type: '',
      difficulty: '',
      workout: {},
      error: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.workoutPlanner = new WorkoutPlanner();
  }

  /**
   * Handle input change event by updating state with new value.
   *
   * @param {Object} event - The input change event object.
   * @param {Object} event.target - The target element of the event.
   * @param {string} event.target.name - The name of the target element.
   * @param {string} event.target.value - The new value of the target element.
   *
   * @return {void}
   */
  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  /**
   * Handles form submission by creating a workout plan based on user inputs.
   *
   * @param {Event} event - The event object triggered by the form submission.
   *
   * @return {Promise} - A Promise that resolves once the workout plan is created.
   */
  async handleFormSubmit(event) {
    event.preventDefault();

    const { muscles, type, difficulty } = this.state;
    const muscleGroups = muscles.split(',').map(muscle => muscle.trim());

    try {
      const workout = await this.workoutPlanner.createWorkout(muscleGroups, type, difficulty);
      this.setState({ workout, error: null });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  /**
   * Renders the workout form and details section.
   *
   * @return {JSX.Element} The rendered workout form and details section wrapped in a div element.
   */
  render() {
    const { muscles, type, difficulty, workout, error } = this.state;

    return (
      <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        {this.renderForm(muscles, type, difficulty)}
        {error && <p className="text-red-500 mt-4">Error: {error}</p>}
        {Object.keys(workout).length > 0 && this.renderWorkout(workout)}
      </div>
    );
  }

  /**
   * Renders a form for creating a workout.
   *
   * @param {string} muscles - The muscles input value.
   * @param {string} type - The workout type input value.
   * @param {string} difficulty - The workout difficulty input value.
   *
   * @return {JSX.Element} The rendered form element.
   */
  renderForm(muscles, type, difficulty) {
    return (
      <form onSubmit={this.handleFormSubmit} className="space-y-4">
        {this.renderInput('Muscles (comma-separated)', 'muscles', muscles)}
        {this.renderInput('Type', 'type', type)}
        {this.renderInput('Difficulty', 'difficulty', difficulty)}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Create Workout</button>
      </form>
    );
  }

  /**
   * Renders an input field with a label.
   *
   * @param {string} label - The label text for the input field
   * @param {string} name - The name attribute for the input field
   * @param {string} value - The initial value for the input field
   *
   * @return {JSX.Element} An input field component with the specified label, name, and initial value
   */
  renderInput(label, name, value) {
    return (
      <label className="block">
        <span className="text-gray-700">{label}:</span>
        <input
          type="text"
          name={name}
          value={value}
          onChange={this.handleInputChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </label>
    );
  }

  /**
   * Render the workout plan based on the provided workout details.
   *
   * @param {Object} workout - Workout details containing muscle groups and associated exercises.
   *
   * @return {JSX.Element} - JSX element representing the rendered workout plan.
   */
  renderWorkout(workout) {
    return (
      <div className="workout-plan mt-6 space-y-4">
        {Object.entries(workout).map(([muscle, exercises]) => (
          <div key={muscle} className="bg-white p-4 border rounded-md shadow-sm">
            <h3 className="text-lg font-bold">{muscle}</h3>
            <ul className="list-disc pl-5">
              {exercises.map(this.renderExerciseDetails)}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  /**
   * Renders exercise details as a list item element.
   *
   * @param {object} exercise - The exercise object containing details like name, type, muscle, difficulty, and instructions.
   * @param {number} index - The index of the exercise in the list.
   *
   * @return {ReactElement} A list item element displaying exercise details.
   */
  renderExerciseDetails(exercise, index) {
    return (
      <li key={index} className="mt-2">
        <p>Name: {exercise.name}</p>
        <p>Type: {exercise.type}</p>
        <p>Muscle: {exercise.muscle}</p>
        <p>Difficulty: {exercise.difficulty}</p>
        <p>Instructions: {exercise.instructions}</p>
      </li>
    );
  }
}

export default WorkoutComponent;
