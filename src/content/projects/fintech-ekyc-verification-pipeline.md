---
title: "Enterprise E-KYC Identity Verification & Biometric Gateway"
role: "Full-Stack"
description: "High-security identity verification pipeline featuring automated OCR document parsing, biometric face-matching algorithms, and an encrypted review dashboard for compliance audits."
impact: "Processed 250,000+ verification workflows with 98.6% OCR accuracy and < 3s automated verification SLA"
stack: ["Laravel", "Python", "Vue.js", "Docker", "PostgreSQL", "Redis", "Nginx"]
github: "https://github.com/devanscreate/ekyc-verification-pipeline"
demo: "https://devr-portfolio.31januaridd.workers.dev/#projects"
featured: true
span: wide
order: 4
---

### Architecture Overview
Engineered an end-to-end electronic Know-Your-Customer (E-KYC) verification engine designed for financial services compliance, mitigating identity fraud while maintaining seamless user onboarding.

### Technical Challenges & Implementation
- **Asynchronous Document Extraction**: Decoupled document upload from OCR inference by dispatching background jobs to a Python worker pool, preventing HTTP worker thread locking.
- **Biometric Matching & Liveness Check**: Implemented face feature extraction and cosine similarity verification to correlate user selfies against government ID photos with automated anti-spoof checks.
- **Data Protection & PII Encryption**: Enforced field-level AES-256-GCM encryption at rest for sensitive personally identifiable information (PII) and automated temporary storage cleanup.
- **Real-Time Operational Dashboard**: Built a responsive administrative portal with Vue.js, Pinia, and Tailwind CSS for compliance officers to conduct manual exception audits with live WebSocket status feeds.
