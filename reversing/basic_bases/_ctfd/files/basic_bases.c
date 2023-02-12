#include <stdio.h>
#include <stdlib.h>

void init() {
	setvbuf(stdin, 0, _IONBF, 0);
	setvbuf(stdout, 0, _IONBF, 0);
}

void encode(char c) {
	char encoded[0x6];
	encoded[5] = c / 243;
	encoded[4] = (encoded[5] ? 0 : c / 81);
	encoded[3] = (c % 81) / 27;
	encoded[2] = (c % 27) / 9; 
	encoded[1] = (c % 9) / 3;
	encoded[0] = c % 3;

	for(int i = 5 ; i >= 0 ; i--) {
		printf("%c", 48 + encoded[i]);
	}
}

void print_flag(char buf[0x100]) {
	for(int i = 0 ; buf[i] != 0 && i < 0x100 ; i++) {
		encode(buf[i]);
	}
}

int main() {
	char flag_buf[0x100];

	init();

	FILE * fp;
	fp = fopen("flag", "r");

	if (fp == NULL) {
		printf("'flag' file not found. If this occurs remotely, please contact an admin.\n");
	}

	fread(flag_buf, 1, 0x100, fp);

	print_flag(flag_buf);
}
