# Cloud Front
- Content Delivery Network for our content
## Cloudfront terms
- Origin - source location of the content
- S3 orign or custom origin
- Distribution - configuration unit of cloudfront
- Edge Locations - Local cache for the data
- Regional Edge cache - Larger version of an edge location provides another layer of caching
- Integrates with ACM - AWS Certificate Manager for HTTPS
- Upload happens direct to origins [not to the cache]
- Behavior is a sub configuration present within a distribution
- works on the principle of pattern match
origins --> Behaviors --> Distributions
- Distribution can have multiple behaviors 
- default is (*) wildcard

### 