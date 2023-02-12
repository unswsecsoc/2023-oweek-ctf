# chef

## Authors

- stacksparrow4

## Category

- forensics

## Description

My friend the chef has been cooking, and he gave me this as a meal:

`oO08vWAvEROFtMpzfqQHc4eMiUO4GS98/YiCQX94nCNxzBdqoqVmD4rPietgk99SyTJr/ukztET+WxMmnGfoTQ==`

I'm not sure what to make of it. Maybe you'd like to take a look? His recipe
is attached.

## Difficulty

- Easy

## Points

50

## Hints

## Files

- [recipe.txt](./_ctfd/files/recipe.txt): The recipe that has to be reversed

## Solution

<details>
<summary>Spoiler</summary>

### Idea

A cyberchef recipe is provided, it must be reversed to retrieve the flag.

### Walkthrough

Copy the recipe in reverse order, and using the reverse operations for each step.
Then input the output from the other recipe to retrieve the flag.
Here is the url for the reversed recipe:

```
https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true,false)To_Hex('Space',0)Reverse('Character')AES_Decrypt(%7B'option':'Hex','string':'5ec50c5ec50c5ec50c5ec50c5ec50c5'%7D,%7B'option':'Hex','string':'5ec50c5ec50c5ec50c5ec50c5ec50c5'%7D,'CBC','Hex','Raw',%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D)From_Punycode(false)From_Braille()&input=b08wOHZXQXZFUk9GdE1wemZxUUhjNGVNaVVPNEdTOTgvWWlDUVg5NG5DTnh6QmRxb3FWbUQ0clBpZXRnazk5U3lUSnIvdWt6dEVUK1d4TW1uR2ZvVFE9PQ
```

### Flag

`OWEEK{cyB3r_ch3f_c00kin_s0meth!ng_up}`

</details>
