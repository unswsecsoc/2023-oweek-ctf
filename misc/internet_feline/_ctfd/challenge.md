---
name: "Internet Feline"
category: "misc"
value: 15
flag: "OWEEK{cat5_on_th3_1ntern3t!}"
state: "active"
flag_case: "case_sensitive"
---

Hey! This chal exists to teach you about the wonders of `netcat`. It's a tool used to connect to other computers on the internet, and we use it to access some of our challenges!

(Most of the challenges that require netcat are on the advanced side - if this seems like a pain, it's entirely fine to focus on other challenges that don't need it.)

### macOS/Linux

This should be easy!

1. Open an application called 'Terminal', either from your Applications menu or Spotlight Search.

A window should now pop up! This is called a terminal, and you'll learn more about how to use it if you do COMP1511.

2. Type the following into the terminal where the blinking cursor is.
    `nc pwn.ctf.secso.cc 1000`

3. Press enter! You should now be able to talk to me and get a flag!

### Windows

You're probably a CSE student. The best option for you is to connect to a CSE machine and follow the Linux instructions above!

If not, you'll need to follow these steps:

Unfortunately, Windows doesn't come with netcat installed. However, there is a similar tool called telnet that you can use instead. Before we can use it, we'll need to enable it.

1. Open Search in the Start Menu
2. Select 'Turn Windows features on or off'. A window should open.
3. Scroll down through the window, and look for an option called 'Telnet Client'. Make sure it is ticked, and press 'OK'. It should take a few moments to enable.
4. Open Search again, type in `cmd`, and press enter.

Yay! A window should open. This is called the Command Prompt. You can use telnet from the command prompt to connect and talk to me!

5. Type the following command into the Command Prompt window next to the blinking cursor:
    `telnet pwn.ctf.secso.cc 1000`

6. Press Enter! You can talk to me now and get a flag!

(Luckily, you'll get access to, and learn how to use a Linux command prompt if you do COMP1511. You can even learn to install Linux with Windows!)
