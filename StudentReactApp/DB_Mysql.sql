create database StudentRegistration;
use StudentRegistration;

create table registration(
    PRN int primary key,
    PWD  varchar(20) ,
    CNFPWD varchar(20)
);

create table studentDetails(
    RollNo int primary key,
    StudName varchar(20),
    Course varchar(20),
    DOA date,
    Phone varchar(20)
);