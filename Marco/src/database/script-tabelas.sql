
drop database P1;

create database P1;

use P1;

create table CPU_metricas(
idCPU int primary key,
temperatura decimal(3,1),
ram decimal(3,2),
frequencia decimal(2,1),
disco decimal(4,1),
fk_Cpu int);

Insert into CPU_metricas values(1, 44.2,3.2, 22.2, 223.2);


