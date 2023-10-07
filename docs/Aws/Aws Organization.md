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
* Restrict what AWS accounts can do within the organization
* Account permission boundries
* Used in Design and implementation of larger aws accounts or platforms
* SCP is a json document which has the policy information that can be attached 
    * to a root container or 
    * one || more organizational units ( `OU` )
    * Individual accounts
* SCP - inherit down the organizational tree
* Management account (is special) is **not impacted by the SCP** even if the SCPs are attached to the organizational level
* 

