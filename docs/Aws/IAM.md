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
