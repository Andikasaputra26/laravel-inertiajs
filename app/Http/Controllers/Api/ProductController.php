<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index()
    {
        // Ambil semua produk beserta kategori
        $products = Product::with('category')->get();

        return response()->json([
            'success' => true,
            'message' => 'Daftar Produk',
            'data' => $products
        ], 200);
    }

    public function show($id)
    {
        // Cari produk berdasarkan ID
        $product = Product::with('category')->find($id);

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Produk tidak ditemukan',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Detail Produk',
            'data' => $product
        ], 200);
    }
}
