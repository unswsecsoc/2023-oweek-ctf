# National String Emporium

## Authors
- @ItsIronicIInsist

## Category
- Forensics

## Description

Finally, a dictionary in C.


## Difficulty
- Easy

## Points
50

## Hints
1. Strings are a data type in programming languages - but what are they used for?
2. Tools exist for inspecting binary files, and their various sections.

## Files
- [emporium](./_ctfd/files/emporium): Binary to investigate


## Solution
<details>
<summary>Spoiler</summary>

### Idea
Run `strings`, and pass through a filter to get the flag.

### Walkthrough
1. **Running the binary**
	- It asks if you want the flag.
	- Replying yes has it stall forever, replying otherwise has it exit.
	- It mentions 'strings' before stalling, and 'String' is also in the title - something to look into.
2. **Strings in programming**
	- A pretty simple concept, a sequence of characters.
	- The flag has been lost amongst all the other strings supposedly. Do we have a way to view all the strings for a program?
	- The utility `strings` will output all strings  found in a binary.
	- However, running it on the binary outputs way too much, as it does no filtering.
3. **Basic filtering**
	- Need some way to filter the output. We are going to assume the flag will be prepended with OWEEK.
	- `grep 'OWEEK'` is an easy way to do this. It should show you the flag.
	- Flag mentions regex - which is an extension to using literaly words for filtering/searching/etc.


### Flag
`OWEEK{7he_w0rd_i5_r3gex_t57uuN}`
</details>
