export const checkBrowser = (): string => {
  if (!window) return 'unknown'

  const ua: string = window.navigator.userAgent.toLowerCase()
  const micromessenger: RegExpMatchArray = ua.match(/MicroMessenger/i) || []
  const alipay: RegExpMatchArray = ua.match(/AliPay/i) || []
  const wxwork: RegExpMatchArray = ua.match(/wxwork/i) || []

  if (micromessenger[0] === 'micromessenger' && wxwork[0] === 'wxwork') return 'WXWORK'

  if (micromessenger[0] === 'micromessenger') return 'WECHAT'

  if (alipay[0] === 'alipay') return 'ALIPAY'

  return 'unknown'
}

export const checkSystem = (): string => {
  if (!window) return 'unknown'

  const u = window.navigator.userAgent

  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

  if (isAndroid) return 'android'

  if (isIOS) return 'ios'

  return 'unknown'
}
