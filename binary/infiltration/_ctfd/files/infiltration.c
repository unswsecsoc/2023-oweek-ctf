#include <stdio.h>
#include <signal.h>
#include <stdlib.h>

void sig_handler(int sig) {
	system("/bin/sh");
}

void init() {
	setvbuf(stdin, 0, _IONBF, 0);
	setvbuf(stdout, 0, _IONBF, 0);
	signal(SIGSEGV, sig_handler);
}

int main() {
	init();

	char buf[0x100];

	printf("> ");
	gets(buf);
}
