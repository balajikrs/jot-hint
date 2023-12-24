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

:::tip
use stress utility to trigger alarm in linux ec2 instance
:::

```bash
sudo yum install stress -y
```

> here `yum` is a package manger to used to install the stress utility
> `sudo` is the command to install in linux

#### Demo Steps

> - Create an EC2 instance
> - t2.micro
> - ensure its set to the default VPC and has a public IP
> - **Optionally** enable detailed monitoring **`involves extra cost`**
> - Connect to the instance and install Extras package and stress
> - Install stress (commands listed in code sample below)
> - Create an alarm based on the CPU Utilisation of the created instance
> - Threshold greater than 15%
> - Run stress 'stress -c 2'
> - Wait for alarm to .. alarm
> - use ctrl + c to cancel stress
> - Wait for alarm to return to ..ok
> - Delete the alarm
> - Delete the instance

## Cloud watch Logs
>*  Public Service - Usable form Aws and on-prem
>*  Present in  AWS public zone
>*  Regional Service

* Store, Monitor and access logging data
* Logging Data + timestamp
* AWS Integrations
  * EC2 , VPC Flow Logs, Lambda, CloudTrail, R53 and more
* EC2 os logs an other onprem logs we can use `unified cloudwatch agent`
* Metric filter

### Components
* Log events
  - Different sources inject data into cloudwatch as cloudwatch logs
  - contains timestamp and message block
  - These are treated as raw block of data
* Log Stream
  - log events are stored in log streams
  - log stream is sequence of log events from same source / one instance and another stream for instance 2
* Log groups
  - containers for multiple log streams that has same type of logging 
  - retention setting & permissions are place at log group level
  - metric filters are defined at log group level

:::tip
Metric filters can increment a Metric --> Can trigger alarms --> alarms can be used to notify admins or take actions
:::

- Global services like cloud front operates as through withing US-east-1
- so we always use us-east-1 for cloud front certificates
- S3 dont use any certificates to connect with the architecture
!(acm)['static/img/2023-12-24 08_31_41-[ASSOCIATESHARED] ACM _ learn.cantrill.io.png']

## Cloudfront and SSL
- cloudfront has a default domain name (CNAME)
- Always followed by cloudfront.net
- ssl is suported by default ```*.cloudfront.net``` certificate
- Alternate domain name (CNAMES) eg. example.com
- we can point a custom domain name at a cloudfront distribution using a DNS provider such as route53