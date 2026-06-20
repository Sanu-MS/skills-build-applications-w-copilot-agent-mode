import CollectionPage from './CollectionPage'

const API_ORIGIN = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://127.0.0.1:8000'

const WORKOUTS_API_ENDPOINT = `${API_ORIGIN}/api/workouts/`

function Workouts() {
  return (
    <CollectionPage
      endpointUrl={WORKOUTS_API_ENDPOINT}
      title="Workouts"
      description="Suggested training sessions available in the system."
      emptyMessage="No workouts were returned by the API."
      columns={[
        { key: 'name', label: 'Workout' },
        { key: 'focusArea', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Duration' },
        { key: 'instructions', label: 'Instructions' },
      ]}
      renderRow={(workout) => (
        <tr key={workout._id}>
          <td>{workout.name}</td>
          <td>{workout.focusArea}</td>
          <td>
            <span className="badge text-bg-info text-uppercase">{workout.difficulty}</span>
          </td>
          <td>{workout.durationMinutes} min</td>
          <td>{Array.isArray(workout.instructions) ? workout.instructions.length : 0}</td>
        </tr>
      )}
    />
  )
}

export default Workouts
