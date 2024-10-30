<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index () {
        
        $student = Student::all();

        $data = [
            'messege' => 'Get all students',
            'data' => $student
        ];

        return response()->json($data, 200);
    }
    
    public function store (Request $request) {
        $input = [
            'nama' => $request->nama,
            'nim'=> $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $data = [
            'messege' => 'Student is created successfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }

    public function update (Request $request, $id) {
        
        $student = Student::find($id);
        
        if ($student) {
            
            $student->update = ([
                'nama' => $request->nama ?? $student->nama,
                'nim'=> $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ]);

            $data = [
               'messege' => 'Student is updated successfully',
                'data' => $student,
            ];

            return response()->json($data, 200);
        } else {
            
            return response()->json(['message' => 'Student is not updated successfully', 404]);
        }
    }

    public function destroy ($id) {
        
        $student = Student::find($id);
        
        if ($student) {
            
            $student->delete();

            $data = [
               'messege' => 'Student is deleted successfully',
            ];

            return response()->json($data, 200);
        } else {
            
            return response()->json(['message' => 'Student is not deleted successfully', 404]);
        }
    }
}