from base64 import *

user_phrase = input("Do you know the secret phase? ")

stage1 = b64encode(bytes(user_phrase, 'utf-8'))
map(lambda x : x - b'0', stage1)
phrase_encoded = b64encode(b64encode(stage1))

if (phrase_encoded == b'VkRGa1JsSlZkRGRaZWtKcldsZE9hazVXT1c1TlJqbHFZMnBTTm1WV09IbE9XR3cxWVd0ME9RPT0='):
	print("Welcome to the club. Go submit your flag!")
else:
	print("Incorrectamundo. Wrong. False. Erroneous. No.")




