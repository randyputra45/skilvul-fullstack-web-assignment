-- create database --
create database skilvulbookstore;

-- use database --
use skilvulbookstore;

-- create tabel penerbit --
create table penerbit (
	id int(10) auto_increment not null,
	nama varchar(50),
	kota varchar(50),
	primary key (id)
);

-- create tabel penulis --
create table penulis (
	id int(10) auto_increment not null,
	nama varchar(50),
	kota varchar(50),
	primary key (id)
);

-- create tabel buku --
create table buku (
	id int auto_increment not null,
	isbn varchar(50),
	judul varchar(50),
	penulis int(10),
	penerbit int(10),
	harga int(10),
	stock int(10),
	primary key (id)
);

-- relasi buku dan penerbit --
alter table buku
	add constraint fk_penerbit
	foreign key (penerbit) references penerbit(id);
	
-- relasi buku dan penulis --
alter table buku
add constraint fk_penulis
foreign key (penulis) references penulis(id);
	
-- insert data on penerbit table --
insert into penerbit (nama, kota)
values	('Erlangga', 'Jakarta'),
		('Gramedia', 'Jakarta'),
		('Elexmedia Komputindo', 'Surabaya'),
		('Gagas Media', 'Semarang'),
		('Grasindo', 'Malang');
	
-- insert data on penulis table --
insert into penulis (nama, kota)
values	('Andre Hirata', 'Bangka Belitung'),
		('Raditya Dika', 'Jakarta'),
		('Haidar Musyafa', 'Bandung'),
		('Eka Kurniawan', 'Semarang'),
		('Ika Natassa', 'Malang');
		
-- insert data on buku table --
insert into buku (isbn, judul, penulis, penerbit, harga, stock)
values	('978-1501110368', 'Laskar Pelangi', 1, 2, 50000, 290),
		('978-9797808969', 'Cinta Brontosaurus', 2, 2, 40000, 21),
		('978-9797801223', 'Hamka', 3, 1, 80000, 1),
		('978-6020312583', 'Cantik itu Luka', 4, 3, 21000, 9),
		('978-9797808219', 'Divortiare', 5, 5, 32000, 11);
	
-- inner join buku with penerbit --
select buku.judul, penerbit.nama
from buku
inner join penerbit on buku.id = penerbit.id;

-- left join buku with penerbit --
select buku.judul, buku.stock, penerbit.kota
from buku
left join penerbit on buku.id = penerbit.id;

-- right join buku with penerbit --
select buku.judul, buku.stock, penerbit.kota
from buku
right join penerbit on buku.penerbit = penerbit.id;

-- max price column --
select max(harga)
from buku
where stock < 10;

-- min price column --
select min(harga)
from buku;

-- min price column --
select count(harga)
from buku
where harga < 100000;
