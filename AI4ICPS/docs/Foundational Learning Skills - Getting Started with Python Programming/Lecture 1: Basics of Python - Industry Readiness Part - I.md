# Lecture 1: Basics of Python - Industry Readiness Part - I

## Data Science | Agenda
- Significance of Industry 4.0
- Why Python
- Python programming constructs and data types
- List, Tuple, Set, Dictionary
- Introduction to Functions

## Industry 4.0 : Definitions and Principles
In the view of the Boston Consulting Group,
Industry 4.0 refers to the convergence and application of nine digital industrial technologies: Big Data and Al Analytics, Horizontal and Vertical Integration, Cloud computing, Augmented Reality, Industrial Internet of Things, Additive manufacturing/ 3D printing, Autonomous Robots, Simulation and digital twins, Cybersecurity The principles of Industry 4.0 encompasses the following areas:

- Horizontal integration across value-added networks.
- Vertical integration and networked/connected production systems
- The technologies for CPPS (cyber-physical production systems)
- The consistency of engineering across the entire value chain.
- The new social infrastructures of labor/work.

## Industry Relevance of Industry 4.0 and its benefits
- Intelligent Products: Development of self aware highly connected devices and
products.
- Intelligent factories: Highly digitized and largely autonomous.
- Intelligent Assets: With intelligent assets, technicians can monitor asset performance in
real time, anticipate and prevent downtime, employ dynamic and predictive
maintenance, take advantage of digital twins, and tightly integrate assets and
business processes.
- Empowered people: Highly skilled empowered manpower with latest technologies
and domains.

## Why Python?
- Comprehensible- Easy to code and learn and user-friendly data structures.
Free and Open-source libraries.
- Vast set of libraries that support multiple technologies related to Industry 4.0.
- Portable
- Good Security.
- Great community support

Sure! Here's a brief overview of basic data types, variables, operators, and input/output in Python:

### Basic Data Types:
1. **Integers (int)**:
   - Whole numbers, e.g., `5`, `-3`, `42`.

2. **Floating point numbers (float)**:
   - Numbers with a decimal point, e.g., `3.14`, `-0.001`, `2.0`.

3. **Strings (str)**:
   - Sequence of characters enclosed in quotes, e.g., `"hello"`, `'world'`.

### Variables:
- Variables are used to store data. The type of a variable is determined by the data assigned to it.
  ```python
  x = 10       # x is an integer
  y = 3.14     # y is a float
  name = "Alice"  # name is a string
  ```

### Operators:

#### Math Operators:
- **Exponentiation (`**`)**: Raises the left operand to the power of the right operand.
  ```python
  result = 2 ** 3  # result is 8
  ```
- **Modulus/Remainder (`%`)**: Returns the remainder of division.
  ```python
  result = 10 % 3  # result is 1
  ```
- **Integer Division (`//`)**: Returns the integer quotient of the division.
  ```python
  result = 10 // 3  # result is 3
  ```
- **Division (`/`)**: Divides the left operand by the right operand.
  ```python
  result = 10 / 3  # result is 3.3333333333333335
  ```
- **Multiplication (`*`)**: Multiplies two operands.
  ```python
  result = 2 * 3  # result is 6
  ```
- **Subtraction (`-`)**: Subtracts the right operand from the left operand.
  ```python
  result = 10 - 3  # result is 7
  ```
- **Addition (`+`)**: Adds two operands.
  ```python
  result = 2 + 3  # result is 5
  ```

#### Flow Control and Comparison Operators:
- **Equality (`==`)**: Checks if two values are equal.
  ```python
  result = (5 == 5)  # result is True
  ```
- **Not Equal (`!=`)**: Checks if two values are not equal.
  ```python
  result = (5 != 3)  # result is True
  ```
- **Less Than (`<`)**: Checks if the left operand is less than the right operand.
  ```python
  result = (3 < 5)  # result is True
  ```
- **Greater Than (`>`)**: Checks if the left operand is greater than the right operand.
  ```python
  result = (5 > 3)  # result is True
  ```
- **Less Than or Equal To (`<=`)**: Checks if the left operand is less than or equal to the right operand.
  ```python
  result = (3 <= 5)  # result is True
  ```
- **Greater Than or Equal To (`>=`)**: Checks if the left operand is greater than or equal to the right operand.
  ```python
  result = (5 >= 3)  # result is True
  ```

#### Boolean Evaluation:
- Boolean expressions evaluate to `True` or `False`.
  ```python
  is_valid = (5 > 3)  # is_valid is True
  ```

#### Boolean Operators:
- **and**: Returns `True` if both operands are `True`.
  ```python
  result = (True and False)  # result is False
  ```
- **or**: Returns `True` if at least one operand is `True`.
  ```python
  result = (True or False)  # result is True
  ```
- **not**: Returns `True` if the operand is `False`, and vice versa.
  ```python
  result = not True  # result is False
  ```

### Display using `print` statement:
- The `print` function is used to output data to the console.
  ```python
  print("Hello, World!")
  print(42)
  ```

### Read using the `input` statement:
- The `input` function is used to read input from the user.
  ```python
  name = input("Enter your name: ")
  print("Hello, " + name + "!")
  ```
Sure! Here are the Python programs based on the requirements you've mentioned:

### 1. Find the Largest Number from Three Numbers

This program takes three numbers as input and prints the largest of the three.

```python
# Function to find the largest of three numbers
def find_largest(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

# Input from the user
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
num3 = float(input("Enter the third number: "))

# Finding and printing the largest number
largest = find_largest(num1, num2, num3)
print("The largest number is:", largest)
```

### 2. Normal if-else with Specific Conditions

This program checks if the first value is greater than the second value and if it is greater than 150. If so, it adds 10 to the first value and prints it.

```python
# Function to check the conditions and add 10 if conditions are met
def check_and_add(value1, value2):
    if value1 > value2 and value1 > 150:
        value1 += 10
    return value1

# Input from the user
first_value = float(input("Enter the first value: "))
second_value = float(input("Enter the second value: "))

# Checking conditions and printing the result
result = check_and_add(first_value, second_value)
print("The resulting value is:", result)
```

### Flow Control Examples

#### a) if statement
```python
x = 10
if x > 5:
    print("x is greater than 5")
```

#### b) if-else statement
```python
y = 20
if y > 15:
    print("y is greater than 15")
else:
    print("y is not greater than 15")
```

#### c) if-elif-else structure
```python
z = 30
if z > 50:
    print("z is greater than 50")
elif z > 20:
    print("z is greater than 20 but less than or equal to 50")
else:
    print("z is 20 or less")
```

#### d) pass statement
```python
for i in range(5):
    if i == 2:
        pass  # Placeholder for future code
    print("Current value of i:", i)
```

### Iterations Using Loops

#### a) For Loop

The `for` loop is used for iterating over a sequence (such as a list, tuple, string, or range).

```python
# Example: Iterating over each character in a string
for x in "string":
    print(x)
```

#### b) While Loop

The `while` loop continues to execute as long as the test condition is `True`.

```python
# Example: Printing numbers from 1 to 5
count = 1
while count <= 5:
    print(count)
    count += 1
```

### List

Lists are mutable, ordered collections of elements that support various operations.

```python
# Initializing a list
fruits = ["apple", "banana", "cherry"]

# Appending an element
fruits.append("orange")

# Getting the length of the list
length = len(fruits)

# Removing an element
fruits.remove("banana")

# Sorting the list
fruits.sort()

# Slicing the list
slice_fruits = fruits[1:3]

# Updating an element
fruits[0] = "blueberry"

# Copying the list
fruits_copy = fruits.copy()

# Combining two lists
vegetables = ["carrot", "spinach"]
combined_list = fruits + vegetables

# Printing the results
print("Fruits:", fruits)
print("Length:", length)
print("Slice:", slice_fruits)
print("Copy:", fruits_copy)
print("Combined List:", combined_list)
```

### Set

Sets are unordered collections of unique elements that support mathematical operations.

```python
# Initializing a set
numbers = {1, 2, 3, 4, 5}

# Adding an element
numbers.add(6)

# Updating the set with multiple elements
numbers.update([7, 8, 9])

# Removing an element
numbers.remove(4)

# Union of two sets
even_numbers = {2, 4, 6, 8}
union_set = numbers.union(even_numbers)

# Intersection of two sets
intersection_set = numbers.intersection(even_numbers)

# Difference between two sets
difference_set = numbers.difference(even_numbers)

# Symmetric difference between two sets
symmetric_difference_set = numbers.symmetric_difference(even_numbers)

# Printing the results
print("Numbers:", numbers)
print("Union:", union_set)
print("Intersection:", intersection_set)
print("Difference:", difference_set)
print("Symmetric Difference:", symmetric_difference_set)
```

List comprehension is a concise way to create lists in Python. It allows you to generate lists by applying an expression to each item in an iterable (like a list or range) and optionally including a condition.

### Syntax

The basic syntax for list comprehension is:
```python
[expression for item in iterable if condition]
```

- `expression`: The expression to evaluate and include in the list.
- `item`: The variable that takes the value of each element in the iterable.
- `iterable`: The collection (like a list, tuple, or range) to iterate over.
- `condition`: An optional filter that only includes items in the list if the condition is `True`.

### Examples

#### Basic Example

Create a list of squares for numbers from 0 to 9.
```python
squares = [x**2 for x in range(10)]
print(squares)
# Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

#### With Condition

Create a list of even numbers from 0 to 9.
```python
evens = [x for x in range(10) if x % 2 == 0]
print(evens)
# Output: [0, 2, 4, 6, 8]
```

#### Nested List Comprehension

Create a 2D list (list of lists) for a multiplication table.
```python
multiplication_table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
print(multiplication_table)
# Output: [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
```

#### With String Manipulation

Convert a list of strings to uppercase.
```python
fruits = ["apple", "banana", "cherry"]
uppercased_fruits = [fruit.upper() for fruit in fruits]
print(uppercased_fruits)
# Output: ['APPLE', 'BANANA', 'CHERRY']
```

#### Combining Two Lists

Create a list of sums of corresponding elements from two lists.
```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]
sums = [x + y for x, y in zip(list1, list2)]
print(sums)
# Output: [5, 7, 9]
```
