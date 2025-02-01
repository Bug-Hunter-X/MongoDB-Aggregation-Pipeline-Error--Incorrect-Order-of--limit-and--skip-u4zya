```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  { $match: { field: 'value' } },
  { $group: { _id: '$field', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 } // Limit applied before the $skip, causing incorrect results
  { $skip: 5 }  // Skipping 5 results after the limit is applied
])
```