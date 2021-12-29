1. Jelaskan apa yang dimaksud dengan container pada docker !
2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !
3. Apa yang dimaksud dengan docker file ?
4. Apa yang dimaksud dengan docker registery ?
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !

Jawaban:

1. Container adalah sebuah wadah ringan seperti cloud yang berisi semua keperluan untuk menjalankan sebuah aplikasi. Melalui Docker ini developer dapat berbagi container saat bekerja membangun aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan.
2. Perbedaan Docker dan VM \
   a. VM Membutuhkan Hypervisor sedangkan Container tidak \
   b. VM hanya dapat berjalan pada hypervison, sedangkan Container tidak. \
   c. Container dapat berjalan langsung diatas Sistem Operasi. Sedangkan VM tidak.
3. Dockerfile adalah dokumen teks yang berisi sebuah perintah untuk membangun sebuah image.
4. Docker registery adalah wadah yang berisi kumpulan docker image yang bersifat private ataupun public yang dapat diakses melalui docker hub. Melalui docker registry juga kita dapat menggunakan docker image yang telah dibuat oleh developer lain, sehingga akan mempermudah pengembangan aplikasi.
5. Docker-compose adalah sebuah alat dari docker yang digunakan untuk mendefinisikan dan menjalankan aplikasi multi kontainer. Dengan docker-compose kita bisa menjalankan kontainer 1 dengan yang lainya dengan 1 perintah . Docker-compose menggunakan yaml file untuk menyimpan konfigurasi dari service yang dibuat. Setelah konfigurasi file .yaml selesai kita bisa menjalankan compose dengan perintah docker-compose up --build
