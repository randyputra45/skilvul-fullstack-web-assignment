-- show database --
show databases;

-- create database --
create database bookstore;

-- use database --
use bookstore;

-- show table in bookstore db --
show tables;

-- create books table --
create table books (
	id int auto_increment,
	author1 varchar(100) not null,
	author2 varchar(100),
	author3 varchar(100),
	title varchar(100),
	description text,
	place_sell char(3),
	stock int default 0,
	creation_date datetime default current_timestamp on update current_timestamp,
	primary key (id)
);

-- update table column --
alter table books
	add price int default 0,
	add status enum('available', 'out of stock', 'limited'),
	drop column place_sell;

-- insert data on books table --
insert ignore into books (author1, author2, author3, title, description, stock, price, status)
values	('Taufiq Ismail', 'Andrea Hirata', 'Pidi Baiq', 'Laskar Pelangi', 'Laskar Pelangi ditulis tahun 1990', 2, 50000, 'limited'),
		('Tere Liye', 'Dewi Lestari', 'Asma Nadia', 'Perahu Kertas', 'Perahu Kertas ditulis tahun 1991', 10, 60000, 'available'),
		('Raditya Dika', 'Ayu Utami', 'Ahmad Fuadi', 'Negeri 5 Menara', 'Negeri 5 Menara ditulis tahun 1992', 21, 45000, 'available');

-- select and show all row --	
select * from books;

-- select using alias --
select id as ID, author1 as A1, author2 as A2, author3 as A3 from books;

-- select title where id=3 --
select title from books where id=3;

-- select author1 where stock>5 and price<50000 --
select author1 from books where stock>5 and price<50000;

-- select title where status is available or limited --
select title from books where status='available' or status='limited';

-- select title where status is not limited --
select title from books where not status='limited';

-- order by ascending --
select * from books order by id asc;

-- limit row --
select * from books limit 2;

-- update laskar pelangi author1 and price --
update books set author1 = 'Eka Kurniawan', price = 76000
where title = 'Laskar Pelangi';

-- delete perahu kertas row --
delete from books where title = 'Perahu Kertas';
