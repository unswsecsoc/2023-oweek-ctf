flag = "please_stop_taking_my_secrets_i_cant_stand_it_anymore"


def shift(c, n):
    if ord(c) >= ord('a') and ord(c) <= ord('z'):
        return chr((ord(c) - ord('a') + n) % 26 + ord('a'))
    else:
        return c


amnt = 15

for c in flag:
    print(shift(c, amnt), end='')
    amnt += 1

print()
