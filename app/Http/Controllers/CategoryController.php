<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    protected $category;

    public function __construct(CategoryProduct $category)
    {
        $this->category = $category;
    }

    public function index()
    {
        $category = $this->category->get()->toArray();
        return Inertia::render('Category/Category', [
            'category' => $category
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Category/CreateEditCategory');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name_category' => 'required',
        ]);

        $this->category->create([
            'name_category' => $request->name_category,
        ]);

        return redirect()->route('category.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = $this->category->findOrFail($id);
    
        return Inertia::render('Category/CreateEditCategory', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name_category' => 'required',
        ]);

        $this->category->find($id)->update([
            'name_category' => $request->name_category,
        ]);

        return redirect()->route('category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->category->find($id)->delete();
        return redirect()->route('category.index');
    }
}
