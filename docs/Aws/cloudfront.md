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
### TTL & Invalidations
- TTL - Time to live for a cached object in the edge location
- Frequent cache hits --> lower load on the orgin
- Default TTL 24 hours [defined within behavior of the distribution]
- We can configure minimum TTL and maximum TTL
- we can also configure per object TTL value 
- If no ttl specified default is used
#### Different Types of headers
- Origin Header : `Cache-Control max-age` (seconds)
- Origin Header : `Cache-Control s-maxage` (seconds)
    - both specifies how long the object has to be in cache
- Origin Header : `Expires` (Date&Time)
    - Instead of seconds - specify the actual date and time
- The maximum & minumum ttl overrides the per object ttl
- custom origin    
    - headers set by the corresponding webservers
- s3 origin
    - via object meta data
#### Cache Invalidations
- These are performed on a distribution
- will be applied to all edge locations within that distribution
- To apply it takes time - not immediate
- invalidation expires all the object immediately irrespective of the TTL, based on the pattern set on the invalidation
```
/* - invalidates everything
```
- Invalidations comes with a cost
- If we have to regularly invalidate object then we have use versioned file names of the data or images and point website to use the versioned images
- This is not the same as s3 versioning


