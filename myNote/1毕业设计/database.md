- 用户
    - 模版名
        - 每个模版的相关数据

user: qwe

用户保存的模版 表 ？？

在每次增删操作时 都先用localstorage先存储一遍，等点击发布后，再上传服务端
[
    {
        "comp": "Banner",
        "template": "banner1",
        "left_editor": "LeftPanelBanner",
        "link_address": "www.baidu.com",
        "img_address": "https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png"
    },
    {
        "comp": "Banner",
        "template": "banner1",
        "left_editor": "LeftPanelBanner",
        "link_address": "www.baidu.com",
        "img_address": "https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png"
    },
    {
        "comp": "Banner",
        "template": "banner1",
        "left_editor": "LeftPanelBanner",
        "link_address": "www.baidu.com",
        "img_address": "https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png"
    }
]
每个这样的数据格式，该如何存储在数据库中 ？ 并且还要关联相关用户
模版数据 如何做到 不变更原始数据？ 克隆该模版 再对该克隆模版进行数据的更改 ？
tpl 表
id：1
data：[......]
user：uid （该表可被哪个用户更改）
tag：[标签表中的数据] （根据该标签 进行推荐功能的设计）

user 表
id
username
password
love：[该用户感兴趣的标签]
collect：[该用户收藏的tpl模版]

tag 表
id
tagname

    
1. 用户表 、 数据配置表
2. 用户表 、 

是否可以支持开发者编辑代码 ，上传相关模块 ？？？？