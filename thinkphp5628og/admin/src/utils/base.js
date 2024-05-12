const base = {
    get() {
        return {
            url : "http://localhost:8080/thinkphp5628og/",
            name: "thinkphp5628og",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/thinkphp5628og/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的企业内部员工管理系统设计与实现"
        } 
    }
}
export default base
