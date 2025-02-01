```javascript
// Correct aggregation pipeline
db.collection.aggregate([
  { $match: { field: 'value' } },
  { $group: { _id: '$field', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $skip: 5 },
  { $limit: 10 } // Limit applied after skipping
])
```