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
    <div>
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Muscles (comma-separated):
          <input type="text" value={muscles} onChange={(e) => setMuscles(e.target.value)} required />
        </label>
        <label>
          Type:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        </label>
        <label>
          Difficulty:
          <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
        </label>
        <button type="submit">Create Workout</button>
      </form>

      {error && <p>Error: {error}</p>}

      {Object.keys(workout).length > 0 && (
        <div className="workout-plan">
          {Object.entries(workout).map(([muscle, exercises]) => (
            <div key={muscle}>
              <h3>{muscle}</h3>
              <ul>
                {exercises.map((exercise, index) => (
                  <li key={index}>
                    Name: {exercise.name}<br />
                    Type: {exercise.type}<br />
                    Muscle: {exercise.muscle}<br />
                    Difficulty: {exercise.difficulty}<br />
                    Instructions: {exercise.instructions}
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
