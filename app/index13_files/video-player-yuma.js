if (!window.ga) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-79363845-1', 'auto');
    ga('send', 'pageview');
}

!function(e){
    // if("object"==typeof exports&&"undefined"!=typeof module)
    //     module.exports=e();
    // else if("function"==typeof define&&define.amd)
    //     define([],e);
    // else{
        var f;
        "undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.DMVAST=e()
    // }
}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === 'error') {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError('Uncaught, unspecified "error" event.');
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                // slower
                default:
                    len = arguments.length;
                    args = new Array(len - 1);
                    for (i = 1; i < len; i++)
                        args[i - 1] = arguments[i];
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            len = arguments.length;
            args = new Array(len - 1);
            for (i = 1; i < len; i++)
                args[i - 1] = arguments[i];

            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError('listener must be a function');

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit('newListener', type,
                isFunction(listener.listener) ?
                    listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            var m;
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
                if (typeof console.trace === 'function') {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError('listener must be a function');

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

// emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError('listener must be a function');

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit('removeListener', type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit('removeListener', type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === 'removeListener') continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        var ret;
        if (!emitter._events || !emitter._events[type])
            ret = 0;
        else if (isFunction(emitter._events[type]))
            ret = 1;
        else
            ret = emitter._events[type].length;
        return ret;
    };

    function isFunction(arg) {
        return typeof arg === 'function';
    }

    function isNumber(arg) {
        return typeof arg === 'number';
    }

    function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }

},{}],2:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTAd;

    VASTAd = (function() {
        function VASTAd() {
            this.id = null;
            this.errorURLTemplates = [];
            this.impressionURLTemplates = [];
            this.creatives = [];
            this.extensions = {};
        }

        return VASTAd;

    })();

    module.exports = VASTAd;

},{}],3:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTClient, VASTParser, VASTUtil;

    VASTParser = _dereq_('./parser');

    VASTUtil = _dereq_('./util');

    VASTClient = (function() {
        function VASTClient() {}

        VASTClient.cappingFreeLunch = 0;

        VASTClient.cappingMinimumTimeInterval = 0;

        VASTClient.options = {
            withCredentials: false,
            timeout: 0
        };

        VASTClient.get = function(url, opts, cb) {
            var extend, now, options;
            now = +new Date();
            extend = exports.extend = function(object, properties) {
                var key, val;
                for (key in properties) {
                    val = properties[key];
                    object[key] = val;
                }
                return object;
            };
            if (!cb) {
                if (typeof opts === 'function') {
                    cb = opts;
                }
                options = {};
            }
            options = extend(this.options, opts);
            if (this.totalCallsTimeout < now) {
                this.totalCalls = 1;
                this.totalCallsTimeout = now + (60 * 60 * 1000);
            } else {
                this.totalCalls++;
            }
            if (this.cappingFreeLunch >= this.totalCalls) {
                cb(null);
                return;
            }
            if (now - this.lastSuccessfullAd < this.cappingMinimumTimeInterval) {
                cb(null);
                return;
            }
            return VASTParser.parse(url, options, (function(_this) {
                return function(response) {
                    return cb(response);
                };
            })(this));
        };

        (function() {
            var defineProperty, storage;
            storage = VASTUtil.storage;
            defineProperty = Object.defineProperty;
            ['lastSuccessfullAd', 'totalCalls', 'totalCallsTimeout'].forEach(function(property) {
                defineProperty(VASTClient, property, {
                    get: function() {
                        return storage.getItem(property);
                    },
                    set: function(value) {
                        return storage.setItem(property, value);
                    },
                    configurable: false,
                    enumerable: true
                });
            });
            if (VASTClient.totalCalls == null) {
                VASTClient.totalCalls = 0;
            }
            if (VASTClient.totalCallsTimeout == null) {
                VASTClient.totalCallsTimeout = 0;
            }
        })();

        return VASTClient;

    })();

    module.exports = VASTClient;

},{"./parser":12,"./util":18}],4:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTCompanionAd;

    VASTCompanionAd = (function() {
        function VASTCompanionAd() {
            this.id = null;
            this.width = 0;
            this.height = 0;
            this.type = null;
            this.staticResource = null;
            this.htmlResource = null;
            this.iframeResource = null;
            this.companionClickThroughURLTemplate = null;
            this.trackingEvents = {};
        }

        return VASTCompanionAd;

    })();

    module.exports = VASTCompanionAd;

},{}],5:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTCreative, VASTCreativeCompanion, VASTCreativeLinear, VASTCreativeNonLinear,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    VASTCreative = (function() {
        function VASTCreative() {
            this.trackingEvents = {};
        }

        return VASTCreative;

    })();

    VASTCreativeLinear = (function(_super) {
        __extends(VASTCreativeLinear, _super);

        function VASTCreativeLinear() {
            VASTCreativeLinear.__super__.constructor.apply(this, arguments);
            this.type = "linear";
            this.duration = 0;
            this.skipDelay = null;
            this.mediaFiles = [];
            this.videoClickThroughURLTemplate = null;
            this.videoClickTrackingURLTemplates = [];
            this.videoCustomClickURLTemplates = [];
            this.adParameters = null;
        }

        return VASTCreativeLinear;

    })(VASTCreative);

    VASTCreativeNonLinear = (function(_super) {
        __extends(VASTCreativeNonLinear, _super);

        function VASTCreativeNonLinear() {
            VASTCreativeNonLinear.__super__.constructor.apply(this, arguments);
            this.type = "nonlinear";
            this.variations = [];
            this.videoClickTrackingURLTemplates = [];
        }

        return VASTCreativeNonLinear;

    })(VASTCreative);

    VASTCreativeCompanion = (function(_super) {
        __extends(VASTCreativeCompanion, _super);

        function VASTCreativeCompanion() {
            this.type = "companion";
            this.variations = [];
            this.videoClickTrackingURLTemplates = [];
        }

        return VASTCreativeCompanion;

    })(VASTCreative);

    module.exports = {
        VASTCreativeLinear: VASTCreativeLinear,
        VASTCreativeNonLinear: VASTCreativeNonLinear,
        VASTCreativeCompanion: VASTCreativeCompanion
    };

},{}],6:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTAdExtension;

    VASTAdExtension = (function() {
        function VASTAdExtension() {
            this.attributes = {};
            this.children = [];
        }

        return VASTAdExtension;

    })();

    module.exports = VASTAdExtension;

},{}],7:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTAdExtensionChild;

    VASTAdExtensionChild = (function() {
        function VASTAdExtensionChild() {
            this.name = null;
            this.value = null;
            this.attributes = {};
        }

        return VASTAdExtensionChild;

    })();

    module.exports = VASTAdExtensionChild;

},{}],8:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTAdExtensions;

    VASTAdExtensions = (function() {
        function VASTAdExtensions() {
            this.skipTime = 0;
            this.skipTime2 = 0;
            this.linkTxt = '';
            this.controls = 1;
            this.isClickable = 1;
            this.skipAd = '';
            this.addClick = '';
            this.children = [];
        }

        return VASTAdExtensions;

    })();

    module.exports = VASTAdExtensions;

},{}],9:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    module.exports = {
        client: _dereq_('./client'),
        tracker: _dereq_('./tracker'),
        parser: _dereq_('./parser'),
        util: _dereq_('./util')
    };

},{"./client":3,"./parser":12,"./tracker":14,"./util":18}],10:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTMediaFile;

    VASTMediaFile = (function() {
        function VASTMediaFile() {
            this.id = null;
            this.fileURL = null;
            this.deliveryType = "progressive";
            this.mimeType = null;
            this.codec = null;
            this.bitrate = 0;
            this.minBitrate = 0;
            this.maxBitrate = 0;
            this.width = 0;
            this.height = 0;
            this.apiFramework = null;
            this.scalable = null;
            this.maintainAspectRatio = null;
        }

        return VASTMediaFile;

    })();

    module.exports = VASTMediaFile;

},{}],11:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTNonLinear;

    VASTNonLinear = (function() {
        function VASTNonLinear() {
            this.id = null;
            this.width = 0;
            this.height = 0;
            this.minSuggestedDuration = "00:00:00";
            this.apiFramework = "static";
            this.type = null;
            this.staticResource = null;
            this.htmlResource = null;
            this.iframeResource = null;
            this.nonlinearClickThroughURLTemplate = null;
        }

        return VASTNonLinear;

    })();

    module.exports = VASTNonLinear;

},{}],12:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var EventEmitter, URLHandler, VASTAd, VASTAdExtension, VASTAdExtensionChild, VASTAdExtensions, VASTCompanionAd, VASTCreativeCompanion, VASTCreativeLinear, VASTCreativeNonLinear, VASTMediaFile, VASTNonLinear, VASTParser, VASTResponse, VASTUtil,
        __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    URLHandler = _dereq_('./urlhandler');

    VASTResponse = _dereq_('./response');

    VASTAd = _dereq_('./ad');

    VASTAdExtensions = _dereq_('./extensions');

    VASTAdExtension = _dereq_('./extension');

    VASTAdExtensionChild = _dereq_('./extensionchild');

    VASTUtil = _dereq_('./util');

    VASTCreativeLinear = _dereq_('./creative').VASTCreativeLinear;

    VASTCreativeCompanion = _dereq_('./creative').VASTCreativeCompanion;

    VASTCreativeNonLinear = _dereq_('./creative').VASTCreativeNonLinear;

    VASTMediaFile = _dereq_('./mediafile');

    VASTCompanionAd = _dereq_('./companionad');

    VASTNonLinear = _dereq_('./nonlinear');

    EventEmitter = _dereq_('events').EventEmitter;

    VASTParser = (function() {
        var URLTemplateFilters;

        function VASTParser() {}

        URLTemplateFilters = [];

        VASTParser.addURLTemplateFilter = function(func) {
            if (typeof func === 'function') {
                URLTemplateFilters.push(func);
            }
        };

        VASTParser.removeURLTemplateFilter = function() {
            return URLTemplateFilters.pop();
        };

        VASTParser.countURLTemplateFilters = function() {
            return URLTemplateFilters.length;
        };

        VASTParser.clearUrlTemplateFilters = function() {
            return URLTemplateFilters = [];
        };

        VASTParser.parse = function(url, options, cb) {
            if (!cb) {
                if (typeof options === 'function') {
                    cb = options;
                }
                options = {};
            }
            return this._parse(url, null, options, function(err, response) {
                return cb(response);
            });
        };

        VASTParser.vent = new EventEmitter();

        VASTParser.track = function(templates, errorCode) {
            this.vent.emit('VAST-error', errorCode);
            return VASTUtil.track(templates, errorCode);
        };

        VASTParser.on = function(eventName, cb) {
            return this.vent.on(eventName, cb);
        };

        VASTParser.once = function(eventName, cb) {
            return this.vent.once(eventName, cb);
        };

        VASTParser._parse = function(url, parentURLs, options, cb) {
            var filter, _i, _len;
            if (!cb) {
                if (typeof options === 'function') {
                    cb = options;
                }
                options = {};
            }
            for (_i = 0, _len = URLTemplateFilters.length; _i < _len; _i++) {
                filter = URLTemplateFilters[_i];
                url = filter(url);
            }
            if (parentURLs == null) {
                parentURLs = [];
            }
            parentURLs.push(url);
            return URLHandler.get(url, options, (function(_this) {
                return function(err, xml) {
                    var ad, complete, loopIndex, node, response, _j, _k, _len1, _len2, _ref, _ref1;
                    if (err != null) {
                        return cb(err);
                    }
                    response = new VASTResponse();
                    if (!(((xml != null ? xml.documentElement : void 0) != null) && (xml.documentElement.nodeName === "nobanner" || xml.documentElement.nodeName === "VAST"))) {
                        return cb();
                    }
                    if (xml.documentElement.nodeName === "nobanner") {
                        response.nobanner = true;
                        return cb(null, response);
                    }
                    _ref = xml.documentElement.childNodes;
                    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                        node = _ref[_j];
                        if (node.nodeName === 'Error') {
                            response.errorURLTemplates.push(_this.parseNodeText(node));
                        }
                    }
                    _ref1 = xml.documentElement.childNodes;
                    for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
                        node = _ref1[_k];
                        if (node.nodeName === 'Ad') {
                            ad = _this.parseAdElement(node);
                            if (ad != null) {
                                response.ads.push(ad);
                            } else {
                                _this.track(response.errorURLTemplates, {
                                    ERRORCODE: 101
                                });
                            }
                        }
                    }
                    complete = function(errorAlreadyRaised) {
                        var _l, _len3, _ref2;
                        if (errorAlreadyRaised == null) {
                            errorAlreadyRaised = false;
                        }
                        if (!response) {
                            return;
                        }
                        _ref2 = response.ads;
                        for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
                            ad = _ref2[_l];
                            if (ad.nextWrapperURL != null) {
                                return;
                            }
                        }
                        if (response.ads.length === 0) {
                            if (!errorAlreadyRaised) {
                                _this.track(response.errorURLTemplates, {
                                    ERRORCODE: 303
                                });
                            }
                            response = null;
                        }
                        return cb(null, response);
                    };
                    loopIndex = response.ads.length;
                    while (loopIndex--) {
                        ad = response.ads[loopIndex];
                        if (ad.nextWrapperURL == null) {
                            continue;
                        }
                        (function(ad) {
                            var baseURL, protocol, _ref2;
                            if (parentURLs.length >= 10 || (_ref2 = ad.nextWrapperURL, __indexOf.call(parentURLs, _ref2) >= 0)) {
                                _this.track(ad.errorURLTemplates, {
                                    ERRORCODE: 302
                                });
                                response.ads.splice(response.ads.indexOf(ad), 1);
                                complete();
                                return;
                            }
                            if (ad.nextWrapperURL.indexOf('//') === 0) {
                                protocol = location.protocol;
                                ad.nextWrapperURL = "" + protocol + ad.nextWrapperURL;
                            } else if (ad.nextWrapperURL.indexOf('://') === -1) {
                                baseURL = url.slice(0, url.lastIndexOf('/'));
                                ad.nextWrapperURL = "" + baseURL + "/" + ad.nextWrapperURL;
                            }
                            return _this._parse(ad.nextWrapperURL, parentURLs, options, function(err, wrappedResponse) {
                                var creative, errorAlreadyRaised, eventName, index, wrappedAd, _base, _l, _len3, _len4, _len5, _len6, _m, _n, _o, _ref3, _ref4, _ref5, _ref6;
                                errorAlreadyRaised = false;
                                if (err != null) {
                                    _this.track(ad.errorURLTemplates, {
                                        ERRORCODE: 301
                                    });
                                    response.ads.splice(response.ads.indexOf(ad), 1);
                                    errorAlreadyRaised = true;
                                } else if (wrappedResponse == null) {
                                    _this.track(ad.errorURLTemplates, {
                                        ERRORCODE: 303
                                    });
                                    response.ads.splice(response.ads.indexOf(ad), 1);
                                    errorAlreadyRaised = true;
                                } else {
                                    response.errorURLTemplates = response.errorURLTemplates.concat(wrappedResponse.errorURLTemplates);
                                    index = response.ads.indexOf(ad);
                                    response.ads.splice(index, 1);
                                    _ref3 = wrappedResponse.ads;
                                    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                                        wrappedAd = _ref3[_l];
                                        wrappedAd.errorURLTemplates = ad.errorURLTemplates.concat(wrappedAd.errorURLTemplates);
                                        wrappedAd.impressionURLTemplates = ad.impressionURLTemplates.concat(wrappedAd.impressionURLTemplates);
                                        if (ad.trackingEvents != null) {
                                            _ref4 = wrappedAd.creatives;
                                            for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
                                                creative = _ref4[_m];
                                                if (creative.type === 'linear' || creative.type === 'nonlinear') {
                                                    _ref5 = Object.keys(ad.trackingEvents);
                                                    for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
                                                        eventName = _ref5[_n];
                                                        (_base = creative.trackingEvents)[eventName] || (_base[eventName] = []);
                                                        creative.trackingEvents[eventName] = creative.trackingEvents[eventName].concat(ad.trackingEvents[eventName]);
                                                    }
                                                }
                                            }
                                        }
                                        if (ad.videoClickTrackingURLTemplates != null) {
                                            _ref6 = wrappedAd.creatives;
                                            for (_o = 0, _len6 = _ref6.length; _o < _len6; _o++) {
                                                creative = _ref6[_o];
                                                if (creative.type === 'linear' || creative.type === 'nonlinear') {
                                                    creative.videoClickTrackingURLTemplates = creative.videoClickTrackingURLTemplates.concat(ad.videoClickTrackingURLTemplates);
                                                }
                                            }
                                        }
                                        response.ads.splice(index, 0, wrappedAd);
                                    }
                                }
                                delete ad.nextWrapperURL;
                                return complete(errorAlreadyRaised);
                            });
                        })(ad);
                    }
                    return complete();
                };
            })(this));
        };

        VASTParser.childByName = function(node, name) {
            var child, _i, _len, _ref;
            _ref = node.childNodes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                child = _ref[_i];
                if (child.nodeName === name) {
                    return child;
                }
            }
        };

        VASTParser.childsByName = function(node, name) {
            var child, childs, _i, _len, _ref;
            childs = [];
            _ref = node.childNodes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                child = _ref[_i];
                if (child.nodeName === name) {
                    childs.push(child);
                }
            }
            return childs;
        };

        VASTParser.parseAdElement = function(adElement) {
            var adTypeElement, _i, _len, _ref;
            _ref = adElement.childNodes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                adTypeElement = _ref[_i];
                adTypeElement.id = adElement.getAttribute("id");
                if (adTypeElement.nodeName === "Wrapper") {
                    return this.parseWrapperElement(adTypeElement);
                } else if (adTypeElement.nodeName === "InLine") {
                    return this.parseInLineElement(adTypeElement);
                }
            }
        };

        VASTParser.parseWrapperElement = function(wrapperElement) {
            var ad, creative, wrapperCreativeElement, wrapperURLElement, _i, _len, _ref;
            ad = this.parseInLineElement(wrapperElement);
            wrapperURLElement = this.childByName(wrapperElement, "VASTAdTagURI");
            if (wrapperURLElement != null) {
                ad.nextWrapperURL = this.parseNodeText(wrapperURLElement);
            } else {
                wrapperURLElement = this.childByName(wrapperElement, "VASTAdTagURL");
                if (wrapperURLElement != null) {
                    ad.nextWrapperURL = this.parseNodeText(this.childByName(wrapperURLElement, "URL"));
                }
            }
            _ref = ad.creatives;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                creative = _ref[_i];
                wrapperCreativeElement = null;
                if (creative.type === 'linear' || creative.type === 'nonlinear') {
                    wrapperCreativeElement = creative;
                    if (wrapperCreativeElement != null) {
                        if (wrapperCreativeElement.trackingEvents != null) {
                            ad.trackingEvents = wrapperCreativeElement.trackingEvents;
                        }
                        if (wrapperCreativeElement.videoClickTrackingURLTemplates != null) {
                            ad.videoClickTrackingURLTemplates = wrapperCreativeElement.videoClickTrackingURLTemplates;
                        }
                    }
                }
            }
            if (ad.nextWrapperURL != null) {
                return ad;
            }
        };

        VASTParser.parseInLineElement = function(inLineElement) {
            var ad, creative, creativeElement, creativeTypeElement, node, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
            ad = new VASTAd();
            ad.id = inLineElement.id;
            _ref = inLineElement.childNodes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                node = _ref[_i];
                switch (node.nodeName) {
                    case "Error":
                        ad.errorURLTemplates.push(this.parseNodeText(node));
                        break;
                    case "Impression":
                        ad.impressionURLTemplates.push(this.parseNodeText(node));
                        break;
                    case "Creatives":
                        _ref1 = this.childsByName(node, "Creative");
                        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                            creativeElement = _ref1[_j];
                            _ref2 = creativeElement.childNodes;
                            for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                                creativeTypeElement = _ref2[_k];
                                switch (creativeTypeElement.nodeName) {
                                    case "Linear":
                                        creative = this.parseCreativeLinearElement(creativeTypeElement);
                                        if (creative) {
                                            ad.creatives.push(creative);
                                        }
                                        break;
                                    case "NonLinearAds":
                                        creative = this.parseNonLinear(creativeTypeElement);
                                        if (creative) {
                                            ad.creatives.push(creative);
                                        }
                                        break;
                                    case "CompanionAds":
                                        creative = this.parseCompanionAd(creativeTypeElement);
                                        if (creative) {
                                            ad.creatives.push(creative);
                                        }
                                }
                            }
                        }
                        break;
                    case "Extensions":
                        ad.extensions = this.parseExtensions(this.childsByName(node, "Extension"));
                }
            }
            return ad;
        };

        VASTParser.parseExtensions = function(nodes) {
            var childNode, ext, extChild, extChildNodeAttr, extNode, extNodeAttr, extensions, type, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2;
            extensions = new VASTAdExtensions();
            for (_i = 0, _len = nodes.length; _i < _len; _i++) {
                extNode = nodes[_i];
                type = extNode.getAttribute('type');
                switch (type) {
                    case "skipTime":
                        extensions.skipTime = this.parseSkipTime(this.parseNodeText(extNode));
                        break;
                    case "skipTime2":
                        extensions.skipTime2 = this.parseSkipTime(this.parseNodeText(extNode));
                        break;
                    case "linkTxt":
                        extensions.linkTxt = this.parseNodeText(extNode);
                        break;
                    case "controls":
                        extensions.controls = parseInt(this.parseNodeText(extNode) || 0);
                        break;
                    case "isClickable":
                        extensions.isClickable = parseInt(this.parseNodeText(extNode) || 0);
                        break;
                    case "skipAd":
                        extensions.skipAd = this.parseNodeText(extNode);
                        break;
                    case "addClick":
                        extensions.addClick = this.parseNodeText(extNode);
                        break;
                    default:
                        ext = new VASTAdExtension();
                        if (extNode.attributes) {
                            _ref = extNode.attributes;
                            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                                extNodeAttr = _ref[_j];
                                ext.attributes[extNodeAttr.nodeName] = extNodeAttr.nodeValue;
                            }
                        }
                        _ref1 = extNode.childNodes;
                        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
                            childNode = _ref1[_k];
                            if (childNode.nodeName !== '#text') {
                                extChild = new VASTAdExtensionChild();
                                extChild.name = childNode.nodeName;
                                extChild.value = this.parseNodeText(childNode);
                            }
                            if (childNode.attributes) {
                                _ref2 = childNode.attributes;
                                for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
                                    extChildNodeAttr = _ref2[_l];
                                    extChild.attributes[extChildNodeAttr.nodeName] = extChildNodeAttr.nodeValue;
                                }
                            }
                            ext.children.push(extChild);
                            extensions.children.push(ext);
                        }
                }
            }
            return extensions;
        };

        VASTParser.parseCreativeLinearElement = function(creativeElement) {
            var adParamsElement, clickTrackingElement, creative, customClickElement, eventName, maintainAspectRatio, mediaFile, mediaFileElement, mediaFilesElement, offset, percent, scalable, skipOffset, trackingElement, trackingEventsElement, trackingURLTemplate, videoClicksElement, _base, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
            creative = new VASTCreativeLinear();
            creative.duration = this.parseDuration(this.parseNodeText(this.childByName(creativeElement, "Duration")));
            if (creative.duration === -1 && creativeElement.parentNode.parentNode.parentNode.nodeName !== 'Wrapper') {
                return null;
            }
            skipOffset = creativeElement.getAttribute("skipoffset");
            if (skipOffset == null) {
                creative.skipDelay = null;
            } else if (skipOffset.charAt(skipOffset.length - 1) === "%") {
                percent = parseInt(skipOffset, 10);
                creative.skipDelay = creative.duration * (percent / 100);
            } else {
                creative.skipDelay = this.parseDuration(skipOffset);
            }
            videoClicksElement = this.childByName(creativeElement, "VideoClicks");
            if (videoClicksElement != null) {
                creative.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(videoClicksElement, "ClickThrough"));
                _ref = this.childsByName(videoClicksElement, "ClickTracking");
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    clickTrackingElement = _ref[_i];
                    creative.videoClickTrackingURLTemplates.push(this.parseNodeText(clickTrackingElement));
                }
                _ref1 = this.childsByName(videoClicksElement, "CustomClick");
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    customClickElement = _ref1[_j];
                    creative.videoCustomClickURLTemplates.push(this.parseNodeText(customClickElement));
                }
            }
            adParamsElement = this.childByName(creativeElement, "AdParameters");
            if (adParamsElement != null) {
                creative.adParameters = this.parseNodeText(adParamsElement);
            }
            _ref2 = this.childsByName(creativeElement, "TrackingEvents");
            for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                trackingEventsElement = _ref2[_k];
                _ref3 = this.childsByName(trackingEventsElement, "Tracking");
                for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                    trackingElement = _ref3[_l];
                    eventName = trackingElement.getAttribute("event");
                    trackingURLTemplate = this.parseNodeText(trackingElement);
                    if ((eventName != null) && (trackingURLTemplate != null)) {
                        if (eventName === "progress") {
                            offset = trackingElement.getAttribute("offset");
                            if (!offset) {
                                continue;
                            }
                            if (offset.charAt(offset.length - 1) === '%') {
                                eventName = "progress-" + offset;
                            } else {
                                eventName = "progress-" + (Math.round(this.parseDuration(offset)));
                            }
                        }
                        if ((_base = creative.trackingEvents)[eventName] == null) {
                            _base[eventName] = [];
                        }
                        creative.trackingEvents[eventName].push(trackingURLTemplate);
                    }
                }
            }
            _ref4 = this.childsByName(creativeElement, "MediaFiles");
            for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
                mediaFilesElement = _ref4[_m];
                _ref5 = this.childsByName(mediaFilesElement, "MediaFile");
                for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
                    mediaFileElement = _ref5[_n];
                    mediaFile = new VASTMediaFile();
                    mediaFile.id = mediaFileElement.getAttribute("id");
                    mediaFile.fileURL = this.parseNodeText(mediaFileElement);
                    mediaFile.deliveryType = mediaFileElement.getAttribute("delivery");
                    mediaFile.codec = mediaFileElement.getAttribute("codec");
                    mediaFile.mimeType = mediaFileElement.getAttribute("type");
                    mediaFile.apiFramework = mediaFileElement.getAttribute("apiFramework");
                    mediaFile.bitrate = parseInt(mediaFileElement.getAttribute("bitrate") || 0);
                    mediaFile.minBitrate = parseInt(mediaFileElement.getAttribute("minBitrate") || 0);
                    mediaFile.maxBitrate = parseInt(mediaFileElement.getAttribute("maxBitrate") || 0);
                    mediaFile.width = parseInt(mediaFileElement.getAttribute("width") || 0);
                    mediaFile.height = parseInt(mediaFileElement.getAttribute("height") || 0);
                    scalable = mediaFileElement.getAttribute("scalable");
                    if (scalable && typeof scalable === "string") {
                        scalable = scalable.toLowerCase();
                        if (scalable === "true") {
                            mediaFile.scalable = true;
                        } else if (scalable === "false") {
                            mediaFile.scalable = false;
                        }
                    }
                    maintainAspectRatio = mediaFileElement.getAttribute("maintainAspectRatio");
                    if (maintainAspectRatio && typeof maintainAspectRatio === "string") {
                        maintainAspectRatio = maintainAspectRatio.toLowerCase();
                        if (maintainAspectRatio === "true") {
                            mediaFile.maintainAspectRatio = true;
                        } else if (maintainAspectRatio === "false") {
                            mediaFile.maintainAspectRatio = false;
                        }
                    }
                    creative.mediaFiles.push(mediaFile);
                }
            }
            return creative;
        };

        VASTParser.parseNonLinear = function(creativeElement) {
            var creative, eventName, htmlElement, iframeElement, nonlinearAd, nonlinearResource, staticElement, trackingElement, trackingEventsElement, trackingURLTemplate, _base, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
            creative = new VASTCreativeNonLinear();
            _ref = this.childsByName(creativeElement, "TrackingEvents");
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                trackingEventsElement = _ref[_i];
                _ref1 = this.childsByName(trackingEventsElement, "Tracking");
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    trackingElement = _ref1[_j];
                    eventName = trackingElement.getAttribute("event");
                    trackingURLTemplate = this.parseNodeText(trackingElement);
                    if ((eventName != null) && (trackingURLTemplate != null)) {
                        if ((_base = creative.trackingEvents)[eventName] == null) {
                            _base[eventName] = [];
                        }
                        creative.trackingEvents[eventName].push(trackingURLTemplate);
                    }
                }
            }
            _ref2 = this.childsByName(creativeElement, "NonLinear");
            for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                nonlinearResource = _ref2[_k];
                nonlinearAd = new VASTNonLinear();
                nonlinearAd.id = nonlinearResource.getAttribute("id") || null;
                nonlinearAd.width = nonlinearResource.getAttribute("width");
                nonlinearAd.height = nonlinearResource.getAttribute("height");
                nonlinearAd.minSuggestedDuration = nonlinearResource.getAttribute("minSuggestedDuration");
                nonlinearAd.apiFramework = nonlinearResource.getAttribute("apiFramework");
                _ref3 = this.childsByName(nonlinearResource, "HTMLResource");
                for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                    htmlElement = _ref3[_l];
                    nonlinearAd.type = htmlElement.getAttribute("creativeType") || 'text/html';
                    nonlinearAd.htmlResource = this.parseNodeText(htmlElement);
                }
                _ref4 = this.childsByName(nonlinearResource, "IFrameResource");
                for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
                    iframeElement = _ref4[_m];
                    nonlinearAd.type = iframeElement.getAttribute("creativeType") || 0;
                    nonlinearAd.iframeResource = this.parseNodeText(iframeElement);
                }
                _ref5 = this.childsByName(nonlinearResource, "StaticResource");
                for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
                    staticElement = _ref5[_n];
                    nonlinearAd.type = staticElement.getAttribute("creativeType") || 0;
                    nonlinearAd.staticResource = this.parseNodeText(staticElement);
                }
                nonlinearAd.nonlinearClickThroughURLTemplate = this.parseNodeText(this.childByName(nonlinearResource, "NonLinearClickThrough"));
                creative.variations.push(nonlinearAd);
            }
            return creative;
        };

        VASTParser.parseCompanionAd = function(creativeElement) {
            var companionAd, companionResource, creative, eventName, htmlElement, iframeElement, staticElement, trackingElement, trackingEventsElement, trackingURLTemplate, _base, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
            creative = new VASTCreativeCompanion();
            _ref = this.childsByName(creativeElement, "Companion");
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                companionResource = _ref[_i];
                companionAd = new VASTCompanionAd();
                companionAd.id = companionResource.getAttribute("id") || null;
                companionAd.width = companionResource.getAttribute("width");
                companionAd.height = companionResource.getAttribute("height");
                _ref1 = this.childsByName(companionResource, "HTMLResource");
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                    htmlElement = _ref1[_j];
                    companionAd.type = htmlElement.getAttribute("creativeType") || 'text/html';
                    companionAd.htmlResource = this.parseNodeText(htmlElement);
                }
                _ref2 = this.childsByName(companionResource, "IFrameResource");
                for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                    iframeElement = _ref2[_k];
                    companionAd.type = iframeElement.getAttribute("creativeType") || 0;
                    companionAd.iframeResource = this.parseNodeText(iframeElement);
                }
                _ref3 = this.childsByName(companionResource, "StaticResource");
                for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                    staticElement = _ref3[_l];
                    companionAd.type = staticElement.getAttribute("creativeType") || 0;
                    companionAd.staticResource = this.parseNodeText(staticElement);
                }
                _ref4 = this.childsByName(companionResource, "TrackingEvents");
                for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
                    trackingEventsElement = _ref4[_m];
                    _ref5 = this.childsByName(trackingEventsElement, "Tracking");
                    for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
                        trackingElement = _ref5[_n];
                        eventName = trackingElement.getAttribute("event");
                        trackingURLTemplate = this.parseNodeText(trackingElement);
                        if ((eventName != null) && (trackingURLTemplate != null)) {
                            if ((_base = companionAd.trackingEvents)[eventName] == null) {
                                _base[eventName] = [];
                            }
                            companionAd.trackingEvents[eventName].push(trackingURLTemplate);
                        }
                    }
                }
                companionAd.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(companionResource, "CompanionClickThrough"));
                creative.variations.push(companionAd);
            }
            return creative;
        };

        VASTParser.parseDuration = function(durationString) {
            var durationComponents, hours, minutes, seconds, secondsAndMS;
            if (!(durationString != null)) {
                return -1;
            }
            durationComponents = durationString.split(":");
            if (durationComponents.length !== 3) {
                return -1;
            }
            secondsAndMS = durationComponents[2].split(".");
            seconds = parseInt(secondsAndMS[0]);
            if (secondsAndMS.length === 2) {
                seconds += parseFloat("0." + secondsAndMS[1]);
            }
            minutes = parseInt(durationComponents[1] * 60);
            hours = parseInt(durationComponents[0] * 60 * 60);
            if (isNaN(hours || isNaN(minutes || isNaN(seconds || minutes > 60 * 60 || seconds > 60)))) {
                return -1;
            }
            return hours + minutes + seconds;
        };

        VASTParser.parseSkipTime = function(durationString) {
            var durationComponents, seconds;
            if (!(durationString != null)) {
                return -1;
            }
            durationComponents = durationString.split(":");
            if (durationComponents.length !== 2) {
                return -1;
            }
            seconds = parseInt(durationComponents[0]);
            if (isNaN(seconds || seconds > 60)) {
                return -1;
            }
            return seconds;
        };

        VASTParser.parseNodeText = function(node) {
            return node && (node.textContent || node.text || '').trim();
        };

        return VASTParser;

    })();

    module.exports = VASTParser;

},{"./ad":2,"./companionad":4,"./creative":5,"./extension":6,"./extensionchild":7,"./extensions":8,"./mediafile":10,"./nonlinear":11,"./response":13,"./urlhandler":15,"./util":18,"events":1}],13:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTResponse;

    VASTResponse = (function() {
        function VASTResponse() {
            this.ads = [];
            this.errorURLTemplates = [];
            this.nobanner = false;
        }

        return VASTResponse;

    })();

    module.exports = VASTResponse;

},{}],14:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var EventEmitter, VASTClient, VASTCreativeLinear, VASTTracker, VASTUtil,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    VASTClient = _dereq_('./client');

    VASTUtil = _dereq_('./util');

    VASTCreativeLinear = _dereq_('./creative').VASTCreativeLinear;

    EventEmitter = _dereq_('events').EventEmitter;

    VASTTracker = (function(_super) {
        __extends(VASTTracker, _super);

        function VASTTracker(ad, creative) {
            var eventName, events, _ref;
            this.ad = ad;
            this.creative = creative;
            this.muted = false;
            this.impressed = false;
            this.skipable = false;
            this.skipDelayDefault = -1;
            this.trackingEvents = {};
            this.emitAlwaysEvents = ['creativeView', 'start', 'firstQuartile', 'midpoint', 'thirdQuartile', 'complete', 'resume', 'pause', 'rewind', 'skip', 'closeLinear', 'close'];
            _ref = this.creative.trackingEvents;
            for (eventName in _ref) {
                events = _ref[eventName];
                this.trackingEvents[eventName] = events.slice(0);
            }
            if (this.creative instanceof VASTCreativeLinear) {
                this.setDuration(this.creative.duration);
                this.skipDelay = this.creative.skipDelay;
                this.linear = true;
                this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate;
                this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates;
            } else {
                this.skipDelay = -1;
                this.linear = false;
            }
            if (this.ad.extensions.addClick) {
                if (!this.clickTrackingURLTemplates) {
                    this.clickTrackingURLTemplates = [];
                }
                this.clickTrackingURLTemplates.unshift(this.ad.extensions.addClick);
            }
            if (this.ad.extensions.skipAd) {
                if (!this.trackingEvents.skip) {
                    this.trackingEvents.skip = [];
                }
                this.trackingEvents.skip.unshift(this.ad.extensions.skipAd);
            }
            this.on('start', function() {
                VASTClient.lastSuccessfullAd = +new Date();
            });
        }

        VASTTracker.prototype.setDuration = function(duration) {
            this.assetDuration = duration;
            return this.quartiles = {
                'firstQuartile': Math.round(25 * this.assetDuration) / 100,
                'midpoint': Math.round(50 * this.assetDuration) / 100,
                'thirdQuartile': Math.round(75 * this.assetDuration) / 100
            };
        };

        VASTTracker.prototype.setProgress = function(progress) {
            var eventName, events, percent, quartile, skipDelay, time, _i, _len, _ref;
            skipDelay = this.skipDelay === null ? this.skipDelayDefault : this.skipDelay;
            if (skipDelay !== -1 && !this.skipable) {
                if (skipDelay > progress) {
                    this.emit('skip-countdown', skipDelay - progress);
                } else {
                    this.skipable = true;
                    this.emit('skip-countdown', 0);
                }
            }
            if (this.linear && this.assetDuration > 0) {
                events = [];
                if (progress > 0) {
                    events.push("start");
                    percent = Math.round(progress / this.assetDuration * 100);
                    events.push("progress-" + percent + "%");
                    events.push("progress-" + (Math.round(progress)));
                    _ref = this.quartiles;
                    for (quartile in _ref) {
                        time = _ref[quartile];
                        if ((time <= progress && progress <= (time + 1))) {
                            events.push(quartile);
                        }
                    }
                }
                for (_i = 0, _len = events.length; _i < _len; _i++) {
                    eventName = events[_i];
                    this.track(eventName, true);
                }
                if (progress < this.progress) {
                    this.track("rewind");
                }
            }
            return this.progress = progress;
        };

        VASTTracker.prototype.setMuted = function(muted) {
            if (this.muted !== muted) {
                this.track(muted ? "mute" : "unmute");
            }
            return this.muted = muted;
        };

        VASTTracker.prototype.setPaused = function(paused) {
            if (this.paused !== paused) {
                this.track(paused ? "pause" : "resume");
            }
            return this.paused = paused;
        };

        VASTTracker.prototype.setFullscreen = function(fullscreen) {
            if (this.fullscreen !== fullscreen) {
                this.track(fullscreen ? "fullscreen" : "exitFullscreen");
            }
            return this.fullscreen = fullscreen;
        };

        VASTTracker.prototype.setSkipDelay = function(duration) {
            if (typeof duration === 'number') {
                return this.skipDelay = duration;
            }
        };

        VASTTracker.prototype.load = function() {
            if (!this.impressed) {
                this.impressed = true;
                this.trackURLs(this.ad.impressionURLTemplates);
                return this.track("creativeView");
            }
        };

        VASTTracker.prototype.errorWithCode = function(errorCode) {
            return this.trackURLs(this.ad.errorURLTemplates, {
                ERRORCODE: errorCode
            });
        };

        VASTTracker.prototype.complete = function() {
            return this.track("complete");
        };

        VASTTracker.prototype.close = function() {
            return this.track(this.linear ? "closeLinear" : "close");
        };

        VASTTracker.prototype.stop = function() {};

        VASTTracker.prototype.skip = function() {
            this.track("skip");
            return this.trackingEvents = [];
        };

        VASTTracker.prototype.click = function() {
            var clickThroughURL, variables, _ref;
            if ((_ref = this.clickTrackingURLTemplates) != null ? _ref.length : void 0) {
                this.trackURLs(this.clickTrackingURLTemplates);
            }
            if (this.clickThroughURLTemplate != null) {
                if (this.linear) {
                    variables = {
                        CONTENTPLAYHEAD: this.progressFormated()
                    };
                }
                clickThroughURL = VASTUtil.resolveURLTemplates([this.clickThroughURLTemplate], variables)[0];
                return this.emit("clickthrough", clickThroughURL);
            }
        };

        VASTTracker.prototype.track = function(eventName, once) {
            var idx, trackingURLTemplates;
            if (once == null) {
                once = false;
            }
            if (eventName === 'closeLinear' && ((this.trackingEvents[eventName] == null) && (this.trackingEvents['close'] != null))) {
                eventName = 'close';
            }
            trackingURLTemplates = this.trackingEvents[eventName];
            idx = this.emitAlwaysEvents.indexOf(eventName);
            if (trackingURLTemplates != null) {
                this.emit(eventName, '');
                this.trackURLs(trackingURLTemplates);
            } else if (idx !== -1) {
                this.emit(eventName, '');
            }
            if (once === true) {
                delete this.trackingEvents[eventName];
                if (idx > -1) {
                    this.emitAlwaysEvents.splice(idx, 1);
                }
            }
        };

        VASTTracker.prototype.trackURLs = function(URLTemplates, variables) {
            if (variables == null) {
                variables = {};
            }
            if (this.linear) {
                variables["CONTENTPLAYHEAD"] = this.progressFormated();
            }
            return VASTUtil.track(URLTemplates, variables);
        };

        VASTTracker.prototype.progressFormated = function() {
            var h, m, ms, s, seconds;
            seconds = parseInt(this.progress);
            h = seconds / (60 * 60);
            if (h.length < 2) {
                h = "0" + h;
            }
            m = seconds / 60 % 60;
            if (m.length < 2) {
                m = "0" + m;
            }
            s = seconds % 60;
            if (s.length < 2) {
                s = "0" + m;
            }
            ms = parseInt((this.progress - seconds) * 100);
            return "" + h + ":" + m + ":" + s + "." + ms;
        };

        return VASTTracker;

    })(EventEmitter);

    module.exports = VASTTracker;

},{"./client":3,"./creative":5,"./util":18,"events":1}],15:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var URLHandler, flash, xhr;

    xhr = _dereq_('./urlhandlers/xmlhttprequest');

    flash = _dereq_('./urlhandlers/flash');

    URLHandler = (function() {
        function URLHandler() {}

        URLHandler.get = function(url, options, cb) {
            if (!cb) {
                if (typeof options === 'function') {
                    cb = options;
                }
                options = {};
            }
            if (options.urlhandler && options.urlhandler.supported()) {
                return options.urlhandler.get(url, options, cb);
            } else if (typeof window === "undefined" || window === null) {
                return _dereq_('./urlhandlers/' + 'node').get(url, options, cb);
            } else if (xhr.supported()) {
                return xhr.get(url, options, cb);
            } else if (flash.supported()) {
                return flash.get(url, options, cb);
            } else {
                return cb();
            }
        };

        return URLHandler;

    })();

    module.exports = URLHandler;

},{"./urlhandlers/flash":16,"./urlhandlers/xmlhttprequest":17}],16:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var FlashURLHandler;

    FlashURLHandler = (function() {
        function FlashURLHandler() {}

        FlashURLHandler.xdr = function() {
            var xdr;
            if (window.XDomainRequest) {
                xdr = new XDomainRequest();
            }
            return xdr;
        };

        FlashURLHandler.supported = function() {
            return !!this.xdr();
        };

        FlashURLHandler.get = function(url, options, cb) {
            var xdr, xmlDocument;
            if (xmlDocument = typeof window.ActiveXObject === "function" ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) {
                xmlDocument.async = false;
            } else {
                return cb();
            }
            xdr = this.xdr();
            xdr.open('GET', url);
            xdr.timeout = options.timeout || 0;
            xdr.withCredentials = options.withCredentials || false;
            xdr.send();
            xdr.onprogress = function() {};
            return xdr.onload = function() {
                xmlDocument.loadXML(xdr.responseText);
                return cb(null, xmlDocument);
            };
        };

        return FlashURLHandler;

    })();

    module.exports = FlashURLHandler;

},{}],17:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var XHRURLHandler;

    XHRURLHandler = (function() {
        function XHRURLHandler() {}

        XHRURLHandler.xhr = function() {
            var xhr;
            xhr = new window.XMLHttpRequest();
            if ('withCredentials' in xhr) {
                return xhr;
            }
        };

        XHRURLHandler.supported = function() {
            return !!this.xhr();
        };

        XHRURLHandler.get = function(url, options, cb) {
            var xhr;
            if (window.location.protocol === 'https:' && url.indexOf('http://') === 0) {
                return cb(new Error('Cannot go from HTTPS to HTTP.'));
            }
            try {
                xhr = this.xhr();
                xhr.open('GET', url);
                xhr.timeout = options.timeout || 0;
                xhr.withCredentials = options.withCredentials || false;
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType('text/xml');
                }
                xhr.send();
                return xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        return cb(null, xhr.responseXML);
                    }
                };
            } catch (_error) {
                return cb();
            }
        };

        return XHRURLHandler;

    })();

    module.exports = XHRURLHandler;

},{}],18:[function(_dereq_,module,exports){
// Generated by CoffeeScript 1.7.1
    var VASTUtil;

    VASTUtil = (function() {
        function VASTUtil() {}

        VASTUtil.track = function(URLTemplates, variables) {
            var URL, URLs, i, _i, _len, _results;
            URLs = this.resolveURLTemplates(URLTemplates, variables);
            _results = [];
            for (_i = 0, _len = URLs.length; _i < _len; _i++) {
                URL = URLs[_i];
                if (typeof window !== "undefined" && window !== null) {
                    i = new Image();
                    _results.push(i.src = URL);
                } else {

                }
            }
            return _results;
        };

        VASTUtil.resolveURLTemplates = function(URLTemplates, variables) {
            var URLTemplate, URLs, key, macro1, macro2, resolveURL, value, _i, _len;
            URLs = [];
            if (variables == null) {
                variables = {};
            }
            if (!("CACHEBUSTING" in variables)) {
                variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
            }
            variables["random"] = variables["CACHEBUSTING"];
            for (_i = 0, _len = URLTemplates.length; _i < _len; _i++) {
                URLTemplate = URLTemplates[_i];
                resolveURL = URLTemplate;
                if (!resolveURL) {
                    continue;
                }
                for (key in variables) {
                    value = variables[key];
                    macro1 = "[" + key + "]";
                    macro2 = "%%" + key + "%%";
                    resolveURL = resolveURL.replace(macro1, value);
                    resolveURL = resolveURL.replace(macro2, value);
                }
                URLs.push(resolveURL);
            }
            return URLs;
        };

        VASTUtil.storage = (function() {
            var data, isDisabled, storage, storageError;
            try {
                storage = typeof window !== "undefined" && window !== null ? window.localStorage || window.sessionStorage : null;
            } catch (_error) {
                storageError = _error;
                storage = null;
            }
            isDisabled = function(store) {
                var e, testValue;
                try {
                    testValue = '__VASTUtil__';
                    store.setItem(testValue, testValue);
                    if (store.getItem(testValue) !== testValue) {
                        return true;
                    }
                } catch (_error) {
                    e = _error;
                    return true;
                }
                return false;
            };
            if ((storage == null) || isDisabled(storage)) {
                data = {};
                storage = {
                    length: 0,
                    getItem: function(key) {
                        return data[key];
                    },
                    setItem: function(key, value) {
                        data[key] = value;
                        this.length = Object.keys(data).length;
                    },
                    removeItem: function(key) {
                        delete data[key];
                        this.length = Object.keys(data).length;
                    },
                    clear: function() {
                        data = {};
                        this.length = 0;
                    }
                };
            }
            return storage;
        })();

        return VASTUtil;

    })();

    module.exports = VASTUtil;

},{}]},{},[9])
(9)
});

if (!window.MobileDetect) {
// THIS FILE IS GENERATED - DO NOT EDIT!
    /*!mobile-detect v1.3.3 2016-07-31*/
    /*global module:false, define:false*/
    /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
    (function (define, undefined) {
        define(function () {
            'use strict';

            var impl = {};

            impl.mobileDetectRules = {
                "phones": {
                    "iPhone": "\\biPhone\\b|\\biPod\\b",
                    "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
                    "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                    "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                    "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                    "Samsung": "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F",
                    "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                    "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                    "Asus": "Asus.*Galaxy|PadFone.*Mobile",
                    "NokiaLumia": "Lumia [0-9]{3,4}",
                    "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    "Palm": "PalmSource|Palm",
                    "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                    "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                    "Alcatel": "Alcatel",
                    "Nintendo": "Nintendo 3DS",
                    "Amoi": "Amoi",
                    "INQ": "INQ",
                    "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                },
                "tablets": {
                    "iPad": "iPad|iPad.*Mobile",
                    "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
                    "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561",
                    "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",
                    "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                    "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                    "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA",
                    "BlackBerryTablet": "PlayBook|RIM Tablet",
                    "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                    "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20",
                    "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                    "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                    "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                    "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                    "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    "ArnovaTablet": "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                    "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                    "IRUTablet": "M702pro",
                    "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                    "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    "NokiaLumiaTablet": "Lumia 2520",
                    "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                    "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                    "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                    "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                    "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    "FlyTablet": "IQ310|Fly Vision",
                    "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
                    "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                    "NecTablet": "\\bN-06D|\\bN-08D",
                    "PantechTablet": "Pantech.*P4100",
                    "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
                    "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                    "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    "NabiTablet": "Android.*\\bNabi",
                    "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    "PlaystationTablet": "Playstation.*(Portable|Vita)",
                    "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                    "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    "GalapadTablet": "Android.*\\bG1\\b",
                    "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
                    "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                    "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    "DPSTablet": "DPS Dream 9|DPS Dual 7",
                    "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
                    "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                    "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    "iMobileTablet": "i-mobile i-note",
                    "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
                    "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    "AMPETablet": "Android.* A78 ",
                    "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    "TecnoTablet": "TECNO P9",
                    "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    "FX2Tablet": "FX2 PAD7|FX2 PAD10",
                    "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                    "CaptivaTablet": "CAPTIVA PAD",
                    "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                    "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                    "JaytechTablet": "TPC-PA762",
                    "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
                    "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                    "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                    "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                    "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                    "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                    "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                    "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                    "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                    "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
                    "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                    "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                    "UbislateTablet": "UbiSlate[\\s]?7C",
                    "PocketBookTablet": "Pocketbook",
                    "KocasoTablet": "\\b(TB-1207)\\b",
                    "Hudl": "Hudl HT7S3|Hudl 2",
                    "TelstraTablet": "T-Hub2",
                    "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"
                },
                "oss": {
                    "AndroidOS": "Android",
                    "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
                    "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                    "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                    "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
                    "MeeGoOS": "MeeGo",
                    "MaemoOS": "Maemo",
                    "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
                    "webOS": "webOS|hpwOS",
                    "badaOS": "\\bBada\\b",
                    "BREWOS": "BREW"
                },
                "uas": {
                    "Vivaldi": "Vivaldi",
                    "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
                    "Dolfin": "\\bDolfin\\b",
                    "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
                    "Skyfire": "Skyfire",
                    "Edge": "Mobile Safari\/[.0-9]* Edge",
                    "IE": "IEMobile|MSIEMobile",
                    "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                    "Bolt": "bolt",
                    "TeaShark": "teashark",
                    "Blazer": "Blazer",
                    "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                    "Tizen": "Tizen",
                    "UCBrowser": "UC.*Browser|UCWEB",
                    "baiduboxapp": "baiduboxapp",
                    "baidubrowser": "baidubrowser",
                    "DiigoBrowser": "DiigoBrowser",
                    "Puffin": "Puffin",
                    "Mercury": "\\bMercury\\b",
                    "ObigoBrowser": "Obigo",
                    "NetFront": "NF-Browser",
                    "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
                },
                "props": {
                    "Mobile": "Mobile\/[VER]",
                    "Build": "Build\/[VER]",
                    "Version": "Version\/[VER]",
                    "VendorID": "VendorID\/[VER]",
                    "iPad": "iPad.*CPU[a-z ]+[VER]",
                    "iPhone": "iPhone.*CPU[a-z ]+[VER]",
                    "iPod": "iPod.*CPU[a-z ]+[VER]",
                    "Kindle": "Kindle\/[VER]",
                    "Chrome": [
                        "Chrome\/[VER]",
                        "CriOS\/[VER]",
                        "CrMo\/[VER]"
                    ],
                    "Coast": [
                        "Coast\/[VER]"
                    ],
                    "Dolfin": "Dolfin\/[VER]",
                    "Firefox": "Firefox\/[VER]",
                    "Fennec": "Fennec\/[VER]",
                    "Edge": "Edge\/[VER]",
                    "IE": [
                        "IEMobile\/[VER];",
                        "IEMobile [VER]",
                        "MSIE [VER];",
                        "Trident\/[0-9.]+;.*rv:[VER]"
                    ],
                    "NetFront": "NetFront\/[VER]",
                    "NokiaBrowser": "NokiaBrowser\/[VER]",
                    "Opera": [
                        " OPR\/[VER]",
                        "Opera Mini\/[VER]",
                        "Version\/[VER]"
                    ],
                    "Opera Mini": "Opera Mini\/[VER]",
                    "Opera Mobi": "Version\/[VER]",
                    "UC Browser": "UC Browser[VER]",
                    "MQQBrowser": "MQQBrowser\/[VER]",
                    "MicroMessenger": "MicroMessenger\/[VER]",
                    "baiduboxapp": "baiduboxapp\/[VER]",
                    "baidubrowser": "baidubrowser\/[VER]",
                    "Iron": "Iron\/[VER]",
                    "Safari": [
                        "Version\/[VER]",
                        "Safari\/[VER]"
                    ],
                    "Skyfire": "Skyfire\/[VER]",
                    "Tizen": "Tizen\/[VER]",
                    "Webkit": "webkit[ \/][VER]",
                    "PaleMoon": "PaleMoon\/[VER]",
                    "Gecko": "Gecko\/[VER]",
                    "Trident": "Trident\/[VER]",
                    "Presto": "Presto\/[VER]",
                    "Goanna": "Goanna\/[VER]",
                    "iOS": " \\bi?OS\\b [VER][ ;]{1}",
                    "Android": "Android [VER]",
                    "BlackBerry": [
                        "BlackBerry[\\w]+\/[VER]",
                        "BlackBerry.*Version\/[VER]",
                        "Version\/[VER]"
                    ],
                    "BREW": "BREW [VER]",
                    "Java": "Java\/[VER]",
                    "Windows Phone OS": [
                        "Windows Phone OS [VER]",
                        "Windows Phone [VER]"
                    ],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE\/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    "Symbian": [
                        "SymbianOS\/[VER]",
                        "Symbian\/[VER]"
                    ],
                    "webOS": [
                        "webOS\/[VER]",
                        "hpwOS\/[VER];"
                    ]
                },
                "utils": {
                    "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                    "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
                    "DesktopMode": "WPDesktop",
                    "TV": "SonyDTV|HbbTV",
                    "WebKit": "(webkit)[ \/]([\\w.]+)",
                    "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                    "Watch": "SM-V700"
                }
            };

            // following patterns come from http://detectmobilebrowsers.com/
            impl.detectMobileBrowsers = {
                fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                tabletPattern: /android|ipad|playbook|silk/i
            };

            var hasOwnProp = Object.prototype.hasOwnProperty,
                isArray;

            impl.FALLBACK_PHONE = 'UnknownPhone';
            impl.FALLBACK_TABLET = 'UnknownTablet';
            impl.FALLBACK_MOBILE = 'UnknownMobile';

            isArray = ('isArray' in Array) ?
                Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

            function equalIC(a, b) {
                return a != null && b != null && a.toLowerCase() === b.toLowerCase();
            }

            function containsIC(array, value) {
                var valueLC, i, len = array.length;
                if (!len || !value) {
                    return false;
                }
                valueLC = value.toLowerCase();
                for (i = 0; i < len; ++i) {
                    if (valueLC === array[i].toLowerCase()) {
                        return true;
                    }
                }
                return false;
            }

            function convertPropsToRegExp(object) {
                for (var key in object) {
                    if (hasOwnProp.call(object, key)) {
                        object[key] = new RegExp(object[key], 'i');
                    }
                }
            }

            (function init() {
                var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
                for (key in mobileDetectRules.props) {
                    if (hasOwnProp.call(mobileDetectRules.props, key)) {
                        values = mobileDetectRules.props[key];
                        if (!isArray(values)) {
                            values = [values];
                        }
                        len = values.length;
                        for (i = 0; i < len; ++i) {
                            value = values[i];
                            verPos = value.indexOf('[VER]');
                            if (verPos >= 0) {
                                value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                            }
                            values[i] = new RegExp(value, 'i');
                        }
                        mobileDetectRules.props[key] = values;
                    }
                }
                convertPropsToRegExp(mobileDetectRules.oss);
                convertPropsToRegExp(mobileDetectRules.phones);
                convertPropsToRegExp(mobileDetectRules.tablets);
                convertPropsToRegExp(mobileDetectRules.uas);
                convertPropsToRegExp(mobileDetectRules.utils);

                // copy some patterns to oss0 which are tested first (see issue#15)
                mobileDetectRules.oss0 = {
                    WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
                    WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
                };
            }());

            /**
             * Test userAgent string against a set of rules and find the first matched key.
             * @param {Object} rules (key is String, value is RegExp)
             * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
             * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
             * @private
             */
            impl.findMatch = function(rules, userAgent) {
                for (var key in rules) {
                    if (hasOwnProp.call(rules, key)) {
                        if (rules[key].test(userAgent)) {
                            return key;
                        }
                    }
                }
                return null;
            };

            /**
             * Test userAgent string against a set of rules and return an array of matched keys.
             * @param {Object} rules (key is String, value is RegExp)
             * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
             * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
             * @private
             */
            impl.findMatches = function(rules, userAgent) {
                var result = [];
                for (var key in rules) {
                    if (hasOwnProp.call(rules, key)) {
                        if (rules[key].test(userAgent)) {
                            result.push(key);
                        }
                    }
                }
                return result;
            };

            /**
             * Check the version of the given property in the User-Agent.
             *
             * @param {String} propertyName
             * @param {String} userAgent
             * @return {String} version or <tt>null</tt> if version not found
             * @private
             */
            impl.getVersionStr = function (propertyName, userAgent) {
                var props = impl.mobileDetectRules.props, patterns, i, len, match;
                if (hasOwnProp.call(props, propertyName)) {
                    patterns = props[propertyName];
                    len = patterns.length;
                    for (i = 0; i < len; ++i) {
                        match = patterns[i].exec(userAgent);
                        if (match !== null) {
                            return match[1];
                        }
                    }
                }
                return null;
            };

            /**
             * Check the version of the given property in the User-Agent.
             * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
             *
             * @param {String} propertyName
             * @param {String} userAgent
             * @return {Number} version or <tt>NaN</tt> if version not found
             * @private
             */
            impl.getVersion = function (propertyName, userAgent) {
                var version = impl.getVersionStr(propertyName, userAgent);
                return version ? impl.prepareVersionNo(version) : NaN;
            };

            /**
             * Prepare the version number.
             *
             * @param {String} version
             * @return {Number} the version number as a floating number
             * @private
             */
            impl.prepareVersionNo = function (version) {
                var numbers;

                numbers = version.split(/[a-z._ \/\-]/i);
                if (numbers.length === 1) {
                    version = numbers[0];
                }
                if (numbers.length > 1) {
                    version = numbers[0] + '.';
                    numbers.shift();
                    version += numbers.join('');
                }
                return Number(version);
            };

            impl.isMobileFallback = function (userAgent) {
                return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
                    impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
            };

            impl.isTabletFallback = function (userAgent) {
                return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
            };

            impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
                if (cache.mobile !== undefined) {
                    return;
                }
                var phone, tablet, phoneSized;

                // first check for stronger tablet rules, then phone (see issue#5)
                tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
                if (tablet) {
                    cache.mobile = cache.tablet = tablet;
                    cache.phone = null;
                    return; // unambiguously identified as tablet
                }

                phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
                if (phone) {
                    cache.mobile = cache.phone = phone;
                    cache.tablet = null;
                    return; // unambiguously identified as phone
                }

                // our rules haven't found a match -> try more general fallback rules
                if (impl.isMobileFallback(userAgent)) {
                    phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
                    if (phoneSized === undefined) {
                        cache.mobile = impl.FALLBACK_MOBILE;
                        cache.tablet = cache.phone = null;
                    } else if (phoneSized) {
                        cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                        cache.tablet = null;
                    } else {
                        cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                        cache.phone = null;
                    }
                } else if (impl.isTabletFallback(userAgent)) {
                    cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                    cache.phone = null;
                } else {
                    // not mobile at all!
                    cache.mobile = cache.tablet = cache.phone = null;
                }
            };

            // t is a reference to a MobileDetect instance
            impl.mobileGrade = function (t) {
                // impl note:
                // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
                // When changes are made in Mobile_Detect.php, copy this method and replace:
                //     $this-> / t.
                //     self::MOBILE_GRADE_(.) / '$1'
                //     , self::VERSION_TYPE_FLOAT / (nothing)
                //     isIOS() / os('iOS')
                //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
                var $isMobile = t.mobile() !== null;

                if (
                    // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
                t.os('iOS') && t.version('iPad')>=4.3 ||
                t.os('iOS') && t.version('iPhone')>=3.1 ||
                t.os('iOS') && t.version('iPod')>=3.1 ||

                // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
                // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
                // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
                // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
                ( t.version('Android')>2.1 && t.is('Webkit') ) ||

                // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
                t.version('Windows Phone OS')>=7.0 ||

                // Blackberry 7 - Tested on BlackBerry Torch 9810
                // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
                t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
                // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
                t.match('Playbook.*Tablet') ||

                // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
                ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
                // Palm WebOS 3.0  - Tested on HP TouchPad
                t.match('hp.*TouchPad') ||

                // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
                ( t.is('Firefox') && t.version('Firefox')>=12 ) ||

                // Chrome for Android - Tested on Android 4.0, 4.1 device
                ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||

                // Skyfire 4.1 - Tested on Android 2.3 device
                ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||

                // Opera Mobile 11.5-12: Tested on Android 2.3
                ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||

                // Meego 1.2 - Tested on Nokia 950 and N9
                t.is('MeeGoOS') ||

                // Tizen (pre-release) - Tested on early hardware
                t.is('Tizen') ||

                // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
                // @todo: more tests here!
                t.is('Dolfin') && t.version('Bada')>=2.0 ||

                // UC Browser - Tested on Android 2.3 device
                ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||

                // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
                ( t.match('Kindle Fire') ||
                t.is('Kindle') && t.version('Kindle')>=3.0 ) ||

                // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
                t.is('AndroidOS') && t.is('NookTablet') ||

                // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
                t.version('Chrome')>=11 && !$isMobile ||

                // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
                t.version('Safari')>=5.0 && !$isMobile ||

                // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
                t.version('Firefox')>=4.0 && !$isMobile ||

                // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
                t.version('MSIE')>=7.0 && !$isMobile ||

                // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
                // @reference: http://my.opera.com/community/openweb/idopera/
                t.version('Opera')>=10 && !$isMobile

                ){
                    return 'A';
                }

                if (
                    t.os('iOS') && t.version('iPad')<4.3 ||
                    t.os('iOS') && t.version('iPhone')<3.1 ||
                    t.os('iOS') && t.version('iPod')<3.1 ||

                    // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
                    t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||

                    //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
                    ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
                    (t.version('Android')>=2.3 || t.is('iOS')) ) ||

                    // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
                    t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

                    // @todo: report this (tested on Nokia N71)
                    t.version('Opera Mobi')>=11 && t.is('SymbianOS')
                ){
                    return 'B';
                }

                if (
                    // Blackberry 4.x - Tested on the Curve 8330
                t.version('BlackBerry')<5.0 ||
                // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
                t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2

                ){
                    return 'C';
                }

                //All older smartphone platforms and featurephones - Any device that doesn't support media queries
                //will receive the basic, C grade experience.
                return 'C';
            };

            impl.detectOS = function (ua) {
                return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
                    impl.findMatch(impl.mobileDetectRules.oss, ua);
            };

            impl.getDeviceSmallerSide = function () {
                return window.screen.width < window.screen.height ?
                    window.screen.width :
                    window.screen.height;
            };

            /**
             * Constructor for MobileDetect object.
             * <br>
             * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
             * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
             *     <strong>Find information how to download and install:</strong>
             *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
             * </div>
             *
             * @example <pre>
             *     var md = new MobileDetect(window.navigator.userAgent);
             *     if (md.mobile()) {
         *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
         *     }
             * </pre>
             *
             * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
             * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
             *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
             *        as phone.
             *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
             *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
             *        for Android</a>.<br>
             *        If you provide a value < 0, then this "fuzzy" check is disabled.
             * @constructor
             * @global
             */
            function MobileDetect(userAgent, maxPhoneWidth) {
                this.ua = userAgent || '';
                this._cache = {};
                //600dp is typical 7" tablet minimum width
                this.maxPhoneWidth = maxPhoneWidth || 600;
            }

            MobileDetect.prototype = {
                constructor: MobileDetect,

                /**
                 * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
                 * <br>
                 * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
                 * <br>
                 * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
                 * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
                 * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
                 * <code>UnknownMobile</code> is returned.<br>
                 * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
                 * <br>
                 * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
                 * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
                 * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
                 * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
                 * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
                 * <br>
                 * In most cases you will use the return value just as a boolean.
                 *
                 * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
                 * @function MobileDetect#mobile
                 */
                mobile: function () {
                    impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                    return this._cache.mobile;
                },

                /**
                 * Returns the detected phone type/family string or <tt>null</tt>.
                 * <br>
                 * The returned tablet (family or producer) is one of following keys:<br>
                 * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
                 * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
                 * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
                 * <br>
                 * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
                 * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
                 * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
                 * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
                 * <br>
                 * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
                 * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
                 * will return <code>UnknownMobile</code>.<br>
                 * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
                 * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
                 * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
                 * <br>
                 * In most cases you will use the return value just as a boolean.
                 *
                 * @returns {String} the key of the phone family or producer, e.g. "iPhone"
                 * @function MobileDetect#phone
                 */
                phone: function () {
                    impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                    return this._cache.phone;
                },

                /**
                 * Returns the detected tablet type/family string or <tt>null</tt>.
                 * <br>
                 * The returned tablet (family or producer) is one of following keys:<br>
                 * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
                 * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
                 * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
                 * DellTablet, YarvikTablet, MedionTablet, ArnovaTablet, IntensoTablet, IRUTablet,
                 * MegafonTablet, EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet,
                 * NokiaLumiaTablet, SonyTablet, PhilipsTablet, CubeTablet, CobyTablet, MIDTablet,
                 * MSITablet, SMiTTablet, RockChipTablet, FlyTablet, bqTablet, HuaweiTablet,
                 * NecTablet, PantechTablet, BronchoTablet, VersusTablet, ZyncTablet,
                 * PositivoTablet, NabiTablet, KoboTablet, DanewTablet, TexetTablet,
                 * PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
                 * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
                 * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
                 * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
                 * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
                 * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
                 * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
                 * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
                 * OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet, OndaTablet,
                 * JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet, LavaTablet,
                 * AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MiTablet, NibiruTablet,
                 * NexoTablet, LeaderTablet, UbislateTablet, PocketBookTablet, KocasoTablet, Hudl,
                 * TelstraTablet, GenericTablet</tt><br>
                 * <br>
                 * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
                 * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
                 * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
                 * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
                 * <br>
                 * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
                 * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
                 * will return <code>UnknownMobile</code>.<br>
                 * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
                 * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
                 * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
                 * <br>
                 * In most cases you will use the return value just as a boolean.
                 *
                 * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
                 * @function MobileDetect#tablet
                 */
                tablet: function () {
                    impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                    return this._cache.tablet;
                },

                /**
                 * Returns the (first) detected user-agent string or <tt>null</tt>.
                 * <br>
                 * The returned user-agent is one of following keys:<br>
                 * <br><tt>Vivaldi, Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark,
                 * Blazer, Safari, Tizen, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser,
                 * Puffin, Mercury, ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
                 * <br>
                 * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
                 * cases where a mobile device pretends to be more than one particular browser. You can get the
                 * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
                 * providing one of the defined keys as first argument to {@link MobileDetect#is}.
                 *
                 * @returns {String} the key for the detected user-agent or <tt>null</tt>
                 * @function MobileDetect#userAgent
                 */
                userAgent: function () {
                    if (this._cache.userAgent === undefined) {
                        this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
                    }
                    return this._cache.userAgent;
                },

                /**
                 * Returns all detected user-agent strings.
                 * <br>
                 * The array is empty or contains one or more of following keys:<br>
                 * <br><tt>Vivaldi, Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark,
                 * Blazer, Safari, Tizen, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser,
                 * Puffin, Mercury, ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
                 * <br>
                 * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
                 * cases where a mobile device pretends to be more than one particular browser. You can get the
                 * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
                 * providing one of the defined keys as first argument to {@link MobileDetect#is}.
                 *
                 * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
                 * @function MobileDetect#userAgents
                 */
                userAgents: function () {
                    if (this._cache.userAgents === undefined) {
                        this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
                    }
                    return this._cache.userAgents;
                },

                /**
                 * Returns the detected operating system string or <tt>null</tt>.
                 * <br>
                 * The operating system is one of following keys:<br>
                 * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
                 * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
                 *
                 * @returns {String} the key for the detected operating system.
                 * @function MobileDetect#os
                 */
                os: function () {
                    if (this._cache.os === undefined) {
                        this._cache.os = impl.detectOS(this.ua);
                    }
                    return this._cache.os;
                },

                /**
                 * Get the version (as Number) of the given property in the User-Agent.
                 * <br>
                 * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
                 *
                 * @param {String} key a key defining a thing which has a version.<br>
                 *        You can use one of following keys:<br>
                 * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
                 * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
                 * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
                 * Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident, Presto, Goanna,
                 * iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows Phone, Windows
                 * CE, Windows NT, Symbian, webOS</tt><br>
                 *
                 * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
                 *          Be careful when comparing this value with '==' operator!
                 * @function MobileDetect#version
                 */
                version: function (key) {
                    return impl.getVersion(key, this.ua);
                },

                /**
                 * Get the version (as String) of the given property in the User-Agent.
                 * <br>
                 *
                 * @param {String} key a key defining a thing which has a version.<br>
                 *        You can use one of following keys:<br>
                 * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
                 * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
                 * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
                 * Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident, Presto, Goanna,
                 * iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows Phone, Windows
                 * CE, Windows NT, Symbian, webOS</tt><br>
                 *
                 * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
                 *
                 * @function MobileDetect#versionStr
                 */
                versionStr: function (key) {
                    return impl.getVersionStr(key, this.ua);
                },

                /**
                 * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
                 *
                 * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
                 *        tablet family.<br>
                 *        For a complete list of possible values, see {@link MobileDetect#userAgent},
                 *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
                 *        Additionally you have following keys:<br>
                 * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
                 *
                 * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
                 *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
                 * @function MobileDetect#is
                 */
                is: function (key) {
                    return containsIC(this.userAgents(), key) ||
                        equalIC(key, this.os()) ||
                        equalIC(key, this.phone()) ||
                        equalIC(key, this.tablet()) ||
                        containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
                },

                /**
                 * Do a quick test against navigator::userAgent.
                 *
                 * @param {String|RegExp} pattern the pattern, either as String or RegExp
                 *                        (a string will be converted to a case-insensitive RegExp).
                 * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
                 * @function MobileDetect#match
                 */
                match: function (pattern) {
                    if (!(pattern instanceof RegExp)) {
                        pattern = new RegExp(pattern, 'i');
                    }
                    return pattern.test(this.ua);
                },

                /**
                 * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
                 * <br>
                 * Obviously this method makes sense in browser environments only (not for Node.js)!
                 * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
                 *        The argument is optional and if not present or falsy, the value of the constructor is taken.
                 * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
                 *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
                 *          Will always return <code>undefined</code> server-side.
                 */
                isPhoneSized: function (maxPhoneWidth) {
                    return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
                },

                /**
                 * Returns the mobile grade ('A', 'B', 'C').
                 *
                 * @returns {String} one of the mobile grades ('A', 'B', 'C').
                 * @function MobileDetect#mobileGrade
                 */
                mobileGrade: function () {
                    if (this._cache.grade === undefined) {
                        this._cache.grade = impl.mobileGrade(this);
                    }
                    return this._cache.grade;
                }
            };

            // environment-dependent
            if (typeof window !== 'undefined' && window.screen) {
                MobileDetect.isPhoneSized = function (maxPhoneWidth) {
                    return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
                };
            } else {
                MobileDetect.isPhoneSized = function () {};
            }

            // should not be replaced by a completely new object - just overwrite existing methods
            MobileDetect._impl = impl;

            MobileDetect.version = '1.3.3 2016-07-31';

            return MobileDetect;
        }); // end of call of define()
    })((function (undefined) {
        if (typeof window !== 'undefined') {
            return function (factory) { window.MobileDetect = factory(); };
        } else {
            // please file a bug if you get this error!
            throw new Error('unknown environment');
        }
    })());
}

/*** URL ***/
function URLParser(url) {
    if ((url == null) || (url.length == 0)) url = document.location.href;

    this.url = url;
    this.urlParts = this.url.split("?");
    this.parameters = {};

    function removeAnchor(value) {
        if (typeof value == 'undefined') {
            return value;
        }
        parts = value.split('#');
        return parts[0];
    }

    if (this.urlParts.length > 1)
    {
        var parameters = this.urlParts[1].split("&");
        for (var i=0; (i < parameters.length); i++)
        {
            var parameterParts = parameters[i].split("=");
            this.parameters[removeAnchor(parameterParts[0])] = removeAnchor(parameterParts[1]);
        }
    }

    this.setParam = function(key, value) {
        this.parameters[key] = value;
    };

    this.getParam = function(key) {
        return this.parameters[key];
    };

    this.toString = function() {
        var params = '';
        var keys = Object.keys(this.parameters);
        for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            params += (params ? '&' : '') + key + (typeof this.parameters[key] != 'undefined' ?
                '=' + this.parameters[key] : '');
        }
        return this.urlParts[0] + (params ? '?' + params : '');
    }
}

/*** Player ***/
function yumaPlayer(iOSOptions, androidOptions, options) {
    var player = this;

    this.md;
    this.iOSOptions = iOSOptions;
    this.androidOptions = androidOptions;
    this.isVideoShown = 0;
    this.playerInited = 0;

    this.ad;
    this.creative;

    this.container;
    this.controls;
    this.videoPlay;
    this.adSiteLink;
    this.video;
    this.soundControl;

    this.adUrl;

    this.window = window;

    this.options = {
        runTimeout: 21600
    };

    if (typeof options !== 'undefined') {
        for (var attribute in options) {
            this.options[attribute] = options[attribute];
        }
    }

    this.gaSendEvent = function(action) {
        if (typeof window.ga === 'function') {
            ga('send', 'event', 'yumaLabsPlayer_v20160927', action);
        }
        // console.log(action);
    };

    this.init = function() {
        this.gaSendEvent('initBegin');
        this.md = new MobileDetect(window.navigator.userAgent);
        if (!this.md.mobile()) {
            this.gaSendEvent('desktopRunning');
            return;
        } else {
            this.gaSendEvent('mobileRunnung');
        }

        if (!this.timeOutExpired()) {
            this.gaSendEvent('runBeforeTimeout');
           return;
        }

        var options = {};
        var link;
        var events = ['touchstart', 'touchmove'];
        switch (this.md.os()) {
            case 'AndroidOS':
                if (typeof this.androidOptions === 'object') {
                    options = this.androidOptions;
                    link = new URLParser(options.link);
                } else {
                    link = new URLParser(this.androidOptions);
                }
                link.setParam('puid12', 3);
                break;
            case 'iOS':
                if (typeof this.iOSOptions === 'object') {
                    options = this.iOSOptions;
                    link = new URLParser(options.link);
                } else {
                    link = new URLParser(this.iOSOptions);
                }
                link.setParam('puid12', 1);
                if (typeof options.osVersion !== 'undefined' && this.md.version('iOS') < options.osVersion) {
                    this.gaSendEvent('unsupportedOSVersion');
                    return;
                }
                break;
            default:
                this.gaSendEvent('unsupportedOS');
                return;
        }

        var location = new URLParser(window.location.href);
        if (location.getParam('preview') !== undefined) {
            link.setParam('preview', location.getParam('preview'));
        }
        if (location.getParam('dl') !== undefined) {
            link.setParam('dl', location.getParam('dl'));
        }

        DMVAST.client.get(link.toString(), {withCredentials: true}, function (response) {
            if (!response) {
                player.gaSendEvent('invalidXML');
                return;
            }
            else if (response.nobanner) {
                player.gaSendEvent('nobanner');
                return;
            }
            else {
                player.gaSendEvent('requestXMLSuccess');

                window.onbeforeunload = function () {
                    if (!player.isVideoShown) {
                        player.gaSendEvent('leftPage');
                    }
                };
            }

            player.window = player.window.parent;

            for (var adIdx = 0, adLen = response.ads.length; adIdx < adLen; adIdx++) {
                player.ad = response.ads[adIdx];
                if (player.options !== undefined) {
                    player.mergeOptions(player.options);
                }
                player.mergeOptions(options);
                for (var creaIdx = 0, creaLen = player.ad.creatives.length; creaIdx < creaLen; creaIdx++) {
                    player.creative = player.ad.creatives[creaIdx];

                    player.gaSendEvent('creative' + player.creative.type);

                    if (player.creative.type !== 'linear') {
                        player.gaSendEvent('skipCreative');
                        continue;
                    }

                    var mediaFile,
                        isMediaSupported = false;
                    for (var mfIdx = 0, mfLen = player.creative.mediaFiles.length; mfIdx < mfLen; mfIdx++) {
                        mediaFile = player.creative.mediaFiles[mfIdx];
                        if (mediaFile.mimeType != "video/mp4") {
                            continue;
                        }
                        isMediaSupported = true;
                        break;
                    }

                    if (!isMediaSupported) {
                        player.gaSendEvent('notSupportedFormat');
                        continue;
                    }

                    if (document.body === null && player.window != window) {
                        body = document.createElement('body');
                        document.body = body;
                    }

                    if (!player.playerInited) {
                        player.initHtml();
                        player.initStyle();
                        player.playerInited = true;
                    }

                    var videoSource = document.createElement('source');
                    videoSource.id = 'yumaPlayer-videoSrc';
                    videoSource.type = 'video/mp4';
                    videoSource.src = mediaFile.fileURL;

                    player.video.appendChild(videoSource);

                    player.adUrl = player.creative.videoClickThroughURLTemplate;
                    player.adSiteLink.href = player.adUrl;
                    player.setupControls();

                    player.gaSendEvent('initCompleted');

                    function onScroll() {
                        events.forEach(function(event) {
                            player.window.removeEventListener(event, onScroll);
                        });
                        player.gaSendEvent('showOnScroll');
                        player.showPlayer();
                    }

                    events.forEach(function(event) {
                        player.window.addEventListener(event, onScroll);
                    });
                    return;
                }
            }
        });
    };

    this.mergeOptions = function(options) {
        for (var attribute in options) {
            this.ad.extensions[attribute] = options[attribute];
        }
    };

    this.showPlayer = function() {
        this.gaSendEvent('showPlayer');

        if (typeof this.options['creativeView'] !== "undefined") {
            this.ad.impressionURLTemplates.push(this.options['creativeView']);
        }

        this.video.vastTracker = new DMVAST.tracker(this.ad, this.creative);

        canplay = function () {
            player.video.vastTracker.load();
            player.video.play();
            player.setTimeOut();
            player.video.removeEventListener('canplay', canplay);
        };

        this.video.addEventListener('canplay', canplay);
        this.setupEvents();

        var event = document.createEvent('Event');
        event.initEvent('canplay', true, true);
        this.video.dispatchEvent(event);
    };

    this.setupControls = function() {
        if (this.ad.extensions.isClickable == 0) {
            this.adSiteLink.style.display = 'none';
        }
        if (this.ad.extensions.controls != '1') {
            this.hideControls();
        }
        if (this.ad.extensions.muted) {
            this.video.muted = true;
            this.addCssClass(this.soundControl, 'sound-off');
        }
        if (this.ad.extensions.linkTxt) {
            this.adSiteLink.innerText = decodeURI(this.ad.extensions.linkTxt);
        }
    };

    this.setupEvents = function () {
        this.video.addEventListener('play', this.play);
        this.video.addEventListener('pause', this.pause);
        this.video.addEventListener('mute', this.mute);
        this.video.addEventListener('unmute', this.unmute);
        this.video.addEventListener('ended', this.ended);
        this.video.addEventListener('timeupdate', this.timeUpdate);
    };

    this.removeEvents = function() {
        this.video.removeEventListener('play', this.play);
        this.video.removeEventListener('pause', this.pause);
        this.video.removeEventListener('mute', this.mute);
        this.video.removeEventListener('unmute', this.unmute);
        this.video.removeEventListener('ended', this.ended);
        this.video.removeEventListener('timeupdate', this.timeUpdate);
    };

    this.setTimeOut = function() {
        var timeout = (new Date().getTime()) + this.options.runTimeout * 1000;
        localStorage.setItem('timeOut', timeout);
    };

    this.timeOutExpired = function() {
        var timeout = localStorage.getItem('timeOut');
        if (timeout === null) {
            return true;
        }
        var now = Math.floor(new Date().getTime());
        return parseInt(timeout) < now;
    };

    this.addCssClass = function(o, c){
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        if (re.test(o.className)) return;
        o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    };

    this.removeCssClass = function(o, c) {
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    };

    this.hideControls = function () {
        var controls = this.container.getElementsByClassName('control');
        for (var i = 0; i < controls.length; i++) {
            controls[i].style.display = "none";
        }
    };

    this.play = function () {
        player.videoPlay.style.display = 'none';
        if (player.playbackBegin) {
            player.video.vastTracker.setPaused(false);
        } else {
            player.playbackBegin = true;
            player.video.vastTracker.setProgress(0);
            document.getElementById('yumaPlayer-timer').style.display = 'block';
        }
    };

    this.pause = function () {
        player.timeUpdate();
        player.videoPlay.style.display = 'block';
        if (player.video.currentTime === player.video.duration) {
            return;
        }
        player.video.vastTracker.setPaused(true);
    };

    this.mute = function () {
        player.video.vastTracker.setMuted(true);
    };

    this.unmute = function () {
        player.video.vastTracker.setMuted(false);
    };

    this.close = function() {
        player.timeUpdate();
        player.video.vastTracker.close();
        player.removeHtml();
    };

    this.skip = function() {
        player.timeUpdate();
        player.video.vastTracker.skip();
        player.removeHtml();
    };

    this.adClick = function() {
        player.video.vastTracker.click();
        player.video.pause();
    };

    this.ended = function () {
        ['firstQuartile', 'midpoint', 'thirdQuartile'].forEach(function(event) {
            player.video.vastTracker.track(event, true);
        });
        player.video.vastTracker.complete();
        player.removeHtml();
    };

    this.timeUpdate = function () {
        if (!player.isVideoShown) {
            player.container.style.display = 'block';
            player.videoPlay.style.display = 'none';
            player.isVideoShown = true;
        }
        currentTime = Math.floor(player.video.currentTime);
        if (currentTime === player.ad.extensions.skipTime) {
            document.getElementById('yumaPlayer-skip').style.display = 'none';
        }
        if (currentTime === player.ad.extensions.skipTime2 && player.ad.extensions.controls === 1) {
            document.getElementById('yumaPlayer-close').style.display = 'block';
        }
        player.video.vastTracker.setProgress(player.video.currentTime);
        if (player.video.duration == 0) {
            return;
        }
        var timerDuration = document.getElementById('yumaPlayer-timerDuration');
        if (timerDuration) {
            timerDuration.innerText = Math.ceil(player.video.duration - player.video.currentTime);
        }
    };

    this.initHtml = function () {
        this.container = document.createElement('div');
        this.container.id = 'yumaPlayer';

        this.container.insertAdjacentHTML('beforeend', '<div id="yumaPlayer-controls">' +
            '<video id="yumaPlayer-video" webkit-playsinline playsinline></video>' +
            '<div id="yumaPlayer-timer">Реклама закончится через <span id="yumaPlayer-timerDuration"></span></div>' +
            '<div id="yumaPlayer-ads" class="control">Реклама</div>' +
            '<div id="yumaPlayer-close" class="control"></div>' +
            '<div id="yumaPlayer-sound" class="control"></div>' +
            '<div id="yumaPlayer-skip" class="control">Пропустить</div>' +
            '<div id="yumaPlayer-play"></div>' +
            '<div id="yumaPlayer-adSite"><a id="yumaPlayer-adSiteLink" target="_blank" class="control"></a></div>' +
        '</div>');

        document.body.appendChild(this.container);

        this.controls = document.getElementById('yumaPlayer-controls');
        this.videoPlay = document.getElementById('yumaPlayer-play');
        this.adSiteLink = document.getElementById('yumaPlayer-adSiteLink');
        this.video = document.getElementById('yumaPlayer-video');
        this.video.controls = false;
        this.videoPlay = document.getElementById('yumaPlayer-play');

        var videoSound = document.getElementById('yumaPlayer-sound');
        if (this.md.os() === 'iOS' && this.md.version('iOS') < 10) {
            videoSound.style.display = 'none';
        }
        videoSound.addEventListener('click', function() {
            var event = document.createEvent('Event');
            if (player.video.muted === false) {
                player.video.muted = true;
                event.initEvent('mute', true, true);
                player.addCssClass(videoSound, 'sound-off');
            } else if (player.video.muted === true) {
                player.video.muted = false;
                event.initEvent('unmute', true, true);
                player.removeCssClass(videoSound, 'sound-off');
            }
            player.video.dispatchEvent(event);
        });
        this.soundControl = videoSound;

        document.getElementById('yumaPlayer-close').addEventListener('click', this.close);
        document.getElementById('yumaPlayer-skip').addEventListener('click', this.skip);
        this.adSiteLink.addEventListener('click', this.adClick);
        this.videoPlay.addEventListener('click', function() {
            player.video.play();
        });
    };

    this.removeHtml = function() {
        this.removeEvents();
        this.container.parentNode.removeChild(this.container);
    };

    this.initStyle = function() {
        var style = document.createElement('style');
        style.type = 'text/css';

        style.innerHTML = '#yumaPlayer-controls>div,#yumaPlayer-timer{text-align:center;position:absolute}#yumaPlayer,#yumaPlayer-play{top:0;left:0;right:0;bottom:0;overflow:hidden;display:none}#yumaPlayer-close,#yumaPlayer-play,#yumaPlayer-sound{cursor:pointer;background-size:cover;background-position:center;background-repeat:no-repeat}#yumaPlayer{position:fixed;width:100%;height:100%;background:#000;z-index:10000}#yumaPlayer-video{width:100%;height:auto;max-height:85%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute}#yumaPlayer-adSiteLink:focus,#yumaPlayer-video:focus{outline:0}#yumaPlayer-videoSrc{height:100%;position:absolute;width:100%}#yumaPlayer-controls{position:relative;width:inherit;height:inherit;color:#e6e6e6;font-size:18px;background:0 0;margin:0 auto;font-family:Arial,Helvetica,sans-serif;text-shadow:#777 1px 1px}#yumaPlayer-adSite{position:absolute;display:block;top:10px;left:50%;margin-left:-100px;overflow:hidden;width:200px}#yumaPlayer-adSiteLink{line-height:1.4em;color:#e6e6e6}#yumaPlayer-ads{left:11%;display:none}#yumaPlayer-timer{display:none;bottom:20px;right:0;width:100%;color:#fff}#yumaPlayer-close,#yumaPlayer-sound{font-size:23px;top:10px;width:40px;height:40px}#yumaPlayer-close{right:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABLVJREFUeNrsnY2xojAQgNEK6OAsgQ7kdUAJvgru2YEdMFagHXAdqBVIB3gVYAdc1okexAUCJEvA3Zkdx5n3QvIZsj9kw8IbWYqi8MVHIDQU+kvoSn73W/71LjQVehP6V+gZvi8Wi/uY41mMBDESH2sJMTDcfCrhXgTcP95cRUAMhB6E5gWd5PKawWxmqBjMRnz8bpuJ9/vdS9PUu1wuj+/n87mx3TAMH5/r9doLgsDzfV9n5u7FrD1OdUZuhGa1UyfPi8PhUGw2m2K1WhXwL0MU2oC2oE1ou0Ey+SNPBmRYB/IJMYqiwQDbFK7RAhf6GLoM0heaoD3PsuLn56cQt6V1kKrCNeHa0IcaSaSn4RTMCDM2MAi4Dakh1in0pQZsLj0PJ2DG2K292+2cAakq9K1mKYjHvsWvao9Op5MRI2NboY/QV0Su5EuA9Cnf7h1Yq1wHqSr0ucZgBZQwc3WtFL7g5GA+FfqOrK25dagYzOv1Oor1tuENwFjIoGIwwc+bA8wyVBiTdajSAGUqzLmAVBWBmhk1VKo1nzPMBqhXK37mXNbMnmtqPBRmpFrzT4BZhopY/2jIulkxQlN2jYa4VIiR8vsATabutFt0/pM+KbhKOPmpMJ+KhKlhF6BZOdExhdicIvZXEipZl0z7S1zOGo2RpVJk02l2goVjkFVVrH7WaXa6lBx2KUmtPUvLERHPTu1ZWomgluXkR/lR736/91hwUdgEaPJEbgh4WfZPioj6RFCKxT9gQHPK5Ac85gXfDhSuN9Q1M91ex+RJ3hiz235uDu1jD/b6hrZIZsh63gEZQ4RmlGBgxIv6IKgYTKpwWbntY9S6U9zujbu7OkBtgkkRlCjXv5azSqS+J5Jn7Ay1DSbFWBCf1H9LhFDE7dga2gWqDkyKRDiwekuYwJ1BuX42/LpaUF2BWbOO7ir+J3WaritU12Aiab0DAD2NmVnShZokiXMwkQzUaemZ3+PeSY7Ho/f9/d34N7A7Way7zduT09T7+vp67IQeUYKKDxOGoUtZHG0Z80ksMCvL0pWEg85MdXhmvmebpgjVNZjOAX1CbasAecp2u3UKppNAhWv0KplpE2H5HyU1DLQBpjBO2n8P1l/4gU5BXU4VpqtQl1OG6SJUAPpa1XXXLmqYYM3BALkIVWF2HzX07Bqb902oUIaeoyVH+iY6XIOKJUfI03c1pSza4aQuVIpwFEvfkSeYG+outWNzHai2nylhCWYwSmnDImtFREcGh5O6WSpCg/To/lKe0fGCCgX9tgWgmYjN26Debjer41BY/T/vhPoxspryGpqCw25/aI94/aw8Ribd6ODJvetxHD+spIlaeviRwHMw1Z43ZKODhEq6FWfq2rgVRwLlzWKGN4sFXPXR24/G413ecDt8w60KlLeEm9wSLqFy0YKpogVslnJZzcCyGnWWcuHXwMIvCZRLE02WJkqoXDxrqnhWAuXybpPl3ViMzwcQDDiAoASVj8gwfZQbH+Ji8BCX0nrKxwyZFD4Iy4LwUW1EUPkwQTNQ+bhLw1D5QFZLYPnIYAtQ+VBrS0sAH7tuASy/GMAS2I98dQW/XGWqwq//sewVeDN9QdXCgZk7q1eo/RNgAOZ4W49+khmvAAAAAElFTkSuQmCC);display:none}#yumaPlayer-sound{left:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXxJREFUeNrsnY1V6jAUxwsLCBPIBtYJ7AbWDdjg6QTPNwG+CdAJ0AnACcAJKhMUJ+jLvwZfCfe2lCahKbnn5EDPgTb9cb+S3oRecGLJsmwgXkLRItEuRRvJ40HFVzeirUT7FG0t2gLHvV5vc8r76Z0IYixebiTEUPPpVxLuu4D7GnRVBMRQtKloaWZPUnnNsDMaKm5mLF5+1dHEz8/PvOV2vdkEHx8f+furq6tgMPj2BKPRKG81Nfev0NpnJ4FKkL+lT+TvcrUKFotFDg3v0epIGIZ5A+woivL3Vb+XaH9Mg9UJMhItKbPD2WyWjcfjTGhYhq/obDgnzo1rVAj6GLUZ5ACs2N4nSfb4+GgEYhlcXBPXLvt9ZabRKpgxF2xwM9AYWxC5hj6UgE1l5tEKmBOyh2naCpAUWPSNkcmpTXxJ9moyyUQ0bh3MbUPf0EdGltZdgMwpE8q8RaRtLUi1oa+MG0is5a4SZkpF7jZrZZm2MhlBahwqBxOR1DWQamNcgDmoHMw2Bp4mAcsKVBmAki7DrICaaA1UVDTvIswKqEtjeWaXYVZAnTSFGXcxAB3acK+ExE38ZqqmRucCc9uIlCo9yp+qEx1IgF3MM3XkqUTyPztmCm5HXBoBmRhRERLVAZqoY/NzhVmS+CcHz7Srs0bnaOqU6ROzVOPa2ulaioT+Ijrf39/bSKWSWtoJZ+xymrNcLrVbFxGgxgePiFzTTmriWHeqR2jpsmzyoxXaiWdB8/m89g/LTsNrDqqEloYU0GkbRkRxHO9pGo4P+e50OmWh4rwGR1BTCujOXdh8Olkx1Mvl0EgMv8k949LlT8FGPX3pmN32EBM3WjTxKqDQNoADJGhlEVQZVJ2mTwxJY3ZGyWYwwiik5CnkHlBoh/p5NZqHYcieR5flEcFpwkZ3W+ZeZuIcUGYYuGdV3Lmh0YbMPo/2PTlzkhZrja6vrxtN+6GgS5hXaTEXPnNAHdL/IqzedxkW6peEeyA/8/DwEDw9Pf0ci2hM9mE4HOZFaE1FWIZ6D8O9iRAdfqYs2h4rxfNz/lYNPMwksTaXRozvo37wXfT6I9vSwSZSs8ywttzd3ZFVetB6MeT8OX5+fv4piyzK7e2tln4QrKK9/BMOvekvVxWxm2ooF5yonJWrENGhoUTwmwLoXPeFbAAtCzxFk+Yivq75XUXmMPmwWDnskiAAUcHl5uZmp6CX+gyCmw5RmIUAOnAVKEC9vr5WwqL87eXlpQmgg37guLy/v1cGRQqoqcDZV39x14SzqmJ++PX1ZdRKWKA6Uibbwi1y2K4WMS0qM+dNvm2yAxRLU1wTbvhqK8CqzPqnMBOdwgWXItCLiwtj11eZOW/yxZyT86uUFpvSYADd2BqDm9AOMSo6Cuh6vTZhIRsAXbkKtDgRUpS3t7cdmJQrw3JIA0BXnZscUZ/W2p4cgYauD4mabTP12WxGat7Ly8vOcRzvl3NSw1VNGcYaQBe6UyfTKQtgcoGmOGMP/0q5saJL0JkygWWnHoFg4rmofSd5BALpwkM69dHNqR7SbYE68xiZKitUIbXhMbJThQ4Ahj7iO2rJEFPCbbfQQUL1pTi6SnEk0FYUi1EuwNVisdaUM6ouwMlyRirad6HgFi4gOEXBrQTqS8J1loRLqE4vWoAP3i5a0A2z9qIFSkv9spqGy2ooLfULvxos/JJA/dJEnUsTJVS/eFbX4lkJ1C/v1rm8mxrjn9sGBMxsf7Mt3fwWGQa2cvObuGjcxKXgT/02QzrFb4RlQDioXUj8rW/VVgXVbybYHKrf7lIzVL8hqyGwfstgA1D9ptaGXIDfdt0A2LP+YwD/1xWuAFXAns2fq9h0Bf7vf0xmBUFH/6Cq1wLN7dRfqP0TYAAfMFKVQKB85gAAAABJRU5ErkJggg==)}#yumaPlayer-sound.sound-off{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABS5JREFUeNrsnYF12jAQQG1eB6ATlA3iTBBnA0YgE5ANSCfgdQLYgGQC3AlMJjCZwGzg6lz5xRYn27JORha6967AS7Glz0m6k05yGNxYiqKYs5eIacz0F9MF/zzv+OqF6YnpmekX0wQ+h2F4uWV9whtBXLKXJw4xIr78icP9y+C+B64Kgxgx3THNi/Ek5/eMnLFQVpkVe1mrWOL5fC61bNeXS/D5+Vm+f3h4CObz/z3BYrEoVdFy/zCr3U8SKAe54X2ivJanU5AkSQkN3oOqSBRFpQLsOI7L912/F9PfpsFSgoyZZm3t8HA4FKvVqmAWVsBXKBWuCdeGe3QIlDG2GeQcWElLn2XF29ubEYhtcOGecO+235d7GlbBXMoGG6gMWMxYEGUKZWgBm3PPwwqYW7SEeW4FSAwslE0i21s38RQt1XZbsNHYOpiVQtmgjBJJR+8CuE+ZYc2bjbTWghQVyirpBrLRfFcOM8dGbputss1aJR5BbhyqDCaMpFMDKaqkCzAHVQbTxoFHZ8AaBSofgDKXYXZAzUgHKmw0dxFmB9TUmJ/pMswOqFtdmEsXB6C+CnVFZKnTb+aia3QvMCtFXKp8UH8qTnSAAzxFP5PCT0Wc/8OQKbiGTCkCMhFRIRKrAM3E2PxeYbY4/lnvmXZx1ugemzrW9JFZqpWydd6Di6ThSmVK1gmdsQfZVGSAWvWOiLx19rLStG3ywwrrhLWg4/Fo7Q+LWGmEAd3ZEBEtl8urzh8+Wx5B7TCgjVqMuTrZEeqVYhNQYCNGT60x+9ghJrgk9SZuO1BJSFrG+DPO9KkO+OPjY7T1Kcj2YH1S+TolQRiVDH9U9ar/BVJjxhDWxIPNZjP4+6+vr2WuE+RB7fd75R+y+hHhu1UuVV9BGJUXC/nMSV7PNXp8fNQCBZVkoVprMhf8nx55SN9JWGEzDYt1EQ2rBigvLy+9rsW8hmC3+x5HICEN6qwKNU1TsQ4/ryZCKOJ2VljyvETxHpjAfQdOHBfM2ini+3gmNvcqdVBHFNMMyUS0PNW/qwrCKr7yP5kJa1to14hNYaFtrQCzVJll6kwAAasrf5T9c6R2T8YAqgK1C6aOEQlybDj0VOHmWED7QDUJEwlD8wZiADE1oEMHQQqYWF1ngQMC7pKKHwpu0vPzs3L6eR+ZiTdyHSo1TJHZjNplujXUriiP2jJFZk40+bqf2TUnsF6vjZahARS2pkwZZh+nndq5F5nNxPjaZZgmoIrMZi40cxkcGDDe399HsVR0pn5qjn1fp101TNV17CcZeqpGQKagYqHnJCdHZHuN2iKgNqiwOEgxOQJ96Fe9C1CZ9L2lYANol9Pe5vwPqTfynS8AmlC7Tqoz3xT36BsByaAOWfZBWCVVYu13GkSakqxiQvOCpi9TuI9Ok4fmVl0DrqfaVVWz7dBFDJmtB0XqMK9G+vQWa/Jt6/C2LyMja/Np3Q9NxBXBsVY9oZlOcVIGYZTUfVGf6ECU6IA6+D4VRzMVhwO1IlkM8tldSRazJp1R7AImmc6IjfY+4VYj4ZYD9SnhlCnhHKrftEC1aQGzUr+tRnNbDWalfuOXxsYvDtRvTaTcmsih+s2zVJtnOVC/vZtyezcW49/bAQSSk3L0jnTzR2QYOMrNH+JCeIhLrT/1xwwRr9/7g7AMJEWgUF1w/Ec/qq0Lqj9MUB+qP+6SGKo/kNUQWH9ksAGo/lBrQ12AP3bdANi7fjCAf3TFVIAKYO/m4SpjdgX+8T8mvYLA0QdUhRZYrlOPUPsnwAB4o1NzGUkA7wAAAABJRU5ErkJggg==)!important}#yumaPlayer-skip{font-size:16px;height:40px;line-height:40px;margin-left:0;bottom:-64px;width:100px;right:11%;overflow:hidden;cursor:pointer;display:none}#yumaPlayer-play{margin:auto;width:80px;height:80px;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB2aWV3Qm94PSIwIDAgNjEuNzI0OTk4IDYxLjcyNDk5OCIgICBoZWlnaHQ9IjYxLjcyNDk5OCIgICB3aWR0aD0iNjEuNzI0OTk4IiAgIHhtbDpzcGFjZT0icHJlc2VydmUiICAgdmVyc2lvbj0iMS4xIiAgIGlkPSJzdmcyIj48bWV0YWRhdGEgICAgIGlkPSJtZXRhZGF0YTgiPjxyZGY6UkRGPjxjYzpXb3JrICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcyAgICAgaWQ9ImRlZnM2IiAvPjxnICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwwLDYxLjcyNSkiICAgICBpZD0iZzEwIj48ZyAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMSwwLjEpIiAgICAgICBpZD0iZzEyIj48cGF0aCAgICAgICAgIGlkPSJwYXRoMTQiICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZSIgICAgICAgICBkPSJtIDI0Ni45MDYsMTEuNDQ5MiBjIDEzMC4wMiwwIDIzNS40MzQsMTA1LjQyMTggMjM1LjQzNCwyMzUuNDQ4OCAwLDEzMC4wMjggLTEwNS40MTQsMjM1LjQ0MiAtMjM1LjQzNCwyMzUuNDQyIC0xMzAuMDI3LDAgLTIzNS40NDksLTEwNS40MTQgLTIzNS40NDksLTIzNS40NDIgMCwtMTMwLjAyNyAxMDUuNDIyLC0yMzUuNDQ4OCAyMzUuNDQ5LC0yMzUuNDQ4OCBsIDAsMCB6IE0gMjQ2LjkwNiwwIGMgMTM2LjM0OCwwIDI0Ni44OTEsMTEwLjU0MyAyNDYuODkxLDI0Ni44OTggMCwxMzYuMzQ4IC0xMTAuNTQzLDI0Ni45MDcgLTI0Ni44OTEsMjQ2LjkwNyBDIDExMC41NTEsNDkzLjgwNSAwLDM4My4yNDYgMCwyNDYuODk4IDAsMTEwLjU0MyAxMTAuNTUxLDAgMjQ2LjkwNiwwIGwgMCwwIHogTSAxODEuODE2LDM3MS4zNjMgMzU3LjgyLDI0Ni44OTggMTgxLjgxNiwxMjIuNDM0IGwgMCwyNDguOTI5IiAvPjwvZz48L2c+PC9zdmc+);position:absolute}@media (min-width:480px) and (orientation:portrait),(min-height:480px) and (orientation:landscape){#yumaPlayer-play{width:100px;height:100px}#yumaPlayer-close,#yumaPlayer-sound{top:20px;width:60px;height:60px}#yumaPlayer-sound{left:20px}#yumaPlayer-close{right:20px}#yumaPlayer-adSite{top:20px}#yumaPlayer-timer{bottom:20px}}@media (min-width:640px) and (orientation:portrait),(min-height:640px) and (orientation:landscape){#yumaPlayer-container{font-size:20px}#yumaPlayer-play{width:120px;height:120px}#yumaPlayer-close,#yumaPlayer-sound{top:30px;width:80px;height:80px}#yumaPlayer-sound{left:30px}#yumaPlayer-close{right:30px}#yumaPlayer-adSite{top:30px}#yumaPlayer-timer{bottom:30px}}@media (min-width:860px) and (orientation:portrait),(min-height:860px) and (orientation:landscape){#yumaPlayer-container{font-size:28px}#yumaPlayer-play{width:160px;height:160px}#yumaPlayer-adSite,#yumaPlayer-close,#yumaPlayer-sound{top:40px}#yumaPlayer-sound{left:40px}#yumaPlayer-close{right:40px}#yumaPlayer-timer{bottom:40px}}@media (min-width:480px){#yumaPlayer-adSite{width:540px;margin-left:-270px}}';
        document.head.appendChild(style);
    }
}

function yumaPlayerInit(iOSOptions, androidOptions, options) {
    var player = new yumaPlayer(iOSOptions, androidOptions, options);
    player.init();
}
