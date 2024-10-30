<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class AnimalsController extends Controller
{
    protected $animals = ['Hiu','Kucing'];

    public function index()
    {
        foreach ($this->animals as $hewan) {
            echo $hewan . ',';
        }
    }

    public function store(Request $request)
    {
        $newAnimal = $request->hewan;
        array_push($this->animals, $newAnimal);

        echo "$newAnimal sudah ditambahkan. Hewan saat ini: " . implode(", ", $this->animals);
    }

    public function update(Request $request, $id)
    {
        $updatedAnimal = $request->hewan;

        if (isset($this->animals[$id])) {
            $this->animals[$id] = $updatedAnimal;
            echo "Hewan pada index $id telah diperbarui menjadi " . implode(", ", $this->animals);
        } else {
            echo "Hewan $id tidak ditemukan.";
        }
    }

    public function destroy($id)
    {
        if (isset($this->animals[$id])) {
            array_splice($this->animals,$id,1);
            echo "Hewan ke $id berhasil dihapus </br>" . implode(", ", $this->animals);
          } else {
            echo "Hewan ke $id tidak ditemukan";
          }
    }
}