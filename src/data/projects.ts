export interface Project {
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "UDP Latency Optimizer",
    problem:
      "Real-time applications suffer from high latency when UDP packets take suboptimal routes. Need to measure and compare direct vs relay RTT to choose the fastest path.",
    solution:
      "Built a tool that measures round-trip time for direct UDP connections vs relay servers, dynamically selecting the lowest-latency route. Implements custom packet sequencing and loss detection.",
    techStack: ["C++", "Networking", "UDP", "Socket Programming"],
    github: "https://github.com/vinitsingare/udp-latency-optimizer",
    featured: true,
  },
  {
    title: "Microservice E-Commerce Platform",
    problem:
      "Monolithic e-commerce apps become unmaintainable at scale. Services need independent deployment, scaling, and fault isolation.",
    solution:
      "Designed a microservice architecture with separate services for auth (JWT), products, orders, and payments. Implemented API gateway routing, inter-service communication, and database-per-service pattern.",
    techStack: ["Spring Boot", "Java", "MySQL", "JWT", "Docker", "REST API"],
    github: "https://github.com/vinitsingare/ecommerce-microservices",
    live: "https://ecommerce-demo.example.com",
    featured: true,
  },
  {
    title: "Real-Time Chat System",
    problem:
      "Building low-latency, bidirectional communication for chat requires efficient connection management and message broadcasting.",
    solution:
      "Implemented WebSocket-based real-time messaging with room support, typing indicators, and persistent message history using MongoDB. Handles connection drops gracefully with auto-reconnect.",
    techStack: ["Node.js", "WebSocket", "MongoDB", "Express", "React"],
    github: "https://github.com/vinitsingare/realtime-chat",
    featured: true,
  },
  {
    title: "Custom Database Indexing Engine",
    problem:
      "Understanding how databases achieve O(log n) lookups requires building an index from scratch.",
    solution:
      "Implemented a B+ tree based indexing engine in C++ that supports insert, search, range queries, and deletion. Benchmarked against linear scans to demonstrate performance gains.",
    techStack: ["C++", "Data Structures", "File I/O", "Algorithms"],
    github: "https://github.com/vinitsingare/btree-index",
  },
  {
    title: "Container Network Debugger",
    problem:
      "Docker networking issues (DNS resolution, port conflicts, cross-container communication) are hard to diagnose.",
    solution:
      "CLI tool that inspects Docker network configurations, tests connectivity between containers, validates DNS resolution, and generates diagnostic reports with fix suggestions.",
    techStack: ["Go", "Docker API", "Networking", "CLI"],
    github: "https://github.com/vinitsingare/container-net-debug",
  },
  {
    title: "Distributed Task Queue",
    problem:
      "Processing background jobs reliably at scale requires fault-tolerant task distribution and retry mechanisms.",
    solution:
      "Built a Redis-backed distributed task queue with worker pools, priority queues, dead-letter handling, and at-least-once delivery guarantees. Includes a monitoring dashboard.",
    techStack: ["Node.js", "Redis", "TypeScript", "Bull"],
    github: "https://github.com/vinitsingare/task-queue",
  },
];
