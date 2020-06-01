主题：  react beer 应用开发思路整理
beer  搜索，  -》 列表  -》 点进去  创建路由

3 个路由设计   beer 这三个路由
/ RESTFUL 
搜索根列表显示和二为一？ http://www.cesheng.com/search/:searchTerm?a=q&b=2&=c=3   /search/all  /search/8    params 
详情页  /beer/:beerId     detail       details/item?id=
语义化设计URL    /post/:postId

1. 把应用架构搭好， 路由 