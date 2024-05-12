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
use think\Route; //引入Route
Route::rule('thinkphp5628og/option/:tableName/:columnName','index/api/option?tableName=:tableName&columnName=:columnName');
Route::rule('thinkphp5628og/follow/:tableName/:columnName','index/api/follow?tableName=:tableName&columnName=:columnName');
Route::rule('thinkphp5628og/group/:tableName/:columnName','index/api/group?tableName=:tableName&columnName=:columnName');
Route::rule('thinkphp5628og/cal/:tableName/:columnName','index/api/cal?tableName=:tableName&columnName=:columnName');
Route::rule('thinkphp5628og/value/:tableName/:xColumnName/:yColumnName','index/api/value?tableName=:tableName&xColumnName=:xColumnName&yColumnName=:yColumnName');
Route::rule('thinkphp5628og/spider/:tableName','index/api/spider?tableName=:tableName');
Route::rule('thinkphp5628og/remind/:tableName/:columnName/:type','index/api/remind?tableName=:tableName&columnName=:columnName&type=:type');
Route::rule('thinkphp5628og/sh/:tableName','index/api/sh?tableName=:tableName');
Route::rule('thinkphp5628og/matchFace','index/api/matchFace');
Route::rule('thinkphp5628og/location','index/api/location');
Route::rule('thinkphp5628og/forum/list/:id','index/forum/lists?id=:id');
Route::rule('thinkphp5628og/:tablename/remind/:columnName/:type','index/:tablename/remind?columnName=:columnName&type=:type');
Route::rule('thinkphp5628og/:tablename/value/:xColumnName/:yColumnName/[:timeStatType]','index/:tablename/value?xColumnName=:xColumnName&yColumnName=:yColumnName&timeStatType=:timeStatType');
Route::rule('thinkphp5628og/:tablename/info/:id','index/:tablename/info?id=:id');
Route::rule('thinkphp5628og/:tablename/detail/:id','index/:tablename/detail?id=:id');
Route::rule('thinkphp5628og/:tablename/vote/:id','index/:tablename/vote?id=:id');
Route::rule('thinkphp5628og/:tablename/thumbsup/:id','index/:tablename/thumbsup?id=:id');
Route::rule('thinkphp5628og/:tablename/group/:columnName','index/:tablename/group?columnName=:columnName');
Route::rule('thinkphp5628og/:tablename/list','index/:tablename/lists');
Route::rule('thinkphp5628og/:tablename/:name','index/:tablename/:name');
Route::rule('thinkphp5628og/file/upload','index/api/upload');
Route::rule('thinkphp5628og/file/download','index/api/download');






































return [
    '__pattern__' => [
        'name' => '\w+',
    ],
    '[hello]'     => [
        ':id'   => ['index/hello', ['method' => 'get'], ['id' => '\d+']],
        ':name' => ['index/hello', ['method' => 'post']],
    ],

];
