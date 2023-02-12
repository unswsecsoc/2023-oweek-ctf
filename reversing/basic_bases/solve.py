from pwn import *

target = remote("pwn.ctf.secso.cc", 202)

data = target.recvall()
print(data)

#Split into groups of 5
for i in range(0, int(len(data) / 6)):
	byte = data[i*6:(i+1)*6]


	# create a list of exponents
	exponents = list(map(lambda x : x - ord('0'), byte))

	decoded_char = 0

	#add each exponent
	for j in range(0, 6):
		decoded_char += (3**(5-j))*exponents[j];

	print(chr(decoded_char), end='')
		


