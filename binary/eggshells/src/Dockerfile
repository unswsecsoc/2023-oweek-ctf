# Basic Xinetd Docker Container
FROM ubuntu:latest

# Apt-get update
RUN apt-get update && \
    apt-get install -y xinetd && \
	apt-get install -y gcc && \
	apt-get install -y make && \
	apt-get install -y bash && \
    rm -rf /var/lib/apt/lists/*

RUN apt-get update && \
    apt-get install -y python3-minimal

# Create CTF user
RUN mkdir /home/ctf && \
    chmod 755 /home/ctf && \
    useradd -M -U -d /home/ctf ctf && \
    chown ctf:ctf /home/ctf
COPY xinetd.conf /etc/

# Copy binary
COPY ./eggshells /home/ctf/main
COPY ./flag /home/ctf/


# Make the binary
RUN chmod 755 /home/ctf/main && \
	chmod 755 /home/ctf/flag && \
    chown -R ctf: /home/ctf

# Expose container
EXPOSE 9999

# Run script when the container launches
CMD ["script", "-c", "xinetd -d -dontfork"]
