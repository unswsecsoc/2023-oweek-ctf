# Proper Passphrase Protection

## Authors
- @ItsIronicIInsist

## Category
- Reversing

## Description

Base64 is known across the lands for its impervious security


## Difficulty
- Medium

## Points
75

## Hints
1. Is there some sort of inverse operation to b64encode?
2. The true value of '0' may be surprising

## Files
- [main.py](./_ctfd/files/main.py): The program to inspect


## Solution
<details>
<summary>Spoiler</summary>

### Idea
Apply the opposite operations to the provided encoded flag, in the opposite order.

### Walkthrough
1. **Lookup 'base64' **: _What does base64 even mean?_
	- Lookup base64 on the internet
	- There are plenty of sites that'll explain the internals
	- You can read them in detail. But there's also plenty of  sites that allow you to 'decode' it
	- Make a small leap of faith, assume that we want to decode the flag somehow using base64
2. **Decoding the first stages**:
	- We are working backwards from the encoded phrase, to the original
	- Thus, we'll aplly operations in the reverse order to what we see in the program
	- So, we'll decode it twice via base64
	- I'll use the same library as the challenge
		```
		from base64 import *

		encoded = b'VkRGa1JsSlZkRGRaZWtKcldsZE9hazVXT1c1TlJqbHFZMnBTTm1WV09IbE9XR3cxWVd0ME9RPT0='

		stage1 = b64decode(b64decode(encoded))
		```
3. **Handling the map function**:
	- Now, there's an additional step
	- The program calls 'map', which alters the 'stage1' variable somehow
	- 'map' is a piece of code, which, for each section of 'stage1', subtracts b'0' from it
	- Despite how it may look, b'0' != 0. It equals 48, because b'0' is the representation of the character 0 in ascii.
	- We don't actualy need to dig this deep, you could hazard a guess and do:
		```
		map(lambda x : x + b'0', stage1)
		```
	- This reverses the map we see in the main program
4. **Our final decode**
	- We must once again decode the base64
	- Same for step 2
		```
		base64decode(stage1)
		```
	- Then, we can print out the result, to get the flag

### Flag
`OWEEK{c0decc5_g0_cr4zy_25yyjK}`
</details>
