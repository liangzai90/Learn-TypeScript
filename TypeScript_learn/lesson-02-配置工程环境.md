
https://www.jianshu.com/p/0e37a793ac3a
https://www.cnblogs.com/xiaoxiaochengxuyuan/p/6137574.html

typescript开发的准备工作：
---------------------------------------

1.准备工作
1.1安装node.js (www.nodejs.cn)
1.2.安装 typescript
npm install -g typescript
npm i -g typescript
npm i -g nodemon
npm install typings --global

2.typescript里面找不到 'http'模块
npm install -s http   
npm install -s @types/http
npm install --save @types/core-js
npm install --save-dev @types/node


===============================
3.开始建立typescript的工程

3.1.初始tsc环境，生成tsconfig.json文件
  tsc  --init 
3.2.初始化 npm环境，生成package.json文件
  npm init -y
3.3.vs打开当前目录
  code . 
3.4.写完ts文件之后，记得build（构建）一下
3.5.打开watch功能
[Terminal]-->[Run Task],选择 watch 
  

win10 脚本被禁用问题：
------------------------------------------------
set-ExecutionPolicy RemoteSigned  
在power shell输入这个命令。
参考地址：https://blog.csdn.net/wqnmlgbsz/article/details/100654258


