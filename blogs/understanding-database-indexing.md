---
title: "Understanding Database Indexing: From O(n) to O(log n)"
date: "2026-03-05"
tags: ["databases", "backend", "performance", "sql"]
description: "How database indexes actually work under the hood, why they make queries faster, and when they can actually hurt performance."
---

## The Problem

Your SQL query is slow. The table has a million rows, and a simple `SELECT * FROM users WHERE email = 'x'` takes seconds. You've heard that indexes fix this, but **how do they actually work?**

## Why It Happens

Without an index, the database performs a **full table scan** — it checks every single row to find matches. For a table with 1 million rows, that's 1 million comparisons. **O(n).**

```sql
-- Without index: scans all rows
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';
-- Output: Seq Scan on users  (cost=0.00..25000.00 rows=1 width=100)
```

## How Indexes Work

An index is essentially a **B+ tree** (in most databases) — a sorted, balanced tree structure that allows binary-search-like lookups.

### B+ Tree Structure

```
              [M]
            /     \
        [D, H]    [Q, U]
       / | \     / | \
    [A-C][D-G][H-L][M-P][Q-T][U-Z]
          ↓
     Leaf nodes point to actual data rows
```

**Key properties:**
- All leaf nodes are at the same depth → **balanced**
- Leaf nodes are linked → efficient **range scans**
- Internal nodes only store keys → more keys fit in memory
- Typical B+ tree with branching factor 100 can index **100 million rows in just 4 levels**

### With an Index

```sql
CREATE INDEX idx_users_email ON users(email);

-- With index: tree traversal
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';
-- Output: Index Scan using idx_users_email  (cost=0.42..8.44 rows=1 width=100)
```

From scanning 1,000,000 rows to traversing ~4 tree levels. **O(log n).**

## When Indexes Hurt

Indexes aren't free. They come with tradeoffs:

### 1. Write Overhead

Every `INSERT`, `UPDATE`, or `DELETE` must also update the index. More indexes = slower writes.

```
Without index:  INSERT → write 1 row
With 3 indexes: INSERT → write 1 row + update 3 B+ trees
```

### 2. Storage Cost

Indexes consume disk space. A table with multiple indexes can use **2-3x the storage** of the raw data.

### 3. Low Selectivity

An index on a boolean column (`is_active`) is mostly useless. If 90% of rows are `true`, the database will just scan the table anyway.

```sql
-- Bad index: low selectivity
CREATE INDEX idx_active ON users(is_active);
-- The optimizer will likely ignore this index
```

### 4. Composite Index Ordering

For multi-column indexes, **order matters**:

```sql
-- This index helps queries filtering by (status) or (status, created_at)
-- but NOT by (created_at) alone
CREATE INDEX idx_status_date ON orders(status, created_at);

-- ✅ Uses index
SELECT * FROM orders WHERE status = 'pending';
SELECT * FROM orders WHERE status = 'pending' AND created_at > '2024-01-01';

-- ❌ Cannot use index efficiently
SELECT * FROM orders WHERE created_at > '2024-01-01';
```

This is the **leftmost prefix rule** — the index can only be used from left to right.

## Key Takeaway

Database indexes transform O(n) scans into O(log n) lookups by maintaining sorted B+ tree structures. But they're not magic — they cost storage and slow down writes. **Index the columns you query by, understand selectivity, and always check your query plan with `EXPLAIN`.**
