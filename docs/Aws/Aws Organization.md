# AWS Organizations

* Help to manage more AWS accounts.
* Has one Managed account
    * Managed account is where we create the organization but it is not within the account.
* once managed account is created we can invite other accounts to it and will be refered as member accounts
* Consolidated payment for all the member accounts
* Benefits from reservation
* Can invite existing accounts and create new account from the managed account
    - Needs unique email id
* Identity federation - connect inprem identity to aws account - with the approach called role switch. done from console ui, uses sts AssumeRole action

## Service control policies (SCP)
* Restrict what AWS accounts can do (even the account root user can do )
* Account permission boundries (They just define the limits)
* eg. restrict operation in any other/a known region that US-EAST-1
* eg. only allow certain size of ec2 instance allowed in the account
* Used in Design and implementation of larger aws accounts or platforms
* SCP is a json document which has the policy information that can be attached 
    * to a root container or 
    * one || more organizational units ( `OU` )
    * Individual accounts
* SCP - inherit down the organizational tree
* Management account (is special) is **not impacted by the SCP** even if the SCPs are attached to the organizational level
:::tip
 They dont grant any permissions. 
:::
* However they can limit permision assigned to individual identities
### Usage of SCPs
* Can block by default
* Allow certain service - Allow list
* deny list - Block access to certain services
* When SCP is enabled - it allows a default policy - `full AWS access`
    * meaning - no effect by default implementing service control policies
* SCPs are denied list archictecture
* same rule `deny-allow-deny`

default :
```JSON
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
}
```
#### Allow list
* Remove full access policy - only the implicit default deny is in place 

####
* whatever overlaps the Individual account identity policy and SCP, whatever falls under the intersection of both will be allowed

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        },
        {
            "Effect": "Deny",
            "Action": "s3:*",
            "Resource": "*"
        }
    ]
}
```

