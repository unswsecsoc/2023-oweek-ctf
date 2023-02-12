# data.data.data

## Authors
- @ItsIronicIInsist

## Category
- Forensics

## Description

We've hidden it with the Most Effective Trick Available.


## Difficulty
- Easy

## Points
50

## Hints
1. Did you know most file formats store extra data, not typically needed for standard usecases?

## Files
- [PDF.pdf.pdf](./_ctfd/files/PDF.pdf.pdf): File to investigate


## Solution
<details>
<summary>Spoiler</summary>

### Idea
Read the metadata of the PDF to find the flag.

### Walkthrough
- **Metadata**
	- Many file formats have metadata associated with them, in addition to the actual data they store
	- PDFs are no exception.
	- Description has the acronym M.E.T.A, as a clue.
	- Use a website online, or a tool (e.g exiftool for Linux) to read the metadata
	- The 'Title' field holds the flag

### Flag
`OWEEK{w0w_a_m3tat3xtual_fL4g_y67ee4}`
</details>
