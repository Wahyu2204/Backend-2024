<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    //
    public function index()
    {

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

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'nim' => 'numeric|required',
            'email' => '$email|required',
            'jurusan' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'messege' => 'Validation errors',
                'error' => $validator->errors()
            ], 422);
        }

        $student = Student::create($request->all());

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student,
        ];

        return response()->json($data, 201);

        // if ($student) {
        //     $data = [
        //         'message' => 'Student is created successfully',
        //         'data' => $student,
        //     ];

        //     return response()->json($data, 201);
        // } else {
        //     return response()->json(['message' => 'Failed to create student'], 500);
        // }

    }

    public function update(Request $request, $id)
    {

        $student = Student::find($id);

        if ($student) {

            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
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

    public function destroy($id)
    {

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

    public function show($id)
    {

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