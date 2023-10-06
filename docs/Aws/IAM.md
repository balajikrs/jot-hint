# IAM - Identity and Access management

## Identities

- IAM users
- IAM Roles
- IAM groups

## IAM policies

> set of security statment to AWS ; grant or deny access to aws product or features to any identity which uses the poicy
>
> - JSON document

- Architecture and how they work
- Ability to read and understand policy
- writing own

### Components

1. Version
1. statements in a array - these statements grant or deny permissions for aws services

- when identity attempts to access aws resources, that identity needs to prove who it is to AWS. This is called **Authentication**
- Once Authenticated that is known as Autheticated identity

#### Statements components

- `Sid` - statement id - **optional** - lets you to identify a statement what it does 
:::tip
Best practice to use sid - regardless of how big or small
:::
- `Effect` - Allow/deny

- `Action` - get action , put, delete etc or all 
- `resource` - to which resources the policy applies to

:::tip
A statement only applies only when action and resource matches
:::

#### Overlapping Allows and denys

> Rules - Hierarchy:
>
> 1. Explicit _DENY_ [ overrules everything else]
> 1. Explicit _ALLOW_ [ this takes precedence unless there is an explicit deny]
> 1. Default _DENY_ [implicit] - if resources are not allowed access then there is no access.

:::tip
DENY --> ALOW --> DENY
:::

#### Tyoe of Policy

- Inline Policies
  - special or exceptional allow/deny
- Managed Policies
  - AWS managed policies
  - customer managed policies
    - Reusable
    - Low Mangement overhead

## IAM Users

- Anything requiring long-term AWS access

* Humans
* service account
* Applications

- IAM starts with a pricipal [ which is an entity trying to access aws account]
- Principal can be individual people, computers, services or group of any of those things

:::tip
For a principal to do anything it need to authenticate and be authorized.
:::

- Authentication can be done by username and password or Access keys

## ARN - Amazon Resource Names

> Uniquely identity resources within any AWS accounts

```
arn:<partition>:<service>:<region>:<account-id>:<resource-id>
arn:<partition>:<service>:<region>:<account-id>:<resource-type>/<resource-id>
arn:<partition>:<service>:<region>:<account-id>:<resource-type>:<resource-id>
```

eg. **both the below are differet ARNs and points to different amazon resources**

```
arn:aws:s3;::catgif    --> this refer to the bucket
arn:aws:s3;::catgif/* --> this refers to objectes in the bucket
```

:::tip

1. Only 5000 IAM users per **account**
1. IAM users can be member of only 10 IAM groups

:::
## IAM Groups
* Iam groups are container for users
* Used for managing Iam users
* A IAM user can be part of multiple IAM groups
* Groups can have policies attached to them 
    - Inline Policy 
    - managed Policy
* Users can also have separate policy attached
* when there are multiple policies for users, its groups... merge them and apply `allow-deny-allow` rule on them

*  One user can be in a maximum of only 10 groups

:::tip
* we cannot login into a group. it has no credentials too.
* One user can be in a maximum of only 10 groups and its a hard limit.
* There is no All users group in IAM
* No nesting - No Groups within groups
* 300 groups soft limit for an account. this can be increased with a support ticket
:::

* Resource Policy:
    * Policy attached to a resource
    * It can allow access to a specific user/identities (using their ARN)
    * Groups are not a true identity. They cannot be refered as principal in a resource policy
## IAM Roles
* Principal - physical person, application device or process
* External principal or internal principal can use the iam role
* Many users can assume a Iam roles
* roles are used on a temporary basis
* if we can't identify number of principals for any identity then it could be candidate for a iam role
* Role doesn't represent you, instead it represent the levels of access inside the aws account
* roles can have policies attached to them via inline or manageed policies. These are called as permissions policies.
* Roles
    - Trust policy [which identities can assume that role]
        - can have other identities like user,roles, aws services, others from different account, it can allow anonymous usage of role, other type of identities like facebook, twitter, google etc
    - Permissions policy[what access the role gets]
* Roles when allowed create temporary security credentials (bys STS service called security token service)
* can be refered in resource policies like policies of a s3 bucket
`sts:AssumeRole`

### Common usage of roles
* Aws service use roles - eg. they need certain rights to perform certain actions eg.aws lambda [ like starting a ec2 instance, might perform backups, real time data processing]
* Lambda execution role- a trust policy for the corresponding lambda
* This lambda execution role will have a permissions policy that grants access to aws product and services. when function run it uses sts:AssumeRole operation, sts genrates temporary credentials --> then run time environment can use the temp credentials to access aws resouces based on what ever permissions that permission policy has.
### Why role is better suitable ?
* If role is not there then we need to hard code the keys in the lambda - which is a security risk that we have to avoid at all means, also causes issues when time to rotate the keys
* when a role is assummed only temporary set of credentials are used with enough time to complete the task and discarded
* Also at a given point in time we may have any number of lambdas running - non determinable number - unknown. [rule -> if we dont know the number of principals then role is best identity to use]

>Another situation roles can be used:
>   *  Emergency situations[Break glass situation / firefighting mode]
>   * Roles are unsed when existing identites needs to re-used within aws
>   * Help external identites to use AWS accounts they have to use role or if the user base is greater than 5000 users
* Use of identity federations
* No identies stored in account
* uses existing user logins
* it can scale to 100 of users and beyond
* when one account has to access another account it can use the roles to access it
### Service Linked Roles
* Not much difference between IAM rile and service linked roles
* IAM role linked to a specific AWS service 
* Predefined by a service
* service might create/delete a role 
* We cant delete the role until its no-longer required
* Using `PassRole` we can allow users to pass a role already created to a service but cannot have access to create a role. - Helps to implement role separation