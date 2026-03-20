---
title: "Docker Networking Deep Dive: Why Containers Can't Talk to Each Other"
date: "2026-03-10"
tags: ["docker", "networking", "backend", "devops"]
description: "A deep dive into Docker's networking model — bridge networks, DNS resolution, and the most common reasons containers fail to communicate."
---

## The Problem

You spin up two Docker containers. They're both running. You try to connect from one to the other using `localhost` — and it fails. You try the container name — still nothing.

**Why can't your containers talk to each other?**

## Why It Happens

Docker isolates each container into its own **network namespace**. By default, `localhost` inside a container refers to **that container only**, not the host or other containers.

### Docker's Default Bridge Network

When you run `docker run` without specifying a network, Docker attaches the container to the default `bridge` network. The problem? Containers on the default bridge network **cannot resolve each other by name**.

```bash
# These two containers can't find each other by name
docker run -d --name api my-api
docker run -d --name db postgres

# Inside 'api' container:
ping db  # ❌ Unknown host
```

### The Fix: User-Defined Bridge Networks

Create a custom network. Docker provides **automatic DNS resolution** for containers on user-defined networks.

```bash
# Create a custom network
docker network create my-app

# Run containers on the same network
docker run -d --name api --network my-app my-api
docker run -d --name db --network my-app postgres

# Inside 'api' container:
ping db  # ✅ Works!
```

## Common Pitfalls

### 1. Port Confusion

`-p 3000:3000` maps a port to the **host**. Container-to-container communication uses the **internal port** directly — no port mapping needed.

```yaml
# docker-compose.yml
services:
  api:
    build: ./api
    environment:
      # Use the service name and INTERNAL port
      DB_HOST: db
      DB_PORT: 5432
  db:
    image: postgres
    # ports: ["5432:5432"]  # Only needed for host access
```

### 2. DNS Resolution Timing

Your API might start before the database is ready. The DNS name resolves, but the **service isn't accepting connections** yet.

```yaml
services:
  api:
    depends_on:
      db:
        condition: service_healthy
  db:
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5
```

### 3. Network Isolation

Containers on **different networks** are isolated by design. If you need cross-network communication, attach the container to multiple networks.

```bash
docker network connect my-app some-other-container
```

## Key Takeaway

Docker networking confusion usually comes from one misunderstanding: **containers are isolated by default.** Use user-defined bridge networks for DNS-based discovery, connect to internal ports (not mapped ones), and handle service readiness properly. Once you understand the network namespace model, debugging becomes straightforward.
