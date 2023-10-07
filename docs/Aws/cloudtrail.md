# Cloudtrail
> -Cloud trail is a Regional Service 
* All activites performed on a aws account will be logged here
* Each api call/activity is called cloud trail event
* this activity can be taken by a user or a role or a service
* By default stores events for 90 days [at no cost]
* In case we have to extend - we need to create one or more trail 

## Types of cloudtrail events
* Management events
    * updating configuration on s3 bucket
    * Management event logging is free
* Data Events
    - Accessing data from s3 etc
* insight Events

### Cloud trail trail
* Cloud trail trail is a unit of configuration within cloud trail product
*  Cloud trail can be configured to 
    - one region
        - every region will have its trail
    - to all regions
        - One trail for all region activities
* Global service like IAM, STS or Cloud front are global service they will log their events in US-EAST-1 region
* These global service event are logged if a trail is enabled
* If we create a trail - the 90 day limit can be expanded
* the trail can be logged to separate s3 bucket indefinetely [ for the trail 
it charged only for storage in s3 ]
* Stored as ` **set of compressed JSON log files** `
#### Organizational cloud trail
* it can store all the account's trail in the organization's account 

:::tip
* Enabled by default - but 90 days no s3 (unless you configure a trail)
* Trails are how we configure s3 and Cloud watch logs
* Management events only by default (any interaction with aws products for management purpose )
* Data events are specifically enabled and come at a cost
* IAM, STS, Cloudfront - Global service event - `a trail must be enabled to capture global service events`
* Not a real time - there is a delay 
* Log files will be delivered within 15 mins of the activity- publishes multiple times an hour
:::