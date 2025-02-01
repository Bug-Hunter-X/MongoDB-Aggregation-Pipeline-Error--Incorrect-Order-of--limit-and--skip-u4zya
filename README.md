# MongoDB Aggregation Pipeline Error: Incorrect Order of $limit and $skip
This repository demonstrates a common error in MongoDB aggregation pipelines where the order of the `$limit` and `$skip` operators is incorrect. This leads to unexpected results when querying data. The issue is that `$limit` is applied *before* `$skip`, which means the `$skip` operation will only affect the subset of documents already limited by `$limit`.

## Problem
The provided code shows an aggregation pipeline that aims to retrieve the top 10 documents after skipping the first 5. However, due to the incorrect ordering of `$limit` and `$skip`, this will not happen as intended.

## Solution
The corrected aggregation pipeline should be structured to first `$skip` documents and then `$limit` the results. This ensures the correct subset of the data is returned.