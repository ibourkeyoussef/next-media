<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    { //title, image and description.
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'desc'=>$this->description,
            'image'=>$this->image,
            'date'=>$this->created_at->diffForHumans()
    ];
    }
}
