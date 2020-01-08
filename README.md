# questions-and-answers
Questions and Answers system to larning Nodejs, using too: ejs, express, TDD, github actions and etc...


Mysql
docker run -p 3306:3306 --name mysql_ask -e MYSQL_ROOT_PASSWORD=secret  mysql:latest
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'secret'; 
create database ask_questions;