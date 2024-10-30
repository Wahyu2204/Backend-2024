<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Codec\TimestampLastCombCodec;

class Student extends Model
{
    //
    protected $table ='students';
    protected $fillable = ['nama', 'nim', 'email', 'jurusan'];
    public $timestamps = false; 
}