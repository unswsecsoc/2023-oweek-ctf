# cooked

## Authors

- stacksparrow4

## Category

- web

## Description

This site seems kind of cooked...

## Difficulty

- Easy

## Points

50

## Solution

<details>
<summary>Spoiler</summary>

### Idea

Modify a cookie to access the flag

### Walkthrough

Register and login with a new account. You'll notice that when you click "Get flag",
you do not have permission. If you open developer tools, go to the application section
(in chrome, search up how to find cookies in devtools if on other browsers),
and find the cookies for the page, you will notice it has `is_admin` as `false`.
Change this to `true` and click the button to obtain the flag.

### Flag

`OWEEK{c00k135_and_cr3aM_5h3kj}`

</details>
