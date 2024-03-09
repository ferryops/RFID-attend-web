export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 id="rfid-attendance-web" className="text-3xl font-bold mb-4">
        RFID Attendance Web
      </h1>
      <p className="mb-4">
        RFID Attendance Web adalah sebuah aplikasi web untuk melakukan absensi karyawan menggunakan teknologi RFID. Aplikasi ini
        dibangun menggunakan Next.js 14, TailwindCSS, dan MySQL.
      </p>
      <h2 id="fitur" className="text-2xl font-bold mb-2">
        Fitur
      </h2>
      <ul className="list-disc pl-8 mb-4">
        <li>Registrasi dan login karyawan</li>
        <li>Absensi karyawan dengan menggunakan RFID</li>
        <li>Laporan absensi untuk admin</li>
        <li>Aktivitas log untuk setiap perubahan pada database</li>
      </ul>
      <h2 id="teknologi" className="text-2xl font-bold mb-2">
        Teknologi
      </h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <strong>Next.js 14:</strong> Framework React untuk membuat aplikasi web yang cepat dan efisien.
        </li>
        <li>
          <strong>TailwindCSS:</strong> Framework CSS yang dapat disesuaikan dan sangat fleksibel.
        </li>
        <li>
          <strong>MySQL:</strong> Sistem manajemen basis data relasional open-source.
        </li>
      </ul>
      <h2 id="instalasi" className="text-2xl font-bold mb-2">
        Instalasi
      </h2>
      <ol className="list-decimal pl-8 mb-4">
        <li>Pastikan Anda memiliki Node.js dan MySQL terinstall di komputer Anda.</li>
        <li>Clone repositori ini ke dalam komputer Anda.</li>
        <li>
          Instal semua dependencies dengan menjalankan <code className="bg-gray-200 px-2 py-1 rounded">pnpm install</code>.
        </li>
        <li>
          Buat sebuah database MySQL dengan nama <code className="bg-gray-200 px-2 py-1 rounded">rfid_absensi</code>.
        </li>
        <li>
          Import file <code className="bg-gray-200 px-2 py-1 rounded">database.sql</code> ke dalam database yang baru saja Anda
          buat.
        </li>
        <li>
          Konfigurasi koneksi database MySQL pada file <code className="bg-gray-200 px-2 py-1 rounded">.env.local</code>.
        </li>
        <li>
          Jalankan aplikasi dengan menjalankan <code className="bg-gray-200 px-2 py-1 rounded">pnpm run dev</code>.
        </li>
      </ol>
      <h2 id="kontribusi" className="text-2xl font-bold mb-2">
        Kontribusi
      </h2>
      <p className="mb-4">
        Jika Anda ingin berkontribusi pada pengembangan aplikasi ini, Anda dapat melakukan fork dari repositori ini dan membuat
        pull request dengan perubahan yang diinginkan.
      </p>
      <h2 id="lisensi" className="text-2xl font-bold mb-2">
        Lisensi
      </h2>
      <p>
        Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file <code className="bg-gray-200 px-2 py-1 rounded">LICENSE</code>{" "}
        untuk informasi lebih lanjut.
      </p>
    </div>
  );
}
