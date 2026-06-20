import CollectionPage from './CollectionPage'

const API_ORIGIN = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://127.0.0.1:8000'

const TEAMS_API_ENDPOINT = `${API_ORIGIN}/api/teams/`

function Teams() {
  return (
    <CollectionPage
      endpointUrl={TEAMS_API_ENDPOINT}
      title="Teams"
      description="Competitive teams and their roster assignments."
      emptyMessage="No teams were returned by the API."
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'captainId', label: 'Captain ID' },
        { key: 'memberIds', label: 'Members' },
      ]}
      renderRow={(team) => (
        <tr key={team._id}>
          <td>{team.name}</td>
          <td>
            <code className="octofit-code">{team.captainId ?? 'Unassigned'}</code>
          </td>
          <td>{Array.isArray(team.memberIds) ? team.memberIds.length : 0}</td>
        </tr>
      )}
    />
  )
}

export default Teams
