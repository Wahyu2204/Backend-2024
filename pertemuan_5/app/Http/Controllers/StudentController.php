<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index () {
        
        $student = Student::all();

        if ($student) {
            $data = [
                'message' => 'Get all students',
                'data' => $student
            ];

            return response()->json($data, 200);
        } else {
            return response()->json(['message' => 'No students found'], 404);
        }
    }
    
    public function store (Request $request) {
        
        $input = [
            'nama' => $request->nama,
            'nim'=> $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        if ($student) {
            $data = [
                'message' => 'Student is created successfully',
                'data' => $student,
            ];

            return response()->json($data, 201);
        } else {
            return response()->json(['message' => 'Failed to create student'], 500);
        }
    }

    public function update (Request $request, $id) {
        
        $student = Student::find($id);
        
        if ($student) {
            
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim'=> $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ];

            $student->update($input);

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
            
            $data = [
                'messege' => 'Student not found'
            ];

            return response()->json($data, 404);
        }
    }

    public function show ($id) {
        
        $student = Student::find($id);

        if ($student) {
            
            $data = [
               'messege' => 'Get detail student',
                'data' => $student,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'messege' => 'Student not found',
            ];

            return response()->json($data, 404);
        }
    }
}