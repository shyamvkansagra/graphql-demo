# GraphQL Demo

A full-stack GraphQL application demonstrating Apollo Server with Express and a React client using Apollo Client. This project showcases CRUD operations for user management with a modern, component-based architecture.

## 🚀 What We Built

This project demonstrates a complete GraphQL implementation with:

- **Backend**: Apollo Server v4 with Express.js serving a GraphQL API
- **Frontend**: React 19 application with Vite, Apollo Client, and React Router
- **Features**: User management with Create, Read, and Delete operations
- **Architecture**: Component-based structure with lazy loading and code splitting

## 📋 Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Apollo Server v4** - GraphQL server
- **GraphQL** - Query language for APIs
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Apollo Client** - GraphQL client
- **React Router** - Client-side routing
- **SCSS** - CSS preprocessor
- **GraphQL Tag** - GraphQL query parsing

## 📁 Project Structure

```
graphql-demo/
├── server/                 # Backend GraphQL server
│   ├── server.js          # Express server with Apollo Server setup
│   ├── schema.js          # GraphQL schema and resolvers
│   └── package.json       # Server dependencies
│
└── client/                # Frontend React application
    ├── src/
    │   ├── components/    # React components
    │   │   ├── AddUser/   # Add user component
    │   │   └── GetUser/   # Get/Remove users component
    │   ├── App.jsx        # Main app component with routing
    │   ├── App.scss       # App styles
    │   └── main.jsx       # Entry point with Apollo Client setup
    ├── public/            # Static assets
    └── package.json       # Client dependencies
```

## 🎯 Features

### Backend Features
- GraphQL API with Query and Mutation operations
- User CRUD operations (Create, Read, Delete)
- CORS enabled for cross-origin requests
- Health check endpoint

### Frontend Features
- **Lazy Loading**: Components are loaded on-demand for better performance
- **Code Splitting**: Automatic code splitting with React Router
- **Routing**: Individual routes for Add User and Get Users pages
- **Real-time Updates**: Automatic refresh after mutations
- **Modern UI**: Styled with SCSS and responsive design

## 🔧 Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The GraphQL server will run on `http://localhost:4000/graphql`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The React app will run on `http://localhost:5173`

## 📡 GraphQL Schema

### Queries
```graphql
query GetUsers {
  users {
    id
    name
    email
  }
}

query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
```

### Mutations
```graphql
mutation AddUser($name: String!, $email: String!) {
  addUser(name: $name, email: $email) {
    id
    name
    email
  }
}

mutation RemoveUser($id: ID!) {
  removeUser(id: $id) {
    id
    name
    email
  }
}
```

## 🎨 Routes

- `/` - Home page with navigation
- `/users` - View all users with remove functionality
- `/add-user` - Add a new user form

## 🔄 How It Works

### Component Architecture
- **App.jsx**: Main application component with routing setup
- **GetUser**: Displays all users with ability to remove them
- **AddUser**: Form component to add new users

### Data Flow
1. User actions trigger GraphQL mutations/queries
2. Apollo Client sends requests to the GraphQL server
3. Server processes requests through resolvers
4. Data is returned and cached by Apollo Client
5. React components re-render with updated data

### Automatic Refresh
After performing mutations (add/remove user), the users list automatically refreshes using Apollo Client's `refetchQueries` feature, ensuring the UI stays in sync with the server state.

## 🛠️ Development

### Building for Production

**Client:**
```bash
cd client
npm run build
```

**Server:**
The server uses Node.js directly, no build step required.

### Linting

**Client:**
```bash
cd client
npm run lint
```

## 📝 Key Implementation Details

1. **Lazy Loading**: Components are imported using React's `lazy()` function for code splitting
2. **Suspense Boundaries**: Loading states are handled with React Suspense
3. **Apollo Client Setup**: Configured with HttpLink for GraphQL communication
4. **SCSS Styling**: All styles are organized in separate SCSS files per component
5. **Error Handling**: GraphQL errors are handled and displayed to users

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies for both server and client
3. Start the server: `cd server && npm start`
4. Start the client: `cd client && npm run dev`
5. Open `http://localhost:5173` in your browser

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

Shyam Kansagra

---

**Note**: Make sure both the server and client are running simultaneously for the application to work properly.

