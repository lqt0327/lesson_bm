let data = {
    "BANNER": [
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh10g7/0993e70d-7d4f-4e65-86d6-dfbb14a7da05.cms/images/0178ff2a-35ba-4c8c-9b54-29df6688b0c4.png?x-oss-process=image/resize,w_560/crop,h_560","非通栏 Banner - 1"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh10g7/0993e70d-7d4f-4e65-86d6-dfbb14a7da05.cms/images/0178ff2a-35ba-4c8c-9b54-29df6688b0c4.png?x-oss-process=image/resize,w_560/crop,h_560","普通 Banner"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh0p9c/91cfa04c-a80c-4bff-a96d-e3f9c1059c25.cms/images/5011f344-4655-4c57-bd8e-68b0258e05bc.png?x-oss-process=image/resize,w_560/crop,h_560","手动轮播 Banner"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh0hqm/4582999c-1330-49e8-b809-8f459410ed9e.cms/images/785bb68f-d5b0-44c1-967d-7b2e6cfeead9.png?x-oss-process=image/resize,w_560/crop,h_560","自动轮播 Banner"]
    ],
    "TAB": [
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh9wkr/46a6fec3-8b6a-4dc1-8aea-50df95bac390.cms/images/4c8abcb4-8b6e-4753-895b-648253b0648b.png?x-oss-process=image/resize,w_560/crop,h_560","左右滑动 Tab"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh9q9y/42f681a0-2e6d-40eb-a373-768e51093777.cms/images/9737488e-61a6-4aa6-821d-5428074f3f4e.png?x-oss-process=image/resize,w_560/crop,h_560","tab"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh9jza/cee4a72c-50b5-40db-9bac-ce479ecb6c05.cms/images/646a420e-fbbc-4487-9f32-e1043eb7be66.png?x-oss-process=image/resize,w_560/crop,h_560","tab"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh2uou/ab17e63b-b1e2-46de-b0a2-9405262cd784.cms/images/49e1e1dc-bc62-4370-a653-62509a10d4cc.png?x-oss-process=image/resize,w_560/crop,h_560","普通功能入口 - 1"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh2pvc/45a29e34-5cb0-4c93-8169-0149c05d36da.cms/images/5de2e326-76e9-4b81-ac04-afc3ba1c947b.png?x-oss-process=image/resize,w_560/crop,h_560","手动轮播入口 - 2"]
    ]
}

// console.log(Object.keys(data)) 
Object.keys(data).map((item,i)=>{
    return (
        console.log(data[item])
    )
})