export const number = /^([0-9])+$/

export const english = /^([A-Za-z])+$/

export const tel = /^0\d{2,3}-?\d{5,8}$/

export const phone = /^1[3|4|5|6|7|8|9][0-9]{9}$/

export const licensePlate = /^[a-zA-Z0-9\u4E00-\u9FA5]{7,8}$/

export const email = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

export const idCard =
  /^(1[1-5]{1}|2[1-3]{1}|3[1-7]{1}|4[1-6]{1}|5[0-4]{1}|6[1-5]{1}|71|8[1-2]{1}|91)[0-9]{4}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/

export const external = /^(https?:|mailto:|tel:)/

export const intranet =
  /^(127\.0\.0\.1)|(localhost)|(10\.\d{1,3}\.\d{1,3}\.\d{1,3})|(172\.((1[6-9])|(2\d)|(3[01]))\.\d{1,3}\.\d{1,3})|(192\.168\.\d{1,3}\.\d{1,3})/

export const space = /^[\s]*$/
