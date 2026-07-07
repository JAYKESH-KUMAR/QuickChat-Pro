\# QuickChat Pro



A full-stack real-time chat application built with the MERN stack and Socket.IO. Users can create accounts, sign in securely, exchange messages in real time, view online users, and manage their profiles from a responsive chat interface.



The project uses JWT-based authentication, MongoDB for persistent data storage, Socket.IO for real-time communication, and Cloudinary for profile image management.



\## Live Demo



\*\*Application:\*\* chat-app-tau-inky-63.vercel.app



> Create an account or sign in to access the chat interface and start messaging other registered users.



\---



\## Features



\### Authentication



\- User registration and login

\- JWT-based authentication

\- Protected backend routes

\- Persistent login using locally stored authentication tokens

\- Authenticated user session verification



\### Real-Time Messaging



\- Send and receive messages instantly

\- Real-time communication using Socket.IO

\- Live message updates without page refresh

\- Persistent message history

\- User-to-user conversations



\### Online User Tracking



\- Track connected users in real time

\- Display online user status

\- Update the online users list when users connect or disconnect

\- Socket-based user connection mapping



\### User Profiles



\- Update full name and bio

\- Upload and update profile pictures

\- Cloud-based image storage using Cloudinary

\- Display user profile information across the application



\### Chat Interface



\- Conversation sidebar

\- User search and selection

\- Active conversation view

\- Message input and display

\- Responsive layout

\- Loading and error feedback

\- Toast notifications for user actions



\---



\## Tech Stack



\### Frontend



\- React.js

\- Vite

\- Axios

\- Socket.IO Client

\- React Hot Toast



\### Backend



\- Node.js

\- Express.js

\- MongoDB

\- Mongoose

\- Socket.IO

\- JSON Web Token

\- bcryptjs



\### Infrastructure and Services



\- MongoDB Atlas

\- Cloudinary

\- Vercel



\---



\## Project Structure



The application follows a separated client-server architecture:



```text

QuickChat-Pro/

├── client/

│   ├── src/

│   │   ├── assets/

│   │   ├── components/

│   │   ├── context/

│   │   ├── lib/

│   │   └── pages/

│   └── package.json

│

├── server/

│   ├── controllers/

│   ├── lib/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── server.js

│   └── package.json

│

├── screenshots/

├── .gitignore

└── README.md

```



The React client handles the user interface, authentication state, API communication, and Socket.IO client connection.



The Express backend manages authentication, protected API routes, message operations, profile updates, database access, and Socket.IO server events.



\---



\## Application Flow



1\. A user creates an account or signs in.

2\. The backend validates credentials and returns a JWT.

3\. The client stores the token and attaches it to protected API requests.

4\. The authenticated user data is loaded from the backend.

5\. A Socket.IO connection is created using the authenticated user's ID.

6\. Connected users are tracked by the server.

7\. The server broadcasts updated online-user information.

8\. Users select another registered user and exchange messages.

9\. Messages are stored in MongoDB and delivered through the real-time communication layer.



\---



\## Authentication Flow



Protected routes use JWT authentication.



```text

Client Request

&#x20;     │

&#x20;     ▼

JWT Token in Request Header

&#x20;     │

&#x20;     ▼

Authentication Middleware

&#x20;     │

&#x20;     ▼

Token Verification

&#x20;     │

&#x20;     ▼

Authenticated User Loaded

&#x20;     │

&#x20;     ▼

Protected Controller

```



The backend verifies the token, loads the authenticated user, and attaches the user data to the request before protected controllers execute.



\---



\## Real-Time Communication



Socket.IO is used to maintain live connections between authenticated users.



```text

User Connects

&#x20;     │

&#x20;     ▼

Socket Connection Created

&#x20;     │

&#x20;     ▼

User ID Mapped to Socket ID

&#x20;     │

&#x20;     ▼

Online Users Broadcast

&#x20;     │

&#x20;     ▼

Real-Time Client Updates

```



When a user disconnects, the corresponding socket mapping is removed and the updated online-user list is broadcast again.



\---



\## API Overview



\### Authentication



```http

POST /api/auth/signup

POST /api/auth/login

GET /api/auth/check

PUT /api/auth/update-profile

```



Supports account creation, login, authenticated session checks, and profile updates.



\### Messages



```http

GET /api/messages/users

GET /api/messages/:id

POST /api/messages/send/:id

```



Supports fetching chat users, loading conversations, and sending messages.



> Protected endpoints require a valid authentication token.



\---



\## Screenshots



\### Login and Signup



!\[Authentication Screen](screenshots/auth.png)



\### Chat Dashboard



!\[Chat Dashboard](screenshots/chat-dashboard.png)



\### Real-Time Conversation



!\[Real-Time Conversation](screenshots/login.png)



\### Profile Management



!\[Profile Management](screenshots/profile.png)



\---



\## Getting Started



\### Prerequisites



Make sure the following are installed:



\- Node.js

\- npm

\- MongoDB-compatible database



\### 1. Clone the Repository



```bash

git clone YOUR\_GITHUB\_REPOSITORY\_URL

cd QuickChat-Pro

```



\### 2. Install Client Dependencies



```bash

cd client

npm install

```



\### 3. Install Server Dependencies



Open another terminal from the project root:



```bash

cd server

npm install

```



\### 4. Configure Environment Variables



Create environment files locally for the client and server.



\#### Client Environment



Create a `.env` file inside the `client` directory:



```env

VITE\_BACKEND\_URL=

```



\#### Server Environment



Create a `.env` file inside the `server` directory:



```env

MONGODB\_URI=

JWT\_SECRET=



CLOUDINARY\_CLOUD\_NAME=

CLOUDINARY\_API\_KEY=

CLOUDINARY\_API\_SECRET=

```



Environment variable names should match the configuration used in the project.



\*\*Never commit real database URLs, JWT secrets, API keys, or Cloudinary credentials to version control.\*\*



\### 5. Start the Backend



From the `server` directory:



```bash

npm run server

```



The API runs locally on:



```text

http://localhost:5000

```



\### 6. Start the Frontend



From the `client` directory:



```bash

npm run dev

```



The Vite development server will print the local application URL in the terminal.



\---



\## Deployment



The application uses separate frontend and backend deployments.



\### Production Services



\- Frontend hosting: Vercel

\- Backend hosting: Vercel

\- Database: MongoDB Atlas

\- Image storage: Cloudinary



The frontend communicates with the deployed backend through the configured `VITE\_BACKEND\_URL`.



\---



\## Security



\- Passwords are hashed using bcryptjs

\- Authentication uses JSON Web Tokens

\- Protected routes require authenticated requests

\- Sensitive credentials are stored in environment variables

\- Environment files are excluded from version control

\- Profile images are managed through Cloudinary

\- Backend middleware verifies authenticated users before protected operations



\---



\## Challenges and Learnings



While building and deploying QuickChat Pro, I worked through several full-stack integration challenges, including:



\- Connecting a React frontend with a separately deployed Express backend

\- Configuring cross-origin requests between frontend and backend deployments

\- Managing JWT authentication across protected API requests

\- Maintaining real-time Socket.IO connections

\- Tracking online users through socket connection mapping

\- Debugging production deployment and environment configuration issues



These challenges provided practical experience with full-stack debugging, deployment configuration, authentication flows, and real-time communication.



\---



\## Future Improvements



\- Group conversations

\- Message delivered and seen status

\- Typing indicators

\- Emoji support

\- File attachments

\- Voice messages

\- Message reactions

\- Push notifications

\- Message search

\- Video and audio calling



\---



\## Author



\*\*Jaykesh Kumar\*\*



B.Tech Computer Science and Engineering student focused on full-stack web development and software engineering.



\- GitHub:  github.com/JAYKESH-KUMAR

\- Live Project:chat-app-tau-inky-63.vercel.app



\---



\## License



This project is intended for educational and portfolio purposes.

