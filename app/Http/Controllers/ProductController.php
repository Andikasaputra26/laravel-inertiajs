<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::get()->toArray();
        return Inertia::render('product/Product', [
            'products' => $product
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'img' => 'required | image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category_id' => 'required',
            'price' => 'required',
            'stock' => 'required',
        ]);

        Product::create([
            'name' => $request->nama,
            'img' => $request->img,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'stock' => $request->stock,
        ]);

        return redirect()->route('product.index')->with('success', 'Product created successfully!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::find($id);
        return Inertia::render('product/Edit', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

       $product = Product::find($id);
       $product->update($request->all());

        return redirect()->route('product.index')->with('success', 'Product updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        $product->delete();

        return redirect()->route('product.index')->with('success', 'Product deleted successfully!');
    }
}
