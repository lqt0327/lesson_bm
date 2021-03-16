const schema2 = {
    banner1: {
        banner: {
            template: "banner1",
            link_address: "www.baidu.com",
            title: "title"
        }
    },
    carousel2: {
        carousel: {
            template: "carousel2",
            link_address: "www.baidu.com",
            title: "title"
        }
    }
  }
  
  console.log(schema2["banner1"])

  let test =  Object.keys(schema2["banner1"])

 console.log(Object.keys(schema2["banner1"]))
 console.log(schema2["banner1"][test])