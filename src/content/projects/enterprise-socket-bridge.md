---
title: "Enterprise Socket Bridge & Backend Microservices"
role: "Hybrid"
description: "Cross-service communication bridge utilizing non-blocking raw TCP sockets between long-running Python processing workers and a modular Laravel & Vue.js application ecosystem."
impact: "Decoupled compute-heavy workloads, eliminating 100% of synchronous HTTP worker timeouts"
stack: ["Python", "Laravel", "Vue.js", "TCP Socket", "Linux", "Nginx", "MySQL"]
github: "https://github.com/devanscreate/enterprise-socket-bridge"
demo: "https://devr-portfolio.31januaridd.workers.dev/#projects"
featured: true
order: 2
---

### Architecture Overview
Architected a resilient distributed bridge connecting PHP (Laravel) web request cycles with asynchronous Python computing daemons via custom raw TCP socket protocols.

### Technical Challenges & Implementation
- **Decoupled Architecture**: Separated long-running verification and compute workloads from PHP-FPM web workers, eliminating request thread pool exhaustion and gateway 504 timeouts.
- **Binary & JSON Message Serialization**: Formatted TCP frames with length-prefix headers to ensure reliable packet framing, buffering, and message boundary detection over persistent TCP connections.
- **Process Supervisor & Systemd**: Managed background Python worker processes using custom systemd unit files with automatic restart policies, CPU affinity limits, and healthcheck heartbeats.
- **Reactive Client UI**: Bound socket status and job completion queues to a responsive Vue.js frontend with live feedback and state recovery.
