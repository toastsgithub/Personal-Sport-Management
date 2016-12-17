<?php
/**
 * Created by PhpStorm.
 * User: duanzhengmou
 * Date: 11/30/16
 * Time: 7:00 PM
 */

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder{

    public function run(){
        $gender = random_int(0,1) ? 'Male' : 'Female';
        DB::table('user')
            ->insert([
                'user_name'=>'someone_' . str_random(5),
                'user_password'=>123,
                'self_intro'=>str_random(random_int(1,5)) .' '. str_random(random_int(1,5)) .' '. str_random(random_int(1,5)),
                'nickname'=>str_random(random_int(3,10)),
                'user_type'=>0,
                'gender'=>$gender,
                'age'=>random_int(18,25),
                'city'=>'NanJing'
            ]);
//        $this->command->info(factory(\App\User::make()));
    }
}