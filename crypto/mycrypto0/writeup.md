# mycrypto0

## Authors

- stacksparrow4

## Category

- crypto

## Description

(This challenge does not have `OWEEK{}` around the flag. Just submit the decoded message)

I have secrets to protect, so I've decided to implement a cipher to hide them.
The idea is that even if you could guess which cipher I'm using (and I'm using a
very famous one, so that's not a huge stretch), you would still be unable to decrypt
the message as you don't know the KEY.

So here's my message, there's no way you'll decode it, right?

`Pwe_lql_gwc_nqvl_wcb_ug_amkzmba_epmv_Q_PQL_BPMU_AW_EMTT`

## Difficulty

- Easy

## Points

50

## Solution

<details>
<summary>Spoiler</summary>

### Idea

This challenge provides the flag encoded in a simple caesar cipher with an
unknown key.

### Walkthrough

Utilise the ROT13 operation in [CyberChef](https://gchq.github.io/CyberChef/)
and change the number until the flag is shown.

### Flag

`How_did_you_find_out_my_secrets_when_I_HID_THEM_SO_WELL`

</details>
