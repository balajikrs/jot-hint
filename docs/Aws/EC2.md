# Elastic Compute Cloud (EC2)
* Provides virtual machines - Instances
# Basics
* IAAS - infrasture as a service - Unit of Consumption(UOC) - is operating system
* Private Aws service by default- runs in private zone of AWS  - use VPC networking - can be configured for public access
* AZ resilient - since we are launching ec2 in a subnet and subnet is associated with a az. If az fails then ec2 will fail
* Different sizes and capacity
  - with GPU or not
* On demand billing - per sec or hour depending on the sofware it runs
# charge at different levels
  - charge for cpu and memory
  - time for cpu usage 
  - storage use
  - Network
  - extra for any commercial software
# Storage
  - Local storage where the host is on (temporary)
  - EBS - Elastic block storage 
# Instance States
  - Running - charged for cpu,memory,network,storage
  - Stopped [ temporary swiching off - can be started any time] will incur charges for Storage 
  - Terminated [ permanently stopping the instance and it will be delete fully including allocated storage on EBS- non reversible action] - no charges in terminated state
  - stopping
  - shutting down 
  - pending 
# AMI - Amazon machine image
  - AMI can be used to create a EC2 
  - Ec2 can create a AMI
* AMI has 
  - Permissions [on who can use this AMI - ]
    - private - only owner can use it
    - public - any one can use it
    - explicit - only specific Aws accounts can use it
  - Root volume [ c drive in windows / boot volume in linux]
  - Block device mapping - setting of what volume is boot volumne and what is a boot volume and the device id
    - volume to device id mapping
# connecting to 
  windows instance - RDP - Remote desk top protocol runs on port 3389
  linux instance - ssh port #22
  * linux 
  - when creating instance we will get a ssh key pair (old one or new one) private key and public key
  - will connect using both private and public
  * windows
  - use only private key. Public key will be placed by aws in the instance direcly

# SSH key pair creation
* only one oppurtunity to download the private key
* pem file for linux and mac os - and modern windows
* ppk file only for windows putty software

# Ec2 steps
1. name of instance
2. AMI or os for instance 
3. Architechture
4. instance type 
5. ssh keypair
6. network settings
  vpc , subnet for AZ, 
  by default private ip4 address - if we need to acess from public - we need make public here
  security group /mini firewall - for inbound and out bound rules
7. storage volume 

