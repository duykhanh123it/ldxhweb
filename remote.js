(function(g) {
    var window = this;
    'use strict';
    var pl = function(p) {
            g.yh(p, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.QL()).toString(36));
            return p
        },
        Cl = function(p, C, V) {
            Array.isArray(V) || (V = [String(V)]);
            g.$$H(p.S, C, V)
        },
        TfF = function(p) {
            if (p instanceof g.lf) return p;
            if (typeof p.lT == "function") return p.lT(!1);
            if (g.ea(p)) {
                var C = 0,
                    V = new g.lf;
                V.next = function() {
                    for (;;) {
                        if (C >= p.length) return g.EU;
                        if (C in p) return g.tT(p[C++]);
                        C++
                    }
                };
                return V
            }
            throw Error("Not implemented");
        },
        M70 = function(p, C, V) {
            if (g.ea(p)) g.lr(p, C, V);
            else
                for (p = TfF(p);;) {
                    var N = p.next();
                    if (N.done) break;
                    C.call(V, N.value, void 0, p)
                }
        },
        Jpy = function(p, C) {
            var V = [];
            M70(C, function(N) {
                try {
                    var H = g.kF.prototype.C.call(this, N, !0)
                } catch (X) {
                    if (X == "Storage: Invalid value was encountered") return;
                    throw X;
                }
                H === void 0 ? V.push(N) : g.Vha(H) && V.push(N)
            }, p);
            return V
        },
        mv8 = function(p, C) {
            Jpy(p, C).forEach(function(V) {
                g.kF.prototype.remove.call(this, V)
            }, p)
        },
        vQF = function(p) {
            if (p.a$) {
                if (p.a$.locationOverrideToken) return {
                    locationOverrideToken: p.a$.locationOverrideToken
                };
                if (p.a$.latitudeE7 != null && p.a$.longitudeE7 != null) return {
                    latitudeE7: p.a$.latitudeE7,
                    longitudeE7: p.a$.longitudeE7
                }
            }
            return null
        },
        F25 = function(p, C) {
            g.W5(p, C) || p.push(C)
        },
        Sg2 = function(p) {
            var C = 0,
                V;
            for (V in p) C++;
            return C
        },
        K2y = function(p, C) {
            return g.A9(p, C)
        },
        Dvf = function(p) {
            try {
                return g.xH.JSON.parse(p)
            } catch (C) {}
            p = String(p);
            if (/^\s*$/.test(p) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(p.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + p + ")")
            } catch (C) {}
            throw Error("Invalid JSON string: " + p);
        },
        jA = function(p) {
            if (g.xH.JSON) try {
                return g.xH.JSON.parse(p)
            } catch (C) {}
            return Dvf(p)
        },
        uCr = function(p) {
            if (p.k5 && typeof p.k5 == "function") return p.k5();
            if (typeof Map !== "undefined" && p instanceof Map || typeof Set !== "undefined" && p instanceof Set) return Array.from(p.values());
            if (typeof p === "string") return p.split("");
            if (g.ea(p)) {
                for (var C = [], V = p.length, N = 0; N < V; N++) C.push(p[N]);
                return C
            }
            return g.q$(p)
        },
        ZdY = function(p) {
            if (p.Ei && typeof p.Ei == "function") return p.Ei();
            if (!p.k5 || typeof p.k5 != "function") {
                if (typeof Map !== "undefined" && p instanceof Map) return Array.from(p.keys());
                if (!(typeof Set !== "undefined" && p instanceof Set)) {
                    if (g.ea(p) || typeof p === "string") {
                        var C = [];
                        p = p.length;
                        for (var V = 0; V < p; V++) C.push(V);
                        return C
                    }
                    return g.Ia(p)
                }
            }
        },
        Uv2 = function(p, C) {
            if (p.forEach && typeof p.forEach == "function") p.forEach(C, void 0);
            else if (g.ea(p) || typeof p === "string") Array.prototype.forEach.call(p, C, void 0);
            else
                for (var V = ZdY(p), N = uCr(p), H = N.length, X = 0; X < H; X++) C.call(void 0, N[X], V && V[X], p)
        },
        fD1 = function(p, C, V, N) {
            var H = new g.SZ(null);
            p && g.KE(H, p);
            C && g.Dq(H, C);
            V && g.up(H, V);
            N && (H.C = N);
            return H
        },
        Odv = function() {
            var p = Vd();
            this.C = p;
            p.qO("/client_streamz/youtube/living_room/mdx/channel/opened", g.tf("channel_type"))
        },
        ypp = function() {
            var p = Vd();
            this.C = p;
            p.qO("/client_streamz/youtube/living_room/mdx/channel/closed", g.tf("channel_type"))
        },
        qg1 = function() {
            var p = Vd();
            this.C = p;
            p.qO("/client_streamz/youtube/living_room/mdx/channel/message_received", g.tf("channel_type"))
        },
        IDG = function() {
            var p = Vd();
            this.C = p;
            p.qO("/client_streamz/youtube/living_room/mdx/channel/error", g.tf("channel_type"))
        },
        bd8 = function() {
            var p = Vd();
            this.C = p;
            p.qO("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        Ap8 = function() {
            var p = Vd();
            this.C = p;
            p.qO("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        oQ2 = function(p, C) {
            return new g.iI(p, C)
        },
        NC = function(p, C) {
            return Object.prototype.hasOwnProperty.call(p, C)
        },
        kHY = function(p, C) {
            return p === C
        },
        Ht = function(p, C) {
            this.C = {};
            this.T = [];
            this.Bm = this.size = 0;
            var V = arguments.length;
            if (V > 1) {
                if (V % 2) throw Error("Uneven number of arguments");
                for (var N = 0; N < V; N += 2) this.set(arguments[N], arguments[N + 1])
            } else if (p)
                if (p instanceof Ht)
                    for (V = p.Ei(), N = 0; N < V.length; N++) this.set(V[N], p.get(V[N]));
                else
                    for (N in p) this.set(N, p[N])
        },
        XZ = function(p) {
            if (p.size != p.T.length) {
                for (var C = 0, V = 0; C < p.T.length;) {
                    var N = p.T[C];
                    NC(p.C, N) && (p.T[V++] = N);
                    C++
                }
                p.T.length = V
            }
            if (p.size != p.T.length) {
                C = {};
                for (N = V = 0; V < p.T.length;) {
                    var H = p.T[V];
                    NC(C, H) || (p.T[N++] = H, C[H] = 1);
                    V++
                }
                p.T.length = N
            }
        },
        di = function(p) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new Ht;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            p && (this.id = p.id || p.name, this.name = p.name, this.clientName = p.clientName ? p.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = p.app, this.type = p.type || "REMOTE_CONTROL", this.username = p.user || "", this.avatar = p.userAvatarUri || "", this.obfuscatedGaiaId = p.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = p.ownerObfuscatedGaiaId || "", this.theme = p.theme || "u", xvy(this, p.capabilities || ""), Yg8(this, p.compatibleSenderThemes || ""), ziF(this, p.experiments || ""), this.brand = p.brand || "", this.model = p.model || "", this.year = p.year || 0, this.os = p.os || "", this.osVersion = p.osVersion || "", this.chipset = p.chipset || "", this.mdxDialServerType = p.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", p = p.deviceInfo) && (p = JSON.parse(p), this.brand = p.brand || "", this.model = p.model || "", this.year = p.year || 0, this.os = p.os || "", this.osVersion = p.osVersion || "", this.chipset = p.chipset || "", this.clientName = p.clientName ? p.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = p.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        xvy = function(p, C) {
            p.capabilities.clear();
            g.JT(C.split(","), g.Wv(K2y, Riy)).forEach(function(V) {
                p.capabilities.add(V)
            })
        },
        Yg8 = function(p, C) {
            p.compatibleSenderThemes.clear();
            g.JT(C.split(","), g.Wv(K2y, nQ1)).forEach(function(V) {
                p.compatibleSenderThemes.add(V)
            })
        },
        ziF = function(p, C) {
            p.experiments.clear();
            C.split(",").forEach(function(V) {
                p.experiments.add(V)
            })
        },
        iC = function(p) {
            p = p || {};
            this.name = p.name || "";
            this.id = p.id || p.screenId || "";
            this.token = p.token || p.loungeToken || "";
            this.uuid = p.uuid || p.dialId || "";
            this.idType = p.screenIdType || "normal"
        },
        hZ = function(p, C) {
            return !!C && (p.id == C || p.uuid == C)
        },
        ei0 = function(p) {
            return {
                name: p.name,
                screenId: p.id,
                loungeToken: p.token,
                dialId: p.uuid,
                screenIdType: p.idType
            }
        },
        PaP = function(p) {
            return new iC(p)
        },
        w60 = function(p) {
            return Array.isArray(p) ? g.AU(p, PaP) : []
        },
        sx = function(p) {
            return p ? '{name:"' + p.name + '",id:' + p.id.substr(0, 6) + "..,token:" + ((p.token ? ".." + p.token.slice(-6) : "-") + ",uuid:" + (p.uuid ? ".." + p.uuid.slice(-6) : "-") + ",idType:" + p.idType + "}") : "null"
        },
        $vv = function(p) {
            return Array.isArray(p) ? "[" + g.AU(p, sx).join(",") + "]" : "null"
        },
        L2E = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(p) {
                    var C = Math.random() * 16 | 0;
                    return (p == "x" ? C : C & 3 | 8).toString(16)
                })
        },
        gQ1 = function(p) {
            return g.AU(p, function(C) {
                return {
                    key: C.id,
                    name: C.name
                }
            })
        },
        W21 = function(p, C) {
            return g.L0(p, function(V) {
                return V || C ? !V != !C ? !1 : V.id == C.id : !0
            })
        },
        ay = function(p, C) {
            return g.L0(p, function(V) {
                return hZ(V, C)
            })
        },
        Q6r = function() {
            var p = (0, g.kl)();
            p && mv8(p, p.T.lT(!0))
        },
        Ex = function() {
            var p = g.zW("yt-remote-connected-devices") || [];
            g.hB(p);
            return p
        },
        rp0 = function(p) {
            if (p.length == 0) return [];
            var C = p[0].indexOf("#"),
                V = C == -1 ? p[0] : p[0].substring(0, C);
            return g.AU(p, function(N, H) {
                return H == 0 ? N : N.substring(V.length)
            })
        },
        Bf2 = function(p) {
            g.Yl("yt-remote-connected-devices", p, 86400)
        },
        lC = function() {
            if (GH0) return GH0;
            var p = g.zW("yt-remote-device-id");
            p || (p = L2E(), g.Yl("yt-remote-device-id", p, 31536E3));
            for (var C = Ex(), V = 1, N = p; g.W5(C, N);) V++, N = p + "#" + V;
            return GH0 = N
        },
        pd1 = function() {
            var p = Ex(),
                C = lC();
            g.nK() && g.Ev(p, C);
            p = rp0(p);
            if (p.length == 0) try {
                g.Pd("remote_sid")
            } catch (V) {} else try {
                g.nO("remote_sid", p.join(","), -1)
            } catch (V) {}
        },
        C15 = function() {
            return g.zW("yt-remote-session-browser-channel")
        },
        jKv = function() {
            return g.zW("yt-remote-local-screens") || []
        },
        Ve1 = function() {
            g.Yl("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Nm0 = function(p) {
            p.length > 5 && (p = p.slice(p.length - 5));
            var C = g.AU(jKv(), function(N) {
                    return N.loungeToken
                }),
                V = g.AU(p, function(N) {
                    return N.loungeToken
                });
            g.oo(V, function(N) {
                return !g.W5(C, N)
            }) && Ve1();
            g.Yl("yt-remote-local-screens", p, 31536E3)
        },
        tZ = function(p) {
            p || (g.R_("yt-remote-session-screen-id"), g.R_("yt-remote-session-video-id"));
            pd1();
            p = Ex();
            g.rY(p, lC());
            Bf2(p)
        },
        HOY = function() {
            if (!ct) {
                var p = g.eJ();
                p && (ct = new g.bI(p))
            }
        },
        Xd2 = function() {
            HOY();
            return ct ? !!ct.get("yt-remote-use-staging-server") : !1
        },
        T3 = function(p, C) {
            g.t3[p] = !0;
            var V = g.EI();
            V && V.publish.apply(V, arguments);
            g.t3[p] = !1
        },
        dUY = function() {},
        Vd = function() {
            if (!MC) {
                MC = new g.ob(new dUY);
                var p = g.Uk("client_streamz_web_flush_count", -1);
                p !== -1 && (MC.V = p)
            }
            return MC
        },
        iOv = function() {
            var p = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return p ? parseInt(p[1], 10) : 0
        },
        hr2 = function(p) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + p) != -1 || document.currentScript.src.indexOf("&" + p) != -1)
        },
        sKf = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        JZ = function(p) {
            p.length ? arP(p.shift(), function() {
                JZ(p)
            }) : ED8()
        },
        lr2 = function(p) {
            return "chrome-extension://" + p + "/cast_sender.js"
        },
        arP = function(p, C, V) {
            var N = document.createElement("script");
            N.onerror = C;
            V && (N.onload = V);
            g.GN(N, g.yJ(p));
            (document.head || document.documentElement).appendChild(N)
        },
        te5 = function() {
            var p = iOv(),
                C = [];
            if (p > 1) {
                var V = p - 1;
                C.push("//www.gstatic.com/eureka/clank/" + p + "/cast_sender.js");
                C.push("//www.gstatic.com/eureka/clank/" + V + "/cast_sender.js")
            }
            return C
        },
        ED8 = function() {
            var p = sKf();
            p && p(!1, "No cast extension found")
        },
        TmY = function() {
            if (cw5) {
                var p = 2,
                    C = sKf(),
                    V = function() {
                        p--;
                        p == 0 && C && C(!0)
                    };
                window.__onGCastApiAvailable = V;
                arP("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", ED8, V)
            }
        },
        Mey = function() {
            TmY();
            var p = te5();
            p.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            JZ(p)
        },
        mU1 = function() {
            TmY();
            var p = te5();
            p.push.apply(p, g.K(Jwc.map(lr2)));
            p.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            JZ(p)
        },
        mF = function(p, C, V) {
            g.Y.call(this);
            this.Y = V != null ? (0, g.LY)(p, V) : p;
            this.Kx = C;
            this.W = (0, g.LY)(this.P7, this);
            this.T = !1;
            this.C = 0;
            this.V = this.Pa = null;
            this.S = []
        },
        vt = function(p, C, V) {
            g.Y.call(this);
            this.S = V != null ? p.bind(V) : p;
            this.Kx = C;
            this.V = null;
            this.T = !1;
            this.C = 0;
            this.Pa = null
        },
        vDv = function(p) {
            p.Pa = g.bm(function() {
                p.Pa = null;
                p.T && !p.C && (p.T = !1, vDv(p))
            }, p.Kx);
            var C = p.V;
            p.V = null;
            p.S.apply(null, C)
        },
        FZ = function() {},
        F11 = function() {
            g.$q.call(this, "p")
        },
        Sk0 = function() {
            g.$q.call(this, "o")
        },
        DUf = function() {
            return K1y = K1y || new g.h8
        },
        u50 = function(p) {
            g.$q.call(this, "serverreachability", p)
        },
        SA = function(p) {
            var C = DUf();
            C.dispatchEvent(new u50(C, p))
        },
        ZOv = function(p) {
            g.$q.call(this, "statevent", p)
        },
        Kl = function(p) {
            var C = DUf();
            C.dispatchEvent(new ZOv(C, p))
        },
        UUp = function(p, C, V, N) {
            g.$q.call(this, "timingevent", p);
            this.size = C;
            this.rtt = V;
            this.retries = N
        },
        DG = function(p, C) {
            if (typeof p !== "function") throw Error("Fn must not be null and must be a function");
            return g.xH.setTimeout(function() {
                p()
            }, C)
        },
        uC = function() {},
        ZG = function(p, C, V, N) {
            this.V = p;
            this.S = C;
            this.YM = V;
            this.Hc = N || 1;
            this.X$ = new g.os(this);
            this.Qn = 45E3;
            this.vr = null;
            this.Y = !1;
            this.Z = this.UY = this.J = this.Ga = this.sY = this.qo = this.a$ = null;
            this.b_ = [];
            this.T = null;
            this.D = 0;
            this.W = this.Vn = null;
            this.Wc = -1;
            this.Wr = !1;
            this.KS = 0;
            this.R$ = null;
            this.ER = this.Y_ = this.kM = this.Sa = !1;
            this.C = new frF
        },
        frF = function() {
            this.V = null;
            this.T = "";
            this.C = !1
        },
        ywr = function(p, C, V) {
            p.Ga = 1;
            p.J = pl(C.clone());
            p.Z = V;
            p.Sa = !0;
            OO0(p, null)
        },
        OO0 = function(p, C) {
            p.sY = Date.now();
            Ux(p);
            p.UY = p.J.clone();
            Cl(p.UY, "t", p.Hc);
            p.D = 0;
            var V = p.V.Ga;
            p.C = new frF;
            p.T = qkY(p.V, V ? C : null, !p.Z);
            p.KS > 0 && (p.R$ = new vt((0, g.LY)(p.yE, p, p.T), p.KS));
            p.X$.listen(p.T, "readystatechange", p.YO);
            C = p.vr ? g.zh(p.vr) : {};
            p.Z ? (p.Vn || (p.Vn = "POST"), C["Content-Type"] = "application/x-www-form-urlencoded", p.T.send(p.UY, p.Vn, p.Z, C)) : (p.Vn = "GET", p.T.send(p.UY, p.Vn, null, C));
            SA(1)
        },
        bOF = function(p) {
            if (!Irp(p)) return g.i3(p.T);
            var C = g.h$(p.T);
            if (C === "") return "";
            var V = "",
                N = C.length,
                H = g.Xr(p.T) == 4;
            if (!p.C.V) {
                if (typeof TextDecoder === "undefined") return fl(p), Ox(p), "";
                p.C.V = new g.xH.TextDecoder
            }
            for (var X = 0; X < N; X++) p.C.C = !0, V += p.C.V.decode(C[X], {
                stream: !(H && X == N - 1)
            });
            C.length = 0;
            p.C.T += V;
            p.D = 0;
            return p.C.T
        },
        Irp = function(p) {
            return p.T ? p.Vn == "GET" && p.Ga != 2 && p.V.cV : !1
        },
        kQ1 = function(p, C) {
            var V = p.D,
                N = C.indexOf("\n", V);
            if (N == -1) return Awy;
            V = Number(C.substring(V, N));
            if (isNaN(V)) return oDp;
            N += 1;
            if (N + V > C.length) return Awy;
            C = C.slice(N, N + V);
            p.D = N + V;
            return C
        },
        Ux = function(p) {
            p.qo = Date.now() + p.Qn;
            xU8(p, p.Qn)
        },
        xU8 = function(p, C) {
            if (p.a$ != null) throw Error("WatchDog timer not null");
            p.a$ = DG((0, g.LY)(p.RS, p), C)
        },
        Ykr = function(p) {
            p.a$ && (g.xH.clearTimeout(p.a$), p.a$ = null)
        },
        Ox = function(p) {
            p.V.gI() || p.Wr || zrG(p.V, p)
        },
        fl = function(p) {
            Ykr(p);
            g.iP(p.R$);
            p.R$ = null;
            p.X$.removeAll();
            if (p.T) {
                var C = p.T;
                p.T = null;
                C.abort();
                C.dispose()
            }
        },
        gDP = function(p, C) {
            try {
                var V = p.V;
                if (V.P6 != 0 && (V.T == p || Rrf(V.C, p)))
                    if (!p.Y_ && Rrf(V.C, p) && V.P6 == 3) {
                        try {
                            var N = V.o6.T.parse(C)
                        } catch (S) {
                            N = null
                        }
                        if (Array.isArray(N) && N.length == 3) {
                            var H = N;
                            if (H[0] == 0) a: {
                                if (!V.J) {
                                    if (V.T)
                                        if (V.T.sY + 3E3 < p.sY) yd(V), qC(V);
                                        else break a;
                                    nD8(V);
                                    Kl(18)
                                }
                            }
                            else V.QZ = H[1], 0 < V.QZ - V.R$ && H[2] < 37500 && V.Y_ && V.b_ == 0 && !V.a$ && (V.a$ = DG((0, g.LY)(V.Df, V), 6E3));
                            if (erv(V.C) <= 1 && V.qW) {
                                try {
                                    V.qW()
                                } catch (S) {}
                                V.qW = void 0
                            }
                        } else Iy(V, 11)
                    } else if ((p.Y_ || V.T == p) && yd(V), !g.Sy(C))
                    for (H = V.o6.T.parse(C), C = 0; C < H.length; C++) {
                        var X = H[C];
                        V.R$ = X[0];
                        X = X[1];
                        if (V.P6 == 2)
                            if (X[0] == "c") {
                                V.S = X[1];
                                V.Hc = X[2];
                                var d = X[3];
                                d != null && (V.T$ = d);
                                var a = X[5];
                                a != null && typeof a === "number" && a > 0 && (V.KS = 1.5 * a);
                                N = V;
                                var E = p.Yw();
                                if (E) {
                                    var l = g.s$(E, "X-Client-Wire-Protocol");
                                    if (l) {
                                        var t = N.C;
                                        !t.T && (g.K0(l, "spdy") || g.K0(l, "quic") || g.K0(l, "h2")) && (t.S = t.W, t.T = new Set, t.C && (P1P(t, t.C), t.C = null))
                                    }
                                    if (N.Sa) {
                                        var c = g.s$(E, "X-HTTP-Session-Id");
                                        c && (N.kt = c, g.yh(N.vr, N.Sa, c))
                                    }
                                }
                                V.P6 = 3;
                                V.W && V.W.Ae();
                                V.wy && (V.VZ = Date.now() - p.sY);
                                N = V;
                                var T = p;
                                N.RN = wdv(N, N.Ga ? N.Hc : null, N.YM);
                                if (T.Y_) {
                                    $UE(N.C,
                                        T);
                                    var M = T,
                                        J = N.KS;
                                    J && M.setTimeout(J);
                                    M.a$ && (Ykr(M), Ux(M));
                                    N.T = T
                                } else L1p(N);
                                V.V.length > 0 && bC(V)
                            } else X[0] != "stop" && X[0] != "close" || Iy(V, 7);
                        else V.P6 == 3 && (X[0] == "stop" || X[0] == "close" ? X[0] == "stop" ? Iy(V, 7) : V.disconnect() : X[0] != "noop" && V.W && V.W.Cm(X), V.b_ = 0)
                    }
                SA(4)
            } catch (S) {}
        },
        W1f = function(p, C) {
            this.T = p;
            this.map = C;
            this.context = null
        },
        QKP = function(p) {
            this.W = p || 10;
            g.xH.PerformanceNavigationTiming ? (p = g.xH.performance.getEntriesByType("navigation"), p = p.length > 0 && (p[0].nextHopProtocol == "hq" || p[0].nextHopProtocol == "h2")) : p = !!(g.xH.chrome && g.xH.chrome.loadTimes && g.xH.chrome.loadTimes() && g.xH.chrome.loadTimes().wasFetchedViaSpdy);
            this.S = p ? this.W : 1;
            this.T = null;
            this.S > 1 && (this.T = new Set);
            this.C = null;
            this.V = []
        },
        rwF = function(p) {
            return p.C ? !0 : p.T ? p.T.size >= p.S : !1
        },
        erv = function(p) {
            return p.C ? 1 : p.T ? p.T.size : 0
        },
        Rrf = function(p, C) {
            return p.C ? p.C == C : p.T ? p.T.has(C) : !1
        },
        P1P =
        function(p, C) {
            p.T ? p.T.add(C) : p.C = C
        },
        $UE = function(p, C) {
            p.C && p.C == C ? p.C = null : p.T && p.T.has(C) && p.T.delete(C)
        },
        Bm8 = function(p) {
            if (p.C != null) return p.V.concat(p.C.b_);
            if (p.T != null && p.T.size !== 0) {
                var C = p.V;
                p = g.F(p.T.values());
                for (var V = p.next(); !V.done; V = p.next()) C = C.concat(V.value.b_);
                return C
            }
            return g.p6(p.V)
        },
        GQp = function(p, C) {
            var V = new uC;
            if (g.xH.Image) {
                var N = new Image;
                N.onload = g.Wv(AZ, V, "TestLoadImage: loaded", !0, C, N);
                N.onerror = g.Wv(AZ, V, "TestLoadImage: error", !1, C, N);
                N.onabort = g.Wv(AZ, V, "TestLoadImage: abort", !1, C, N);
                N.ontimeout = g.Wv(AZ, V, "TestLoadImage: timeout", !1, C, N);
                g.xH.setTimeout(function() {
                    if (N.ontimeout) N.ontimeout()
                }, 1E4);
                N.src = p
            } else C(!1)
        },
        pwF = function(p, C) {
            var V = new uC,
                N = new AbortController,
                H = setTimeout(function() {
                    N.abort();
                    AZ(V, "TestPingServer: timeout", !1, C)
                }, 1E4);
            fetch(p, {
                signal: N.signal
            }).then(function(X) {
                clearTimeout(H);
                X.ok ? AZ(V, "TestPingServer: ok", !0, C) : AZ(V, "TestPingServer: server error", !1, C)
            }).catch(function() {
                clearTimeout(H);
                AZ(V, "TestPingServer: error", !1, C)
            })
        },
        AZ = function(p, C, V, N, H) {
            try {
                H && (H.onload = null, H.onerror = null, H.onabort = null, H.ontimeout = null), N(V)
            } catch (X) {}
        },
        CO8 = function() {
            this.T = new FZ
        },
        j_y = function(p, C, V) {
            var N = V || "";
            try {
                Uv2(p, function(H, X) {
                    var d = H;
                    g.Pv(H) && (d = g.zD(H));
                    C.push(N + X + "=" + encodeURIComponent(d))
                })
            } catch (H) {
                throw C.push(N + "type=" + encodeURIComponent("_badmap")), H;
            }
        },
        oy = function(p, C, V) {
            return V && V.yk ? V.yk[p] || C : C
        },
        Vzr = function(p) {
            this.V = [];
            this.Hc = this.RN = this.vr = this.YM = this.T = this.kt = this.Sa = this.Wr = this.D = this.Wc = this.Z = null;
            this.hE = this.UY = 0;
            this.f9 = oy("failFast", !1, p);
            this.Y_ = this.a$ = this.J = this.Y = this.W = null;
            this.Q$ = !0;
            this.QZ = this.R$ = -1;
            this.ER = this.b_ = this.sY = 0;
            this.iW = oy("baseRetryDelayMs", 5E3, p);
            this.i8 = oy("retryDelaySeedMs", 1E4, p);
            this.W1 = oy("forwardChannelMaxRetries", 2, p);
            this.I6 = oy("forwardChannelRequestTimeoutMs", 2E4, p);
            this.FO = p && p.kfY || void 0;
            this.jZ = p && p.cFr || void 0;
            this.cV = p && p.y2a || !1;
            this.KS = void 0;
            this.Ga = p && p.gl$ ||
                !1;
            this.S = "";
            this.C = new QKP(p && p.ozn);
            this.o6 = new CO8;
            this.X$ = p && p.Sxo || !1;
            this.qo = p && p.Tj$ || !1;
            this.X$ && this.qo && (this.qo = !1);
            this.d6 = p && p.t1a || !1;
            p && p.uAS && (this.Q$ = !1);
            this.wy = !this.X$ && this.Q$ && p && p.qi_ || !1;
            this.va = void 0;
            p && p.Yi && p.Yi > 0 && (this.va = p.Yi);
            this.qW = void 0;
            this.VZ = 0;
            this.Qn = !1;
            this.kM = this.Vn = null
        },
        qC = function(p) {
            p.T && (N85(p), p.T.cancel(), p.T = null)
        },
        HKf = function(p) {
            qC(p);
            p.J && (g.xH.clearTimeout(p.J), p.J = null);
            yd(p);
            p.C.cancel();
            p.Y && (typeof p.Y === "number" && g.xH.clearTimeout(p.Y), p.Y = null)
        },
        bC = function(p) {
            rwF(p.C) || p.Y || (p.Y = !0, g.mo(p.aU, p), p.sY = 0)
        },
        d51 = function(p, C) {
            if (erv(p.C) >= p.C.S - (p.Y ? 1 : 0)) return !1;
            if (p.Y) return p.V = C.b_.concat(p.V), !0;
            if (p.P6 == 1 || p.P6 == 2 || p.sY >= (p.f9 ? 0 : p.W1)) return !1;
            p.Y = DG((0, g.LY)(p.aU, p, C), Xwy(p, p.sY));
            p.sY++;
            return !0
        },
        h8E = function(p, C) {
            var V;
            C ? V = C.YM : V = p.UY++;
            var N = p.vr.clone();
            g.yh(N, "SID", p.S);
            g.yh(N, "RID", V);
            g.yh(N, "AID", p.R$);
            kh(p, N);
            p.D && p.Z && g.AE(N, p.D, p.Z);
            V = new ZG(p, p.S, V, p.sY + 1);
            p.D === null && (V.vr = p.Z);
            C && (p.V = C.b_.concat(p.V));
            C = iKy(p, V, 1E3);
            V.setTimeout(Math.round(p.I6 * .5) + Math.round(p.I6 * .5 * Math.random()));
            P1P(p.C, V);
            ywr(V, N, C)
        },
        kh = function(p, C) {
            p.Wr && g.ZH(p.Wr, function(V, N) {
                g.yh(C, N, V)
            });
            p.W && Uv2({}, function(V, N) {
                g.yh(C, N, V)
            })
        },
        iKy = function(p, C, V) {
            V = Math.min(p.V.length, V);
            var N = p.W ? (0, g.LY)(p.W.B7, p.W, p) : null;
            a: {
                for (var H = p.V, X = -1;;) {
                    var d = ["count=" + V];
                    X == -1 ? V > 0 ? (X = H[0].T, d.push("ofs=" + X)) : X = 0 : d.push("ofs=" + X);
                    for (var a = !0, E = 0; E < V; E++) {
                        var l = H[E].T,
                            t = H[E].map;
                        l -= X;
                        if (l < 0) X = Math.max(0, H[E].T - 100), a = !1;
                        else try {
                            j_y(t, d, "req" + l + "_")
                        } catch (c) {
                            N && N(t)
                        }
                    }
                    if (a) {
                        N = d.join("&");
                        break a
                    }
                }
                N = void 0
            }
            p = p.V.splice(0, V);
            C.b_ = p;
            return N
        },
        L1p = function(p) {
            p.T || p.J || (p.ER = 1, g.mo(p.kL, p), p.b_ = 0)
        },
        nD8 = function(p) {
            if (p.T || p.J || p.b_ >= 3) return !1;
            p.ER++;
            p.J = DG((0, g.LY)(p.kL, p), Xwy(p, p.b_));
            p.b_++;
            return !0
        },
        N85 = function(p) {
            p.Vn != null && (g.xH.clearTimeout(p.Vn), p.Vn = null)
        },
        s_2 = function(p) {
            p.T = new ZG(p, p.S, "rpc", p.ER);
            p.D === null && (p.T.vr = p.Z);
            p.T.KS = 0;
            var C = p.RN.clone();
            g.yh(C, "RID", "rpc");
            g.yh(C, "SID", p.S);
            g.yh(C, "AID", p.R$);
            g.yh(C, "CI", p.Y_ ? "0" : "1");
            !p.Y_ && p.va && g.yh(C, "TO", p.va);
            g.yh(C, "TYPE", "xmlhttp");
            kh(p, C);
            p.D && p.Z && g.AE(C, p.D, p.Z);
            p.KS && p.T.setTimeout(p.KS);
            var V = p.T;
            p = p.Hc;
            V.Ga = 1;
            V.J = pl(C.clone());
            V.Z = null;
            V.Sa = !0;
            OO0(V, p)
        },
        yd = function(p) {
            p.a$ != null && (g.xH.clearTimeout(p.a$), p.a$ = null)
        },
        zrG = function(p, C) {
            var V = null;
            if (p.T == C) {
                yd(p);
                N85(p);
                p.T = null;
                var N = 2
            } else if (Rrf(p.C, C)) V = C.b_, $UE(p.C, C), N = 1;
            else return;
            if (p.P6 != 0)
                if (C.Y)
                    if (N == 1) {
                        V = C.Z ? C.Z.length : 0;
                        C = Date.now() - C.sY;
                        var H = p.sY;
                        N = DUf();
                        N.dispatchEvent(new UUp(N, V, C, H));
                        bC(p)
                    } else L1p(p);
            else {
                var X = C.Wc;
                H = C.getLastError();
                if (H == 3 || H == 0 && X > 0 || !(N == 1 && d51(p, C) || N == 2 && nD8(p))) switch (V && V.length > 0 && (C = p.C, C.V = C.V.concat(V)), H) {
                    case 1:
                        Iy(p, 5);
                        break;
                    case 4:
                        Iy(p, 10);
                        break;
                    case 3:
                        Iy(p, 6);
                        break;
                    default:
                        Iy(p, 2)
                }
            }
        },
        Xwy = function(p, C) {
            var V = p.iW + Math.floor(Math.random() *
                p.i8);
            p.isActive() || (V *= 2);
            return V * C
        },
        Iy = function(p, C) {
            if (C == 2) {
                var V = (0, g.LY)(p.jIn, p),
                    N = p.jZ,
                    H = !N;
                N = new g.SZ(N || "//www.google.com/images/cleardot.gif");
                g.xH.location && g.xH.location.protocol == "http" || g.KE(N, "https");
                pl(N);
                H ? GQp(N.toString(), V) : pwF(N.toString(), V)
            } else Kl(2);
            p.P6 = 0;
            p.W && p.W.nm(C);
            a31(p);
            HKf(p)
        },
        a31 = function(p) {
            p.P6 = 0;
            p.kM = [];
            if (p.W) {
                var C = Bm8(p.C);
                if (C.length != 0 || p.V.length != 0) g.C6(p.kM, C), g.C6(p.kM, p.V), p.C.V.length = 0, g.p6(p.V), p.V.length = 0;
                p.W.bZ()
            }
        },
        Elf = function(p) {
            if (p.P6 == 0) return p.kM;
            var C = [];
            g.C6(C, Bm8(p.C));
            g.C6(C, p.V);
            return C
        },
        wdv = function(p, C, V) {
            var N = g.q_(V);
            N.T != "" ? (C && g.Dq(N, C + "." + N.T), g.up(N, N.V)) : (N = g.xH.location, N = fD1(N.protocol, C ? C + "." + N.hostname : N.hostname, +N.port, V));
            C = p.Sa;
            V = p.kt;
            C && V && g.yh(N, C, V);
            g.yh(N, "VER", p.T$);
            kh(p, N);
            return N
        },
        qkY = function(p, C, V) {
            if (C && !p.Ga) throw Error("Can't create secondary domain capable XhrIo object.");
            C = p.cV && !p.FO ? new g.VO(new g.JE({
                uR: V
            })) : new g.VO(p.FO);
            C.D = p.Ga;
            return C
        },
        l32 = function() {},
        tz0 = function() {},
        Yh = function(p, C) {
            g.h8.call(this);
            this.T = new Vzr(C);
            this.W = p;
            this.C = C && C.cU || null;
            p = C && C.qa || null;
            C && C.Q9a && (p ? p["X-Client-Protocol"] = "webchannel" : p = {
                "X-Client-Protocol": "webchannel"
            });
            this.T.Z = p;
            p = C && C.hNS || null;
            C && C.wQ && (p ? p["X-WebChannel-Content-Type"] = C.wQ : p = {
                "X-WebChannel-Content-Type": C.wQ
            });
            C && C.hh && (p ? p["X-WebChannel-Client-Profile"] = C.hh : p = {
                "X-WebChannel-Client-Profile": C.hh
            });
            this.T.Wc = p;
            (p = C && C.Gz$) && !g.Sy(p) && (this.T.D = p);
            this.Y = C && C.gl$ || !1;
            this.S = C && C.fJa || !1;
            (C = C && C.FQ) && !g.Sy(C) && (this.T.Sa = C, g.bc(this.C, C) && (p = this.C,
                C in p && delete p[C]));
            this.V = new xh(this)
        },
        cmp = function(p) {
            F11.call(this);
            p.__headers__ && (this.headers = p.__headers__, this.statusCode = p.__status__, delete p.__headers__, delete p.__status__);
            var C = p.__sm__;
            C ? this.data = (this.T = g.yW(C)) ? g.x5(C, this.T) : C : this.data = p
        },
        T8G = function(p) {
            Sk0.call(this);
            this.status = 1;
            this.errorCode = p
        },
        xh = function(p) {
            this.T = p
        },
        Mzf = function(p, C) {
            this.C = p;
            this.T = C
        },
        JmP = function(p) {
            return Elf(p.T).map(function(C) {
                var V = p.C;
                C = C.map;
                "__data__" in C ? (C = C.__data__, V = V.S ? Dvf(C) : C) : V = C;
                return V
            })
        },
        z3 = function(p, C) {
            if (typeof p !== "function") throw Error("Fn must not be null and must be a function");
            return g.xH.setTimeout(function() {
                p()
            }, C)
        },
        nl = function(p) {
            Ry.dispatchEvent(new m58(Ry, p))
        },
        m58 = function(p) {
            g.$q.call(this, "statevent", p)
        },
        eA = function(p, C, V, N) {
            this.T = p;
            this.S = C;
            this.D = V;
            this.Y = N || 1;
            this.C = 45E3;
            this.V = new g.os(this);
            this.W = new g.Ib;
            this.W.setInterval(250)
        },
        F_y = function(p, C, V) {
            p.Lh = 1;
            p.pn = pl(C.clone());
            p.dW = V;
            p.Sa = !0;
            vlY(p, null)
        },
        SB2 = function(p, C, V, N, H) {
            p.Lh = 1;
            p.pn = pl(C.clone());
            p.dW = null;
            p.Sa = V;
            H && (p.lw = !1);
            vlY(p, N)
        },
        vlY = function(p, C) {
            p.Yy = Date.now();
            K_2(p);
            p.WX = p.pn.clone();
            Cl(p.WX, "t", p.Y);
            p.Gn = 0;
            p.M3 = p.T.LK(p.T.Da() ? C : null);
            p.fK > 0 && (p.fh = new vt((0, g.LY)(p.xL, p, p.M3), p.fK));
            p.V.listen(p.M3, "readystatechange", p.UF);
            C = p.wW ? g.zh(p.wW) : {};
            p.dW ? (p.NF = "POST", C["Content-Type"] = "application/x-www-form-urlencoded", p.M3.send(p.WX, p.NF, p.dW, C)) : (p.NF = "GET", p.lw && !g.Nq && (C.Connection = "close"), p.M3.send(p.WX, p.NF, null, C));
            p.T.t6(1)
        },
        ZK5 = function(p, C) {
            var V = p.Gn,
                N = C.indexOf("\n", V);
            if (N == -1) return D5y;
            V = Number(C.substring(V, N));
            if (isNaN(V)) return uWY;
            N += 1;
            if (N + V > C.length) return D5y;
            C = C.slice(N, N + V);
            p.Gn = N + V;
            return C
        },
        K_2 = function(p) {
            p.WZ = Date.now() + p.C;
            U55(p, p.C)
        },
        U55 = function(p, C) {
            if (p.HA != null) throw Error("WatchDog timer not null");
            p.HA = z3((0, g.LY)(p.tD, p), C)
        },
        f31 = function(p) {
            p.HA && (g.xH.clearTimeout(p.HA), p.HA = null)
        },
        OK0 = function(p) {
            p.T.gI() || p.Px || p.T.GX(p)
        },
        Pt = function(p) {
            f31(p);
            g.iP(p.fh);
            p.fh = null;
            p.W.stop();
            p.V.removeAll();
            if (p.M3) {
                var C = p.M3;
                p.M3 = null;
                C.abort();
                C.dispose()
            }
            p.Kc && (p.Kc = null)
        },
        ymc = function(p, C) {
            try {
                p.T.s4(p, C), p.T.t6(4)
            } catch (V) {}
        },
        I3Y = function(p, C, V, N, H) {
            if (N == 0) V(!1);
            else {
                var X = H || 0;
                N--;
                qBf(p, C, function(d) {
                    d ? V(!0) : g.xH.setTimeout(function() {
                        I3Y(p, C, V, N, X)
                    }, X)
                })
            }
        },
        qBf = function(p, C, V) {
            var N = new Image;
            N.onload = function() {
                try {
                    wi(N), V(!0)
                } catch (H) {}
            };
            N.onerror = function() {
                try {
                    wi(N), V(!1)
                } catch (H) {}
            };
            N.onabort = function() {
                try {
                    wi(N), V(!1)
                } catch (H) {}
            };
            N.ontimeout = function() {
                try {
                    wi(N), V(!1)
                } catch (H) {}
            };
            g.xH.setTimeout(function() {
                if (N.ontimeout) N.ontimeout()
            }, C);
            N.src = p
        },
        wi = function(p) {
            p.onload = null;
            p.onerror = null;
            p.onabort = null;
            p.ontimeout = null
        },
        bK5 = function(p) {
            this.T = p;
            this.C = new FZ
        },
        Am0 = function(p) {
            var C = $h(p.T, p.Fs, "/mail/images/cleardot.gif");
            pl(C);
            I3Y(C.toString(), 5E3, (0, g.LY)(p.aZ, p), 3, 2E3);
            p.t6(1)
        },
        ol1 = function(p) {
            var C = p.T.Y;
            C != null ? (nl(5), C ? (nl(11), Ll(p.T, p, !1)) : (nl(12), Ll(p.T, p, !0))) : (p.QV = new eA(p), p.QV.wW = p.NL, C = p.T, C = $h(C, C.Da() ? p.hM : null, p.eR), nl(5), Cl(C, "TYPE", "xmlhttp"), SB2(p.QV, C, !1, p.hM, !1))
        },
        kWv = function(p, C, V) {
            this.T = 1;
            this.C = [];
            this.V = [];
            this.W = new FZ;
            this.Z = p || null;
            this.Y = C != null ? C : null;
            this.J = V || !1
        },
        x5Y = function(p, C) {
            this.T = p;
            this.map = C;
            this.context = null
        },
        YBc = function(p, C, V, N) {
            g.$q.call(this, "timingevent", p);
            this.size = C;
            this.rtt = V;
            this.retries = N
        },
        z82 = function(p) {
            g.$q.call(this, "serverreachability", p)
        },
        nlv = function(p) {
            p.KH(1, 0);
            p.HX = $h(p, null, p.pK);
            R8F(p)
        },
        e81 = function(p) {
            p.O_ && (p.O_.abort(), p.O_ = null);
            p.dI && (p.dI.cancel(), p.dI = null);
            p.FC && (g.xH.clearTimeout(p.FC), p.FC = null);
            gi(p);
            p.n$ && (p.n$.cancel(), p.n$ = null);
            p.ez && (g.xH.clearTimeout(p.ez), p.ez = null)
        },
        PO0 = function(p, C) {
            if (p.T == 0) throw Error("Invalid operation: sending map when state is closed");
            p.C.push(new x5Y(p.ll++, C));
            p.T != 2 && p.T != 3 || R8F(p)
        },
        wwr = function(p) {
            var C = 0;
            p.dI && C++;
            p.n$ && C++;
            return C
        },
        R8F = function(p) {
            p.n$ || p.ez || (p.ez = z3((0, g.LY)(p.E4, p), 0), p.PA = 0)
        },
        glG = function(p, C) {
            if (p.T == 1) {
                if (!C) {
                    p.Uo = Math.floor(Math.random() * 1E5);
                    C = p.Uo++;
                    var V = new eA(p, "", C);
                    V.wW = p.A8;
                    var N = $5Y(p),
                        H = p.HX.clone();
                    g.yh(H, "RID", C);
                    g.yh(H, "CVER", "1");
                    Wt(p, H);
                    F_y(V, H, N);
                    p.n$ = V;
                    p.T = 2
                }
            } else p.T == 3 && (C ? L_c(p, C) : p.C.length == 0 || p.n$ || L_c(p))
        },
        L_c = function(p, C) {
            if (C)
                if (p.jY > 6) {
                    p.C = p.V.concat(p.C);
                    p.V.length = 0;
                    var V = p.Uo - 1;
                    C = $5Y(p)
                } else V = C.D, C = C.dW;
            else V = p.Uo++, C = $5Y(p);
            var N = p.HX.clone();
            g.yh(N, "SID", p.S);
            g.yh(N, "RID", V);
            g.yh(N, "AID", p.Rk);
            Wt(p, N);
            V = new eA(p, p.S, V, p.PA + 1);
            V.wW = p.A8;
            V.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            p.n$ = V;
            F_y(V, N, C)
        },
        Wt = function(p, C) {
            p.W$ && (p = p.W$.z$()) && g.ZH(p, function(V, N) {
                g.yh(C, N, V)
            })
        },
        $5Y = function(p) {
            var C = Math.min(p.C.length, 1E3),
                V = ["count=" + C];
            if (p.jY > 6 && C > 0) {
                var N = p.C[0].T;
                V.push("ofs=" + N)
            } else N = 0;
            for (var H = {}, X = 0; X < C; H = {
                    yw: void 0
                }, X++) {
                H.yw = p.C[X].T;
                var d = p.C[X].map;
                H.yw = p.jY <= 6 ? X : H.yw - N;
                try {
                    g.ZH(d, function(a) {
                        return function(E, l) {
                            V.push("req" + a.yw + "_" + l + "=" + encodeURIComponent(E))
                        }
                    }(H))
                } catch (a) {
                    V.push("req" + H.yw + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            p.V = p.V.concat(p.C.splice(0, C));
            return V.join("&")
        },
        W_F = function(p) {
            p.dI || p.FC || (p.D = 1, p.FC = z3((0, g.LY)(p.S0, p), 0), p.pW = 0)
        },
        rmE = function(p) {
            if (p.dI || p.FC || p.pW >= 3) return !1;
            p.D++;
            p.FC = z3((0, g.LY)(p.S0, p), Q_v(p, p.pW));
            p.pW++;
            return !0
        },
        Ll = function(p, C, V) {
            p.F7 = p.Y == null ? V : !p.Y;
            p.xQ = C.XC;
            p.J || nlv(p)
        },
        gi = function(p) {
            p.X6 != null && (g.xH.clearTimeout(p.X6), p.X6 = null)
        },
        Q_v = function(p, C) {
            var V = 5E3 + Math.floor(Math.random() * 1E4);
            p.isActive() || (V *= 2);
            return V * C
        },
        Qd = function(p, C) {
            if (C == 2 || C == 9) {
                var V = null;
                p.W$ && (V = null);
                var N = (0, g.LY)(p.dgY, p);
                V || (V = new g.SZ("//www.google.com/images/cleardot.gif"), pl(V));
                qBf(V.toString(), 1E4, N)
            } else nl(2);
            B8c(p, C)
        },
        B8c = function(p, C) {
            p.T = 0;
            p.W$ && p.W$.uZ(C);
            GWp(p);
            e81(p)
        },
        GWp = function(p) {
            p.T = 0;
            p.xQ = -1;
            if (p.W$)
                if (p.V.length == 0 && p.C.length == 0) p.W$.PZ();
                else {
                    var C = g.p6(p.V),
                        V = g.p6(p.C);
                    p.V.length = 0;
                    p.C.length = 0;
                    p.W$.PZ(C, V)
                }
        },
        $h = function(p, C, V) {
            var N = g.q_(V);
            if (N.T != "") C && g.Dq(N, C + "." + N.T), g.up(N, N.V);
            else {
                var H = window.location;
                N = fD1(H.protocol, C ? C + "." + H.hostname : H.hostname, +H.port, V)
            }
            p.Bx && g.ZH(p.Bx, function(X, d) {
                g.yh(N, d, X)
            });
            g.yh(N, "VER", p.jY);
            Wt(p, N);
            return N
        },
        pWE = function() {},
        CNP = function() {
            this.T = [];
            this.C = []
        },
        jpf = function(p) {
            g.$q.call(this, "channelMessage");
            this.message = p
        },
        V_2 = function(p) {
            g.$q.call(this, "channelError");
            this.error = p
        },
        NqF = function(p, C) {
            this.action = p;
            this.params = C || {}
        },
        ri = function(p, C) {
            g.Y.call(this);
            this.T = new g.N8(this.e3V, 0, this);
            g.R(this, this.T);
            this.Kx = 5E3;
            this.C = 0;
            if (typeof p === "function") C && (p = (0, g.LY)(p, C));
            else if (p && typeof p.handleEvent === "function") p = (0, g.LY)(p.handleEvent, p);
            else throw Error("Invalid listener argument");
            this.V = p
        },
        H3F = function(p, C, V, N, H) {
            V = V === void 0 ? !1 : V;
            N = N === void 0 ? function() {
                return ""
            } : N;
            H = H === void 0 ? !1 : H;
            this.sY = p;
            this.D = C;
            this.V = new g.IL;
            this.C = new ri(this.qOo, this);
            this.T = null;
            this.a$ = !1;
            this.Y = null;
            this.Z = "";
            this.J = this.W = 0;
            this.S = [];
            this.Ga = V;
            this.b_ = N;
            this.Y_ = H;
            this.vr = new Odv;
            this.Vn = new ypp;
            this.Wr = new qg1;
            this.Sa = new IDG;
            this.R$ = new bd8;
            this.UY = new Ap8
        },
        XW8 = function(p) {
            if (p.T) {
                var C = p.b_(),
                    V = p.T.A8 || {};
                C ? V["x-youtube-lounge-xsrf-token"] = C : delete V["x-youtube-lounge-xsrf-token"];
                p.T.A8 = V
            }
        },
        Bt = function(p) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.T = "/api/lounge";
            this.C = !0;
            p = p || document.location.href;
            var C = Number(g.$7(4, p)) || "";
            C && (this.port = ":" + C);
            this.domain = g.LJ(p) || "";
            p = g.f0();
            p.search("MSIE") >= 0 && (p = p.match(/MSIE ([\d.]+)/)[1], g.U1(p, "10.0") < 0 && (this.C = !1))
        },
        G3 = function(p, C) {
            var V = p.T;
            p.C && (V = p.scheme + "://" + p.domain + p.port + p.T);
            return g.GD(V + C, {})
        },
        dp8 = function(p, C) {
            g.h8.call(this);
            var V = this;
            this.qZ = p();
            this.qZ.subscribe("handlerOpened", this.OF, this);
            this.qZ.subscribe("handlerClosed", this.onClosed, this);
            this.qZ.subscribe("handlerError", function(N, H) {
                V.onError(H)
            });
            this.qZ.subscribe("handlerMessage", this.onMessage, this);
            this.T = C
        },
        i35 = function(p, C, V) {
            var N = this;
            V = V === void 0 ? function() {
                return ""
            } : V;
            var H = H === void 0 ? new tz0 : H;
            var X = X === void 0 ? new g.IL : X;
            this.pathPrefix = p;
            this.T = C;
            this.sY = V;
            this.W = X;
            this.J = null;
            this.Z = this.D = 0;
            this.channel = null;
            this.Y = 0;
            this.V = new ri(function() {
                N.V.isActive();
                var d;
                ((d = N.channel) == null ? void 0 : erv((new Mzf(d, d.T)).T.C)) === 0 && N.connect(N.J, N.D)
            });
            this.S = {};
            this.C = {};
            this.a$ = !1;
            this.logger = null;
            this.b_ = [];
            this.zI = void 0;
            this.vr = new Odv;
            this.Vn = new ypp;
            this.Wr = new qg1;
            this.Sa = new IDG
        },
        hVF = function(p) {
            g.jS(p.channel, "m", function() {
                p.Y = 3;
                p.V.reset();
                p.J = null;
                p.D = 0;
                for (var C = g.F(p.b_), V = C.next(); !V.done; V = C.next()) V = V.value, p.channel && p.channel.send(V);
                p.b_ = [];
                p.publish("webChannelOpened");
                p.vr.T("WEB_CHANNEL")
            });
            g.jS(p.channel, "n", function() {
                p.Y = 0;
                p.V.isActive() || p.publish("webChannelClosed");
                var C, V = (C = p.channel) == null ? void 0 : JmP(new Mzf(C, C.T));
                V && (p.b_ = [].concat(g.K(V)));
                p.Vn.T("WEB_CHANNEL")
            });
            g.jS(p.channel, "p", function(C) {
                var V = C.data;
                V[0] === "gracefulReconnect" ? (p.V.start(), p.channel && p.channel.close()) : p.publish("webChannelMessage", new NqF(V[0], V[1]));
                p.zI = C.statusCode;
                p.Wr.T("WEB_CHANNEL")
            });
            g.jS(p.channel, "o", function() {
                p.zI === 401 || p.V.start();
                p.publish("webChannelError");
                p.Sa.T("WEB_CHANNEL")
            })
        },
        spy = function(p) {
            var C = p.sY();
            C ? p.S["x-youtube-lounge-xsrf-token"] = C : delete p.S["x-youtube-lounge-xsrf-token"]
        },
        a1y = function(p) {
            g.h8.call(this);
            this.T = p();
            this.T.subscribe("webChannelOpened", this.JD, this);
            this.T.subscribe("webChannelClosed", this.onClosed, this);
            this.T.subscribe("webChannelError", this.onError, this);
            this.T.subscribe("webChannelMessage", this.onMessage, this)
        },
        Et8 = function(p, C, V, N, H) {
            function X() {
                return new H3F(G3(p, "/bc"), C, !1, V, N)
            }
            V = V === void 0 ? function() {
                return ""
            } : V;
            return g.Zr("enable_mdx_web_channel_desktop") ? new a1y(function() {
                return new i35(G3(p, "/wc"), C, V)
            }) : new dp8(X, H)
        },
        Tq5 = function() {
            var p = l12;
            t_G();
            pL.push(p);
            c1F()
        },
        CL = function(p, C) {
            t_G();
            var V = M_1(p, String(C));
            pL.length == 0 ? J15(V) : (c1F(), g.lr(pL, function(N) {
                N(V)
            }))
        },
        jW = function(p) {
            CL("CP", p)
        },
        t_G = function() {
            pL || (pL = g.zV("yt.mdx.remote.debug.handlers_") || [], g.YH("yt.mdx.remote.debug.handlers_", pL))
        },
        J15 = function(p) {
            var C = (VI + 1) % 50;
            VI = C;
            NJ[C] = p;
            Hr || (Hr = C == 49)
        },
        c1F = function() {
            var p = pL;
            if (NJ[0]) {
                var C = Hr ? VI : -1,
                    V = {};
                do V = {
                    uw: void 0
                }, C = (C + 1) % 50, V.uw = NJ[C], g.lr(p, function(N) {
                    return function(H) {
                        H(N.uw)
                    }
                }(V));
                while (C != VI);
                NJ = Array(50);
                VI = -1;
                Hr = !1
            }
        },
        M_1 = function(p, C) {
            var V = (Date.now() - mp8) / 1E3;
            V.toFixed && (V = V.toFixed(3));
            var N = [];
            N.push("[", V + "s", "] ");
            N.push("[", "yt.mdx.remote", "] ");
            N.push(p + ": " + C, "\n");
            return N.join("")
        },
        X4 = function(p) {
            g.ca.call(this);
            this.Y = p;
            this.screens = []
        },
        vtF = function(p, C) {
            var V = p.get(C.uuid) || p.get(C.id);
            if (V) return p = V.name, V.id = C.id || V.id, V.name = C.name, V.token = C.token, V.uuid = C.uuid || V.uuid, V.name != p;
            p.screens.push(C);
            return !0
        },
        FW5 = function(p, C) {
            var V = p.screens.length != C.length;
            p.screens = g.JT(p.screens, function(X) {
                return !!W21(C, X)
            });
            for (var N = C.length, H = 0; H < N; H++) V = vtF(p, C[H]) || V;
            return V
        },
        S2p = function(p, C) {
            var V = p.screens.length;
            p.screens = g.JT(p.screens, function(N) {
                return !(N || C ? !N != !C ? 0 : N.id == C.id : 1)
            });
            return p.screens.length < V
        },
        KWy = function(p, C, V, N, H) {
            g.ca.call(this);
            this.V = p;
            this.D = C;
            this.S = V;
            this.Y = N;
            this.W = H;
            this.C = 0;
            this.T = null;
            this.Pa = NaN
        },
        iD = function(p) {
            X4.call(this, "LocalScreenService");
            this.C = p;
            this.T = NaN;
            dD(this);
            this.info("Initializing with " + $vv(this.screens))
        },
        Dpp = function(p) {
            if (p.screens.length) {
                var C = g.AU(p.screens, function(N) {
                        return N.id
                    }),
                    V = G3(p.C, "/pairing/get_lounge_token_batch");
                p.C.sendRequest("POST", V, {
                    screen_ids: C.join(",")
                }, (0, g.LY)(p.zL, p), (0, g.LY)(p.vk, p))
            }
        },
        dD = function(p) {
            if (g.Zr("deprecate_pair_servlet_enabled")) return FW5(p, []);
            var C = w60(jKv());
            C = g.JT(C, function(V) {
                return !V.uuid
            });
            return FW5(p, C)
        },
        hu = function(p, C) {
            Nm0(g.AU(p.screens, ei0));
            C && Ve1()
        },
        Z3f = function(p, C) {
            g.ca.call(this);
            this.Y = C;
            C = (C = g.zW("yt-remote-online-screen-ids") || "") ? C.split(",") : [];
            for (var V = {}, N = this.Y(), H = N.length, X = 0; X < H; ++X) {
                var d = N[X].id;
                V[d] = g.W5(C, d)
            }
            this.T = V;
            this.W = p;
            this.V = this.S = NaN;
            this.C = null;
            u25("Initialized with " + g.zD(this.T))
        },
        Up5 = function(p, C, V) {
            var N = G3(p.W, "/pairing/get_screen_availability");
            p.W.sendRequest("POST", N, {
                lounge_token: C.token
            }, (0, g.LY)(function(H) {
                H = H.screens || [];
                for (var X = H.length, d = 0; d < X; ++d)
                    if (H[d].loungeToken == C.token) {
                        V(H[d].status == "online");
                        return
                    }
                V(!1)
            }, p), (0, g.LY)(function() {
                V(!1)
            }, p))
        },
        O3E = function(p, C) {
            a: if (Sg2(C) != Sg2(p.T)) var V = !1;
                else {
                    V = g.Ia(C);
                    for (var N = V.length, H = 0; H < N; ++H)
                        if (!p.T[V[H]]) {
                            V = !1;
                            break a
                        }
                    V = !0
                }V || (u25("Updated online screens: " + g.zD(p.T)), p.T = C, p.publish("screenChange"));f1r(p)
        },
        sq = function(p) {
            isNaN(p.V) || g.KO(p.V);
            p.V = g.F5((0, g.LY)(p.QJ, p), p.S > 0 && p.S < g.QL() ? 2E4 : 1E4)
        },
        u25 = function(p) {
            CL("OnlineScreenService", p)
        },
        y1G = function(p) {
            var C = {};
            g.lr(p.Y(), function(V) {
                V.token ? C[V.token] = V.id : this.Ap("Requesting availability of screen w/o lounge token.")
            });
            return C
        },
        f1r = function(p) {
            p = g.Ia(g.U_(p.T, function(C) {
                return C
            }));
            g.hB(p);
            p.length ? g.Yl("yt-remote-online-screen-ids", p.join(","), 60) : g.R_("yt-remote-online-screen-ids")
        },
        aR = function(p, C) {
            C = C === void 0 ? !1 : C;
            X4.call(this, "ScreenService");
            this.S = p;
            this.D = C;
            this.T = this.C = null;
            this.V = [];
            this.W = {};
            q2F(this)
        },
        b3E = function(p, C, V, N, H, X) {
            p.info("getAutomaticScreenByIds " + V + " / " + C);
            V || (V = p.W[C]);
            var d = p.Te(),
                a = V ? ay(d, V) : null;
            V && (p.D || a) || (a = ay(d, C));
            if (a) {
                a.uuid = C;
                var E = Eq(p, a);
                Up5(p.T, E, function(l) {
                    H(l ? E : null)
                })
            } else V ? I1f(p, V, (0, g.LY)(function(l) {
                var t = Eq(this, new iC({
                    name: N,
                    screenId: V,
                    loungeToken: l,
                    dialId: C || ""
                }));
                Up5(this.T, t, function(c) {
                    H(c ? t : null)
                })
            }, p), X) : H(null)
        },
        A1v = function(p, C) {
            for (var V = p.screens.length, N = 0; N < V; ++N)
                if (p.screens[N].name == C) return p.screens[N];
            return null
        },
        ot0 = function(p, C, V) {
            Up5(p.T, C, V)
        },
        I1f = function(p, C, V, N) {
            p.info("requestLoungeToken_ for " + C);
            var H = {
                postParams: {
                    screen_ids: C
                },
                method: "POST",
                context: p,
                onSuccess: function(X, d) {
                    X = d && d.screens || [];
                    X[0] && X[0].screenId == C ? V(X[0].loungeToken) : N(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    N(Error("Request screen lounge token failed"))
                }
            };
            g.qU(G3(p.S, "/pairing/get_lounge_token_batch"), H)
        },
        k42 = function(p) {
            p.screens = p.C.Te();
            var C = p.W,
                V = {},
                N;
            for (N in C) V[C[N]] = N;
            C = p.screens.length;
            for (N = 0; N < C; ++N) {
                var H = p.screens[N];
                H.uuid = V[H.id] || ""
            }
            p.info("Updated manual screens: " + $vv(p.screens))
        },
        q2F = function(p) {
            xp1(p);
            p.C = new iD(p.S);
            p.C.subscribe("screenChange", (0, g.LY)(p.RT, p));
            k42(p);
            p.D || (p.V = w60(g.zW("yt-remote-automatic-screen-cache") || []));
            xp1(p);
            p.info("Initializing automatic screens: " + $vv(p.V));
            p.T = new Z3f(p.S, (0, g.LY)(p.Te, p, !0));
            p.T.subscribe("screenChange", (0, g.LY)(function() {
                this.publish("onlineScreenChange")
            }, p))
        },
        Eq = function(p, C) {
            var V = p.get(C.id);
            V ? (V.uuid = C.uuid, C = V) : ((V = ay(p.V, C.uuid)) ? (V.id = C.id, V.token = C.token, C = V) : p.V.push(C), p.D || Y2r(p));
            xp1(p);
            p.W[C.uuid] = C.id;
            g.Yl("yt-remote-device-id-map", p.W, 31536E3);
            return C
        },
        Y2r = function(p) {
            p = g.JT(p.V, function(C) {
                return C.idType != "shortLived"
            });
            g.Yl("yt-remote-automatic-screen-cache", g.AU(p, ei0))
        },
        xp1 = function(p) {
            p.W = g.zW("yt-remote-device-id-map") || {}
        },
        lD = function(p, C, V) {
            g.ca.call(this);
            this.Sa = V;
            this.S = p;
            this.C = C;
            this.T = null
        },
        tu = function(p, C) {
            p.T = C;
            p.publish("sessionScreen", p.T)
        },
        zVc = function(p, C) {
            p.T && (p.T.token = C, Eq(p.S, p.T));
            p.publish("sessionScreen", p.T)
        },
        cr = function(p, C) {
            CL(p.Sa, C)
        },
        Ts = function(p, C, V) {
            lD.call(this, p, C, "CastSession");
            var N = this;
            this.config_ = V;
            this.V = null;
            this.b_ = (0, g.LY)(this.jy, this);
            this.Vn = (0, g.LY)(this.QN$, this);
            this.a$ = g.F5(function() {
                RVr(N, null)
            }, 12E4);
            this.D = this.W = this.Y = this.J = 0;
            this.sY = !1;
            this.Z = "unknown"
        },
        eVy = function(p, C) {
            g.KO(p.D);
            p.D = 0;
            C == 0 ? nt2(p) : p.D = g.F5(function() {
                nt2(p)
            }, C)
        },
        nt2 = function(p) {
            PNy(p, "getLoungeToken");
            g.KO(p.W);
            p.W = g.F5(function() {
                wW8(p, null)
            }, 3E4)
        },
        PNy = function(p, C) {
            p.info("sendYoutubeMessage_: " + C + " " + g.zD());
            var V = {};
            V.type = C;
            p.V ? p.V.sendMessage("urn:x-cast:com.google.youtube.mdx", V, function() {}, (0, g.LY)(function() {
                cr(this, "Failed to send message: " + C + ".")
            }, p)) : cr(p, "Sending yt message without session: " + g.zD(V))
        },
        $pP = function(p, C) {
            C ? (p.info("onConnectedScreenId_: Received screenId: " + C), p.T && p.T.id == C || p.Fa(C, function(V) {
                tu(p, V)
            }, function() {
                return p.fq()
            }, 5)) : p.fq(Error("Waiting for session status timed out."))
        },
        gt8 = function(p, C, V) {
            p.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(C));
            var N = new iC(C);
            LW2(p, N, function(H) {
                H ? (p.sY = !0, Eq(p.S, N), tu(p, N), p.Z = "unknown", eVy(p, V)) : (g.Vg(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(C) + " is not online.")), p.fq())
            }, 5)
        },
        RVr = function(p, C) {
            g.KO(p.a$);
            p.a$ = 0;
            C ? p.config_.enableCastLoungeToken && C.loungeToken ? C.deviceId ? p.T && p.T.uuid == C.deviceId || (C.loungeTokenRefreshIntervalMs ? gt8(p, {
                    name: p.C.friendlyName,
                    screenId: C.screenId,
                    loungeToken: C.loungeToken,
                    dialId: C.deviceId,
                    screenIdType: "shortLived"
                }, C.loungeTokenRefreshIntervalMs) : (g.Vg(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(C) + ".")), $pP(p, C.screenId))) : (g.Vg(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(C) + ".")), $pP(p, C.screenId)) :
                $pP(p, C.screenId) : p.fq(Error("Waiting for session status timed out."))
        },
        wW8 = function(p, C) {
            g.KO(p.W);
            p.W = 0;
            var V = null;
            if (C)
                if (C.loungeToken) {
                    var N;
                    ((N = p.T) == null ? void 0 : N.token) == C.loungeToken && (V = "staleLoungeToken")
                } else V = "missingLoungeToken";
            else V = "noLoungeTokenResponse";
            V ? (p.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(C) + ", error: " + V)), p.Z = V, eVy(p, 3E4)) : (zVc(p, C.loungeToken), p.sY = !1, p.Z = "unknown", eVy(p, C.loungeTokenRefreshIntervalMs))
        },
        LW2 = function(p, C, V, N) {
            g.KO(p.Y);
            p.Y = 0;
            ot0(p.S, C, function(H) {
                H || N < 0 ? V(H) : p.Y = g.F5(function() {
                    LW2(p, C, V, N - 1)
                }, 300)
            })
        },
        WWY = function(p) {
            g.KO(p.J);
            p.J = 0;
            g.KO(p.Y);
            p.Y = 0;
            g.KO(p.a$);
            p.a$ = 0;
            g.KO(p.W);
            p.W = 0;
            g.KO(p.D);
            p.D = 0
        },
        MJ = function(p, C, V, N) {
            lD.call(this, p, C, "DialSession");
            this.config_ = N;
            this.V = this.J = null;
            this.Vn = "";
            this.Ga = V;
            this.vr = null;
            this.a$ = function() {};
            this.Z = NaN;
            this.Wr = (0, g.LY)(this.XG, this);
            this.W = function() {};
            this.D = this.Y = 0;
            this.b_ = !1;
            this.sY = "unknown"
        },
        Ju = function(p) {
            var C;
            return !!(p.config_.enableDialLoungeToken && ((C = p.V) == null ? 0 : C.getDialAppInfo))
        },
        Qpy = function(p) {
            p.W = p.S.fm(p.Vn, p.C.label, p.C.friendlyName, Ju(p), function(C, V) {
                p.W = function() {};
                p.b_ = !0;
                tu(p, C);
                C.idType == "shortLived" && V > 0 && mU(p, V)
            }, function(C) {
                p.W = function() {};
                p.fq(C)
            })
        },
        r1Y = function(p) {
            var C = {};
            C.pairingCode = p.Vn;
            C.theme = p.Ga;
            Xd2() && (C.env_useStageMdx = 1);
            return g.BX(C)
        },
        BqY = function(p) {
            return new Promise(function(C) {
                p.Vn = L2E();
                if (p.vr) {
                    var V = new chrome.cast.DialLaunchResponse(!0, r1Y(p));
                    C(V);
                    Qpy(p)
                } else p.a$ = function() {
                    g.KO(p.Z);
                    p.a$ = function() {};
                    p.Z = NaN;
                    var N = new chrome.cast.DialLaunchResponse(!0, r1Y(p));
                    C(N);
                    Qpy(p)
                }, p.Z = g.F5(function() {
                    p.a$()
                }, 100)
            })
        },
        pCp = function(p, C, V) {
            p.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(C));
            var N = new iC(C);
            return (new Promise(function(H) {
                G4r(p, N, function(X) {
                    X ? (p.b_ = !0, Eq(p.S, N), tu(p, N), mU(p, V)) : g.Vg(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(C) + " is not online."));
                    H(X)
                }, 5)
            })).then(function(H) {
                return H ? new chrome.cast.DialLaunchResponse(!1) : BqY(p)
            })
        },
        CRf = function(p, C) {
            var V = p.J.receiver.label,
                N = p.C.friendlyName;
            return (new Promise(function(H) {
                b3E(p.S, V, C, N, function(X) {
                    X && X.token && tu(p, X);
                    H(X)
                }, function(X) {
                    cr(p, "Failed to get DIAL screen: " + X);
                    H(null)
                })
            })).then(function(H) {
                return H && H.token ? new chrome.cast.DialLaunchResponse(!1) : BqY(p)
            })
        },
        G4r = function(p, C, V, N) {
            g.KO(p.Y);
            p.Y = 0;
            ot0(p.S, C, function(H) {
                H || N < 0 ? V(H) : p.Y = g.F5(function() {
                    G4r(p, C, V, N - 1)
                }, 300)
            })
        },
        mU = function(p, C) {
            p.info("getDialAppInfoWithTimeout_ " + C);
            Ju(p) && (g.KO(p.D), p.D = 0, C == 0 ? jxr(p) : p.D = g.F5(function() {
                jxr(p)
            }, C))
        },
        jxr = function(p) {
            Ju(p) && p.V.getDialAppInfo(function(C) {
                p.info("getDialAppInfo dialLaunchData: " + JSON.stringify(C));
                C = C.extraData || {};
                var V = null;
                if (C.loungeToken) {
                    var N;
                    ((N = p.T) == null ? void 0 : N.token) == C.loungeToken && (V = "staleLoungeToken")
                } else V = "missingLoungeToken";
                V ? (p.sY = V, mU(p, 3E4)) : (p.b_ = !1, p.sY = "unknown", zVc(p, C.loungeToken), mU(p, C.loungeTokenRefreshIntervalMs))
            }, function(C) {
                p.info("getDialAppInfo error: " + C);
                p.sY = "noLoungeTokenResponse";
                mU(p, 3E4)
            })
        },
        VVG = function(p) {
            g.KO(p.Y);
            p.Y = 0;
            g.KO(p.D);
            p.D = 0;
            p.W();
            p.W = function() {};
            g.KO(p.Z)
        },
        vr = function(p, C) {
            lD.call(this, p, C, "ManualSession");
            this.V = g.F5((0, g.LY)(this.HE, this, null), 150)
        },
        F4 = function(p, C) {
            g.ca.call(this);
            this.config_ = C;
            this.C = p;
            this.J = C.appId || "233637DE";
            this.S = C.theme || "cl";
            this.Z = C.disableCastApi || !1;
            this.Y = C.forceMirroring || !1;
            this.T = null;
            this.D = !1;
            this.V = [];
            this.W = (0, g.LY)(this.gM_, this)
        },
        Nyv = function(p, C) {
            return C ? g.L0(p.V, function(V) {
                return hZ(C, V.label)
            }, p) : null
        },
        SW = function(p) {
            CL("Controller", p)
        },
        l12 = function(p) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(p)
        },
        KL = function(p) {
            return p.D || !!p.V.length || !!p.T
        },
        DP = function(p, C, V) {
            C != p.T && (g.iP(p.T), (p.T = C) ? (V ? p.publish("yt-remote-cast2-receiver-resumed",
                C.C) : p.publish("yt-remote-cast2-receiver-selected", C.C), C.subscribe("sessionScreen", (0, g.LY)(p.BQ, p, C)), C.subscribe("sessionFailed", function() {
                return H5P(p, C)
            }), C.T ? p.publish("yt-remote-cast2-session-change", C.T) : V && p.T.HE(null)) : p.publish("yt-remote-cast2-session-change", null))
        },
        H5P = function(p, C) {
            p.T == C && p.publish("yt-remote-cast2-session-failed")
        },
        XCr = function(p) {
            var C = p.C.iZ(),
                V = p.T && p.T.C;
            p = g.AU(C, function(N) {
                V && hZ(N, V.label) && (V = null);
                var H = N.uuid ? N.uuid : N.id,
                    X = Nyv(this, N);
                X ? (X.label = H, X.friendlyName = N.name) : (X = new chrome.cast.Receiver(H, N.name), X.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return X
            }, p);
            V && (V.receiverType != chrome.cast.ReceiverType.CUSTOM && (V = new chrome.cast.Receiver(V.label, V.friendlyName), V.receiverType = chrome.cast.ReceiverType.CUSTOM), p.push(V));
            return p
        },
        lhY = function(p, C, V, N) {
            N.disableCastApi ? uD("Cannot initialize because disabled by Mdx config.") : deP() ? i5G(C, N) && (hk2(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? sxY(p, V) : (window.__onGCastApiAvailable = function(H, X) {
                H ? sxY(p, V) : (ZP("Failed to load cast API: " + X), ah2(!1), hk2(!1), g.R_("yt-remote-cast-available"), g.R_("yt-remote-cast-receiver"),
                    EpE(), V(!1))
            }, N.loadCastApiSetupScript ? g.md("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? iOv() >= 60 && Mey() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? ED8() : iOv() >= 89 ? mU1() : (TmY(), JZ(Jwc.map(lr2))))) : uD("Cannot initialize because not running Chrome")
        },
        EpE = function() {
            uD("dispose");
            var p = Uq();
            p && p.dispose();
            g.YH("yt.mdx.remote.cloudview.instance_", null);
            tVE(!1);
            g.MM(cNp);
            cNp.length = 0
        },
        fL = function() {
            return !!g.zW("yt-remote-cast-installed")
        },
        Ty1 = function() {
            var p = g.zW("yt-remote-cast-receiver");
            return p ? p.friendlyName : null
        },
        MVG = function() {
            uD("clearCurrentReceiver");
            g.R_("yt-remote-cast-receiver")
        },
        JNP = function() {
            return fL() ? Uq() ? Uq().getCastSession() : (ZP("getCastSelector: Cast is not initialized."), null) : (ZP("getCastSelector: Cast API is not installed!"), null)
        },
        mey = function() {
            fL() ? Uq() ? Oq() ? (uD("Requesting cast selector."), Uq().requestSession()) : (uD("Wait for cast API to be ready to request the session."), cNp.push(g.T7("yt-remote-cast2-api-ready", mey))) : ZP("requestCastSelector: Cast is not initialized.") : ZP("requestCastSelector: Cast API is not installed!")
        },
        yI = function(p, C) {
            Oq() ? Uq().setConnectedScreenStatus(p, C) : ZP("setConnectedScreenStatus called before ready.")
        },
        deP = function() {
            var p = g.f0().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.kZ || p
        },
        vp8 = function(p, C) {
            Uq().init(p, C)
        },
        i5G = function(p, C) {
            var V = !1;
            Uq() || (p = new F4(p, C), p.subscribe("yt-remote-cast2-availability-change", function(N) {
                g.Yl("yt-remote-cast-available", N);
                T3("yt-remote-cast2-availability-change", N)
            }), p.subscribe("yt-remote-cast2-receiver-selected", function(N) {
                uD("onReceiverSelected: " + N.friendlyName);
                g.Yl("yt-remote-cast-receiver", N);
                T3("yt-remote-cast2-receiver-selected", N)
            }), p.subscribe("yt-remote-cast2-receiver-resumed", function(N) {
                uD("onReceiverResumed: " + N.friendlyName);
                g.Yl("yt-remote-cast-receiver", N);
                T3("yt-remote-cast2-receiver-resumed", N)
            }), p.subscribe("yt-remote-cast2-session-change", function(N) {
                uD("onSessionChange: " + sx(N));
                N || g.R_("yt-remote-cast-receiver");
                T3("yt-remote-cast2-session-change", N)
            }), g.YH("yt.mdx.remote.cloudview.instance_", p), V = !0);
            uD("cloudview.createSingleton_: " + V);
            return V
        },
        Uq = function() {
            return g.zV("yt.mdx.remote.cloudview.instance_")
        },
        sxY = function(p, C) {
            ah2(!0);
            hk2(!1);
            vp8(p, function(V) {
                V ? (tVE(!0), g.J3("yt-remote-cast2-api-ready")) : (ZP("Failed to initialize cast API."), ah2(!1), g.R_("yt-remote-cast-available"), g.R_("yt-remote-cast-receiver"), EpE());
                C(V)
            })
        },
        uD = function(p) {
            CL("cloudview", p)
        },
        ZP = function(p) {
            CL("cloudview", p)
        },
        ah2 = function(p) {
            uD("setCastInstalled_ " + p);
            g.Yl("yt-remote-cast-installed", p)
        },
        Oq = function() {
            return !!g.zV("yt.mdx.remote.cloudview.apiReady_")
        },
        tVE = function(p) {
            uD("setApiReady_ " + p);
            g.YH("yt.mdx.remote.cloudview.apiReady_", p)
        },
        hk2 = function(p) {
            g.YH("yt.mdx.remote.cloudview.initializing_", p)
        },
        qJ = function(p) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.Y = this.D = 0;
            this.trackData = null;
            this.bT = this.gj = !1;
            this.J = this.W = this.T = this.S = 0;
            this.V = NaN;
            this.C = !1;
            this.reset(p)
        },
        FeP = function(p) {
            p.audioTrackId = null;
            p.trackData = null;
            p.playerState = -1;
            p.gj = !1;
            p.bT = !1;
            p.D = 0;
            p.Y = g.QL();
            p.S = 0;
            p.T = 0;
            p.W = 0;
            p.J = 0;
            p.V = NaN;
            p.C = !1
        },
        IR = function(p) {
            return p.isPlaying() ? (g.QL() - p.Y) / 1E3 : 0
        },
        bD = function(p, C) {
            p.D = C;
            p.Y = g.QL()
        },
        Au = function(p) {
            switch (p.playerState) {
                case 1:
                case 1081:
                    return (g.QL() - p.Y) / 1E3 + p.D;
                case -1E3:
                    return 0
            }
            return p.D
        },
        oR = function(p, C, V) {
            var N = p.videoId;
            p.videoId = C;
            p.index = V;
            C != N && FeP(p)
        },
        SX1 = function(p) {
            var C = {};
            C.index = p.index;
            C.listId = p.listId;
            C.videoId = p.videoId;
            C.playerState = p.playerState;
            C.volume = p.volume;
            C.muted = p.muted;
            C.audioTrackId = p.audioTrackId;
            C.trackData = g.Ra(p.trackData);
            C.hasPrevious = p.gj;
            C.hasNext = p.bT;
            C.playerTime = p.D;
            C.playerTimeAt = p.Y;
            C.seekableStart = p.S;
            C.seekableEnd = p.T;
            C.duration = p.W;
            C.loadedTime = p.J;
            C.liveIngestionTime = p.V;
            return C
        },
        xs = function(p, C) {
            g.ca.call(this);
            var V = this;
            this.V = 0;
            this.S = p;
            this.Y = [];
            this.W = new CNP;
            this.C = this.T = null;
            this.Z = (0, g.LY)(this.HS$, this);
            this.D = (0, g.LY)(this.EG, this);
            this.J = (0, g.LY)(this.enk, this);
            this.a$ = (0, g.LY)(this.P_k, this);
            var N = 0;
            p ? (N = p.getProxyState(), N != 3 && (p.subscribe("proxyStateChange", this.zm, this), KeF(this))) : N = 3;
            N != 0 && (C ? this.zm(N) : g.F5(function() {
                V.zm(N)
            }, 0));
            (p = JNP()) && ks(this, p);
            this.subscribe("yt-remote-cast2-session-change", this.a$)
        },
        Ys = function(p) {
            return new qJ(p.S.getPlayerContextData())
        },
        KeF = function(p) {
            g.lr("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(C) {
                this.Y.push(this.S.subscribe(C, g.Wv(this.KMY, C), this))
            }, p)
        },
        Dep = function(p) {
            g.lr(p.Y, function(C) {
                this.S.unsubscribeByKey(C)
            }, p);
            p.Y.length = 0
        },
        zs = function(p) {
            return p.getState() == 1
        },
        RR = function(p, C) {
            var V = p.W;
            V.T.length + V.C.length < 50 && p.W.enqueue(C)
        },
        uDP = function(p, C, V) {
            var N = Ys(p);
            bD(N, V);
            N.playerState != -1E3 && (N.playerState = C);
            nL(p, N)
        },
        eW = function(p, C, V) {
            p.S.sendMessage(C, V)
        },
        nL = function(p, C) {
            Dep(p);
            p.S.setPlayerContextData(SX1(C));
            KeF(p)
        },
        ks = function(p, C) {
            p.C && (p.C.removeUpdateListener(p.Z), p.C.removeMediaListener(p.D), p.EG(null));
            p.C = C;
            p.C && (jW("Setting cast session: " + p.C.sessionId), p.C.addUpdateListener(p.Z), p.C.addMediaListener(p.D), p.C.media.length && p.EG(p.C.media[0]))
        },
        Z5F = function(p) {
            var C = p.T.media,
                V = p.T.customData;
            if (C && V) {
                var N = Ys(p);
                C.contentId != N.videoId && jW("Cast changing video to: " + C.contentId);
                N.videoId = C.contentId;
                N.playerState = V.playerState;
                bD(N, p.T.getEstimatedTime());
                nL(p, N)
            } else jW("No cast media video. Ignoring state update.")
        },
        Pr = function(p, C, V) {
            return (0, g.LY)(function(N) {
                this.Ap("Failed to " + C + " with cast v2 channel. Error code: " + N.code);
                N.code != chrome.cast.ErrorCode.TIMEOUT && (this.Ap("Retrying " + C + " using MDx browser channel."), eW(this, C, V))
            }, p)
        },
        LL = function(p, C, V, N) {
            N = N === void 0 ? !1 : N;
            g.ca.call(this);
            var H = this;
            this.Y = NaN;
            this.Vn = !1;
            this.Z = this.J = this.b_ = this.sY = NaN;
            this.a$ = [];
            this.W = this.D = this.S = this.T = this.C = null;
            this.vr = p;
            this.Wr = N;
            this.a$.push(g.UB(window, "beforeunload", function() {
                H.HW(2)
            }));
            this.V = [];
            this.T = new qJ;
            this.Ga = C.id;
            this.Sa = C.idType;
            this.C = Et8(this.vr, V, this.G$, this.Sa == "shortLived", this.Ga);
            this.C.listen("channelOpened", function() {
                Ue8(H)
            });
            this.C.listen("channelClosed", function() {
                wD("Channel closed");
                isNaN(H.Y) ? tZ(!0) : tZ();
                H.dispose()
            });
            this.C.listen("channelError", function(X) {
                tZ();
                isNaN(H.AA()) ? (X == 1 && H.Sa == "shortLived" && H.publish("browserChannelAuthError", X), wD("Channel error: " + X + " without reconnection"), H.dispose()) : (H.Vn = !0, wD("Channel error: " + X + " with reconnection in " + H.AA() + " ms"), $s(H, 2))
            });
            this.C.listen("channelMessage", function(X) {
                fh5(H, X)
            });
            this.C.b6(C.token);
            this.subscribe("remoteQueueChange", function() {
                var X = H.T.videoId;
                g.nK() && g.Yl("yt-remote-session-video-id", X)
            })
        },
        O50 = function(p) {
            return g.L0(p.V, function(C) {
                return C.type == "LOUNGE_SCREEN"
            })
        },
        wD = function(p) {
            CL("conn", p)
        },
        $s = function(p, C) {
            p.publish("proxyStateChange", C)
        },
        yNy = function(p) {
            p.Y = g.F5(function() {
                wD("Connecting timeout");
                p.HW(1)
            }, 2E4)
        },
        qXr = function(p) {
            g.KO(p.Y);
            p.Y = NaN
        },
        Ihr = function(p) {
            g.KO(p.sY);
            p.sY = NaN
        },
        ANF = function(p) {
            b50(p);
            p.b_ = g.F5(function() {
                gD(p, "getNowPlaying")
            }, 2E4)
        },
        b50 = function(p) {
            g.KO(p.b_);
            p.b_ = NaN
        },
        Ue8 = function(p) {
            wD("Channel opened");
            p.Vn && (p.Vn = !1, Ihr(p), p.sY = g.F5(function() {
                wD("Timing out waiting for a screen.");
                p.HW(1)
            }, 15E3))
        },
        k1f = function(p, C) {
            var V = null;
            if (C) {
                var N = O50(p);
                N && (V = {
                    clientName: N.clientName,
                    deviceMake: N.brand,
                    deviceModel: N.model,
                    osVersion: N.osVersion
                })
            }
            g.YH("yt.mdx.remote.remoteClient_", V);
            C && (qXr(p), Ihr(p));
            V = p.C.EW() && isNaN(p.Y);
            C == V ? C && ($s(p, 1), gD(p, "getSubtitlesTrack")) : C ? (p.wT() && p.T.reset(), $s(p, 1), gD(p, "getNowPlaying"), opy(p)) : p.HW(1)
        },
        xeY = function(p, C) {
            var V = C.params.videoId;
            delete C.params.videoId;
            V == p.T.videoId && (g.k5(C.params) ? p.T.trackData = null : p.T.trackData = C.params, p.publish("remotePlayerChange"))
        },
        YXE = function(p, C, V) {
            var N = C.params.videoId || C.params.video_id,
                H = parseInt(C.params.currentIndex, 10);
            p.T.listId = C.params.listId || p.T.listId;
            oR(p.T, N, H);
            p.publish("remoteQueueChange", V)
        },
        Rk5 = function(p, C) {
            C.params = C.params || {};
            YXE(p, C, "NOW_PLAYING_MAY_CHANGE");
            zky(p, C);
            p.publish("autoplayDismissed")
        },
        zky = function(p, C) {
            var V = parseInt(C.params.currentTime || C.params.current_time, 10);
            bD(p.T, isNaN(V) ? 0 : V);
            V = parseInt(C.params.state, 10);
            V = isNaN(V) ? -1 : V;
            V == -1 && p.T.playerState == -1E3 && (V = -1E3);
            p.T.playerState = V;
            V = Number(C.params.loadedTime);
            p.T.J = isNaN(V) ? 0 : V;
            p.T.Nr(Number(C.params.duration));
            V = p.T;
            var N = Number(C.params.liveIngestionTime);
            V.V = N;
            V.C = isNaN(N) ? !1 : !0;
            V = p.T;
            N = Number(C.params.seekableStartTime);
            C = Number(C.params.seekableEndTime);
            V.S = isNaN(N) ? 0 : N;
            V.T = isNaN(C) ? 0 : C;
            p.T.playerState == 1 ? ANF(p) : b50(p);
            p.publish("remotePlayerChange")
        },
        np2 = function(p, C) {
            if (p.T.playerState != -1E3) {
                var V =
                    1085;
                switch (parseInt(C.params.adState, 10)) {
                    case 1:
                        V = 1081;
                        break;
                    case 2:
                        V = 1084;
                        break;
                    case 0:
                        V = 1083
                }
                p.T.playerState = V;
                C = parseInt(C.params.currentTime, 10);
                bD(p.T, isNaN(C) ? 0 : C);
                p.publish("remotePlayerChange")
            }
        },
        ek0 = function(p, C) {
            var V = C.params.muted == "true";
            p.T.volume = parseInt(C.params.volume, 10);
            p.T.muted = V;
            p.publish("remotePlayerChange")
        },
        PRp = function(p, C) {
            p.D = C.params.videoId;
            p.publish("nowAutoplaying", parseInt(C.params.timeout, 10))
        },
        wCf = function(p, C) {
            p.D = C.params.videoId || null;
            p.publish("autoplayUpNext", p.D)
        },
        $ey = function(p, C) {
            p.W = C.params.autoplayMode;
            p.publish("autoplayModeChange", p.W);
            p.W == "DISABLED" && p.publish("autoplayDismissed")
        },
        Ley = function(p, C) {
            var V = C.params.hasNext == "true";
            p.T.gj = C.params.hasPrevious == "true";
            p.T.bT = V;
            p.publish("previousNextChange")
        },
        fh5 = function(p, C) {
            C = C.message;
            C.params ? wD("Received: action=" + C.action + ", params=" + g.zD(C.params)) : wD("Received: action=" + C.action + " {}");
            switch (C.action) {
                case "loungeStatus":
                    C = jA(C.params.devices);
                    p.V = g.AU(C, function(N) {
                        return new di(N)
                    });
                    C = !!g.L0(p.V, function(N) {
                        return N.type == "LOUNGE_SCREEN"
                    });
                    k1f(p, C);
                    C = p.Me("mlm");
                    p.publish("multiStateLoopEnabled", C);
                    break;
                case "loungeScreenDisconnected":
                    g.B5(p.V, function(N) {
                        return N.type == "LOUNGE_SCREEN"
                    });
                    k1f(p, !1);
                    break;
                case "remoteConnected":
                    var V = new di(jA(C.params.device));
                    g.L0(p.V, function(N) {
                        return N.sE(V)
                    }) || F25(p.V, V);
                    break;
                case "remoteDisconnected":
                    V = new di(jA(C.params.device));
                    g.B5(p.V, function(N) {
                        return N.sE(V)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    YXE(p, C, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    Rk5(p, C);
                    break;
                case "onStateChange":
                    zky(p, C);
                    break;
                case "onAdStateChange":
                    np2(p, C);
                    break;
                case "onVolumeChanged":
                    ek0(p, C);
                    break;
                case "onSubtitlesTrackChanged":
                    xeY(p, C);
                    break;
                case "nowAutoplaying":
                    PRp(p, C);
                    break;
                case "autoplayDismissed":
                    p.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    wCf(p, C);
                    break;
                case "onAutoplayModeChanged":
                    $ey(p, C);
                    break;
                case "onHasPreviousNextChanged":
                    Ley(p,
                        C);
                    break;
                case "requestAssistedSignIn":
                    p.publish("assistedSignInRequested", C.params.authCode);
                    break;
                case "onLoopModeChanged":
                    p.publish("loopModeChange", C.params.loopMode);
                    break;
                default:
                    wD("Unrecognized action: " + C.action)
            }
        },
        opy = function(p) {
            g.KO(p.Z);
            p.Z = g.F5(function() {
                p.HW(1)
            }, 864E5)
        },
        gD = function(p, C, V) {
            V ? wD("Sending: action=" + C + ", params=" + g.zD(V)) : wD("Sending: action=" + C);
            p.C.sendMessage(C, V)
        },
        gp1 = function(p) {
            X4.call(this, "ScreenServiceProxy");
            this.b8 = p;
            this.T = [];
            this.T.push(this.b8.$_s("screenChange", (0, g.LY)(this.Mb, this)));
            this.T.push(this.b8.$_s("onlineScreenChange", (0, g.LY)(this.i4a, this)))
        },
        G1r = function(p, C) {
            HOY();
            if (!ct || !ct.get("yt-remote-disable-remote-module-for-dev")) {
                C = g.pO("MDX_CONFIG") || C;
                Q6r();
                pd1();
                Wr || (Wr = new Bt(C ? C.loungeApiHost : void 0), Xd2() && (Wr.T = "/api/loungedev"));
                QI || (QI = g.zV("yt.mdx.remote.deferredProxies_") || [], g.YH("yt.mdx.remote.deferredProxies_", QI));
                Wev();
                var V = rD();
                if (!V) {
                    var N = new aR(Wr, C ? C.disableAutomaticScreenCache || !1 : !1);
                    g.YH("yt.mdx.remote.screenService_", N);
                    V = rD();
                    var H = {};
                    C && (H = {
                        appId: C.appId,
                        disableDial: C.disableDial,
                        theme: C.theme,
                        loadCastApiSetupScript: C.loadCastApiSetupScript,
                        disableCastApi: C.disableCastApi,
                        enableDialLoungeToken: C.enableDialLoungeToken,
                        enableCastLoungeToken: C.enableCastLoungeToken,
                        forceMirroring: C.forceMirroring
                    });
                    g.YH("yt.mdx.remote.enableConnectWithInitialState_", C ? C.enableConnectWithInitialState || !1 : !1);
                    lhY(p, N, function(X) {
                        X ? Br() && yI(Br(), "YouTube TV") : N.subscribe("onlineScreenChange", function() {
                            T3("yt-remote-receiver-availability-change")
                        })
                    }, H)
                }
                C && !g.zV("yt.mdx.remote.initialized_") && (g.YH("yt.mdx.remote.initialized_", !0), Gs("Initializing: " + g.zD(C)),
                    pQ.push(g.T7("yt-remote-cast2-api-ready", function() {
                        T3("yt-remote-api-ready")
                    })), pQ.push(g.T7("yt-remote-cast2-availability-change", function() {
                        T3("yt-remote-receiver-availability-change")
                    })), pQ.push(g.T7("yt-remote-cast2-receiver-selected", function() {
                        CQ(null);
                        T3("yt-remote-auto-connect", "cast-selector-receiver")
                    })), pQ.push(g.T7("yt-remote-cast2-receiver-resumed", function() {
                        T3("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), pQ.push(g.T7("yt-remote-cast2-session-change", QxE)), pQ.push(g.T7("yt-remote-connection-change", function(X) {
                        X ? yI(Br(), "YouTube TV") : jc() || (yI(null, null), MVG())
                    })), pQ.push(g.T7("yt-remote-cast2-session-failed", function() {
                        T3("yt-remote-connection-failed")
                    })), p = rNP(), C.isAuto && (p.id += "#dial"), H = C.capabilities || [], g.Zr("desktop_enable_autoplay") &&
                    H.push("atp"), H.length > 0 && (p.capabilities = H), p.name = C.device, p.app = C.app, (C = C.theme) && (p.theme = C), Gs(" -- with channel params: " + g.zD(p)), p ? (g.Yl("yt-remote-session-app", p.app), g.Yl("yt-remote-session-name", p.name)) : (g.R_("yt-remote-session-app"), g.R_("yt-remote-session-name")), g.YH("yt.mdx.remote.channelParams_", p), V.start(), Br() || Byf())
            }
        },
        plc = function() {
            var p = rD().b8.$_gos();
            var C = Vp();
            C && Nu() && (W21(p, C) || p.push(C));
            return gQ1(p)
        },
        jhE = function() {
            var p = CV5();
            !p && fL() && Ty1() && (p = {
                key: "cast-selector-receiver",
                name: Ty1()
            });
            return p
        },
        CV5 = function() {
            var p = plc(),
                C = Vp();
            C || (C = jc());
            return g.L0(p, function(V) {
                return C && hZ(C, V.key) ? !0 : !1
            })
        },
        Vp = function() {
            var p = Br();
            if (!p) return null;
            var C = rD().Te();
            return ay(C, p)
        },
        QxE = function(p) {
            Gs("remote.onCastSessionChange_: " + sx(p));
            if (p) {
                var C = Vp();
                if (C && C.id == p.id) {
                    if (yI(C.id, "YouTube TV"), p.idType == "shortLived" && (p = p.token)) HA && (HA.token = p), (C = Nu()) && C.b6(p)
                } else C && XT(), da(p, 1)
            } else Nu() && XT()
        },
        XT = function() {
            Oq() ? Uq().stopSession() : ZP("stopSession called before API ready.");
            var p = Nu();
            p && (p.disconnect(1), VFr(null))
        },
        N$1 = function() {
            var p = Nu();
            return !!p && p.getProxyState() != 3
        },
        Gs = function(p) {
            CL("remote", p)
        },
        rD = function() {
            if (!H1F) {
                var p = g.zV("yt.mdx.remote.screenService_");
                H1F = p ? new gp1(p) : null
            }
            return H1F
        },
        Br = function() {
            return g.zV("yt.mdx.remote.currentScreenId_")
        },
        Xl1 = function(p) {
            g.YH("yt.mdx.remote.currentScreenId_", p)
        },
        dM0 = function() {
            return g.zV("yt.mdx.remote.connectData_")
        },
        CQ = function(p) {
            g.YH("yt.mdx.remote.connectData_", p)
        },
        Nu = function() {
            return g.zV("yt.mdx.remote.connection_")
        },
        VFr = function(p) {
            var C = Nu();
            CQ(null);
            p || Xl1("");
            g.YH("yt.mdx.remote.connection_", p);
            QI && (g.lr(QI, function(V) {
                V(p)
            }), QI.length = 0);
            C && !p ? T3("yt-remote-connection-change", !1) : !C && p && T3("yt-remote-connection-change", !0)
        },
        jc = function() {
            var p = g.nK();
            if (!p) return null;
            var C = rD();
            if (!C) return null;
            C = C.Te();
            return ay(C, p)
        },
        da = function(p, C) {
            Br();
            Vp() && Vp();
            if (iE) HA = p;
            else {
                Xl1(p.id);
                var V = g.zV("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                p = new LL(Wr, p, rNP(), V);
                p.connect(C, dM0());
                p.subscribe("beforeDisconnect", function(N) {
                    T3("yt-remote-before-disconnect", N)
                });
                p.subscribe("beforeDispose", function() {
                    Nu() && (Nu(), VFr(null))
                });
                p.subscribe("browserChannelAuthError", function() {
                    var N = Vp();
                    N && N.idType == "shortLived" && (Oq() ? Uq().handleBrowserChannelAuthError() : ZP("refreshLoungeToken called before API ready."))
                });
                VFr(p)
            }
        },
        Byf = function() {
            var p = jc();
            p ? (Gs("Resume connection to: " + sx(p)), da(p, 0)) : (tZ(), MVG(), Gs("Skipping connecting because no session screen found."))
        },
        Wev = function() {
            var p = rNP();
            if (g.k5(p)) {
                p = lC();
                var C = g.zW("yt-remote-session-name") || "",
                    V = g.zW("yt-remote-session-app") || "";
                p = {
                    device: "REMOTE_CONTROL",
                    id: p,
                    name: C,
                    app: V,
                    mdxVersion: 3
                };
                p.authuser = String(g.pO("SESSION_INDEX", "0"));
                (C = g.pO("DELEGATED_SESSION_ID")) && (p.pageId = String(C));
                g.YH("yt.mdx.remote.channelParams_", p)
            }
        },
        rNP = function() {
            return g.zV("yt.mdx.remote.channelParams_") || {}
        },
        sh5 = function(p, C, V) {
            g.Y.call(this);
            var N = this;
            this.module = p;
            this.N = C;
            this.Ac = V;
            this.events = new g.Rr(this);
            this.S = !1;
            this.W = new g.cj(64);
            this.T = new g.N8(this.IG, 500, this);
            this.C = new g.N8(this.rS, 1E3, this);
            this.D = new mF(this.EB$, 0, this);
            this.V = {};
            this.J = new g.N8(this.nY, 1E3, this);
            this.Y = new vt(this.seekTo, 1E3, this);
            this.Z = this.events.U(this.N, "onVolumeChange", function(H) {
                i1f(N, H)
            });
            g.R(this, this.events);
            this.events.U(C, "onCaptionsTrackListChanged", this.b4S);
            this.events.U(C, "captionschanged", this.Gaa);
            this.events.U(C, "captionssettingschanged", this.iR);
            this.events.U(C, "videoplayerreset", this.S8);
            this.events.U(C, "mdxautoplaycancel", function() {
                N.Ac.oK()
            });
            C.G("enable_mdx_video_play_directly") && this.events.U(C, "videodatachange", function() {
                hIP(N.module) || hS(N) || am(N, 0)
            });
            p = this.Ac;
            p.fS();
            p.subscribe("proxyStateChange", this.PQ, this);
            p.subscribe("remotePlayerChange", this.Nf, this);
            p.subscribe("remoteQueueChange", this.S8, this);
            p.subscribe("previousNextChange", this.eF, this);
            p.subscribe("nowAutoplaying", this.LL, this);
            p.subscribe("autoplayDismissed", this.nL, this);
            g.R(this, this.T);
            g.R(this, this.C);
            g.R(this, this.D);
            g.R(this, this.J);
            g.R(this, this.Y);
            this.iR();
            this.S8();
            this.Nf()
        },
        i1f = function(p, C) {
            if (hS(p)) {
                p.Ac.unsubscribe("remotePlayerChange", p.Nf, p);
                var V = Math.round(C.volume);
                C = !!C.muted;
                var N = Ys(p.Ac);
                if (V !== N.volume || C !== N.muted) p.Ac.setVolume(V, C), p.J.start();
                p.Ac.subscribe("remotePlayerChange", p.Nf, p)
            }
        },
        a9Y = function(p) {
            p.m6(0);
            p.T.stop();
            p.aN(new g.cj(64))
        },
        EJE = function(p, C) {
            if (hS(p) && !p.S) {
                var V = null;
                C && (V = {
                    style: p.N.getSubtitlesUserSettings()
                }, Object.assign(V, C));
                p.Ac.Nv(p.N.getVideoData(1).videoId, V);
                p.V = Ys(p.Ac).trackData
            }
        },
        am = function(p, C) {
            var V = p.N.getPlaylist();
            if (V == null ? 0 : V.listId) {
                var N = V.index;
                var H = V.listId.toString()
            }
            V = p.N.getVideoData(1);
            p.Ac.playVideo(V.videoId, C, N, H, V.playerParams, V.Sa, vQF(V));
            p.aN(new g.cj(1))
        },
        l9c = function(p, C) {
            if (C) {
                var V = p.N.getOption("captions", "tracklist", {
                    Ue: 1
                });
                V && V.length ? (p.N.setOption("captions", "track", C), p.S = !1) : (p.N.loadModule("captions"), p.S = !0)
            } else p.N.setOption("captions", "track", {})
        },
        hS = function(p) {
            return Ys(p.Ac).videoId === p.N.getVideoData(1).videoId
        },
        Ew = function() {
            g.L.call(this, {
                L: "div",
                B: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                j: [{
                    L: "div",
                    B: "ytp-mdx-popup-dialog-inner-content",
                    j: [{
                        L: "div",
                        B: "ytp-mdx-popup-title",
                        Ak: "You're signed out"
                    }, {
                        L: "div",
                        B: "ytp-mdx-popup-description",
                        Ak: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        L: "div",
                        B: "ytp-mdx-privacy-popup-buttons",
                        j: [{
                            L: "button",
                            i_: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            Ak: "Cancel"
                        }, {
                            L: "button",
                            i_: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            Ak: "Confirm"
                        }]
                    }]
                }]
            });
            this.T = new g.a0(this, 250);
            this.cancelButton = this.rV("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.rV("ytp-mdx-privacy-popup-confirm");
            g.R(this, this.T);
            this.U(this.cancelButton, "click", this.C);
            this.U(this.confirmButton, "click", this.V)
        },
        lE = function(p) {
            g.L.call(this, {
                L: "div",
                B: "ytp-remote",
                j: [{
                    L: "div",
                    B: "ytp-remote-display-status",
                    j: [{
                        L: "div",
                        B: "ytp-remote-display-status-icon",
                        j: [g.Jm9()]
                    }, {
                        L: "div",
                        B: "ytp-remote-display-status-text",
                        Ak: "{{statustext}}"
                    }]
                }]
            });
            this.api = p;
            this.T = new g.a0(this, 250);
            g.R(this, this.T);
            this.U(p, "presentingplayerstatechange", this.onStateChange);
            this.UZ(p.getPlayerStateObject())
        },
        tS = function(p, C) {
            g.jv.call(this, "Play on", 1, p, C);
            this.N = p;
            this.AV = {};
            this.U(p, "onMdxReceiversChange", this.S);
            this.U(p, "presentingplayerstatechange", this.S);
            this.S()
        },
        tFP = function(p) {
            g.IT.call(this, p);
            this.k$ = {
                key: L2E(),
                name: "This computer"
            };
            this.Oh = null;
            this.subscriptions = [];
            this.GF = this.Ac = null;
            this.AV = [this.k$];
            this.QA = this.k$;
            this.g7 = new g.cj(64);
            this.Vg = 0;
            this.JU = -1;
            this.J_ = !1;
            this.OG = this.vC = null;
            if (!g.yj(this.player.K()) && !g.gk(this.player.K())) {
                p = this.player;
                var C = g.Zg(p);
                C && (C = C.TA()) && (C = new tS(p, C), g.R(this, C));
                C = new lE(p);
                g.R(this, C);
                g.LT(p, C.element, 4);
                this.vC = new Ew;
                g.R(this, this.vC);
                g.LT(p, this.vC.element, 4);
                this.J_ = !!jc()
            }
        },
        cA = function(p) {
            p.OG && (p.player.removeEventListener("presentingplayerstatechange",
                p.OG), p.OG = null)
        },
        c3G = function(p, C, V) {
            p.g7 = V;
            p.player.publish("presentingplayerstatechange", new g.Kt(V, C))
        },
        TZ = function(p, C) {
            if (C.key !== p.QA.key)
                if (C.key === p.k$.key) XT();
                else if (hIP(p) && T$p(p), p.QA = C, !p.player.K().G("disable_mdx_connection_in_mdx_module_for_music_web") || !g.gk(p.player.K())) {
                var V = p.player.getPlaylistId();
                var N = p.player.getVideoData(1);
                var H = N.videoId;
                if (!V && !H || (p.player.getAppState() === 2 || p.player.getAppState() === 1) && p.player.K().G("should_clear_video_data_on_player_cued_unstarted")) N = null;
                else {
                    var X = p.player.getPlaylist();
                    if (X) {
                        var d = [];
                        for (var a = 0; a < X.getLength(); a++) d[a] = g.OC(X, a).videoId
                    } else d = [H];
                    X = p.player.getCurrentTime(1);
                    p = {
                        videoIds: d,
                        listId: V,
                        videoId: H,
                        playerParams: N.playerParams,
                        clickTrackingParams: N.Sa,
                        index: Math.max(p.player.getPlaylistIndex(), 0),
                        currentTime: X === 0 ? void 0 : X
                    };
                    (N = vQF(N)) && (p.locationInfo = N);
                    N = p
                }
                Gs("Connecting to: " + g.zD(C));
                C.key == "cast-selector-receiver" ? (CQ(N || null), C = N || null, Oq() ? Uq().setLaunchParams(C) : ZP("setLaunchParams called before ready.")) : !N && N$1() && Br() == C.key ? T3("yt-remote-connection-change", !0) : (XT(), CQ(N || null), N = rD().Te(), (C = ay(N, C.key)) && da(C, 1))
            }
        },
        hIP = function(p) {
            var C = p.player.K();
            return !C.G("mdx_enable_privacy_disclosure_ui") || p.isLoggedIn() || p.J_ || !p.vC ? !1 : g.wG(C) || g.LI(C)
        },
        T$p = function(p) {
            p.player.getPlayerStateObject().isPlaying() ? p.player.pauseVideo() : (p.OG = function(C) {
                !p.J_ && g.u$(C, 8) && (p.player.pauseVideo(), cA(p))
            }, p.player.addEventListener("presentingplayerstatechange", p.OG));
            p.vC && p.vC.er();
            Nu() || (iE = !0)
        };
    Odv.prototype.T = function(p) {
        this.C.tW("/client_streamz/youtube/living_room/mdx/channel/opened", p)
    };
    ypp.prototype.T = function(p) {
        this.C.tW("/client_streamz/youtube/living_room/mdx/channel/closed", p)
    };
    qg1.prototype.T = function(p) {
        this.C.tW("/client_streamz/youtube/living_room/mdx/channel/message_received", p)
    };
    IDG.prototype.T = function(p) {
        this.C.tW("/client_streamz/youtube/living_room/mdx/channel/error", p)
    };
    bd8.prototype.T = function() {
        this.C.tW("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    };
    Ap8.prototype.T = function() {
        this.C.tW("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    };
    g.h = Ht.prototype;
    g.h.k5 = function() {
        XZ(this);
        for (var p = [], C = 0; C < this.T.length; C++) p.push(this.C[this.T[C]]);
        return p
    };
    g.h.Ei = function() {
        XZ(this);
        return this.T.concat()
    };
    g.h.has = function(p) {
        return NC(this.C, p)
    };
    g.h.sE = function(p, C) {
        if (this === p) return !0;
        if (this.size != p.size) return !1;
        C = C || kHY;
        XZ(this);
        for (var V, N = 0; V = this.T[N]; N++)
            if (!C(this.get(V), p.get(V))) return !1;
        return !0
    };
    g.h.isEmpty = function() {
        return this.size == 0
    };
    g.h.clear = function() {
        this.C = {};
        this.Bm = this.size = this.T.length = 0
    };
    g.h.remove = function(p) {
        return this.delete(p)
    };
    g.h.delete = function(p) {
        return NC(this.C, p) ? (delete this.C[p], --this.size, this.Bm++, this.T.length > 2 * this.size && XZ(this), !0) : !1
    };
    g.h.get = function(p, C) {
        return NC(this.C, p) ? this.C[p] : C
    };
    g.h.set = function(p, C) {
        NC(this.C, p) || (this.size += 1, this.T.push(p), this.Bm++);
        this.C[p] = C
    };
    g.h.forEach = function(p, C) {
        for (var V = this.Ei(), N = 0; N < V.length; N++) {
            var H = V[N],
                X = this.get(H);
            p.call(C, X, H, this)
        }
    };
    g.h.clone = function() {
        return new Ht(this)
    };
    g.h.keys = function() {
        return g.ZJ(this.lT(!0)).T()
    };
    g.h.values = function() {
        return g.ZJ(this.lT(!1)).T()
    };
    g.h.entries = function() {
        var p = this;
        return oQ2(this.keys(), function(C) {
            return [C, p.get(C)]
        })
    };
    g.h.lT = function(p) {
        XZ(this);
        var C = 0,
            V = this.Bm,
            N = this,
            H = new g.lf;
        H.next = function() {
            if (V != N.Bm) throw Error("The map has changed since the iterator was created");
            if (C >= N.T.length) return g.EU;
            var X = N.T[C++];
            return g.tT(p ? X : N.C[X])
        };
        return H
    };
    var Riy = {
            hjS: "atp",
            qhx: "ska",
            mBa: "que",
            Pf_: "mus",
            XIr: "sus",
            CM_: "dsp",
            Yho: "seq",
            fr$: "mic",
            ixV: "dpa",
            D5a: "cds",
            H$$: "mlm",
            vNS: "dsdtr",
            K8Y: "ntb",
            tS_: "vsp",
            Yu$: "scn",
            zOY: "rpe",
            EN_: "dcn",
            ugn: "dcp",
            Z$k: "pas",
            m3Y: "drq",
            Qze: "opf",
            Ryk: "els",
            P0S: "isg",
            KY_: "svq",
            pB_: "mvp",
            Dnn: "ads"
        },
        nQ1 = {
            DOo: "u",
            w6S: "cl",
            MHr: "k",
            Ll_: "i",
            nN_: "cr",
            R4o: "m",
            jxx: "g",
            P3: "up"
        };
    di.prototype.sE = function(p) {
        return p ? this.id == p.id : !1
    };
    var GH0 = "",
        ct = null;
    dUY.prototype.flush = function(p, C) {
        p = p === void 0 ? [] : p;
        C = C === void 0 ? !1 : C;
        if (g.Zr("enable_client_streamz_web")) {
            p = g.F(p);
            for (var V = p.next(); !V.done; V = p.next()) V = g.JcV(V.value), V = {
                serializedIncrementBatch: g.mq(V.T())
            }, g.t1("streamzIncremented", V, {
                sendIsolatedPayload: C
            })
        }
    };
    var MC, cw5 = hr2("loadCastFramework") || hr2("loadCastApplicationFramework"),
        Jwc = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.r1(mF, g.Y);
    g.h = mF.prototype;
    g.h.pH = function(p) {
        this.S = arguments;
        this.T = !1;
        this.Pa ? this.V = g.QL() + this.Kx : this.Pa = g.bm(this.W, this.Kx)
    };
    g.h.stop = function() {
        this.Pa && (g.xH.clearTimeout(this.Pa), this.Pa = null);
        this.V = null;
        this.T = !1;
        this.S = []
    };
    g.h.pause = function() {
        ++this.C
    };
    g.h.resume = function() {
        this.C && (--this.C, !this.C && this.T && (this.T = !1, this.Y.apply(null, this.S)))
    };
    g.h.CS = function() {
        this.stop();
        mF.oI.CS.call(this)
    };
    g.h.P7 = function() {
        this.Pa && (g.xH.clearTimeout(this.Pa), this.Pa = null);
        this.V ? (this.Pa = g.bm(this.W, this.V - g.QL()), this.V = null) : this.C ? this.T = !0 : (this.T = !1, this.Y.apply(null, this.S))
    };
    g.m(vt, g.Y);
    g.h = vt.prototype;
    g.h.zX = function(p) {
        this.V = arguments;
        this.Pa || this.C ? this.T = !0 : vDv(this)
    };
    g.h.stop = function() {
        this.Pa && (g.xH.clearTimeout(this.Pa), this.Pa = null, this.T = !1, this.V = null)
    };
    g.h.pause = function() {
        this.C++
    };
    g.h.resume = function() {
        this.C--;
        this.C || !this.T || this.Pa || (this.T = !1, vDv(this))
    };
    g.h.CS = function() {
        g.Y.prototype.CS.call(this);
        this.stop()
    };
    FZ.prototype.stringify = function(p) {
        return g.xH.JSON.stringify(p, void 0)
    };
    FZ.prototype.parse = function(p) {
        return g.xH.JSON.parse(p, void 0)
    };
    g.r1(F11, g.$q);
    g.r1(Sk0, g.$q);
    var K1y = null;
    g.r1(u50, g.$q);
    g.r1(ZOv, g.$q);
    g.r1(UUp, g.$q);
    uC.prototype.debug = function() {};
    uC.prototype.info = function() {};
    uC.prototype.warning = function() {};
    var oDp = {},
        Awy = {};
    g.h = ZG.prototype;
    g.h.setTimeout = function(p) {
        this.Qn = p
    };
    g.h.YO = function(p) {
        p = p.target;
        var C = this.R$;
        C && g.Xr(p) == 3 ? C.zX() : this.yE(p)
    };
    g.h.yE = function(p) {
        try {
            if (p == this.T) a: {
                var C = g.Xr(this.T),
                    V = this.T.C,
                    N = this.T.getStatus();
                if (!(C < 3) && (C != 3 || this.T && (this.C.C || g.i3(this.T) || g.h$(this.T)))) {
                    this.Wr || C != 4 || V == 7 || (V == 8 || N <= 0 ? SA(3) : SA(2));
                    Ykr(this);
                    var H = this.T.getStatus();
                    this.Wc = H;
                    var X = bOF(this);
                    if (this.Y = H == 200) {
                        if (this.kM && !this.Y_) {
                            b: {
                                if (this.T) {
                                    var d = g.s$(this.T, "X-HTTP-Initial-Response");
                                    if (d && !g.Sy(d)) {
                                        var a = d;
                                        break b
                                    }
                                }
                                a = null
                            }
                            if (p = a) this.Y_ = !0,
                            gDP(this, p);
                            else {
                                this.Y = !1;
                                this.W = 3;
                                Kl(12);
                                fl(this);
                                Ox(this);
                                break a
                            }
                        }
                        if (this.Sa) {
                            p = !0;
                            for (var E; !this.Wr && this.D < X.length;)
                                if (E = kQ1(this, X), E == Awy) {
                                    C == 4 && (this.W = 4, Kl(14), p = !1);
                                    break
                                } else if (E == oDp) {
                                this.W = 4;
                                Kl(15);
                                p = !1;
                                break
                            } else gDP(this, E);
                            Irp(this) && this.D != 0 && (this.C.T = this.C.T.slice(this.D), this.D = 0);
                            C != 4 || X.length != 0 || this.C.C || (this.W = 1, Kl(16), p = !1);
                            this.Y = this.Y && p;
                            p ? X.length > 0 && !this.ER && (this.ER = !0, this.V.NI(this)) : (fl(this), Ox(this))
                        } else gDP(this, X);
                        C == 4 && fl(this);
                        this.Y && !this.Wr && (C == 4 ? zrG(this.V, this) : (this.Y = !1, Ux(this)))
                    } else g.RJu(this.T), H == 400 && X.indexOf("Unknown SID") >
                        0 ? (this.W = 3, Kl(12)) : (this.W = 0, Kl(13)), fl(this), Ox(this)
                }
            }
        } catch (l) {} finally {}
    };
    g.h.cancel = function() {
        this.Wr = !0;
        fl(this)
    };
    g.h.RS = function() {
        this.a$ = null;
        var p = Date.now();
        p - this.qo >= 0 ? (this.Ga != 2 && (SA(3), Kl(17)), fl(this), this.W = 2, Ox(this)) : xU8(this, this.qo - p)
    };
    g.h.getLastError = function() {
        return this.W
    };
    g.h.Yw = function() {
        return this.T
    };
    QKP.prototype.cancel = function() {
        this.V = Bm8(this);
        if (this.C) this.C.cancel(), this.C = null;
        else if (this.T && this.T.size !== 0) {
            for (var p = g.F(this.T.values()), C = p.next(); !C.done; C = p.next()) C.value.cancel();
            this.T.clear()
        }
    };
    g.h = Vzr.prototype;
    g.h.T$ = 8;
    g.h.P6 = 1;
    g.h.connect = function(p, C, V, N) {
        Kl(0);
        this.YM = p;
        this.Wr = C || {};
        V && N !== void 0 && (this.Wr.OSID = V, this.Wr.OAID = N);
        this.Y_ = this.Q$;
        this.vr = wdv(this, null, this.YM);
        bC(this)
    };
    g.h.disconnect = function() {
        HKf(this);
        if (this.P6 == 3) {
            var p = this.UY++,
                C = this.vr.clone();
            g.yh(C, "SID", this.S);
            g.yh(C, "RID", p);
            g.yh(C, "TYPE", "terminate");
            kh(this, C);
            p = new ZG(this, this.S, p);
            p.Ga = 2;
            p.J = pl(C.clone());
            C = !1;
            if (g.xH.navigator && g.xH.navigator.sendBeacon) try {
                C = g.xH.navigator.sendBeacon(p.J.toString(), "")
            } catch (V) {}!C && g.xH.Image && ((new Image).src = p.J, C = !0);
            C || (p.T = qkY(p.V, null), p.T.send(p.J));
            p.sY = Date.now();
            Ux(p)
        }
        a31(this)
    };
    g.h.gI = function() {
        return this.P6 == 0
    };
    g.h.getState = function() {
        return this.P6
    };
    g.h.aU = function(p) {
        if (this.Y)
            if (this.Y = null, this.P6 == 1) {
                if (!p) {
                    this.UY = Math.floor(Math.random() * 1E5);
                    p = this.UY++;
                    var C = new ZG(this, "", p),
                        V = this.Z;
                    this.Wc && (V ? (V = g.zh(V), g.nG(V, this.Wc)) : V = this.Wc);
                    this.D !== null || this.qo || (C.vr = V, V = null);
                    var N;
                    if (this.X$) a: {
                        for (var H = N = 0; H < this.V.length; H++) {
                            b: {
                                var X = this.V[H];
                                if ("__data__" in X.map && (X = X.map.__data__, typeof X === "string")) {
                                    X = X.length;
                                    break b
                                }
                                X = void 0
                            }
                            if (X === void 0) break;N += X;
                            if (N > 4096) {
                                N = H;
                                break a
                            }
                            if (N === 4096 || H === this.V.length - 1) {
                                N = H + 1;
                                break a
                            }
                        }
                        N =
                        1E3
                    }
                    else N = 1E3;
                    N = iKy(this, C, N);
                    H = this.vr.clone();
                    g.yh(H, "RID", p);
                    g.yh(H, "CVER", 22);
                    this.Sa && g.yh(H, "X-HTTP-Session-Id", this.Sa);
                    kh(this, H);
                    V && (this.qo ? N = "headers=" + g.N$(g.L99(V)) + "&" + N : this.D && g.AE(H, this.D, V));
                    P1P(this.C, C);
                    this.d6 && g.yh(H, "TYPE", "init");
                    this.X$ ? (g.yh(H, "$req", N), g.yh(H, "SID", "null"), C.kM = !0, ywr(C, H, null)) : ywr(C, H, N);
                    this.P6 = 2
                }
            } else this.P6 == 3 && (p ? h8E(this, p) : this.V.length == 0 || rwF(this.C) || h8E(this))
    };
    g.h.kL = function() {
        this.J = null;
        s_2(this);
        if (this.wy && !(this.Qn || this.T == null || this.VZ <= 0)) {
            var p = 2 * this.VZ;
            this.Vn = DG((0, g.LY)(this.NVe, this), p)
        }
    };
    g.h.NVe = function() {
        this.Vn && (this.Vn = null, this.Y_ = !1, this.Qn = !0, Kl(10), qC(this), s_2(this))
    };
    g.h.NI = function(p) {
        this.T == p && this.wy && !this.Qn && (N85(this), this.Qn = !0, Kl(11))
    };
    g.h.Df = function() {
        this.a$ != null && (this.a$ = null, qC(this), nD8(this), Kl(19))
    };
    g.h.jIn = function(p) {
        p ? Kl(2) : Kl(1)
    };
    g.h.isActive = function() {
        return !!this.W && this.W.isActive(this)
    };
    g.h = l32.prototype;
    g.h.Ae = function() {};
    g.h.Cm = function() {};
    g.h.nm = function() {};
    g.h.bZ = function() {};
    g.h.isActive = function() {
        return !0
    };
    g.h.B7 = function() {};
    g.r1(Yh, g.h8);
    Yh.prototype.open = function() {
        this.T.W = this.V;
        this.Y && (this.T.Ga = !0);
        this.T.connect(this.W, this.C || void 0)
    };
    Yh.prototype.close = function() {
        this.T.disconnect()
    };
    Yh.prototype.send = function(p) {
        var C = this.T;
        if (typeof p === "string") {
            var V = {};
            V.__data__ = p;
            p = V
        } else this.S && (V = {}, V.__data__ = g.zD(p), p = V);
        C.V.push(new W1f(C.hE++, p));
        C.P6 == 3 && bC(C)
    };
    Yh.prototype.CS = function() {
        this.T.W = null;
        delete this.V;
        this.T.disconnect();
        delete this.T;
        Yh.oI.CS.call(this)
    };
    g.r1(cmp, F11);
    g.r1(T8G, Sk0);
    g.r1(xh, l32);
    xh.prototype.Ae = function() {
        this.T.dispatchEvent("m")
    };
    xh.prototype.Cm = function(p) {
        this.T.dispatchEvent(new cmp(p))
    };
    xh.prototype.nm = function(p) {
        this.T.dispatchEvent(new T8G(p))
    };
    xh.prototype.bZ = function() {
        this.T.dispatchEvent("n")
    };
    var Ry = new g.h8;
    g.m(m58, g.$q);
    g.h = eA.prototype;
    g.h.wW = null;
    g.h.h2 = !1;
    g.h.HA = null;
    g.h.WZ = null;
    g.h.Yy = null;
    g.h.Lh = null;
    g.h.pn = null;
    g.h.WX = null;
    g.h.dW = null;
    g.h.M3 = null;
    g.h.Gn = 0;
    g.h.Kc = null;
    g.h.NF = null;
    g.h.oA = null;
    g.h.Rp = -1;
    g.h.lw = !0;
    g.h.Px = !1;
    g.h.fK = 0;
    g.h.fh = null;
    var uWY = {},
        D5y = {};
    g.h = eA.prototype;
    g.h.setTimeout = function(p) {
        this.C = p
    };
    g.h.UF = function(p) {
        p = p.target;
        var C = this.fh;
        C && g.Xr(p) == 3 ? C.zX() : this.xL(p)
    };
    g.h.xL = function(p) {
        try {
            if (p == this.M3) a: {
                var C = g.Xr(this.M3),
                    V = this.M3.C,
                    N = this.M3.getStatus();
                if (g.Nq && !g.JB("420+")) {
                    if (C < 4) break a
                } else if (C < 3 || C == 3 && !g.i3(this.M3)) break a;this.Px || C != 4 || V == 7 || (V == 8 || N <= 0 ? this.T.t6(3) : this.T.t6(2));f31(this);
                var H = this.M3.getStatus();this.Rp = H;
                var X = g.i3(this.M3);
                if (this.h2 = H == 200) {
                    C == 4 && Pt(this);
                    if (this.Sa) {
                        for (p = !0; !this.Px && this.Gn < X.length;) {
                            var d = ZK5(this, X);
                            if (d == D5y) {
                                C == 4 && (this.oA = 4, nl(15), p = !1);
                                break
                            } else if (d == uWY) {
                                this.oA = 4;
                                nl(16);
                                p = !1;
                                break
                            } else ymc(this,
                                d)
                        }
                        C == 4 && X.length == 0 && (this.oA = 1, nl(17), p = !1);
                        this.h2 = this.h2 && p;
                        p || (Pt(this), OK0(this))
                    } else ymc(this, X);
                    this.h2 && !this.Px && (C == 4 ? this.T.GX(this) : (this.h2 = !1, K_2(this)))
                } else H == 400 && X.indexOf("Unknown SID") > 0 ? (this.oA = 3, nl(13)) : (this.oA = 0, nl(14)),
                Pt(this),
                OK0(this)
            }
        } catch (a) {} finally {}
    };
    g.h.cancel = function() {
        this.Px = !0;
        Pt(this)
    };
    g.h.tD = function() {
        this.HA = null;
        var p = Date.now();
        p - this.WZ >= 0 ? (this.Lh != 2 && this.T.t6(3), Pt(this), this.oA = 2, nl(18), OK0(this)) : U55(this, this.WZ - p)
    };
    g.h.getLastError = function() {
        return this.oA
    };
    g.h = bK5.prototype;
    g.h.NL = null;
    g.h.QV = null;
    g.h.oR = !1;
    g.h.eR = null;
    g.h.HI = null;
    g.h.XC = -1;
    g.h.hM = null;
    g.h.Fs = null;
    g.h.connect = function(p) {
        this.eR = p;
        p = $h(this.T, null, this.eR);
        nl(3);
        Date.now();
        var C = this.T.Z;
        C != null ? (this.hM = C[0], (this.Fs = C[1]) ? (this.HI = 1, Am0(this)) : (this.HI = 2, ol1(this))) : (Cl(p, "MODE", "init"), this.QV = new eA(this), this.QV.wW = this.NL, SB2(this.QV, p, !1, null, !0), this.HI = 0)
    };
    g.h.aZ = function(p) {
        if (p) this.HI = 2, ol1(this);
        else {
            nl(4);
            var C = this.T;
            C.xQ = C.O_.XC;
            Qd(C, 9)
        }
        p && this.t6(2)
    };
    g.h.LK = function(p) {
        return this.T.LK(p)
    };
    g.h.abort = function() {
        this.QV && (this.QV.cancel(), this.QV = null);
        this.XC = -1
    };
    g.h.gI = function() {
        return !1
    };
    g.h.s4 = function(p, C) {
        this.XC = p.Rp;
        if (this.HI == 0)
            if (C) {
                try {
                    var V = this.C.parse(C)
                } catch (N) {
                    p = this.T;
                    p.xQ = this.XC;
                    Qd(p, 2);
                    return
                }
                this.hM = V[0];
                this.Fs = V[1]
            } else p = this.T, p.xQ = this.XC, Qd(p, 2);
        else this.HI == 2 && (this.oR ? (nl(7), Date.now()) : C == "11111" ? (nl(6), this.oR = !0, Date.now(), this.XC = 200, this.QV.cancel(), nl(12), Ll(this.T, this, !0)) : (nl(8), Date.now(), this.oR = !1))
    };
    g.h.GX = function() {
        this.XC = this.QV.Rp;
        if (this.QV.h2) this.HI == 0 ? this.Fs ? (this.HI = 1, Am0(this)) : (this.HI = 2, ol1(this)) : this.HI == 2 && (this.oR ? (nl(12), Ll(this.T, this, !0)) : (nl(11), Ll(this.T, this, !1)));
        else {
            this.HI == 0 ? nl(9) : this.HI == 2 && nl(10);
            var p = this.T;
            this.QV.getLastError();
            p.xQ = this.XC;
            Qd(p, 2)
        }
    };
    g.h.Da = function() {
        return this.T.Da()
    };
    g.h.isActive = function() {
        return this.T.isActive()
    };
    g.h.t6 = function(p) {
        this.T.t6(p)
    };
    g.h = kWv.prototype;
    g.h.A8 = null;
    g.h.Bx = null;
    g.h.n$ = null;
    g.h.dI = null;
    g.h.pK = null;
    g.h.HX = null;
    g.h.IU = null;
    g.h.HZ = null;
    g.h.Uo = 0;
    g.h.ll = 0;
    g.h.W$ = null;
    g.h.ez = null;
    g.h.FC = null;
    g.h.X6 = null;
    g.h.O_ = null;
    g.h.F7 = null;
    g.h.Rk = -1;
    g.h.VE = -1;
    g.h.xQ = -1;
    g.h.PA = 0;
    g.h.pW = 0;
    g.h.jY = 8;
    g.r1(YBc, g.$q);
    g.r1(z82, g.$q);
    g.h = kWv.prototype;
    g.h.connect = function(p, C, V, N, H) {
        nl(0);
        this.pK = C;
        this.Bx = V || {};
        N && H !== void 0 && (this.Bx.OSID = N, this.Bx.OAID = H);
        this.J ? (z3((0, g.LY)(this.Hl, this, p), 100), nlv(this)) : this.Hl(p)
    };
    g.h.disconnect = function() {
        e81(this);
        if (this.T == 3) {
            var p = this.Uo++,
                C = this.HX.clone();
            g.yh(C, "SID", this.S);
            g.yh(C, "RID", p);
            g.yh(C, "TYPE", "terminate");
            Wt(this, C);
            p = new eA(this, this.S, p);
            p.Lh = 2;
            p.pn = pl(C.clone());
            (new Image).src = p.pn.toString();
            p.Yy = Date.now();
            K_2(p)
        }
        GWp(this)
    };
    g.h.Hl = function(p) {
        this.O_ = new bK5(this);
        this.O_.NL = this.A8;
        this.O_.C = this.W;
        this.O_.connect(p)
    };
    g.h.gI = function() {
        return this.T == 0
    };
    g.h.getState = function() {
        return this.T
    };
    g.h.E4 = function(p) {
        this.ez = null;
        glG(this, p)
    };
    g.h.S0 = function() {
        this.FC = null;
        this.dI = new eA(this, this.S, "rpc", this.D);
        this.dI.wW = this.A8;
        this.dI.fK = 0;
        var p = this.IU.clone();
        g.yh(p, "RID", "rpc");
        g.yh(p, "SID", this.S);
        g.yh(p, "CI", this.F7 ? "0" : "1");
        g.yh(p, "AID", this.Rk);
        Wt(this, p);
        g.yh(p, "TYPE", "xmlhttp");
        SB2(this.dI, p, !0, this.HZ, !1)
    };
    g.h.s4 = function(p, C) {
        if (this.T != 0 && (this.dI == p || this.n$ == p))
            if (this.xQ = p.Rp, this.n$ == p && this.T == 3)
                if (this.jY > 7) {
                    try {
                        var V = this.W.parse(C)
                    } catch (N) {
                        V = null
                    }
                    if (Array.isArray(V) && V.length == 3)
                        if (p = V, p[0] == 0) a: {
                            if (!this.FC) {
                                if (this.dI)
                                    if (this.dI.Yy + 3E3 < this.n$.Yy) gi(this), this.dI.cancel(), this.dI = null;
                                    else break a;
                                rmE(this);
                                nl(19)
                            }
                        }
                    else this.VE = p[1], 0 < this.VE - this.Rk && p[2] < 37500 && this.F7 && this.pW == 0 && !this.X6 && (this.X6 = z3((0, g.LY)(this.gL, this), 6E3));
                    else Qd(this, 11)
                } else C != null && Qd(this, 11);
        else if (this.dI ==
            p && gi(this), !g.Sy(C))
            for (p = this.W.parse(C), C = 0; C < p.length; C++) V = p[C], this.Rk = V[0], V = V[1], this.T == 2 ? V[0] == "c" ? (this.S = V[1], this.HZ = V[2], V = V[3], V != null ? this.jY = V : this.jY = 6, this.T = 3, this.W$ && this.W$.vH(), this.IU = $h(this, this.Da() ? this.HZ : null, this.pK), W_F(this)) : V[0] == "stop" && Qd(this, 7) : this.T == 3 && (V[0] == "stop" ? Qd(this, 7) : V[0] != "noop" && this.W$ && this.W$.mW(V), this.pW = 0)
    };
    g.h.gL = function() {
        this.X6 != null && (this.X6 = null, this.dI.cancel(), this.dI = null, rmE(this), nl(20))
    };
    g.h.GX = function(p) {
        if (this.dI == p) {
            gi(this);
            this.dI = null;
            var C = 2
        } else if (this.n$ == p) this.n$ = null, C = 1;
        else return;
        this.xQ = p.Rp;
        if (this.T != 0)
            if (p.h2)
                if (C == 1) {
                    C = p.dW ? p.dW.length : 0;
                    p = Date.now() - p.Yy;
                    var V = Ry;
                    V.dispatchEvent(new YBc(V, C, p, this.PA));
                    R8F(this);
                    this.V.length = 0
                } else W_F(this);
        else {
            V = p.getLastError();
            var N;
            if (!(N = V == 3 || V == 7 || V == 0 && this.xQ > 0)) {
                if (N = C == 1) this.n$ || this.ez || this.T == 1 || this.PA >= 2 ? N = !1 : (this.ez = z3((0, g.LY)(this.E4, this, p), Q_v(this, this.PA)), this.PA++, N = !0);
                N = !(N || C == 2 && rmE(this))
            }
            if (N) switch (V) {
                case 1:
                    Qd(this,
                        5);
                    break;
                case 4:
                    Qd(this, 10);
                    break;
                case 3:
                    Qd(this, 6);
                    break;
                case 7:
                    Qd(this, 12);
                    break;
                default:
                    Qd(this, 2)
            }
        }
    };
    g.h.KH = function(p) {
        if (!g.W5(arguments, this.T)) throw Error("Unexpected channel state: " + this.T);
    };
    g.h.dgY = function(p) {
        p ? nl(2) : (nl(1), B8c(this, 8))
    };
    g.h.LK = function(p) {
        if (p) throw Error("Can't create secondary domain capable XhrIo object.");
        p = new g.VO;
        p.D = !1;
        return p
    };
    g.h.isActive = function() {
        return !!this.W$ && this.W$.isActive(this)
    };
    g.h.t6 = function(p) {
        var C = Ry;
        C.dispatchEvent(new z82(C, p))
    };
    g.h.Da = function() {
        return !1
    };
    g.h = pWE.prototype;
    g.h.vH = function() {};
    g.h.mW = function() {};
    g.h.uZ = function() {};
    g.h.PZ = function() {};
    g.h.z$ = function() {
        return {}
    };
    g.h.isActive = function() {
        return !0
    };
    g.h = CNP.prototype;
    g.h.enqueue = function(p) {
        this.C.push(p)
    };
    g.h.isEmpty = function() {
        return this.T.length === 0 && this.C.length === 0
    };
    g.h.clear = function() {
        this.T = [];
        this.C = []
    };
    g.h.contains = function(p) {
        return g.W5(this.T, p) || g.W5(this.C, p)
    };
    g.h.remove = function(p) {
        var C = this.T;
        var V = (0, g.hX1)(C, p);
        V >= 0 ? (g.Q8(C, V), C = !0) : C = !1;
        return C || g.rY(this.C, p)
    };
    g.h.k5 = function() {
        for (var p = [], C = this.T.length - 1; C >= 0; --C) p.push(this.T[C]);
        C = this.C.length;
        for (var V = 0; V < C; ++V) p.push(this.C[V]);
        return p
    };
    g.m(jpf, g.$q);
    g.m(V_2, g.$q);
    g.r1(ri, g.Y);
    g.h = ri.prototype;
    g.h.e3V = function() {
        this.Kx = Math.min(3E5, this.Kx * 2);
        this.V();
        this.C && this.start()
    };
    g.h.start = function() {
        var p = this.Kx + 15E3 * Math.random();
        g.HF(this.T, p);
        this.C = Date.now() + p
    };
    g.h.stop = function() {
        this.T.stop();
        this.C = 0
    };
    g.h.isActive = function() {
        return this.T.isActive()
    };
    g.h.reset = function() {
        this.T.stop();
        this.Kx = 5E3
    };
    g.r1(H3F, pWE);
    g.h = H3F.prototype;
    g.h.subscribe = function(p, C, V) {
        return this.V.subscribe(p, C, V)
    };
    g.h.unsubscribe = function(p, C, V) {
        return this.V.unsubscribe(p, C, V)
    };
    g.h.zW = function(p) {
        return this.V.zW(p)
    };
    g.h.publish = function(p, C) {
        return this.V.publish.apply(this.V, arguments)
    };
    g.h.dispose = function() {
        this.a$ || (this.a$ = !0, g.iP(this.V), this.disconnect(), g.iP(this.C), this.C = null, this.b_ = function() {
            return ""
        })
    };
    g.h.fS = function() {
        return this.a$
    };
    g.h.connect = function(p, C, V) {
        if (!this.T || this.T.getState() != 2) {
            this.Z = "";
            this.C.stop();
            this.Y = p || null;
            this.W = C || 0;
            p = this.sY + "/test";
            C = this.sY + "/bind";
            var N = new kWv(V ? V.firstTestResults : null, V ? V.secondTestResults : null, this.Ga),
                H = this.T;
            H && (H.W$ = null);
            N.W$ = this;
            this.T = N;
            XW8(this);
            if (this.T) {
                N = g.pO("ID_TOKEN");
                var X = this.T.A8 || {};
                N ? X["x-youtube-identity-token"] = N : delete X["x-youtube-identity-token"];
                this.T.A8 = X
            }
            H ? (H.getState() != 3 && wwr(H) == 0 || H.getState(), this.T.connect(p, C, this.D, H.S, H.Rk)) : V ? this.T.connect(p,
                C, this.D, V.sessionId, V.arrayId) : this.T.connect(p, C, this.D)
        }
    };
    g.h.disconnect = function(p) {
        this.J = p || 0;
        this.C.stop();
        XW8(this);
        this.T && (this.T.getState() == 3 && glG(this.T), this.T.disconnect());
        this.J = 0
    };
    g.h.sendMessage = function(p, C) {
        p = {
            _sc: p
        };
        C && g.nG(p, C);
        this.C.isActive() || (this.T ? this.T.getState() : 0) == 2 ? this.S.push(p) : this.EW() && (XW8(this), PO0(this.T, p))
    };
    g.h.vH = function() {
        this.C.reset();
        this.Y = null;
        this.W = 0;
        if (this.S.length) {
            var p = this.S;
            this.S = [];
            for (var C = p.length, V = 0; V < C; ++V) PO0(this.T, p[V])
        }
        this.publish("handlerOpened");
        this.vr.T("BROWSER_CHANNEL")
    };
    g.h.uZ = function(p) {
        var C = p == 2 && this.T.xQ == 401;
        p == 4 || C || this.C.start();
        this.publish("handlerError", p, C);
        this.Sa.T("BROWSER_CHANNEL")
    };
    g.h.PZ = function(p, C) {
        if (!this.C.isActive()) this.publish("handlerClosed");
        else if (C)
            for (var V = C.length, N = 0; N < V; ++N) {
                var H = C[N].map;
                H && this.S.push(H)
            }
        this.Vn.T("BROWSER_CHANNEL");
        p && this.R$.C.YV("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", p.length);
        C && this.UY.C.YV("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", C.length)
    };
    g.h.z$ = function() {
        var p = {
            v: 2
        };
        this.Z && (p.gsessionid = this.Z);
        this.W != 0 && (p.ui = "" + this.W);
        this.J != 0 && (p.ui = "" + this.J);
        this.Y && g.nG(p, this.Y);
        return p
    };
    g.h.mW = function(p) {
        p[0] == "S" ? this.Z = p[1] : p[0] == "gracefulReconnect" ? (this.C.start(), this.T.disconnect()) : this.publish("handlerMessage", new NqF(p[0], p[1]));
        this.Wr.T("BROWSER_CHANNEL")
    };
    g.h.EW = function() {
        return !!this.T && this.T.getState() == 3
    };
    g.h.b6 = function(p) {
        (this.D.loungeIdToken = p) || this.C.stop();
        if (this.Y_ && this.T) {
            var C = this.T.A8 || {};
            p ? C["X-YouTube-LoungeId-Token"] = p : delete C["X-YouTube-LoungeId-Token"];
            this.T.A8 = C
        }
    };
    g.h.getDeviceId = function() {
        return this.D.id
    };
    g.h.Vl = function() {
        return this.C.isActive() ? this.C.C - Date.now() : NaN
    };
    g.h.Ry = function() {
        var p = this.C;
        g.XV(p.T);
        p.start()
    };
    g.h.qOo = function() {
        this.C.isActive();
        wwr(this.T) == 0 && this.connect(this.Y, this.W)
    };
    Bt.prototype.sendRequest = function(p, C, V, N, H, X, d) {
        p = {
            format: X ? "RAW" : "JSON",
            method: p,
            context: this,
            timeout: 5E3,
            withCredentials: !!d,
            onSuccess: g.Wv(this.S, N, !X),
            onError: g.Wv(this.V, H),
            onTimeout: g.Wv(this.W, H)
        };
        V && (p.postParams = V, p.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.qU(C, p)
    };
    Bt.prototype.S = function(p, C, V, N) {
        C ? p(N) : p({
            text: V.responseText
        })
    };
    Bt.prototype.V = function(p, C) {
        p(Error("Request error: " + C.status))
    };
    Bt.prototype.W = function(p) {
        p(Error("request timed out"))
    };
    g.m(dp8, g.h8);
    g.h = dp8.prototype;
    g.h.connect = function(p, C, V) {
        this.qZ.connect(p, C, V)
    };
    g.h.disconnect = function(p) {
        this.qZ.disconnect(p)
    };
    g.h.Ry = function() {
        this.qZ.Ry()
    };
    g.h.getDeviceId = function() {
        return this.qZ.getDeviceId()
    };
    g.h.Vl = function() {
        return this.qZ.Vl()
    };
    g.h.EW = function() {
        return this.qZ.EW()
    };
    g.h.OF = function() {
        this.dispatchEvent("channelOpened");
        var p = this.qZ,
            C = this.T;
        g.Yl("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !p.T.F7,
            sessionId: p.T.S,
            arrayId: p.T.Rk
        });
        g.Yl("yt-remote-session-screen-id", C);
        p = Ex();
        C = lC();
        g.W5(p, C) || p.push(C);
        Bf2(p);
        pd1()
    };
    g.h.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.h.onMessage = function(p) {
        this.dispatchEvent(new jpf(p))
    };
    g.h.onError = function(p) {
        this.dispatchEvent(new V_2(p ? 1 : 0))
    };
    g.h.sendMessage = function(p, C) {
        this.qZ.sendMessage(p, C)
    };
    g.h.b6 = function(p) {
        this.qZ.b6(p)
    };
    g.h.dispose = function() {
        this.qZ.dispose()
    };
    g.h = i35.prototype;
    g.h.connect = function(p, C) {
        p = p === void 0 ? {} : p;
        C = C === void 0 ? 0 : C;
        this.Y !== 2 && (this.V.stop(), this.J = p, this.D = C, spy(this), (p = g.pO("ID_TOKEN")) ? this.S["x-youtube-identity-token"] = p : delete this.S["x-youtube-identity-token"], this.T && (this.C.device = this.T.device, this.C.name = this.T.name, this.C.app = this.T.app, this.C.id = this.T.id, this.T.dF && (this.C.mdxVersion = "" + this.T.dF), this.T.theme && (this.C.theme = this.T.theme), this.T.capabilities && (this.C.capabilities = this.T.capabilities), this.T.Ws && (this.C.cst = this.T.Ws),
            this.T.authuser && (this.C.authuser = this.T.authuser), this.T.pageId && (this.C.pageId = this.T.pageId)), this.D !== 0 ? this.C.ui = "" + this.D : delete this.C.ui, Object.assign(this.C, this.J), this.channel = new Yh(this.pathPrefix, {
            FQ: "gsessionid",
            qa: this.S,
            cU: this.C
        }), this.channel.open(), this.Y = 2, hVF(this))
    };
    g.h.disconnect = function(p) {
        this.Z = p === void 0 ? 0 : p;
        this.V.stop();
        spy(this);
        this.channel && (this.Z !== 0 ? this.C.ui = "" + this.Z : delete this.C.ui, this.channel.close());
        this.Z = 0
    };
    g.h.Vl = function() {
        return this.V.isActive() ? this.V.C - Date.now() : NaN
    };
    g.h.Ry = function() {
        var p = this.V;
        g.XV(p.T);
        p.start()
    };
    g.h.sendMessage = function(p, C) {
        this.channel && (spy(this), p = Object.assign({}, {
            _sc: p
        }, C), this.channel.send(p))
    };
    g.h.b6 = function(p) {
        p || this.V.stop();
        p ? this.S["X-YouTube-LoungeId-Token"] = p : delete this.S["X-YouTube-LoungeId-Token"]
    };
    g.h.getDeviceId = function() {
        return this.T ? this.T.id : ""
    };
    g.h.publish = function(p) {
        return this.W.publish.apply(this.W, [p].concat(g.K(g.US.apply(1, arguments))))
    };
    g.h.subscribe = function(p, C, V) {
        return this.W.subscribe(p, C, V)
    };
    g.h.unsubscribe = function(p, C, V) {
        return this.W.unsubscribe(p, C, V)
    };
    g.h.zW = function(p) {
        return this.W.zW(p)
    };
    g.h.dispose = function() {
        this.a$ || (this.a$ = !0, g.iP(this.W), this.disconnect(), g.iP(this.V), this.sY = function() {
            return ""
        })
    };
    g.h.fS = function() {
        return this.a$
    };
    g.m(a1y, g.h8);
    g.h = a1y.prototype;
    g.h.connect = function(p, C) {
        this.T.connect(p, C)
    };
    g.h.disconnect = function(p) {
        this.T.disconnect(p)
    };
    g.h.Ry = function() {
        this.T.Ry()
    };
    g.h.getDeviceId = function() {
        return this.T.getDeviceId()
    };
    g.h.Vl = function() {
        return this.T.Vl()
    };
    g.h.EW = function() {
        return this.T.Y === 3
    };
    g.h.JD = function() {
        this.dispatchEvent("channelOpened")
    };
    g.h.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.h.onMessage = function(p) {
        this.dispatchEvent(new jpf(p))
    };
    g.h.onError = function() {
        this.dispatchEvent(new V_2(this.T.zI === 401 ? 1 : 0))
    };
    g.h.sendMessage = function(p, C) {
        this.T.sendMessage(p, C)
    };
    g.h.b6 = function(p) {
        this.T.b6(p)
    };
    g.h.dispose = function() {
        this.T.dispose()
    };
    var mp8 = Date.now(),
        pL = null,
        NJ = Array(50),
        VI = -1,
        Hr = !1;
    g.r1(X4, g.ca);
    X4.prototype.Te = function() {
        return this.screens
    };
    X4.prototype.contains = function(p) {
        return !!W21(this.screens, p)
    };
    X4.prototype.get = function(p) {
        return p ? ay(this.screens, p) : null
    };
    X4.prototype.info = function(p) {
        CL(this.Y, p)
    };
    g.m(KWy, g.ca);
    g.h = KWy.prototype;
    g.h.start = function() {
        !this.T && isNaN(this.Pa) && this.CB()
    };
    g.h.stop = function() {
        this.T && (this.T.abort(), this.T = null);
        isNaN(this.Pa) || (g.KO(this.Pa), this.Pa = NaN)
    };
    g.h.CS = function() {
        this.stop();
        g.ca.prototype.CS.call(this)
    };
    g.h.CB = function() {
        this.Pa = NaN;
        this.T = g.qU(G3(this.V, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.D
            },
            timeout: 5E3,
            onSuccess: (0, g.LY)(this.wL, this),
            onError: (0, g.LY)(this.QQ, this),
            onTimeout: (0, g.LY)(this.oS, this)
        })
    };
    g.h.wL = function(p, C) {
        this.T = null;
        p = C.screen || {};
        p.dialId = this.S;
        p.name = this.Y;
        C = -1;
        this.W && p.shortLivedLoungeToken && p.shortLivedLoungeToken.value && p.shortLivedLoungeToken.refreshIntervalMs && (p.screenIdType = "shortLived", p.loungeToken = p.shortLivedLoungeToken.value, C = p.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new iC(p), C)
    };
    g.h.QQ = function(p) {
        this.T = null;
        p.status && p.status == 404 ? this.C >= MFP.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (p = MFP[this.C], this.Pa = g.F5((0, g.LY)(this.CB, this), p), this.C++) : this.publish("pairingFailed", Error("Server error " + p.status))
    };
    g.h.oS = function() {
        this.T = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var MFP = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.r1(iD, X4);
    g.h = iD.prototype;
    g.h.start = function() {
        dD(this) && this.publish("screenChange");
        !g.zW("yt-remote-lounge-token-expiration") && Dpp(this);
        g.KO(this.T);
        this.T = g.F5((0, g.LY)(this.start, this), 1E4)
    };
    g.h.add = function(p, C) {
        dD(this);
        vtF(this, p);
        hu(this, !1);
        this.publish("screenChange");
        C(p);
        p.token || Dpp(this)
    };
    g.h.remove = function(p, C) {
        var V = dD(this);
        S2p(this, p) && (hu(this, !1), V = !0);
        C(p);
        V && this.publish("screenChange")
    };
    g.h.X7 = function(p, C, V, N) {
        var H = dD(this),
            X = this.get(p.id);
        X ? (X.name != C && (X.name = C, hu(this, !1), H = !0), V(p)) : N(Error("no such local screen."));
        H && this.publish("screenChange")
    };
    g.h.CS = function() {
        g.KO(this.T);
        iD.oI.CS.call(this)
    };
    g.h.zL = function(p) {
        dD(this);
        var C = this.screens.length;
        p = p && p.screens || [];
        for (var V = p.length, N = 0; N < V; ++N) {
            var H = p[N],
                X = this.get(H.screenId);
            X && (X.token = H.loungeToken, --C)
        }
        hu(this, !C);
        C && CL(this.Y, "Missed " + C + " lounge tokens.")
    };
    g.h.vk = function(p) {
        CL(this.Y, "Requesting lounge tokens failed: " + p)
    };
    g.m(Z3f, g.ca);
    g.h = Z3f.prototype;
    g.h.start = function() {
        var p = parseInt(g.zW("yt-remote-fast-check-period") || "0", 10);
        (this.S = g.QL() - 144E5 < p ? 0 : p) ? sq(this): (this.S = g.QL() + 3E5, g.Yl("yt-remote-fast-check-period", this.S), this.QJ())
    };
    g.h.isEmpty = function() {
        return g.k5(this.T)
    };
    g.h.update = function() {
        u25("Updating availability on schedule.");
        var p = this.Y(),
            C = g.U_(this.T, function(V, N) {
                return V && !!ay(p, N)
            }, this);
        O3E(this, C)
    };
    g.h.CS = function() {
        g.KO(this.V);
        this.V = NaN;
        this.C && (this.C.abort(), this.C = null);
        g.ca.prototype.CS.call(this)
    };
    g.h.QJ = function() {
        g.KO(this.V);
        this.V = NaN;
        this.C && this.C.abort();
        var p = y1G(this);
        if (Sg2(p)) {
            var C = G3(this.W, "/pairing/get_screen_availability");
            this.C = this.W.sendRequest("POST", C, {
                lounge_token: g.Ia(p).join(",")
            }, (0, g.LY)(this.xZn, this, p), (0, g.LY)(this.Acr, this))
        } else O3E(this, {}), sq(this)
    };
    g.h.xZn = function(p, C) {
        this.C = null;
        var V = g.Ia(y1G(this));
        if (g.af(V, g.Ia(p))) {
            C = C.screens || [];
            V = {};
            for (var N = C.length, H = 0; H < N; ++H) V[p[C[H].loungeToken]] = C[H].status == "online";
            O3E(this, V);
            sq(this)
        } else this.Ap("Changing Screen set during request."), this.QJ()
    };
    g.h.Acr = function(p) {
        this.Ap("Screen availability failed: " + p);
        this.C = null;
        sq(this)
    };
    g.h.Ap = function(p) {
        CL("OnlineScreenService", p)
    };
    g.r1(aR, X4);
    g.h = aR.prototype;
    g.h.start = function() {
        this.C.start();
        this.T.start();
        this.screens.length && (this.publish("screenChange"), this.T.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.h.add = function(p, C, V) {
        this.C.add(p, C, V)
    };
    g.h.remove = function(p, C, V) {
        this.C.remove(p, C, V);
        this.T.update()
    };
    g.h.X7 = function(p, C, V, N) {
        this.C.contains(p) ? this.C.X7(p, C, V, N) : (p = "Updating name of unknown screen: " + p.name, CL(this.Y, p), N(Error(p)))
    };
    g.h.Te = function(p) {
        return p ? this.screens : g.Gp(this.screens, g.JT(this.V, function(C) {
            return !this.contains(C)
        }, this))
    };
    g.h.iZ = function() {
        return g.JT(this.Te(!0), function(p) {
            return !!this.T.T[p.id]
        }, this)
    };
    g.h.fm = function(p, C, V, N, H, X) {
        var d = this;
        this.info("getDialScreenByPairingCode " + p + " / " + C);
        var a = new KWy(this.S, p, C, V, N);
        a.subscribe("pairingComplete", function(E, l) {
            g.iP(a);
            H(Eq(d, E), l)
        });
        a.subscribe("pairingFailed", function(E) {
            g.iP(a);
            X(E)
        });
        a.start();
        return (0, g.LY)(a.stop, a)
    };
    g.h.dL = function(p, C, V, N) {
        g.qU(G3(this.S, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: p
            },
            timeout: 5E3,
            onSuccess: (0, g.LY)(function(H, X) {
                H = new iC(X.screen || {});
                if (!H.name || A1v(this, H.name)) {
                    a: {
                        X = H.name;
                        for (var d = 2, a = C(X, d); A1v(this, a);) {
                            d++;
                            if (d > 20) break a;
                            a = C(X, d)
                        }
                        X = a
                    }
                    H.name = X
                }
                V(Eq(this, H))
            }, this),
            onError: (0, g.LY)(function(H) {
                N(Error("pairing request failed: " + H.status))
            }, this),
            onTimeout: (0, g.LY)(function() {
                N(Error("pairing request timed out."))
            }, this)
        })
    };
    g.h.CS = function() {
        g.iP(this.C);
        g.iP(this.T);
        aR.oI.CS.call(this)
    };
    g.h.RT = function() {
        k42(this);
        this.publish("screenChange");
        this.T.update()
    };
    aR.prototype.dispose = aR.prototype.dispose;
    g.r1(lD, g.ca);
    g.h = lD.prototype;
    g.h.fq = function(p) {
        this.fS() || (p && (cr(this, "" + p), this.publish("sessionFailed")), this.T = null, this.publish("sessionScreen", null))
    };
    g.h.info = function(p) {
        CL(this.Sa, p)
    };
    g.h.WH = function() {
        return null
    };
    g.h.Vh = function(p) {
        var C = this.C;
        p ? (C.displayStatus = new chrome.cast.ReceiverDisplayStatus(p, []), C.displayStatus.showStop = !0) : C.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(C, (0, g.LY)(function() {
            this.info("Updated receiver status for " + C.friendlyName + ": " + p)
        }, this), (0, g.LY)(function() {
            cr(this, "Failed to update receiver status for: " + C.friendlyName)
        }, this))
    };
    g.h.CS = function() {
        this.Vh("");
        lD.oI.CS.call(this)
    };
    g.m(Ts, lD);
    g.h = Ts.prototype;
    g.h.xj = function(p) {
        if (this.V) {
            if (this.V == p) return;
            cr(this, "Overriding cast session with new session object");
            WWY(this);
            this.sY = !1;
            this.Z = "unknown";
            this.V.removeUpdateListener(this.b_);
            this.V.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Vn)
        }
        this.V = p;
        this.V.addUpdateListener(this.b_);
        this.V.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Vn);
        PNy(this, "getMdxSessionStatus")
    };
    g.h.HE = function(p) {
        this.info("launchWithParams no-op for Cast: " + g.zD(p))
    };
    g.h.stop = function() {
        this.V ? this.V.stop((0, g.LY)(function() {
            this.fq()
        }, this), (0, g.LY)(function() {
            this.fq(Error("Failed to stop receiver app."))
        }, this)) : this.fq(Error("Stopping cast device without session."))
    };
    g.h.Vh = function() {};
    g.h.CS = function() {
        this.info("disposeInternal");
        WWY(this);
        this.V && (this.V.removeUpdateListener(this.b_), this.V.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Vn));
        this.V = null;
        lD.prototype.CS.call(this)
    };
    g.h.QN$ = function(p, C) {
        if (!this.fS())
            if (C)
                if (C = jA(C), g.Pv(C)) switch (p = "" + C.type, C = C.data || {}, this.info("onYoutubeMessage_: " + p + " " + g.zD(C)), p) {
                    case "mdxSessionStatus":
                        RVr(this, C);
                        break;
                    case "loungeToken":
                        wW8(this, C);
                        break;
                    default:
                        cr(this, "Unknown youtube message: " + p)
                } else cr(this, "Unable to parse message.");
                else cr(this, "No data in message.")
    };
    g.h.Fa = function(p, C, V, N) {
        g.KO(this.J);
        this.J = 0;
        b3E(this.S, this.C.label, p, this.C.friendlyName, (0, g.LY)(function(H) {
            H ? C(H) : N >= 0 ? (cr(this, "Screen " + p + " appears to be offline. " + N + " retries left."), this.J = g.F5((0, g.LY)(this.Fa, this, p, C, V, N - 1), 300)) : V(Error("Unable to fetch screen."))
        }, this), V)
    };
    g.h.WH = function() {
        return this.V
    };
    g.h.jy = function(p) {
        this.fS() || p || (cr(this, "Cast session died."), this.fq())
    };
    g.m(MJ, lD);
    g.h = MJ.prototype;
    g.h.xj = function(p) {
        this.V = p;
        this.V.addUpdateListener(this.Wr)
    };
    g.h.HE = function(p) {
        this.vr = p;
        this.a$()
    };
    g.h.stop = function() {
        VVG(this);
        this.V ? this.V.stop((0, g.LY)(this.fq, this, null), (0, g.LY)(this.fq, this, "Failed to stop DIAL device.")) : this.fq()
    };
    g.h.CS = function() {
        VVG(this);
        this.V && this.V.removeUpdateListener(this.Wr);
        this.V = null;
        lD.prototype.CS.call(this)
    };
    g.h.XG = function(p) {
        this.fS() || p || (cr(this, "DIAL session died."), this.W(), this.W = function() {}, this.fq())
    };
    g.m(vr, lD);
    vr.prototype.stop = function() {
        this.fq()
    };
    vr.prototype.xj = function() {};
    vr.prototype.HE = function() {
        g.KO(this.V);
        this.V = NaN;
        var p = ay(this.S.Te(), this.C.label);
        p ? tu(this, p) : this.fq(Error("No such screen"))
    };
    vr.prototype.CS = function() {
        g.KO(this.V);
        this.V = NaN;
        lD.prototype.CS.call(this)
    };
    g.m(F4, g.ca);
    g.h = F4.prototype;
    g.h.init = function(p, C) {
        chrome.cast.timeout.requestSession = 3E4;
        var V = new chrome.cast.SessionRequest(this.J, [chrome.cast.Capability.AUDIO_OUT]);
        g.Zr("desktop_enable_cast_connect") && (V.androidReceiverCompatible = !0);
        this.Z || (V.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var N = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        p = p || this.Y ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var H = (0, g.LY)(this.QH$, this);
        V = new chrome.cast.ApiConfig(V, (0, g.LY)(this.Yf,
            this), H, N, p);
        V.customDialLaunchCallback = (0, g.LY)(this.Kxa, this);
        chrome.cast.initialize(V, (0, g.LY)(function() {
            this.fS() || (chrome.cast.addReceiverActionListener(this.W), Tq5(), this.C.subscribe("onlineScreenChange", (0, g.LY)(this.Lm, this)), this.V = XCr(this), chrome.cast.setCustomReceivers(this.V, function() {}, (0, g.LY)(function(X) {
                this.Ap("Failed to set initial custom receivers: " + g.zD(X))
            }, this)), this.publish("yt-remote-cast2-availability-change", KL(this)), C(!0))
        }, this), (0, g.LY)(function(X) {
            this.Ap("Failed to initialize API: " +
                g.zD(X));
            C(!1)
        }, this))
    };
    g.h.xgr = function(p, C) {
        SW("Setting connected screen ID: " + p + " -> " + C);
        if (this.T) {
            var V = this.T.T;
            if (!p || V && V.id != p) SW("Unsetting old screen status: " + this.T.C.friendlyName), DP(this, null)
        }
        if (p && C) {
            if (!this.T) {
                p = ay(this.C.Te(), p);
                if (!p) {
                    SW("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (p.idType == "shortLived") {
                    SW("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                V = Nyv(this, p);
                V || (SW("setConnectedScreenStatus: Connected receiver not custom..."), V = new chrome.cast.Receiver(p.uuid ?
                    p.uuid : p.id, p.name), V.receiverType = chrome.cast.ReceiverType.CUSTOM, this.V.push(V), chrome.cast.setCustomReceivers(this.V, function() {}, (0, g.LY)(function(N) {
                    this.Ap("Failed to set initial custom receivers: " + g.zD(N))
                }, this)));
                SW("setConnectedScreenStatus: new active receiver: " + V.friendlyName);
                DP(this, new vr(this.C, V), !0)
            }
            this.T.Vh(C)
        } else SW("setConnectedScreenStatus: no screen.")
    };
    g.h.VZk = function(p) {
        this.fS() ? this.Ap("Setting connection data on disposed cast v2") : this.T ? this.T.HE(p) : this.Ap("Setting connection data without a session")
    };
    g.h.qb = function() {
        this.fS() ? this.Ap("Stopping session on disposed cast v2") : this.T ? (this.T.stop(), DP(this, null)) : SW("Stopping non-existing session")
    };
    g.h.requestSession = function() {
        chrome.cast.requestSession((0, g.LY)(this.Yf, this), (0, g.LY)(this.rc_, this))
    };
    g.h.CS = function() {
        this.C.unsubscribe("onlineScreenChange", (0, g.LY)(this.Lm, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.W);
        var p = l12,
            C = g.zV("yt.mdx.remote.debug.handlers_");
        g.rY(C || [], p);
        g.iP(this.T);
        g.ca.prototype.CS.call(this)
    };
    g.h.Ap = function(p) {
        CL("Controller", p)
    };
    g.h.BQ = function(p, C) {
        this.T == p && (C || DP(this, null), this.publish("yt-remote-cast2-session-change", C))
    };
    g.h.gM_ = function(p, C) {
        if (!this.fS())
            if (p) switch (p.friendlyName = chrome.cast.unescape(p.friendlyName), SW("onReceiverAction_ " + p.label + " / " + p.friendlyName + "-- " + C), C) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.T)
                        if (this.T.C.label != p.label) SW("onReceiverAction_: Stopping active receiver: " + this.T.C.friendlyName), this.T.stop();
                        else {
                            SW("onReceiverAction_: Casting to active receiver.");
                            this.T.T && this.publish("yt-remote-cast2-session-change", this.T.T);
                            break
                        }
                    switch (p.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            DP(this,
                                new vr(this.C, p));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            DP(this, new MJ(this.C, p, this.S, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            DP(this, new Ts(this.C, p, this.config_));
                            break;
                        default:
                            this.Ap("Unknown receiver type: " + p.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.T && this.T.C.label == p.label ? this.T.stop() : this.Ap("Stopping receiver w/o session: " + p.friendlyName)
            } else this.Ap("onReceiverAction_ called without receiver.")
    };
    g.h.Kxa = function(p) {
        if (this.fS()) return Promise.reject(Error("disposed"));
        var C = p.receiver;
        C.receiverType != chrome.cast.ReceiverType.DIAL && (this.Ap("Not DIAL receiver: " + C.friendlyName), C.receiverType = chrome.cast.ReceiverType.DIAL);
        var V = this.T ? this.T.C : null;
        if (!V || V.label != C.label) return this.Ap("Receiving DIAL launch request for non-clicked DIAL receiver: " + C.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (V && V.label == C.label && V.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.T.T) return SW("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.T.T), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Ap('Changing CAST intent from "' + V.receiverType + '" to "dial" for ' + C.friendlyName);
            DP(this, new MJ(this.C, C, this.S, this.config_))
        }
        C = this.T;
        C.J = p;
        C.J.appState == chrome.cast.DialAppState.RUNNING ? (p = C.J.extraData || {}, V = p.screenId || null, Ju(C) && p.loungeToken ? p.loungeTokenRefreshIntervalMs ? p = pCp(C, {
            name: C.C.friendlyName,
            screenId: p.screenId,
            loungeToken: p.loungeToken,
            dialId: C.J.receiver.label,
            screenIdType: "shortLived"
        }, p.loungeTokenRefreshIntervalMs) : (g.Vg(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(p) + ".")), p = CRf(C, V)) : p = CRf(C, V)) : p = BqY(C);
        return p
    };
    g.h.Yf = function(p) {
        var C = this;
        if (!this.fS() && !this.Y) {
            SW("New cast session ID: " + p.sessionId);
            var V = p.receiver;
            if (V.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.T)
                    if (V.receiverType == chrome.cast.ReceiverType.CAST) SW("Got resumed cast session before resumed mdx connection."), V.friendlyName = chrome.cast.unescape(V.friendlyName), DP(this, new Ts(this.C, V, this.config_), !0);
                    else {
                        this.Ap("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var N = this.T.C,
                    H = ay(this.C.Te(),
                        N.label);
                H && hZ(H, V.label) && N.receiverType != chrome.cast.ReceiverType.CAST && V.receiverType == chrome.cast.ReceiverType.CAST && (SW("onSessionEstablished_: manual to cast session change " + V.friendlyName), g.iP(this.T), this.T = new Ts(this.C, V, this.config_), this.T.subscribe("sessionScreen", (0, g.LY)(this.BQ, this, this.T)), this.T.subscribe("sessionFailed", function() {
                    return H5P(C, C.T)
                }), this.T.HE(null));
                this.T.xj(p)
            }
        }
    };
    g.h.FG = function() {
        return this.T ? this.T.WH() : null
    };
    g.h.rc_ = function(p) {
        this.fS() || (this.Ap("Failed to estabilish a session: " + g.zD(p)), p.code != chrome.cast.ErrorCode.CANCEL && DP(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.h.QH$ = function(p) {
        SW("Receiver availability updated: " + p);
        if (!this.fS()) {
            var C = KL(this);
            this.D = p == chrome.cast.ReceiverAvailability.AVAILABLE;
            KL(this) != C && this.publish("yt-remote-cast2-availability-change", KL(this))
        }
    };
    g.h.Lm = function() {
        this.fS() || (this.V = XCr(this), SW("Updating custom receivers: " + g.zD(this.V)), chrome.cast.setCustomReceivers(this.V, function() {}, (0, g.LY)(function() {
            this.Ap("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", KL(this)))
    };
    F4.prototype.setLaunchParams = F4.prototype.VZk;
    F4.prototype.setConnectedScreenStatus = F4.prototype.xgr;
    F4.prototype.stopSession = F4.prototype.qb;
    F4.prototype.getCastSession = F4.prototype.FG;
    F4.prototype.requestSession = F4.prototype.requestSession;
    F4.prototype.init = F4.prototype.init;
    F4.prototype.dispose = F4.prototype.dispose;
    var cNp = [];
    g.h = qJ.prototype;
    g.h.reset = function(p) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        FeP(this);
        this.volume = -1;
        this.muted = !1;
        p && (this.index = p.index, this.listId = p.listId, this.videoId = p.videoId, this.playerState = p.playerState, this.volume = p.volume, this.muted = p.muted, this.audioTrackId = p.audioTrackId, this.trackData = p.trackData, this.gj = p.hasPrevious, this.bT = p.hasNext, this.D = p.playerTime, this.Y = p.playerTimeAt, this.S = p.seekableStart, this.T = p.seekableEnd, this.W = p.duration, this.J = p.loadedTime, this.V = p.liveIngestionTime, this.C = !isNaN(this.V))
    };
    g.h.isPlaying = function() {
        return this.playerState == 1
    };
    g.h.isBuffering = function() {
        return this.playerState == 3
    };
    g.h.Iz = function() {
        return this.playerState == 1081
    };
    g.h.Nr = function(p) {
        this.W = isNaN(p) ? 0 : p
    };
    g.h.getDuration = function() {
        return this.C ? this.W + IR(this) : this.W
    };
    g.h.clone = function() {
        return new qJ(SX1(this))
    };
    g.m(xs, g.ca);
    g.h = xs.prototype;
    g.h.getState = function() {
        return this.V
    };
    g.h.Vl = function() {
        return this.S.getReconnectTimeout()
    };
    g.h.Ry = function() {
        this.S.reconnect()
    };
    g.h.play = function() {
        zs(this) ? (this.T ? this.T.play(null, g.Fu, Pr(this, "play")) : eW(this, "play"), uDP(this, 1, Au(Ys(this))), this.publish("remotePlayerChange")) : RR(this, this.play)
    };
    g.h.pause = function() {
        zs(this) ? (this.T ? this.T.pause(null, g.Fu, Pr(this, "pause")) : eW(this, "pause"), uDP(this, 2, Au(Ys(this))), this.publish("remotePlayerChange")) : RR(this, this.pause)
    };
    g.h.seekTo = function(p) {
        if (zs(this)) {
            if (this.T) {
                var C = Ys(this),
                    V = new chrome.cast.media.SeekRequest;
                V.currentTime = p;
                C.isPlaying() || C.isBuffering() ? V.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : V.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.T.seek(V, g.Fu, Pr(this, "seekTo", {
                    newTime: p
                }))
            } else eW(this, "seekTo", {
                newTime: p
            });
            uDP(this, 3, p);
            this.publish("remotePlayerChange")
        } else RR(this, g.Wv(this.seekTo, p))
    };
    g.h.stop = function() {
        if (zs(this)) {
            this.T ? this.T.stop(null, g.Fu, Pr(this, "stopVideo")) : eW(this, "stopVideo");
            var p = Ys(this);
            p.index = -1;
            p.videoId = "";
            FeP(p);
            nL(this, p);
            this.publish("remotePlayerChange")
        } else RR(this, this.stop)
    };
    g.h.setVolume = function(p, C) {
        if (zs(this)) {
            var V = Ys(this);
            if (this.C) {
                if (V.volume != p) {
                    var N = Math.round(p) / 100;
                    this.C.setReceiverVolumeLevel(N, (0, g.LY)(function() {
                        jW("set receiver volume: " + N)
                    }, this), (0, g.LY)(function() {
                        this.Ap("failed to set receiver volume.")
                    }, this))
                }
                V.muted != C && this.C.setReceiverMuted(C, (0, g.LY)(function() {
                    jW("set receiver muted: " + C)
                }, this), (0, g.LY)(function() {
                    this.Ap("failed to set receiver muted.")
                }, this))
            } else {
                var H = {
                    volume: p,
                    muted: C
                };
                V.volume != -1 && (H.delta = p - V.volume);
                eW(this, "setVolume", H)
            }
            V.muted = C;
            V.volume = p;
            nL(this, V)
        } else RR(this, g.Wv(this.setVolume, p, C))
    };
    g.h.Nv = function(p, C) {
        if (zs(this)) {
            var V = Ys(this);
            p = {
                videoId: p
            };
            C && (V.trackData = {
                trackName: C.name,
                languageCode: C.languageCode,
                sourceLanguageCode: C.translationLanguage ? C.translationLanguage.languageCode : "",
                languageName: C.languageName,
                kind: C.kind
            }, p.style = g.zD(C.style), g.nG(p, V.trackData));
            eW(this, "setSubtitlesTrack", p);
            nL(this, V)
        } else RR(this, g.Wv(this.Nv, p, C))
    };
    g.h.setAudioTrack = function(p, C) {
        zs(this) ? (C = C.getLanguageInfo().getId(), eW(this, "setAudioTrack", {
            videoId: p,
            audioTrackId: C
        }), p = Ys(this), p.audioTrackId = C, nL(this, p)) : RR(this, g.Wv(this.setAudioTrack, p, C))
    };
    g.h.playVideo = function(p, C, V, N, H, X, d) {
        N = N === void 0 ? null : N;
        H = H === void 0 ? null : H;
        X = X === void 0 ? null : X;
        d = d === void 0 ? null : d;
        var a = Ys(this),
            E = {
                videoId: p
            };
        V !== void 0 && (E.currentIndex = V);
        oR(a, p, V || 0);
        C !== void 0 && (bD(a, C), E.currentTime = C);
        N && (E.listId = N);
        H && (E.playerParams = H);
        X && (E.clickTrackingParams = X);
        d && (E.locationInfo = g.zD(d));
        eW(this, "setPlaylist", E);
        N || nL(this, a)
    };
    g.h.Ul = function(p, C) {
        if (zs(this)) {
            if (p && C) {
                var V = Ys(this);
                oR(V, p, C);
                nL(this, V)
            }
            eW(this, "previous")
        } else RR(this, g.Wv(this.Ul, p, C))
    };
    g.h.nextVideo = function(p, C) {
        if (zs(this)) {
            if (p && C) {
                var V = Ys(this);
                oR(V, p, C);
                nL(this, V)
            }
            eW(this, "next")
        } else RR(this, g.Wv(this.nextVideo, p, C))
    };
    g.h.X3 = function() {
        if (zs(this)) {
            eW(this, "clearPlaylist");
            var p = Ys(this);
            p.reset();
            nL(this, p);
            this.publish("remotePlayerChange")
        } else RR(this, this.X3)
    };
    g.h.oK = function() {
        zs(this) ? eW(this, "dismissAutoplay") : RR(this, this.oK)
    };
    g.h.dispose = function() {
        if (this.V != 3) {
            var p = this.V;
            this.V = 3;
            this.publish("proxyStateChange", p, this.V)
        }
        g.ca.prototype.dispose.call(this)
    };
    g.h.CS = function() {
        Dep(this);
        this.S = null;
        this.W.clear();
        ks(this, null);
        g.ca.prototype.CS.call(this)
    };
    g.h.zm = function(p) {
        if ((p != this.V || p == 2) && this.V != 3 && p != 0) {
            var C = this.V;
            this.V = p;
            this.publish("proxyStateChange", C, p);
            if (p == 1)
                for (; !this.W.isEmpty();) C = p = this.W, C.T.length === 0 && (C.T = C.C, C.T.reverse(), C.C = []), p.T.pop().apply(this);
            else p == 3 && this.dispose()
        }
    };
    g.h.KMY = function(p, C) {
        this.publish(p, C)
    };
    g.h.HS$ = function(p) {
        if (!p) this.EG(null), ks(this, null);
        else if (this.C.receiver.volume) {
            p = this.C.receiver.volume;
            var C = Ys(this),
                V = Math.round(100 * p.level || 0);
            if (C.volume != V || C.muted != p.muted) jW("Cast volume update: " + p.level + (p.muted ? " muted" : "")), C.volume = V, C.muted = !!p.muted, nL(this, C)
        }
    };
    g.h.EG = function(p) {
        jW("Cast media: " + !!p);
        this.T && this.T.removeUpdateListener(this.J);
        if (this.T = p) this.T.addUpdateListener(this.J), Z5F(this), this.publish("remotePlayerChange")
    };
    g.h.enk = function(p) {
        p ? (Z5F(this), this.publish("remotePlayerChange")) : this.EG(null)
    };
    g.h.y7 = function() {
        eW(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.h.P_k = function() {
        var p = JNP();
        p && ks(this, p)
    };
    g.h.Ap = function(p) {
        CL("CP", p)
    };
    g.m(LL, g.ca);
    g.h = LL.prototype;
    g.h.connect = function(p, C) {
        if (C) {
            var V = C.listId,
                N = C.videoId,
                H = C.videoIds,
                X = C.playerParams,
                d = C.clickTrackingParams,
                a = C.index,
                E = {
                    videoId: N
                },
                l = C.currentTime,
                t = C.locationInfo;
            C = C.loopMode;
            l !== void 0 && (E.currentTime = l <= 5 ? 0 : l);
            X && (E.playerParams = X);
            t && (E.locationInfo = t);
            d && (E.clickTrackingParams = d);
            V && (E.listId = V);
            H && H.length > 0 && (E.videoIds = H.join(","));
            a !== void 0 && (E.currentIndex = a);
            this.Wr && (E.loopMode = C || "LOOP_MODE_OFF");
            V && (this.T.listId = V);
            this.T.videoId = N;
            this.T.index = a || 0;
            this.T.state = 3;
            bD(this.T,
                l);
            this.W = "UNSUPPORTED";
            V = this.Wr ? "setInitialState" : "setPlaylist";
            wD("Connecting with " + V + " and params: " + g.zD(E));
            this.C.connect({
                method: V,
                params: g.zD(E)
            }, p, C15())
        } else wD("Connecting without params"), this.C.connect({}, p, C15());
        yNy(this)
    };
    g.h.b6 = function(p) {
        this.C.b6(p)
    };
    g.h.dispose = function() {
        this.fS() || (g.YH("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), $s(this, 3));
        g.ca.prototype.dispose.call(this)
    };
    g.h.CS = function() {
        qXr(this);
        b50(this);
        Ihr(this);
        g.KO(this.J);
        this.J = NaN;
        g.KO(this.Z);
        this.Z = NaN;
        this.S = null;
        g.fK(this.a$);
        this.a$.length = 0;
        this.C.dispose();
        g.ca.prototype.CS.call(this);
        this.W = this.D = this.V = this.T = this.C = null
    };
    g.h.Me = function(p) {
        if (!this.V || this.V.length === 0) return !1;
        for (var C = g.F(this.V), V = C.next(); !V.done; V = C.next())
            if (!V.value.capabilities.has(p)) return !1;
        return !0
    };
    g.h.FP = function() {
        var p = 3;
        this.fS() || (p = 0, isNaN(this.AA()) ? this.C.EW() && isNaN(this.Y) && (p = 1) : p = 2);
        return p
    };
    g.h.HW = function(p) {
        wD("Disconnecting with " + p);
        g.YH("yt.mdx.remote.remoteClient_", null);
        qXr(this);
        this.publish("beforeDisconnect", p);
        p == 1 && tZ();
        this.C.disconnect(p);
        this.dispose()
    };
    g.h.Qp = function() {
        var p = this.T;
        this.S && (p = this.T.clone(), oR(p, this.S, p.index));
        return SX1(p)
    };
    g.h.uF_ = function(p) {
        var C = this,
            V = new qJ(p);
        V.videoId && V.videoId != this.T.videoId && (this.S = V.videoId, g.KO(this.J), this.J = g.F5(function() {
            if (C.S) {
                var H = C.S;
                C.S = null;
                C.T.videoId != H && gD(C, "getNowPlaying")
            }
        }, 5E3));
        var N = [];
        this.T.listId == V.listId && this.T.videoId == V.videoId && this.T.index == V.index || N.push("remoteQueueChange");
        this.T.playerState == V.playerState && this.T.volume == V.volume && this.T.muted == V.muted && Au(this.T) == Au(V) && g.zD(this.T.trackData) == g.zD(V.trackData) || N.push("remotePlayerChange");
        this.T.reset(p);
        g.lr(N, function(H) {
            this.publish(H)
        }, this)
    };
    g.h.wT = function() {
        var p = this.C.getDeviceId(),
            C = g.L0(this.V, function(V) {
                return V.type == "REMOTE_CONTROL" && V.id != p
            });
        return C ? C.id : ""
    };
    g.h.AA = function() {
        return this.C.Vl()
    };
    g.h.ej = function() {
        return this.W || "UNSUPPORTED"
    };
    g.h.Hw = function() {
        return this.D || ""
    };
    g.h.c7 = function() {
        !isNaN(this.AA()) && this.C.Ry()
    };
    g.h.nle = function(p, C) {
        gD(this, p, C);
        opy(this)
    };
    g.h.G$ = function() {
        var p = g.ee("SAPISID", "") || g.ee("__Secure-1PAPISID") || "",
            C = g.ee("__Secure-3PAPISID", "") || "";
        if (!p && !C) return "";
        p = g.mq(g.mr(p), 2);
        C = g.mq(g.mr(C), 2);
        return g.mq(g.mr("," + p + "," + C), 2)
    };
    LL.prototype.subscribe = LL.prototype.subscribe;
    LL.prototype.unsubscribeByKey = LL.prototype.zW;
    LL.prototype.getProxyState = LL.prototype.FP;
    LL.prototype.disconnect = LL.prototype.HW;
    LL.prototype.getPlayerContextData = LL.prototype.Qp;
    LL.prototype.setPlayerContextData = LL.prototype.uF_;
    LL.prototype.getOtherConnectedRemoteId = LL.prototype.wT;
    LL.prototype.getReconnectTimeout = LL.prototype.AA;
    LL.prototype.getAutoplayMode = LL.prototype.ej;
    LL.prototype.getAutoplayVideoId = LL.prototype.Hw;
    LL.prototype.reconnect = LL.prototype.c7;
    LL.prototype.sendMessage = LL.prototype.nle;
    LL.prototype.getXsrfToken = LL.prototype.G$;
    LL.prototype.isCapabilitySupportedOnConnectedDevices = LL.prototype.Me;
    g.m(gp1, X4);
    g.h = gp1.prototype;
    g.h.Te = function(p) {
        return this.b8.$_gs(p)
    };
    g.h.contains = function(p) {
        return !!this.b8.$_c(p)
    };
    g.h.get = function(p) {
        return this.b8.$_g(p)
    };
    g.h.start = function() {
        this.b8.$_st()
    };
    g.h.add = function(p, C, V) {
        this.b8.$_a(p, C, V)
    };
    g.h.remove = function(p, C, V) {
        this.b8.$_r(p, C, V)
    };
    g.h.X7 = function(p, C, V, N) {
        this.b8.$_un(p, C, V, N)
    };
    g.h.CS = function() {
        for (var p = this.T.length, C = 0; C < p; ++C) this.b8.$_ubk(this.T[C]);
        this.T.length = 0;
        this.b8 = null;
        X4.prototype.CS.call(this)
    };
    g.h.Mb = function() {
        this.publish("screenChange")
    };
    g.h.i4a = function() {
        this.publish("onlineScreenChange")
    };
    aR.prototype.$_st = aR.prototype.start;
    aR.prototype.$_gspc = aR.prototype.dL;
    aR.prototype.$_gsppc = aR.prototype.fm;
    aR.prototype.$_c = aR.prototype.contains;
    aR.prototype.$_g = aR.prototype.get;
    aR.prototype.$_a = aR.prototype.add;
    aR.prototype.$_un = aR.prototype.X7;
    aR.prototype.$_r = aR.prototype.remove;
    aR.prototype.$_gs = aR.prototype.Te;
    aR.prototype.$_gos = aR.prototype.iZ;
    aR.prototype.$_s = aR.prototype.subscribe;
    aR.prototype.$_ubk = aR.prototype.zW;
    var HA = null,
        iE = !1,
        Wr = null,
        QI = null,
        H1F = null,
        pQ = [];
    g.m(sh5, g.Y);
    g.h = sh5.prototype;
    g.h.CS = function() {
        g.Y.prototype.CS.call(this);
        this.T.stop();
        this.C.stop();
        this.D.stop();
        var p = this.Ac;
        p.unsubscribe("proxyStateChange", this.PQ, this);
        p.unsubscribe("remotePlayerChange", this.Nf, this);
        p.unsubscribe("remoteQueueChange", this.S8, this);
        p.unsubscribe("previousNextChange", this.eF, this);
        p.unsubscribe("nowAutoplaying", this.LL, this);
        p.unsubscribe("autoplayDismissed", this.nL, this);
        this.Ac = this.module = null
    };
    g.h.x9 = function(p) {
        var C = g.US.apply(1, arguments);
        if (this.Ac.V != 2)
            if (hS(this)) {
                if (!Ys(this.Ac).Iz() || p !== "control_seek") switch (p) {
                    case "control_toggle_play_pause":
                        Ys(this.Ac).isPlaying() ? this.Ac.pause() : this.Ac.play();
                        break;
                    case "control_play":
                        this.Ac.play();
                        break;
                    case "control_pause":
                        this.Ac.pause();
                        break;
                    case "control_seek":
                        this.Y.zX(C[0], C[1]);
                        break;
                    case "control_subtitles_set_track":
                        EJE(this, C[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(C[0])
                }
            } else switch (p) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    C =
                        this.N.getCurrentTime();
                    am(this, C === 0 ? void 0 : C);
                    break;
                case "control_seek":
                    am(this, C[0]);
                    break;
                case "control_subtitles_set_track":
                    EJE(this, C[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(C[0])
            }
    };
    g.h.Gaa = function(p) {
        this.D.pH(p)
    };
    g.h.EB$ = function(p) {
        this.x9("control_subtitles_set_track", g.k5(p) ? null : p)
    };
    g.h.iR = function() {
        var p = this.N.getOption("captions", "track");
        g.k5(p) || EJE(this, p)
    };
    g.h.m6 = function(p) {
        this.module.m6(p, this.N.getVideoData().lengthSeconds)
    };
    g.h.b4S = function() {
        g.k5(this.V) || l9c(this, this.V);
        this.S = !1
    };
    g.h.PQ = function(p, C) {
        this.C.stop();
        C === 2 && this.rS()
    };
    g.h.Nf = function() {
        if (hS(this)) {
            this.T.stop();
            var p = Ys(this.Ac);
            switch (p.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.JU = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.JU = 0;
                    break;
                default:
                    this.module.JU = -1
            }
            switch (p.playerState) {
                case 1081:
                case 1:
                    this.aN(new g.cj(8));
                    this.IG();
                    break;
                case 1085:
                case 3:
                    this.aN(new g.cj(9));
                    break;
                case 1083:
                case 0:
                    this.aN(new g.cj(2));
                    this.Y.stop();
                    this.m6(this.N.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.aN(new g.cj(4));
                    break;
                case 2:
                    this.aN(new g.cj(4));
                    this.m6(Au(p));
                    break;
                case -1:
                    this.aN(new g.cj(64));
                    break;
                case -1E3:
                    this.aN(new g.cj(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        PO: 2
                    }))
            }
            p = Ys(this.Ac).trackData;
            var C = this.V;
            (p || C ? p && C && p.trackName == C.trackName && p.languageCode == C.languageCode && p.languageName == C.languageName && p.kind == C.kind : 1) || (this.V = p, l9c(this, p));
            p = Ys(this.Ac);
            p.volume === -1 || Math.round(this.N.getVolume()) === p.volume && this.N.isMuted() === p.muted || this.J.isActive() || this.nY()
        } else a9Y(this)
    };
    g.h.eF = function() {
        this.N.publish("mdxpreviousnextchange")
    };
    g.h.S8 = function() {
        hS(this) || a9Y(this)
    };
    g.h.LL = function(p) {
        isNaN(p) || this.N.publish("mdxnowautoplaying", p)
    };
    g.h.nL = function() {
        this.N.publish("mdxautoplaycanceled")
    };
    g.h.setAudioTrack = function(p) {
        hS(this) && this.Ac.setAudioTrack(this.N.getVideoData(1).videoId, p)
    };
    g.h.seekTo = function(p, C) {
        Ys(this.Ac).playerState === -1 ? am(this, p) : C && this.Ac.seekTo(p)
    };
    g.h.nY = function() {
        var p = this;
        if (hS(this)) {
            var C = Ys(this.Ac);
            this.events.rY(this.Z);
            C.muted ? this.N.mute() : this.N.unMute();
            this.N.setVolume(C.volume);
            this.Z = this.events.U(this.N, "onVolumeChange", function(V) {
                i1f(p, V)
            })
        }
    };
    g.h.IG = function() {
        this.T.stop();
        if (!this.Ac.fS()) {
            var p = Ys(this.Ac);
            p.isPlaying() && this.aN(new g.cj(8));
            this.m6(Au(p));
            this.T.start()
        }
    };
    g.h.rS = function() {
        this.C.stop();
        this.T.stop();
        var p = this.Ac.Vl();
        this.Ac.V == 2 && !isNaN(p) && this.C.start()
    };
    g.h.aN = function(p) {
        this.C.stop();
        var C = this.W;
        if (!g.FO(C, p)) {
            var V = g.r(p, 2);
            V !== g.r(this.W, 2) && this.N.K6(V);
            this.W = p;
            c3G(this.module, C, p)
        }
    };
    g.m(Ew, g.L);
    Ew.prototype.er = function() {
        this.T.show()
    };
    Ew.prototype.f4 = function() {
        this.T.hide()
    };
    Ew.prototype.C = function() {
        T3("mdx-privacy-popup-cancel");
        this.f4()
    };
    Ew.prototype.V = function() {
        T3("mdx-privacy-popup-confirm");
        this.f4()
    };
    g.m(lE, g.L);
    lE.prototype.onStateChange = function(p) {
        this.UZ(p.state)
    };
    lE.prototype.UZ = function(p) {
        if (this.api.getPresentingPlayerType() === 3) {
            var C = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            p = g.r(p, 128) ? g.Ks("Error on $RECEIVER_NAME", C) : p.isPlaying() || p.isPaused() ? g.Ks("Playing on $RECEIVER_NAME", C) : g.Ks("Connected to $RECEIVER_NAME", C);
            this.updateValue("statustext", p);
            this.T.show()
        } else this.T.hide()
    };
    g.m(tS, g.jv);
    tS.prototype.S = function() {
        var p = this.N.getOption("remote", "receivers");
        p && p.length > 1 && !this.N.getOption("remote", "quickCast") ? (this.AV = g.tB(p, this.T, this), this.dh(g.AU(p, this.T)), p = this.N.getOption("remote", "currentReceiver"), p = this.T(p), this.options[p] && this.kN(p), this.enable(!0)) : this.enable(!1)
    };
    tS.prototype.T = function(p) {
        return p.key
    };
    tS.prototype.oz = function(p) {
        return p === "cast-selector-receiver" ? "Cast..." : this.AV[p].name
    };
    tS.prototype.jq = function(p) {
        g.jv.prototype.jq.call(this, p);
        this.N.setOption("remote", "currentReceiver", this.AV[p]);
        this.xM.f4()
    };
    g.m(tFP, g.IT);
    g.h = tFP.prototype;
    g.h.create = function() {
        var p = this.player.K(),
            C = g.Oe(p);
        p = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: p.G("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: p.G("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: p.G("enable_cast_short_lived_lounge_token")
        };
        G1r(C, p);
        this.subscriptions.push(g.T7("yt-remote-before-disconnect", this.Lxo, this));
        this.subscriptions.push(g.T7("yt-remote-connection-change", this.oM$, this));
        this.subscriptions.push(g.T7("yt-remote-receiver-availability-change", this.pL,
            this));
        this.subscriptions.push(g.T7("yt-remote-auto-connect", this.JQe, this));
        this.subscriptions.push(g.T7("yt-remote-receiver-resumed", this.O4$, this));
        this.subscriptions.push(g.T7("mdx-privacy-popup-confirm", this.ut_, this));
        this.subscriptions.push(g.T7("mdx-privacy-popup-cancel", this.Etn, this));
        this.pL()
    };
    g.h.load = function() {
        this.player.cancelPlayback();
        g.IT.prototype.load.call(this);
        this.Oh = new sh5(this, this.player, this.Ac);
        var p = (p = dM0()) ? p.currentTime : 0;
        var C = N$1() ? new xs(Nu(), void 0) : null;
        p == 0 && C && (p = Au(Ys(C)));
        p !== 0 && this.m6(p);
        c3G(this, this.g7, this.g7);
        this.player.Lt(6)
    };
    g.h.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.QA = this.k$;
        g.s1(this.Oh, this.Ac);
        this.Ac = this.Oh = null;
        g.IT.prototype.unload.call(this);
        this.player.Lt(5);
        cA(this)
    };
    g.h.CS = function() {
        g.MM(this.subscriptions);
        g.IT.prototype.CS.call(this)
    };
    g.h.z4 = function(p) {
        var C = g.US.apply(1, arguments);
        this.loaded && this.Oh.x9.apply(this.Oh, [p].concat(g.K(C)))
    };
    g.h.getAdState = function() {
        return this.JU
    };
    g.h.gj = function() {
        return this.Ac ? Ys(this.Ac).gj : !1
    };
    g.h.bT = function() {
        return this.Ac ? Ys(this.Ac).bT : !1
    };
    g.h.m6 = function(p, C) {
        this.Vg = p || 0;
        this.player.publish("progresssync", p, C);
        this.player.Ba("onVideoProgress", p || 0)
    };
    g.h.getCurrentTime = function() {
        return this.Vg
    };
    g.h.getProgressState = function() {
        var p = Ys(this.Ac),
            C = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !p.Iz() && this.player.CO(),
            clipEnd: C.clipEnd,
            clipStart: C.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: p.getDuration(),
            ingestionTime: p.C ? p.V + IR(p) : p.V,
            isAtLiveHead: (p.C ? p.T + IR(p) : p.T) - this.getCurrentTime() <= 1,
            loaded: p.J,
            seekableEnd: p.C ? p.T + IR(p) : p.T,
            seekableStart: p.S > 0 ? p.S + IR(p) : p.S,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.h.nextVideo = function() {
        this.Ac && this.Ac.nextVideo()
    };
    g.h.Ul = function() {
        this.Ac && this.Ac.Ul()
    };
    g.h.Lxo = function(p) {
        p === 1 && (this.GF = this.Ac ? Ys(this.Ac) : null)
    };
    g.h.oM$ = function() {
        var p = N$1() ? new xs(Nu(), void 0) : null;
        if (p) {
            var C = this.QA;
            this.loaded && this.unload();
            this.Ac = p;
            this.GF = null;
            C.key !== this.k$.key && (this.QA = C, this.load())
        } else g.iP(this.Ac), this.Ac = null, this.loaded && (this.unload(), (p = this.GF) && p.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(p.videoId, Au(p)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.h.pL = function() {
        var p = [this.k$],
            C = p.concat,
            V = plc();
        fL() && g.zW("yt-remote-cast-available") && V.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.AV = C.call(p, V);
        p = jhE() || this.k$;
        TZ(this, p);
        this.player.Ba("onMdxReceiversChange")
    };
    g.h.JQe = function() {
        var p = jhE();
        TZ(this, p)
    };
    g.h.O4$ = function() {
        this.QA = jhE()
    };
    g.h.ut_ = function() {
        this.J_ = !0;
        cA(this);
        iE = !1;
        HA && da(HA, 1);
        HA = null
    };
    g.h.Etn = function() {
        this.J_ = !1;
        cA(this);
        TZ(this, this.k$);
        this.QA = this.k$;
        iE = !1;
        HA = null;
        this.player.playVideo()
    };
    g.h.DP = function(p, C) {
        switch (p) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.AV;
            case "currentReceiver":
                return C && (C.key === "cast-selector-receiver" ? mey() : TZ(this, C)), this.loaded ? this.QA : this.k$;
            case "quickCast":
                return this.AV.length === 2 && this.AV[1].key === "cast-selector-receiver" ? (C && mey(), !0) : !1
        }
    };
    g.h.y7 = function() {
        this.Ac.y7()
    };
    g.h.P_ = function() {
        return !1
    };
    g.h.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.h.isLoggedIn = function() {
        var p, C;
        return ((p = g.pO("PLAYER_CONFIG")) == null ? void 0 : (C = p.args) == null ? void 0 : C.authuser) !== void 0 ? !0 : !(!g.pO("SESSION_INDEX") && !g.pO("LOGGED_IN"))
    };
    g.qA("remote", tFP);
})(_yt_player);