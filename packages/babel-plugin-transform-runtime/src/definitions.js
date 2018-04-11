export default {
  builtins: {
    Symbol: "symbol",
    Promise: "promise",
    Map: "map",
    WeakMap: "weak-map",
    Set: "set",
    WeakSet: "weak-set",
    Observable: "observable",
    setTimeout: "set-timeout",
    clearTimeout: "clear-timeout",
    setInterval: "set-interval",
    clearInterval: "clear-interval",
    setImmediate: "set-immediate",
    clearImmediate: "clear-immediate",
    asap: "asap",
    global: "global",
    parseFloat: "parse-float",
    parseInt: "parse-int",
  },

  methods: {
    Array: {
      from: "array/from",
      isArray: "array/is-array",
      of: "array/of",
    },

    JSON: {
      stringify: "json/stringify",
    },

    Object: {
      assign: "object/assign",
      create: "object/create",
      defineProperties: "object/define-properties",
      defineProperty: "object/define-property",
      entries: "object/entries",
      freeze: "object/freeze",
      fromEntries: "object/from-entries",
      getOwnPropertyDescriptor: "object/get-own-property-descriptor",
      getOwnPropertyDescriptors: "object/get-own-property-descriptors",
      getOwnPropertyNames: "object/get-own-property-names",
      getOwnPropertySymbols: "object/get-own-property-symbols",
      getPrototypeOf: "object/get-prototype-of",
      isExtensible: "object/is-extensible",
      isFrozen: "object/is-frozen",
      isSealed: "object/is-sealed",
      is: "object/is",
      keys: "object/keys",
      preventExtensions: "object/prevent-extensions",
      seal: "object/seal",
      setPrototypeOf: "object/set-prototype-of",
      values: "object/values",
    },

    Math: {
      DEG_PER_RAD: "math/deg-per-rad",
      RAD_PER_DEG: "math/rad-per-deg",
      acosh: "math/acosh",
      asinh: "math/asinh",
      atanh: "math/atanh",
      cbrt: "math/cbrt",
      clamp: "math/clamp",
      clz32: "math/clz32",
      cosh: "math/cosh",
      degrees: "math/degrees",
      expm1: "math/expm1",
      fround: "math/fround",
      fscale: "math/fscale",
      hypot: "math/hypot",
      imul: "math/imul",
      log10: "math/log10",
      log1p: "math/log1p",
      log2: "math/log2",
      radians: "math/radians",
      scale: "math/scale",
      sign: "math/sign",
      signbit: "math/signbit",
      sinh: "math/sinh",
      tanh: "math/tanh",
      trunc: "math/trunc",
      iaddh: "math/iaddh",
      isubh: "math/isubh",
      imulh: "math/imulh",
      umulh: "math/umulh",
    },

    Symbol: {
      asyncIterator: "symbol/async-iterator",
      for: "symbol/for",
      hasInstance: "symbol/has-instance",
      isConcatSpreadable: "symbol/is-concat-spreadable",
      iterator: "symbol/iterator",
      keyFor: "symbol/key-for",
      match: "symbol/match",
      observable: "symbol/observable",
      patternMatch: "symbol/pattern-match",
      patternValue: "symbol/pattern-value",
      replace: "symbol/replace",
      search: "symbol/search",
      species: "symbol/species",
      split: "symbol/split",
      toPrimitive: "symbol/to-primitive",
      toStringTag: "symbol/to-string-tag",
      unscopables: "symbol/unscopables",
    },

    String: {
      fromCodePoint: "string/from-code-point",
      raw: "string/raw",
    },

    Number: {
      EPSILON: "number/epsilon",
      MAX_SAFE_INTEGER: "number/max-safe-integer",
      MIN_SAFE_INTEGER: "number/min-safe-integer",
      fromString: "number/from-string",
      isFinite: "number/is-finite",
      isInteger: "number/is-integer",
      isNaN: "number/is-nan",
      isSafeInteger: "number/is-safe-integer",
      parseFloat: "number/parse-float",
      parseInt: "number/parse-int",
    },

    Reflect: {
      apply: "reflect/apply",
      construct: "reflect/construct",
      defineProperty: "reflect/define-property",
      deleteProperty: "reflect/delete-property",
      getOwnPropertyDescriptor: "reflect/get-own-property-descriptor",
      getPrototypeOf: "reflect/get-prototype-of",
      get: "reflect/get",
      has: "reflect/has",
      isExtensible: "reflect/is-extensible",
      ownKeys: "reflect/own-keys",
      preventExtensions: "reflect/prevent-extensions",
      setPrototypeOf: "reflect/set-prototype-of",
      set: "reflect/set",
      defineMetadata: "reflect/define-metadata",
      deleteMetadata: "reflect/delete-metadata",
      getMetadata: "reflect/get-metadata",
      getMetadataKeys: "reflect/get-metadata-keys",
      getOwnMetadata: "reflect/get-own-metadata",
      getOwnMetadataKeys: "reflect/get-own-metadata-keys",
      hasMetadata: "reflect/has-metadata",
      hasOwnMetadata: "reflect/has-own-metadata",
      metadata: "reflect/metadata",
    },

    Date: {
      now: "date/now",
    },
  },

  instanceMethods: {
    at: "at",
    bind: "bind",
    codePointAt: "code-point-at",
    concat: "concat",
    copyWithin: "copy-within",
    endsWith: "ends-with",
    entries: "entries",
    every: "every",
    fill: "fill",
    filter: "filter",
    find: "find",
    findIndex: "find-index",
    flags: "flags",
    flatMap: "flat-map",
    flatten: "flatten",
    forEach: "for-each",
    includes: "includes",
    indexOf: "index-of",
    keys: "keys",
    lastIndexOf: "last-index-of",
    map: "map",
    matchAll: "match-all",
    padEnd: "pad-end",
    padStart: "pad-start",
    reduce: "reduce",
    reduceRight: "reduce-right",
    repeat: "repeat",
    replaceAll: "replace-all",
    slice: "slice",
    some: "some",
    sort: "sort",
    splice: "splice",
    startsWith: "starts-with",
    trim: "trim",
    trimEnd: "trim-end",
    trimLeft: "trim-left",
    trimRight: "trim-right",
    trimStart: "trim-start",
    values: "values",
  },
};
