docker build -t eggshells .
docker run -d -p 9999:9999 --name=eggshells eggshells
