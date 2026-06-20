import CollectionPage from './CollectionPage'

const API_ORIGIN = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://127.0.0.1:8000'

const USERS_API_ENDPOINT = `${API_ORIGIN}/api/users/`

function Users() {
  return (
    <CollectionPage
      endpointUrl={USERS_API_ENDPOINT}
      title="Users"
      description="Registered OctoFit members and their current profile details."
      emptyMessage="No users were returned by the API."
      columns={[
        { key: 'email', label: 'Email' },
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'teamId', label: 'Team ID' },
      ]}
      renderRow={(user) => (
        <tr key={user._id}>
          <td>{user.email}</td>
          <td>{user.name}</td>
          <td>
            <span className="badge text-bg-light text-uppercase">{user.role}</span>
          </td>
          <td>
            <code className="octofit-code">{user.teamId ?? 'Unassigned'}</code>
          </td>
        </tr>
      )}
    />
  )
}

export default Users
