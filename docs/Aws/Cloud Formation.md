# Cloud formation (CFM)

- IaC - Infrastructure as a code
- Allows automation infrastructure creation, update and deletion
- Templates created in YAML or JSON can be used to automate infrastructure operations
- Templates are used to create stacks, which are used to interact with resources in an AWS account.
- stack is living representation of a template (1 template can create many stacks )
- used in change management and to create one off resource
- store templates in repositories and change on approval apply to form a stack

### Resources

- Resources section creates/update the cloud resources [so it it mandatory part of cloud formation template]
- if resources are removed from a template then when the template is reapplied cloud resources will be deleted
- All resources in a template called logical resources
- will have type, properties
- for every logical resource cloud formation will create a physical resource in a aws account

```
service-provider::service-name::data-type-name
```

### Description

- Freeform text
  :::tip
  if we use AWSTemplateformatversion, then description should follow next to it
  :::

### Metadata

- tells how the cloud formation is presented via the console UI

### Parameters

- fields to prompt users to select when configuring / appling a template from the console UI
- this provides list of values that can be allowed to show in drop down
- we can configure what are the vaild values as well

### Mappings

- used to create lookup tables
- eg. what ami to use in what aws region or test or prod

### conditions

- To allow decision making inside template
- set certain field in a template when the condition it met

### outputs

- present outputs based on what is created or deleted
- e.g.

# External references

- [aws-template-resource-type-ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)
