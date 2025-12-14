'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Droplet, HardHat, Wrench, Shield, Award, Clock } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT PERGO JAYA GEMILANG" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">PT PERGO JAYA GEMILANG</h1>
                <p className="text-xs text-slate-600">Construction & Oil Solutions</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-orange-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-orange-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-orange-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-orange-600 transition-colors">Proyek</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-orange-600 transition-colors">Kontak</button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded">Layanan</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded">Proyek</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded">Kontak</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                PT <span className="text-orange-500">PERGO JAYA</span> GEMILANG
              </h1>
              <p className="text-xl mb-8 text-slate-300">
                Solusi Terpercaya untuk Konstruksi Bangunan dan Industri Minyak
              </p>
              <p className="text-lg mb-8 text-slate-400">
                Perusahaan profesional dengan pengalaman bertahun-tahun dalam menyediakan layanan konstruksi berkualitas tinggi dan solusi industri minyak yang inovatif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Hubungi Kami
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Lihat Layanan
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                    <Building2 className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold">Konstruksi</h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                    <Droplet className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold">Industri Minyak</h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                    <Shield className="h-12 w-12 text-green-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold">Berkualitas</h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                    <Award className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold">Berpengalaman</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tentang <span className="text-orange-600">Perusahaan Kami</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              PT PERGO JAYA GEMILANG adalah perusahaan terkemuka yang bergerak di bidang konstruksi bangunan dan industri minyak
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Visi & Misi</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-orange-600 mb-2">Visi</h4>
                  <p className="text-slate-700">
                    Menjadi perusahaan konstruksi dan solusi industri minyak terdepan yang diakui secara nasional dengan standar kualitas internasional.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-600 mb-2">Misi</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      Memberikan layanan konstruksi berkualitas tinggi dengan tepat waktu
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      Mengimplementasikan solusi inovatif untuk industri minyak
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      Menjaga keselamatan kerja dan keberlanjutan lingkungan
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      Membangun hubungan jangka panjang dengan klien dan mitra
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Nilai Perusahaan</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <HardHat className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Profesional</h4>
                  <p className="text-sm text-slate-600 mt-1">Standar kerja tertinggi</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Terpercaya</h4>
                  <p className="text-sm text-slate-600 mt-1">Komitmen penuh</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Wrench className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Inovatif</h4>
                  <p className="text-sm text-slate-600 mt-1">Solusi modern</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Tepat Waktu</h4>
                  <p className="text-sm text-slate-600 mt-1">Deadline terjamin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan <span className="text-orange-600">Unggulan</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan konstruksi dan industri minyak Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 rounded-lg p-3 w-fit mb-4">
                <Building2 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Konstruksi Bangunan</h3>
              <p className="text-slate-600 mb-4">
                Jasa konstruksi komprehensif untuk bangunan komersial, industri, dan infrastruktur dengan standar kualitas tertinggi.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Gedung perkantoran</li>
                <li>• Pabrik dan gudang</li>
                <li>• Infrastruktur jalan</li>
                <li>• Renovasi bangunan</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 rounded-lg p-3 w-fit mb-4">
                <Droplet className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Industri Minyak</h3>
              <p className="text-slate-600 mb-4">
                Solusi lengkap untuk industri minyak dan gas, mulai dari instalasi hingga maintenance dengan teknologi terkini.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Instalasi pipa</li>
                <li>• Storage tank</li>
                <li>• Processing plant</li>
                <li>• Maintenance sistem</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
                <HardHat className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Manajemen Proyek</h3>
              <p className="text-slate-600 mb-4">
                Pengelolaan proyek profesional dari perencanaan hingga penyelesaian dengan fokus pada efisiensi dan kualitas.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Perencanaan proyek</li>
                <li>• Pengendalian biaya</li>
                <li>• Manajemen waktu</li>
                <li>• Quality control</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Keselamatan Kerja</h3>
              <p className="text-slate-600 mb-4">
                Implementasi standar keselamatan kerja internasional untuk melindungi tim dan aset proyek.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Risk assessment</li>
                <li>• Safety training</li>
                <li>• Emergency response</li>
                <li>• Compliance audit</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
                <Wrench className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Maintenance</h3>
              <p className="text-slate-600 mb-4">
                Layanan perawatan preventif dan korektif untuk memastikan operasional berkelanjutan.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Preventive maintenance</li>
                <li>• Emergency repair</li>
                <li>• System upgrade</li>
                <li>• Technical support</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 rounded-lg p-3 w-fit mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Konsultasi Teknis</h3>
              <p className="text-slate-600 mb-4">
                Ahli konsultasi untuk optimasi desain dan efisiensi operasional proyek Anda.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Feasibility study</li>
                <li>• Design optimization</li>
                <li>• Technical audit</li>
                <li>• Process improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proyek <span className="text-orange-600">Terbaru</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kami bangga telah berhasil menyelesaikan berbagai proyek konstruksi dan industri minyak dengan hasil memuaskan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gedung Kantor Pusat</h3>
                <p className="text-slate-600 mb-4">
                  Konstruksi gedung perkantoran modern dengan fasilitas lengkap dan desain arsitektur kontemporer.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-600 font-semibold">Selesai 2024</span>
                  <span className="text-slate-500">Pontianak</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Droplet className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Storage Tank Facility</h3>
                <p className="text-slate-600 mb-4">
                  Instalasi storage tank industri minyak dengan kapasitas besar dan sistem safety terintegrasi.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-600 font-semibold">Selesai 2024</span>
                  <span className="text-slate-500">Kalimantan Barat</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <HardHat className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pabrik Pengolahan</h3>
                <p className="text-slate-600 mb-4">
                  Pembangunan pabrik pengolahan dengan teknologi terkini dan sistem otomasi lengkap.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-600 font-semibold">Selesai 2023</span>
                  <span className="text-slate-500">Pontianak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Hubungi <span className="text-orange-600">Kami</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Siap untuk memulai proyek Anda? Tim profesional kami siap membantu mewujudkan visi konstruksi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Alamat</h4>
                    <p className="text-slate-600">
                      JL. KESEHATAN NO. 123, Desa/Kelurahan Parittokaya<br />
                      Kec. Pontianak Selatan, Kota Pontianak<br />
                      Provinsi Kalimantan Barat, 78121
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Telepon</h4>
                    <p className="text-slate-600">0823-1204-2895</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@ptpergojayagemilang.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                <h4 className="font-semibold text-slate-900 mb-3">Jam Operasional</h4>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Senin - Jumat:</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu:</span>
                    <span className="font-semibold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu:</span>
                    <span className="font-semibold">Tutup</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subjek</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="PT PERGO JAYA GEMILANG" className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">PT PERGO JAYA GEMILANG</h3>
                  <p className="text-slate-400 text-sm">Construction & Oil Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Perusahaan profesional yang bergerak di bidang konstruksi bangunan dan industri minyak dengan komitmen terhadap kualitas dan keselamatan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Konstruksi Bangunan</li>
                <li>Industri Minyak</li>
                <li>Manajemen Proyek</li>
                <li>Maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
                <li>Tentang Kami</li>
                <li>Kontak</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PT PERGO JAYA GEMILANG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}