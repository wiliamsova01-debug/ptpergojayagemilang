'use client';

import { ArrowLeft, FileText, Shield, AlertTriangle, Users, Hammer, Clock, DollarSign, Droplet } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT PERGO JAYA GEMILANG" className="h-8 w-8" />
              <div>
                <h1 className="text-lg font-bold text-slate-900">PT PERGO JAYA GEMILANG</h1>
                <p className="text-xs text-slate-600">Construction & Oil Solutions</p>
              </div>
            </Link>
            <Link 
              href="/"
              className="flex items-center space-x-2 text-slate-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <FileText className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Syarat dan Ketentuan <span className="text-orange-600">PT PERGO JAYA GEMILANG</span>
            </h1>
            <p className="text-lg text-slate-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pendahuluan</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                Selamat datang di website PT PERGO JAYA GEMILANG. Syarat dan Ketentuan ini ("Syarat") mengatur 
                penggunaan website kami dan layanan yang kami sediakan. Dengan mengakses atau menggunakan website 
                dan layanan kami, Anda setuju untuk terikat oleh Syarat ini.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Jika Anda tidak setuju dengan Syarat ini, harap tidak menggunakan website atau layanan kami.
              </p>
            </div>
          </section>

          {/* Services */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 rounded-lg p-2">
                <Hammer className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Layanan Kami</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Layanan Konstruksi</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Konstruksi bangunan komersial dan industri</li>
                  <li>Renovasi dan perbaikan bangunan</li>
                  <li>Konstruksi infrastruktur</li>
                  <li>Manajemen proyek konstruksi</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Layanan Industri Minyak</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Instalasi dan maintenance sistem minyak dan gas</li>
                  <li>Konstruksi storage tank</li>
                  <li>Pipeline installation</li>
                  <li>Technical consulting untuk industri minyak</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 rounded-lg p-2">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Tanggung Jawab Pengguna</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">Sebagai pengguna layanan kami, Anda setuju untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Memenuhi kewajiban pembayaran tepat waktu</li>
                <li>Mematuhi semua peraturan dan hukum yang berlaku</li>
                <li>Tidak menggunakan layanan untuk tujuan ilegal</li>
                <li>Memberikan akses yang diperlukan untuk pelaksanaan proyek</li>
                <li>Menginformasikan perubahan kebutuhan proyek secara tertulis</li>
                <li>Mematuhi kebijakan keselamatan kerja yang ditetapkan</li>
              </ul>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-100 rounded-lg p-2">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Syarat Pembayaran</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">Syarat pembayaran untuk layanan kami:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Uang muka minimum 30% dari total nilai kontrak</li>
                <li>Pembayaran tahapan sesuai progress pekerjaan</li>
                <li>Pelunasan sebelum serah terima proyek</li>
                <li>Pembayaran dapat dilakukan melalui transfer bank</li>
                <li>Keterlambatan pembayaran dikenakan denda 2% per bulan</li>
                <li>Biaya tambahan untuk perubahan scope pekerjaan</li>
              </ul>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-100 rounded-lg p-2">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Jadwal dan Timeline</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">Ketentuan mengenai jadwal proyek:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Timeline proyek ditentukan dalam kontrak</li>
                <li>Perubahan jadwal harus disetujui kedua belah pihak</li>
                <li>Keterlambatan karena cuaca atau force majeure dapat dinegosiasikan</li>
                <li>Progress report akan disediakan secara berkala</li>
                <li>Perubahan desain dapat mempengaruhi timeline</li>
              </ul>
            </div>
          </section>

          {/* Warranty */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Garansi dan Jaminan</h2>
            <div className="space-y-4">
              <p className="text-slate-700">PT PERGO JAYA GEMILANG memberikan:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Garansi konstruksi minimal 1 tahun untuk struktur utama</li>
                <li>Garansi material sesuai standar pabrikan</li>
                <li>Jaminan kualitas sesuai spesifikasi yang disepakati</li>
                <li>Support teknis setelah serah terima proyek</li>
                <li>Perbaikan cacat produksi dalam masa garansi</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-100 rounded-lg p-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Pembatasan Tanggung Jawab</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">Kecuali diatur secara khusus dalam kontrak:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Tanggung jawab kami dibatasi pada nilai kontrak</li>
                <li>Kami tidak bertanggung jawab atas kerugian tidak langsung</li>
                <li>Kami tidak bertanggung jawab atas keterlambatan pihak ketiga</li>
                <li>Force majeure dibebaskan dari tanggung jawab</li>
                <li>Kerusakan akibat penggunaan tidak sesuai tidak dijamin</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Hak Kekayaan Intelektual</h2>
            <div className="space-y-4">
              <p className="text-slate-700">Semua konten, desain, dan metode kerja PT PERGO JAYA GEMILANG dilindungi oleh:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Hak cipta untuk desain dan dokumen teknis</li>
                <li>Rahasia dagang untuk metode konstruksi</li>
                <li>Merek dagang PT PERGO JAYA GEMILANG</li>
                <li>Dilarang menyalin atau mendistribusikan tanpa izin</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pengakhiran Kontrak</h2>
            <div className="space-y-4">
              <p className="text-slate-700">Kontrak dapat diakhiri jika:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Kedua belah pihak sepakat untuk mengakhiri</li>
                <li>Salah satu pihak melanggar ketentuan material</li>
                <li>Keadaan force majeure yang berkepanjangan</li>
                <li>Pengadilan memutuskan pengakhiran</li>
                <li>Pemberitahuan pengakhiran minimal 30 hari</li>
              </ul>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Penyelesaian Sengketa</h2>
            <div className="space-y-4">
              <p className="text-slate-700">Sengketa akan diselesaikan melalui:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Negosiasi damai terlebih dahulu</li>
                <li>Mediasi dengan pihak ketiga netral</li>
                <li>Arbitrase jika negosiasi gagal</li>
                <li>Pengadilan Negeri Pontianak sebagai yurisdiksi akhir</li>
                <li>Hukum yang berlaku adalah hukum Republik Indonesia</li>
              </ul>
            </div>
          </section>

          {/* Safety Compliance */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 rounded-lg p-2">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Kepatuhan Keselamatan</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">Kami berkomitmen pada keselamatan kerja dengan:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Mematuhi semua peraturan K3 yang berlaku</li>
                <li>Menyediakan APD untuk semua pekerja</li>
                <li>Training keselamatan reguler untuk tim</li>
                <li>Inspeksi keselamatan harian</li>
                <li>Prosedur darurat yang jelas</li>
                <li>Asuransi untuk semua pekerja</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Hubungi Kami</h2>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                Untuk pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>PT PERGO JAYA GEMILANG</strong></p>
                <p>JL. KESEHATAN NO. 123, Desa/Kelurahan Parittokaya</p>
                <p>Kec. Pontianak Selatan, Kota Pontianak</p>
                <p>Provinsi Kalimantan Barat, 78121</p>
                <p>Telepon: 0823-1204-2895</p>
                <p>Email: legal@ptpergojayagemilang.com</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-8 text-center">
            <p className="text-slate-600 mb-4">
              Dengan menggunakan layanan PT PERGO JAYA GEMILANG, Anda mengakui telah membaca, 
              memahami, dan menyetujui Syarat dan Ketentuan ini.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/privacy"
                className="text-orange-600 hover:text-orange-700"
              >
                Kebijakan Privasi
              </Link>
              <span className="text-slate-400">•</span>
              <Link 
                href="/"
                className="text-orange-600 hover:text-orange-700"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}