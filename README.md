# 预约管理系统
本项目基于Vue3+ElementPlus开发前台，基于express+mySql开发后台的预约管理系统，具有账号注册、验证码登录（提供模拟验证码与阿里云验证码接口）、jwt验证、信息修改等功能，所有数据储存于本地数据库中，请确保在运行环境内进行mySql配置。

# 说明  
1、数据库配置文件位于server/util.dbconfig.js，接口文件位于server/routes文件夹中，路由回调函数位于server/controllers文件夹中；
2、分别提供了模拟发送验证码（服务端控制台显示）和阿里云发送验证码（手机接收，需要申请服务密钥）接口；  
3、开发环境为nodeJs v16.13.12；  

# 技术栈
vue3 + vuex + vue-router + elementPlus + nodeJs + mySql(navcat)

## 登录界面
![Uploading image.png…]()

## 项目安装
```
npm install
```

### 项目编译
```
npm run serve 
```

### 项目构建
```
npm run build
```


