# Route 53 (R53)

## Core DNS Funda link below

- Link 1

### Fundamentals

- R53 is AWS's Managed DNS project
- Product Basics
  - Register Domains
  - Host Zones - managed nameservers

> - Global service - with only one database
> - Globally resilient (multiple DNS servers) with name servers distributed globally and have same dataset [even a whole region down it will be still functional]

#### Register Domains with R53 process

- Has tie up with many registries like .com, .io, .net etc
- Operation flow - when creating a domain
- checks with the registry whether the domain name exists
- R53 has the zone file for the website domain
- Allocates name file for this zone
- As apart of hosted zone - R53 puts the zone file in 4 managed name servers
- liase with .com/.net/.org registry and update the name server records against the domain
- these 4 name servers are Authorative(A) for the domain
  :::tip
  zone file is the database of all of the dns information for a particular domain
  :::

> - DNS is a system of delegation

#### R53

- Provides DNS zones and
- as well as hosting for the zones.
  > DNS as a service

#### Hosted zones

- zone file in AWS
- Hosted on 4 managed name servers
- from R53 perspective aws has a number of managed name servers
- Hosted zones can be public / accessible by public
  - Lives in `Aws Public zone`
- Hosted zone can be private ie linkec to a VPC(s)
  - used for sensitive dns records that is not needed to be publically accessible
- stores recordsets

### DNS Record types

- DNS is capable of handling a number of different record types - which perform different tasks.

- A & AAAA
- CNAME
- TXT
- MX
- NS

#### Name server records

- these help delegation to occur in dns
- these server details will be posted in TLD - Toplevel domain

#### CNAME - Canonical Name record

- used to reduce admin overhead
- if a the same server is hosting FTP, WWW, mail
- all cname point to same server by pointing to A records
  :::Tip
- CNAMES cannot point to a Ip address. It can only point to other names.
  :::

#### MX records

- important for How email works
- helps how a server can find the mail server(`SMTP`) for a domain
- Mx records have two record one priority and another value

```
A mail --> 172.217.25.36
MX 10 mail
MX 20 mail.other.domain.
```

- Lower the number higher the priority

#### TXT records

- called Text record
- Allows to add arbitary text to a domain
- common use case is to prove domain ownership
- it can be used to fight spam - to say which entities are authorized to send email to your mail server

#### DNS TTL - Time to Live

- numeric value in seconds
- walking the tree by dns resolver takes time
- TTL tells the resolver server how much time it can hold the dns information (in dns cache)
- the data from the cache are called as non-authoritative
- TTLs are for balance
- High values means less queries but more time for migration
- Low values means more queries

:::warning

- DNS is a possible cause of project failure due to ttl values. It is always recommended to reduce the ttl value well in advance of the work sometimes days or weeks in advance.
- This ensures less cacheing issues.

:::

#### A and AAAA

- A records points to IpV4 ip
- AAAA records point to IPV6 ip
- generally architech will create 2 records A and AAAA records for same domain
- client os or DNS client will pick up the correct type of records it wants

## R53 Hosted Zones
### Public Hosted zone

- Hosted zone is a public database for a given section on  global dns database
- domain can be purchased some where else and can use r53 to host it.
- monthly fee for hosting it
- query charges based on the number of query hits to resolve the dns
- Host DNS records (eg. A,AAAA,NS,MX,TXT)
- hosted zones are databases which are referenced via delegation using name server records
  - create authoritative records for a domain eg.pensive.top
- DNS database (zone file ) hosted by R53 (public name servers)
- Accessible from public internet
- hosted 
