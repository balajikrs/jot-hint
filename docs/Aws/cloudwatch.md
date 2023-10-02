# Cloudwatch

Has 3 main jobs

- collects and manages operational data
- Metrics - AWS products, Apps, on-premises
  -Cpu uitlization of EC2 instances
  -disk space usage of an on-premise server
  -Public service - used for metrics gathering service
  -ability to add data from almost anywhere (if we have internet we can use this service to log all the data to cloudwatch
  -regular metrics are already collected
  -for specific metrics we need extra software called cloudwatch agent
- cloudwatch logs
- cloudwatch events - Aws services and schedules

## cloudwatch Concepts

### Namespace

- container for monitoring data
- all aws data goes to aws namespace `AWS/service` (exception ) eg. AWS/EC2

### Metrics

- set of time ordered data of an attribute
  - cpu usage, Network usage in/out, disk I/O
    Here metric is not for specific server (it can contain data form many servers)
- Datapoint
  eg. every time a server reports its cpu utilization that measuerment is called datapoint

#### Datapoint contains

- Timestamp - at second and timezone level
- value eg. in case of cpu 98.3%
- Dimensions - are name value pairs which shows different perspective of things within a metric (eg cpu unilization)

  - Assume 3 ec2 instances are running (A,B,C)
  - each second every instance is sending a datapoint for [namespce and metric]

  ```
  {
    "name": Instanceid,
    "value":i-xxxxx
  },
  {
    "name": InstanceType,
    "value":t3.small
  },

  ```

### Alarms

- Cloudwatch allows us to take actions on those metrics, this done using Alarms
- Alarms are created and linked to a specific metric
- Based on configuration of the alarm and metric it will take action
  > States of Alarms
  - Alarm in `ok` state - if metric configured in alarm is within the criteria
  - Alarm in `ALARM` state - if its not ok it moves to alarm state --> we can make to trigger an action or SNS to send a notification
    > we created a alarm when we created a account in Billing; to trigger a alaram when the billing is greater than $0
  - Alarm in `Insufficient_Data` state - it will be in this state untill it has enough data to access whether it is `ok` or `ALARM` state
    - It is fine meaning system is gathering enough data
