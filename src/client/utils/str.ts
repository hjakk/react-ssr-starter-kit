interface Str {
  value: string
  get: () => string
}

interface Scope {
  arguments: unknown[]
  value: string
  max: number | null
  chr: string
}

function _isValidChar(value: unknown): boolean {
  return !!value && (typeof value === 'string' || typeof value === 'number') && value !== 'null' && value !== 'undefined' && value !== 'false'
}

function _join(arr: unknown[], chr: string): string {
  let _str = ''
  if (Array.isArray(arr) && arr) {
    let i = -1
    while (++i < arr.length) {
      if (_isValidChar(arr[i])) {
        if (_str) _str += chr
        _str += arr[i]
      }
    }
  }
  return _str
}

function Str(this: Str, ...args: unknown[]): any {
  const _scope: Scope = {
    arguments: args,
    max: null,
    chr: ' ',
    value: '',
  }
  _scope.value = _join(args, _scope.chr)

  Object.defineProperty(this, 'set', {
    value: function<K extends keyof Scope>(name: K, value: Scope[K]): Str {
      if (name in _scope) _scope[name] = value
      return this
    }
  })

  Object.defineProperty(this, 'get', {
    value: function<K extends keyof Scope>(name: K): Scope[K] {
      return _scope[name]
    }
  })

  Object.defineProperty(this, 'value', {
    get(): string {
      let _v = _scope.value
      if (_scope.max) _v = _v.slice(0, _scope.max)
      return _v
    }
  })
}

Str.prototype.max = function(n: number): Str {
  this.set('max', n)
  return this
}

Str.prototype.join = function(chr: string): string {
  if (chr) this.set('chr', chr)
  this.set('value', _join(this.get('arguments'), chr))
  return this.value
}


export default (...args: unknown[]): Str => new (Str as any)(...args)
