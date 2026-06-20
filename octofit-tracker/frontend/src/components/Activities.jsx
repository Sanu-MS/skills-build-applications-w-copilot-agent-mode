import CollectionPage from './CollectionPage'

const API_ORIGIN = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://127.0.0.1:8000'

const ACTIVITIES_API_ENDPOINT = `${API_ORIGIN}/api/activities/`

function Activities() {
  return (
    <CollectionPage
      endpointUrl={ACTIVITIES_API_ENDPOINT}
      title="Activities"
      description="Workout sessions recorded for OctoFit members."
      emptyMessage="No activities were returned by the API."
      columns={[
        { key: 'type', label: 'Activity' },
        { key: 'userId', label: 'User ID' },
        { key: 'durationMinutes', label: 'Duration' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'performedAt', label: 'Performed At' },
      ]}
      renderRow={(activity) => (
        <tr key={activity._id}>
          <td>{activity.type}</td>
          <td>
            <code className="octofit-code">{activity.userId}</code>
          </td>
          <td>{activity.durationMinutes} min</td>
          <td>{activity.caloriesBurned}</td>
          <td>{new Date(activity.performedAt).toLocaleString()}</td>
        </tr>
      )}
    />
  )
}

export default Activities
