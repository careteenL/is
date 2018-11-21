/*!
 * @careteen/is v0.1.4
 * (c) 2018-2018 careteenL <15074806497@163.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@careteen/type')) :
  typeof define === 'function' && define.amd ? define(['exports', '@careteen/type'], factory) :
  (factory((global['@careteen/is'] = {}),global.Type));
}(this, (function (exports,Type) { 'use strict';

  Type = Type && Type.hasOwnProperty('default') ? Type['default'] : Type;

  // 是否为 undefined 
  function isUndefined(v) {
    return v === undefined;
  }

  // 是否为 null
  function isNull(v) {
    return v === null;
  }

  // 是否为 undefined or null
  function isUndef(v) {
    return v === null || v === undefined;
  }

  // 是否不为 undefined or null
  function isDef(v) {
    return v !== null && v !== undefined;
  }

  // 是否为 true
  function isTrue(v) {
    return v === true;
  }

  // 是否为 false
  function isFalse(v) {
    return v === true;
  }

  // 是否为 boolean
  function isBoolean(v) {
    return Type(v) === 'boolean';
  }

  // 是否为 string
  function isString(v) {
    return Type(v) === 'string';
  }

  // 是否为 number
  function isNumber(v) {
    return Type(v) === 'number';
  }

  // 是否为 symbol
  function isSymbol(v) {
    return Type(v) === 'symbol';
  }

  // 是否为 基本类型
  function isPrimitive(v) {
    return Type(v) === 'string' || Type(v) === 'number' || Type(v) === 'boolean' || Type(v) === 'symbol';
  }

  // 是否为 object
  function isObject(v) {
    return v !== null && Type(v) === 'object';
  }

  // 是否为 function
  function isFunction(v) {
    return Type(v) === 'function';
  }

  // 是否为 array
  var isArray = isFunction(Array.isArray) ? Array.isArray : function (v) {
    return Type(v) === 'array';
  };

  // 是否为 RegExp
  function isRegExp(v) {
    return Type(v) === 'regexp';
  }

  // 是否为 数组下标可达到值
  function isValidArrayIndex(v) {
    var n = parseFloat(String(v));
    return n >= 0 && Math.floor(n) === n && isFinite(v);
  }

  // 判断两个基本类型变量是否相等
  function isEqualBasics(eleA, eleB) {
    return eleA === eleB;
  }

  // 判断两个数组是否相等
  function isEqualArray(eleA, eleB) {
    var ret = [];
    var _isEqual = true;
    if (eleA.length !== eleB.length) return false;
    eleA.forEach(function (itemA, index) {
      var hasKey = false;
      eleB.forEach(function (itemB) {
        if (isEqual(itemA, itemB)) {
          hasKey = true;
        }
      });
      ret[index] = hasKey;
    });

    ret.forEach(function (item) {
      if (!item) _isEqual = false;
    });

    return _isEqual;
  }

  // 判断两个对象是否相等
  function isEqualObject(eleA, eleB) {
    var ret = true;
    for (var key in eleA) {
      if (eleA.hasOwnProperty(key)) {
        if (!isEqual(eleA[key], eleB[key])) {
          ret = false;
        }
      }
    }
    for (var _key in eleB) {
      if (eleB.hasOwnProperty(_key)) {
        if (!isEqual(eleA[_key], eleB[_key])) {
          ret = false;
        }
      }
    }
    return ret;
  }

  // 判断两个变量是否相等
  function isEqual(eleA, eleB) {
    if (Type(eleA) !== Type(eleB)) return false;
    // 基本类型
    if (isString(eleA) || isNumber(eleA) || isBoolean(eleA) || isUndefined(eleA)) {
      return isEqualBasics(eleA, eleB);
    }
    // 数组
    if (isArray(eleA)) {
      return isEqualArray(eleA, eleB);
    }
    // 对象
    if (isObject(eleA)) {
      return isEqualObject(eleA, eleB);
    }
    // 其他 - 后续扩展 `date/regexp/...`
    return false;
  }

  exports.isUndefined = isUndefined;
  exports.isNull = isNull;
  exports.isUndef = isUndef;
  exports.isDef = isDef;
  exports.isTrue = isTrue;
  exports.isFalse = isFalse;
  exports.isBoolean = isBoolean;
  exports.isString = isString;
  exports.isNumber = isNumber;
  exports.isSymbol = isSymbol;
  exports.isPrimitive = isPrimitive;
  exports.isObject = isObject;
  exports.isFunction = isFunction;
  exports.isArray = isArray;
  exports.isRegExp = isRegExp;
  exports.isValidArrayIndex = isValidArrayIndex;
  exports.isEqualBasics = isEqualBasics;
  exports.isEqualArray = isEqualArray;
  exports.isEqualObject = isEqualObject;
  exports.isEqual = isEqual;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
