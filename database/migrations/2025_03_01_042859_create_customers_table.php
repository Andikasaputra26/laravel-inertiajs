<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique(); // Hindari email duplikat
            $table->string('password'); // Pastikan password di-hash saat penyimpanan
            $table->string('phone')->unique(); // Pastikan nomor HP unik
            $table->string('address')->nullable(); // Bisa dikosongkan
            $table->string('city')->nullable(); // Bisa dikosongkan
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
