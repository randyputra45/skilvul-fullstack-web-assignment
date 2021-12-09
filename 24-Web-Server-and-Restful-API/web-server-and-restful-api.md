Soal:

1. Apa perbedaan antara static web server dan dynamic web server?
2. Jelaskan arsitektur static site dan dynamic site
3. Apa saja yang dapat kita buat pada sisi server?
4. Mohon jelaskan apa itu RESTful?
5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
6. Apa fungsi dari Response Codes?

Jawaban:

1.  Perbedaan web statis dan dinamis\
    a) Website statis berisikan halaman web dengan konten tetap yang dikodekan dalam HTML dan disimpan dalam server. Isi website statis tidaklah berubah, tetap sama, atau "statis" untuk setiap pengunjung.\
    b) Website dinamis berisikan situs web yang kontennya berubah sesuai dengan permintaan pengguna. Sehingga memberikan lebih banyak interaksi dan fungsi pengguna. Website dinamis memerlukan database agar user dapat berinteraksi dengan website.

2.  Perbedaan web statis dan dinamis\
    a) Arsitektur static site

    - Pada bagian server-side terdiri dari file yang sudah dibuat sebelumnya seperti HTML, CSS, Javascript, atau gambar.
    - Ketika user ingin menavigasikan ke suatu page maka browser (client-side) akan mengirimkan request url (HTML) HTTP GET.
    - Kemudian server akan menerima request dan mengirimkan HTTP response berupa dokumen dan HTTP Response Status Code.
    - Pada arsitektur statis hanya bisa menangani GET request karena tidak bisa melakukan modifikasi data.

    b) Arsitektur dynamic site

    - Web Browser akan membuat HTTP GET request ke server menggunakan URL parameter seperti (e.g. /best?team=my_team_name&show=11) atau URL pattern (e.g. /best/my_team_name/11/).
    - Web Server akan mendeteksi bahwa request tersebut adalah dinamis dan meneruskan Web Application untuk diproses, kemudian Web Server akan menentukan bagaimana menangani URL tersebut sesuai dengan HTTP Request Header.
    - Web Application mengidentifikasi bahwa maksud dari request tersebut adalah untuk mendapatkan "daftar tim terbaik" berdasarkan URL (/best/) dan menemukan nama tim yang diperlukan dan jumlah pemain dari URL. Web Application kemudian mendapatkan informasi yang diperlukan dari database.
    - Web Application secara dinamis akan membuat halaman HTML dengan meletakkan data (dari Database) ke dalam placeholder di dalam template HTML.
    - Web Application mereturn HTML yang sudah digenerate to dalam Web Browser (via the Web Server), bersamaan dengan sebuah HTTP status code 200 ("success"). Jika terdapat error yang menghalangi return HTML maka Web Application akan menampilkan status code lainnya seperti "404" yang menandakan bahwa team yang diminta tidak ada.
    - Web Browser kemudian akan melakukan proses returned HTML, dan mengirim request ke server terkait file CSS dan JS yang terkait dengan file HTML tersebut.

3.  Hal yang dapat dilakukan pada sisi server

    - Membuat database
    - Mengatur keamanan data
    - Melakukan operasi CRUD pada database
    - Melakukan authentikasi dan otorisasi user
    - Melakukan deploy API yang menjembatani server dan client

4.  Representational State Transfer dengan sebutan RESTful API merupakan sebutan untuk web services yang menerapkan arsitektur REST. Ia bisa disebut juga sebagai API (application program interface) karena digunakan untuk menjembatani antara sistem yang berbeda (client dan server). API atau Application Program Interface sendiri merupakan antarmuka yang menjadi perantara antara sistem aplikasi yang berbeda. API tak hanya dalam bentuk Web Service, bisa saja berupa SDK (Software Development Kit) ataupun lainnya.

5.  HTTP Verbs:

    - GET: Ambil data
    - POST: Buat data baru
    - PUT: Update data secara keseluruhan
    - PATCH: Update data sebagian
    - DELETE: Hapus data

6.  HTTP status codes adalah sebuah kode response standar yang diberikan oleh server website di internet. Kode-kode ini membantu mengidentifikasikan masalah ketika ada sebuah halaman web atau resource yang tidak termuat dengan benar. Berikut Pengertian masing-masing status kode:
    - 1xx Information
    - 2xx Successful
    - 3xx Redirect
    - 4xx Request Error
    - 5xx Server Error
