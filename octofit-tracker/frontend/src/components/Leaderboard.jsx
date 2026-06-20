import CollectionPage from './CollectionPage'

const API_ORIGIN = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://127.0.0.1:8000'

const LEADERBOARD_API_ENDPOINT = `${API_ORIGIN}/api/leaderboard/`

function Leaderboard() {
  return (
    <CollectionPage
      endpointUrl={LEADERBOARD_API_ENDPOINT}
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
