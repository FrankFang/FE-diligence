import * as chai from 'chai'

const assert = chai.assert
import Promise from "./promise";

describe('Promise', () => {
  it('是一个类', () => {
    // assert(typeof Promise === 'function')
    // assert(typeof Promise.prototype === 'object')
    assert.isFunction(Promise)
    assert.isObject(Promise.prototype)
  })
  it('new Promise必须接受一个函数', () => {
    assert.throw(() => {
      //@ts-ignore
      new Promise()
    })
    assert.throw(() => {
      //@ts-ignore
      new Promise(1)
    })
    assert.throw(() => {
      //@ts-ignore
      new Promise(false)
    })
  })
  it('new Promise(fn)会生产一个对象，这个对象有then方法', () => {
    const promise = new Promise(() => {})
    assert.isFunction(promise.then)
  })
})