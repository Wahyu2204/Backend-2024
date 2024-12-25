// TODO 3: Import data students dari folder data/students.js
// code here
import students from "../data/students.js";

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    // code here
    res.json(students);
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    // code here

    const { name } = req.body; // Ambil data nama dari request body

    // Validasi input
    if (!name) {
        return res.status(400).json({ message: 'Nama siswa harus diisi' });
    }

    // Menambahkan nama siswa baru ke array
    students.push(name);

    // Kirimkan data yang sudah diperbarui
    res.status(201).json({
        message: 'Data siswa berhasil ditambahkan',
        students: students // Menampilkan array students yang sudah terupdate
    });
  }

  update(req, res) {
    // TODO 6: Update data students
    // code here

    const { id } = req.params; // ID yang akan di-update
    const { name } = req.body; // Nama baru yang akan menggantikan nama lama

    // Validasi input
    if (!name) {
        return res.status(400).json({ message: 'Nama siswa harus diisi' });
    }

    // Cari siswa berdasarkan ID
    const studentIndex = parseInt(id) - 1; // ID diubah menjadi indeks array (ID 1 = indeks 0, ID 2 = indeks 1, dll)

    // Pastikan indeks valid
    if (studentIndex < 0 || studentIndex >= students.length) {
        return res.status(404).json({ message: 'Siswa tidak ditemukan' });
    }

    // Update nama siswa
    students[studentIndex] = name;

    // Kirimkan respons setelah update
    res.json({
        message: 'Data siswa berhasil diupdate',
        students: students // Menampilkan array students yang sudah terupdate
    });
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    // code here

    const { id } = req.params; // ID yang akan dihapus

    // Cari siswa berdasarkan ID
    const studentIndex = parseInt(id) - 1; // ID diubah menjadi indeks array (ID 1 = indeks 0, ID 2 = indeks 1, dll)

    // Pastikan indeks valid
    if (studentIndex < 0 || studentIndex >= students.length) {
        return res.status(404).json({ message: 'Siswa tidak ditemukan' });
    }

    // Hapus siswa dari array
    const deletedStudent = students.splice(studentIndex, 1);

    // Kirimkan respons setelah delete
    res.json({
        message: 'Data siswa berhasil dihapus',
        deletedStudent: deletedStudent[0], // Menampilkan siswa yang dihapus
        students: students // Menampilkan array students yang sudah terupdate
    });
  }
}

export default new StudentController();