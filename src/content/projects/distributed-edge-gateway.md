---
title: "EdgeGuard: Distributed Reverse Proxy & Rate Limiter"
role: "Hybrid"
description: "High-performance edge reverse proxy with distributed sliding-window token bucket rate limiting, automated TLS termination, and real-time security telemetry."
impact: "Protected 40M+ daily requests; mitigated 15+ Layer 7 DDoS incidents"
stack: ["Go", "Nginx", "Redis", "eBPF", "Docker", "Prometheus", "Cloudflare"]
github: "https://github.com/example/edgeguard-proxy"
demo: "https://edgeguard-docs.pages.dev"
featured: true
order: 3
---

## System Overview
EdgeGuard bridges systems engineering and software architecture by delivering a low-footprint reverse proxy layer capable of filtering malicious traffic before reaching origin application clusters.

### Architecture Highlights
- **Sub-Millisecond Policy Evaluation**: Written in Go with customized Nginx OpenResty Lua hooks and Redis for synchronized global quota management.
- **Dynamic Upstream Discovery**: Real-time integration with service registries for zero-reload upstream reconfigurations.
- **Real-Time Telemetry**: Emits high-resolution OpenTelemetry metrics to Prometheus and vector logs to Grafana Loki.
