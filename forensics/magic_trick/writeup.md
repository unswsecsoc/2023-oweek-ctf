# Magic trick

## Authors
- @ItsIronicIInsist

## Category
- Forensics

## Description

And with one simple trick, the flag is gone, never to be found again...


## Difficulty
- Easy

## Points
50

## Hints
1. What are these things called 'magic bytes'?

## Files
- [mysterious_file](./_ctfd/files/mysterious_file): File to investigate


## Solution
<details>
<summary>Spoiler</summary>

### Idea
Alter the header of the file so that it's recognized as a PDF, so that you can open it properly

### Walkthrough
1. **What type of file is it?**:
	- A good starting point for forensics challs is often figuring out what type of file we've been given
	- There's a utility on linux call 'file' we can run on it. If we do we get: 
	```
	mysterious_file: data
	```
	- Not very helpful!
2. **Text editor time**:
	- Never hurts to open the file in a text editor and look around.
	- The first 'chunk' of bytes looks something like
	```
	%GNOMES
	%äüöß
	2 0 obj
	<</Length 3 0 R/Filter/FlateDecode>>
	stream
	x}Kí¶çõ+<´¢÷dف
				  BfyRÉýû·$Ë{»jõI7ìm­½ü-[å2ö.ÿ£χ?¼ó±m$W[<r®.Kû_éǯ¿)óÿßɟ?z0)³(=v?a=°sëá¢?路èÓñyٛüĂõËԒ
	```
3. **Googling the readable things**
	- The header looks edited - it's probably not standard to have a file start with %GNOMES
	- The other piece of normal text is 
	```
	<</Length 3 0 R/Filter/FlateDecode>>
	```
	- So we input it into google. The top results are all talking PDFs, meaning we probably have a PDF file
4. **Magic bytes**
	- CTF names/descriptions usually have a clue in them. The one for this is 'magic', leading to 'magic bytes'
	- Most file formats have a set sequence of bytes at the start of the header to be easily recognizable
	- If we search something like 'PDF magic bytes', we should get results.
	- Wikipedia says to try %PDF- 
5. **Editing the file**
	- Pick your favourite hex editor, and edit the first 5 bytes to be %PDF-
	- Adobe/chrome should now recognize it.
	- Open and get your flag!


### Flag
`OWEEK{d0Nt_trUs7_tH3_m4g1C_bYt3s}`
</details>
