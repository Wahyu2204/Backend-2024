<?php
class Person{
  public $nama;
  public $alamat;
  public $jurusan;

  public function __construct($nama, $alamat, $jurusan) {
    $this->nama = $nama;
    $this->alamat = $alamat;
    $this->jurusan = $jurusan;
  
  }

  public function cetak(){
    echo "<br>Nama: ". $this->nama;
    echo "<br>Alamat: ". $this->alamat;
    echo "<br>Jurusan: ". $this->jurusan;
  }
}

// $edo = new Person ('Edo Riansyah', 'Depok', 'Teknik Informatika');
// $ahmad = new Person ('Ahmad Fakhri', 'Bandung', 'Sistem Informasi');

// $edo->cetak();