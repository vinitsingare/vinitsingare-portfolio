---
title: "Why UDP Packets Get Lost (And How to Handle It)"
date: "2026-03-15"
tags: ["networking", "backend", "udp", "debugging"]
description: "UDP doesn't guarantee delivery. Understanding why packets get lost — and what you can do about it — is essential for building reliable real-time systems."
---

## The Problem

You're building a real-time application — maybe a game server, a video streaming service, or a latency-sensitive monitoring tool. You choose UDP over TCP because you need speed. But then you notice: **packets are disappearing.**

No errors, no warnings. They're just... gone.

## Why It Happens

UDP is a **connectionless, unreliable** protocol by design. Unlike TCP, it doesn't:

- Acknowledge received packets
- Retransmit lost data
- Guarantee ordering
- Perform flow control

So when a packet gets lost, **nobody tells you**. Here's where losses typically happen:

### 1. Network Congestion

Routers have finite buffer sizes. When traffic exceeds capacity, they **drop packets** — and UDP packets are the first to go since there's no retransmission mechanism.

### 2. Receiver Buffer Overflow

If your application can't read from the socket fast enough, the OS kernel buffer fills up. New incoming packets are **silently dropped**.

```c
// Increasing receive buffer size can help
int bufsize = 1024 * 1024; // 1MB
setsockopt(sockfd, SOL_SOCKET, SO_RCVBUF, &bufsize, sizeof(bufsize));
```

### 3. MTU Fragmentation

If a UDP datagram exceeds the network's Maximum Transmission Unit (typically 1500 bytes for Ethernet), it gets fragmented. If **any fragment** is lost, the **entire datagram** is discarded.

### 4. Firewall and NAT Issues

Firewalls may drop UDP packets that don't match expected patterns. NAT devices may timeout UDP mappings faster than TCP ones.

## The Solution

You can't make UDP reliable at the protocol level — that would just be TCP. But you can build **application-level reliability**:

1. **Sequence numbers** — Number each packet so the receiver knows if something is missing
2. **Acknowledgments** — Receiver sends back ACKs for received packets
3. **Selective retransmission** — Only resend what's actually lost
4. **Forward Error Correction (FEC)** — Send redundant data so the receiver can reconstruct lost packets

```python
# Simple sequence-based loss detection
expected_seq = 0

def on_packet(seq, data):
    global expected_seq
    if seq > expected_seq:
        print(f"Lost packets: {expected_seq} to {seq - 1}")
    expected_seq = seq + 1
    process(data)
```

## Key Takeaway

UDP packet loss isn't a bug — it's a feature. The protocol trades reliability for speed. If you need reliability on top of UDP, **you have to build it yourself.** Understanding *where* and *why* packets get lost helps you design smarter solutions rather than just switching to TCP.
