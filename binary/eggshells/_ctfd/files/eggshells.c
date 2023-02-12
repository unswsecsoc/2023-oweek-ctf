#include <stdio.h>
#include <sys/mman.h>
#include <errno.h>

void init() {
	setvbuf(stdin, 0, _IONBF, 0);
	setvbuf(stdout, 0, _IONBF, 0);
}

int main() {
	init();

	void (* shellcode)() = mmap(NULL, 0x1000, PROT_EXEC | PROT_READ | PROT_WRITE ,MAP_ANONYMOUS | MAP_PRIVATE, -1, 0);
	
	puts("Please enter your shellcode here: ");
	fgets((char *)shellcode, 0x1000, stdin);

	shellcode();
}
