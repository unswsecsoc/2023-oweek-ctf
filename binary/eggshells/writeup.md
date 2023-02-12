# Eggshells

## Authors
- @ItsIronicIInsist

## Category
- Binary

## Description

Sometimes you gotta crack a few eggs to get... their shells?


## Difficulty
- Medium

## Points
75

## Hints
1. We're running on an x86-64 architecture.
2. Checkout pwntools! It's got lots of useful modules

## Files
- [eggshells](./_ctfd/files/eggshells): Compiled executable
- [eggshells.c](./_ctfd/files/eggshells.c): Source code of the chall


## Solution
<details>
<summary>Spoiler</summary>

### Idea
We can run arbitrary code. Steal some shellcode off the internet and run it to get remote access.

### Walkthrough
1. **Inspect the source code**
	- A pretty short file overall.
	- The init function is irrelevant - it tries to make the server print output / take input cleanly, if you're curious.
	- We call a function called 'MMAP'. Then we read input into the variable called 'shellcode'. Then we call the variable??
2. **Shellcode**
	- Hopefully the several repetitions of the term 'shell' and 'shellcode' have caught your eye.
	- A 'shell' is a term equivalent to a 'terminal' (e.g opening cmd on Windows)
	- Shellcode is a term referring to a piece of code, which when ran gives you access to a 'shell'
	- So, the goal is to somehow run 'shellcode'
3. **Mmap**
	- Manpages are great. Read the manpage for mmap, there's a lot of detail.
	- In short, any code/data must be 'mapped' into memory before being accessible.
	- Our call to mmap is manually undergoing that 'mapping process'. The shellcode variable points to that new mapping.
	- There are several options set for this mapping. Most importantly: You can both write and execute it.
4. **Shellcode**
	- So, the first step: We write to the mapping. This is seen in the fgets call. We get to write ~4000 bytes, which is more than we need.
	- Then, we execute whatever written.
	- All code, when compiled down, is really just numbers (representable in binary, but also just, any other number base).
	- If you search up 'shellcode' online, there should be several sources giving you sequences of numbers (or bytes, same thing really).
	- Copy any for the 'x86_64' architecture, send it to the fgets call, and you'll get access when its run!

### Flag
`OWEEK{RCE_i5_r3a11y_c00L_gh67we}`
</details>
