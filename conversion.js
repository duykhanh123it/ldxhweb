(function() {
    var n, ca;

    function da(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ea = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function fa(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ha = fa(this),
        ia = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        p = {},
        ma = {};

    function r(a, b, c) {
        if (!c || a != null) {
            c = ma[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function t(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in p ? f = p : f = ha;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ia && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ea(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ma[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ma[d] = ia ? ha.Symbol(d) : "$jscp$" + a + "$" + d), ea(f, ma[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ea(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ha[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ea(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return na(da(this))
                }
            })
        }
        return a
    }, "es6");

    function na(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function u(a) {
        var b = typeof p.Symbol != "undefined" && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        if (b) return b.call(a);
        if (typeof a.length == "number") return {
            next: da(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    function oa(a) {
        return pa(a, a)
    }

    function pa(a, b) {
        a.raw = b;
        Object.freeze && (Object.freeze(a), Object.freeze(b));
        return a
    }

    function y(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var qa = ia && typeof r(Object, "assign") == "function" ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) y(d, e) && (a[e] = d[e])
        }
        return a
    };
    t("Object.assign", function(a) {
        return a || qa
    }, "es6");

    function ra() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    t("WeakMap", function(a) {
        function b(g) {
            this.g = (f += Math.random() + 1).toString();
            if (g) {
                g = u(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return h === "object" && g !== null || h === "function"
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (k.get(g) != 2 || k.get(h) != 3) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && k.get(h) == 4
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!y(g, e)) {
                var k = new c;
                ea(g, e, {
                    value: k
                })
            }
            if (!y(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && y(g, e) ? g[e][this.g] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && y(g, e) && y(g[e], this.g)
        };
        b.prototype.delete = function(g) {
            return d(g) && y(g, e) && y(g[e], this.g) ? delete g[e][this.g] : !1
        };
        return b
    }, "es6");
    t("Map", function(a) {
        function b() {
            var h = {};
            return h.o = h.next = h.head = h
        }

        function c(h, k) {
            var l = h[1];
            return na(function() {
                if (l) {
                    for (; l.head != h[1];) l = l.o;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            l == "object" || l == "function" ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h[0][l];
            if (m && y(h[0], l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        l: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                l: void 0
            }
        }

        function e(h) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || typeof a != "function" || !r(a.prototype, "entries") || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = r(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
                    m = l.next();
                    return m.done ||
                        m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.l ? l.l.value = k : (l.l = {
                next: this[1],
                o: this[1].o,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.l), this[1].o.next = l.l, this[1].o = l.l, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.l && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.l.o.next = h.l.next, h.l.next.o =
                h.l.o, h.l.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].o = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).l
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).l) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = r(this,
                    "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = r(e.prototype, "entries");
        var g = 0;
        return e
    }, "es6");
    t("globalThis", function(a) {
        return a || ha
    }, "es_2020");

    function sa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    t("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return sa(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return sa(this, function(b) {
                return b
            })
        }
    }, "es6");

    function ta(a, b, c) {
        if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    t("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ta(this, b, "endsWith");
            c === void 0 && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; e > 0 && c > 0;)
                if (d[--c] != b[--e]) return !1;
            return e <= 0
        }
    }, "es6");
    t("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) y(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    t("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) y(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return sa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return ta(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    }, "es6");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var A = this || self;

    function C(a) {
        a = parseFloat(a);
        return isNaN(a) || a > 1 || a < 0 ? 0 : a
    };

    function va(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var wa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ba = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    var Ca, Da;
    a: {
        for (var Ea = ["CLOSURE_FLAGS"], Fa = A, Ga = 0; Ga < Ea.length; Ga++)
            if (Fa = Fa[Ea[Ga]], Fa == null) {
                Da = null;
                break a
            }
        Da = Fa
    }
    var Ha = Da && Da[610401301];
    Ca = Ha != null ? Ha : !1;

    function Ia() {
        var a = A.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ja, Ka = A.navigator;
    Ja = Ka ? Ka.userAgentData || null : null;

    function La(a) {
        return Ca ? Ja ? Ja.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function D(a) {
        return Ia().indexOf(a) != -1
    };

    function E() {
        return Ca ? !!Ja && Ja.brands.length > 0 : !1
    }

    function Ma() {
        return E() ? La("Chromium") : (D("Chrome") || D("CriOS")) && !(E() ? 0 : D("Edge")) || D("Silk")
    };

    function Na(a) {
        Na[" "](a);
        return a
    }
    Na[" "] = function() {};
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Oa = p.globalThis.trustedTypes,
        Pa;

    function Qa() {
        var a = null;
        if (!Oa) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Oa.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Ra() {
        Pa === void 0 && (Pa = Qa());
        return Pa
    };

    function Sa(a) {
        this.g = a
    }
    Sa.prototype.toString = function() {
        return this.g + ""
    };

    function Ta(a) {
        var b = Ra();
        return new Sa(b ? b.createScriptURL(a) : a)
    }

    function Ua(a) {
        if (a instanceof Sa) return a.g;
        throw Error("");
    };
    var Wa = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function $a(a) {
        this.g = a
    }
    $a.prototype.toString = function() {
        return this.g + ""
    };

    function ab(a) {
        var b = Ra();
        return new $a(b ? b.createHTML(a) : a)
    }

    function bb(a) {
        if (a instanceof $a) return a.g;
        throw Error("");
    };

    function cb(a, b) {
        a.src = Ua(b);
        var c;
        b = a.ownerDocument && a.ownerDocument.defaultView || window;
        b = b === void 0 ? document : b;
        var d;
        b = (d = (c = "document" in b ? b.document : b).querySelector) == null ? void 0 : d.call(c, "script[nonce]");
        (c = b == null ? "" : b.nonce || b.getAttribute("nonce") || "") && a.setAttribute("nonce", c)
    };

    function db(a, b) {
        a.write(bb(b))
    };
    var eb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function fb(a) {
        var b = a.match(eb);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function gb(a, b, c, d) {
        for (var e = c.length;
            (b = a.indexOf(c, b)) >= 0 && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (f == 38 || f == 63)
                if (f = a.charCodeAt(b + e), !f || f == 61 || f == 38 || f == 35) return b;
            b += e + 1
        }
        return -1
    }
    var hb = /#|$/;

    function ib(a, b) {
        var c = a.search(hb),
            d = gb(a, 0, b, c);
        if (d < 0) return null;
        var e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    }
    var jb = /[?&]($|#)/;

    function kb(a, b, c) {
        for (var d = a.search(hb), e = 0, f, g = [];
            (f = gb(a, e, b, d)) >= 0;) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.slice(e));
        a = g.join("").replace(jb, "$1");
        c = c != null ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), c < 0 && (c = a.length), d = a.indexOf("?"), d < 0 || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.slice(0, d), e, a.slice(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function lb(a) {
        return a instanceof $a ? a : ab(String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"))
    }

    function mb(a) {
        var b = lb("");
        return ab(a.map(function(c) {
            return bb(lb(c))
        }).join(bb(b).toString()))
    }
    var nb = /^[a-z][a-z\d-]*$/i,
        ob = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "),
        pb = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),
        qb = ["action", "formaction", "href"];

    function rb(a) {
        var b;
        if (!nb.test("span")) throw Error("");
        if (ob.indexOf("SPAN") !== -1) throw Error("");
        var c = "<span";
        a && (c += sb(a));
        Array.isArray(b) || (b = b === void 0 ? [] : [b]);
        pb.indexOf("SPAN") !== -1 ? c += ">" : (a = mb(b.map(function(d) {
            return d instanceof $a ? d : lb(String(d))
        })), c += ">" + a.toString() + "</span>");
        return ab(c)
    }

    function sb(a) {
        for (var b = "", c = r(Object, "keys").call(Object, a), d = 0; d < c.length; d++) {
            var e = c[d],
                f = a[e];
            if (!nb.test(e)) throw Error("");
            if (f !== void 0 && f !== null) {
                if (/^on./i.test(e)) throw Error("");
                qb.indexOf(e.toLowerCase()) !== -1 && (f = String(f), f = Wa.test(f) ? f : void 0, f = f || "about:invalid#zClosurez");
                e = e + '="' + lb(String(f)) + '"';
                b += " " + e
            }
        }
        return b
    };

    function tb(a) {
        var b = ra.apply(1, arguments);
        if (b.length === 0) return Ta(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Ta(c)
    }

    function ub(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(function(k) {
                return e(k, h)
            }) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        var f = b.length ? "&" : "?";
        d.constructor === Object && (d = r(Object, "entries").call(Object, d));
        Array.isArray(d) ? d.forEach(function(g) {
            return e(g[1], g[0])
        }) : d.forEach(e);
        return Ta(a + b + c)
    };

    function vb(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Na(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function wb() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function xb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var Ab = va(function() {
            return Ba(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], yb) || Math.random() < 1E-4
        }),
        Bb = va(function() {
            return yb("MSIE")
        });

    function yb(a) {
        return Ia().indexOf(a) != -1
    }

    function F(a) {
        return /^true$/.test(a)
    }

    function Cb(a, b) {
        if (!a || !b.head) return null;
        var c = Db("META");
        b.head.appendChild(c);
        c.httpEquiv = "origin-trial";
        c.content = a;
        return c
    }

    function Db(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Eb = C("0.20"),
        Fb = C("0.002"),
        Ub = C("1.0"),
        Vb = C("1.0"),
        Wb = C("0.0"),
        Xb = C("0.00"),
        Yb = C("0.00"),
        Zb = F("false"),
        $b = F("true"),
        ac = F("true"),
        bc = F("true"),
        cc = F("true"),
        dc = F("true");
    var ec = null;

    function fc() {
        if (ec === null) {
            ec = "";
            try {
                var a = "";
                try {
                    a = A.top.location.hash
                } catch (c) {
                    a = A.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    ec = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return ec
    }

    function H(a, b, c) {
        var d = I;
        if (c ? d.g.hasOwnProperty(c) && d.g[c] == "" : 1) {
            var e;
            e = (e = fc()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!Bb() && !Ab() && (e = Math.random(), e < b)) {
                    e = wb();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && a != "" && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.N[a] = !0)
        }
    }

    function J(a) {
        var b = I;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function gc() {
        var a = I,
            b = [];
        xb(a.N, function(c, d) {
            b.push(d)
        });
        xb(a.g, function(c) {
            c != "" && b.push(c)
        });
        return b
    };
    var hc = {
            fa: 2,
            oa: 13,
            na: 14,
            ka: 16,
            ia: 17,
            ga: 18,
            ea: 19,
            qa: 20,
            pa: 21,
            ca: 22,
            Y: 23
        },
        I = null;

    function ic() {
        return !!I && (J(20) == "466465926" || J(20) == "466465925")
    }

    function jc() {
        return !!I && J(16) == "592230571"
    }

    function kc() {
        return !!I && (J(22) == "512247839" || J(22) == "512247838")
    };

    function lc(a) {
        var b = b === void 0 ? A : b;
        var c, d;
        return ((c = b.performance) == null ? void 0 : (d = c.timing) == null ? void 0 : d[a]) || 0
    };

    function mc() {
        var a = nc,
            b = "J";
        if (a.J && a.hasOwnProperty(b)) return a.J;
        b = new a;
        return a.J = b
    };
    var oc = {
        la: 0,
        Z: 1,
        ma: 2,
        ba: 3,
        aa: 4
    };

    function nc() {
        this.g = {}
    }

    function pc(a, b, c) {
        typeof c === "number" && c > 0 && (a.g[b] = Math.round(c))
    }

    function qc(a) {
        var b = mc();
        var c = c === void 0 ? A : c;
        c = c.performance;
        pc(b, a, c && c.now ? c.now() : null)
    }

    function rc() {
        function a() {
            return pc(b, 0, lc("loadEventStart") - lc("navigationStart"))
        }
        var b = mc();
        lc("loadEventStart") != 0 ? a() : window.addEventListener("load", a)
    }

    function sc() {
        var a = mc();
        return r(Object, "values").call(Object, oc).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };
    var tc = F("false");
    var uc = {};

    function K(a) {
        uc.TAGGING = uc.TAGGING || [];
        uc.TAGGING[a] = !0
    };

    function vc(a) {
        return typeof a === "function"
    }

    function wc(a) {
        return typeof a === "string"
    }

    function xc(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function yc(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function zc() {
        return new Date(Date.now())
    }

    function Ac(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    };

    function Bc(a) {
        a = Cc(a);
        return ab(a)
    }

    function Cc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var L = window,
        M = document,
        Dc = navigator,
        Ec = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Fc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Gc(a, b, c) {
        b && yc(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function Hc(a, b, c, d, e) {
        var f = M.createElement("script");
        Gc(f, d, Ec);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        a = Ta(Cc(a));
        cb(f, a);
        b && (f.onload = b);
        c && (f.onerror = c);
        e ? e.appendChild(f) : (b = M.getElementsByTagName("script")[0] || M.body || M.head, b.parentNode.insertBefore(f, b))
    }

    function Ic(a, b, c) {
        var d = !1;
        d = d === void 0 ? !0 : d;
        var e = !1;
        c || (c = M.createElement("iframe"), e = !0);
        Gc(c, void 0, Fc);
        d && (c.height = "0", c.width = "0", c.style.display = "none", c.style.visibility = "hidden");
        a !== void 0 && (c.src = a);
        e && (a = M.body && M.body.lastChild || M.body || M.head, a.parentNode.insertBefore(c, a));
        b && (c.onload = b)
    }

    function Jc(a) {
        try {
            var b = Dc.sendBeacon && Dc.sendBeacon(a)
        } catch (c) {
            K(15)
        }
        b || Kc(a)
    }
    var Lc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    };

    function Mc(a) {
        if (typeof L.fetch === "function") {
            var b = r(Object, "assign").call(Object, {}, Lc);
            try {
                var c = L.fetch(a, b);
                if (c) return c.then(function() {}).catch(function() {}), !0
            } catch (d) {}
        }
        Jc(a);
        return !0
    }

    function Nc() {
        var a = L.performance;
        if (a && a.getEntriesByType) try {
            var b = a.getEntriesByType("navigation");
            if (b && b.length > 0) var c = b[0].type
        } catch (d) {
            return "e"
        }
        if (!c) return "u";
        switch (c) {
            case "navigate":
                return "n";
            case "back_forward":
                return "h";
            case "reload":
                return "r";
            case "prerender":
                return "p";
            default:
                return "x"
        }
    }

    function Kc(a) {
        var b = new Image(1, 1);
        Gc(b, void 0, {});
        b.onload = function() {
            b.onload = null
        };
        b.onerror = function() {
            b.onerror = null
        };
        b.src = a
    };
    var Oc = [];

    function N(a) {
        return Oc[a] === void 0 ? !1 : Oc[a]
    };

    function Pc() {
        var a = a === void 0 ? document : a;
        var b;
        return !((b = a.featurePolicy) == null || !(ca = b.allowedFeatures(), r(ca, "includes")).call(ca, "attribution-reporting"))
    };

    function Qc() {
        var a = {};
        var b = L.google_tag_data;
        L.google_tag_data = b === void 0 ? a : b;
        a = L.google_tag_data;
        return a.ics = a.ics || new Rc
    }

    function Rc() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.g = []
    }
    n = Rc.prototype;
    n.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        K(19);
        b == null ? K(18) : Sc(this, a, b === "granted", c, d, e, f, g)
    };
    n.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) Sc(this, a[d], void 0, void 0, "", "", b, c)
    };

    function Sc(a, b, c, d, e, f, g, h) {
        var k = r(a, "entries"),
            l = k[b] || {},
            m = l.region;
        d = d && wc(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || d === f || (d === e ? m !== f : !d && !m)) {
            f = !!(g && g > 0 && l.update === void 0);
            var q = {
                region: d,
                declare_region: l.declare_region,
                implicit: l.implicit,
                default: c !== void 0 ? c : l.default,
                declare: l.declare,
                update: l.update,
                quiet: f
            };
            if (e !== "" || l.default !== !1) k[b] = q;
            f && L.setTimeout(function() {
                    k[b] === q && q.quiet && (K(2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, h), a.notifyListeners())
                },
                g)
        }
    }
    n.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        e = r(this, "entries")[a] || {};
        a = this.getConsentState(a, c);
        if (e.quiet)
            for (e.quiet = !1, b = u(d), d = b.next(); !d.done; d = b.next()) Tc(this, d.value);
        else if (b !== void 0 && a !== b)
            for (b = u(d), d = b.next(); !d.done; d = b.next()) Tc(this, d.value)
    };
    n.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = r(this, "entries");
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    n.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = r(this, "entries"),
            g = f[a] || {},
            h = g.declare_region;
        c = c && wc(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || c === e || (c === d ? h !== e : !c && !h))
            if (b = {
                    region: g.region,
                    declare_region: c,
                    declare: b === "granted",
                    implicit: g.implicit,
                    default: g.default,
                    update: g.update,
                    quiet: g.quiet
                }, d !== "" || g.declare !== !1) f[a] = b
    };
    n.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = r(this, "entries");
        a = c[a] = c[a] || {};
        a.implicit !== !1 && (a.implicit = b === "granted")
    };
    n.getConsentState = function(a, b) {
        var c = r(this, "entries"),
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (b.usedContainerScopedDefaults) {
            e = b.containerScopedDefaults[a];
            if (e === 3) return 1;
            if (e === 2) return 2
        } else if (e = d.default, e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            a = b.delegatedConsentTypes[a];
            c = c[a] || {};
            e = c.update;
            if (e !== void 0) return e ? 1 : 2;
            if (b.usedContainerScopedDefaults) {
                b = b.containerScopedDefaults[a];
                if (b === 3) return 1;
                if (b === 2) return 2
            } else if (e = c.default,
                e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    n.addListener = function(a, b) {
        this.g.push({
            consentTypes: a,
            T: b
        })
    };

    function Tc(a, b) {
        for (var c = 0; c < a.g.length; ++c) {
            var d = a.g[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.P = !0)
        }
    }
    n.notifyListeners = function(a, b) {
        for (var c = 0; c < this.g.length; ++c) {
            var d = this.g[c];
            if (d.P) {
                d.P = !1;
                try {
                    d.T({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var Uc = {},
        Vc = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (Uc.ad_storage = 1, Uc.analytics_storage = 1, Uc.ad_user_data = 1, Uc.ad_personalization = 1, Uc),
            usedContainerScopedDefaults: !1
        };

    function Wc(a) {
        var b = Qc();
        b.accessedAny = !0;
        return (wc(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, Vc)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        })
    }

    function Xc(a) {
        var b = Qc();
        b.accessedAny = !0;
        return !(r(b, "entries")[a] || {}).quiet
    }

    function Yc(a, b) {
        Qc().addListener(a, b)
    }

    function Zc(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Xc(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Yc(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function $c(a, b) {
        function c() {
            for (var g = [], h = 0; h < e.length; h++) {
                var k = e[h];
                Wc(k) && !f[k] && g.push(k)
            }
            return g
        }

        function d(g) {
            for (var h = 0; h < g.length; h++) f[g[h]] = !0
        }
        var e = wc(b) ? [b] : b,
            f = {};
        b = c();
        b.length !== e.length && (d(b), Yc(e, function(g) {
            function h(m) {
                m.length !== 0 && (d(m), g.consentTypes = m, a(g))
            }
            var k = c();
            if (k.length !== 0) {
                var l = r(Object, "keys").call(Object, f).length;
                k.length + l >= e.length ? h(k) : L.setTimeout(function() {
                    h(c())
                }, 500)
            }
        }))
    };
    var ad = /:[0-9]+$/,
        bd = /^\d+\.fls\.doubleclick\.net$/;

    function cd(a, b) {
        a = u(a.split("&"));
        for (var c = a.next(); !c.done; c = a.next()) {
            var d = u(c.value.split("="));
            c = d.next().value;
            for (var e, f = []; !(e = d.next()).done;) f.push(e.value);
            d = f;
            if (decodeURIComponent(c.replace(/\+/g, " ")) === b) return decodeURIComponent(d.join("=").replace(/\+/g, " "))
        }
    }

    function P(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = dd(a.protocol) || dd(L.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : L.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || L.location.hostname).replace(ad, "").toLowerCase());
        var f = dd(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                d = "";
                a && a.href && (d = a.href.indexOf("#"), d = d < 0 ? a.href : a.href.substring(0, d));
                a = d;
                break;
            case "protocol":
                a = f;
                break;
            case "host":
                a = a.hostname.replace(ad, "").toLowerCase();
                c && (d = /^www\d*\./.exec(a)) && d[0] && (a = a.substring(d[0].length));
                break;
            case "port":
                a = String(Number(a.port) || (f === "http" ? 80 : f === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || K(1);
                a = a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                (d || []).indexOf(a[a.length - 1]) >= 0 && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                e && (a = cd(a, e));
                break;
            case "extension":
                a =
                    a.pathname.split(".");
                a = a.length > 1 ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function dd(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
    var ed = {},
        fd = 0;

    function gd(a) {
        var b = ed[a];
        if (!b) {
            b = M.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            c[0] !== "/" && (a || K(1), c = "/" + c);
            var d = b.hostname.replace(ad, "");
            b = {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            };
            fd < 5 && (ed[a] = b, fd++)
        }
        return b
    };

    function hd(a, b, c, d) {
        if (id(d)) {
            d = [];
            b = String(b || jd()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g === a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function kd(a, b, c) {
        var d = ld,
            e = ["ad_storage", "ad_user_data"];
        if (id(e)) {
            a = md(a, d, e);
            if (a.length === 1) return a[0].id;
            if (a.length !== 0) {
                a = nd(a, function(f) {
                    return f.S
                }, b);
                if (a.length === 1) return a[0].id;
                a = nd(a, function(f) {
                    return f.X
                }, c);
                return a[0] ? a[0].id : void 0
            }
        }
    }

    function od(a, b, c, d) {
        var e = jd(),
            f = window;
        f.origin !== "null" && (f.document.cookie = a);
        a = jd();
        return e !== a || c !== void 0 && hd(b, a, !1, d).indexOf(c) >= 0
    }

    function pd(a, b, c) {
        function d(q, w, x) {
            if (x == null) return delete g[w], q;
            g[w] = x;
            return q + "; " + w + "=" + x
        }

        function e(q, w) {
            if (w == null) return q;
            g[w] = !0;
            return q + "; " + w
        }
        if (id(c.A)) {
            if (b == null) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = qd(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else c.expires != null && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.ra);
            f = d(f, "samesite", c.sa);
            c.ta && (f = e(f, "secure"));
            if ((h = c.domain) && h.toLowerCase() === "auto") {
                h = rd();
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k] !== "none" ? h[k] : void 0,
                        m = d(f, "domain", l);
                    m = e(m, c.flags);
                    if (!sd(l, c.path) && od(m, a, b, c.A)) break
                }
            } else h && h.toLowerCase() !== "none" && (f = d(f, "domain", h)), f = e(f, c.flags), sd(h, c.path) || od(f, a, b, c.A)
        }
    }

    function td(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        pd(a, b, c)
    }

    function nd(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                k = b(h);
            k === c ? d.push(h) : f === void 0 || k < f ? (e = [h], f = k) : k === f && e.push(h)
        }
        return d.length > 0 ? d : e
    }

    function md(a, b, c) {
        var d = [];
        a = hd(a, void 0, void 0, c);
        for (c = 0; c < a.length; c++) {
            var e = a[c].split("."),
                f = e.shift();
            if (!b || !f || b.indexOf(f) !== -1)
                if (f = e.shift()) f = f.split("-"), d.push({
                    id: e.join("."),
                    S: Number(f[0]) || 1,
                    X: Number(f[1]) || 1
                })
        }
        return d
    }

    function qd(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var ud = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Vd = /(^|\.)doubleclick\.net$/i;

    function sd(a, b) {
        return a !== void 0 && (Vd.test(window.document.location.hostname) || b === "/" && ud.test(a))
    }

    function $d(a) {
        if (!a) return 1;
        var b = a;
        N(8) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function ae(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function be(a, b) {
        a = "" + $d(a);
        b = ae(b);
        b > 1 && (a += "-" + b);
        return a
    }

    function jd() {
        return window.origin !== "null" ? window.document.cookie : ""
    }

    function id(a) {
        return a && N(9) ? (Array.isArray(a) ? a : [a]).every(function(b) {
            return Xc(b) && Wc(b)
        }) : !0
    }

    function rd() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (b.length === 4) {
            var c = b[b.length - 1];
            if (Number(c).toString() === c) return ["none"]
        }
        for (c = b.length - 2; c >= 0; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        Vd.test(b) || ud.test(b) || a.push("none");
        return a
    };

    function ce(a, b, c, d) {
        var e, f = Number(a.K != null ? a.K : void 0);
        f !== 0 && (e = new Date((b || zc().getTime()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            A: d
        }
    };
    var ld = ["1"],
        de = {},
        ee = {};

    function fe(a, b, c, d) {
        b = ["1", be(c.domain, c.path), b].join(".");
        c = ce(c, d);
        c.A = ["ad_storage", "ad_user_data"];
        td(a, b, c)
    }

    function ge(a, b, c) {
        b = kd(a, $d(b), ae(c));
        if (!b) return !1;
        c = b.split(".");
        c.length === 5 ? (de[a] = c.slice(0, 2).join("."), ee[a] = {
            id: c.slice(2, 4).join("."),
            O: Number(c[4]) || 0
        }) : c.length === 3 ? ee[a] = {
            id: c.slice(0, 2).join("."),
            O: Number(c[2]) || 0
        } : de[a] = b;
        return !0
    }

    function he(a) {
        return (a || "_gcl") + "_au"
    };

    function ie(a, b, c) {
        a = je(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function je(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    !D("Android") || Ma();
    Ma();
    D("Safari") && (Ma() || (E() ? 0 : D("Coast")) || (E() ? 0 : D("Opera")) || (E() ? 0 : D("Edge")) || (E() ? La("Microsoft Edge") : D("Edg/")) || E() && La("Opera"));
    var ke = {},
        le = null;

    function me(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        a === void 0 && (a = 0);
        if (!le)
            for (le = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; e < 5; e++) {
                var f = c.concat(d[e].split(""));
                ke[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    le[h] === void 0 && (le[h] = g)
                }
            }
        a = ke[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                l = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | l >> 4];
            l = a[(l & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + l + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function ne(a, b, c, d, e, f) {
        var g = ib(c, "fmt");
        if (d) {
            var h = ib(c, "random"),
                k = ib(c, "label") || "";
            if (!h) return !1;
            h = me(decodeURIComponent(k.replace(/\+/g, " ")) + ":" + decodeURIComponent(h.replace(/\+/g, " ")));
            if (!ie(a, h, d)) return !1
        }
        g && Number(g) !== 4 && (c = kb(c, "rfmt", g));
        c = kb(c, "fmt", 4);
        Hc(c, function() {
            a.google_noFurtherRedirects && d && (a.google_noFurtherRedirects = null, d())
        }, e, f, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var oe = {},
        pe = (oe.k = {
            G: /^[\w-]+$/
        }, oe.b = {
            G: /^[\w-]+$/,
            L: !0
        }, oe.i = {
            G: /^[1-9]\d*$/
        }, oe.u = {
            G: /^[1-9]\d*$/
        }, oe);
    var qe = {},
        te = (qe[5] = {
            R: {
                2: re
            },
            H: ["k", "i", "b", "u"]
        }, qe[4] = {
            R: {
                2: re,
                GCL: se
            },
            H: ["k", "i", "b"]
        }, qe);

    function re(a, b) {
        var c = a.split(".");
        if (c.length === 3 && (a = {}, b = te[b])) {
            b = b.H;
            c = u(c[2].split("$"));
            for (var d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = d[0];
                if (b.indexOf(e) !== -1) try {
                    var f = decodeURIComponent(d.substring(1)),
                        g = pe[e];
                    g && (g.L ? (a[e] = a[e] || [], a[e].push(f)) : a[e] = f)
                } catch (h) {}
            }
            return a
        }
    }

    function se(a) {
        a = a.split(".");
        a.shift();
        var b = a.shift(),
            c = a.shift(),
            d = {};
        return d.k = c, d.i = b, d.b = a, d
    };

    function ue(a) {
        var b = [],
            c = M.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                M: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function ve(a, b) {
        a = ue(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!(e[0] !== "1" || b && e.length < 3 || !b && e.length !== 3) && Number(e[1])) {
                c[a[d].M] || (c[a[d].M] = []);
                var f = {
                    version: e[0],
                    timestamp: Number(e[1]) * 1E3,
                    j: e[2]
                };
                b && e.length > 3 && (f.labels = e.slice(3));
                c[a[d].M].push(f)
            }
        }
        return c
    };
    var we = new p.Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function xe(a) {
        if (te[5]) {
            var b = [];
            a = hd(a, void 0, void 0, we.get(5));
            a = u(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                a: {
                    c = c.value;
                    var d = te[5];
                    if (d) {
                        var e = c.split(".")[0];
                        if (e && (d = d.R[e])) {
                            c = d(c, 5);
                            break a
                        }
                    }
                    c = void 0
                }
                c && (ye(c), b.push(c))
            }
            return b
        }
    }

    function ze(a, b, c, d) {
        c = c || {};
        var e = be(c.domain, c.path),
            f = te[5];
        if (f) {
            var g = [];
            f = u(f.H);
            for (var h = f.next(); !h.done; h = f.next()) {
                h = h.value;
                var k = pe[h];
                if (k) {
                    var l = b[h];
                    if (l !== void 0)
                        if (k.L && Array.isArray(l))
                            for (k = u(l), l = k.next(); !l.done; l = k.next()) g.push(encodeURIComponent(h + l.value));
                        else g.push(encodeURIComponent(h + l))
                }
            }
            b = ["2", e || "1", g.join("$")].join(".")
        } else b = void 0;
        b && (c = ce(c, d, void 0, we.get(5)), td(a, b, c))
    }

    function Ae(a, b) {
        b = b.G;
        return typeof b === "function" ? b(a) : b.test(a)
    }

    function ye(a) {
        for (var b = u(r(Object, "keys").call(Object, a)), c = b.next(), d = {}; !c.done; d = {
                C: void 0
            }, c = b.next()) {
            c = c.value;
            var e = a[c];
            d.C = pe[c];
            d.C ? d.C.L ? a[c] = Array.isArray(e) ? e.filter(function(f) {
                return function(g) {
                    return Ae(g, f.C)
                }
            }(d)) : void 0 : typeof e === "string" && Ae(e, d.C) || (a[c] = void 0) : a[c] = void 0
        }
    };
    var Be = ["ad_storage", "ad_user_data"];

    function Ce() {
        var a = De();
        if (a.error) return a;
        if (!a.value) return {
            error: 2
        };
        try {
            var b = a.value.gclid
        } catch (c) {
            return {
                error: 11
            }
        }
        return b ? {
            value: b
        } : {
            value: void 0
        }
    }

    function De() {
        var a = a === void 0 ? !0 : a;
        if (!Wc(Be)) return {
            error: 3
        };
        try {
            if (!L.localStorage) return {
                error: 1
            }
        } catch (g) {
            return {
                error: 14
            }
        }
        var b = {
                schema: "gcl",
                version: 1
            },
            c = void 0;
        try {
            c = L.localStorage.getItem("_gcl_ls")
        } catch (g) {
            return {
                error: 13
            }
        }
        try {
            if (c) {
                var d = JSON.parse(c);
                if (d && typeof d === "object") b = d;
                else return {
                    error: 12
                }
            }
        } catch (g) {
            return {
                error: 8
            }
        }
        if (b.schema !== "gcl") return {
            error: 4
        };
        if (b.version !== 1) return {
            error: 5
        };
        try {
            var e = Ee(b);
            if (a && e) a: if (a = b) {
                try {
                    var f = JSON.stringify(a)
                } catch (g) {
                    break a
                }
                try {
                    L.localStorage.setItem("_gcl_ls",
                        f)
                } catch (g) {}
            }
        } catch (g) {
            return {
                error: 8
            }
        }
        return {
            value: b,
            error: 0
        }
    }

    function Ee(a) {
        if (!a || typeof a !== "object") return !1;
        if ("expires" in a && "value" in a) {
            var b;
            typeof a.expires === "number" ? b = a.expires : b = typeof a.expires === "string" ? Number(a.expires) : NaN;
            if (isNaN(b) || !(Date.now() <= b)) return a.value = null, a.error = 9, !0
        } else {
            b = !1;
            for (var c = u(r(Object, "keys").call(Object, a)), d = c.next(); !d.done; d = c.next()) b = Ee(a[d.value]) || b;
            return b
        }
        return !1
    };
    var Fe = /^\w+$/,
        S = /^[\w-]+$/,
        T = {},
        Ge = (T.aw = "_aw", T.dc = "_dc", T.gf = "_gf", T.gp = "_gp", T.gs = "_gs", T.ha = "_ha", T.ag = "_ag", T.gb = "_gb", T);

    function U() {
        return ["ad_storage", "ad_user_data"]
    }

    function V(a) {
        return !N(9) || Wc(a)
    }

    function He(a) {
        function b() {
            var d = V(c);
            d && a();
            return d
        }
        var c = U();
        Zc(function() {
            b() || $c(b, c)
        }, c)
    }

    function Ie(a) {
        return W(a).map(function(b) {
            return b.j
        })
    }

    function Je(a) {
        function b(d) {
            return function(e) {
                e.type = d;
                return e
            }
        }
        var c = Ke(a.prefix);
        a = X("gb", c);
        c = X("ag", c);
        if (!c || !a) return [];
        a = W(a).map(b("gb"));
        c = Le(c).map(b("ag"));
        return a.concat(c).sort(function(d, e) {
            return e.timestamp - d.timestamp
        })
    }

    function Me(a, b, c, d, e, f) {
        var g = xc(a, function(h) {
            return h.j === c
        });
        g ? (g.timestamp < d && (g.timestamp = d, g.D = f), g.labels = Ne(g.labels || [], e || [])) : a.push({
            version: b,
            j: c,
            timestamp: d,
            labels: e,
            D: f
        })
    }

    function Le(a) {
        var b = xe(a) || [];
        a = [];
        b = u(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = c = c.value,
                e = d.k;
            d = d.b;
            var f = c ? (Number(c.i) || 0) * 1E3 : 0;
            if (f) {
                var g = void 0;
                N(10) && (g = c.u);
                Me(a, "2", e, f, d || [], g)
            }
        }
        return a.sort(function(h, k) {
            return k.timestamp - h.timestamp
        })
    }

    function W(a) {
        var b = [];
        a = hd(a, M.cookie, void 0, U());
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) c = Oe(c.value), c != null && Me(b, c.version, c.j, c.timestamp, c.labels);
        b.sort(function(d, e) {
            return e.timestamp - d.timestamp
        });
        return Pe(b)
    }

    function Qe(a, b) {
        var c = [];
        a = u(a);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, r(c, "includes").call(c, d) || c.push(d);
        b = u(b);
        for (a = b.next(); !a.done; a = b.next()) a = a.value, r(c, "includes").call(c, a) || c.push(a);
        return c
    }

    function Re(a, b) {
        var c = xc(a, function(d) {
            return d.j === b.j
        });
        c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp, c.D = b.D), c.m = c.m ? b.m ? c.timestamp < b.timestamp ? b.m : c.m : c.m || 0 : b.m || 0, c.labels = Qe(c.labels || [], b.labels || []), c.B = Qe(c.B || [], b.B || [])) : a.push(b)
    }

    function Se() {
        var a = Ce();
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        a = a.value;
        try {
            if (!("value" in a && a.value) || typeof a.value !== "object") return null;
            var b = a.value,
                c = b.value;
            return c && c.match(S) ? {
                version: "",
                j: c,
                timestamp: Number(b.creationTimeMs) || 0,
                labels: [],
                m: b.linkDecorationSource || 0,
                B: [2]
            } : null
        } catch (d) {
            return null
        }
    }

    function Te(a) {
        var b = [];
        a = hd(a, M.cookie, void 0, U());
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) c = Oe(c.value), c != null && (c.D = void 0, c.m = 0, c.B = [1], Re(b, c));
        if (a = Se()) a.D = void 0, a.m = a.m || 0, a.B = a.B || [2], Re(b, a);
        b.sort(function(d, e) {
            return e.timestamp - d.timestamp
        });
        return Pe(b)
    }

    function Ne(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function Ke(a) {
        return a && typeof a === "string" && a.match(Fe) ? a : "_gcl"
    }

    function Ue(a, b) {
        var c = gd(a);
        a = P(c, "query", !1, void 0, "gclid");
        var d = P(c, "query", !1, void 0, "gclsrc"),
            e = P(c, "query", !1, void 0, "wbraid");
        if (e) {
            var f = e;
            try {
                f = decodeURIComponent(e)
            } catch (k) {}
            f = f.split(",");
            e = f.length === 2 && f[0] === f[1] ? f[0] : e
        }
        f = P(c, "query", !1, void 0, "gbraid");
        var g = P(c, "query", !1, void 0, "gad_source"),
            h = P(c, "query", !1, void 0, "dclid");
        !b || a && d && e && f || (b = c.hash.replace("#", ""), a = a || cd(b, "gclid"), d = d || cd(b, "gclsrc"), e = e || cd(b, "wbraid"), f = f || cd(b, "gbraid"), g = g || cd(b, "gad_source"));
        return Ve(a,
            d, h, e, f, g)
    }

    function Ve(a, b, c, d, e, f) {
        function g(k, l) {
            h[l] || (h[l] = []);
            h[l].push(k)
        }
        var h = {};
        h.gclid = a;
        h.gclsrc = b;
        h.dclid = c;
        if (a !== void 0 && a.match(S)) switch (b) {
            case void 0:
                g(a, "aw");
                break;
            case "aw.ds":
                g(a, "aw");
                g(a, "dc");
                break;
            case "ds":
                g(a, "dc");
                break;
            case "3p.ds":
                g(a, "dc");
                break;
            case "gf":
                g(a, "gf");
                break;
            case "ha":
                g(a, "ha")
        }
        c && g(c, "dc");
        d !== void 0 && S.test(d) && (h.wbraid = d, g(d, "gb"));
        e !== void 0 && S.test(e) && (h.gbraid = e, g(e, "ag"));
        f !== void 0 && S.test(f) && (h.gad_source = f, g(f, "gs"));
        return h
    }

    function We(a, b, c, d, e) {
        function f() {
            if (V(l)) {
                var w = ce(c, h, !0);
                w.A = l;
                for (var x = function(v, zb) {
                        var ua = X(v, g);
                        ua && (td(ua, zb, w), v !== "gb" && (m = !0))
                    }, z = function(v) {
                        v = ["GCL", k, v];
                        e.length > 0 && v.push(e.join("."));
                        return v.join(".")
                    }, aa = u(["aw", "dc", "gf", "ha", "gp"]), O = aa.next(); !O.done; O = aa.next()) O = O.value, a[O] && x(O, z(a[O][0]));
                if (!m && a.gb) {
                    var ba = a.gb[0];
                    aa = X("gb", g);
                    !b && W(aa).some(function(v) {
                        return v.j === ba && v.labels && v.labels.length > 0
                    }) || x("gb", z(ba))
                }
            }
            if (!q && a.gbraid && V("ad_storage") && (q = !0, !m)) {
                var Va =
                    a.gbraid;
                x = X("ag", g);
                if (b || !Le(x).some(function(v) {
                        return v.j === Va && v.labels && v.labels.length > 0
                    })) z = {}, z = (z.k = Va, z.i = "" + k, z.b = e, z), ze(x, z, c, h)
            }
            Xe(a, g, h, c)
        }
        c = c || {};
        e = e || [];
        var g = Ke(c.prefix),
            h = d || zc().getTime(),
            k = Math.round(h / 1E3),
            l = U(),
            m = !1,
            q = !1;
        Zc(function() {
            f();
            V(l) || $c(f, l)
        }, l)
    }

    function Xe(a, b, c, d) {
        if (a.gad_source !== void 0 && V("ad_storage")) {
            if (N(4)) {
                var e = Nc();
                if (e === "r" || e === "h") return
            }
            a = a.gad_source;
            if (b = X("gs", b)) {
                e = (e = L.performance) && vc(e.now) ? e.now() : void 0;
                e = Math.round((zc().getTime() - (e || 0)) / 1E3);
                if (N(10)) {
                    var f = L.location.hostname;
                    var g = L.location.pathname;
                    f = Ac(f);
                    f.split(".").length > 2 && (f = f.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
                    g = Ac(g);
                    g = g.split(";")[0];
                    g = g.replace(/\/(ar|slp|web|index)?\/?$/, "");
                    g = (f + g).toLowerCase();
                    f = 1;
                    var h;
                    if (g)
                        for (f =
                            0, h = g.length - 1; h >= 0; h--) {
                            var k = g.charCodeAt(h);
                            f = (f << 6 & 268435455) + k + (k << 14);
                            k = f & 266338304;
                            f = k !== 0 ? f ^ k >> 21 : f
                        }
                    g = String(f);
                    f = {};
                    a = (f.k = a, f.i = "" + e, f.u = g, f)
                } else g = {}, a = (g.k = a, g.i = "" + e, g);
                ze(b, a, d, c)
            }
        }
    }

    function X(a, b) {
        a = Ge[a];
        if (a !== void 0) return b + a
    }

    function Ye(a) {
        return Ze(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function Oe(a) {
        a = Ze(a.split("."));
        return a.length === 0 ? null : {
            version: a[0],
            j: a[2],
            timestamp: (Number(a[1]) || 0) * 1E3,
            labels: a.slice(3)
        }
    }

    function Ze(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !S.test(a[2]) ? [] : a
    }

    function Pe(a) {
        return a.filter(function(b) {
            return S.test(b.j)
        })
    }

    function $e() {
        var a = ["aw"],
            b = {};
        if (L.origin !== "null") {
            for (var c = Ke(b.prefix), d = {}, e = 0; e < a.length; e++) Ge[a[e]] && (d[a[e]] = Ge[a[e]]);
            He(function() {
                yc(d, function(f, g) {
                    g = hd(c + g, M.cookie, void 0, U());
                    g.sort(function(m, q) {
                        return Ye(q) - Ye(m)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = Ye(h);
                        var k = Ze(h.split(".")).length !== 0 ? h.split(".").slice(3) : [],
                            l = {};
                        h = Ze(h.split(".")).length !== 0 ? h.split(".")[2] : void 0;
                        l[f] = [h];
                        We(l, !0, b, g, k)
                    }
                })
            })
        }
    }

    function af(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!V(U())) return e;
        var f = W(a);
        var g = [];
        if (f.length !== 0)
            for (var h = {}, k = 0; k < f.length; k++) {
                var l = f[k],
                    m = l.type ? l.type : "gcl";
                (l.labels || []).indexOf(b) === -1 ? (e.push(0), h[m] || g.push(l)) : e.push(1);
                h[m] = !0
            }
        if (g.length && !d)
            for (d = u(g), f = d.next(); !f.done; f = d.next()) g = f.value, f = g.timestamp, g = [g.version, Math.round(f / 1E3), g.j].concat(g.labels || [], [b]).join("."), f = ce(c, f, !0), f.A = U(), td(a, g, f);
        return e
    }

    function bf(a, b) {
        b = Ke(b);
        b = X(a, b);
        if (!b) return 0;
        a = a === "ag" ? Le(b) : W(b);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function cf(a) {
        for (var b = 0, c = u(r(Object, "keys").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
            d = a[d.value];
            for (var e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp))
        }
        return b
    };
    var df = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        ef = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        ff = /^\d+\.fls\.doubleclick\.net$/,
        gf = /;gac=([^;?]+)/,
        hf = /;gacgb=([^;?]+)/;

    function jf(a, b, c) {
        if (ff.test(a.location.host)) return (b = a.location.href.match(c)) && b.length === 2 && b[1].match(df) ? decodeURIComponent(b[1]) : "";
        a = [];
        c = u(r(Object, "keys").call(Object, b));
        for (var d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = [], f = b[d], g = 0; g < f.length; g++) e.push(f[g].j);
            a.push(d + ":" + e.join(","))
        }
        return a.length > 0 ? a.join(";") : ""
    }

    function kf(a, b, c, d) {
        for (var e = V(U()) ? ve("_gac_gb", !0) : {}, f = [], g = !1, h = u(r(Object, "keys").call(Object, e)), k = h.next(); !k.done; k = h.next()) {
            k = k.value;
            var l = af("_gac_gb_" + k, b, c, d);
            g = g || l.length !== 0 && l.some(function(m) {
                return m === 1
            });
            f.push(k + ":" + l.join(","))
        }
        return {
            V: g ? f.join(";") : "",
            U: jf(a, e, hf)
        }
    }

    function lf(a, b) {
        return (a = a.location.href.match(new RegExp(";" + b + "=([^;?]+)"))) && a.length === 2 && a[1].match(ef) ? a[1] : void 0
    }

    function mf(a, b, c, d) {
        var e = e === void 0 ? !1 : e;
        if (ff.test(a.location.host)) {
            if (e = lf(a, d)) return [{
                j: e
            }]
        } else {
            if (c === "gclid") return a = (b || "_gcl") + "_aw", e ? Te(a) : W(a);
            if (c === "wbraid") return W((b || "_gcl") + "_gb");
            if (c === "braids") return Je({
                prefix: b
            })
        }
        return []
    }

    function nf(a, b) {
        return mf(a, b, "gclid", "gclaw").map(function(c) {
            return c.j
        }).join(".")
    }

    function of (a, b) {
        return mf(a, b, "wbraid", "gclgb").map(function(c) {
            return c.j
        }).join(".")
    }

    function pf(a) {
        if (Ie("_gcl_aw").length === 0 && (!a || Ie(a + "_aw").length === 0)) {
            a = Ue(L.location.href, !0);
            if (N(6)) {
                for (var b = !0, c = u(r(Object, "keys").call(Object, a)), d = c.next(); !d.done; d = c.next())
                    if (a[d.value] !== void 0) {
                        b = !1;
                        break
                    }
                b && (a = Ue(L.document.referrer, !1), a.gad_source = void 0)
            }
            We(a, !1, {});
            $e()
        }
    }

    function qf(a, b, c) {
        a = af((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return a.length === 0 || a.every(function(d) {
            return d === 0
        }) ? "" : a.join(".")
    };

    function rf() {
        var a = L.__uspapi;
        if (vc(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    d && c && (c = c.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(c) && (b = c)
                })
            } catch (c) {}
            return b
        }
    };
    var sf = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function tf(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function uf(a) {
        a = a.google_tag_data;
        if (a != null && a.uach) {
            a = a.uach;
            var b = r(Object, "assign").call(Object, {}, a);
            a.fullVersionList && (b.fullVersionList = a.fullVersionList.slice(0));
            a = b
        } else a = null;
        return a
    }

    function vf(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function wf() {
        var a = window;
        if (vf(a)) {
            var b = tf(a);
            b.uach_promise || (a = a.navigator.userAgentData.getHighEntropyValues(sf).then(function(c) {
                b.uach != null || (b.uach = c);
                return c
            }), b.uach_promise = a)
        }
    };
    var xf = /^[a-zA-Z0-9_]+$/,
        yf = !1,
        zf = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "),
        Af = ["google_conversion_first_time", "google_conversion_snippets"];

    function Bf(a) {
        return a != null ? encodeURIComponent(String(a)) : ""
    }

    function Cf(a) {
        if (a != null) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return b == -1 ? a : a.substring(0, b)
        }
        return ""
    }

    function Y(a, b) {
        b = Bf(b);
        return b != "" && (a = Bf(a), a != "") ? "&".concat(a, "=", b) : ""
    }

    function Df(a) {
        var b = typeof a;
        return a == null || b == "object" || b == "function" ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Ef(a) {
        if (!a || typeof a != "object" || typeof a.join == "function") return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && typeof d.join === "function") {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Df(d[f]);
                        g != null && e.push(g)
                    }
                    d = e.length == 0 ? null : e.join(",")
                } else d = Df(d);
                (e = Df(c)) && d != null && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function Ff(a) {
        return typeof a != "number" && typeof a != "string" ? "" : Bf(a.toString())
    }

    function Gf(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = Hf(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        b.google_gcl_cookie_max_age_seconds != null && (e.K = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (If(b) && b.I) var f = b.F === void 0;
        else ff.test(a.location.host) ? f = !(lf(a, "gclaw") || lf(a, "gac")) : (f = Math.max(bf("aw", d), cf(V(U()) ? ve() : {})), f = Math.max(bf("gb", d), cf(V(U()) ? ve("_gac_gb", !0) : {})) > f);
        if (f) {
            if (b.F !== void 0) return b.F;
            c = of (a, d || void 0);
            f = b.google_conversion_label;
            var g = qf(f, e, b.I);
            c = Y("gclgb", c) + (g ? Y("mcov", g) : "");
            if (d) return b.F = c;
            d = kf(a, f, e, b.I);
            a = d.U;
            d = d.V;
            c += (a ? Y("gacgb", a) : "") + (d ? Y("gacmcov", d) : "");
            return b.F = c
        }
        if (d) return b = nf(a, d), Y("gclaw", b);
        (b = nf(a)) && (c = Y("gclaw", b));
        b = jf(a, V(U()) ?
            ve() : {}, gf);
        return c + (b ? Y("gac", b) : "")
    }

    function Jf(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (a == void 0 || a == "") return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function Kf(a, b, c, d, e) {
        var f = "https://",
            g = d.google_conversion_type === "landing" ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var h = "googleads.g.doubleclick.net/";
                var k = "pagead/viewthroughconversion/";
                break;
            case 1:
                    h = "www.google.com/";k = "pagead/1p-conversion/";
                break;
            case 6:
                    h = "www.google.com/";k = "ccm/conversion/";
                break;
            case 0:
                    h = d.google_conversion_domain || "www.googleadservices.com/";k = "pagead/conversion/";
                break;
            case 5:
                    h = d.google_conversion_domain || "www.googleadservices.com/";k = "ccm/conversion/";
                break;
            case 4:
                    var l = d.google_gtm_experiments;h = l && l.apcm ? "www.google.com" : l && l.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/";k = "pagead/privacysandbox/conversion/";
                break;
            case 7:
                    h = "googleads.g.doubleclick.net/",
                k = "td/rul/"
        }
        Zb && d.google_transport_url && (h = d.google_transport_url);
        h[h.length - 1] !== "/" && (h += "/");
        if (h.indexOf("http://") === 0 || h.indexOf("https://") === 0) f = "";
        var m = [f, h, k, Bf(d.google_conversion_id), g, "?random=", Bf(d.google_conversion_time)].join(""),
            q =
            m,
            w = Y("cv", d.google_conversion_js_version),
            x = Y("fst", d.google_conversion_first_time),
            z = Y("num", d.google_conversion_snippets),
            aa = Y("fmt", d.google_conversion_format),
            O = d.google_remarketing_only ? Y("userId", d.google_user_id) : "",
            ba = d.google_tag_for_child_directed_treatment;
        var Va = ba == null || ba !== 0 && ba !== 1 ? "" : Y("tfcd", ba);
        var v = d.google_tag_for_under_age_of_consent;
        var zb = v == null || v !== 0 && v !== 1 ? "" : Y("tfua", v);
        var ua = d.google_allow_ad_personalization_signals;
        var Xf = ua === !1 ? Y("npa", 1) : ua === !0 ? Y("npa", 0) : "";
        var vd = d.google_restricted_data_processing;
        var Yf = ac ? vd === !0 ? Y("rdp", 1) : vd === !1 ? Y("rdp", 0) : "" : "";
        var Zf = Y("value", d.google_conversion_value),
            $f = Y("currency_code", d.google_conversion_currency),
            ag = Y("label", d.google_conversion_label),
            bg = Y("oid", d.google_conversion_order_id),
            cg = Y("bg", d.google_conversion_color);
        a: {
            var wd = d.google_conversion_language;
            if (wd != null) {
                var xa = wd.toString();
                if (2 == xa.length) {
                    var Gb = Y("hl", xa);
                    break a
                }
                if (5 == xa.length) {
                    Gb = Y("hl", xa.substring(0, 2)) + Y("gl", xa.substring(3, 5));
                    break a
                }
            }
            Gb =
            ""
        }
        var dg = Y("guid", "ON"),
            eg = !d.google_conversion_domain && "GooglemKTybQhCsO" in A && typeof A.GooglemKTybQhCsO == "function" ? Y("resp", "GooglemKTybQhCsO") : "",
            fg = Y("disvt", d.google_disable_viewthrough),
            gg = Y("eid", gc().join()),
            Hb = d.google_conversion_date,
            G = [];
        if (a) {
            var ja = a.screen;
            ja && (G.push(Y("u_h", ja.height)), G.push(Y("u_w", ja.width)), G.push(Y("u_ah", ja.availHeight)), G.push(Y("u_aw", ja.availWidth)), G.push(Y("u_cd", ja.colorDepth)));
            a.history && G.push(Y("u_his", a.history.length))
        }
        Hb && typeof Hb.getTimezoneOffset ==
            "function" && G.push(Y("u_tz", -Hb.getTimezoneOffset()));
        b && (typeof b.javaEnabled == "function" && G.push(Y("u_java", b.javaEnabled())), b.plugins && G.push(Y("u_nplug", b.plugins.length)), b.mimeTypes && G.push(Y("u_nmime", b.mimeTypes.length)));
        var hg = G.join("");
        var ig = b && b.sendBeacon ? Y("sendb", "1") : "",
            kg = Lf(),
            lg = Y("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            xd = Ef(d.google_custom_params),
            yd = Ef(),
            zd = xd.concat(xd.length > 0 && yd.length > 0 ? ";" : "", yd);
        var mg = zd == "" ? "" : "&".concat("data=", encodeURIComponent(zd));
        var ng = Gf(c, d);
        if (!I || J(23) != "658953496" && J(23) != "658953495" || d.google_read_gcl_cookie_opt_out || d.google_conversion_domain || d.google_remarketing_only) var Ad = "";
        else {
            var Ib = Hf(d),
                B = {};
            d.google_gcl_cookie_domain && (B.domain = d.google_gcl_cookie_domain);
            d.google_gcl_cookie_flags && (B.flags = d.google_gcl_cookie_flags);
            d.google_gcl_cookie_max_age_seconds != null && (B.K = d.google_gcl_cookie_max_age_seconds);
            d.google_gcl_cookie_path && (B.path = d.google_gcl_cookie_path);
            Ib && (B.prefix = Ib);
            var ya = !1;
            ya = ya === void 0 ? !0 :
                ya;
            var Xa = he(B.prefix);
            if (!de[Xa])
                if (ge(Xa, B.path, B.domain)) {
                    var Ya = ee[he(B.prefix)];
                    if (ya) {
                        var Bd = Ya ? Ya.id : void 0,
                            Cd = Ya ? Ya.O : void 0,
                            Dd = he(B.prefix),
                            Za = de[Dd];
                        if (Za) {
                            var Ed = Za.split(".");
                            if (Ed.length === 2) {
                                var Fd = Number(Ed[1]) || 0;
                                if (Fd) {
                                    var Gd = Za;
                                    Bd && (Gd = Za + "." + Bd + "." + (Cd ? Cd : Math.floor(zc().getTime() / 1E3)));
                                    fe(Dd, Gd, B, Fd * 1E3)
                                }
                            }
                        }
                    }
                } else {
                    b: {
                        var Hd = gd(L.location.href),
                            Id = P(Hd, "host", !1);
                        if (Id && Id.match(bd)) {
                            var Jd = P(Hd, "path");
                            if (Jd) {
                                var Kd = Jd.split("auiddc=");
                                if (Kd.length > 1) {
                                    var Ld = Kd[1].split(";")[0].split("?")[0];
                                    break b
                                }
                            }
                        }
                        Ld = void 0
                    }
                    var Md = Ld;Md ? (K(17), de[Xa] = Md) : ya && (fe(he(B.prefix), [String(Math.round(Math.random() * 2147483647)), Math.round(zc().getTime() / 1E3)].join("."), B), ge(Xa, B.path, B.domain))
                }
            var Nd = de[he(Ib)];
            Ad = Nd ? Y("auid", Nd) : ""
        }
        var og = Ad,
            Od = d.google_conversion_page_url,
            pg = d.google_conversion_referrer_url,
            za = "";
        if (c) {
            if (a.top == a) var Pd = 0;
            else {
                var Jb = a.location.ancestorOrigins;
                Pd = Jb ? Jb[Jb.length - 1] == a.location.origin ? 1 : 2 : vb(a.top) ? 1 : 2
            }
            var Qd = Pd;
            var Rd = Od ? Od : Qd == 1 ? a.top.location.href : a.location.href;
            var Sd = "";
            I && H(["509562772", "509562773"], Vb, 21);
            if (I && (J(21) == "509562773" || J(21) == "509562772")) {
                for (var Q, R = a, Td = R; R && R != R.parent;) R = R.parent, vb(R) && (Td = R);
                Q = Td;
                var Aa = Q.location.href;
                if (Q === Q.top) var Ud = {
                    url: Aa,
                    W: !0
                };
                else {
                    var Kb = !1,
                        Lb = Q.document;
                    Lb && Lb.referrer && (Aa = Lb.referrer, Q.parent === Q.top && (Kb = !0));
                    var Mb = Q.location.ancestorOrigins;
                    if (Mb) {
                        var Nb = Mb[Mb.length - 1];
                        Nb && Aa.indexOf(Nb) === -1 && (Kb = !1, Aa = Nb)
                    }
                    Ud = {
                        url: Aa,
                        W: Kb
                    }
                }
                var Ob = Ud;
                Ob.url && Rd !== Ob.url && (Sd = Ob.url)
            }
            za += Y("frm", Qd);
            za += Y("url", Cf(Rd));
            za += Y("ref", Cf(pg || c.referrer));
            za += Y("top", Cf(Sd))
        }
        var sg = [w, x, z, aa, O, Va, zb, Xf, Yf, Zf, $f, ag, bg, cg, Gb, dg, eg, fg, gg, hg, ig, kg, lg, mg, ng, og, za, Jf(c), Mf(d.google_additional_params), Mf(d.google_remarketing_only ? {} : d.google_additional_conversion_params), "&hn=" + Bf("www.googleadservices.com"), Nf(a), Of(a)].join(""),
            Wd = fc(),
            Pb = sg + (Wd.length > 0 ? "&debug_experiment_id=" + Wd : "");
        if (d.google_remarketing_only || d.google_conversion_domain) var Xd = Pb;
        else {
            var tg = [Y("mid", d.google_conversion_merchant_id), Y("fcntr", d.google_basket_feed_country),
                Y("flng", d.google_basket_feed_language), Y("dscnt", d.google_basket_discount), Y("bttype", d.google_basket_transaction_type)
            ].join("");
            if (d) {
                var Qb = d.google_conversion_items;
                if (Qb) {
                    for (var Rb = [], Sb = 0, ug = Qb.length; Sb < ug; Sb++) {
                        var ka = Qb[Sb],
                            la = [];
                        ka && (la.push(Ff(ka.value)), la.push(Ff(ka.quantity)), la.push(Ff(ka.item_id)), la.push(Ff(ka.start_date)), la.push(Ff(ka.end_date)), Rb.push("(" + la.join("*") + ")"))
                    }
                    var Tb = Rb.length > 0 ? "&item=" + Rb.join("") : ""
                } else Tb = ""
            } else Tb = "";
            var Yd = [Pb, tg, Tb].join("");
            Xd = Yd.length >
                4E3 ? [Pb, Y("item", "elngth")].join("") : Yd
        }
        m = q + Xd;
        e === 1 || e === 6 ? m += [Y("gcp", 1), Y("sscte", 1), Y("ct_cookie_present", 1)].join("") : e == 3 && (m += Y("gcp", 1), m += Y("ct_cookie_present", 1));
        if ($b) {
            var Zd = rf();
            Zd !== void 0 && (m += Y("us_privacy", Zd || "error"))
        }
        If(d) && (m = d.I ? m + Y("gbcov", 1) : m + Y("gbcov", 0));
        return m
    }

    function Pf(a, b, c, d, e, f, g) {
        return '<iframe name="' + a + '"' + (g ? ' id="' + g + '"' : "") + ' title="' + b + '" width="' + d + '" height="' + e + '"' + (c ? ' src="' + c + '"' : "") + ' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"' + (f ? ' style="display:none"' : "") + ' scrolling="no"></iframe>'
    }

    function Qf(a) {
        return {
            ar: 1,
            bg: 1,
            cs: 1,
            da: 1,
            de: 1,
            el: 1,
            en_AU: 1,
            en_US: 1,
            en_GB: 1,
            es: 1,
            et: 1,
            fi: 1,
            fr: 1,
            hi: 1,
            hr: 1,
            hu: 1,
            id: 1,
            is: 1,
            it: 1,
            iw: 1,
            ja: 1,
            ko: 1,
            lt: 1,
            nl: 1,
            no: 1,
            pl: 1,
            pt_BR: 1,
            pt_PT: 1,
            ro: 1,
            ru: 1,
            sk: 1,
            sl: 1,
            sr: 1,
            sv: 1,
            th: 1,
            tl: 1,
            tr: 1,
            vi: 1,
            zh_CN: 1,
            zh_TW: 1
        }[a] ? a + ".html": "en_US.html"
    }

    function Rf(a, b, c, d) {
        function e(h, k, l, m, q) {
            m = m ? ' style="display:none"' : "";
            return "<img " + (q && kc() ? "attributionsrc " : "") + 'height="' + l + '" width="' + k + '" border="0" alt="" src="' + h + '"' + m + " />"
        }
        jc() && qc(2);
        var f = "";
        d.google_remarketing_only && d.google_enable_display_cookie_match && !tc && (I && H(["376635470", "376635471"], Eb, 2), f = d.google_remarketing_only && d.google_enable_display_cookie_match && !tc && I && J(2) == "376635471" ? Pf("google_cookie_match_frame", "Google cookie match frame", "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE",
            1, 1, !0, null) : "");
        d.google_remarketing_only && !d.google_conversion_domain && I && H(["759238990", "759238991"], Yb, 13);
        !d.google_remarketing_only || d.google_conversion_domain || I && (J(14) == "759248991" || J(14) == "759248990") || I && H(["759248990", "759248991"], Xb, 14);
        d.google_conversion_linker !== !1 && pf(d.google_gcl_cookie_prefix);
        b = Kf(a, b, c, d, d.google_remarketing_only ? 2 : 0);
        if (d.google_conversion_format == 0 && d.google_conversion_domain == null) return '<a href="https://services.google.com/sitestats/' + (Qf(d.google_conversion_language) +
            "?cid=" + Bf(d.google_conversion_id)) + '" target="_blank">' + e(b, 135, 27, !1, !1) + "</a>" + f;
        if (d.google_conversion_snippets !== void 0 && d.google_conversion_snippets > 1 || d.google_conversion_format == 3) {
            var g = b;
            d.google_conversion_domain == null && (g = d.google_conversion_format == 3 ? b : kb(b, "fmt", 3));
            b = void 0;
            kc() && !d.google_remarketing_only && (b = {
                attributionsrc: ""
            });
            return Sf(a, c, d, g, b) ? f : e(g, 1, 1, !0, !d.google_remarketing_only) + f
        }
        g = null;
        !d.google_conversion_domain && Sf(a, c, d, b) && (g = "goog_conv_iframe", b = "");
        return Pf("google_conversion_frame",
            "Google conversion frame", b, d.google_conversion_format == 2 ? 200 : 300, d.google_conversion_format == 2 ? 26 : 13, !1, g) + f
    }

    function Sf(a, b, c, d, e) {
        if (c.google_conversion_domain) return !1;
        try {
            return ne(a, b, d, null, void 0, e)
        } catch (f) {
            return !1
        }
    }

    function Tf(a) {
        if (a.google_conversion_type === "landing" || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = typeof a.google_conversion_snippets === "number" && a.google_conversion_snippets > 0 ? a.google_conversion_snippets + 1 : 1;
        a.google_conversion_first_time === void 0 && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        a.google_conversion_format != 0 && a.google_conversion_format != 1 && a.google_conversion_format != 2 && a.google_conversion_format != 3 && (a.google_conversion_format = 3);
        a.google_enable_display_cookie_match !== !1 && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function Uf(a) {
        for (var b = 0; b < zf.length; b++) a[zf[b]] = null
    }

    function Vf(a) {
        for (var b = {}, c = 0; c < zf.length; c++) b[zf[c]] = a[zf[c]];
        for (c = 0; c < Af.length; c++) b[Af[c]] = a[Af[c]];
        return b
    }

    function Lf() {
        var a = "";
        jc() && (a = sc().map(function(b) {
            return b.join("-")
        }).join("_"));
        return Y("li", a)
    }

    function Nf(a) {
        if (!bc || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!vc(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : Y("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function Of(a) {
        function b(d, e) {
            e != null && c.push(d + "=" + encodeURIComponent(e))
        }
        if (!ic()) return "";
        a = uf(a);
        if (!a) return "";
        var c = [];
        b("&uaa", a.architecture);
        b("&uab", a.bitness);
        b("&uam", a.model);
        b("&uap", a.platform);
        b("&uapv", a.platformVersion);
        a.wow64 != null && b("&uaw", a.wow64 ? "1" : "0");
        a.fullVersionList && b("&uafvl", a.fullVersionList.map(function(d) {
            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
        }).join("|"));
        return c.join("")
    }

    function Mf(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += Y(c, a[c]));
        return b
    }

    function If(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function Hf(a) {
        return a.google_gcl_cookie_prefix && a.google_gcl_cookie_prefix !== "_gcl" && xf.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function Wf(a, b) {
        var c;
        if (c = !b.google_remarketing_only)
            if (b.google_transport_url || !I || J(19) != "375603261" && J(19) != "375603260") c = !1;
            else {
                b: {
                    if (!yf) {
                        Cb("AzMBwcG8UIaKM1GV43UaxMDFsS7hsiLx0FXw9ULTOHJRGxkUVw+UPCxlzz5CudOm+WnidygXLcAHmad6rC6C9QEAAACUeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJBdHRyaWJ1dGlvblJlcG9ydGluZ0Nyb3NzQXBwV2ViIiwiZXhwaXJ5IjoxNzE0NTIxNTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d", a);
                        if (!Pc() && !Cb(r("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "A2kc5o2ErHAbqJvF2MHSdYtnc2Bp3n6Jn2kNeko6SgHH6zXBHn0+4BbAW2No9ylVJMkzJAPwMqCVHqXm+IF1DgQAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2OTUxNjc5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", a)) {
                            a = !1;
                            break b
                        }
                        yf = !0
                    }
                    a = Pc()
                }
                c = a
            }
        c && (a = b.google_additional_conversion_params || {}, c = b.google_gtm_experiments, a.capi = c && c.apcm ? "2" : "1", b.google_additional_conversion_params =
            a)
    };
    var jg = oa(["https://www.googletagmanager.com/debug/bootstrap"]),
        qg = !1,
        rg = document.currentScript && document.currentScript.src || "";

    function vg(a, b, c) {
        try {
            if (!qg && (qg = !0, !c.google_gtm)) {
                var d = void 0,
                    e = void 0,
                    f = ib(a.location.href, "gtm_debug");
                wg(f) && (d = 2);
                d || b.referrer.indexOf("https://tagassistant.google.com/") !== 0 || (d = 3);
                !d && wa(b.cookie.split("; "), "__TAG_ASSISTANT=x") >= 0 && (d = 4);
                d || (e = b.documentElement.getAttribute("data-tag-assistant-present"), wg(e) && (d = 5));
                if (d) {
                    var g = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var h = tb(jg),
                            k = new p.Map([
                                ["id", g],
                                ["src",
                                    "LEGACY"
                                ],
                                ["cond", d]
                            ]),
                            l = Ua(h).toString(),
                            m = l.split(/[?#]/),
                            q = /[?]/.test(l) ? "?" + m[1] : "";
                        var w = ub(m[0], q, /[#]/.test(l) ? "#" + (q ? m[2] : m[1]) : "", k);
                        var x = Db("SCRIPT", b);
                        cb(x, w);
                        var z = b.getElementsByTagName("script")[0];
                        z && z.parentNode && z.parentNode.insertBefore(x, z)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: g,
                            scriptSource: rg
                        }
                    })
                }
            }
        } catch (aa) {}
    }

    function wg(a) {
        if (a == null || a.length === 0) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    };

    function xg(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function yg(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function zg(a, b) {
        if (xg(b) == 3) return !1;
        a();
        return !0
    }

    function Ag(a, b) {
        var c = c === void 0 ? !1 : c;
        if (!zg(a, b))
            if (c) {
                var d = function() {
                    b.removeEventListener && b.removeEventListener("prerenderingchange", d, !1);
                    a()
                };
                b.addEventListener && b.addEventListener("prerenderingchange", d, !1)
            } else {
                var e = !1,
                    f = yg(b),
                    g = function() {
                        !e && zg(a, b) && (e = !0, b.removeEventListener && b.removeEventListener(f, g, !1))
                    };
                f && b.addEventListener && b.addEventListener(f, g, !1)
            }
    };

    function Bg(a) {
        var b = r(Object, "assign").call(Object, {}, a);
        a = a.id;
        b = (delete b.id, b);
        if (r(Object, "keys").call(Object, b).length) throw Error("Invalid attribute(s): " + r(Object, "keys").call(Object, b));
        return rb({
            id: a
        })
    };
    I = new function() {
        var a = [];
        var b = 0,
            c;
        for (c in hc) a[b++] = hc[c];
        a = a === void 0 ? [] : a;
        this.N = {};
        this.g = {};
        for (b = 0; b < a.length; ++b) this.g[a[b]] = ""
    };
    H(["466465925", "466465926"], Ub, 20);
    ic() && wf();
    I && H(["592230570", "592230571"], Fb, 16);
    jc() && (qc(1), rc());

    function Cg(a, b, c, d) {
        function e(m, q, w) {
            w = w === void 0 ? function() {} : w;
            var x = new Image;
            x.onload = m;
            x.onerror = w;
            x.src = q
        }

        function f() {
            --g;
            if (g <= 0) {
                var m = je(a, !1),
                    q = m[b];
                q && (delete m[b], (m = q[0]) && m.call && m())
            }
        }
        d = d === void 0 ? [] : d;
        var g = c.length + 1;
        if (c.length === 2) {
            var h = c[0],
                k = c[1];
            gb(h, 0, "rmt_tld", h.search(hb)) >= 0 && gb(h, 0, "ipr", h.search(hb)) >= 0 && !k.match(eb)[6] && (k += fb(h), c[1] = kb(k, "rmt_tld", "1"))
        }
        for (h = {
                v: 0
            }; h.v < c.length; h = {
                v: h.v
            }, h.v++) {
            k = c[h.v];
            var l = ib(k, "fmt");
            switch (Number(l)) {
                case 1:
                case 2:
                    (l = a.document.getElementById("goog_conv_iframe")) &&
                    !l.src ? Ic(k, f, l) : e(f, k);
                    break;
                case 4:
                    ne(a, a.document, k, f);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(k, "")) {
                            f();
                            break
                        } else k = kb(k, "sendb", 2);
                    k = kb(k, "fmt", 3);
                    e(f, k);
                    break;
                default:
                    l = void 0, d && d[h.v] && (l = function(m) {
                        return function() {
                            Mc(d[m.v]) && f()
                        }
                    }(h)), e(f, k, l)
            }
        }
        f()
    }
    var Dg = ["GooglemKTybQhCsO"],
        Z = A;
    Dg[0] in Z || typeof Z.execScript == "undefined" || Z.execScript("var " + Dg[0]);
    for (var Eg; Dg.length && (Eg = Dg.shift());) Dg.length || Cg === void 0 ? Z[Eg] && Z[Eg] !== Object.prototype[Eg] ? Z = Z[Eg] : Z = Z[Eg] = {} : Z[Eg] = Cg;
    (function(a, b, c) {
        if (a) {
            vg(a, c, a);
            try {
                if (Tf(a)) {
                    var d = Vf(a);
                    I && H(["375603260", "375603261"], cc ? 1 : 0, 19);
                    I && H(["512247838", "512247839"], dc ? 1 : 0, 22);
                    I && H(["658953495", "658953496"], Wb, 23);
                    if (xg(c) == 3) {
                        var e = "google_conversion_" + Math.floor(Math.random() * 1E9);
                        db(c, Bg({
                            id: e
                        }));
                        Ag(function() {
                            try {
                                Wf(c, d);
                                var f = c.getElementById(e);
                                if (f) {
                                    var g = Bc(Rf(a, b, c, d));
                                    if (f.nodeType === 1 && /^(script|style)$/i.test(f.tagName)) throw Error("");
                                    f.innerHTML = bb(g)
                                }
                            } catch (h) {}
                        }, c)
                    } else Wf(c, d), db(c, Bc(Rf(a, b, c, d)))
                }
            } catch (f) {}
            Uf(a)
        }
    })(window,
        navigator, document);
}).call(this);