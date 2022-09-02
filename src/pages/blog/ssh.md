---
layout: $/layouts/post.astro
title: "SSH to Ubuntu from Windows 10"
description: "Configuring SSH on Ubuntu server and connecting via SSH from Windows 10"
author: Wirly
authorTwitter: 
date: 2022-09-02
tags: ["ssh", "ubuntu"]
---

OpenSSH Client can be addedd to Windows 10 by going to Settings > Apps and Features > Optional Features > Add a Feature and search for OpenSSH Client.

I am assuming you have an Ubuntu server to connect to, if not you can download an .iso [here](https://ubuntu.com/download/server) and setup a vm on Hyper-Visor or Virtual Box. 

On the server we need to do the following

1. make sure OpenSSH Server is installed.

   ```bash
      sudo apt install openssh-server
   ```

2. enable password authentication for connecting to OpenSSH Server
   
   open the config file that controls the options for the SSH server

   ```bash
      sudo nano /etc/ssh/sshd_config
   ```

   and make sure that the PasswordAuthentication is either commented out or set to "yes"

3. start or restart the ssh server service

   ```bash
      sudo service ssh restart
   ```

4. on the Windows client create a private public key pair

   ```bash
      ssh-keygen -t rsa -b 4096
   ```

5. copy the public key to the Ubuntu server

   ```bash
      scp id_rsa.pub username_on_server@ubuntuserver_dns_or_ip:/home/username_on_server
   ```

6. ssh into Ubuntu server using password authentication

   ```bash
      ssh username_on_server@ubuntuserver_dns_or_ip
   ```

7. add the public key to the authorized_keys for the user you are logged in as

   ```bash
      cat id_rsa.pub >> .ssh/authorized_keys
   ```

8. The next