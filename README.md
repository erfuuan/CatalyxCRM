
# 🚀 Catalyx CRM

**A powerful and modern CRM system built with NestJS, GraphQL, WebSocket, and PostgreSQL.**

---

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Database Setup](#database-setup)
6. [Running the Project](#running-the-project)
7. [Project Structure](#project-structure)
8. [Endpoints](#endpoints)
9. [Contributing](#contributing)
10. [License](#license)

---

## 🌟 Project Overview

**Nextra CRM** is a customer relationship management system designed to help businesses manage customer interactions, streamline sales processes, and improve customer service.

---

## 🚀 Features

- **User Authentication & Role Management**
- **Customer Management**
- **Sales Pipeline Visualization**
- **Real-time Notifications (WebSocket)**
- **GraphQL API for Flexible Data Queries**
- **Task & Calendar Management**
- **Detailed Reporting and Analytics**

---

## 🛠 Tech Stack

- **Backend:** [NestJS](https://nestjs.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **API:** [GraphQL](https://graphql.org/)
- **Real-time:** WebSocket with [Socket.io](https://socket.io/)
- **ORM:** [TypeORM](https://typeorm.io/)
- **Authentication:** JWT, Passport.js

---

## ⚙️ Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/nextra-crm.git
   cd nextra-crm
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and configure the following:
   ```dotenv
   PORT=3000
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=your_db_username
   DATABASE_PASSWORD=your_db_password
   DATABASE_NAME=nextra_crm_db
   JWT_SECRET=your_secret_key
   ```

---

## 🗄 Database Setup

1. **Ensure PostgreSQL is Running.**
2. **Create a Database:**
   ```bash
   createdb nextra_crm_db
   ```

3. **Migrate or Synchronize Schema:**
   The schema will be synchronized on startup if `synchronize: true` in the TypeORM configuration.

---

## 🚀 Running the Project

1. **Start the Development Server:**
   ```bash
   npm run start:dev
   ```

2. **Access the App:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
nextra-crm/
│
├── src/
│   ├── app.module.ts          # Root module
│   ├── main.ts                # Entry point
│   ├── modules/
│   │   ├── auth/              # Authentication module
│   │   ├── users/             # User management
│   │   ├── customers/         # Customer management
│   │   └── leads/             # Sales pipeline management
│   │
│   ├── graphql/               # GraphQL schema definitions
│   └── websockets/            # WebSocket gateways
│
└── .env                       # Environment variables
└── README.md                  # Project documentation
```

---

## 🔗 Endpoints

### **GraphQL Playground:**
Visit [http://localhost:3000/graphql](http://localhost:3000/graphql) to explore the API.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push.
4. Create a pull request.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by **Erfuuan**.