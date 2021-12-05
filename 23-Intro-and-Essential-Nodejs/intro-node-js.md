### Soal

1. Mohon jelaskan apa itu Node.js? Apa perbedaamnya dengan JavaScript?
2. Mohon jelaskan arsitektur dari Node.js?
3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

### Jawaban

1. Node.js adalah environment runtime yang bersifat open-source, lintas platform, library, dan framework yang dikembangan serta digunakan untuk membuat aplikasi di sisi server dan memungkinkan JavaScript bisa dijalankan di server. Sedangkan JavaScript adalah bahasa pemrograman yang biasanya digunakan pada sisi client.
2. Node.js memiliki dua komponen utama, yaitu engine JavaScript V8 Google dan Libuv Library. Engine V8 milik Google adalah sebuah compiler JavaScript yang dibuat menggunakan bahasa pemrograman C++. Dengan komponen ini, input berupa kode JavaScript dapat di-compile menjadi kode dalam tingkat assembly. Sedangkan Libuv Library, merupakan library C++ ini bertugas mengelola operasi asynchronous I/O (input/output) di Node.js dan main event loop. Di dalamnya juga terdapat thread pool reserve yang menangani thread setiap operasi I/O.
3. Built-in Module, External Module, dan Custom Module
   a)__ Built-in Module: merupakan module yang sudah terinstal ketika kita menginstal Node.JS dan akan ter-load secara otomatis ketika Node.JS dijalankan.
   b)__ External Module: merupakan module yang dibuat oleh komunitas Node.JS untuk membantu memecahkan permasalahan yang tidak bisa ditangani oleh built-in module. Biasanya module ini dipublish pada Node Package Manager (NPM).
   c)__ Custom Module: merupakan module yang dibuat sendiri oleh programmer dan tidak terdapat pada Built-in dan External Module
4. Contoh Built-in Module, External Module, dan Custom Module
   a)__ Built-in Module: http, url, querystring, path, fs, crypto, net, dns, os module
   b)__ External Module: bower, csv, debug, gulp, lodash, moongoose, mongodb module
   c)__ Custom Module: custom module arithmetic.js untuk melakukan operasi penjumlahan untuk menggunakannya kita tinggal melakukan import arithmetic.js
