#!/bin/bash

sudo yum update -y
sudo yum install httpd -y
sudo service httpd start
sudo yum install gcc-c++ make -y
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install nodejs -y
node -v
npm -v