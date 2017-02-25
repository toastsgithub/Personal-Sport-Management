# PSM
# 软件概述

个人运动管理系统是集个人运动数据展示, 运动数据统计，朋友社交，比赛活动等特性为一体的个人运动社交平台，旨在为用户提供直观的个人运动数据和一个自由沟通交流的平台

# 功能

`运动管理`：个人运动数据的收集，显示。基于 restful 的方式注入数据

`活动管理`：发布、修改、删除、参与

`用户管理`：账户设置，好友管理等

`权限管理`：个人用户和管理员用户，管理员用户拥有对比赛的全部控制权限，可以处理收到的举报

`统计分析`：对历史数据的统计分析展示。

`社交`：可以进行好友模糊搜索，好友的添加和删除，查看关注自己的人，查看自己关注的人的动态

# 支持软件



## 安装和初始化
1. 将软件打包部署在相应服务器的web目录下
2. 修改服务器的相应配置文件，将项目的根目录配置在 Personal-Sport-Management/public下
3. 自定义域名和端口
4. 启动服务器

## 数据格式
1. 接口数据格式参考详细设计文档的接口数据格式定义
2. 基于Restful的数据注入的配置文件名命名为sport_data_{id}.xml
3. 基于Restful的数据注入的配置文件数据格式为






~~~~ xml
<datas>
    <data>
          <userId>100</userId>
             <sportDate>2016-12-03</sportDate>
             <sleepTime>300</sleepTime>
             <weight>80</weight>
             <height>175</height>
             <steps>10078</steps>
             <sleepDeep>200</sleepDeep>
          </data>     <data>
          <userId>101</userId>
             <sportDate>2016-12-04</sportDate>
             <sleepTime>300</sleepTime>
             <weight>85</weight>
             <height>180</height>
             <steps>23078</steps>
             <sleepDeep>200</sleepDeep>
          </data>
 </datas>
~~~~

# 数据背景
1. 数据库文件存放在Personal-Sport-Management/database目录下
2. 数据注入xml文件存放在Personal-Sport-Management/database目录下

# 操作示例
## 1.注册

![1](http://olxa5noyp.bkt.clouddn.com/pasted-image.png)

## 2.登录

![2](http://olxa5noyp.bkt.clouddn.com/pasted-image-2.png)

## 3.个人主页-运动信息查看

![3](http://olxa5noyp.bkt.clouddn.com/pasted-image-3.png)

## 4.比赛列表查看

![4](http://olxa5noyp.bkt.clouddn.com/pasted-image-4.png)

## 5.发起一场比赛

![5](http://olxa5noyp.bkt.clouddn.com/pasted-image-5.png)

## 6.查看我创建的比赛

![6](http://olxa5noyp.bkt.clouddn.com/pasted-image-6.png)

## 7.查看我参加的比赛

![7](http://olxa5noyp.bkt.clouddn.com/pasted-image-7.png)

## 8.查看关注我的人和我关注的人

![8](http://olxa5noyp.bkt.clouddn.com/pasted-image-8.png)

## 9.搜索好友

![9](http://olxa5noyp.bkt.clouddn.com/pasted-image-9.png)

## 10.查看动态和发起动态

![10](http://olxa5noyp.bkt.clouddn.com/pasted-image-10.png)

## 11.切换语言

![11](http://olxa5noyp.bkt.clouddn.com/pasted-image-11.png)

## 12.个人设置

![12](http://olxa5noyp.bkt.clouddn.com/pasted-image-12.png)

## 13.管理员处理举报

![13](http://olxa5noyp.bkt.clouddn.com/pasted-image-13.png)

