import CollectionPage from './CollectionPage'

function Teams() {
  return (
    <CollectionPage
      component="teams"
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
