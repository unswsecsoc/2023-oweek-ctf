# Infiltration

## Authors

- @ItsIronicIInsist

## Category

- Binary

## Description

We'll go on your signal, alright?

## Difficulty

- Easy

## Points

50

## Hints
1. The compiler gave me this weird warning about gets, but I ignored it. If it compiles, it's good!
2. When exactly does a SIGSEGV occur?

## Files

- [infiltration](./_ctfd/files/infiltration): Compiled program
- [infiltration.c](./_ctfd/files/infiltration.c): Source code of the chall

## Solution

<details>
<summary>Spoiler</summary>

### Idea

Buffer overflow to trigger a SIGSEGV signal to get given access to the server. Can then read flag.

### Walkthrough

1. **Inspecting the source code**
   - If you're given source code, it is perhaps a good idea to read it.
   - We're assuming a basic understanding of C code, to keep this guide a sane length.
   - The program is very minimal. There is only one place it takes in input (and so, one place for bugs)
   - gets is a notoriously insecure function. If you compiled the code yourself (a valid strategy), you'd get a warning from the compiler.
2. **The manpage for gets**
   - So, how does gets work?
   - Manpages are always a good source of info.
   - gets manpage tells us _Never use gets_. In the BUGS section, it mentions its vulnerable to something called a buffer overflow.
3. **Whats a buffer overflow?**
   - You could google this and get thousands of resource, but I'll explain it briefly here.
   - Variables in C all have a size. A char is a byte large, an int is 4 or 8 bytes, a pointer is 8 bytes, etc.
   - The variable buf is the size (size of char ) \* 0x100. Since chars are 1 byte large, buf has a size of 0x100. (256, in decimal).
   - So, when writing to a variable in any way, one should not write more than its size.
4. **Reading in more than you should**
   - What happens if you write more content than a variable can hold?
   - The answer changes depending on what language. C is an old language, so it starts writing to neighbouring variables (a major security concern).
   - There are no other variables in the function, so what does it write to then?
5. **RBP and RIP**
   - When a function is called, it must save where to return to once it finishes (here, we'll call it the saved RIP, or saved PC)
   - This is out-of-scope/not important to understand, but there is also the 'saved RBP', which is the base pointer, that defines the stack frame of the previous function.
   - So, when gets writes out of bounds, we overwrite the saved RBP and RIP. If we make the RIP set to somewhere with invalid code, an error occurs.
6. **SIGSEGV**
   - That error is technically called a SIGSEGV. The program has a function that give us remote access if a SIGSEGV ever occurs.
   - So the solution? Write enough data to overwrite (and mangle) the saved RIP, causing a SIGSEGV, which gives us remote access (a shell).

### Flag

`OWEEK{inf1LtRa7ioN_c0MpL3t3!_uipo22}`

</details>
