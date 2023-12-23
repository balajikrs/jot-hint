# Virtual Private Cloud (VPC)
### types
  * Default VPC
  * Custom VPC
### Default VPC Facts
* one per region - can be removed and recreated
* will have <Highlight color="#1877F2"> default predefined CIDR allocation 172.31.0.0/16 </Highlight>
* structure cannot be changed - limiting prod deployments - huge ip range
* based on number of AZ it will create /20 CIDRs per AZ
* /16 default CIDR can have up to 16(if Az) /20 CIDR
* /17 is half the size of /16 ie 2 /17 will fit into a /16
* all services placed in this subnets will have IPV4 addresses
* default configuration 
  * Internet Gatway (IGW) - for to/fro communication with internet 
  * Security group (SG)
  * NACL (Network Access Controlled List)
* console will have an indicator to tell whether it is default VPC or not
* Best practice is not to use default VPC


export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '5px',
      cursor: 'pointer',
    }}
    onClick={() => {
      //alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

# VPC considerations 
## Prerequisites to create a custom VPC
- need to know IP range VPC will use - VPC CIDR range [ we need this in advance]
- what size should the vpc be ? [ this influences how many services the VPC can fit into]
  - Each service will use one or more IP and they occupy space in the VPC
- Are there any network we cannot use
- Try to avoid vpc ranges that other parties use
- Try to predict failure
- VPC structure - Tiers & Resiliency (availablity zones)
  - Tiers - Web tier
  - Application Tier
  - Database Tier and more tier
## Limitations
- VPC minimum /28 (16 IP)
- VPC Maximum /16 (65536 IPs)
- Personal preference 10.x.y.z range
- Avoid common ranges eg. 10.0.* and 10.1.* until 10.10
- we can start from 10.16.* (optional)
- How many ranges an app requires?
  - first check how many AWS regions the business will operate on
    - use high number 
  - 2 ranges in each region
  - 4 aws accounts

![vpc sizing](./../../static/img/aws/VPC%20Sizing%20and%20Structure%20-%20PART2%20_%20learn.cantrill.png)
- How many subnets to use
- we cannont host services in VPC
- We need to create subnets in which VPC services runs
- subnet will be in one availablity zone
![subnet mask](https://github.com/acantril/aws-sa-associate-saac02/blob/master/XX_TechFundamentals/00_LearningAids/SubnetMask.png)




