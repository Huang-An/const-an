const _typeof = (value: any, type: string) => Object.prototype.toString.call(value) === type

export const isNull = (value: any): value is null => _typeof(value, '[object Null]')

export const isArray = <T extends [] = []>(value: any): value is T => _typeof(value, '[object Array]')

export const isString = (value: any): value is string => _typeof(value, '[object String]')

export const isNumber = (value: any): value is number => _typeof(value, '[object Number]')

export const isObject = <T extends {} = {}>(value: any): value is T => _typeof(value, '[object Object]')

export const isBoolean = (value: any): value is boolean => _typeof(value, '[object Boolean]')

export const isUndefined = (value: any): value is undefined => _typeof(value, '[object Undefined]')

/**
 * 判断是否为 空字符串、空数组、空对象、"Null"、"null"、"Undefined"、"undefined"、null、undefined
 * @param value
 * @returns boolean
 */
export const isEmpty = (value: any) => {
  if (isNull(value)) return true

  if (isUndefined(value)) return true

  if (isString(value)) {
    const isNull = ['Null', 'null'].indexOf(value) !== -1

    if (isNull) return true

    const isUndefined = ['Undefined', 'undefined'].indexOf(value) !== -1

    if (isUndefined) return true

    return !value
  }

  if (isArray(value)) return !value.length

  if (isObject(value)) return !Object.keys(value).length

  return false
}
