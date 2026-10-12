---
title: "Centralized Observability & Automated Incident Recovery Mesh"
role: "DevOps/SRE"
description: "Production telemetry stack with Prometheus metric scraping, Grafana dashboards tracking the four Golden Signals, and automated self-healing scripts for Linux daemons."
impact: "Reduced Mean Time to Detect (MTTD) from 25m to < 45s with automated webhook incident escalation"
stack: ["Prometheus", "Grafana", "Linux Systemd", "Docker", "Nginx", "GitHub Actions", "Bash"]
github: "https://github.com/devanscreate/centralized-observability-mesh"
demo: "https://devr-portfolio.31januaridd.workers.dev/#projects"
featured: true
span: full
order: 5
---

### Architecture Overview
Designed and deployed a full-stack telemetry and monitoring architecture for distributed Linux hosts, tracking service health metrics and enabling proactive anomaly resolution before user degradation.

### Technical Challenges & Implementation
- **The Four Golden Signals Monitoring**: Configured Prometheus exporters to track latency, traffic, errors, and system saturation across Nginx, Docker engines, and database daemons.
- **Automated Incident Escalation**: Integrated Alertmanager with custom webhook bridges to push structured incident notifications with runbook links to Telegram and Discord channels.
- **Self-Healing Process Daemonization**: Created custom systemd watchdog timers and automated bash healthcheck probes to restart stalled worker daemons with zero human intervention.
- **Resource-Constrained Optimization**: Tuned metric retention periods and TSDB block compaction to operate within limited disk footprints without performance degradation.
