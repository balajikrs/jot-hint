# High Availability Vs Fault Tolerance Vs Disaster Recovery

## High Availability(HA)

- Old Definition
- Agreed level of operational performance usually uptime, for a higher than normal period

### Actual definition

- HA system is one that is designed to be online and providing services as possible.
- If fails, it can replaced or its components are replaced often using automation to bring system back to service
- Does not mean Customer will not experience any outage
- HA is maximizing the system's online time and minimizing outage

:::TIP
HA does not mean, system is does not fails or user of the system never experience outage
:::

- This can be by having redundant servers so user can switch in event of failure to minimize down time
  eg. 4X4 - can come with spare wheel

* HA means minimize outage

## Fault tolerance (FT)

- How FT differs from HA
- Fault tolerance is simlar to HA but its much more
- FT is defined as the property that enables system to continue operate properly in the event of failure of one or more components
- system has to operate properly even though it has one or more faults
- Operate through failure
- FT can be expensive
- `FT = HA of systems (minmize outages) + (design the system to tolerate a failure[route traffic or sessions around failure])`
- eg. Plane - we cannot stop plane in mid air and fix it like car so it will have redundant electronics in place or redunant engines in place
- FT will be in life critical situations
- Resilient systems
- FT means Operating through faults

## Disaster Recovery (DR)

### Definition

set of policies tools and procedures to enable the recovery or continuation of vital technology infrastructure and systems following a natural or human induced disaster

- Pre-planning
- Disaster
- Disaster Recovery
  > eg. take regular backups at offsite locations
  > :::tip
  > Use when FT and HA dont work
  > :::
