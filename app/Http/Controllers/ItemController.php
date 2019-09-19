<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use App\Http\Resources\ItemsResource;
use Illuminate\Support\Facades\Storage;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ItemsResource::collection(Item::latest()->get());

    }



    public function store(Request $request)
    {
        // dd($request->all());
        $data = $request->all();
        $image_path=Storage::disk('storge-item')->put('image-item', $request->image);
        $data['image']=$image_path;
        $item= Item::create($data);
    }


    public function show(Item $item)
    {
        //
    }



    public function update(Request $request, Item $item)
    {
        //
    }


    public function destroy(Item $item)
    {
        //
    }
}
