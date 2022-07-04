## Test dari Kasir Pintar
Tes untuk membuat api sederhana dengan mencari berdasarkan kota_id dan id. Serta penambahan fitur authentication menggunakan JWT
Simple Code ini dibuat oleh [Elga Ridlo Sinatriya]

## Teknologi yang dipakai
- [nodejs] - Framework backend
- [Express] - Membuat roating jadi lebih sederhana
- [axios] - Untuk melakukan fetch third party api
- [body-parser] - incoming request stream terus dimasukan ke dalam req.body
- [dotenv] - setup environment
- [express-async-handler] - handling exception inside the async function
- [jsonwebtoken] - securely transmitting information
- [morgan] - menampilkan log url yang dipanggil

## Installation
Install dependencies dan devDependencies. Disini saya anggap anda sudah menginstall node.

```sh
npm i
```

## Jalankan Server
Setelah selesai diinstall anda bisa langsung menjalankan dengan cara
```sh
npm run server
```

## Call API
Jalankan API dengan memanggil url dibawah.

Login digunakan untuk mendapatkan token, username gunakan kasir_pintar. Selain username ini akan dianggap username salah. Kemudian ambil token dan masukan kedalam Header url lain.
```sh
http://localhost:5000/login
```

URL alamat kota digunakan untuk mencari kecamatan berdasarkan kota_id
```sh
http://localhost:5000/alamatKota/:id
```

URL alamat kota digunakan untuk mencari kecamatan berdasarkan id
```sh
http://localhost:5000/alamat/:id
```

Anda juga dapat mengimport collection url yang sudah saya save didalam folder collection. Anda hanya perlu membuka postman kemudian klik import dan tujukan ke file yang ada didalam collection.
