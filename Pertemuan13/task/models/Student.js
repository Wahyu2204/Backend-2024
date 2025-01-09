// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        if (err) {
          reject(err); // Menangani error jika query gagal
        } else {
          resolve(results); // Mengembalikan hasil query
        }
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    return new Promise((resolve, reject) => {
      const { nama, nim, jurusan, email } = data;

      // Query untuk menambahkan data ke database
      const query = `INSERT INTO students (nama, nim, jurusan, email) VALUES (?, ?, ?, ?)`;

      db.query(
        query,
        [nama, nim, jurusan, email],
        (err, result) => {
          if (err) {
            return reject(err);
          }

          // Ambil data mahasiswa yang baru saja dimasukkan berdasarkan `insertId`
          const selectQuery = `SELECT * FROM students WHERE id = ?`;
          db.query(selectQuery, [result.insertId], (selectErr, rows) => {
            if (selectErr) {
              return reject(selectErr);
            }

            // Kembalikan data mahasiswa yang baru ditambahkan
            resolve(rows[0]);
          });
        }
      );
    });
  }


  // Metode untuk menghapus student berdasarkan ID
  static async delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM students WHERE id = ?`;

      db.query(query, [id], (err, result) => {
        if (err) {
          return reject(err);
        }

        // Jika berhasil dihapus, affectedRows > 0
        if (result.affectedRows > 0) {
          resolve(true); // Berhasil menghapus
        } else {
          resolve(false); // Data tidak ditemukan
        }
      });
    });
  }

  // Metode untuk menemukan student berdasarkan ID
  static async findById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM students WHERE id = ?`;
      db.query(query, [id], (err, result) => {
        if (err) {
          return reject(err);
        }

        // Jika ditemukan, kembalikan data student pertama
        if (result.length > 0) {
          resolve(result[0]);
        } else {
          resolve(null); // Tidak ditemukan
        }
      });
    });
  }
}

// export class Student
module.exports = Student;
