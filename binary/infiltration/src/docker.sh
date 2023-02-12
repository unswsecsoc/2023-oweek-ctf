docker build -t infiltration .
docker run -d -p 9999:9999 --name=infiltration infiltration
