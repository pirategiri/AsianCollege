# PMO Analytics Dashboard

This is a full-stack application that provides a Project Management Office (PMO) dashboard to consolidate and analyze project delivery data from multiple sources.

## Features

- **Portfolio Overview:** A unified list of all projects with key details.
- **Delivery Analytics:** Charts and metrics for completion trends, planned vs. actual progress, and more.
- **Resource Workload:** Insights into resource utilization and capacity.
- **Risk & Issue Intelligence:** Risk heatmaps, top blockers, and issue aging.
- **Category-Level Alignment:** Analytics for projects grouped by category.
- **Data Source Settings:** Connect to Jira boards or upload Excel/CSV files.

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Recharts, Zustand, Axios
- **Backend:** Node.js, Express, PostgreSQL, Prisma
- **Deployment:** Docker, Docker Compose

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your local machine.
- Node.js and npm (for local development without Docker).

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd pmo-dashboard
   ```

2. **Create a `.env` file:**

   Create a `.env` file in the root of the project and add the following environment variables:

   ```env
   DATABASE_URL="postgresql://user:password@db:5432/pmo_dashboard"
   POSTGRES_USER=user
   POSTGRES_PASSWORD=password
   POSTGRES_DB=pmo_dashboard
   JWT_SECRET="your-jwt-secret"

   # Optional: Jira API Credentials
   JIRA_DOMAIN="your-domain.atlassian.net"
   JIRA_USER_EMAIL="your-email@example.com"
   JIRA_API_TOKEN="your-api-token"
   ```

### Running the Application with Docker

To run the entire application (frontend, backend, and database) with a single command, use Docker Compose:

```bash
sudo docker compose up --build
```

The frontend will be available at `http://localhost:5173`, and the backend API will be available at `http://localhost:3001`.

### Running the Application Locally (Without Docker)

**Backend:**

```bash
cd backend
npm install
# Set up your local PostgreSQL database and update the DATABASE_URL in the .env file
npx prisma migrate dev
npm run dev
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

## Deployment

The application is designed to be deployed using Docker. You can use the provided `docker-compose.yml` file as a starting point for deploying to a cloud provider of your choice.

## Future Enhancements

- **More Chart Types:** Add more chart types and customization options to the analytics dashboards.
- **Real-time Updates:** Implement WebSockets for real-time updates to the dashboards.
- **User Management:** Add a full-fledged user management system with roles and permissions.
- **More Data Sources:** Add support for more data sources, such as Asana or Trello.
