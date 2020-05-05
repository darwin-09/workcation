(function (t) {
    function e(e) {
        for (var i, o, l = e[0], s = e[1], c = e[2], g = 0, p = []; g < l.length; g++) o = l[g], Object.prototype.hasOwnProperty.call(r, o) && r[o] && p.push(r[o][0]), r[o] = 0;
        for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
        u && u(e);
        while (p.length) p.shift()();
        return n.push.apply(n, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], i = !0, l = 1; l < a.length; l++) {
                var s = a[l];
                0 !== r[s] && (i = !1)
            }
            i && (n.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var i = {},
        r = {
            app: 0
        },
        n = [];

    function o(e) {
        if (i[e]) return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = t, o.c = i, o.d = function (t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, o.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(a, i, function (e) {
                return t[e]
            }.bind(null, i));
        return a
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var c = 0; c < l.length; c++) e(l[c]);
    var u = s;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    },
    "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var i = a("2b0e"),
            r = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t._m(0), a("div", [a("div", {
                    staticClass: "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8"
                }, [a("h2", {
                    staticClass: "text-xl text-gray-900"
                }, [t._v("Popular destinations")]), a("p", {
                    staticClass: "text-gray-600"
                }, [t._v("A selection of great work-friendly cities with lots to see and explore.")]), a("div", {
                    staticClass: "flex flex-wrap -mx-4"
                }, t._l(t.popularDestinations, (function (t) {
                    return a("div", {
                        key: t.id,
                        staticClass: "mt-6 w-full px-4 lg:w-1/2 xl:w-1/3"
                    }, [a("DestinationCard", {
                        attrs: {
                            destination: t
                        }
                    })], 1)
                })), 0)])])])
            },
            n = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "bg-gray-100 flex"
                }, [a("div", {
                    staticClass: "px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
                }, [a("div", {
                    staticClass: "xl:max-w-lg xl:ml-auto"
                }, [a("img", {
                    staticClass: "h-10",
                    attrs: {
                        src: "./img/workcation.svg",
                        alt: "Workcation"
                    }
                }), a("img", {
                    staticClass: "mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden",
                    attrs: {
                        src: "./img/beach-work.jpg",
                        alt: "Woman workcationing on the beach"
                    }
                }), a("h1", {
                    staticClass: "mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
                }, [t._v(" You can work from anywhere. "), a("br", {
                    staticClass: "hidden lg:inline"
                }), a("span", {
                    staticClass: "text-indigo-500"
                }, [t._v("Take advantage of it.")])]), a("p", {
                    staticClass: "mt-2 text-gray-600 sm:mt-4 sm:text-xl"
                }, [t._v(" Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation. ")]), a("div", {
                    staticClass: "mt-4 sm:mt-6"
                }, [a("a", {
                    staticClass: "btn btn-indigo shadow-lg sm:text-base",
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Book your escape")])])])]), a("div", {
                    staticClass: "hidden lg:block lg:w-1/2 lg:relative"
                }, [a("img", {
                    staticClass: "absolute inset-0 h-full w-full object-cover object-center",
                    attrs: {
                        src: "./img/beach-work.jpg",
                        alt: "Woman workcationing on the beach"
                    }
                })])])
            }],
            o = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
                }, [a("img", {
                    staticClass: "h-32 w-32 flex-shrink-0",
                    attrs: {
                        src: t.destination.imageUrl,
                        alt: t.destination.imageAlt
                    }
                }), a("div", {
                    staticClass: "px-6 py-4"
                }, [a("h3", {
                    staticClass: "text-lg font-semibold text-gray-800"
                }, [t._v(t._s(t.destination.city))]), a("p", {
                    staticClass: "text-gray-600"
                }, [t._v("$" + t._s(t.destination.averagePrice) + " / night average")]), a("div", {
                    staticClass: "mt-4"
                }, [a("a", {
                    staticClass: "text-indigo-500 hover:text-indigo-400 font-semibold text-sm",
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Explore " + t._s(t.destination.propertyCount) + " properties")])])])])
            },
            l = [],
            s = {
                props: ["destination"]
            },
            c = s,
            u = a("2877"),
            g = Object(u["a"])(c, o, l, !1, null, null, null),
            p = g.exports,
            m = {
                name: "app",
                components: {
                    DestinationCard: p
                },
                data: function () {
                    return {
                        popularDestinations: [{
                            city: "Toronto",
                            averagePrice: 120,
                            propertyCount: 76,
                            imageUrl: "./img/toronto.jpg",
                            imageAlt: "Toronto skyline"
                        }, {
                            city: "Malibu",
                            averagePrice: 215,
                            propertyCount: 43,
                            imageUrl: "./img/malibu.jpg",
                            imageAlt: "Cliff in Malibu"
                        }, {
                            city: "Chicago",
                            averagePrice: 130,
                            propertyCount: 115,
                            imageUrl: "./img/chicago.jpg",
                            imageAlt: "Chicago skyline"
                        }, {
                            city: "Seattle",
                            averagePrice: 135,
                            propertyCount: 63,
                            imageUrl: "./img/seattle.jpg",
                            imageAlt: "Seattle skyline"
                        }, {
                            city: "Colorado",
                            averagePrice: 85,
                            propertyCount: 47,
                            imageUrl: "./img/colorado.jpg",
                            imageAlt: "Lake in Colorado"
                        }, {
                            city: "Miami",
                            averagePrice: 115,
                            propertyCount: 86,
                            imageUrl: "./img/miami.jpg",
                            imageAlt: "Beach in Miami"
                        }]
                    }
                }
            },
            d = m,
            f = Object(u["a"])(d, r, n, !1, null, null, null),
            x = f.exports;
        a("def6");
        i["a"].config.productionTip = !1, new i["a"]({
            render: function (t) {
                return t(x)
            }
        }).$mount("#app")
    },
    def6: function (t, e, a) {}
});
//# sourceMappingURL=app.c58c1661.js.map