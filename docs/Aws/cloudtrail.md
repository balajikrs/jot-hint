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