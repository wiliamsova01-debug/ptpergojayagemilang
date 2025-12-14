'use client';

import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText, Droplet } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
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
              <Shield className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Kebijakan Privasi <span className="text-orange-600">PT PERGO JAYA GEMILANG</span>
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
                PT PERGO JAYA GEMILANG ("Kami") sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                yang Anda berikan kepada Kami melalui website kami dan layanan terkait.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Dengan menggunakan website dan layanan Kami, Anda menyetujui praktik pengumpulan dan penggunaan data sebagaimana 
                dijelaskan dalam kebijakan ini.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 rounded-lg p-2">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Informasi yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Informasi Pribadi</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat perusahaan atau rumah</li>
                  <li>Informasi pekerjaan dan jabatan</li>
                  <li>Informasi pembayaran (jika applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Informasi Teknis</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Alamat IP</li>
                  <li>Jenis browser dan sistem operasi</li>
                  <li>Informasi perangkat</li>
                  <li>Data penggunaan website</li>
                  <li>Cookies dan data tracking</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Informasi Bisnis</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Nama perusahaan</li>
                  <li>Bidang usaha</li>
                  <li>Kebutuhan proyek</li>
                  <li>Dokumen tender atau proposal</li>
                  <li>Informasi teknis proyek</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 rounded-lg p-2">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Penggunaan Informasi</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">Kami menggunakan informasi yang Anda berikan untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Memproses permintaan layanan konstruksi dan industri minyak</li>
                <li>Memberikan penawaran harga dan proposal proyek</li>
                <li>Komunikasi terkait layanan dan proyek</li>
                <li>Penagihan dan administrasi keuangan</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Marketing dan promosi layanan (dengan persetujuan Anda)</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-100 rounded-lg p-2">
                <Lock className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Keamanan Data</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">
                PT PERGO JAYA GEMILANG berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Security audit berkala</li>
                <li>Training staf tentang keamanan data</li>
                <li>Backup data yang aman</li>
                <li>Komplian dengan standar keamanan industri</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pembagian Informasi</h2>
            <div className="space-y-4">
              <p className="text-slate-700">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Kepada mitra bisnis yang terlibat dalam proyek</li>
                <li>Kepada otoritas hukum atau peraturan yang berwenang</li>
                <li>Untuk melindungi hak, properti, atau keselamatan Kami atau pihak lain</li>
                <li>Kepada penyedia layanan pihak ketiga yang membantu operasional Kami</li>
              </ul>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-100 rounded-lg p-2">
                <UserCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Hak Anda sebagai Pengguna</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">Sebagai pengguna, Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Mengakses informasi pribadi yang Kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda</li>
                <li>Menolak penggunaan informasi untuk marketing</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan penggunaan data</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kebijakan Cookies</h2>
            <div className="space-y-4">
              <p className="text-slate-700">
                Website kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Meningkatkan pengalaman pengguna</li>
                <li>Mengingat preferensi Anda</li>
                <li>Analisis traffic dan penggunaan website</li>
                <li>Personalisasi konten</li>
              </ul>
              <p className="text-slate-700">
                Anda dapat mengatur browser untuk menolak cookies atau memberi tahu saat cookies dikirim.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-100 rounded-lg p-2">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Perubahan Kebijakan</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-700">
                PT PERGO JAYA GEMILANG dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Diinformasikan melalui website kami</li>
                <li>Menunjukkan tanggal pembaruan terakhir</li>
                <li>Berlaku efektif sejak tanggal publikasi</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Hubungi Kami</h2>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, silakan hubungi:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>PT PERGO JAYA GEMILANG</strong></p>
                <p>JL. KESEHATAN NO. 123, Desa/Kelurahan Parittokaya</p>
                <p>Kec. Pontianak Selatan, Kota Pontianak</p>
                <p>Provinsi Kalimantan Barat, 78121</p>
                <p>Telepon: 0823-1204-2895</p>
                <p>Email: privacy@ptpergojayagemilang.com</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-8 text-center">
            <p className="text-slate-600">
              Kebijakan Privasi ini berlaku untuk semua pengguna website dan layanan PT PERGO JAYA GEMILANG.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mt-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}