export const getURLParam = (string: string): string => {
  if (!window) return ''

  const reg = new RegExp('(^|&)' + string + '=([^&]*)(&|$)', 'i')
  const hash: string = window.location.hash
  const search: string = window.location.search
  let r: RegExpMatchArray | null | undefined

  if (search) {
    r = search.substr(1).match(reg)
  }

  if (!r && hash && hash.indexOf('?') !== -1) {
    r = location.hash.substring(location.hash.indexOf('?')).substr(1).match(reg)
  }

  return r ? decodeURIComponent(r[2]) : ''
}

export const getURLParamByMulti = (tokens: Array<string>) => {
  const params: { [k: string]: string } = {}

  if (!window) return params

  tokens.forEach((item) => {
    params[item] = getURLParam(item)
  })

  return params
}

export const getURLParamByAll = () => {
  if (!window) return {}

  const hash: string = location.hash
  const search: string = location.search

  let queryParamToken = ''

  if (search && search.indexOf('?') !== -1) {
    queryParamToken = search.substr(1)
  }

  if (hash && hash.indexOf('?') !== -1) {
    queryParamToken += `&${location.hash.substring(location.hash.indexOf('?')).substr(1)}`
  }

  const queryParamTokens = queryParamToken.split('&')

  const query: { [k: string]: string } = {}

  if (queryParamTokens) {
    queryParamTokens.forEach((item: string) => {
      if (item) {
        const key: string = item.split('=')[0]
        const value: string = item.split('=')[1]
        query[key] = value
      }
    })

    return query
  }

  return query
}
