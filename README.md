## Sorting visualizer

Developed using react + typescript + sass

#### How to Deploy ?

- run `npm install` in your root project directory
- Run `npm build` in your root project directory
- it will generate a build directory
- create an EC2 ubuntu instance
- while creating EC2 instance, make sure to enable key-pair, ssh for your ip address and http traffic to all ip
  addresses
- login in to EC2 via your local terminal using SSH, to login:
- select your EC2 install and click on connect
- go to your ssh client and run that command in directory where you have downloaded pem file
- in EC2 shell, run

```bash
sudo apt update 
sudo apt install 
sudo apt install nginx 
```

- now if you paste your <Public IPv4 address> in browser, you should be seeing some nginx html page

- from your local terminal, run

```bash
scp -r -i "<your_key_pair.pem>" <path_to_your_project/build>  <Public IPv4 DNS>:~
```

- confirm that your build directory is now available at ec2 machine
- from your remote terminal, run

```bash
ls
```

now you should be seeing your `build` directory in the output

```bash
sudo rm /etc/nginx/sites-available/default
sudo vim /etc/nginx/sites-available/default
```

paste this in to file

```
server {
  listen 80 default_server;
  server_name _;

# react app & front-end files
  location / {
    root /var/www/html/build;
    try_files $uri /index.html;
  }
}
```

and press shift+: wq to exit vim

run

```bash
sudo systemctl restart nginx
mv ~/build /var/www/html/
```

that's it if you paste your <ip_address> in to your browser, you should be able to see the site now# sorting_visualiser_v2
