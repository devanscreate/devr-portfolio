---
title: "OmniCart: Real-Time Distributed E-Commerce Engine"
role: "Full-Stack"
description: "High-concurrency microservices platform featuring event-driven order processing, sub-50ms catalog searches, and resilient Stripe checkout integration."
impact: "Handled 15,000 req/sec peak with p99 latency < 45ms"
stack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Docker"]
github: "https://github.com/example/omnicart-engine"
demo: "https://omnicart-demo.pages.dev"
featured: true
order: 1
---

## System Overview
OmniCart is a distributed commerce backend and headless storefront engineered to withstand flash-sale traffic spikes without inventory overselling or transactional deadlocks.

### Architecture Highlights
- **Decoupled Asynchronous Processing**: Utilized Apache Kafka for decoupling checkout workflows, inventory reservation, and payment capture events.
- **Multi-Tier Caching**: Implemented a cache-aside architecture using Redis clusters to achieve sub-millisecond catalog reads and distributed locks during flash sales.
- **Resilient Database Design**: Configured PostgreSQL with read replicas, row-level locking for inventory ledgers, and automated WAL archiving.
- **Zero-Trust Client Layer**: Single-Page Application built with React and TypeScript consuming OpenAPI-generated contracts with strict runtime validation.

### Production Results
- Decreased checkout abandonment by 28% through deterministic sub-second checkout pipelines.
- Reduced database read saturation by 82% via distributed Redis caching strategies.
