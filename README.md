📌 Resolve-It: A Complaint Management System

📖 Overview
Resolve-It is a web-based complaint management system that enables students or users to register complaints, track their status, and receive notifications about progress. The platform ensures better communication between users and the administration, while also providing an admin panel for managing and resolving complaints.
This project is built using the MERN stack (MongoDB, Express.js, Node.js, and plain HTML/CSS/JS frontend). It also integrates email notifications via Gmail so that users are updated whenever their complaint status changes.

✨ Features

📝 Register Complaints with details such as name, email, category, and description.
📊 Track Complaint Status (Pending, In Progress, Resolved, Rejected).
🔔 Email Notifications to users when their complaint is registered or updated.
🔑 Admin Panel with Authentication (only admin can access & update complaints).
📂 Department & Category Selection for better organization.
💾 MongoDB Database for storing complaints securely.

🛠️ Tech Stack

Frontend:
HTML, CSS, JavaScript

Backend:
Node.js, Express.js

Database:
MongoDB (Mongoose ORM)

Other Integrations:
JWT (JSON Web Token) for Admin Authentication
Nodemailer for Email Notifications

🚀 Getting Started

1️⃣ Clone the repository
git clone https://github.com/your-username/Resolve-it-main-A-complaint-management-system-.git
cd Resolve-it-main-A-complaint-management-system-

2️⃣ Install dependencies
Go to backend folder and install required packages:
cd resolveit-backend
npm install

3️⃣ Setup Environment Variables
Create a .env file inside resolveit-backend and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_gmail_id
EMAIL_PASS=your_gmail_app_password
PORT=5001

4️⃣ Run the server
node server.js

5️⃣ Open frontend
Simply open the resolveit-frontend folder and launch index.html in browser.

📸 Screenshots
Complaint Registration Form
Complaint Tracking Page
Admin Panel

🔮 Future Enhancements
Add role-based access for multiple admins
Implement analytics dashboard (complaints by department/category)
Real-time updates using WebSockets
Mobile-friendly responsive UI

👩‍💻 Author
Sneha Goswami
✨ Passionate about building impactful full-stack applications.
