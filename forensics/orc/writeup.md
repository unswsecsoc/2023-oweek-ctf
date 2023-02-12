# orc

## Authors

- stacksparrow4

## Category

- forensics

## Description

I have a screenshot of some binary that is meant to include the flag.
Surely there's some better way of copying it into a decoder than
typing it out manually...

## Difficulty

- Easy

## Points

50

## Files

- [challenge.png](./_ctfd/files/challenge.png): A photo of the binary encoded flag

## Solution

<details>
<summary>Spoiler</summary>

### Idea

Use OCR to retrieve the text from the image

### Walkthrough

There are many OCR tools to do this, I used the linux command line tool `tesseract`:

```bash
tesseract challenge.png out
```

This created a file called `out.txt` which I then used a binary decoder on to retrieve
the flag.

### Flag

`OWEEK{Ocr_f0r_the_wIN!_atga5}`

</details>
