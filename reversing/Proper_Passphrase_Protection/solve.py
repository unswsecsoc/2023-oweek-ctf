from base64 import *

encoded = b'VkRGa1JsSlZkRGRaZWtKcldsZE9hazVXT1c1TlJqbHFZMnBTTm1WV09IbE9XR3cxWVd0ME9RPT0='

stage1 = b64decode(b64decode(encoded))
map(lambda x : x + b'0', stage1)

print(b64decode(stage1))
