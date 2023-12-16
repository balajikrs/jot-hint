# AWS Control Tower
* Set up and govern your multi-account AWS environment
* Quick and easy setup of multi-account environment
* Orchestrates other aws services like AWS organizations
    - organization
    - IAM Identity center (SSO)
    - Cloud formation
    - Config
- Another evolution of AWS organizations
## Parts
* Landing zone - multi-account environment 
    * SSO/ID federation, centralized logging & Auditing [ cloudwatch, cloudtrail,AWS config SNS]
* Guard rails - detect/mandate rules/ standards accross accounts
- Account factory - Automates and standardize new account creation
- Dashboard - single page oversight of entire environment

## Architecture
* When AWS CT is created 2 organization units are created
    - Foundational OU - called security
        - create 2 accounts
            - Audit account
                - users who need access to audit information made by control tower
                - for any 3rd party tools audting the environment
                    - SNS & Cloud watch
            - Log archive account - users who needs access to all logging information for all enrolled accounts withing the landing zone
                - AWS config and Cloud trail log are used in this account
    - Custom OU - Called sandbox
        - Account factory for provitioned accounts [Account and networking]
        - used for testing and less rigid security
## Landing zone
* well architected multi-account environment 
    - Home Region - region in which we initially deploy the product into (eg. us-east-1)
    - explicitly you can deny deployment into any other regions
* end user account provisioning via service catalog

## Guard Rails
* Gaurd rails are rules - multi account governance 
* 3 type of rules
    - Mandatory - automatically applied
    - Strongly recommended
    - elective -  can be implemented for niche requirements
- Working ways
    - `Preventative` - stop doing thing using AWS SCP
    - `enforced` or `Enabled` - any actions defied are prevented by guard rails
        -   eg. allow or deny regions or disallow bucket policy changes
    - `Detective`
        - Compliance check using AWS config rules. This will only detect
            - states: `clear` ; `in violation` ; `not enabled`
            - eg. any cloud trial enabled for account or ec2 public ipv4 address exist

## Account Fatory
* Automated account Provisioning 
    - using cloud administrators or with proper permissions
    -   Guardrails - automatically added to provisioned accounts
- Account admin given to a named user (IAM identity center)
- Account and network standard configuration 
    - eg. this can used for ip addressing used by VPCs to follow the standard practices within the organization / configured to avoid addressing overlap etc.
- Accounts can be closed and re-purposed
- can be fully integrated with business SDLC
    eg. Aws CT , account factory can be integrated using any api with sdlc, let at certain stage account will be provisioned etc.. or like client demos, software testing 
