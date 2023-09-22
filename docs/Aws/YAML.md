# YAML (.yml)

- YAML Ain't Markup Language - abbreviation - recusive
- commonly used for storage and parsing of configuration
- Unordered collection key value pairs
- used for setting up data or configuration
- can be used as input or output from an application

## Rules

* Datatype supports - string,boolean,number/floats,null
* key and colon should be followed by a space
* indentation critical (space should be used)
* same level means they belong to same group

## structure

### Lists --> Array
  * inline list
  ```fruits: ["Apple", "mango", "Pears", "Fig"]```
  * other representation of list : indented with hypen ```-``` at same level
  ```
      fruits:
        - "Apple"
        - "mango"
        - "Pears"
        - "Fig"
  ```
### Dictionary
  * collection of one or more key value pair
  * value can be list - creating a nested sturucture
  ```
    trees: 
      - name: crapemyrtle
        color: [white, pink, dark_pink, red]
      - name: fig
        types: ["brown turkey", "adradic"]
        numberPlants: 5
  ```
