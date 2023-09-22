# Virtual Private Cloud (VPC)
### types
  * Default VPC
  * Custom VPC
### Default VPC Facts
* one per region - can be removed and recreated
* will have default predefined CIDR allocation 172.31.0.0/16
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


