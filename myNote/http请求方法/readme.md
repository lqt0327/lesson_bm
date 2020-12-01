> http方法：GET、HEAD、POST、PUT、DELETE、OPTIONS、TRACE、PATCH
>
> 根据RFC2616第九章说明，http方法的定义有两点：safe and Idempotent，即安全性和幂等性，可以结合这两点对以上方法进行说明

## GET
- 安全、幂等
- 用于获取资源

## HEAD
- 安全、幂等
- 与get方法类似，但不返回message body内容，仅仅是获得获取资源等部分信息（content-type、content-length）

## POST
- 非安全、幂等
- 用于创建、更新资源

## DELETE
- 非安全、幂等
- 删除资源

## OPTIONS
- 安全、幂等
- 用于url验证，验证接口服务是否正常

## TEACE
- 安全、幂等
- 维基百科“回显服务器收到的请求，这样客户端可以看到（如果有）哪一些改变或者添加已经被中间服务器实现。”

## PATCH
- 非安全、幂等
- 用于创建、更新资源，与put类似，区别在于patch表示部分更新

## POST 和 PUT 的区别
 - post和put的区别在于uri，或者说post用于创建子资源，比如接口：POST /api/person/  会创建一个资源比如 /api/person/1或者/api/person/2 ... 或者/api/person/n，创建了新的uri，而put方法创建资源的uri是 PUT /api/person/1，这样就创建了一个资源，如果1已经存在那么就是更新，所以put并不是只是更新操作。再有post是非幂等的。
 - 通常情况下，我们都会将post、get、put、delete对应到CRUD操作上，但实际上put并不是只能更新。

## PATCH 的使用
- patch是2010后成为的正式http方法，详见RFC5789，它是对put的补充，在没有patch之前，我们都是用put进行更新操作，这时候我们的接口中通常会有一个逻辑规则，如：如果对象的的一个字符属性为NULL，那么就是不更新该属性（字段）值，如果对象的字符属性是“”，那么就更新该属性（字段）的值，通过这种方式来避免全部覆盖的操作。现在有了patch就解决了这种判断，**在put接口中不管属性是不是null，都进行更新，在patch接口中就对非null的进行更新；**