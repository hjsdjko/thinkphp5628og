<?php
namespace app\index\controller;

use http\Params;
use think\Cache;
use think\Controller;
use think\Db;
use think\Request;
use think\Session;

class YuangongController extends CommonController
{
	public function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header('Access-Control-Allow-Headers:Origin,Content-Type,Accept,token,X-Requested-With,device');
    }
	public $columData = [
        'id','addtime'
                ,'yuangonggonghao'
                ,'mima'
                ,'yuangongxingming'
                ,'xingbie'
                ,'touxiang'
                ,'bumen'
                ,'zhiwei'
                ,'shouji'
                ,'shenfenzheng'
            ];
    																			    /**
     * 登录接口
     * POST
     * */
    public function login(){
        $name = trim(input('param.username'));
        $password = trim(input('param.password'));
        $password = md5($password);
                        $result = Db::table('yuangong')->where(['yuangonggonghao' => $name, 'mima' => $password])->find();
                                                                                                                                                                        if ($result){
            $uName = "yuangonggonghao";
            $token_array = [
                "iat" => time(), //签发时间
                "exp" => time()+7200, //token 过期时间
				'id' => $result['id'],
                'tablename'=> 'yuangong',//表名
                'columData' => $this->columData,
								'isAdmin' => 0,
				                "success" => $result, //记录的uid的信息，如果有其它信息，可以再添加数组的键值对
                "loginUserColumn" => "yuangonggonghao",
                "uName" => $result[$uName]
            ];
            $tokens = base64_encode(json_encode($token_array));
            $data = ['code' => 0, 'token' => $tokens];
            Cache::set($tokens,$result['id']);
                        			$columnNames = "yuangonggonghao";
            Cache::set(md5($result['id']."+10086"),$result[$columnNames]);
                                                                                                                                                                                                                                    return json($data);
        }
        return json(['code' => 500,'msg'=>"登录失败，账号或密码错误。"]);
    }
    /**
     * 退出
     * POST
     */
    public function logout(){
        $token = $this->token();
        Cache::pull($token);
        return json(['code'=>0,'msg'=>'退出成功']);
    }
    /**
     * 获取session的接口
     * GET
     */
    public function session(){
        if (Cache::get($this->token())==false) return json(["code"=> 500,'msg'=>"您还没有登录。"]);
        $data = json_decode(base64_decode($this->token()),true);
		$dbname = $data['tablename'];
		$uid = $data['id'];
		$arrayData = Db::table($dbname)->where(['id' => $uid])->find();
        return json(['code'=>0,'data'=>$arrayData]);
    }
    /**
     * 注册 post
     **/
    public function register(){
        $postData = input('param.');
        if (!empty($postData)&&!is_array($postData)){
             $postData = json_decode($postData,true);
        }
		$v = array();
        foreach ($postData as $key => $value){
            if (in_array($key, $this->columData)){
                if (!empty($value) || $value === 0){
                    $v[$key] = $value;
                }
            }
        }
		$postData = $v;
                $postData['mima'] = md5($postData['mima']);
                                			$columnNames = "yuangonggonghao";
        $count = DB::table('yuangong')->where(['yuangonggonghao'=>$postData[$columnNames]])->count();
                                                                                                                                                		        if($count>0) return json(['code'=>500,'msg'=>'用户名已存在']);
                $postData['id'] = time();
        $result = Db::table('yuangong')->insert($postData);
                if (!$result) return json(['code'=>500,'msg'=>'注册失败']);
        return json(['code'=>0]);
    }
    /**
     * 找回密码 重置为123456
     **/
    public function resetPass(){
        $pwd = '123456';
        $pwd = md5($pwd);
        $username = input('param.username');
                        $count = DB::table('yuangong')->where(['yuangonggonghao'=>$username])->count();
        if($count==0) return json(['code'=>500,'mas'=>"账号不存在"]);
        $result = Db::table('yuangong')->where(['yuangonggonghao'=>$username])->update(['mima'=>$pwd]);
                                                                                                                                                        		        return json(['code'=>0,'mas'=>"密码已重置为：123456"]);
    }
    
    /**
     * 分页接口 GET
     * $page   当前页
     * 否  每页记录的长度
     * $sort   排序字段
     * $order  升序（默认asc）或者降序（desc）
     * */
    public function page(){
        $token = $this->token();
        if (Cache::get($token) == false) return json(['code'=>500,'msg'=>"您还没有登录。"]);
        $userid = Cache::get($token);
        $base = json_decode(base64_decode($token,true),true);
        $tabnames = $base['tablename'];
        $getData = input('get.');
        $where = array();
        $betweenColumn = '';
        $start = array();
        $end = array();
        foreach ($getData as $k => $val){
			if(in_array($k, $this->columData)){
                if ($val != ''){
                    $where[$k] = ['like',$val];
                }
			}
            if(in_array(substr($k, 0, strlen($k) - 5), $this->columData)){
                if ($val != ''){
                    $betweenColumn = substr($k, 0, strlen($k) - 5);
                    $start = ['egt', $val];
                }
			} else if(in_array(substr($k, 0, strlen($k) - 3), $this->columData)){
                if ($val != ''){
                    $betweenColumn = substr($k, 0, strlen($k) - 3);
                    $end = ['elt', $val];
                }
			}
        }
        if (!empty($start) && !empty($end)) {
            $where[$betweenColumn] = array($start, $end);
        }
        $page = isset($_GET['page'])?input('get.page'):"1";
        $limt = isset($_GET['limit'])?input('get.limit'):"10";
        $sort = isset($_GET['sort'])?input('get.sort'):"id";
        $order = isset($_GET['order'])?input('get.order'):"asc";
                                $data = json_decode(base64_decode($token),true);
        if ($data['isAdmin']!=1 || ($data['isAdmin']==1 && $data['tablename'] != 'users')){
            //$colum = "yuangonggonghao";
            $colum = $base["loginUserColumn"];
            $columData1 = $data['columData'] ?? [];
            if (in_array($colum, $columData1) && in_array($colum, $this->columData)){
                $where[$colum] = Cache::get(md5($userid."+10086"));//判断条件
            }
        }
                                                                                                                                                        		                                        
        $orwhere = [];
        
        $count = Db::table('yuangong')->where($where)->where(function($query) use ($orwhere) {
            $query->whereOr($orwhere);
        })->count();
        // 取整函数(ceil,floor,round)
        $page_count = ceil($count/$limt);//页数

                $result = Db::table('yuangong')->where($where)->where(function($query) use ($orwhere) {
            $query->whereOr($orwhere);
        })->limit(($page-1)*$limt,$limt)->order($sort." ".$order)->select();
        
        return json([
            'code' => 0,
            'data' => [
                "total" => $count,
                "pageSize" => $limt,
                "totalPage" => $page_count,
                "currPage" => $page,
                "list" => $result
            ]
        ]);
    }
    /**
     * 分页接口 GET
     * $page   当前页
     * 否  每页记录的长度
     * $sort   排序字段
     * $order  升序（默认asc）或者降序（desc）
     * */
    public function lists(){
        $where = array();//判断条件
                        $getData = input('get.');
        foreach ($getData as $k => $val){
            if(in_array($k, $this->columData)){
                $where[$k] = ['like',$val];
            }
        }
                        $token = $this->token();
        $data = json_decode(base64_decode($token),true);
        if ($data['isAdmin']!=1){
            $colum = "yuangonggonghao";
            $columData = $data['columData'] ?? [];
            if (in_array($colum, $columData)){
                $where = [$colum => Cache::get(md5($userid."+10086"))];//判断条件
            }
        }
                                                                                                                                                        		        $page = isset($_GET['page'])?input('get.page'):"1";
        $limt = isset($_GET['limit'])?input('get.limit'):"10";
        $sort = isset($_GET['sort'])?input('get.sort'):"id";
        $order = isset($_GET['order'])?input('get.order'):"asc";

                                		        $orwhere = [];
                $count = Db::table('yuangong')->where($where)->where(function($query) use ($orwhere) {
            $query->whereOr($orwhere);
        })->count();
        // 取整函数(ceil,floor,round)
        $page_count = ceil($count/$limt);//页数
        $result = Db::table('yuangong')->where($where)->where(function($query) use ($orwhere) {
            $query->whereOr($orwhere);
        })->limit(($page-1)*$limt,$limt)->order($sort." ".$order)->select();
        return json([
            'code' => 0,
            'data' => [
                "total" => $count,
                "pageSize" => $limt,
                "totalPage" => $page_count,
                "currPage" => $page,
                "list" => $result
            ]
        ]);
            }
    
        /**
     * 保存接口 post
     *
     */
    public function save(){
        $token = $this->token();
        $session = Cache::get($token);
        if ($session == false) return json(['code'=>401,'msg'=>"您还没有登录。"]);
                $postData = input('post.');
        if (!empty($postData)&&!is_array($postData)){
             $postData = json_decode($postData,true);
        }
                        		$v = array();
        foreach ($postData as $key => $value){
            if (in_array($key, $this->columData)){
                if (!empty($value) || $value == 0){ 
                    if($key == 'clicktime') {
                        $v[$key] = date('Y-m-d h:i:s', time());
                    } else {
                        if (!empty($value) || $value == 0){
                            $v[$key] = $value;
                        }
                    }
                }
            }
        }
		$postData = $v;
                $postData['id'] = time();
                        if(strlen($postData['mima']) != 32) {
            $postData['mima'] = md5($postData['mima']);
        }
                $result = Db::table('yuangong')->insert($postData);
                return json(['code'=>0]);
    }
    /**
     * 保存接口 post
     *
     */
    public function add(){
		                        $postData = input('post.');
        if (!empty($postData)&&!is_array($postData)){
             $postData = json_decode($postData,true);
        }
                		$v = array();
        foreach ($postData as $key => $value){
            if (in_array($key, $this->columData)){
                if (!empty($value) || $value == 0){
                    $v[$key] = $value;
                }
            }
        }
		$postData = $v;
                $postData['mima'] = md5($postData['mima']);
        
        
        $result = Db::table('yuangong')->insert($postData);
        return json(['code'=>0]);
    }
    /**
     * 更新接口 post
     * 包含主键
     */
    public function update(){
        $postData = input('post.');
        $token = $this->token();
                if (Cache::get($token)==false) return json(['code'=>500,'msg'=>"您还没有登录。"]);
                $where = array();
                $v = array();
        foreach ($postData as $key => $value){
            if (in_array($key, $this->columData)){
                if ($value === '') {
                    $v[$key] = null;
                    continue;
                }
                if ($key == "id"){
                    $where[$key] = $value;
                }
                $v[$key] = $value;
            }
        }

                if(strlen($v['mima']) != 32) {
            $v['mima'] = md5($v['mima']);
        }
        
        Db::table('yuangong')->where($where)->update($v);
                return json(['code'=>0]);
    }
    /**
     * 删除接口 post
     * $id id
     */
    public function delete(){
        $ids = input('post.');
        $result = Db::table('yuangong')->delete($ids);
        return json(["code"=> 0]);
    }
    /**
     * 详情接口info ,后台接口
     * get
     * $id id
     * */
    public function info($id=false,$name=false){
        $token = $this->token();
        if (Cache::get($token)==false) return json(["code"=> 500,'msg'=>"您还没有登录。"]);
        $where = ['id'=>$id];
                        if($name!=false){
            $where = ['name'=>$name];
        }
        $result = Db::table('yuangong')->where($where)->find();
        return json(["code"=> 0,'data' => $result]);
    }
    /**
     * 详情接口detail ,后台接口
     * get
     * $id id
     * */
    public function detail($id=false,$name=false){
                $where = ['id'=>$id];
                        if($name!=false){
            $where = ['name'=>$name];
        }
        $result = Db::table('yuangong')->where($where)->find();
        return json(["code"=> 0,'data' => $result]);
    }
                
    
    
    /**
     * 获取需要提醒的记录数接口
     * $columnName  列名
     * $type  类型（1表示数字比较提醒，2表示日期比较提醒）
     * $remindStart  remindStart<=columnName 满足条件提醒,当比较日期时，该值表示天数
     * $remindEnd  columnName<=remindEnd 满足条件提醒,当比较日期时，该值表示天数
     **/
    public function remind($columnName,$type,$remindstart = false,$remindend = false){
        if ($type==1){
            $remindstart ? ($map[$columnName] = ['>=', $remindstart]) : '';
            $remindend ? ($map[$columnName] = ['<=', $remindend]) :'';
            $result = Db::table('yuangong')->where($map)->count();
        }else{
            $remindstart ? ($map[$columnName] = ['>=', date("Y-m-d",strtotime("+".$remindstart." day"))]) :'';
            $remindend ? ($map[$columnName] = ['<=', date("Y-m-d",strtotime("+".$remindend." day"))]) : '';
            $result = Db::table('yuangong')->where($map)->count();
        }
        return json(['code'=>0,'count'=>$result]);
    }

    /**
     * 统计接口
     * xColumnName String  列名
     * yColumnName String  列名
     * 无 String 日期类型
     **/
    public function value($xColumnName,$yColumnName,$timeStatType){
        $where = " where 1 = 1 ";
        if(empty($timeStatType)) {
            $data = Db::query("select ".$xColumnName.", sum(".$yColumnName.") total from yuangong group by ".$xColumnName);
            foreach($data as $k => &$v) {
                $v['total'] = intval($v['total']);
            }
        } else {
            $sql = "";
            if ("yuangong" == "orders") {
                $where .= " and status in ('已支付', '已发货', '已完成') ";
            }
            if ($timeStatType == '日') {
                $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y-%m-%d') ".$xColumnName.", sum(".$yColumnName.") total FROM yuangong ".$where." GROUP BY DATE_FORMAT(".$xColumnName.", '%Y-%m-%d')";
            }
            if ($timeStatType == '月') {
                $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y-%m') ".$xColumnName.", sum(".$yColumnName.") total FROM yuangong ".$where." GROUP BY DATE_FORMAT(".$xColumnName.", '%Y-%m')";
            }
            if ($timeStatType == '年') {
                $sql = "SELECT DATE_FORMAT(".$xColumnName.", '%Y') ".$xColumnName.", sum(".$yColumnName.") total FROM yuangong ".$where." GROUP BY DATE_FORMAT(".$xColumnName.", '%Y')";
            }
            $data = Db::query($sql);
            foreach($data as $k => &$v) {
                $v['total'] = intval($v['total']);
            }
        }
        
        return json(['code'=>0,'data'=>$data]);
    }

    
    
    
    public function group($columnName) {
        $list = Db::table('yuangong')->field($columnName.',count('.$columnName.') as total')->group($columnName)->order('total desc')->select();
        return json(['code'=>0,'data'=>$list]);
    }



}
