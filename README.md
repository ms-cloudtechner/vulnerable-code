# Secure Node.js Application 🚀

This is a secure Node.js application built using **Express.js** with enhanced security features like **Helmet, rate limiting, logging, and error handling**. It is containerized using **Docker** for easy deployment.

## Features 🛡️
- **Security Best Practices**
  - Uses `helmet` for secure HTTP headers.
  - Implements `express-rate-limit` to prevent DDoS attacks.
  - Uses `dotenv` for secure environment variable management.
- **Optimized for Performance**
  - Runs as a **non-root user** inside Docker for better security.
  - Uses `npm ci --only=production` for efficient dependency management.
- **Monitoring & Logging**
  - Logs incoming requests using `morgan`.
  - Provides a `/health` endpoint for service monitoring.
- **Containerized with Docker**
  - Runs in a minimal **Node.js (slim)** container for reduced attack surface.

---

## 🛠️ Installation

### **Prerequisites**
- [Node.js](https://nodejs.org/) (>= 18.x)
- [Docker](https://www.docker.com/) (optional for containerized deployment)

### **1. Clone the repository**
```bash
git clone https://github.com/your-username/secure-node-app.git
cd secure-node-app
