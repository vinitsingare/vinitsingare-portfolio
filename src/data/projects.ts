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
    title: "AgriChain: Blockchain Supply Chain",
    problem:
      "Lack of transparency and traceability in agricultural supply chains leads to inefficient tracking, opaque pricing, and margin manipulation.",
    solution:
      "Built a decentralized supply chain management system on Ethereum, enabling real-time tracking of item states, complete price transparency, and multi-role participation (Farmer, Distributor, Retailer, Consumer).",
    techStack: ["Solidity", "React", "Node.js", "Truffle", "Web3.js", "Express"],
    github: "https://github.com/vinitsingare/FSD-AgriChain",
    featured: true,
  },
  {
    title: "PayPal Clone: Microservices Payment System",
    problem:
      "Traditional payment systems face challenges with horizontal scalability and real-time transaction processing at scale.",
    solution:
      "Engineering a high-throughput payment platform using a microservices architecture. Leveraging Kafka for event-driven transaction processing, ensuring eventual consistency and fault tolerance across distributed services.",
    techStack: ["Java", "Spring Boot", "Kafka", "Microservices", "PostgreSQL"],
    featured: false,
  },
];
