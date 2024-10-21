import React, { useState } from 'react';
import WorkoutPlanner from '../assignmentL2/workoutModule/workoutPlanner.js';

const WorkoutSplitComponent = () => {
  const [splitType, setSplitType] = useState('');
  const [tempSplitType, setTempSplitType] = useState(''); // Temporary state for user input
  const [workoutType, setWorkoutType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState({});
  const [error, setError] = useState(null);

  const workoutPlanner = new WorkoutPlanner();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSplitType(tempSplitType); // Set the actual split type from temp state
      const createdSplit = await workoutPlanner.createWorkoutSplit(tempSplitType, workoutType, difficulty);
      setWorkoutPlan(createdSplit);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Create Workout Split</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Split Type:
          <select value={tempSplitType} onChange={(e) => setTempSplitType(e.target.value)}>
            <option value="pplSplit">Push/Pull/Legs Split</option>
            <option value="arnoldSplit">Arnold Split</option>
            <option value="fullBodySplit">Full Body Split</option>
            <option value="upperLowerSplit">Upper/Lower Split</option>
            <option value="fourDaySplit">Four-Day Split</option>
            <option value="fiveDaySplit">Five-Day Split</option>
          </select>
        </label>
        <label>
          Workout Type:
          <input type="text" value={workoutType} onChange={(e) => setWorkoutType(e.target.value)} required />
        </label>
        <label>
          Difficulty:
          <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
        </label>
        <button type="submit">Create Workout Split</button>
      </form>

      {error && <p>Error: {error}</p>}

      {Object.keys(workoutPlan).length > 0 && (
        <div>
          <h2>{splitType.charAt(0).toUpperCase() + splitType.slice(1)} Workout Plan</h2>
          {Object.entries(workoutPlan).map(([day, muscles]) => (
            <div key={day}>
              <h3>{day}</h3>
              {typeof muscles === 'object' && !Array.isArray(muscles) ? (
                Object.entries(muscles).map(([muscleGroup, exercises]) => (
                  <div key={muscleGroup}>
                    <h4>{muscleGroup}</h4>
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
                ))
              ) : (
                <p>{muscles}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutSplitComponent;
