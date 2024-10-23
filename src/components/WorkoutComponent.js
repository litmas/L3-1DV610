import React, { useState } from 'react';
import WorkoutPlanner from '../assignmentL2/workoutModule/workoutPlanner';

const WorkoutComponent = () => {
  const [muscles, setMuscles] = useState('');
  const [type, setType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [workout, setWorkout] = useState({});
  const [error, setError] = useState(null);

  const workoutPlanner = new WorkoutPlanner();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const musclesArray = muscles.split(',').map(muscle => muscle.trim());

    try {
      const createdWorkout = await workoutPlanner.createWorkout(musclesArray, type, difficulty);
      setWorkout(createdWorkout);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Muscles (comma-separated):</span>
          <input type="text" value={muscles} onChange={(e) => setMuscles(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block">
          <span className="text-gray-700">Type:</span>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <label className="block">
          <span className="text-gray-700">Difficulty:</span>
          <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Create Workout</button>
      </form>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {Object.keys(workout).length > 0 && (
        <div className="workout-plan mt-6 space-y-4">
          {Object.entries(workout).map(([muscle, exercises]) => (
            <div key={muscle} className="bg-white p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-bold">{muscle}</h3>
              <ul className="list-disc pl-5">
                {exercises.map((exercise, index) => (
                  <li key={index} className="mt-2">
                    <p>Name: {exercise.name}</p>
                    <p>Type: {exercise.type}</p>
                    <p>Muscle: {exercise.muscle}</p>
                    <p>Difficulty: {exercise.difficulty}</p>
                    <p>Instructions: {exercise.instructions}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutComponent;
