import React, { useState } from 'react';
import ExerciseGenerator from '../assignmentL2/workoutModule/exerciseGenerator';

const ExerciseComponent = () => {
    const [muscle, setMuscle] = useState('');
    const [type, setType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [exercises, setExercises] = useState([]);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false); 
  
    const exerciseGenerator = new ExerciseGenerator();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitted(true);
  
      try {
        const fetchedExercises = await exerciseGenerator.generateExercises(muscle, type, difficulty);
        setExercises(fetchedExercises);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <div>
        <h2>Generate Exercises</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Muscle:
            <input type="text" value={muscle} onChange={(e) => setMuscle(e.target.value)} required />
          </label>
          <label>
            Type:
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
          </label>
          <label>
            Difficulty:
            <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
          </label>
          <button type="submit">Generate</button>
        </form>
  
        {error && <p>Error: {error}</p>}
  
        {submitted && exercises.length === 0 ? (
          <p>No exercises found for the selected criteria.</p>
        ) : null}
  
        {exercises.length > 0 && (
          <div>
            {exercises.map((exercise, index) => (
              <p key={index}>
                Name: {exercise.name}<br />
                Type: {exercise.type}<br />
                Muscle: {exercise.muscle}<br />
                Difficulty: {exercise.difficulty}<br />
                Instructions: {exercise.instructions}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default ExerciseComponent;
