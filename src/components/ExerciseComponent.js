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
      <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Muscle:</span>
            <input type="text" value={muscle} onChange={(e) => setMuscle(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </label>
          <label className="block">
            <span className="text-gray-700">Type:</span>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </label>
          <label className="block">
            <span className="text-gray-700">Difficulty:</span>
            <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </label>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Generate</button>
        </form>
  
        {error && <p className="text-red-500 mt-4">Error: {error}</p>}
  
        {submitted && exercises.length === 0 ? (
          <p className="text-gray-700 mt-4">No exercises found for the selected criteria.</p>
        ) : null}
  
        {exercises.length > 0 && (
          <div className="mt-6 space-y-4">
            {exercises.map((exercise, index) => (
              <div key={index} className="bg-white p-4 border rounded-md shadow-sm">
                <p className="font-semibold">Name: {exercise.name}</p>
                <p>Type: {exercise.type}</p>
                <p>Muscle: {exercise.muscle}</p>
                <p>Difficulty: {exercise.difficulty}</p>
                <p>Instructions: {exercise.instructions}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default ExerciseComponent;
