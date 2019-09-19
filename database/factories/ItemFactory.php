<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Item;
use Faker\Generator as Faker;

$factory->define(Item::class, function (Faker $faker) {
    return [ //title, image and description.
        'title' => $faker->sentence(2),
        'description'  => $faker->sentence(7),
        'image' => $faker->image('public/storage',640,480, null, false),
    ];
});
