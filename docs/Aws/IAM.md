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

:::tip
we cannot login into a group. it has no credentials too.
:::