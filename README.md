# RFID Attendance Web

RFID Attendance Web adalah sebuah aplikasi web untuk melakukan absensi karyawan menggunakan teknologi RFID. Aplikasi ini dibangun menggunakan Next.js 14, TailwindCSS, dan MySQL.

## Demo
![Demo RFID Attendance Web](https://github.com/ferryops/RFID-attend-web/assets/53357609/1009cad8-390c-4280-a009-41281362f7ad)

## Fitur

- Registrasi dan login karyawan
- Absensi karyawan dengan menggunakan RFID
- Laporan absensi untuk admin
- Aktivitas log untuk setiap perubahan pada database

## Teknologi

- **Next.js 14:** Framework React untuk membuat aplikasi web yang cepat dan efisien.
- **TailwindCSS:** Framework CSS yang dapat disesuaikan dan sangat fleksibel.
- **MySQL:** Sistem manajemen basis data relasional open-source.

## Instalasi

1. Pastikan Anda memiliki Node.js dan MySQL terinstall di komputer Anda.
2. Clone repositori ini ke dalam komputer Anda `git clone https://github.com/ferryops/RFID-attend-web`.
3. Instal semua dependencies dengan menjalankan `pnpm install`.
4. Buat sebuah database MySQL dengan nama `rfid_absensi`.
5. Import file `database.sql` ke dalam database yang baru saja Anda buat.
6. Konfigurasi koneksi database MySQL pada file `.env.local`.
7. Jalankan aplikasi dengan menjalankan `pnpm run dev` atau `pnpm run build` untuk production.

## Tips and tricks
1. Aplikasi sebaiknya dijalankan di intranet (Aplikasi tanpa koneksi internet)

## Kontribusi

Jika Anda ingin berkontribusi pada pengembangan aplikasi ini, Anda dapat melakukan fork dari repositori ini dan membuat pull request dengan perubahan yang diinginkan.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.
