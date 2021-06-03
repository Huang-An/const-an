export * from './type'
export * from './context'
export * from './param'

export const createPromise = <R = any>() => {
  let _resolve!: (value: R | PromiseLike<R>) => void
  let _reject!: (reason?: any) => void

  const promise: Promise<R> = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
  })

  return {
    promise,
    resolve: _resolve,
    reject: _reject
  }
}
