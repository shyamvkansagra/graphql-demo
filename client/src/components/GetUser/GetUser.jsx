import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client/react';
import { gql } from 'graphql-tag';
import './GetUser.scss';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const REMOVE_USER = gql`
  mutation RemoveUser($id: ID!) {
    removeUser(id: $id) {
      id
      name
      email
    }
  }
`;

function GetUser() {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [removeUser, { loading: removeUserLoading }] = useMutation(REMOVE_USER, {
    refetchQueries: [{ query: GET_USERS }],
    awaitRefetchQueries: true,
  });
  
  useEffect(() => {
    refetch();
  }, []);

  const handleRemoveUser = async (id) => {
    try {
      await removeUser({ variables: { id } });
    } catch (err) {
      console.error('Error removing user:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="get-user-container">
      <h2>Get Users</h2>
      <button onClick={() => refetch()} className="refresh-button" disabled={loading || removeUserLoading}>
        {loading || removeUserLoading ? 'Refreshing...' : 'Refresh Users'}
      </button>
      {data && data.users && data.users.length > 0 ? (
        <div>
          <h3>Users List:</h3>
          <ul className="users-list">
            {data.users.map((user) => (
              <li key={user.id} className="user-item">
                <div className="user-item-content">
                  <span><strong>ID:</strong> {user.id} </span>
                  <span><strong>Name:</strong> {user.name}</span>
                  <span><strong>Email:</strong> {user.email}</span>
                </div>
                <button 
                  onClick={() => handleRemoveUser(user.id)} 
                  className="remove-button"
                  disabled={removeUserLoading}
                >
                  {removeUserLoading ? '...' : 'X'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default GetUser;

