<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     protected $product;
     protected $category;

    public function __construct(Product $product, CategoryProduct $category)
    {
        $this->product = $product;
        $this->category = $category;

    }

    public function index()
    {
        $products = $this->product->with('category')->get();
        return Inertia::render('product/Product', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = $this->category->get()->toArray();

        return Inertia::render('product/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_id' => 'required|exists:category_product,id',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);
    
        if ($request->hasFile('img')) {
            $file = $request->file('img');
            $filename = time() . '_' . $file->getClientOriginalName(); // Nama unik
            $file->move(public_path('imgproduct'), $filename); // Simpan di public/imgproduct
    
            $validated['img'] = 'imgproduct/' . $filename; // Simpan path untuk akses di frontend
        }
    
        Product::create($validated);
    
        return redirect()->route('product.index')->with('success', 'Produk berhasil ditambahkan!');
    }
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = $this->product->with('category')->findOrFail($id);
        $categories = $this->category->get();

        return Inertia::render('product/Edit', [
            'product' => $product,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = $this->product->findOrFail($id);

        $validated = $request->validate([
            'name' => 'string|max:255',
            'img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_id' => 'exists:category_products,id',
            'price' => 'numeric|min:0',
            'stock' => 'integer|min:0',
        ]);

        // Jika ada file gambar baru yang diunggah
        if ($request->hasFile('img')) {
            // Hapus gambar lama jika ada
            if ($product->img) {
                Storage::disk('public')->delete($product->img);
            }

            // Simpan gambar baru
            $path = $request->file('img')->store('imgproduct', 'public');
            $validated['img'] = $path;
        } else {
            // Jangan ubah img jika tidak ada gambar baru
            unset($validated['img']);
        }

        // Update produk dengan data yang sudah divalidasi
        $product->update($validated);

        return redirect()->route('product.index')->with('success', 'Produk berhasil diperbarui!');
    }

    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = $this->product->findOrFail($id);

        // Hapus gambar jika ada
        if ($product->img) {
            Storage::disk('public/imgproduct')->delete($product->img);
        }

        $product->delete();

        return redirect()->route('product.index')->with('success', 'Produk berhasil dihapus!');
    }
}