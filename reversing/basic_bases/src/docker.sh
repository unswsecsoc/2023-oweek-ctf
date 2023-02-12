docker build -t basic_bases .
docker run -d -p 9999:9999 --name=basic_bases basic_bases
