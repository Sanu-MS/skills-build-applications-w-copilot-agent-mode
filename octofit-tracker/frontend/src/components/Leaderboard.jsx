import CollectionPage from './CollectionPage'

function Leaderboard() {
  return (
    <CollectionPage
      component="leaderboard"
      title="Leaderboard"
      description="Current weekly standings for the OctoFit challenge."
      emptyMessage="No leaderboard entries were returned by the API."
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'userId', label: 'User ID' },
        { key: 'points', label: 'Points' },
        { key: 'weekStart', label: 'Week Start' },
      ]}
      renderRow={(entry) => (
        <tr key={entry._id}>
          <td>
            <span className="badge text-bg-warning text-dark">#{entry.rank}</span>
          </td>
          <td>
            <code className="octofit-code">{entry.userId}</code>
          </td>
          <td>{entry.points}</td>
          <td>{new Date(entry.weekStart).toLocaleDateString()}</td>
        </tr>
      )}
    />
  )
}

export default Leaderboard
