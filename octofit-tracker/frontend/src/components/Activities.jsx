import CollectionPage from './CollectionPage'

function Activities() {
  return (
    <CollectionPage
      component="activities"
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
