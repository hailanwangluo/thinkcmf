<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

Route::get('think', function () {
    return 'hello,ThinkPHP5!';
});

Route::get('hello/:name', 'index/hello');

return [
    'home'=>'home/index/index',
    'about/:catId'=>'home/about/index',
    'download/:catId'=>'home/download/index',
    'services/:catId'=>'home/services/index',
    'servicesInfo/:catId/[:id]'=>'home/services/info',
    'system/:catId'=>'home/system/index',
    'product/:catId'=>'home/product/index',
    'productInfo/:catId/[:id]'=>'home/product/info',
    'news/:catId'=>'home/news/index',
    'newsInfo/:catId/[:id]'=>'home/news/info',
    'team/:catId'=>'home/team/index',
    'contact/:catId'=>'home/contact/index',
];
