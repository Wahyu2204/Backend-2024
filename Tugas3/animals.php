<?php

class Animals {
  public $animals;

  public function __construct() {
    $this->animals = array("Hiu");
  }

  public function index() {
    foreach($this->animals as $hewan){
      echo $hewan . "<br/>";
    }
  }

  public function store ($newAnimal) {
    array_push($this->animals, $newAnimal);
    echo "$newAnimal sudah ditambahkan";
  }

  public function update($index, $updateAnimal) {
    if (isset($this->animals[$index])) {
      $this->animals[$index] = $updateAnimal;
      echo "Data animal ke-{$index} berhasil diubah";
    } else {
      echo "Data animal ke-{$index} tidak ditemukan";
    }
  }

  public function destroy($index) {
    if (isset($this->animals[$index])) {
      array_splice($this->animals,$index,1);
      echo "Data animal ke-{$index} berhasil dihapus";
    } else {
      echo "Data animal ke-{$index} tidak ditemukan";
    }
  }
  
}

?>