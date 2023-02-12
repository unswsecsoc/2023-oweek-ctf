#!/usr/bin/python3

from pwn import *

target = remote("pwn.ctf.secso.cc", 1000)

target.interactive()
