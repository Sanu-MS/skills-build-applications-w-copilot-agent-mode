import CollectionPage from './CollectionPage'

function Users() {
  return (
    <CollectionPage
      component="users"
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
