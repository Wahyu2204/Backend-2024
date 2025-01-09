// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    try {
      // memanggil method static all dengan async await.
      const students = await Student.all();

      const data = {
        message: "Menampilkan semua students",
        data: students,
      };

      res.json(data);
    } catch (err) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data students",
        error: err.message,
      });
    }
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    try {
      const { nama, nim, jurusan, email } = req.body;
  
      if (!nama || nama.trim() === "") {
        return res.status(400).json({
          message: "Kolom 'nama' wajib diisi",
        });
      }
  
      const student = await Student.create({ nama, nim, jurusan, email });
  
      res.json({
        message: "Menambahkan student berhasil",
        data: student, // Data mahasiswa yang baru ditambahkan
      });
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      res.status(500).json({
        message: "Terjadi kesalahan saat menambahkan student",
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params; // Mendapatkan ID dari parameter
      const { nama, nim, jurusan, email } = req.body; // Data baru dari request body
  
      // Panggil method untuk memperbarui data
      const updatedStudent = await Student.update(id, { nama, nim, jurusan, email });
  
      if (updatedStudent) {
        res.json({
          message: `Student dengan id ${id} berhasil diperbarui`,
          data: updatedStudent,
        });
      } else {
        res.status(404).json({
          message: `Student dengan id ${id} tidak ditemukan`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat memperbarui student",
        error: error.message,
      });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params; // Ambil ID dari parameter URL
      const deletedStudent = await Student.delete(id); // Panggil metode delete
  
      if (deletedStudent) {
        res.json({
          message: `Student dengan id ${id} berhasil dihapus`,
        });
      } else {
        res.status(404).json({
          message: `Student dengan id ${id} tidak ditemukan`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat menghapus student",
        error: error.message,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params; // Mendapatkan ID dari parameter URL
      
      // Panggil method untuk mencari data student berdasarkan ID
      const student = await Student.findById(id);
      
      if (student) {
        res.json({
          message: `Menampilkan student dengan id ${id}`,
          data: student,
        });
      } else {
        res.status(404).json({
          message: `Student dengan id ${id} tidak ditemukan`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data student",
        error: error.message,
      });
    }
  }
  
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
