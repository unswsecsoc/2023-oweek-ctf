# Basic bases

## Authors
- @ItsIronicIInsist

## Category
- Reversing

## Description

Based? Based on what, exactly?


## Difficulty
- Hard

## Points
100

## Hints
1. Number bases do not hold much real significance. Why must it always be base 10?

## Files
- [basic_bases](./_ctfd/files/basic_bases): Compiled binary
- [basic_bases.c](./_ctfd/files/basic_bases.c): Source
- [flag](./_ctfd/files/flag): Fake flag for local work


## Solution
<details>
<summary>Spoiler</summary>

### Idea
Decode input according to base-3 to get flag.

### Walkthrough
1. **Reading the source code**
	- Init function disables buffering, unimportant.
	- Flag is read into flag_buf, and passed to print_flag.
	- Each byte is transformed according to the encode function (the main part of the chall)
2. **The encode function**
	- Takes an input byte, and transforms it to a sequence of 6 bytes
	- Lots of powers of 3 involved (3, 9, 27, 81, 243). 
	- Each byte assigned to the encoded var relates to how many  a given exponent of 3 can fit in the input byte. (E.g # of 243's, # of 81's, # of 27's)
		- Note, that each byte removes the more signifigant powers from the input first. (e.g if there is 1 243, there are 0 81's, not 3)
	- The printf prints that #. The adding 48 was so it translates to ascii

3. **Context clues**
	- The chall name / description mentions 'bases' a lot. 
	- Running the challl outputs a stream of 0's, 1's and 2's.
	- The encode function uses powers of 3.
	- Each byte is being transformed into a base-3 digit system.
4. **Bases**
	- Any number base is viable to use. We often use binary, decimal, hexadecimal, etc. But we can just as easily use a weirder alternative.
	- So, there are a total of 3 digits in the number system (0, 1, 2). For a group of 6, we have the 1's, 3's, 9's, 27's, 81's, and 243's.
	- To get the equivalent number in base ten, take a digit, and multiple it by its column value.
	- e.g 100221 = (1 * 243 + 0 * 81 + 0 * 27 + 2 * 9 + 2 * 3 + 1 * 1)
5. **Attached solve script walkthrough**
	- First, we run the program and collect all its data
	- Then we split it into groups of 6 (each byte is transformed into 6 bytes).
	- We are currently working with ascii, we want their actual values, so we use a map function. ('0' -> 0, '1' -> 1, '2' -> 2)
	- Then, for each digit in the list - multiple it by the value of its column
	- Then, print the character equivalent to the number we end up with.
	- Do this for all characters to get the flag


### Flag
```
OWEEK{b1n4ry5_iN_7h3_p4sT_tH3_fuTur3_i5_t3rn4rY}
```
</details>
