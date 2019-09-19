<?php

use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { // 10000 tayt3tal bach gener
        factory(App\Item::class,100)->create();
    }
}
