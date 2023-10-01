#Cloudwatch
Has 3 main jobs
* collects and manages operational data 
* Metrics - AWS products, Apps, on-premises
  -Cpu uitlization of EC2 instances
  -disk space usage of an on-premise server
  -Public service - used for metrics gathering service
  -ability to add data from almost anywhere (if we have internet we can use this service to log all the data to cloudwatch
  -regular metrics are already collected
  -for specific metrics we need extra software called cloudwatch agent
* cloudwatch logs 
* cloudwatch events - Aws services and schedules 

#cloudwatch Concepts
##Namespace
* container for monitoring data
* all aws data goes to aws namespace `AWS/service`
##Metrics
*set of time ordered data of an attribute