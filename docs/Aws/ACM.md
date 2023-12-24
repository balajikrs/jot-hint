# ACM - Aws Certificate Manager
- HTTP - simple & insecure
    - Possible issues - DNS spoofing [for user it wont be visible as the url is the same]
    - Possible sniffing of user names and passwords when the data is intransit
- HTTPS - Secured by TLS/SSL Layer of encryption added to http 
- Data is encrypted in-transit
``` info 
- certificates to prove the identity
- these certificates can be signed by one of the authorites signed by the web client (eg CA)
- since web client trust the CA - we trust the certificate and build a chain of trust.
- chain of trust by a trusted authority
- DNS name and certificate are tied together; signed by the certificate
```
- ACM let you to host both private and public certificate Authority (CA)
- Private CA - Application need to trust your private CA
    - something generally done manually by adding it to client laptop and desktop builds
    - or automatically by adding a policy to configure this trust
- In Public mode
    - Browsers trust the a list of certificate authorities provided by the vendor of the operating system
    - These trusted providers will trust other certificate providers thus establishing a chain of trust
## ACM features
- ACM can import or generate certificates
    - for generation provide DNS/Email verification to prove you own the domain
- if generated it can be renewed automatically by acm
- if imported certificates - we are responsible for renewing the certificates
    - renewing with external source and importing them to ACM
- ACM can only deploy certificates to supported services
    - certificates are always stored encrypted within the product and deployed in a managed and secure way
- not all services are supported. It is generally for cloudfront and ALBs ```not for EC2``` (since it is a self managed compute instance)
- whole need of ACM is to storage the storage and deployment of the certificates
- ACM is a regional service (isolated acm in us-east-1) ap-south-east-2 and enother in every other aws region
- once certificates are imported or generated to a region they are locked with the region 
- To use a certificate from ACM inside load balancer within a particular region then that certificate also in the same region
- Global services like cloud front operates as through withing US-east-1
- so we always use us-east-1 for cloud front certificates
- S3 dont use any certificates to connect with the architecture
!(acm)['static/img/2023-12-24 08_31_41-[ASSOCIATESHARED] ACM _ learn.cantrill.io.png']
