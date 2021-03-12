var assert = require('assert');

const { Demo1 } = require("../src/index")

describe('demo1', ()=>{
    it('hello', async ()=>{
        let demo1 = new Demo1()
        assert("hello world", demo1.hello())
    })
})