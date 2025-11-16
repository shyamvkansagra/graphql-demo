import { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { gql } from 'graphql-tag';
import './AddUser.scss';

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addUser, { loading, error, data }] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }
    try {
      await addUser({ variables: { name, email } });
      setName('');
      setEmail('');
      alert('User added successfully!');
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  return (
    <div className="add-user-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="form-group">
          <label className="form-label">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Enter user name"
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter user email"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="submit-button"
        >
          {loading ? 'Adding...' : 'Add User'}
        </button>
        {error && (
          <p className="error-message">
            Error: {error.message}
          </p>
        )}
        {data && (
          <p className="success-message">
            User added successfully! ID: {data.addUser.id}
          </p>
        )}
      </form>
    </div>
  );
}

export default AddUser;

