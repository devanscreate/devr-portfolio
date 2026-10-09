---
title: "Hardened Linux Infrastructure & Reverse Proxy Gateway"
role: "DevOps/SRE"
description: "Multi-environment Nginx reverse proxy architecture with automated TLS termination, SSH port-forwarding tunnels, and hardened systemd daemons on Linux."
impact: "Achieved A+ SSL Labs rating, automated certificate rotation, and zero-downtime service reloads"
stack: ["Nginx", "Linux Internals", "Systemd", "SSH Tunnels", "Docker", "UFW Firewall"]
github: "https://github.com/devanscreate/hardened-linux-proxy"
demo: "https://devr-portfolio.31januaridd.workers.dev/#projects"
featured: true
order: 3
---

### Architecture Overview
Designed and provisioned a secured edge gateway running on hardened Ubuntu/Debian Linux servers, serving as the single point of ingress for containerized microservices and internal service mesh endpoints.

### Technical Challenges & Implementation
- **Nginx Hardening & Zero-Downtime Reloads**: Structured modular Nginx configurations with strict TLS 1.3 ciphers, HSTS headers, Gzip/Brotli compression, and pre-deployment `nginx -t` validation before graceful signal reloads (`kill -HUP`).
- **Secure Remote Access & SSH Tunnels**: Established persistent reverse SSH tunnels for secure debugging and internal service bridging without exposing unauthenticated raw ports to the public internet.
- **Firewall & Least Privilege**: Implemented strict UFW/iptables rate-limiting rules, fail2ban brute-force protection, and unprivileged user execution policies for all web service daemons.
- **Persistent Multi-Stage Docker Stacks**: Containerized application runtimes with minimal Alpine/Distroless base images and automated volume mount persistence for zero data loss during rolling image upgrades.
