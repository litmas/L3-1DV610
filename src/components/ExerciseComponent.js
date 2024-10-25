import React from 'react';
import ExerciseGenerator from '../assignmentL2/workoutModule/exerciseGenerator';

/**
 * Class representing an Exercise Component.
 * This component allows users to generate exercises based on selected criteria.
 */
class ExerciseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muscle: '',
      type: '',
      difficulty: '',
      exercises: [],
      error: null,
      submitted: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.exerciseGenerator = new ExerciseGenerator();
  }

  /**
   * Updates the state with the input value of the given form field.
   *
   * @param {object} event - The event object containing the target field's name and value.
   * @param {string} event.target.name - The name of the form field.
   * @param {string} event.target.value - The value of the form field.
   *
   * @return {void}
   */
  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  /**
   * Handles form submission by preventing default behavior, updating the state of form submission,
   * and generating exercises based on the selected muscle, type, and difficulty.
   *
   * @param {Event} event - The event triggering the form submission
   *
   * @return {Promise<void>} A promise that resolves after generating exercises or handling an error
   */
  async handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });

    const { muscle, type, difficulty } = this.state;
    try {
      const exercises = await this.exerciseGenerator.generateExercises(muscle, type, difficulty);
      this.setState({ exercises, error: null });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  /**
   * Renders the workout form with the specified muscle, type, and difficulty.
   * Displays error message if there is an error. Shows exercises if submitted.
   *
   * @return {JSX.Element} The rendered workout form with error message and exercises.
   */
  render() {
    const { muscle, type, difficulty, exercises, error, submitted } = this.state;

    return (
      <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        {this.renderForm(muscle, type, difficulty)}
        {error && <p className="text-red-500 mt-4">Error: {error}</p>}
        {this.renderExercisesOrMessage(exercises, submitted)}
      </div>
    );
  }

  /**
   * Renders a form for generating content with specified muscle, type, and difficulty inputs.
   *
   * @param {string} muscle - The muscle input value.
   * @param {string} type - The type input value.
   * @param {string} difficulty - The difficulty input value.
   *
   * @return {ReactElement} A form element with muscle, type, and difficulty inputs.
   */
  renderForm(muscle, type, difficulty) {
    return (
      <form onSubmit={this.handleFormSubmit} className="space-y-4">
        {this.renderInput('Muscle', 'muscle', muscle)}
        {this.renderInput('Type', 'type', type)}
        {this.renderInput('Difficulty', 'difficulty', difficulty)}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Generate</button>
      </form>
    );
  }

  /**
   * Renders an input field with the provided label, name, and initial value.
   *
   * @param {string} label - The text label for the input field.
   * @param {string} name - The name attribute for the input field.
   * @param {string} value - The initial value for the input field.
   *
   * @return {JSX.Element} - Returns a JSX element representing the input field with label.
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
   * Render either exercises or a message based on the submitted status and the number of exercises.
   *
   * @param {Array} exercises - The array of exercises to render.
   * @param {boolean} submitted - Indicates whether exercises are submitted.
   *
   * @return {JSX.Element} - Either the rendered exercises or a message indicating no exercises found.
   */
  renderExercisesOrMessage(exercises, submitted) {
    if (submitted && exercises.length === 0) {
      return <p>No exercises found for the selected criteria.</p>;
    }

    return exercises.length > 0 ? this.renderExercises(exercises) : null;
  }

  /**
   * Render exercises in a div element with a specific class and spacing.
   *
   * @param {Array} exercises - An array of exercise details to be rendered.
   *
   * @return {JSX.Element} - A div element containing the rendered exercise details.
   */
  renderExercises(exercises) {
    return (
      <div className="mt-6 space-y-4">
        {exercises.map(this.renderExerciseDetails)}
      </div>
    );
  }

  /**
   * Renders the details of an exercise element.
   *
   * @param {Object} exercise - The exercise object containing details like name, type, muscle, difficulty, and instructions.
   * @param {number} index - The index of the exercise in the list.
   *
   * @return {JSX.Element} A div element containing the exercise details rendered with specified styling.
   */
  renderExerciseDetails(exercise, index) {
    return (
      <div key={index} className="bg-white p-4 border rounded-md shadow-sm">
        <p className="font-semibold">Name: {exercise.name}</p>
        <p>Type: {exercise.type}</p>
        <p>Muscle: {exercise.muscle}</p>
        <p>Difficulty: {exercise.difficulty}</p>
        <p>Instructions: {exercise.instructions}</p>
      </div>
    );
  }
}

export default ExerciseComponent;
