# Noted 0

## Authors

- stacksparrow4

## Category

- web

## Description

Something seems a bit off with this note taking site. Perhaps there are some secrets
for you to uncover...

## Difficulty

- Easy

## Points

50

## Solution

<details>
<summary>Spoiler</summary>

### Idea

Exploit an IDOR to find the flag.

### Walkthrough

Creating a note provides a link to a url that shows the note.
This url usually ends in something like `2.txt`. The number before `.txt`
is actually the id of the note, so by changing the url to `1.txt` you can view
the note that has the flag.

### Flag

`OWEEK{y0u_d1dNT_tamp3r_w1th_TH3_l1nk_d1d_U}`

</details>
