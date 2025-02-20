<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $posts = Post::first()->paginate(10); // Menampilkan 10 post per halaman

        return Inertia::render('Post/Post', [
            'posts' => $posts, // Kirim data ke frontend
        ]);
    }

    public function publicPosts()
    {
        $posts = Post::query()->paginate(5);

        return Inertia::render('Home', [
            'posts' => $posts, 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Post/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $request->validate([
            'body' => 'required|min:3', 
        ]);

        Post::create([
            'body' => $request->body,
            'user_id' => auth()->id(), 
        ]);

        return redirect()->route('post.index')->with('success', 'Post created successfully!');
    }
    


    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Post/Update', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        
        $request->validate([
            'body' => 'required|min:3', // Validasi minimal 3 karakter
        ]);
    
        $post->update($request->all());

        return redirect()->route('post.index')->with('success', 'Post updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {   
        $this->authorize('delete', $post); 

        $post->delete();

        return redirect()->route('post.index')->with('success', 'Post deleted successfully!');
    }
}
