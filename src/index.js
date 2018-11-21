import Type from '@careteen/type'

// 是否为 undefined 
export function isUndefined (v) {
  return v === undefined
}

// 是否为 null
export function isNull (v) {
  return v === null
}

// 是否为 undefined or null
export function isUndef (v) {
  return v === null || v === undefined
}

// 是否不为 undefined or null
export function isDef (v) {
  return v !== null && v !== undefined
}

// 是否为 true
export function isTrue (v) {
  return v === true
}

// 是否为 false
export function isFalse (v) {
  return v === true
}

// 是否为 boolean
export function isBoolean (v) {
  return Type(v) === 'boolean'
}

// 是否为 string
export function isString (v) {
  return Type(v) === 'string'
}

// 是否为 number
export function isNumber (v) {
  return Type(v) === 'number'
}

// 是否为 symbol
export function isSymbol (v) {
  return Type(v) === 'symbol'
}

// 是否为 基本类型
export function isPrimitive (v) {
  return (
    Type(v) === 'string' || 
    Type(v) === 'number' || 
    Type(v) === 'boolean' || 
    Type(v) === 'symbol'
  )
}

// 是否为 object
export function isObject (v) {
  return v !== null && Type(v) === 'object'
}

// 是否为 function
export function isFunction (v) {
  return Type(v) === 'function'
}

// 是否为 array
export const isArray = isFunction(Array.isArray) ? Array.isArray : function (v) {
  return Type(v) === 'array'
}

// 是否为 RegExp
export function isRegExp (v) {
  return Type(v) === 'regexp'
}

// 是否为 数组下标可达到值
export function isValidArrayIndex (v) {
  const n = parseFloat(String(v))
  return n >= 0 && Math.floor(n) === n && isFinite(v)
}


// 判断两个基本类型变量是否相等
export function isEqualBasics (eleA, eleB) {
  return eleA === eleB
}

// 判断两个数组是否相等
export function isEqualArray (eleA, eleB) {
  let ret = []
  let _isEqual = true
  if (eleA.length !== eleB.length) return false
  eleA.forEach((itemA, index) => {
    let hasKey = false
    eleB.forEach(itemB => {
      if (isEqual(itemA, itemB)) {
        hasKey = true
      }
    })
    ret[index] = hasKey
  })

  ret.forEach(item => {
    if (!item) _isEqual = false
  })

  return _isEqual
}

// 判断两个对象是否相等
export function isEqualObject (eleA, eleB) {
  let ret = true
  for (const key in eleA) {
    if (eleA.hasOwnProperty(key)) {
      if (!isEqual(eleA[key], eleB[key])) {
        ret = false
      }
    }
  }
  for (const key in eleB) {
    if (eleB.hasOwnProperty(key)) {
      if (!isEqual(eleA[key], eleB[key])) {
        ret = false
      }
    }
  }  
  return ret
}

// 判断两个变量是否相等
export function isEqual (eleA, eleB) {
  if (Type(eleA) !== Type(eleB)) return false
  // 基本类型
  if (isString(eleA) || isNumber(eleA) || isBoolean(eleA) || isUndefined(eleA)) {
    return isEqualBasics(eleA, eleB)
  }
  // 数组
  if (isArray(eleA)) {
    return isEqualArray(eleA, eleB)
  }
  // 对象
  if (isObject(eleA)) {
    return isEqualObject(eleA, eleB)
  }    
  // 其他 - 后续扩展 `date/regexp/...`
  return false
}
