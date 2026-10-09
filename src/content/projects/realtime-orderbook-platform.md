---
title: "High-Performance Market Feed & Real-Time Orderbook Platform"
role: "Full-Stack"
description: "Real-time market data visualization platform streaming high-frequency ticker updates via asynchronous WebSockets, HTML5 Canvas rendering, and a Python FastAPI backend."
impact: "Sub-15ms WebSocket push latency with zero browser frame drops during peak market volatility"
stack: ["FastAPI", "Python", "WebSockets", "HTML5 Canvas", "Docker", "Redis"]
github: "https://github.com/devanscreate/realtime-orderbook-feed"
demo: "https://devr-portfolio.31januaridd.workers.dev/#projects"
featured: true
order: 1
---

### Architecture Overview
Designed and engineered a high-throughput real-time market data visualizer capable of receiving, sequencing, and rendering rapid price updates without freezing client DOM trees.

### Technical Challenges & Implementation
- **Low-Latency Socket Layer**: Built an asynchronous WebSocket server on FastAPI with uvicorn and uvloop, utilizing Redis pub/sub to broadcast state changes with sub-15ms delivery.
- **Hardware-Accelerated Canvas Rendering**: Avoided heavy DOM re-renders by painting depth charts and live orderbook ladders directly onto an HTML5 Canvas context using a 60 FPS requestAnimationFrame loop.
- **Memory-Efficient Data Structures**: Implemented fixed-size circular ring buffers on the frontend to maintain rolling ticker history with predictable memory overhead.
- **Resilient Reconnection Engine**: Engineered an exponential backoff client reconnect strategy with sequence reconciliation to seamlessly recover dropped socket packets without full page refreshes.
