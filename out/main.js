// Generated by dart2js, the Dart to JavaScript compiler version: 0.5.13.1_r23552.
// The code supports the following hooks:
// dartPrint(message)   - if this function is defined it is called
//                        instead of the Dart [print] method.
// dartMainRunner(main) - if this function is defined, the Dart [main]
//                        method will not be invoked directly.
//                        Instead, a closure that will invoke [main] is
//                        passed to [dartMainRunner].
function Isolate() {}
init();

var $ = Isolate.$isolateProperties;
var $$ = {};

// Native classes
$$.AutocompleteErrorEvent = {"": "Event;"};

$$.DomError = {"": "Interceptor;"};

$$.DomException = {"": "Interceptor;",
  toString$0: function(receiver) {
    return receiver.toString();
  }
};

$$.ErrorEvent = {"": "Event;"};

$$.Event = {"": "Interceptor;"};

$$.EventException = {"": "Interceptor;",
  toString$0: function(receiver) {
    return receiver.toString();
  }
};

$$.EventTarget = {"": "Interceptor;"};

$$.FileError = {"": "Interceptor;"};

$$.FileException = {"": "Interceptor;",
  toString$0: function(receiver) {
    return receiver.toString();
  }
};

$$.MediaError = {"": "Interceptor;"};

$$.MediaKeyError = {"": "Interceptor;"};

$$.NavigatorUserMediaError = {"": "Interceptor;"};

$$.PositionError = {"": "Interceptor;"};

$$.SpeechRecognitionError = {"": "Event;"};

$$.Window = {"": "EventTarget;",
  toString$0: function(receiver) {
    return receiver.toString();
  }
};

$$.XPathException = {"": "Interceptor;",
  toString$0: function(receiver) {
    return receiver.toString();
  }
};

$$.SvgException = {"": "Interceptor;",
  toString$0: function(receiver) {
    return receiver.toString();
  }
};

$$.SqlError = {"": "Interceptor;"};

$$.SqlException = {"": "Interceptor;"};

// Bound closures
$$.Closure$wrapException = {"": "Closure;call$1,$name"};

$$.Closure$toStringWrapper = {"": "Closure;call$0,$name"};

$$.Closure$invokeClosure = {"": "Closure;call$5,$name"};

$$.Closure$typeNameInChrome = {"": "Closure;call$1,$name"};

$$.Closure$typeNameInSafari = {"": "Closure;call$1,$name"};

$$.Closure$typeNameInOpera = {"": "Closure;call$1,$name"};

$$.Closure$typeNameInFirefox = {"": "Closure;call$1,$name"};

$$.Closure$typeNameInIE = {"": "Closure;call$1,$name"};

$$.Closure$constructorNameFallback = {"": "Closure;call$1,$name"};

(function (reflectionData) {
  if (!init.libraries) init.libraries = [];
  var libraries = init.libraries;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var length = reflectionData.length;
  for (var i = 0; i < length; i++) {
    var data = reflectionData[i];
    var name = data[0];
    var uri = data[1];
    var metadata = data[2];
    var descriptor = data[3];
    var classes = [];
    var functions = [];
    for (var property in descriptor) {
      if (!hasOwnProperty.call(descriptor, property)) continue;
      var element = descriptor[property];
      if (typeof element === "function") {
        $[property] = element;
        functions.push(property);
      } else {
        $$[property] = element;
        classes.push(property);
        classes.push(element[""]);
      }
    }
    libraries.push([name, uri, classes, functions, metadata]);
  }
})([
["_interceptors", "dart:_interceptors", , {
Interceptor: {"": "Object;",
  $eq: function(receiver, other) {
    return receiver === other;
  },
  toString$0: function(receiver) {
    return "Instance of '" + $.Primitives_objectTypeName(receiver) + "'";
  }
},

JSBool: {"": "bool/Interceptor;",
  toString$0: function(receiver) {
    return String(receiver);
  }
},

JSNull: {"": "Interceptor;",
  $eq: function(receiver, other) {
    return false;
  },
  toString$0: function(receiver) {
    return "null";
  }
},

JSUnknown: {"": "Interceptor;",
  toString$0: function(receiver) {
    return String(receiver);
  }
},

JSArray: {"": "List/Interceptor;",
  toString$0: function(receiver) {
    var result = new $.StringBuffer("");
    result._contents = "";
    $.ToString__emitValue(receiver, result, $.List_List($));
    return result._contents;
  },
  get$iterator: function(receiver) {
    return new $.ListIterator(receiver, receiver.length, 0, null);
  },
  get$length: function(receiver) {
    return receiver.length;
  },
  $index: function(receiver, index) {
    if (index >= receiver.length || index < 0)
      throw $.wrapException(new $.RangeError("value " + index));
    return receiver[index];
  },
  $isList: true,
  $asList: null,
  $asIterable: null,
  $isList: true,
  $isIterable: true
},

JSMutableArray: {"": "JSArray;", $asJSArray: function() { return [null]; }, $asList: function() { return [null]; }, $asIterable: function() { return [null]; }},

JSFixedArray: {"": "JSMutableArray;"},

JSExtendableArray: {"": "JSMutableArray;"},

JSNumber: {"": "num/Interceptor;",
  toString$0: function(receiver) {
    if (receiver === 0 && 1 / receiver < 0)
      return "-0.0";
    else
      return "" + receiver;
  },
  $add: function(receiver, other) {
    return receiver + other;
  },
  $gt: function(receiver, other) {
    if (typeof other !== "number")
      throw $.wrapException(new $.ArgumentError(other));
    return receiver > other;
  },
  $isnum: true
},

JSInt: {"": "int/JSNumber;", $isnum: true, $isint: true},

JSDouble: {"": "double/JSNumber;", $isnum: true},

JSString: {"": "String/Interceptor;",
  codeUnitAt$1: function(receiver, index) {
    if (index < 0)
      throw $.wrapException(new $.RangeError("value " + index));
    if (index >= receiver.length)
      throw $.wrapException(new $.RangeError("value " + index));
    return receiver.charCodeAt(index);
  },
  $add: function(receiver, other) {
    throw $.wrapException(new $.ArgumentError(other));
    return receiver + other;
  },
  substring$2: function(receiver, startIndex, endIndex) {
    endIndex = receiver.length;
    if (typeof endIndex !== "number")
      $.throwExpression(new $.ArgumentError(endIndex));
    if (startIndex < 0)
      throw $.wrapException(new $.RangeError("value " + startIndex));
    if ($.JSInt_methods.$gt(startIndex, endIndex))
      throw $.wrapException(new $.RangeError("value " + startIndex));
    if ($.$gt$n(endIndex, receiver.length))
      throw $.wrapException(new $.RangeError("value " + $.S(endIndex)));
    return receiver.substring(startIndex, endIndex);
  },
  substring$1: function($receiver, startIndex) {
    return this.substring$2($receiver, startIndex, null);
  },
  toString$0: function(receiver) {
    return receiver;
  },
  get$length: function(receiver) {
    return receiver.length;
  },
  $index: function(receiver, index) {
    if (index >= receiver.length || index < 0)
      throw $.wrapException(new $.RangeError("value " + index));
    return receiver[index];
  },
  $isString: true
},

getInterceptor: function(object) {
  return $.getInterceptor(object);
},

getDispatchProperty: function(object) {
  return object[$.dispatchPropertyName];
},

setDispatchProperty: function(object, value) {
  Object.defineProperty(object, $.dispatchPropertyName, {value: value, enumerable: false, writable: true, configurable: true});
},

makeDispatchRecord: function(interceptor, proto, extension, indexability) {
  return {i: interceptor, p: proto, e: extension, x: indexability};
},

getNativeInterceptor: function(object) {
  var record, proto, objectProto;
  record = $.getDispatchProperty(object);
  if (record != null) {
    proto = record.p;
    if (false === proto)
      return record.i;
    if (true === proto)
      return object;
    objectProto = Object.getPrototypeOf(object);
    if (proto === objectProto)
      return record.i;
    if (record.e === objectProto)
      return proto(object, record);
  }
  record = $.lookupDispatchRecord(object);
  if (record == null)
    return $.C_JSUnknown;
  $.setDispatchProperty(Object.getPrototypeOf(object), record);
  return $.getNativeInterceptor(object);
},

initializeDispatchProperty: function(setGetDispatchPropertyFn, rootProperty, jsObjectInterceptor) {
  var objectProto, i, property;
  if (typeof rootProperty !== "string")
    return $.initializeDispatchProperty$bailout(1, setGetDispatchPropertyFn, rootProperty, jsObjectInterceptor);
  objectProto = Object.prototype;
  for (i = 0; true; ++i) {
    if (i > 0)
      property = rootProperty + "_" + i;
    else
      property = rootProperty;
    if (typeof objectProto[property] === "undefined") {
      $.dispatchPropertyName = property;
      setGetDispatchPropertyFn(new Function("a", "return a." + property));
      $.setDispatchProperty(objectProto, $.makeDispatchRecord(jsObjectInterceptor, objectProto, null, null));
      return;
    }
  }
},

initializeDispatchProperty$bailout: function(state0, setGetDispatchPropertyFn, rootProperty, jsObjectInterceptor) {
  var objectProto, i, property;
  objectProto = Object.prototype;
  for (i = 0; true; ++i) {
    property = i > 0 ? rootProperty + "_" + i : rootProperty;
    if (typeof objectProto[property] === "undefined") {
      $.dispatchPropertyName = property;
      setGetDispatchPropertyFn(new Function("a", "return a." + property));
      $.setDispatchProperty(objectProto, $.makeDispatchRecord(jsObjectInterceptor, objectProto, null, null));
      return;
    }
  }
}}],
["_js_helper", "dart:_js_helper", , {
DartError: {"": "Object;",
  toString$0: function(_) {
    var dartException = this.dartException;
    if (!!Error.captureStackTrace || this.stack == null)
      return $.toString$0(dartException);
    else
      return $.S(dartException) + "\n" + $.S(this.stack);
  }
},

invokeClosure_closure: {"": "Closure;closure_0",
  call$0: function() {
    return this.closure_0.call$0();
  }
},

invokeClosure_closure0: {"": "Closure;closure_1,arg1_2",
  call$0: function() {
    return this.closure_1.call$1(this.arg1_2);
  }
},

invokeClosure_closure1: {"": "Closure;closure_3,arg1_4,arg2_5",
  call$0: function() {
    return this.closure_3.call$2(this.arg1_4, this.arg2_5);
  }
},

Closure: {"": "Object;",
  toString$0: function(_) {
    return "Closure";
  }
},

Null: {"": "Object;"},

isJsIndexable: function(object, record) {
  var result;
  if (record != null) {
    result = record.x;
    if (result != null)
      return result;
  }
  return false;
},

S: function(value) {
  var res;
  if (typeof value === "string")
    return value;
  if (typeof value === "number") {
    if (value !== 0)
      return "" + value;
  } else if (true === value)
    return "true";
  else if (false === value)
    return "false";
  else if (value == null)
    return "null";
  res = $.toString$0(value);
  if (typeof res !== "string")
    throw $.wrapException(new $.ArgumentError(value));
  return res;
},

Primitives_objectHashCode: function(object) {
  var hash = object.$identityHash;
  if (hash == null) {
    hash = $.$add$ns($.Primitives_hashCodeSeed, 1);
    $.Primitives_hashCodeSeed = hash;
    object.$identityHash = hash;
  }
  return hash;
},

Primitives_objectTypeName: function(object) {
  var $name, decompiled, t1;
  $name = $.constructorNameFallback($.getInterceptor(object));
  if ($.$eq($name, "Object")) {
    decompiled = String(object.constructor).match(/^\s*function\s*(\S*)\s*\(/)[1];
    if (typeof decompiled === "string")
      $name = decompiled;
  }
  t1 = $.getInterceptor$s($name);
  if (t1.codeUnitAt$1($name, 0) === 36)
    $name = t1.substring$1($name, 1);
  t1 = $.getRuntimeTypeInfo(object);
  return $.S($name) + $.joinArguments(t1, 0);
},

ioore: function(index) {
  if (typeof index !== "number" || Math.floor(index) !== index)
    $.throwExpression(new $.ArgumentError(index));
  throw $.wrapException(new $.RangeError("value " + $.S(index)));
},

wrapException: function(ex) {
  var wrapper;
  if (ex == null)
    ex = $.C_NullThrownError;
  wrapper = new $.DartError();
  wrapper.dartException = ex;
  wrapper.toString = $.DartError_toStringWrapper$closure.call$0;
  if (!!Error.captureStackTrace)
    Error.captureStackTrace(wrapper, $.wrapException$closure);
  else
    wrapper.stack = new Error().stack;
  return wrapper;
},

throwExpression: function(ex) {
  throw $.wrapException(ex);
},

DartError_toStringWrapper: function() {
  return $.toString$0(this);
},

invokeClosure: function(closure, isolate, numberOfArguments, arg1, arg2) {
  var t1 = $.getInterceptor(numberOfArguments);
  if (t1.$eq(numberOfArguments, 0))
    return new $.invokeClosure_closure(closure).call$0();
  else if (t1.$eq(numberOfArguments, 1))
    return new $.invokeClosure_closure0(closure, arg1).call$0();
  else if (t1.$eq(numberOfArguments, 2))
    return new $.invokeClosure_closure1(closure, arg1, arg2).call$0();
  else
    throw $.wrapException(new $._ExceptionImplementation("Unsupported number of arguments for wrapped closure"));
},

convertDartClosureToJS: function(closure, arity) {
  var $function;
  if (closure == null)
    return;
  $function = closure.$identity;
  if (!!$function)
    return $function;
  $function = (function ($2, $3) { return function($0, $1) { return $3(closure, $2, arity, $0, $1) }})($, $.invokeClosure$closure.call$5);
  closure.$identity = $function;
  return $function;
},

throwCyclicInit: function(staticName) {
  throw $.wrapException(new $.RuntimeError("Cyclic initialization for static " + $.S(staticName)));
},

getRuntimeTypeInfo: function(target) {
  return target.$builtinTypeInfo;
},

runtimeTypeToString: function(type) {
  if (type == null)
    return "dynamic";
  else if (typeof type === "object" && type !== null && type.constructor === Array) {
    if (0 >= type.length)
      throw $.ioore(0);
    return type[0].builtin$cls + $.joinArguments(type, 1);
  } else
    return type.builtin$cls;
},

joinArguments: function(types, startIndex) {
  var buffer, index, firstArgument, allDynamic, argument, t1;
  if (typeof types !== "string" && (typeof types !== "object" || types === null || types.constructor !== Array && !$.isJsIndexable(types, types[$.dispatchPropertyName])))
    return $.joinArguments$bailout(1, types, startIndex);
  buffer = new $.StringBuffer("");
  buffer._contents = "";
  for (index = startIndex, firstArgument = true, allDynamic = true; index < types.length; ++index) {
    if (firstArgument)
      firstArgument = false;
    else
      buffer._contents = buffer._contents + ", ";
    if (index < 0 || index >= types.length)
      throw $.ioore(index);
    argument = types[index];
    if (argument != null)
      allDynamic = false;
    t1 = $.runtimeTypeToString(argument);
    buffer._contents = buffer._contents + t1;
  }
  return allDynamic ? "" : "<" + $.S(buffer) + ">";
},

joinArguments$bailout: function(state0, types, startIndex) {
  var t1, buffer, index, firstArgument, allDynamic, argument, t2;
  t1 = $.getInterceptor$as(types);
  if (types == null)
    return "";
  buffer = new $.StringBuffer("");
  buffer._contents = "";
  for (index = startIndex, firstArgument = true, allDynamic = true; index < t1.get$length(types); ++index) {
    if (firstArgument)
      firstArgument = false;
    else
      buffer._contents = buffer._contents + ", ";
    argument = t1.$index(types, index);
    if (argument != null)
      allDynamic = false;
    t2 = $.runtimeTypeToString(argument);
    buffer._contents = buffer._contents + t2;
  }
  return allDynamic ? "" : "<" + $.S(buffer) + ">";
},

typeNameInChrome: function(obj) {
  return $.typeNameInWebKitCommon(obj.constructor.name);
},

typeNameInSafari: function(obj) {
  return $.typeNameInWebKitCommon($.constructorNameFallback(obj));
},

typeNameInWebKitCommon: function(tag) {
  var $name = tag;
  if ($name === "CanvasPixelArray")
    return "Uint8ClampedArray";
  if ($name === "AudioChannelMerger")
    return "ChannelMergerNode";
  if ($name === "AudioChannelSplitter")
    return "ChannelSplitterNode";
  if ($name === "AudioGainNode")
    return "GainNode";
  if ($name === "AudioPannerNode")
    return "PannerNode";
  if ($name === "JavaScriptAudioNode")
    return "ScriptProcessorNode";
  if ($name === "Oscillator")
    return "OscillatorNode";
  if ($name === "RealtimeAnalyserNode")
    return "AnalyserNode";
  if ($name === "IDBVersionChangeRequest")
    return "IDBOpenDBRequest";
  return $name;
},

typeNameInOpera: function(obj) {
  return $.constructorNameFallback(obj);
},

typeNameInFirefox: function(obj) {
  var $name = $.constructorNameFallback(obj);
  if ($name === "BeforeUnloadEvent")
    return "Event";
  if ($name === "CSS2Properties")
    return "CSSStyleDeclaration";
  if ($name === "DataTransfer")
    return "Clipboard";
  if ($name === "DragEvent")
    return "MouseEvent";
  if ($name === "GeoGeolocation")
    return "Geolocation";
  if ($name === "WorkerMessageEvent")
    return "MessageEvent";
  if ($name === "XMLDocument")
    return "Document";
  return $name;
},

typeNameInIE: function(obj) {
  var $name = $.constructorNameFallback(obj);
  if ($name === "Document") {
    if (!!obj.xmlVersion)
      return "Document";
    return "HTMLDocument";
  }
  if ($name === "BeforeUnloadEvent")
    return "Event";
  if ($name === "CanvasPixelArray")
    return "Uint8ClampedArray";
  if ($name === "DataTransfer")
    return "Clipboard";
  if ($name === "DragEvent")
    return "MouseEvent";
  if ($name === "HTMLDDElement")
    return "HTMLElement";
  if ($name === "HTMLDTElement")
    return "HTMLElement";
  if ($name === "HTMLTableDataCellElement")
    return "HTMLTableCellElement";
  if ($name === "HTMLTableHeaderCellElement")
    return "HTMLTableCellElement";
  if ($name === "HTMLPhraseElement")
    return "HTMLElement";
  if ($name === "MSStyleCSSProperties")
    return "CSSStyleDeclaration";
  if ($name === "Position")
    return "Geoposition";
  if ($name === "Object")
    if (window.DataView && obj instanceof window.DataView)
      return "DataView";
  return $name;
},

constructorNameFallback: function(object) {
  var $constructor, $name, t1, string;
  if (object == null)
    return "Null";
  $constructor = object.constructor;
  if (typeof $constructor === "function") {
    $name = $constructor.builtin$cls;
    if ($name != null)
      return $name;
    $name = $constructor.name;
    if (typeof $name === "string") {
      $name;
      t1 = $name !== "" && $name !== "Object" && $name !== "Function.prototype";
    } else
      t1 = false;
    if (t1)
      return $name;
  }
  string = Object.prototype.toString.call(object);
  return string.substring(8, string.length - 1);
},

alternateTag: function(object, tag) {
  if (!!/^HTML[A-Z].*Element$/.test(tag)) {
    if (Object.prototype.toString.call(object) === "[object Object]")
      return;
    return "HTMLElement";
  }
  return;
},

getFunctionForTypeNameOf: function() {
  if (typeof navigator !== "object")
    return $.typeNameInChrome$closure;
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("Chrome") !== -1 || userAgent.indexOf("DumpRenderTree") !== -1)
    return $.typeNameInChrome$closure;
  else if (userAgent.indexOf("Firefox") !== -1)
    return $.typeNameInFirefox$closure;
  else if (userAgent.indexOf("MSIE") !== -1)
    return $.typeNameInIE$closure;
  else if (userAgent.indexOf("Opera") !== -1)
    return $.typeNameInOpera$closure;
  else if (userAgent.indexOf("AppleWebKit") !== -1)
    return $.typeNameInSafari$closure;
  else
    return $.constructorNameFallback$closure;
},

toStringForNativeObject: function(obj) {
  if ($._getTypeNameOf == null)
    $._getTypeNameOf = $.getFunctionForTypeNameOf();
  return "Instance of " + $._getTypeNameOf.call$1(obj);
},

hashCodeForNativeObject: function(object) {
  return $.Primitives_objectHashCode(object);
},

defineProperty: function(obj, property, value) {
  Object.defineProperty(obj, property, {value: value, enumerable: false, writable: true, configurable: true});
},

defineNativeMethods: function(tags, interceptorClass) {
  $.defineNativeMethodsCommon(tags, interceptorClass, true);
},

defineNativeMethodsNonleaf: function(tags, interceptorClass) {
  $.defineNativeMethodsCommon(tags, interceptorClass, false);
},

defineNativeMethodsCommon: function(tags, interceptorClass, isLeaf) {
  var methods, tagsList, i, tag;
  methods = interceptorClass.prototype;
  if ($.interceptorsByTag == null)
    $.interceptorsByTag = {};
  if ($.leafTags == null)
    $.leafTags = {};
  tagsList = tags.split("|");
  for (i = 0; i < tagsList.length; ++i) {
    tag = tagsList[i];
    $.interceptorsByTag[tag] = methods;
    $.leafTags[tag] = isLeaf;
  }
},

defineNativeMethodsFinish: function() {
},

lookupInterceptor: function(hasOwnPropertyFunction, tag) {
  var map = $.interceptorsByTag;
  if (map == null)
    return;
  return hasOwnPropertyFunction.call(map, tag) ? map[tag] : null;
},

lookupDispatchRecord: function(obj) {
  var hasOwnPropertyFunction, tag, interceptor, secondTag, t1;
  hasOwnPropertyFunction = Object.prototype.hasOwnProperty;
  if ($._getTypeNameOf == null)
    $._getTypeNameOf = $.getFunctionForTypeNameOf();
  tag = $._getTypeNameOf.call$1(obj);
  interceptor = $.lookupInterceptor(hasOwnPropertyFunction, tag);
  if (interceptor == null) {
    secondTag = $.alternateTag(obj, tag);
    if (secondTag != null)
      interceptor = $.lookupInterceptor(hasOwnPropertyFunction, secondTag);
  }
  if (interceptor == null)
    return;
  t1 = $.leafTags;
  if (t1 != null && t1[tag] === true)
    return $.makeDispatchRecord(interceptor, false, null, !!interceptor.$isJavaScriptIndexingBehavior);
  else
    return $.makeDispatchRecord(interceptor, Object.getPrototypeOf(obj), null, null);
}}],
["dart._collection.dev", "dart:_collection-dev", , {
ListIterator: {"": "Object;_iterable,_length,_index,_current",
  moveNext$0: function() {
    var t1, $length, t2;
    t1 = this._iterable;
    $length = t1.length;
    if (this._length !== $length)
      throw $.wrapException(new $.ConcurrentModificationError(t1));
    t2 = this._index;
    if (t2 >= $length) {
      this._current = null;
      return false;
    }
    if (t2 >>> 0 !== t2 || t2 >= $length)
      throw $.ioore(t2);
    this._current = t1[t2];
    this._index = this._index + 1;
    return true;
  }
},

ToString__emitValue: function(i, result, visiting) {
  var isList, t1, first, e;
  visiting.push(i);
  isList = typeof i === "object" && i !== null && (i.constructor === Array || !!$.getInterceptor(i).$isList);
  result.write$1(isList ? "[" : "{");
  for (t1 = $.get$iterator$a(i), first = true; t1.moveNext$0(); first = false) {
    e = t1._current;
    if (!first)
      result.write$1(", ");
    $.ToString__emitObject(e, result, visiting);
  }
  result.write$1(isList ? "]" : "}");
  if (0 >= visiting.length)
    throw $.ioore(0);
  visiting.pop();
},

ToString__emitObject: function(o, result, visiting) {
  if (typeof o === "object" && o !== null && (o.constructor === Array || !!$.getInterceptor(o).$isIterable)) {
    o;
    if ($.ToString__containsRef(visiting, o))
      result.write$1(typeof o === "object" && o !== null && (o.constructor === Array || !!$.getInterceptor(o).$isList) ? "[...]" : "{...}");
    else
      $.ToString__emitValue(o, result, visiting);
  } else
    result.write$1(o);
},

ToString__containsRef: function(i, ref) {
  var t1;
  for (t1 = $.JSArray_methods.get$iterator(i); t1.moveNext$0();)
    if (t1._current === ref)
      return true;
  return false;
}}],
["dart.core", "dart:core", , {
NullThrownError: {"": "Object;",
  toString$0: function(_) {
    return "Throw of null.";
  }
},

ArgumentError: {"": "Object;message",
  toString$0: function(_) {
    var t1 = this.message;
    if (t1 != null)
      return "Illegal argument(s): " + $.S(t1);
    return "Illegal argument(s)";
  }
},

RangeError: {"": "ArgumentError;message",
  toString$0: function(_) {
    return "RangeError: " + $.S(this.message);
  }
},

ConcurrentModificationError: {"": "Object;modifiedObject",
  toString$0: function(_) {
    return "Concurrent modification during iteration: " + $.S($.Error_safeToString(this.modifiedObject)) + ".";
  }
},

RuntimeError: {"": "Object;message",
  toString$0: function(_) {
    return "RuntimeError: " + this.message;
  }
},

_ExceptionImplementation: {"": "Object;message",
  toString$0: function(_) {
    return "Exception: " + this.message;
  }
},

Object: {"": ";",
  $eq: function(_, other) {
    return this === other;
  },
  toString$0: function(_) {
    return "Instance of '" + $.Primitives_objectTypeName(this) + "'";
  }
},

StringBuffer: {"": "Object;_contents",
  get$length: function(_) {
    return this._contents.length;
  },
  write$1: function(obj) {
    if (typeof obj !== "string")
      return this.write$1$bailout(1, obj);
    this._contents = this._contents + obj;
  },
  write$1$bailout: function(state0, obj) {
    var str = typeof obj === "string" ? obj : $.S(obj);
    this._contents = this._contents + str;
  },
  toString$0: function(_) {
    return this._contents;
  }
},

Error_safeToString: function(object) {
  if (false)
    return $.JSArray_methods.toString$0(object);
  return "Instance of '" + $.Primitives_objectTypeName(object) + "'";
},

List_List: function($length) {
  var t1, result;
  t1 = $ === $length;
  if (t1)
    $length = null;
  if (t1)
    return new Array(0);
  if (true)
    throw $.wrapException(new $.ArgumentError("Length must be a positive integer: " + $.S($length) + "."));
  result = new Array($length);
  result.fixed$length = true;
  return result;
}}],
["dart.dom.html", "dart:html", , {
Console: {"": "Object;"}}],
["test", "../src/main.dart", , {
main: function() {
  window;
  $.get$Console__safeConsole();
  if (typeof console != "undefined")
    console.log("hi");
}}],
]);
Isolate.$finishClasses($$, $, null);
$$ = null;

$.wrapException$closure = new $.Closure$wrapException($.wrapException, "wrapException$closure");
$.DartError_toStringWrapper$closure = new $.Closure$toStringWrapper($.DartError_toStringWrapper, "DartError_toStringWrapper$closure");
$.invokeClosure$closure = new $.Closure$invokeClosure($.invokeClosure, "invokeClosure$closure");
$.typeNameInChrome$closure = new $.Closure$typeNameInChrome($.typeNameInChrome, "typeNameInChrome$closure");
$.typeNameInSafari$closure = new $.Closure$typeNameInSafari($.typeNameInSafari, "typeNameInSafari$closure");
$.typeNameInOpera$closure = new $.Closure$typeNameInOpera($.typeNameInOpera, "typeNameInOpera$closure");
$.typeNameInFirefox$closure = new $.Closure$typeNameInFirefox($.typeNameInFirefox, "typeNameInFirefox$closure");
$.typeNameInIE$closure = new $.Closure$typeNameInIE($.typeNameInIE, "typeNameInIE$closure");
$.constructorNameFallback$closure = new $.Closure$constructorNameFallback($.constructorNameFallback, "constructorNameFallback$closure");
$.C_NullThrownError = new $.NullThrownError();
$.C_JSUnknown = new $.JSUnknown();
$.JSArray_methods = $.JSArray.prototype;
$.JSInt_methods = $.JSInt.prototype;
$.dispatchPropertyName = null;
$.Primitives_hashCodeSeed = 0;
$._getTypeNameOf = null;
$.interceptorsByTag = null;
$.leafTags = null;
$.$add$ns = function(receiver, a0) {
  if (typeof receiver == "number" && typeof a0 == "number")
    return receiver + a0;
  return $.getInterceptor$ns(receiver).$add(receiver, a0);
};
$.$eq = function(receiver, a0) {
  if (receiver == null)
    return a0 == null;
  if (typeof receiver != "object")
    return a0 != null && receiver === a0;
  return $.getInterceptor(receiver).$eq(receiver, a0);
};
$.$gt$n = function(receiver, a0) {
  if (typeof receiver == "number" && typeof a0 == "number")
    return receiver > a0;
  return $.getInterceptor$n(receiver).$gt(receiver, a0);
};
$.get$iterator$a = function(receiver) {
  return $.getInterceptor$a(receiver).get$iterator(receiver);
};
$.toString$0 = function(receiver) {
  return $.getInterceptor(receiver).toString$0(receiver);
};
$.getInterceptor = function(receiver) {
  if (typeof receiver == "number") {
    if (Math.floor(receiver) == receiver)
      return $.JSInt.prototype;
    return $.JSDouble.prototype;
  }
  if (typeof receiver == "string")
    return $.JSString.prototype;
  if (receiver == null)
    return $.JSNull.prototype;
  if (typeof receiver == "boolean")
    return $.JSBool.prototype;
  if (receiver.constructor == Array)
    return $.JSArray.prototype;
  if (typeof receiver != "object")
    return receiver;
  if (receiver instanceof $.Object)
    return receiver;
  if (Object.getPrototypeOf(receiver) === Object.prototype)
    return $.Interceptor.prototype;
  return $.getNativeInterceptor(receiver);
};
$.getInterceptor$a = function(receiver) {
  if (receiver == null)
    return receiver;
  if (receiver.constructor == Array)
    return $.JSArray.prototype;
  if (!(receiver instanceof $.Object))
    return $.JSUnknown.prototype;
  return receiver;
};
$.getInterceptor$as = function(receiver) {
  if (typeof receiver == "string")
    return $.JSString.prototype;
  if (receiver == null)
    return receiver;
  if (receiver.constructor == Array)
    return $.JSArray.prototype;
  if (!(receiver instanceof $.Object))
    return $.JSUnknown.prototype;
  return receiver;
};
$.getInterceptor$n = function(receiver) {
  if (typeof receiver == "number")
    return $.JSNumber.prototype;
  if (receiver == null)
    return receiver;
  if (!(receiver instanceof $.Object))
    return $.JSUnknown.prototype;
  return receiver;
};
$.getInterceptor$ns = function(receiver) {
  if (typeof receiver == "number")
    return $.JSNumber.prototype;
  if (typeof receiver == "string")
    return $.JSString.prototype;
  if (receiver == null)
    return receiver;
  if (!(receiver instanceof $.Object))
    return $.JSUnknown.prototype;
  return receiver;
};
$.getInterceptor$s = function(receiver) {
  if (typeof receiver == "string")
    return $.JSString.prototype;
  if (receiver == null)
    return receiver;
  if (!(receiver instanceof $.Object))
    return $.JSUnknown.prototype;
  return receiver;
};
Isolate.$lazy($, "_safeConsole", "Console__safeConsole", "get$Console__safeConsole", function() {
  return new $.Console();
});
// Native classes
$.defineNativeMethods("AutocompleteErrorEvent", $.AutocompleteErrorEvent);

$.defineNativeMethods("DOMError", $.DomError);

$.defineNativeMethods("DOMException", $.DomException);

$.defineNativeMethods("ErrorEvent", $.ErrorEvent);

$.defineNativeMethodsNonleaf("Event", $.Event);

$.defineNativeMethods("EventException", $.EventException);

$.defineNativeMethodsNonleaf("EventTarget", $.EventTarget);

$.defineNativeMethods("FileError", $.FileError);

$.defineNativeMethods("FileException", $.FileException);

$.defineNativeMethods("MediaError", $.MediaError);

$.defineNativeMethods("MediaKeyError", $.MediaKeyError);

$.defineNativeMethods("NavigatorUserMediaError", $.NavigatorUserMediaError);

$.defineNativeMethods("PositionError", $.PositionError);

$.defineNativeMethods("SpeechRecognitionError", $.SpeechRecognitionError);

$.defineNativeMethods("DOMWindow|Window", $.Window);

$.defineNativeMethods("XPathException", $.XPathException);

$.defineNativeMethods("SVGException", $.SvgException);

$.defineNativeMethods("SQLError", $.SqlError);

$.defineNativeMethods("SQLException", $.SqlException);


var $ = null;
Isolate = Isolate.$finishIsolateConstructor(Isolate);
var $ = new Isolate();
$.initializeDispatchProperty(function(a) {
  $.getDispatchProperty = a;
}, "___dart_dispatch_record_ZxYxX_0_", $.Interceptor.prototype);
// BEGIN invoke [main].
if (typeof document !== "undefined" && document.readyState !== "complete") {
  document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {
      if (typeof dartMainRunner === "function") {
        dartMainRunner(function() { $.main(); });
      } else {
        $.main();
      }
    }
  }, false);
} else {
  if (typeof dartMainRunner === "function") {
    dartMainRunner(function() { $.main(); });
  } else {
    $.main();
  }
}
// END invoke [main].
function init() {
  Isolate.$isolateProperties = {};
  function generateAccessor(field, prototype) {
    var len = field.length;
    var code = field.charCodeAt(len - 1);
    code = code >= 60 && code <= 64 ? code - 59 : code >= 123 && code <= 126 ? code - 117 : code >= 37 && code <= 43 ? code - 27 : 0;
    if (code) {
      var getterCode = code & 3;
      var setterCode = code >> 2;
      var accessorName = field = field.substring(0, len - 1);
      var divider = field.indexOf(":");
      if (divider > 0) {
        accessorName = field.substring(0, divider);
        field = field.substring(divider + 1);
      }
      if (getterCode) {
        var args = getterCode & 2 ? "receiver" : "";
        var receiver = getterCode & 1 ? "this" : "receiver";
        var body = "return " + receiver + "." + field;
        prototype["get$" + accessorName] = new Function(args, body);
      }
      if (setterCode) {
        var args = setterCode & 2 ? "receiver, value" : "value";
        var receiver = setterCode & 1 ? "this" : "receiver";
        var body = receiver + "." + field + " = value";
        prototype["set$" + accessorName] = new Function(args, body);
      }
    }
    return field;
  }
  Isolate.$isolateProperties.$generateAccessor = generateAccessor;
  function defineClass(name, cls, fields, prototype) {
    var constructor;
    if (typeof fields == "function") {
      constructor = fields;
    } else {
      var str = "function " + cls + "(";
      var body = "";
      for (var i = 0; i < fields.length; i++) {
        if (i != 0)
          str += ", ";
        var field = generateAccessor(fields[i], prototype);
        var parameter = "parameter_" + field;
        str += parameter;
        body += "this." + field + " = " + parameter + ";\n";
      }
      str += ") {" + body + "}\nreturn " + cls;
      constructor = new Function(str)();
    }
    constructor.prototype = prototype;
    constructor.builtin$cls = name;
    return constructor;
  }
  var supportsProto = false;
  var tmp = defineClass("c", "c", ["f<"], {}).prototype;
  if (tmp.__proto__) {
    tmp.__proto__ = {};
    if (typeof tmp.get$f != "undefined")
      supportsProto = true;
  }
  Isolate.$finishClasses = function(collectedClasses, isolateProperties, existingIsolateProperties) {
    var pendingClasses = {};
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var cls in collectedClasses) {
      if (hasOwnProperty.call(collectedClasses, cls)) {
        var desc = collectedClasses[cls];
        var classData = desc[""], supr, name = cls, fields = classData;
        if (typeof classData == "string") {
          var split = classData.split("/");
          if (split.length == 2) {
            name = split[0];
            fields = split[1];
          }
        }
        if (typeof fields == "string") {
          var s = fields.split(";");
          fields = s[1] == "" ? [] : s[1].split(",");
          supr = s[0];
        } else {
          supr = desc.super;
          if (!!desc.$name)
            name = desc.$name;
        }
        isolateProperties[cls] = defineClass(name, cls, fields, desc);
        if (supr)
          pendingClasses[cls] = supr;
      }
    }
    var finishedClasses = {};
    function finishClass(cls) {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      if (hasOwnProperty.call(finishedClasses, cls))
        return;
      finishedClasses[cls] = true;
      var superclass = pendingClasses[cls];
      if (!superclass || typeof superclass != "string")
        return;
      finishClass(superclass);
      var constructor = isolateProperties[cls];
      var superConstructor = isolateProperties[superclass];
      if (!superConstructor)
        superConstructor = existingIsolateProperties[superclass];
      var prototype = constructor.prototype;
      if (supportsProto) {
        prototype.__proto__ = superConstructor.prototype;
        prototype.constructor = constructor;
      } else {
        function tmp() {
        }
        tmp.prototype = superConstructor.prototype;
        var newPrototype = new tmp();
        constructor.prototype = newPrototype;
        newPrototype.constructor = constructor;
        for (var member in prototype) {
          if (!member)
            continue;
          if (hasOwnProperty.call(prototype, member)) {
            newPrototype[member] = prototype[member];
          }
        }
      }
    }
    for (var cls in pendingClasses)
      finishClass(cls);
  };
  Isolate.$lazy = function(prototype, staticName, fieldName, getterName, lazyValue) {
    var getter = new Function("{ return $." + fieldName + ";}");
    var sentinelUndefined = {};
    var sentinelInProgress = {};
    prototype[fieldName] = sentinelUndefined;
    prototype[getterName] = function() {
      var result = $[fieldName];
      try {
        if (result === sentinelUndefined) {
          $[fieldName] = sentinelInProgress;
          try {
            result = $[fieldName] = lazyValue();
          } finally {
            if (result === sentinelUndefined) {
              if ($[fieldName] === sentinelInProgress) {
                $[fieldName] = null;
              }
            }
          }
        } else {
          if (result === sentinelInProgress)
            $.throwCyclicInit(staticName);
        }
        return result;
      } finally {
        $[getterName] = getter;
      }
    };
  };
  Isolate.$finishIsolateConstructor = function(oldIsolate) {
    var isolateProperties = oldIsolate.$isolateProperties;
    isolateProperties.$currentScript = typeof document == "object" ? document.currentScript || document.scripts[document.scripts.length - 1] : null;
    var isolatePrototype = oldIsolate.prototype;
    var str = "{\n";
    str += "var properties = Isolate.$isolateProperties;\n";
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var staticName in isolateProperties) {
      if (hasOwnProperty.call(isolateProperties, staticName)) {
        str += "this." + staticName + "= properties." + staticName + ";\n";
      }
    }
    str += "}\n";
    var newIsolate = new Function(str);
    newIsolate.prototype = isolatePrototype;
    isolatePrototype.constructor = newIsolate;
    newIsolate.$isolateProperties = isolateProperties;
    newIsolate.makeConstantList = oldIsolate.makeConstantList;
    newIsolate.$finishClasses = oldIsolate.$finishClasses;
    return newIsolate;
  };
}
//@ sourceMappingURL=main.js.map
