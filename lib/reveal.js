/*!
 * reveal.js 4.4.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Reveal =
        t());
})(this, function () {
  "use strict";
  var e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    t = function (e) {
      return e && e.Math == Math && e;
    },
    n =
      t("object" == typeof globalThis && globalThis) ||
      t("object" == typeof window && window) ||
      t("object" == typeof self && self) ||
      t("object" == typeof e && e) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    i = {},
    r = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    a = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    o = {},
    s = {}.propertyIsEnumerable,
    l = Object.getOwnPropertyDescriptor,
    u = l && !s.call({ 1: 2 }, 1);
  o.f = u
    ? function (e) {
        var t = l(this, e);
        return !!t && t.enumerable;
      }
    : s;
  var c = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    },
    d = {}.toString,
    h = function (e) {
      return d.call(e).slice(8, -1);
    },
    f = h,
    v = "".split,
    p = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == f(e) ? v.call(e, "") : Object(e);
        }
      : Object,
    g = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    m = p,
    y = g,
    b = function (e) {
      return m(y(e));
    },
    w = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    S = w,
    E = function (e, t) {
      if (!S(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !S((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !S((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !S((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    },
    k = g,
    A = function (e) {
      return Object(k(e));
    },
    R = A,
    x = {}.hasOwnProperty,
    L = function (e, t) {
      return x.call(R(e), t);
    },
    P = w,
    C = n.document,
    N = P(C) && P(C.createElement),
    I = function (e) {
      return N ? C.createElement(e) : {};
    },
    T = I,
    M =
      !a &&
      !r(function () {
        return (
          7 !=
          Object.defineProperty(T("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    O = a,
    j = o,
    D = c,
    F = b,
    z = E,
    H = L,
    U = M,
    _ = Object.getOwnPropertyDescriptor;
  i.f = O
    ? _
    : function (e, t) {
        if (((e = F(e)), (t = z(t, !0)), U))
          try {
            return _(e, t);
          } catch (e) {}
        if (H(e, t)) return D(!j.f.call(e, t), e[t]);
      };
  var B = {},
    q = w,
    W = function (e) {
      if (!q(e)) throw TypeError(String(e) + " is not an object");
      return e;
    },
    K = a,
    V = M,
    Y = W,
    G = E,
    X = Object.defineProperty;
  B.f = K
    ? X
    : function (e, t, n) {
        if ((Y(e), (t = G(t, !0)), Y(n), V))
          try {
            return X(e, t, n);
          } catch (e) {}
        if ("get" in n || "set" in n)
          throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e;
      };
  var $ = B,
    J = c,
    Q = a
      ? function (e, t, n) {
          return $.f(e, t, J(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    Z = { exports: {} },
    ee = n,
    te = Q,
    ne = function (e, t) {
      try {
        te(ee, e, t);
      } catch (n) {
        ee[e] = t;
      }
      return t;
    },
    ie = ne,
    re = "__core-js_shared__",
    ae = n[re] || ie(re, {}),
    oe = ae,
    se = Function.toString;
  "function" != typeof oe.inspectSource &&
    (oe.inspectSource = function (e) {
      return se.call(e);
    });
  var le = oe.inspectSource,
    ue = le,
    ce = n.WeakMap,
    de = "function" == typeof ce && /native code/.test(ue(ce)),
    he = { exports: {} },
    fe = ae;
  (he.exports = function (e, t) {
    return fe[e] || (fe[e] = void 0 !== t ? t : {});
  })("versions", []).push({
    version: "3.12.1",
    mode: "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
  });
  var ve,
    pe,
    ge,
    me = 0,
    ye = Math.random(),
    be = function (e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++me + ye).toString(36)
      );
    },
    we = he.exports,
    Se = be,
    Ee = we("keys"),
    ke = function (e) {
      return Ee[e] || (Ee[e] = Se(e));
    },
    Ae = {},
    Re = de,
    xe = w,
    Le = Q,
    Pe = L,
    Ce = ae,
    Ne = ke,
    Ie = Ae,
    Te = "Object already initialized",
    Me = n.WeakMap;
  if (Re || Ce.state) {
    var Oe = Ce.state || (Ce.state = new Me()),
      je = Oe.get,
      De = Oe.has,
      Fe = Oe.set;
    (ve = function (e, t) {
      if (De.call(Oe, e)) throw new TypeError(Te);
      return (t.facade = e), Fe.call(Oe, e, t), t;
    }),
      (pe = function (e) {
        return je.call(Oe, e) || {};
      }),
      (ge = function (e) {
        return De.call(Oe, e);
      });
  } else {
    var ze = Ne("state");
    (Ie[ze] = !0),
      (ve = function (e, t) {
        if (Pe(e, ze)) throw new TypeError(Te);
        return (t.facade = e), Le(e, ze, t), t;
      }),
      (pe = function (e) {
        return Pe(e, ze) ? e[ze] : {};
      }),
      (ge = function (e) {
        return Pe(e, ze);
      });
  }
  var He = {
      set: ve,
      get: pe,
      has: ge,
      enforce: function (e) {
        return ge(e) ? pe(e) : ve(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!xe(t) || (n = pe(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    },
    Ue = n,
    _e = Q,
    Be = L,
    qe = ne,
    We = le,
    Ke = He.get,
    Ve = He.enforce,
    Ye = String(String).split("String");
  (Z.exports = function (e, t, n, i) {
    var r,
      a = !!i && !!i.unsafe,
      o = !!i && !!i.enumerable,
      s = !!i && !!i.noTargetGet;
    "function" == typeof n &&
      ("string" != typeof t || Be(n, "name") || _e(n, "name", t),
      (r = Ve(n)).source ||
        (r.source = Ye.join("string" == typeof t ? t : ""))),
      e !== Ue
        ? (a ? !s && e[t] && (o = !0) : delete e[t],
          o ? (e[t] = n) : _e(e, t, n))
        : o
        ? (e[t] = n)
        : qe(t, n);
  })(Function.prototype, "toString", function () {
    return ("function" == typeof this && Ke(this).source) || We(this);
  });
  var Ge = n,
    Xe = Ge,
    $e = n,
    Je = function (e) {
      return "function" == typeof e ? e : void 0;
    },
    Qe = function (e, t) {
      return arguments.length < 2
        ? Je(Xe[e]) || Je($e[e])
        : (Xe[e] && Xe[e][t]) || ($e[e] && $e[e][t]);
    },
    Ze = {},
    et = Math.ceil,
    tt = Math.floor,
    nt = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? tt : et)(e);
    },
    it = nt,
    rt = Math.min,
    at = function (e) {
      return e > 0 ? rt(it(e), 9007199254740991) : 0;
    },
    ot = nt,
    st = Math.max,
    lt = Math.min,
    ut = function (e, t) {
      var n = ot(e);
      return n < 0 ? st(n + t, 0) : lt(n, t);
    },
    ct = b,
    dt = at,
    ht = ut,
    ft = function (e) {
      return function (t, n, i) {
        var r,
          a = ct(t),
          o = dt(a.length),
          s = ht(i, o);
        if (e && n != n) {
          for (; o > s; ) if ((r = a[s++]) != r) return !0;
        } else
          for (; o > s; s++)
            if ((e || s in a) && a[s] === n) return e || s || 0;
        return !e && -1;
      };
    },
    vt = { includes: ft(!0), indexOf: ft(!1) },
    pt = L,
    gt = b,
    mt = vt.indexOf,
    yt = Ae,
    bt = function (e, t) {
      var n,
        i = gt(e),
        r = 0,
        a = [];
      for (n in i) !pt(yt, n) && pt(i, n) && a.push(n);
      for (; t.length > r; ) pt(i, (n = t[r++])) && (~mt(a, n) || a.push(n));
      return a;
    },
    wt = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    St = bt,
    Et = wt.concat("length", "prototype");
  Ze.f =
    Object.getOwnPropertyNames ||
    function (e) {
      return St(e, Et);
    };
  var kt = {};
  kt.f = Object.getOwnPropertySymbols;
  var At = Ze,
    Rt = kt,
    xt = W,
    Lt =
      Qe("Reflect", "ownKeys") ||
      function (e) {
        var t = At.f(xt(e)),
          n = Rt.f;
        return n ? t.concat(n(e)) : t;
      },
    Pt = L,
    Ct = Lt,
    Nt = i,
    It = B,
    Tt = function (e, t) {
      for (var n = Ct(t), i = It.f, r = Nt.f, a = 0; a < n.length; a++) {
        var o = n[a];
        Pt(e, o) || i(e, o, r(t, o));
      }
    },
    Mt = r,
    Ot = /#|\.prototype\./,
    jt = function (e, t) {
      var n = Ft[Dt(e)];
      return n == Ht || (n != zt && ("function" == typeof t ? Mt(t) : !!t));
    },
    Dt = (jt.normalize = function (e) {
      return String(e).replace(Ot, ".").toLowerCase();
    }),
    Ft = (jt.data = {}),
    zt = (jt.NATIVE = "N"),
    Ht = (jt.POLYFILL = "P"),
    Ut = jt,
    _t = n,
    Bt = i.f,
    qt = Q,
    Wt = Z.exports,
    Kt = ne,
    Vt = Tt,
    Yt = Ut,
    Gt = function (e, t) {
      var n,
        i,
        r,
        a,
        o,
        s = e.target,
        l = e.global,
        u = e.stat;
      if ((n = l ? _t : u ? _t[s] || Kt(s, {}) : (_t[s] || {}).prototype))
        for (i in t) {
          if (
            ((a = t[i]),
            (r = e.noTargetGet ? (o = Bt(n, i)) && o.value : n[i]),
            !Yt(l ? i : s + (u ? "." : "#") + i, e.forced) && void 0 !== r)
          ) {
            if (typeof a == typeof r) continue;
            Vt(a, r);
          }
          (e.sham || (r && r.sham)) && qt(a, "sham", !0), Wt(n, i, a, e);
        }
    },
    Xt = bt,
    $t = wt,
    Jt =
      Object.keys ||
      function (e) {
        return Xt(e, $t);
      },
    Qt = a,
    Zt = r,
    en = Jt,
    tn = kt,
    nn = o,
    rn = A,
    an = p,
    on = Object.assign,
    sn = Object.defineProperty,
    ln =
      !on ||
      Zt(function () {
        if (
          Qt &&
          1 !==
            on(
              { b: 1 },
              on(
                sn({}, "a", {
                  enumerable: !0,
                  get: function () {
                    sn(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var e = {},
          t = {},
          n = Symbol(),
          i = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          i.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != on({}, e)[n] || en(on({}, t)).join("") != i
        );
      })
        ? function (e, t) {
            for (
              var n = rn(e), i = arguments.length, r = 1, a = tn.f, o = nn.f;
              i > r;

            )
              for (
                var s,
                  l = an(arguments[r++]),
                  u = a ? en(l).concat(a(l)) : en(l),
                  c = u.length,
                  d = 0;
                c > d;

              )
                (s = u[d++]), (Qt && !o.call(l, s)) || (n[s] = l[s]);
            return n;
          }
        : on,
    un = ln;
  Gt(
    { target: "Object", stat: !0, forced: Object.assign !== un },
    { assign: un }
  );
  var cn,
    dn,
    hn = function (e) {
      if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function");
      return e;
    },
    fn = hn,
    vn = function (e, t, n) {
      if ((fn(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function (n, i, r) {
            return e.call(t, n, i, r);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    pn = h,
    gn =
      Array.isArray ||
      function (e) {
        return "Array" == pn(e);
      },
    mn = Qe("navigator", "userAgent") || "",
    yn = mn,
    bn = n.process,
    wn = bn && bn.versions,
    Sn = wn && wn.v8;
  Sn
    ? (dn = (cn = Sn.split("."))[0] < 4 ? 1 : cn[0] + cn[1])
    : yn &&
      (!(cn = yn.match(/Edge\/(\d+)/)) || cn[1] >= 74) &&
      (cn = yn.match(/Chrome\/(\d+)/)) &&
      (dn = cn[1]);
  var En = dn && +dn,
    kn = En,
    An = r,
    Rn =
      !!Object.getOwnPropertySymbols &&
      !An(function () {
        return !String(Symbol()) || (!Symbol.sham && kn && kn < 41);
      }),
    xn = Rn && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Ln = n,
    Pn = he.exports,
    Cn = L,
    Nn = be,
    In = Rn,
    Tn = xn,
    Mn = Pn("wks"),
    On = Ln.Symbol,
    jn = Tn ? On : (On && On.withoutSetter) || Nn,
    Dn = function (e) {
      return (
        (Cn(Mn, e) && (In || "string" == typeof Mn[e])) ||
          (In && Cn(On, e) ? (Mn[e] = On[e]) : (Mn[e] = jn("Symbol." + e))),
        Mn[e]
      );
    },
    Fn = w,
    zn = gn,
    Hn = Dn("species"),
    Un = function (e, t) {
      var n;
      return (
        zn(e) &&
          ("function" != typeof (n = e.constructor) ||
          (n !== Array && !zn(n.prototype))
            ? Fn(n) && null === (n = n[Hn]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    },
    _n = vn,
    Bn = p,
    qn = A,
    Wn = at,
    Kn = Un,
    Vn = [].push,
    Yn = function (e) {
      var t = 1 == e,
        n = 2 == e,
        i = 3 == e,
        r = 4 == e,
        a = 6 == e,
        o = 7 == e,
        s = 5 == e || a;
      return function (l, u, c, d) {
        for (
          var h,
            f,
            v = qn(l),
            p = Bn(v),
            g = _n(u, c, 3),
            m = Wn(p.length),
            y = 0,
            b = d || Kn,
            w = t ? b(l, m) : n || o ? b(l, 0) : void 0;
          m > y;
          y++
        )
          if ((s || y in p) && ((f = g((h = p[y]), y, v)), e))
            if (t) w[y] = f;
            else if (f)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return h;
                case 6:
                  return y;
                case 2:
                  Vn.call(w, h);
              }
            else
              switch (e) {
                case 4:
                  return !1;
                case 7:
                  Vn.call(w, h);
              }
        return a ? -1 : i || r ? r : w;
      };
    },
    Gn = {
      forEach: Yn(0),
      map: Yn(1),
      filter: Yn(2),
      some: Yn(3),
      every: Yn(4),
      find: Yn(5),
      findIndex: Yn(6),
      filterOut: Yn(7),
    },
    Xn = r,
    $n = En,
    Jn = Dn("species"),
    Qn = function (e) {
      return (
        $n >= 51 ||
        !Xn(function () {
          var t = [];
          return (
            ((t.constructor = {})[Jn] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    },
    Zn = Gn.map;
  Gt(
    { target: "Array", proto: !0, forced: !Qn("map") },
    {
      map: function (e) {
        return Zn(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var ei = E,
    ti = B,
    ni = c,
    ii = function (e, t, n) {
      var i = ei(t);
      i in e ? ti.f(e, i, ni(0, n)) : (e[i] = n);
    },
    ri = Gt,
    ai = r,
    oi = gn,
    si = w,
    li = A,
    ui = at,
    ci = ii,
    di = Un,
    hi = Qn,
    fi = En,
    vi = Dn("isConcatSpreadable"),
    pi = 9007199254740991,
    gi = "Maximum allowed index exceeded",
    mi =
      fi >= 51 ||
      !ai(function () {
        var e = [];
        return (e[vi] = !1), e.concat()[0] !== e;
      }),
    yi = hi("concat"),
    bi = function (e) {
      if (!si(e)) return !1;
      var t = e[vi];
      return void 0 !== t ? !!t : oi(e);
    };
  function wi(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function Si(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? wi(Object(n), !0).forEach(function (t) {
            Li(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Ei(e) {
    return (
      (Ei =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      Ei(e)
    );
  }
  function ki(e, t, n, i, r, a, o) {
    try {
      var s = e[a](o),
        l = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(i, r);
  }
  function Ai(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Ri(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function xi(e, t, n) {
    return t && Ri(e.prototype, t), n && Ri(e, n), e;
  }
  function Li(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Pi(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Ci(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Ci(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return Ci(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Ci(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  ri(
    { target: "Array", proto: !0, forced: !mi || !yi },
    {
      concat: function (e) {
        var t,
          n,
          i,
          r,
          a,
          o = li(this),
          s = di(o, 0),
          l = 0;
        for (t = -1, i = arguments.length; t < i; t++)
          if (bi((a = -1 === t ? o : arguments[t]))) {
            if (l + (r = ui(a.length)) > pi) throw TypeError(gi);
            for (n = 0; n < r; n++, l++) n in a && ci(s, l, a[n]);
          } else {
            if (l >= pi) throw TypeError(gi);
            ci(s, l++, a);
          }
        return (s.length = l), s;
      },
    }
  );
  var Ni = {};
  Ni[Dn("toStringTag")] = "z";
  var Ii = "[object z]" === String(Ni),
    Ti = Ii,
    Mi = h,
    Oi = Dn("toStringTag"),
    ji =
      "Arguments" ==
      Mi(
        (function () {
          return arguments;
        })()
      ),
    Di = Ti
      ? Mi
      : function (e) {
          var t, n, i;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), Oi))
            ? n
            : ji
            ? Mi(t)
            : "Object" == (i = Mi(t)) && "function" == typeof t.callee
            ? "Arguments"
            : i;
        },
    Fi = Di,
    zi = Ii
      ? {}.toString
      : function () {
          return "[object " + Fi(this) + "]";
        },
    Hi = Ii,
    Ui = Z.exports,
    _i = zi;
  Hi || Ui(Object.prototype, "toString", _i, { unsafe: !0 });
  var Bi = n.Promise,
    qi = Z.exports,
    Wi = w,
    Ki = W,
    Vi = function (e) {
      if (!Wi(e) && null !== e)
        throw TypeError("Can't set " + String(e) + " as a prototype");
      return e;
    },
    Yi =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, i) {
              return Ki(n), Vi(i), t ? e.call(n, i) : (n.__proto__ = i), n;
            };
          })()
        : void 0),
    Gi = B.f,
    Xi = L,
    $i = Dn("toStringTag"),
    Ji = function (e, t, n) {
      e &&
        !Xi((e = n ? e : e.prototype), $i) &&
        Gi(e, $i, { configurable: !0, value: t });
    },
    Qi = Qe,
    Zi = B,
    er = a,
    tr = Dn("species"),
    nr = function (e) {
      var t = Qi(e),
        n = Zi.f;
      er &&
        t &&
        !t[tr] &&
        n(t, tr, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    ir = {},
    rr = ir,
    ar = Dn("iterator"),
    or = Array.prototype,
    sr = function (e) {
      return void 0 !== e && (rr.Array === e || or[ar] === e);
    },
    lr = Di,
    ur = ir,
    cr = Dn("iterator"),
    dr = function (e) {
      if (null != e) return e[cr] || e["@@iterator"] || ur[lr(e)];
    },
    hr = W,
    fr = function (e) {
      var t = e.return;
      if (void 0 !== t) return hr(t.call(e)).value;
    },
    vr = W,
    pr = sr,
    gr = at,
    mr = vn,
    yr = dr,
    br = fr,
    wr = function (e, t) {
      (this.stopped = e), (this.result = t);
    },
    Sr = Dn("iterator"),
    Er = !1;
  try {
    var kr = 0,
      Ar = {
        next: function () {
          return { done: !!kr++ };
        },
        return: function () {
          Er = !0;
        },
      };
    (Ar[Sr] = function () {
      return this;
    }),
      Array.from(Ar, function () {
        throw 2;
      });
  } catch (e) {}
  var Rr,
    xr,
    Lr,
    Pr = function (e, t) {
      if (!t && !Er) return !1;
      var n = !1;
      try {
        var i = {};
        (i[Sr] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(i);
      } catch (e) {}
      return n;
    },
    Cr = W,
    Nr = hn,
    Ir = Dn("species"),
    Tr = function (e, t) {
      var n,
        i = Cr(e).constructor;
      return void 0 === i || null == (n = Cr(i)[Ir]) ? t : Nr(n);
    },
    Mr = Qe("document", "documentElement"),
    Or = /(?:iphone|ipod|ipad).*applewebkit/i.test(mn),
    jr = "process" == h(n.process),
    Dr = n,
    Fr = r,
    zr = vn,
    Hr = Mr,
    Ur = I,
    _r = Or,
    Br = jr,
    qr = Dr.location,
    Wr = Dr.setImmediate,
    Kr = Dr.clearImmediate,
    Vr = Dr.process,
    Yr = Dr.MessageChannel,
    Gr = Dr.Dispatch,
    Xr = 0,
    $r = {},
    Jr = "onreadystatechange",
    Qr = function (e) {
      if ($r.hasOwnProperty(e)) {
        var t = $r[e];
        delete $r[e], t();
      }
    },
    Zr = function (e) {
      return function () {
        Qr(e);
      };
    },
    ea = function (e) {
      Qr(e.data);
    },
    ta = function (e) {
      Dr.postMessage(e + "", qr.protocol + "//" + qr.host);
    };
  (Wr && Kr) ||
    ((Wr = function (e) {
      for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
      return (
        ($r[++Xr] = function () {
          ("function" == typeof e ? e : Function(e)).apply(void 0, t);
        }),
        Rr(Xr),
        Xr
      );
    }),
    (Kr = function (e) {
      delete $r[e];
    }),
    Br
      ? (Rr = function (e) {
          Vr.nextTick(Zr(e));
        })
      : Gr && Gr.now
      ? (Rr = function (e) {
          Gr.now(Zr(e));
        })
      : Yr && !_r
      ? ((Lr = (xr = new Yr()).port2),
        (xr.port1.onmessage = ea),
        (Rr = zr(Lr.postMessage, Lr, 1)))
      : Dr.addEventListener &&
        "function" == typeof postMessage &&
        !Dr.importScripts &&
        qr &&
        "file:" !== qr.protocol &&
        !Fr(ta)
      ? ((Rr = ta), Dr.addEventListener("message", ea, !1))
      : (Rr =
          Jr in Ur("script")
            ? function (e) {
                Hr.appendChild(Ur("script"))[Jr] = function () {
                  Hr.removeChild(this), Qr(e);
                };
              }
            : function (e) {
                setTimeout(Zr(e), 0);
              }));
  var na,
    ia,
    ra,
    aa,
    oa,
    sa,
    la,
    ua,
    ca = { set: Wr, clear: Kr },
    da = /web0s(?!.*chrome)/i.test(mn),
    ha = n,
    fa = i.f,
    va = ca.set,
    pa = Or,
    ga = da,
    ma = jr,
    ya = ha.MutationObserver || ha.WebKitMutationObserver,
    ba = ha.document,
    wa = ha.process,
    Sa = ha.Promise,
    Ea = fa(ha, "queueMicrotask"),
    ka = Ea && Ea.value;
  ka ||
    ((na = function () {
      var e, t;
      for (ma && (e = wa.domain) && e.exit(); ia; ) {
        (t = ia.fn), (ia = ia.next);
        try {
          t();
        } catch (e) {
          throw (ia ? aa() : (ra = void 0), e);
        }
      }
      (ra = void 0), e && e.enter();
    }),
    pa || ma || ga || !ya || !ba
      ? Sa && Sa.resolve
        ? (((la = Sa.resolve(void 0)).constructor = Sa),
          (ua = la.then),
          (aa = function () {
            ua.call(la, na);
          }))
        : (aa = ma
            ? function () {
                wa.nextTick(na);
              }
            : function () {
                va.call(ha, na);
              })
      : ((oa = !0),
        (sa = ba.createTextNode("")),
        new ya(na).observe(sa, { characterData: !0 }),
        (aa = function () {
          sa.data = oa = !oa;
        })));
  var Aa =
      ka ||
      function (e) {
        var t = { fn: e, next: void 0 };
        ra && (ra.next = t), ia || ((ia = t), aa()), (ra = t);
      },
    Ra = {},
    xa = hn,
    La = function (e) {
      var t, n;
      (this.promise = new e(function (e, i) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = i);
      })),
        (this.resolve = xa(t)),
        (this.reject = xa(n));
    };
  Ra.f = function (e) {
    return new La(e);
  };
  var Pa,
    Ca,
    Na,
    Ia,
    Ta = W,
    Ma = w,
    Oa = Ra,
    ja = n,
    Da = "object" == typeof window,
    Fa = Gt,
    za = n,
    Ha = Qe,
    Ua = Bi,
    _a = Z.exports,
    Ba = function (e, t, n) {
      for (var i in t) qi(e, i, t[i], n);
      return e;
    },
    qa = Yi,
    Wa = Ji,
    Ka = nr,
    Va = w,
    Ya = hn,
    Ga = function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    },
    Xa = le,
    $a = function (e, t, n) {
      var i,
        r,
        a,
        o,
        s,
        l,
        u,
        c = n && n.that,
        d = !(!n || !n.AS_ENTRIES),
        h = !(!n || !n.IS_ITERATOR),
        f = !(!n || !n.INTERRUPTED),
        v = mr(t, c, 1 + d + f),
        p = function (e) {
          return i && br(i), new wr(!0, e);
        },
        g = function (e) {
          return d
            ? (vr(e), f ? v(e[0], e[1], p) : v(e[0], e[1]))
            : f
            ? v(e, p)
            : v(e);
        };
      if (h) i = e;
      else {
        if ("function" != typeof (r = yr(e)))
          throw TypeError("Target is not iterable");
        if (pr(r)) {
          for (a = 0, o = gr(e.length); o > a; a++)
            if ((s = g(e[a])) && s instanceof wr) return s;
          return new wr(!1);
        }
        i = r.call(e);
      }
      for (l = i.next; !(u = l.call(i)).done; ) {
        try {
          s = g(u.value);
        } catch (e) {
          throw (br(i), e);
        }
        if ("object" == typeof s && s && s instanceof wr) return s;
      }
      return new wr(!1);
    },
    Ja = Pr,
    Qa = Tr,
    Za = ca.set,
    eo = Aa,
    to = function (e, t) {
      if ((Ta(e), Ma(t) && t.constructor === e)) return t;
      var n = Oa.f(e);
      return (0, n.resolve)(t), n.promise;
    },
    no = function (e, t) {
      var n = ja.console;
      n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
    },
    io = Ra,
    ro = function (e) {
      try {
        return { error: !1, value: e() };
      } catch (e) {
        return { error: !0, value: e };
      }
    },
    ao = He,
    oo = Ut,
    so = Da,
    lo = jr,
    uo = En,
    co = Dn("species"),
    ho = "Promise",
    fo = ao.get,
    vo = ao.set,
    po = ao.getterFor(ho),
    go = Ua && Ua.prototype,
    mo = Ua,
    yo = go,
    bo = za.TypeError,
    wo = za.document,
    So = za.process,
    Eo = io.f,
    ko = Eo,
    Ao = !!(wo && wo.createEvent && za.dispatchEvent),
    Ro = "function" == typeof PromiseRejectionEvent,
    xo = "unhandledrejection",
    Lo = !1,
    Po = oo(ho, function () {
      var e = Xa(mo) !== String(mo);
      if (!e && 66 === uo) return !0;
      if (uo >= 51 && /native code/.test(mo)) return !1;
      var t = new mo(function (e) {
          e(1);
        }),
        n = function (e) {
          e(
            function () {},
            function () {}
          );
        };
      return (
        ((t.constructor = {})[co] = n),
        !(Lo = t.then(function () {}) instanceof n) || (!e && so && !Ro)
      );
    }),
    Co =
      Po ||
      !Ja(function (e) {
        mo.all(e).catch(function () {});
      }),
    No = function (e) {
      var t;
      return !(!Va(e) || "function" != typeof (t = e.then)) && t;
    },
    Io = function (e, t) {
      if (!e.notified) {
        e.notified = !0;
        var n = e.reactions;
        eo(function () {
          for (var i = e.value, r = 1 == e.state, a = 0; n.length > a; ) {
            var o,
              s,
              l,
              u = n[a++],
              c = r ? u.ok : u.fail,
              d = u.resolve,
              h = u.reject,
              f = u.domain;
            try {
              c
                ? (r || (2 === e.rejection && jo(e), (e.rejection = 1)),
                  !0 === c
                    ? (o = i)
                    : (f && f.enter(), (o = c(i)), f && (f.exit(), (l = !0))),
                  o === u.promise
                    ? h(bo("Promise-chain cycle"))
                    : (s = No(o))
                    ? s.call(o, d, h)
                    : d(o))
                : h(i);
            } catch (e) {
              f && !l && f.exit(), h(e);
            }
          }
          (e.reactions = []), (e.notified = !1), t && !e.rejection && Mo(e);
        });
      }
    },
    To = function (e, t, n) {
      var i, r;
      Ao
        ? (((i = wo.createEvent("Event")).promise = t),
          (i.reason = n),
          i.initEvent(e, !1, !0),
          za.dispatchEvent(i))
        : (i = { promise: t, reason: n }),
        !Ro && (r = za["on" + e])
          ? r(i)
          : e === xo && no("Unhandled promise rejection", n);
    },
    Mo = function (e) {
      Za.call(za, function () {
        var t,
          n = e.facade,
          i = e.value;
        if (
          Oo(e) &&
          ((t = ro(function () {
            lo ? So.emit("unhandledRejection", i, n) : To(xo, n, i);
          })),
          (e.rejection = lo || Oo(e) ? 2 : 1),
          t.error)
        )
          throw t.value;
      });
    },
    Oo = function (e) {
      return 1 !== e.rejection && !e.parent;
    },
    jo = function (e) {
      Za.call(za, function () {
        var t = e.facade;
        lo
          ? So.emit("rejectionHandled", t)
          : To("rejectionhandled", t, e.value);
      });
    },
    Do = function (e, t, n) {
      return function (i) {
        e(t, i, n);
      };
    },
    Fo = function (e, t, n) {
      e.done ||
        ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), Io(e, !0));
    },
    zo = function (e, t, n) {
      if (!e.done) {
        (e.done = !0), n && (e = n);
        try {
          if (e.facade === t) throw bo("Promise can't be resolved itself");
          var i = No(t);
          i
            ? eo(function () {
                var n = { done: !1 };
                try {
                  i.call(t, Do(zo, n, e), Do(Fo, n, e));
                } catch (t) {
                  Fo(n, t, e);
                }
              })
            : ((e.value = t), (e.state = 1), Io(e, !1));
        } catch (t) {
          Fo({ done: !1 }, t, e);
        }
      }
    };
  if (
    Po &&
    ((yo = (mo = function (e) {
      Ga(this, mo, ho), Ya(e), Pa.call(this);
      var t = fo(this);
      try {
        e(Do(zo, t), Do(Fo, t));
      } catch (e) {
        Fo(t, e);
      }
    }).prototype),
    ((Pa = function (e) {
      vo(this, {
        type: ho,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      });
    }).prototype = Ba(yo, {
      then: function (e, t) {
        var n = po(this),
          i = Eo(Qa(this, mo));
        return (
          (i.ok = "function" != typeof e || e),
          (i.fail = "function" == typeof t && t),
          (i.domain = lo ? So.domain : void 0),
          (n.parent = !0),
          n.reactions.push(i),
          0 != n.state && Io(n, !1),
          i.promise
        );
      },
      catch: function (e) {
        return this.then(void 0, e);
      },
    })),
    (Ca = function () {
      var e = new Pa(),
        t = fo(e);
      (this.promise = e), (this.resolve = Do(zo, t)), (this.reject = Do(Fo, t));
    }),
    (io.f = Eo =
      function (e) {
        return e === mo || e === Na ? new Ca(e) : ko(e);
      }),
    "function" == typeof Ua && go !== Object.prototype)
  ) {
    (Ia = go.then),
      Lo ||
        (_a(
          go,
          "then",
          function (e, t) {
            var n = this;
            return new mo(function (e, t) {
              Ia.call(n, e, t);
            }).then(e, t);
          },
          { unsafe: !0 }
        ),
        _a(go, "catch", yo.catch, { unsafe: !0 }));
    try {
      delete go.constructor;
    } catch (e) {}
    qa && qa(go, yo);
  }
  Fa({ global: !0, wrap: !0, forced: Po }, { Promise: mo }),
    Wa(mo, ho, !1),
    Ka(ho),
    (Na = Ha(ho)),
    Fa(
      { target: ho, stat: !0, forced: Po },
      {
        reject: function (e) {
          var t = Eo(this);
          return t.reject.call(void 0, e), t.promise;
        },
      }
    ),
    Fa(
      { target: ho, stat: !0, forced: Po },
      {
        resolve: function (e) {
          return to(this, e);
        },
      }
    ),
    Fa(
      { target: ho, stat: !0, forced: Co },
      {
        all: function (e) {
          var t = this,
            n = Eo(t),
            i = n.resolve,
            r = n.reject,
            a = ro(function () {
              var n = Ya(t.resolve),
                a = [],
                o = 0,
                s = 1;
              $a(e, function (e) {
                var l = o++,
                  u = !1;
                a.push(void 0),
                  s++,
                  n.call(t, e).then(function (e) {
                    u || ((u = !0), (a[l] = e), --s || i(a));
                  }, r);
              }),
                --s || i(a);
            });
          return a.error && r(a.value), n.promise;
        },
        race: function (e) {
          var t = this,
            n = Eo(t),
            i = n.reject,
            r = ro(function () {
              var r = Ya(t.resolve);
              $a(e, function (e) {
                r.call(t, e).then(n.resolve, i);
              });
            });
          return r.error && i(r.value), n.promise;
        },
      }
    );
  var Ho = r,
    Uo = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        Ho(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    _o = Gn.forEach,
    Bo = Uo("forEach")
      ? [].forEach
      : function (e) {
          return _o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    qo = n,
    Wo = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    Ko = Bo,
    Vo = Q;
  for (var Yo in Wo) {
    var Go = qo[Yo],
      Xo = Go && Go.prototype;
    if (Xo && Xo.forEach !== Ko)
      try {
        Vo(Xo, "forEach", Ko);
      } catch (e) {
        Xo.forEach = Ko;
      }
  }
  var $o = W,
    Jo = fr,
    Qo = vn,
    Zo = A,
    es = function (e, t, n, i) {
      try {
        return i ? t($o(n)[0], n[1]) : t(n);
      } catch (t) {
        throw (Jo(e), t);
      }
    },
    ts = sr,
    ns = at,
    is = ii,
    rs = dr,
    as = function (e) {
      var t,
        n,
        i,
        r,
        a,
        o,
        s = Zo(e),
        l = "function" == typeof this ? this : Array,
        u = arguments.length,
        c = u > 1 ? arguments[1] : void 0,
        d = void 0 !== c,
        h = rs(s),
        f = 0;
      if (
        (d && (c = Qo(c, u > 2 ? arguments[2] : void 0, 2)),
        null == h || (l == Array && ts(h)))
      )
        for (n = new l((t = ns(s.length))); t > f; f++)
          (o = d ? c(s[f], f) : s[f]), is(n, f, o);
      else
        for (a = (r = h.call(s)).next, n = new l(); !(i = a.call(r)).done; f++)
          (o = d ? es(r, c, [i.value, f], !0) : i.value), is(n, f, o);
      return (n.length = f), n;
    };
  Gt(
    {
      target: "Array",
      stat: !0,
      forced: !Pr(function (e) {
        Array.from(e);
      }),
    },
    { from: as }
  );
  var os,
    ss,
    ls,
    us = nt,
    cs = g,
    ds = function (e) {
      return function (t, n) {
        var i,
          r,
          a = String(cs(t)),
          o = us(n),
          s = a.length;
        return o < 0 || o >= s
          ? e
            ? ""
            : void 0
          : (i = a.charCodeAt(o)) < 55296 ||
            i > 56319 ||
            o + 1 === s ||
            (r = a.charCodeAt(o + 1)) < 56320 ||
            r > 57343
          ? e
            ? a.charAt(o)
            : i
          : e
          ? a.slice(o, o + 2)
          : r - 56320 + ((i - 55296) << 10) + 65536;
      };
    },
    hs = { codeAt: ds(!1), charAt: ds(!0) },
    fs = !r(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    }),
    vs = L,
    ps = A,
    gs = fs,
    ms = ke("IE_PROTO"),
    ys = Object.prototype,
    bs = gs
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = ps(e)),
            vs(e, ms)
              ? e[ms]
              : "function" == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? ys
              : null
          );
        },
    ws = r,
    Ss = bs,
    Es = Q,
    ks = L,
    As = Dn("iterator"),
    Rs = !1;
  [].keys &&
    ("next" in (ls = [].keys())
      ? (ss = Ss(Ss(ls))) !== Object.prototype && (os = ss)
      : (Rs = !0));
  var xs =
    null == os ||
    ws(function () {
      var e = {};
      return os[As].call(e) !== e;
    });
  xs && (os = {}),
    ks(os, As) ||
      Es(os, As, function () {
        return this;
      });
  var Ls,
    Ps = { IteratorPrototype: os, BUGGY_SAFARI_ITERATORS: Rs },
    Cs = B,
    Ns = W,
    Is = Jt,
    Ts = a
      ? Object.defineProperties
      : function (e, t) {
          Ns(e);
          for (var n, i = Is(t), r = i.length, a = 0; r > a; )
            Cs.f(e, (n = i[a++]), t[n]);
          return e;
        },
    Ms = W,
    Os = Ts,
    js = wt,
    Ds = Ae,
    Fs = Mr,
    zs = I,
    Hs = "prototype",
    Us = "script",
    _s = ke("IE_PROTO"),
    Bs = function () {},
    qs = function (e) {
      return "<" + Us + ">" + e + "</" + Us + ">";
    },
    Ws = function () {
      try {
        Ls = document.domain && new ActiveXObject("htmlfile");
      } catch (e) {}
      var e, t, n;
      Ws = Ls
        ? (function (e) {
            e.write(qs("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          })(Ls)
        : ((t = zs("iframe")),
          (n = "java" + Us + ":"),
          (t.style.display = "none"),
          Fs.appendChild(t),
          (t.src = String(n)),
          (e = t.contentWindow.document).open(),
          e.write(qs("document.F=Object")),
          e.close(),
          e.F);
      for (var i = js.length; i--; ) delete Ws[Hs][js[i]];
      return Ws();
    };
  Ds[_s] = !0;
  var Ks =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((Bs[Hs] = Ms(e)), (n = new Bs()), (Bs[Hs] = null), (n[_s] = e))
            : (n = Ws()),
          void 0 === t ? n : Os(n, t)
        );
      },
    Vs = Ps.IteratorPrototype,
    Ys = Ks,
    Gs = c,
    Xs = Ji,
    $s = ir,
    Js = function () {
      return this;
    },
    Qs = Gt,
    Zs = function (e, t, n) {
      var i = t + " Iterator";
      return (
        (e.prototype = Ys(Vs, { next: Gs(1, n) })),
        Xs(e, i, !1),
        ($s[i] = Js),
        e
      );
    },
    el = bs,
    tl = Yi,
    nl = Ji,
    il = Q,
    rl = Z.exports,
    al = ir,
    ol = Ps.IteratorPrototype,
    sl = Ps.BUGGY_SAFARI_ITERATORS,
    ll = Dn("iterator"),
    ul = "keys",
    cl = "values",
    dl = "entries",
    hl = function () {
      return this;
    },
    fl = hs.charAt,
    vl = He,
    pl = function (e, t, n, i, r, a, o) {
      Zs(n, t, i);
      var s,
        l,
        u,
        c = function (e) {
          if (e === r && p) return p;
          if (!sl && e in f) return f[e];
          switch (e) {
            case ul:
            case cl:
            case dl:
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        d = t + " Iterator",
        h = !1,
        f = e.prototype,
        v = f[ll] || f["@@iterator"] || (r && f[r]),
        p = (!sl && v) || c(r),
        g = ("Array" == t && f.entries) || v;
      if (
        (g &&
          ((s = el(g.call(new e()))),
          ol !== Object.prototype &&
            s.next &&
            (el(s) !== ol &&
              (tl ? tl(s, ol) : "function" != typeof s[ll] && il(s, ll, hl)),
            nl(s, d, !0))),
        r == cl &&
          v &&
          v.name !== cl &&
          ((h = !0),
          (p = function () {
            return v.call(this);
          })),
        f[ll] !== p && il(f, ll, p),
        (al[t] = p),
        r)
      )
        if (((l = { values: c(cl), keys: a ? p : c(ul), entries: c(dl) }), o))
          for (u in l) (sl || h || !(u in f)) && rl(f, u, l[u]);
        else Qs({ target: t, proto: !0, forced: sl || h }, l);
      return l;
    },
    gl = "String Iterator",
    ml = vl.set,
    yl = vl.getterFor(gl);
  pl(
    String,
    "String",
    function (e) {
      ml(this, { type: gl, string: String(e), index: 0 });
    },
    function () {
      var e,
        t = yl(this),
        n = t.string,
        i = t.index;
      return i >= n.length
        ? { value: void 0, done: !0 }
        : ((e = fl(n, i)), (t.index += e.length), { value: e, done: !1 });
    }
  );
  var bl = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    wl = g,
    Sl = "[" + bl + "]",
    El = RegExp("^" + Sl + Sl + "*"),
    kl = RegExp(Sl + Sl + "*$"),
    Al = function (e) {
      return function (t) {
        var n = String(wl(t));
        return (
          1 & e && (n = n.replace(El, "")), 2 & e && (n = n.replace(kl, "")), n
        );
      };
    },
    Rl = { start: Al(1), end: Al(2), trim: Al(3) },
    xl = r,
    Ll = bl,
    Pl = Rl.trim;
  Gt(
    {
      target: "String",
      proto: !0,
      forced: (function (e) {
        return xl(function () {
          return !!Ll[e]() || "​᠎" != "​᠎"[e]() || Ll[e].name !== e;
        });
      })("trim"),
    },
    {
      trim: function () {
        return Pl(this);
      },
    }
  );
  var Cl = {},
    Nl = b,
    Il = Ze.f,
    Tl = {}.toString,
    Ml =
      "object" == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [];
  Cl.f = function (e) {
    return Ml && "[object Window]" == Tl.call(e)
      ? (function (e) {
          try {
            return Il(e);
          } catch (e) {
            return Ml.slice();
          }
        })(e)
      : Il(Nl(e));
  };
  var Ol = {},
    jl = Dn;
  Ol.f = jl;
  var Dl = Ge,
    Fl = L,
    zl = Ol,
    Hl = B.f,
    Ul = Gt,
    _l = n,
    Bl = Qe,
    ql = a,
    Wl = Rn,
    Kl = xn,
    Vl = r,
    Yl = L,
    Gl = gn,
    Xl = w,
    $l = W,
    Jl = A,
    Ql = b,
    Zl = E,
    eu = c,
    tu = Ks,
    nu = Jt,
    iu = Ze,
    ru = Cl,
    au = kt,
    ou = i,
    su = B,
    lu = o,
    uu = Q,
    cu = Z.exports,
    du = he.exports,
    hu = Ae,
    fu = be,
    vu = Dn,
    pu = Ol,
    gu = function (e) {
      var t = Dl.Symbol || (Dl.Symbol = {});
      Fl(t, e) || Hl(t, e, { value: zl.f(e) });
    },
    mu = Ji,
    yu = He,
    bu = Gn.forEach,
    wu = ke("hidden"),
    Su = "Symbol",
    Eu = "prototype",
    ku = vu("toPrimitive"),
    Au = yu.set,
    Ru = yu.getterFor(Su),
    xu = Object[Eu],
    Lu = _l.Symbol,
    Pu = Bl("JSON", "stringify"),
    Cu = ou.f,
    Nu = su.f,
    Iu = ru.f,
    Tu = lu.f,
    Mu = du("symbols"),
    Ou = du("op-symbols"),
    ju = du("string-to-symbol-registry"),
    Du = du("symbol-to-string-registry"),
    Fu = du("wks"),
    zu = _l.QObject,
    Hu = !zu || !zu[Eu] || !zu[Eu].findChild,
    Uu =
      ql &&
      Vl(function () {
        return (
          7 !=
          tu(
            Nu({}, "a", {
              get: function () {
                return Nu(this, "a", { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? function (e, t, n) {
            var i = Cu(xu, t);
            i && delete xu[t], Nu(e, t, n), i && e !== xu && Nu(xu, t, i);
          }
        : Nu,
    _u = function (e, t) {
      var n = (Mu[e] = tu(Lu[Eu]));
      return (
        Au(n, { type: Su, tag: e, description: t }),
        ql || (n.description = t),
        n
      );
    },
    Bu = Kl
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          return Object(e) instanceof Lu;
        },
    qu = function (e, t, n) {
      e === xu && qu(Ou, t, n), $l(e);
      var i = Zl(t, !0);
      return (
        $l(n),
        Yl(Mu, i)
          ? (n.enumerable
              ? (Yl(e, wu) && e[wu][i] && (e[wu][i] = !1),
                (n = tu(n, { enumerable: eu(0, !1) })))
              : (Yl(e, wu) || Nu(e, wu, eu(1, {})), (e[wu][i] = !0)),
            Uu(e, i, n))
          : Nu(e, i, n)
      );
    },
    Wu = function (e, t) {
      $l(e);
      var n = Ql(t),
        i = nu(n).concat(Gu(n));
      return (
        bu(i, function (t) {
          (ql && !Ku.call(n, t)) || qu(e, t, n[t]);
        }),
        e
      );
    },
    Ku = function (e) {
      var t = Zl(e, !0),
        n = Tu.call(this, t);
      return (
        !(this === xu && Yl(Mu, t) && !Yl(Ou, t)) &&
        (!(n || !Yl(this, t) || !Yl(Mu, t) || (Yl(this, wu) && this[wu][t])) ||
          n)
      );
    },
    Vu = function (e, t) {
      var n = Ql(e),
        i = Zl(t, !0);
      if (n !== xu || !Yl(Mu, i) || Yl(Ou, i)) {
        var r = Cu(n, i);
        return (
          !r || !Yl(Mu, i) || (Yl(n, wu) && n[wu][i]) || (r.enumerable = !0), r
        );
      }
    },
    Yu = function (e) {
      var t = Iu(Ql(e)),
        n = [];
      return (
        bu(t, function (e) {
          Yl(Mu, e) || Yl(hu, e) || n.push(e);
        }),
        n
      );
    },
    Gu = function (e) {
      var t = e === xu,
        n = Iu(t ? Ou : Ql(e)),
        i = [];
      return (
        bu(n, function (e) {
          !Yl(Mu, e) || (t && !Yl(xu, e)) || i.push(Mu[e]);
        }),
        i
      );
    };
  (Wl ||
    ((Lu = function () {
      if (this instanceof Lu) throw TypeError("Symbol is not a constructor");
      var e =
          arguments.length && void 0 !== arguments[0]
            ? String(arguments[0])
            : void 0,
        t = fu(e),
        n = function (e) {
          this === xu && n.call(Ou, e),
            Yl(this, wu) && Yl(this[wu], t) && (this[wu][t] = !1),
            Uu(this, t, eu(1, e));
        };
      return ql && Hu && Uu(xu, t, { configurable: !0, set: n }), _u(t, e);
    }),
    cu(Lu[Eu], "toString", function () {
      return Ru(this).tag;
    }),
    cu(Lu, "withoutSetter", function (e) {
      return _u(fu(e), e);
    }),
    (lu.f = Ku),
    (su.f = qu),
    (ou.f = Vu),
    (iu.f = ru.f = Yu),
    (au.f = Gu),
    (pu.f = function (e) {
      return _u(vu(e), e);
    }),
    ql &&
      (Nu(Lu[Eu], "description", {
        configurable: !0,
        get: function () {
          return Ru(this).description;
        },
      }),
      cu(xu, "propertyIsEnumerable", Ku, { unsafe: !0 }))),
  Ul({ global: !0, wrap: !0, forced: !Wl, sham: !Wl }, { Symbol: Lu }),
  bu(nu(Fu), function (e) {
    gu(e);
  }),
  Ul(
    { target: Su, stat: !0, forced: !Wl },
    {
      for: function (e) {
        var t = String(e);
        if (Yl(ju, t)) return ju[t];
        var n = Lu(t);
        return (ju[t] = n), (Du[n] = t), n;
      },
      keyFor: function (e) {
        if (!Bu(e)) throw TypeError(e + " is not a symbol");
        if (Yl(Du, e)) return Du[e];
      },
      useSetter: function () {
        Hu = !0;
      },
      useSimple: function () {
        Hu = !1;
      },
    }
  ),
  Ul(
    { target: "Object", stat: !0, forced: !Wl, sham: !ql },
    {
      create: function (e, t) {
        return void 0 === t ? tu(e) : Wu(tu(e), t);
      },
      defineProperty: qu,
      defineProperties: Wu,
      getOwnPropertyDescriptor: Vu,
    }
  ),
  Ul(
    { target: "Object", stat: !0, forced: !Wl },
    { getOwnPropertyNames: Yu, getOwnPropertySymbols: Gu }
  ),
  Ul(
    {
      target: "Object",
      stat: !0,
      forced: Vl(function () {
        au.f(1);
      }),
    },
    {
      getOwnPropertySymbols: function (e) {
        return au.f(Jl(e));
      },
    }
  ),
  Pu) &&
    Ul(
      {
        target: "JSON",
        stat: !0,
        forced:
          !Wl ||
          Vl(function () {
            var e = Lu();
            return (
              "[null]" != Pu([e]) ||
              "{}" != Pu({ a: e }) ||
              "{}" != Pu(Object(e))
            );
          }),
      },
      {
        stringify: function (e, t, n) {
          for (var i, r = [e], a = 1; arguments.length > a; )
            r.push(arguments[a++]);
          if (((i = t), (Xl(t) || void 0 !== e) && !Bu(e)))
            return (
              Gl(t) ||
                (t = function (e, t) {
                  if (
                    ("function" == typeof i && (t = i.call(this, e, t)), !Bu(t))
                  )
                    return t;
                }),
              (r[1] = t),
              Pu.apply(null, r)
            );
        },
      }
    );
  Lu[Eu][ku] || uu(Lu[Eu], ku, Lu[Eu].valueOf), mu(Lu, Su), (hu[wu] = !0);
  var Xu = Gt,
    $u = a,
    Ju = n,
    Qu = L,
    Zu = w,
    ec = B.f,
    tc = Tt,
    nc = Ju.Symbol;
  if (
    $u &&
    "function" == typeof nc &&
    (!("description" in nc.prototype) || void 0 !== nc().description)
  ) {
    var ic = {},
      rc = function () {
        var e =
            arguments.length < 1 || void 0 === arguments[0]
              ? void 0
              : String(arguments[0]),
          t = this instanceof rc ? new nc(e) : void 0 === e ? nc() : nc(e);
        return "" === e && (ic[t] = !0), t;
      };
    tc(rc, nc);
    var ac = (rc.prototype = nc.prototype);
    ac.constructor = rc;
    var oc = ac.toString,
      sc = "Symbol(test)" == String(nc("test")),
      lc = /^Symbol\((.*)\)[^)]+$/;
    ec(ac, "description", {
      configurable: !0,
      get: function () {
        var e = Zu(this) ? this.valueOf() : this,
          t = oc.call(e);
        if (Qu(ic, e)) return "";
        var n = sc ? t.slice(7, -1) : t.replace(lc, "$1");
        return "" === n ? void 0 : n;
      },
    }),
      Xu({ global: !0, forced: !0 }, { Symbol: rc });
  }
  var uc = W,
    cc = function () {
      var e = uc(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    },
    dc = {},
    hc = r;
  function fc(e, t) {
    return RegExp(e, t);
  }
  (dc.UNSUPPORTED_Y = hc(function () {
    var e = fc("a", "y");
    return (e.lastIndex = 2), null != e.exec("abcd");
  })),
    (dc.BROKEN_CARET = hc(function () {
      var e = fc("^r", "gy");
      return (e.lastIndex = 2), null != e.exec("str");
    }));
  var vc = cc,
    pc = dc,
    gc = he.exports,
    mc = RegExp.prototype.exec,
    yc = gc("native-string-replace", String.prototype.replace),
    bc = mc,
    wc = (function () {
      var e = /a/,
        t = /b*/g;
      return (
        mc.call(e, "a"), mc.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
      );
    })(),
    Sc = pc.UNSUPPORTED_Y || pc.BROKEN_CARET,
    Ec = void 0 !== /()??/.exec("")[1];
  (wc || Ec || Sc) &&
    (bc = function (e) {
      var t,
        n,
        i,
        r,
        a = this,
        o = Sc && a.sticky,
        s = vc.call(a),
        l = a.source,
        u = 0,
        c = e;
      return (
        o &&
          (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
          (c = String(e).slice(a.lastIndex)),
          a.lastIndex > 0 &&
            (!a.multiline || (a.multiline && "\n" !== e[a.lastIndex - 1])) &&
            ((l = "(?: " + l + ")"), (c = " " + c), u++),
          (n = new RegExp("^(?:" + l + ")", s))),
        Ec && (n = new RegExp("^" + l + "$(?!\\s)", s)),
        wc && (t = a.lastIndex),
        (i = mc.call(o ? n : a, c)),
        o
          ? i
            ? ((i.input = i.input.slice(u)),
              (i[0] = i[0].slice(u)),
              (i.index = a.lastIndex),
              (a.lastIndex += i[0].length))
            : (a.lastIndex = 0)
          : wc && i && (a.lastIndex = a.global ? i.index + i[0].length : t),
        Ec &&
          i &&
          i.length > 1 &&
          yc.call(i[0], n, function () {
            for (r = 1; r < arguments.length - 2; r++)
              void 0 === arguments[r] && (i[r] = void 0);
          }),
        i
      );
    });
  var kc = bc;
  Gt({ target: "RegExp", proto: !0, forced: /./.exec !== kc }, { exec: kc });
  var Ac = Z.exports,
    Rc = kc,
    xc = r,
    Lc = Dn,
    Pc = Q,
    Cc = Lc("species"),
    Nc = RegExp.prototype,
    Ic = !xc(function () {
      var e = /./;
      return (
        (e.exec = function () {
          var e = [];
          return (e.groups = { a: "7" }), e;
        }),
        "7" !== "".replace(e, "$<a>")
      );
    }),
    Tc = "$0" === "a".replace(/./, "$0"),
    Mc = Lc("replace"),
    Oc = !!/./[Mc] && "" === /./[Mc]("a", "$0"),
    jc = !xc(function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments);
      };
      var n = "ab".split(e);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }),
    Dc = function (e, t, n, i) {
      var r = Lc(e),
        a = !xc(function () {
          var t = {};
          return (
            (t[r] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        o =
          a &&
          !xc(function () {
            var t = !1,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[Cc] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[r] = /./[r])),
              (n.exec = function () {
                return (t = !0), null;
              }),
              n[r](""),
              !t
            );
          });
      if (
        !a ||
        !o ||
        ("replace" === e && (!Ic || !Tc || Oc)) ||
        ("split" === e && !jc)
      ) {
        var s = /./[r],
          l = n(
            r,
            ""[e],
            function (e, t, n, i, r) {
              var o = t.exec;
              return o === Rc || o === Nc.exec
                ? a && !r
                  ? { done: !0, value: s.call(t, n, i) }
                  : { done: !0, value: e.call(n, t, i) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: Tc,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Oc,
            }
          ),
          u = l[0],
          c = l[1];
        Ac(String.prototype, e, u),
          Ac(
            Nc,
            r,
            2 == t
              ? function (e, t) {
                  return c.call(e, this, t);
                }
              : function (e) {
                  return c.call(e, this);
                }
          );
      }
      i && Pc(Nc[r], "sham", !0);
    },
    Fc = hs.charAt,
    zc = function (e, t, n) {
      return t + (n ? Fc(e, t).length : 1);
    },
    Hc = h,
    Uc = kc,
    _c = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var i = n.call(e, t);
        if ("object" != typeof i)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return i;
      }
      if ("RegExp" !== Hc(e))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Uc.call(e, t);
    },
    Bc = W,
    qc = at,
    Wc = g,
    Kc = zc,
    Vc = _c;
  Dc("match", 1, function (e, t, n) {
    return [
      function (t) {
        var n = Wc(this),
          i = null == t ? void 0 : t[e];
        return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
      },
      function (e) {
        var i = n(t, e, this);
        if (i.done) return i.value;
        var r = Bc(e),
          a = String(this);
        if (!r.global) return Vc(r, a);
        var o = r.unicode;
        r.lastIndex = 0;
        for (var s, l = [], u = 0; null !== (s = Vc(r, a)); ) {
          var c = String(s[0]);
          (l[u] = c),
            "" === c && (r.lastIndex = Kc(a, qc(r.lastIndex), o)),
            u++;
        }
        return 0 === u ? null : l;
      },
    ];
  });
  var Yc = Gt,
    Gc = ut,
    Xc = nt,
    $c = at,
    Jc = A,
    Qc = Un,
    Zc = ii,
    ed = Qn("splice"),
    td = Math.max,
    nd = Math.min,
    id = 9007199254740991,
    rd = "Maximum allowed length exceeded";
  Yc(
    { target: "Array", proto: !0, forced: !ed },
    {
      splice: function (e, t) {
        var n,
          i,
          r,
          a,
          o,
          s,
          l = Jc(this),
          u = $c(l.length),
          c = Gc(e, u),
          d = arguments.length;
        if (
          (0 === d
            ? (n = i = 0)
            : 1 === d
            ? ((n = 0), (i = u - c))
            : ((n = d - 2), (i = nd(td(Xc(t), 0), u - c))),
          u + n - i > id)
        )
          throw TypeError(rd);
        for (r = Qc(l, i), a = 0; a < i; a++)
          (o = c + a) in l && Zc(r, a, l[o]);
        if (((r.length = i), n < i)) {
          for (a = c; a < u - i; a++)
            (s = a + n), (o = a + i) in l ? (l[s] = l[o]) : delete l[s];
          for (a = u; a > u - i + n; a--) delete l[a - 1];
        } else if (n > i)
          for (a = u - i; a > c; a--)
            (s = a + n - 1), (o = a + i - 1) in l ? (l[s] = l[o]) : delete l[s];
        for (a = 0; a < n; a++) l[a + c] = arguments[a + 2];
        return (l.length = u - i + n), r;
      },
    }
  );
  var ad = w,
    od = h,
    sd = Dn("match"),
    ld = function (e) {
      var t;
      return ad(e) && (void 0 !== (t = e[sd]) ? !!t : "RegExp" == od(e));
    },
    ud = Dc,
    cd = ld,
    dd = W,
    hd = g,
    fd = Tr,
    vd = zc,
    pd = at,
    gd = _c,
    md = kc,
    yd = dc.UNSUPPORTED_Y,
    bd = [].push,
    wd = Math.min,
    Sd = 4294967295;
  ud(
    "split",
    2,
    function (e, t, n) {
      var i;
      return (
        (i =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          ".".split(/()()/).length > 1 ||
          "".split(/.?/).length
            ? function (e, n) {
                var i = String(hd(this)),
                  r = void 0 === n ? Sd : n >>> 0;
                if (0 === r) return [];
                if (void 0 === e) return [i];
                if (!cd(e)) return t.call(i, e, r);
                for (
                  var a,
                    o,
                    s,
                    l = [],
                    u =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    c = 0,
                    d = new RegExp(e.source, u + "g");
                  (a = md.call(d, i)) &&
                  !(
                    (o = d.lastIndex) > c &&
                    (l.push(i.slice(c, a.index)),
                    a.length > 1 &&
                      a.index < i.length &&
                      bd.apply(l, a.slice(1)),
                    (s = a[0].length),
                    (c = o),
                    l.length >= r)
                  );

                )
                  d.lastIndex === a.index && d.lastIndex++;
                return (
                  c === i.length
                    ? (!s && d.test("")) || l.push("")
                    : l.push(i.slice(c)),
                  l.length > r ? l.slice(0, r) : l
                );
              }
            : "0".split(void 0, 0).length
            ? function (e, n) {
                return void 0 === e && 0 === n ? [] : t.call(this, e, n);
              }
            : t),
        [
          function (t, n) {
            var r = hd(this),
              a = null == t ? void 0 : t[e];
            return void 0 !== a ? a.call(t, r, n) : i.call(String(r), t, n);
          },
          function (e, r) {
            var a = n(i, e, this, r, i !== t);
            if (a.done) return a.value;
            var o = dd(e),
              s = String(this),
              l = fd(o, RegExp),
              u = o.unicode,
              c =
                (o.ignoreCase ? "i" : "") +
                (o.multiline ? "m" : "") +
                (o.unicode ? "u" : "") +
                (yd ? "g" : "y"),
              d = new l(yd ? "^(?:" + o.source + ")" : o, c),
              h = void 0 === r ? Sd : r >>> 0;
            if (0 === h) return [];
            if (0 === s.length) return null === gd(d, s) ? [s] : [];
            for (var f = 0, v = 0, p = []; v < s.length; ) {
              d.lastIndex = yd ? 0 : v;
              var g,
                m = gd(d, yd ? s.slice(v) : s);
              if (
                null === m ||
                (g = wd(pd(d.lastIndex + (yd ? v : 0)), s.length)) === f
              )
                v = vd(s, v, u);
              else {
                if ((p.push(s.slice(f, v)), p.length === h)) return p;
                for (var y = 1; y <= m.length - 1; y++)
                  if ((p.push(m[y]), p.length === h)) return p;
                v = f = g;
              }
            }
            return p.push(s.slice(f)), p;
          },
        ]
      );
    },
    yd
  );
  var Ed = w,
    kd = Yi,
    Ad = function (e, t, n) {
      var i, r;
      return (
        kd &&
          "function" == typeof (i = t.constructor) &&
          i !== n &&
          Ed((r = i.prototype)) &&
          r !== n.prototype &&
          kd(e, r),
        e
      );
    },
    Rd = a,
    xd = n,
    Ld = Ut,
    Pd = Z.exports,
    Cd = L,
    Nd = h,
    Id = Ad,
    Td = E,
    Md = r,
    Od = Ks,
    jd = Ze.f,
    Dd = i.f,
    Fd = B.f,
    zd = Rl.trim,
    Hd = "Number",
    Ud = xd[Hd],
    _d = Ud.prototype,
    Bd = Nd(Od(_d)) == Hd,
    qd = function (e) {
      var t,
        n,
        i,
        r,
        a,
        o,
        s,
        l,
        u = Td(e, !1);
      if ("string" == typeof u && u.length > 2)
        if (43 === (t = (u = zd(u)).charCodeAt(0)) || 45 === t) {
          if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === t) {
          switch (u.charCodeAt(1)) {
            case 66:
            case 98:
              (i = 2), (r = 49);
              break;
            case 79:
            case 111:
              (i = 8), (r = 55);
              break;
            default:
              return +u;
          }
          for (o = (a = u.slice(2)).length, s = 0; s < o; s++)
            if ((l = a.charCodeAt(s)) < 48 || l > r) return NaN;
          return parseInt(a, i);
        }
      return +u;
    };
  if (Ld(Hd, !Ud(" 0o1") || !Ud("0b1") || Ud("+0x1"))) {
    for (
      var Wd,
        Kd = function (e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof Kd &&
            (Bd
              ? Md(function () {
                  _d.valueOf.call(n);
                })
              : Nd(n) != Hd)
            ? Id(new Ud(qd(t)), n, Kd)
            : qd(t);
        },
        Vd = Rd
          ? jd(Ud)
          : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
              ","
            ),
        Yd = 0;
      Vd.length > Yd;
      Yd++
    )
      Cd(Ud, (Wd = Vd[Yd])) && !Cd(Kd, Wd) && Fd(Kd, Wd, Dd(Ud, Wd));
    (Kd.prototype = _d), (_d.constructor = Kd), Pd(xd, Hd, Kd);
  }
  var Gd = a,
    Xd = B.f,
    $d = Function.prototype,
    Jd = $d.toString,
    Qd = /^\s*function ([^ (]*)/,
    Zd = "name";
  Gd &&
    !(Zd in $d) &&
    Xd($d, Zd, {
      configurable: !0,
      get: function () {
        try {
          return Jd.call(this).match(Qd)[1];
        } catch (e) {
          return "";
        }
      },
    });
  var eh = Gt,
    th = b,
    nh = [].join,
    ih = p != Object,
    rh = Uo("join", ",");
  eh(
    { target: "Array", proto: !0, forced: ih || !rh },
    {
      join: function (e) {
        return nh.call(th(this), void 0 === e ? "," : e);
      },
    }
  );
  var ah = A,
    oh = Math.floor,
    sh = "".replace,
    lh = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    uh = /\$([$&'`]|\d{1,2})/g,
    ch = Dc,
    dh = W,
    hh = at,
    fh = nt,
    vh = g,
    ph = zc,
    gh = function (e, t, n, i, r, a) {
      var o = n + e.length,
        s = i.length,
        l = uh;
      return (
        void 0 !== r && ((r = ah(r)), (l = lh)),
        sh.call(a, l, function (a, l) {
          var u;
          switch (l.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return e;
            case "`":
              return t.slice(0, n);
            case "'":
              return t.slice(o);
            case "<":
              u = r[l.slice(1, -1)];
              break;
            default:
              var c = +l;
              if (0 === c) return a;
              if (c > s) {
                var d = oh(c / 10);
                return 0 === d
                  ? a
                  : d <= s
                  ? void 0 === i[d - 1]
                    ? l.charAt(1)
                    : i[d - 1] + l.charAt(1)
                  : a;
              }
              u = i[c - 1];
          }
          return void 0 === u ? "" : u;
        })
      );
    },
    mh = _c,
    yh = Math.max,
    bh = Math.min;
  ch("replace", 2, function (e, t, n, i) {
    var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      a = i.REPLACE_KEEPS_$0,
      o = r ? "$" : "$0";
    return [
      function (n, i) {
        var r = vh(this),
          a = null == n ? void 0 : n[e];
        return void 0 !== a ? a.call(n, r, i) : t.call(String(r), n, i);
      },
      function (e, i) {
        if ((!r && a) || ("string" == typeof i && -1 === i.indexOf(o))) {
          var s = n(t, e, this, i);
          if (s.done) return s.value;
        }
        var l = dh(e),
          u = String(this),
          c = "function" == typeof i;
        c || (i = String(i));
        var d = l.global;
        if (d) {
          var h = l.unicode;
          l.lastIndex = 0;
        }
        for (var f = []; ; ) {
          var v = mh(l, u);
          if (null === v) break;
          if ((f.push(v), !d)) break;
          "" === String(v[0]) && (l.lastIndex = ph(u, hh(l.lastIndex), h));
        }
        for (var p, g = "", m = 0, y = 0; y < f.length; y++) {
          v = f[y];
          for (
            var b = String(v[0]),
              w = yh(bh(fh(v.index), u.length), 0),
              S = [],
              E = 1;
            E < v.length;
            E++
          )
            S.push(void 0 === (p = v[E]) ? p : String(p));
          var k = v.groups;
          if (c) {
            var A = [b].concat(S, w, u);
            void 0 !== k && A.push(k);
            var R = String(i.apply(void 0, A));
          } else R = gh(b, u, w, S, k, i);
          w >= m && ((g += u.slice(m, w) + R), (m = w + b.length));
        }
        return g + u.slice(m);
      },
    ];
  });
  var wh =
      Object.is ||
      function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      },
    Sh = W,
    Eh = g,
    kh = wh,
    Ah = _c;
  Dc("search", 1, function (e, t, n) {
    return [
      function (t) {
        var n = Eh(this),
          i = null == t ? void 0 : t[e];
        return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
      },
      function (e) {
        var i = n(t, e, this);
        if (i.done) return i.value;
        var r = Sh(e),
          a = String(this),
          o = r.lastIndex;
        kh(o, 0) || (r.lastIndex = 0);
        var s = Ah(r, a);
        return (
          kh(r.lastIndex, o) || (r.lastIndex = o), null === s ? -1 : s.index
        );
      },
    ];
  });
  var Rh = function (e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    },
    xh = function (e, t) {
      return Array.from(e.querySelectorAll(t));
    },
    Lh = function (e, t, n) {
      n ? e.classList.add(t) : e.classList.remove(t);
    },
    Ph = function (e) {
      if ("string" == typeof e) {
        if ("null" === e) return null;
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
      }
      return e;
    },
    Ch = function (e, t) {
      e.style.transform = t;
    },
    Nh = function (e, t) {
      var n = e.matches || e.matchesSelector || e.msMatchesSelector;
      return !(!n || !n.call(e, t));
    },
    Ih = function (e, t) {
      if ("function" == typeof e.closest) return e.closest(t);
      for (; e; ) {
        if (Nh(e, t)) return e;
        e = e.parentNode;
      }
      return null;
    },
    Th = function (e, t, n) {
      for (
        var i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
          r = e.querySelectorAll("." + n),
          a = 0;
        a < r.length;
        a++
      ) {
        var o = r[a];
        if (o.parentNode === e) return o;
      }
      var s = document.createElement(t);
      return (s.className = n), (s.innerHTML = i), e.appendChild(s), s;
    },
    Mh = function (e) {
      var t = document.createElement("style");
      return (
        (t.type = "text/css"),
        e &&
          e.length > 0 &&
          (t.styleSheet
            ? (t.styleSheet.cssText = e)
            : t.appendChild(document.createTextNode(e))),
        document.head.appendChild(t),
        t
      );
    },
    Oh = function () {
      var e = {};
      for (var t in (location.search.replace(
        /[A-Z0-9]+?=([\w\.%-]*)/gi,
        function (t) {
          e[t.split("=").shift()] = t.split("=").pop();
        }
      ),
      e)) {
        var n = e[t];
        e[t] = Ph(unescape(n));
      }
      return void 0 !== e.dependencies && delete e.dependencies, e;
    },
    jh = function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (e) {
        var n,
          i = e.style.height;
        return (
          (e.style.height = "0px"),
          (e.parentNode.style.height = "auto"),
          (n = t - e.parentNode.offsetHeight),
          (e.style.height = i + "px"),
          e.parentNode.style.removeProperty("height"),
          n
        );
      }
      return t;
    },
    Dh = {
      mp4: "video/mp4",
      m4a: "video/mp4",
      ogv: "video/ogg",
      mpeg: "video/mpeg",
      webm: "video/webm",
    },
    Fh = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Dh[e.split(".").pop()];
    },
    zh = navigator.userAgent,
    Hh =
      /(iphone|ipod|ipad|android)/gi.test(zh) ||
      ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1);
  /chrome/i.test(zh) && /edge/i.test(zh);
  var Uh = /android/gi.test(zh),
    _h = {};
  Object.defineProperty(_h, "__esModule", { value: !0 });
  var Bh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      },
    qh = (_h.default = (function (e) {
      if (e) {
        var t = function (e) {
            return [].slice.call(e);
          },
          n = 0,
          i = 1,
          r = 2,
          a = 3,
          o = [],
          s = null,
          l =
            "requestAnimationFrame" in e
              ? function () {
                  e.cancelAnimationFrame(s),
                    (s = e.requestAnimationFrame(function () {
                      return c(
                        o.filter(function (e) {
                          return e.dirty && e.active;
                        })
                      );
                    }));
                }
              : function () {},
          u = function (e) {
            return function () {
              o.forEach(function (t) {
                return (t.dirty = e);
              }),
                l();
            };
          },
          c = function (e) {
            e
              .filter(function (e) {
                return !e.styleComputed;
              })
              .forEach(function (e) {
                e.styleComputed = v(e);
              }),
              e.filter(p).forEach(g);
            var t = e.filter(f);
            t.forEach(h),
              t.forEach(function (e) {
                g(e), d(e);
              }),
              t.forEach(m);
          },
          d = function (e) {
            return (e.dirty = n);
          },
          h = function (e) {
            (e.availableWidth = e.element.parentNode.clientWidth),
              (e.currentWidth = e.element.scrollWidth),
              (e.previousFontSize = e.currentFontSize),
              (e.currentFontSize = Math.min(
                Math.max(
                  e.minSize,
                  (e.availableWidth / e.currentWidth) * e.previousFontSize
                ),
                e.maxSize
              )),
              (e.whiteSpace =
                e.multiLine && e.currentFontSize === e.minSize
                  ? "normal"
                  : "nowrap");
          },
          f = function (e) {
            return (
              e.dirty !== r ||
              (e.dirty === r &&
                e.element.parentNode.clientWidth !== e.availableWidth)
            );
          },
          v = function (t) {
            var n = e.getComputedStyle(t.element, null);
            (t.currentFontSize = parseFloat(n.getPropertyValue("font-size"))),
              (t.display = n.getPropertyValue("display")),
              (t.whiteSpace = n.getPropertyValue("white-space"));
          },
          p = function (e) {
            var t = !1;
            return (
              !e.preStyleTestCompleted &&
              (/inline-/.test(e.display) ||
                ((t = !0), (e.display = "inline-block")),
              "nowrap" !== e.whiteSpace &&
                ((t = !0), (e.whiteSpace = "nowrap")),
              (e.preStyleTestCompleted = !0),
              t)
            );
          },
          g = function (e) {
            (e.element.style.whiteSpace = e.whiteSpace),
              (e.element.style.display = e.display),
              (e.element.style.fontSize = e.currentFontSize + "px");
          },
          m = function (e) {
            e.element.dispatchEvent(
              new CustomEvent("fit", {
                detail: {
                  oldValue: e.previousFontSize,
                  newValue: e.currentFontSize,
                  scaleFactor: e.currentFontSize / e.previousFontSize,
                },
              })
            );
          },
          y = function (e, t) {
            return function () {
              (e.dirty = t), e.active && l();
            };
          },
          b = function (e) {
            return function () {
              (o = o.filter(function (t) {
                return t.element !== e.element;
              })),
                e.observeMutations && e.observer.disconnect(),
                (e.element.style.whiteSpace = e.originalStyle.whiteSpace),
                (e.element.style.display = e.originalStyle.display),
                (e.element.style.fontSize = e.originalStyle.fontSize);
            };
          },
          w = function (e) {
            return function () {
              e.active || ((e.active = !0), l());
            };
          },
          S = function (e) {
            return function () {
              return (e.active = !1);
            };
          },
          E = function (e) {
            e.observeMutations &&
              ((e.observer = new MutationObserver(y(e, i))),
              e.observer.observe(e.element, e.observeMutations));
          },
          k = {
            minSize: 16,
            maxSize: 512,
            multiLine: !0,
            observeMutations: "MutationObserver" in e && {
              subtree: !0,
              childList: !0,
              characterData: !0,
            },
          },
          A = null,
          R = function () {
            e.clearTimeout(A), (A = e.setTimeout(u(r), P.observeWindowDelay));
          },
          x = ["resize", "orientationchange"];
        return (
          Object.defineProperty(P, "observeWindow", {
            set: function (t) {
              var n = (t ? "add" : "remove") + "EventListener";
              x.forEach(function (t) {
                e[n](t, R);
              });
            },
          }),
          (P.observeWindow = !0),
          (P.observeWindowDelay = 100),
          (P.fitAll = u(a)),
          P
        );
      }
      function L(e, t) {
        var n = Bh({}, k, t),
          i = e.map(function (e) {
            var t = Bh({}, n, { element: e, active: !0 });
            return (
              (function (e) {
                (e.originalStyle = {
                  whiteSpace: e.element.style.whiteSpace,
                  display: e.element.style.display,
                  fontSize: e.element.style.fontSize,
                }),
                  E(e),
                  (e.newbie = !0),
                  (e.dirty = !0),
                  o.push(e);
              })(t),
              {
                element: e,
                fit: y(t, a),
                unfreeze: w(t),
                freeze: S(t),
                unsubscribe: b(t),
              }
            );
          });
        return l(), i;
      }
      function P(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "string" == typeof e
          ? L(t(document.querySelectorAll(e)), n)
          : L([e], n)[0];
      }
    })("undefined" == typeof window ? null : window)),
    Wh = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this));
      }
      return (
        xi(e, [
          {
            key: "shouldPreload",
            value: function (e) {
              var t = this.Reveal.getConfig().preloadIframes;
              return (
                "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t
              );
            },
          },
          {
            key: "load",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              (e.style.display = this.Reveal.getConfig().display),
                xh(
                  e,
                  "img[data-src], video[data-src], audio[data-src], iframe[data-src]"
                ).forEach(function (e) {
                  ("IFRAME" !== e.tagName || t.shouldPreload(e)) &&
                    (e.setAttribute("src", e.getAttribute("data-src")),
                    e.setAttribute("data-lazy-loaded", ""),
                    e.removeAttribute("data-src"));
                }),
                xh(e, "video, audio").forEach(function (e) {
                  var t = 0;
                  xh(e, "source[data-src]").forEach(function (e) {
                    e.setAttribute("src", e.getAttribute("data-src")),
                      e.removeAttribute("data-src"),
                      e.setAttribute("data-lazy-loaded", ""),
                      (t += 1);
                  }),
                    Hh &&
                      "VIDEO" === e.tagName &&
                      e.setAttribute("playsinline", ""),
                    t > 0 && e.load();
                });
              var i = e.slideBackgroundElement;
              if (i) {
                i.style.display = "block";
                var r = e.slideBackgroundContentElement,
                  a = e.getAttribute("data-background-iframe");
                if (!1 === i.hasAttribute("data-loaded")) {
                  i.setAttribute("data-loaded", "true");
                  var o = e.getAttribute("data-background-image"),
                    s = e.getAttribute("data-background-video"),
                    l = e.hasAttribute("data-background-video-loop"),
                    u = e.hasAttribute("data-background-video-muted");
                  if (o)
                    /^data:/.test(o.trim())
                      ? (r.style.backgroundImage = "url(".concat(o.trim(), ")"))
                      : (r.style.backgroundImage = o
                          .split(",")
                          .map(function (e) {
                            return "url(".concat(encodeURI(e.trim()), ")");
                          })
                          .join(","));
                  else if (s && !this.Reveal.isSpeakerNotes()) {
                    var c = document.createElement("video");
                    l && c.setAttribute("loop", ""),
                      u && (c.muted = !0),
                      Hh && ((c.muted = !0), c.setAttribute("playsinline", "")),
                      s.split(",").forEach(function (e) {
                        var t = Fh(e);
                        c.innerHTML += t
                          ? '<source src="'
                              .concat(e, '" type="')
                              .concat(t, '">')
                          : '<source src="'.concat(e, '">');
                      }),
                      r.appendChild(c);
                  } else if (a && !0 !== n.excludeIframes) {
                    var d = document.createElement("iframe");
                    d.setAttribute("allowfullscreen", ""),
                      d.setAttribute("mozallowfullscreen", ""),
                      d.setAttribute("webkitallowfullscreen", ""),
                      d.setAttribute("allow", "autoplay"),
                      d.setAttribute("data-src", a),
                      (d.style.width = "100%"),
                      (d.style.height = "100%"),
                      (d.style.maxHeight = "100%"),
                      (d.style.maxWidth = "100%"),
                      r.appendChild(d);
                  }
                }
                var h = r.querySelector("iframe[data-src]");
                h &&
                  this.shouldPreload(i) &&
                  !/autoplay=(1|true|yes)/gi.test(a) &&
                  h.getAttribute("src") !== a &&
                  h.setAttribute("src", a);
              }
              this.layout(e);
            },
          },
          {
            key: "layout",
            value: function (e) {
              var t = this;
              Array.from(e.querySelectorAll(".r-fit-text")).forEach(function (
                e
              ) {
                qh(e, {
                  minSize: 24,
                  maxSize: 0.8 * t.Reveal.getConfig().height,
                  observeMutations: !1,
                  observeWindow: !1,
                });
              });
            },
          },
          {
            key: "unload",
            value: function (e) {
              e.style.display = "none";
              var t = this.Reveal.getSlideBackground(e);
              t &&
                ((t.style.display = "none"),
                xh(t, "iframe[src]").forEach(function (e) {
                  e.removeAttribute("src");
                })),
                xh(
                  e,
                  "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]"
                ).forEach(function (e) {
                  e.setAttribute("data-src", e.getAttribute("src")),
                    e.removeAttribute("src");
                }),
                xh(
                  e,
                  "video[data-lazy-loaded] source[src], audio source[src]"
                ).forEach(function (e) {
                  e.setAttribute("data-src", e.getAttribute("src")),
                    e.removeAttribute("src");
                });
            },
          },
          {
            key: "formatEmbeddedContent",
            value: function () {
              var e = this,
                t = function (t, n, i) {
                  xh(
                    e.Reveal.getSlidesElement(),
                    "iframe[" + t + '*="' + n + '"]'
                  ).forEach(function (e) {
                    var n = e.getAttribute(t);
                    n &&
                      -1 === n.indexOf(i) &&
                      e.setAttribute(t, n + (/\?/.test(n) ? "&" : "?") + i);
                  });
                };
              t("src", "youtube.com/embed/", "enablejsapi=1"),
                t("data-src", "youtube.com/embed/", "enablejsapi=1"),
                t("src", "player.vimeo.com/", "api=1"),
                t("data-src", "player.vimeo.com/", "api=1");
            },
          },
          {
            key: "startEmbeddedContent",
            value: function (e) {
              var t = this;
              e &&
                !this.Reveal.isSpeakerNotes() &&
                (xh(e, 'img[src$=".gif"]').forEach(function (e) {
                  e.setAttribute("src", e.getAttribute("src"));
                }),
                xh(e, "video, audio").forEach(function (e) {
                  if (!Ih(e, ".fragment") || Ih(e, ".fragment.visible")) {
                    var n = t.Reveal.getConfig().autoPlayMedia;
                    if (
                      ("boolean" != typeof n &&
                        (n =
                          e.hasAttribute("data-autoplay") ||
                          !!Ih(e, ".slide-background")),
                      n && "function" == typeof e.play)
                    )
                      if (e.readyState > 1) t.startEmbeddedMedia({ target: e });
                      else if (Hh) {
                        var i = e.play();
                        i &&
                          "function" == typeof i.catch &&
                          !1 === e.controls &&
                          i.catch(function () {
                            (e.controls = !0),
                              e.addEventListener("play", function () {
                                e.controls = !1;
                              });
                          });
                      } else
                        e.removeEventListener(
                          "loadeddata",
                          t.startEmbeddedMedia
                        ),
                          e.addEventListener(
                            "loadeddata",
                            t.startEmbeddedMedia
                          );
                  }
                }),
                xh(e, "iframe[src]").forEach(function (e) {
                  (Ih(e, ".fragment") && !Ih(e, ".fragment.visible")) ||
                    t.startEmbeddedIframe({ target: e });
                }),
                xh(e, "iframe[data-src]").forEach(function (e) {
                  (Ih(e, ".fragment") && !Ih(e, ".fragment.visible")) ||
                    (e.getAttribute("src") !== e.getAttribute("data-src") &&
                      (e.removeEventListener("load", t.startEmbeddedIframe),
                      e.addEventListener("load", t.startEmbeddedIframe),
                      e.setAttribute("src", e.getAttribute("data-src"))));
                }));
            },
          },
          {
            key: "startEmbeddedMedia",
            value: function (e) {
              var t = !!Ih(e.target, "html"),
                n = !!Ih(e.target, ".present");
              t && n && ((e.target.currentTime = 0), e.target.play()),
                e.target.removeEventListener(
                  "loadeddata",
                  this.startEmbeddedMedia
                );
            },
          },
          {
            key: "startEmbeddedIframe",
            value: function (e) {
              var t = e.target;
              if (t && t.contentWindow) {
                var n = !!Ih(e.target, "html"),
                  i = !!Ih(e.target, ".present");
                if (n && i) {
                  var r = this.Reveal.getConfig().autoPlayMedia;
                  "boolean" != typeof r &&
                    (r =
                      t.hasAttribute("data-autoplay") ||
                      !!Ih(t, ".slide-background")),
                    /youtube\.com\/embed\//.test(t.getAttribute("src")) && r
                      ? t.contentWindow.postMessage(
                          '{"event":"command","func":"playVideo","args":""}',
                          "*"
                        )
                      : /player\.vimeo\.com\//.test(t.getAttribute("src")) && r
                      ? t.contentWindow.postMessage('{"method":"play"}', "*")
                      : t.contentWindow.postMessage("slide:start", "*");
                }
              }
            },
          },
          {
            key: "stopEmbeddedContent",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              (n = Rh({ unloadIframes: !0 }, n)),
                e &&
                  e.parentNode &&
                  (xh(e, "video, audio").forEach(function (e) {
                    e.hasAttribute("data-ignore") ||
                      "function" != typeof e.pause ||
                      (e.setAttribute("data-paused-by-reveal", ""), e.pause());
                  }),
                  xh(e, "iframe").forEach(function (e) {
                    e.contentWindow &&
                      e.contentWindow.postMessage("slide:stop", "*"),
                      e.removeEventListener("load", t.startEmbeddedIframe);
                  }),
                  xh(e, 'iframe[src*="youtube.com/embed/"]').forEach(function (
                    e
                  ) {
                    !e.hasAttribute("data-ignore") &&
                      e.contentWindow &&
                      "function" == typeof e.contentWindow.postMessage &&
                      e.contentWindow.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        "*"
                      );
                  }),
                  xh(e, 'iframe[src*="player.vimeo.com/"]').forEach(function (
                    e
                  ) {
                    !e.hasAttribute("data-ignore") &&
                      e.contentWindow &&
                      "function" == typeof e.contentWindow.postMessage &&
                      e.contentWindow.postMessage('{"method":"pause"}', "*");
                  }),
                  !0 === n.unloadIframes &&
                    xh(e, "iframe[data-src]").forEach(function (e) {
                      e.setAttribute("src", "about:blank"),
                        e.removeAttribute("src");
                    }));
            },
          },
        ]),
        e
      );
    })(),
    Kh = (function () {
      function e(t) {
        Ai(this, e), (this.Reveal = t);
      }
      return (
        xi(e, [
          {
            key: "render",
            value: function () {
              (this.element = document.createElement("div")),
                (this.element.className = "slide-number"),
                this.Reveal.getRevealElement().appendChild(this.element);
            },
          },
          {
            key: "configure",
            value: function (e, t) {
              var n = "none";
              e.slideNumber &&
                !this.Reveal.isPrintingPDF() &&
                ("all" === e.showSlideNumber ||
                  ("speaker" === e.showSlideNumber &&
                    this.Reveal.isSpeakerNotes())) &&
                (n = "block"),
                (this.element.style.display = n);
            },
          },
          {
            key: "update",
            value: function () {
              this.Reveal.getConfig().slideNumber &&
                this.element &&
                (this.element.innerHTML = this.getSlideNumber());
            },
          },
          {
            key: "getSlideNumber",
            value: function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.Reveal.getCurrentSlide(),
                n = this.Reveal.getConfig(),
                i = "h.v";
              if ("function" == typeof n.slideNumber) e = n.slideNumber(t);
              else {
                "string" == typeof n.slideNumber && (i = n.slideNumber),
                  /c/.test(i) ||
                    1 !== this.Reveal.getHorizontalSlides().length ||
                    (i = "c");
                var r = t && "uncounted" === t.dataset.visibility ? 0 : 1;
                switch (((e = []), i)) {
                  case "c":
                    e.push(this.Reveal.getSlidePastCount(t) + r);
                    break;
                  case "c/t":
                    e.push(
                      this.Reveal.getSlidePastCount(t) + r,
                      "/",
                      this.Reveal.getTotalSlides()
                    );
                    break;
                  default:
                    var a = this.Reveal.getIndices(t);
                    e.push(a.h + r);
                    var o = "h/v" === i ? "/" : ".";
                    this.Reveal.isVerticalSlide(t) && e.push(o, a.v + 1);
                }
              }
              var s = "#" + this.Reveal.location.getHash(t);
              return this.formatNumber(e[0], e[1], e[2], s);
            },
          },
          {
            key: "formatNumber",
            value: function (e, t, n) {
              var i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "#" + this.Reveal.location.getHash();
              return "number" != typeof n || isNaN(n)
                ? '<a href="'
                    .concat(i, '">\n\t\t\t\t\t<span class="slide-number-a">')
                    .concat(e, "</span>\n\t\t\t\t\t</a>")
                : '<a href="'
                    .concat(i, '">\n\t\t\t\t\t<span class="slide-number-a">')
                    .concat(
                      e,
                      '</span>\n\t\t\t\t\t<span class="slide-number-delimiter">'
                    )
                    .concat(
                      t,
                      '</span>\n\t\t\t\t\t<span class="slide-number-b">'
                    )
                    .concat(n, "</span>\n\t\t\t\t\t</a>");
            },
          },
          {
            key: "destroy",
            value: function () {
              this.element.remove();
            },
          },
        ]),
        e
      );
    })(),
    Vh = a,
    Yh = n,
    Gh = Ut,
    Xh = Ad,
    $h = B.f,
    Jh = Ze.f,
    Qh = ld,
    Zh = cc,
    ef = dc,
    tf = Z.exports,
    nf = r,
    rf = He.enforce,
    af = nr,
    of = Dn("match"),
    sf = Yh.RegExp,
    lf = sf.prototype,
    uf = /a/g,
    cf = /a/g,
    df = new sf(uf) !== uf,
    hf = ef.UNSUPPORTED_Y;
  if (
    Vh &&
    Gh(
      "RegExp",
      !df ||
        hf ||
        nf(function () {
          return (
            (cf[of] = !1), sf(uf) != uf || sf(cf) == cf || "/a/i" != sf(uf, "i")
          );
        })
    )
  ) {
    for (
      var ff = function (e, t) {
          var n,
            i = this instanceof ff,
            r = Qh(e),
            a = void 0 === t;
          if (!i && r && e.constructor === ff && a) return e;
          df
            ? r && !a && (e = e.source)
            : e instanceof ff && (a && (t = Zh.call(e)), (e = e.source)),
            hf && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
          var o = Xh(df ? new sf(e, t) : sf(e, t), i ? this : lf, ff);
          hf && n && (rf(o).sticky = !0);
          return o;
        },
        vf = function (e) {
          (e in ff) ||
            $h(ff, e, {
              configurable: !0,
              get: function () {
                return sf[e];
              },
              set: function (t) {
                sf[e] = t;
              },
            });
        },
        pf = Jh(sf),
        gf = 0;
      pf.length > gf;

    )
      vf(pf[gf++]);
    (lf.constructor = ff), (ff.prototype = lf), tf(Yh, "RegExp", ff);
  }
  af("RegExp");
  var mf = Z.exports,
    yf = W,
    bf = r,
    wf = cc,
    Sf = "toString",
    Ef = RegExp.prototype,
    kf = Ef[Sf],
    Af = bf(function () {
      return "/a/b" != kf.call({ source: "a", flags: "b" });
    }),
    Rf = kf.name != Sf;
  (Af || Rf) &&
    mf(
      RegExp.prototype,
      Sf,
      function () {
        var e = yf(this),
          t = String(e.source),
          n = e.flags;
        return (
          "/" +
          t +
          "/" +
          String(
            void 0 === n && e instanceof RegExp && !("flags" in Ef)
              ? wf.call(e)
              : n
          )
        );
      },
      { unsafe: !0 }
    );
  var xf = Ks,
    Lf = B,
    Pf = Dn("unscopables"),
    Cf = Array.prototype;
  null == Cf[Pf] && Lf.f(Cf, Pf, { configurable: !0, value: xf(null) });
  var Nf = function (e) {
      Cf[Pf][e] = !0;
    },
    If = Gt,
    Tf = Gn.find,
    Mf = Nf,
    Of = "find",
    jf = !0;
  Of in [] &&
    Array(1)[Of](function () {
      jf = !1;
    }),
    If(
      { target: "Array", proto: !0, forced: jf },
      {
        find: function (e) {
          return Tf(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    Mf(Of);
  var Df = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.onInput = this.onInput.bind(this)),
          (this.onBlur = this.onBlur.bind(this)),
          (this.onKeyDown = this.onKeyDown.bind(this));
      }
      return (
        xi(e, [
          {
            key: "render",
            value: function () {
              (this.element = document.createElement("div")),
                (this.element.className = "jump-to-slide"),
                (this.jumpInput = document.createElement("input")),
                (this.jumpInput.type = "text"),
                (this.jumpInput.className = "jump-to-slide-input"),
                (this.jumpInput.placeholder = "Jump to slide"),
                this.jumpInput.addEventListener("input", this.onInput),
                this.jumpInput.addEventListener("keydown", this.onKeyDown),
                this.jumpInput.addEventListener("blur", this.onBlur),
                this.element.appendChild(this.jumpInput);
            },
          },
          {
            key: "show",
            value: function () {
              (this.indicesOnShow = this.Reveal.getIndices()),
                this.Reveal.getRevealElement().appendChild(this.element),
                this.jumpInput.focus();
            },
          },
          {
            key: "hide",
            value: function () {
              this.isVisible() &&
                (this.element.remove(),
                (this.jumpInput.value = ""),
                clearTimeout(this.jumpTimeout),
                delete this.jumpTimeout);
            },
          },
          {
            key: "isVisible",
            value: function () {
              return !!this.element.parentNode;
            },
          },
          {
            key: "jump",
            value: function () {
              clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
              var e = this.jumpInput.value.trim(""),
                t = this.Reveal.location.getIndicesFromHash(e, {
                  oneBasedIndex: !0,
                });
              return (
                !t && /\S+/i.test(e) && e.length > 1 && (t = this.search(e)),
                t && "" !== e
                  ? (this.Reveal.slide(t.h, t.v, t.f), !0)
                  : (this.Reveal.slide(
                      this.indicesOnShow.h,
                      this.indicesOnShow.v,
                      this.indicesOnShow.f
                    ),
                    !1)
              );
            },
          },
          {
            key: "jumpAfter",
            value: function (e) {
              var t = this;
              clearTimeout(this.jumpTimeout),
                (this.jumpTimeout = setTimeout(function () {
                  return t.jump();
                }, e));
            },
          },
          {
            key: "search",
            value: function (e) {
              var t = new RegExp("\\b" + e.trim() + "\\b", "i"),
                n = this.Reveal.getSlides().find(function (e) {
                  return t.test(e.innerText);
                });
              return n ? this.Reveal.getIndices(n) : null;
            },
          },
          {
            key: "cancel",
            value: function () {
              this.Reveal.slide(
                this.indicesOnShow.h,
                this.indicesOnShow.v,
                this.indicesOnShow.f
              ),
                this.hide();
            },
          },
          {
            key: "confirm",
            value: function () {
              this.jump(), this.hide();
            },
          },
          {
            key: "destroy",
            value: function () {
              this.jumpInput.removeEventListener("input", this.onInput),
                this.jumpInput.removeEventListener("keydown", this.onKeyDown),
                this.jumpInput.removeEventListener("blur", this.onBlur),
                this.element.remove();
            },
          },
          {
            key: "onKeyDown",
            value: function (e) {
              13 === e.keyCode
                ? this.confirm()
                : 27 === e.keyCode &&
                  (this.cancel(), e.stopImmediatePropagation());
            },
          },
          {
            key: "onInput",
            value: function (e) {
              this.jumpAfter(200);
            },
          },
          {
            key: "onBlur",
            value: function () {
              var e = this;
              setTimeout(function () {
                return e.hide();
              }, 1);
            },
          },
        ]),
        e
      );
    })(),
    Ff = Gt,
    zf = w,
    Hf = gn,
    Uf = ut,
    _f = at,
    Bf = b,
    qf = ii,
    Wf = Dn,
    Kf = Qn("slice"),
    Vf = Wf("species"),
    Yf = [].slice,
    Gf = Math.max;
  Ff(
    { target: "Array", proto: !0, forced: !Kf },
    {
      slice: function (e, t) {
        var n,
          i,
          r,
          a = Bf(this),
          o = _f(a.length),
          s = Uf(e, o),
          l = Uf(void 0 === t ? o : t, o);
        if (
          Hf(a) &&
          ("function" != typeof (n = a.constructor) ||
          (n !== Array && !Hf(n.prototype))
            ? zf(n) && null === (n = n[Vf]) && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return Yf.call(a, s, l);
        for (
          i = new (void 0 === n ? Array : n)(Gf(l - s, 0)), r = 0;
          s < l;
          s++, r++
        )
          s in a && qf(i, r, a[s]);
        return (i.length = r), i;
      },
    }
  );
  var Xf = function (e) {
      var t = e.match(/^#([0-9a-f]{3})$/i);
      if (t && t[1])
        return (
          (t = t[1]),
          {
            r: 17 * parseInt(t.charAt(0), 16),
            g: 17 * parseInt(t.charAt(1), 16),
            b: 17 * parseInt(t.charAt(2), 16),
          }
        );
      var n = e.match(/^#([0-9a-f]{6})$/i);
      if (n && n[1])
        return (
          (n = n[1]),
          {
            r: parseInt(n.slice(0, 2), 16),
            g: parseInt(n.slice(2, 4), 16),
            b: parseInt(n.slice(4, 6), 16),
          }
        );
      var i = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
      if (i)
        return {
          r: parseInt(i[1], 10),
          g: parseInt(i[2], 10),
          b: parseInt(i[3], 10),
        };
      var r = e.match(
        /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i
      );
      return r
        ? {
            r: parseInt(r[1], 10),
            g: parseInt(r[2], 10),
            b: parseInt(r[3], 10),
            a: parseFloat(r[4]),
          }
        : null;
    },
    $f = (function () {
      function e(t) {
        Ai(this, e), (this.Reveal = t);
      }
      return (
        xi(e, [
          {
            key: "render",
            value: function () {
              (this.element = document.createElement("div")),
                (this.element.className = "backgrounds"),
                this.Reveal.getRevealElement().appendChild(this.element);
            },
          },
          {
            key: "create",
            value: function () {
              var e = this;
              (this.element.innerHTML = ""),
                this.element.classList.add("no-transition"),
                this.Reveal.getHorizontalSlides().forEach(function (t) {
                  var n = e.createBackground(t, e.element);
                  xh(t, "section").forEach(function (t) {
                    e.createBackground(t, n), n.classList.add("stack");
                  });
                }),
                this.Reveal.getConfig().parallaxBackgroundImage
                  ? ((this.element.style.backgroundImage =
                      'url("' +
                      this.Reveal.getConfig().parallaxBackgroundImage +
                      '")'),
                    (this.element.style.backgroundSize =
                      this.Reveal.getConfig().parallaxBackgroundSize),
                    (this.element.style.backgroundRepeat =
                      this.Reveal.getConfig().parallaxBackgroundRepeat),
                    (this.element.style.backgroundPosition =
                      this.Reveal.getConfig().parallaxBackgroundPosition),
                    setTimeout(function () {
                      e.Reveal.getRevealElement().classList.add(
                        "has-parallax-background"
                      );
                    }, 1))
                  : ((this.element.style.backgroundImage = ""),
                    this.Reveal.getRevealElement().classList.remove(
                      "has-parallax-background"
                    ));
            },
          },
          {
            key: "createBackground",
            value: function (e, t) {
              var n = document.createElement("div");
              n.className =
                "slide-background " +
                e.className.replace(/present|past|future/, "");
              var i = document.createElement("div");
              return (
                (i.className = "slide-background-content"),
                n.appendChild(i),
                t.appendChild(n),
                (e.slideBackgroundElement = n),
                (e.slideBackgroundContentElement = i),
                this.sync(e),
                n
              );
            },
          },
          {
            key: "sync",
            value: function (e) {
              var t = e.slideBackgroundElement,
                n = e.slideBackgroundContentElement,
                i = {
                  background: e.getAttribute("data-background"),
                  backgroundSize: e.getAttribute("data-background-size"),
                  backgroundImage: e.getAttribute("data-background-image"),
                  backgroundVideo: e.getAttribute("data-background-video"),
                  backgroundIframe: e.getAttribute("data-background-iframe"),
                  backgroundColor: e.getAttribute("data-background-color"),
                  backgroundGradient: e.getAttribute(
                    "data-background-gradient"
                  ),
                  backgroundRepeat: e.getAttribute("data-background-repeat"),
                  backgroundPosition: e.getAttribute(
                    "data-background-position"
                  ),
                  backgroundTransition: e.getAttribute(
                    "data-background-transition"
                  ),
                  backgroundOpacity: e.getAttribute("data-background-opacity"),
                },
                r = e.hasAttribute("data-preload");
              e.classList.remove("has-dark-background"),
                e.classList.remove("has-light-background"),
                t.removeAttribute("data-loaded"),
                t.removeAttribute("data-background-hash"),
                t.removeAttribute("data-background-size"),
                t.removeAttribute("data-background-transition"),
                (t.style.backgroundColor = ""),
                (n.style.backgroundSize = ""),
                (n.style.backgroundRepeat = ""),
                (n.style.backgroundPosition = ""),
                (n.style.backgroundImage = ""),
                (n.style.opacity = ""),
                (n.innerHTML = ""),
                i.background &&
                  (/^(http|file|\/\/)/gi.test(i.background) ||
                  /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(
                    i.background
                  )
                    ? e.setAttribute("data-background-image", i.background)
                    : (t.style.background = i.background)),
                (i.background ||
                  i.backgroundColor ||
                  i.backgroundGradient ||
                  i.backgroundImage ||
                  i.backgroundVideo ||
                  i.backgroundIframe) &&
                  t.setAttribute(
                    "data-background-hash",
                    i.background +
                      i.backgroundSize +
                      i.backgroundImage +
                      i.backgroundVideo +
                      i.backgroundIframe +
                      i.backgroundColor +
                      i.backgroundGradient +
                      i.backgroundRepeat +
                      i.backgroundPosition +
                      i.backgroundTransition +
                      i.backgroundOpacity
                  ),
                i.backgroundSize &&
                  t.setAttribute("data-background-size", i.backgroundSize),
                i.backgroundColor &&
                  (t.style.backgroundColor = i.backgroundColor),
                i.backgroundGradient &&
                  (t.style.backgroundImage = i.backgroundGradient),
                i.backgroundTransition &&
                  t.setAttribute(
                    "data-background-transition",
                    i.backgroundTransition
                  ),
                r && t.setAttribute("data-preload", ""),
                i.backgroundSize && (n.style.backgroundSize = i.backgroundSize),
                i.backgroundRepeat &&
                  (n.style.backgroundRepeat = i.backgroundRepeat),
                i.backgroundPosition &&
                  (n.style.backgroundPosition = i.backgroundPosition),
                i.backgroundOpacity && (n.style.opacity = i.backgroundOpacity);
              var a,
                o = i.backgroundColor;
              if (!o || !Xf(o)) {
                var s = window.getComputedStyle(t);
                s && s.backgroundColor && (o = s.backgroundColor);
              }
              if (o) {
                var l = Xf(o);
                l &&
                  0 !== l.a &&
                  ("string" == typeof (a = o) && (a = Xf(a)),
                  (a ? (299 * a.r + 587 * a.g + 114 * a.b) / 1e3 : null) < 128
                    ? e.classList.add("has-dark-background")
                    : e.classList.add("has-light-background"));
              }
            },
          },
          {
            key: "update",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                n = this.Reveal.getCurrentSlide(),
                i = this.Reveal.getIndices(),
                r = null,
                a = this.Reveal.getConfig().rtl ? "future" : "past",
                o = this.Reveal.getConfig().rtl ? "past" : "future";
              if (
                (Array.from(this.element.childNodes).forEach(function (e, n) {
                  e.classList.remove("past", "present", "future"),
                    n < i.h
                      ? e.classList.add(a)
                      : n > i.h
                      ? e.classList.add(o)
                      : (e.classList.add("present"), (r = e)),
                    (t || n === i.h) &&
                      xh(e, ".slide-background").forEach(function (e, t) {
                        e.classList.remove("past", "present", "future"),
                          t < i.v
                            ? e.classList.add("past")
                            : t > i.v
                            ? e.classList.add("future")
                            : (e.classList.add("present"),
                              n === i.h && (r = e));
                      });
                }),
                this.previousBackground &&
                  this.Reveal.slideContent.stopEmbeddedContent(
                    this.previousBackground,
                    {
                      unloadIframes: !this.Reveal.slideContent.shouldPreload(
                        this.previousBackground
                      ),
                    }
                  ),
                r)
              ) {
                this.Reveal.slideContent.startEmbeddedContent(r);
                var s = r.querySelector(".slide-background-content");
                if (s) {
                  var l = s.style.backgroundImage || "";
                  /\.gif/i.test(l) &&
                    ((s.style.backgroundImage = ""),
                    window.getComputedStyle(s).opacity,
                    (s.style.backgroundImage = l));
                }
                var u = this.previousBackground
                    ? this.previousBackground.getAttribute(
                        "data-background-hash"
                      )
                    : null,
                  c = r.getAttribute("data-background-hash");
                c &&
                  c === u &&
                  r !== this.previousBackground &&
                  this.element.classList.add("no-transition"),
                  (this.previousBackground = r);
              }
              n &&
                ["has-light-background", "has-dark-background"].forEach(
                  function (t) {
                    n.classList.contains(t)
                      ? e.Reveal.getRevealElement().classList.add(t)
                      : e.Reveal.getRevealElement().classList.remove(t);
                  },
                  this
                ),
                setTimeout(function () {
                  e.element.classList.remove("no-transition");
                }, 1);
            },
          },
          {
            key: "updateParallax",
            value: function () {
              var e = this.Reveal.getIndices();
              if (this.Reveal.getConfig().parallaxBackgroundImage) {
                var t,
                  n,
                  i = this.Reveal.getHorizontalSlides(),
                  r = this.Reveal.getVerticalSlides(),
                  a = this.element.style.backgroundSize.split(" ");
                1 === a.length
                  ? (t = n = parseInt(a[0], 10))
                  : ((t = parseInt(a[0], 10)), (n = parseInt(a[1], 10)));
                var o,
                  s = this.element.offsetWidth,
                  l = i.length;
                o =
                  ("number" ==
                  typeof this.Reveal.getConfig().parallaxBackgroundHorizontal
                    ? this.Reveal.getConfig().parallaxBackgroundHorizontal
                    : l > 1
                    ? (t - s) / (l - 1)
                    : 0) *
                  e.h *
                  -1;
                var u,
                  c,
                  d = this.element.offsetHeight,
                  h = r.length;
                (u =
                  "number" ==
                  typeof this.Reveal.getConfig().parallaxBackgroundVertical
                    ? this.Reveal.getConfig().parallaxBackgroundVertical
                    : (n - d) / (h - 1)),
                  (c = h > 0 ? u * e.v : 0),
                  (this.element.style.backgroundPosition =
                    o + "px " + -c + "px");
              }
            },
          },
          {
            key: "destroy",
            value: function () {
              this.element.remove();
            },
          },
        ]),
        e
      );
    })(),
    Jf = A,
    Qf = Jt;
  Gt(
    {
      target: "Object",
      stat: !0,
      forced: r(function () {
        Qf(1);
      }),
    },
    {
      keys: function (e) {
        return Qf(Jf(e));
      },
    }
  );
  var Zf = Gn.filter;
  Gt(
    { target: "Array", proto: !0, forced: !Qn("filter") },
    {
      filter: function (e) {
        return Zf(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var ev = ".slides section",
    tv = ".slides>section",
    nv = ".slides>section.present>section",
    iv =
      /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,
    rv =
      /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/,
    av = 0,
    ov = (function () {
      function e(t) {
        Ai(this, e), (this.Reveal = t);
      }
      return (
        xi(e, [
          {
            key: "run",
            value: function (e, t) {
              var n = this;
              this.reset();
              var i = this.Reveal.getSlides(),
                r = i.indexOf(t),
                a = i.indexOf(e);
              if (
                e.hasAttribute("data-auto-animate") &&
                t.hasAttribute("data-auto-animate") &&
                e.getAttribute("data-auto-animate-id") ===
                  t.getAttribute("data-auto-animate-id") &&
                !(r > a ? t : e).hasAttribute("data-auto-animate-restart")
              ) {
                this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || Mh();
                var o = this.getAutoAnimateOptions(t);
                (e.dataset.autoAnimate = "pending"),
                  (t.dataset.autoAnimate = "pending"),
                  (o.slideDirection = r > a ? "forward" : "backward");
                var s = "none" === e.style.display;
                s && (e.style.display = this.Reveal.getConfig().display);
                var l = this.getAutoAnimatableElements(e, t).map(function (e) {
                  return n.autoAnimateElements(
                    e.from,
                    e.to,
                    e.options || {},
                    o,
                    av++
                  );
                });
                if (
                  (s && (e.style.display = "none"),
                  "false" !== t.dataset.autoAnimateUnmatched &&
                    !0 === this.Reveal.getConfig().autoAnimateUnmatched)
                ) {
                  var u = 0.8 * o.duration,
                    c = 0.2 * o.duration;
                  this.getUnmatchedAutoAnimateElements(t).forEach(function (e) {
                    var t = n.getAutoAnimateOptions(e, o),
                      i = "unmatched";
                    (t.duration === o.duration && t.delay === o.delay) ||
                      ((i = "unmatched-" + av++),
                      l.push(
                        '[data-auto-animate="running"] [data-auto-animate-target="'
                          .concat(i, '"] { transition: opacity ')
                          .concat(t.duration, "s ease ")
                          .concat(t.delay, "s; }")
                      )),
                      (e.dataset.autoAnimateTarget = i);
                  }, this),
                    l.push(
                      '[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity '
                        .concat(u, "s ease ")
                        .concat(c, "s; }")
                    );
                }
                (this.autoAnimateStyleSheet.innerHTML = l.join("")),
                  requestAnimationFrame(function () {
                    n.autoAnimateStyleSheet &&
                      (getComputedStyle(n.autoAnimateStyleSheet).fontWeight,
                      (t.dataset.autoAnimate = "running"));
                  }),
                  this.Reveal.dispatchEvent({
                    type: "autoanimate",
                    data: {
                      fromSlide: e,
                      toSlide: t,
                      sheet: this.autoAnimateStyleSheet,
                    },
                  });
              }
            },
          },
          {
            key: "reset",
            value: function () {
              xh(
                this.Reveal.getRevealElement(),
                '[data-auto-animate]:not([data-auto-animate=""])'
              ).forEach(function (e) {
                e.dataset.autoAnimate = "";
              }),
                xh(
                  this.Reveal.getRevealElement(),
                  "[data-auto-animate-target]"
                ).forEach(function (e) {
                  delete e.dataset.autoAnimateTarget;
                }),
                this.autoAnimateStyleSheet &&
                  this.autoAnimateStyleSheet.parentNode &&
                  (this.autoAnimateStyleSheet.parentNode.removeChild(
                    this.autoAnimateStyleSheet
                  ),
                  (this.autoAnimateStyleSheet = null));
            },
          },
          {
            key: "autoAnimateElements",
            value: function (e, t, n, i, r) {
              (e.dataset.autoAnimateTarget = ""),
                (t.dataset.autoAnimateTarget = r);
              var a = this.getAutoAnimateOptions(t, i);
              void 0 !== n.delay && (a.delay = n.delay),
                void 0 !== n.duration && (a.duration = n.duration),
                void 0 !== n.easing && (a.easing = n.easing);
              var o = this.getAutoAnimatableProperties("from", e, n),
                s = this.getAutoAnimatableProperties("to", t, n);
              t.classList.contains("fragment") &&
                (delete s.styles.opacity,
                e.classList.contains("fragment") &&
                  (e.className.match(rv) || [""])[0] ===
                    (t.className.match(rv) || [""])[0] &&
                  "forward" === i.slideDirection &&
                  t.classList.add("visible", "disabled"));
              if (!1 !== n.translate || !1 !== n.scale) {
                var l = this.Reveal.getScale(),
                  u = {
                    x: (o.x - s.x) / l,
                    y: (o.y - s.y) / l,
                    scaleX: o.width / s.width,
                    scaleY: o.height / s.height,
                  };
                (u.x = Math.round(1e3 * u.x) / 1e3),
                  (u.y = Math.round(1e3 * u.y) / 1e3),
                  (u.scaleX = Math.round(1e3 * u.scaleX) / 1e3),
                  (u.scaleX = Math.round(1e3 * u.scaleX) / 1e3);
                var c = !1 !== n.translate && (0 !== u.x || 0 !== u.y),
                  d = !1 !== n.scale && (0 !== u.scaleX || 0 !== u.scaleY);
                if (c || d) {
                  var h = [];
                  c &&
                    h.push("translate(".concat(u.x, "px, ").concat(u.y, "px)")),
                    d &&
                      h.push(
                        "scale(".concat(u.scaleX, ", ").concat(u.scaleY, ")")
                      ),
                    (o.styles.transform = h.join(" ")),
                    (o.styles["transform-origin"] = "top left"),
                    (s.styles.transform = "none");
                }
              }
              for (var f in s.styles) {
                var v = s.styles[f],
                  p = o.styles[f];
                v === p
                  ? delete s.styles[f]
                  : (!0 === v.explicitValue && (s.styles[f] = v.value),
                    !0 === p.explicitValue && (o.styles[f] = p.value));
              }
              var g = "",
                m = Object.keys(s.styles);
              if (m.length > 0) {
                (o.styles.transition = "none"),
                  (s.styles.transition = "all "
                    .concat(a.duration, "s ")
                    .concat(a.easing, " ")
                    .concat(a.delay, "s")),
                  (s.styles["transition-property"] = m.join(", ")),
                  (s.styles["will-change"] = m.join(", "));
                var y = Object.keys(o.styles)
                    .map(function (e) {
                      return e + ": " + o.styles[e] + " !important;";
                    })
                    .join(""),
                  b = Object.keys(s.styles)
                    .map(function (e) {
                      return e + ": " + s.styles[e] + " !important;";
                    })
                    .join("");
                g =
                  '[data-auto-animate-target="' +
                  r +
                  '"] {' +
                  y +
                  '}[data-auto-animate="running"] [data-auto-animate-target="' +
                  r +
                  '"] {' +
                  b +
                  "}";
              }
              return g;
            },
          },
          {
            key: "getAutoAnimateOptions",
            value: function (e, t) {
              var n = {
                easing: this.Reveal.getConfig().autoAnimateEasing,
                duration: this.Reveal.getConfig().autoAnimateDuration,
                delay: 0,
              };
              if (((n = Rh(n, t)), e.parentNode)) {
                var i = Ih(e.parentNode, "[data-auto-animate-target]");
                i && (n = this.getAutoAnimateOptions(i, n));
              }
              return (
                e.dataset.autoAnimateEasing &&
                  (n.easing = e.dataset.autoAnimateEasing),
                e.dataset.autoAnimateDuration &&
                  (n.duration = parseFloat(e.dataset.autoAnimateDuration)),
                e.dataset.autoAnimateDelay &&
                  (n.delay = parseFloat(e.dataset.autoAnimateDelay)),
                n
              );
            },
          },
          {
            key: "getAutoAnimatableProperties",
            value: function (e, t, n) {
              var i = this.Reveal.getConfig(),
                r = { styles: [] };
              if (!1 !== n.translate || !1 !== n.scale) {
                var a;
                if ("function" == typeof n.measure) a = n.measure(t);
                else if (i.center) a = t.getBoundingClientRect();
                else {
                  var o = this.Reveal.getScale();
                  a = {
                    x: t.offsetLeft * o,
                    y: t.offsetTop * o,
                    width: t.offsetWidth * o,
                    height: t.offsetHeight * o,
                  };
                }
                (r.x = a.x),
                  (r.y = a.y),
                  (r.width = a.width),
                  (r.height = a.height);
              }
              var s = getComputedStyle(t);
              return (
                (n.styles || i.autoAnimateStyles).forEach(function (t) {
                  var n;
                  "string" == typeof t && (t = { property: t }),
                    void 0 !== t.from && "from" === e
                      ? (n = { value: t.from, explicitValue: !0 })
                      : void 0 !== t.to && "to" === e
                      ? (n = { value: t.to, explicitValue: !0 })
                      : ("line-height" === t.property &&
                          (n =
                            parseFloat(s["line-height"]) /
                            parseFloat(s["font-size"])),
                        isNaN(n) && (n = s[t.property])),
                    "" !== n && (r.styles[t.property] = n);
                }),
                r
              );
            },
          },
          {
            key: "getAutoAnimatableElements",
            value: function (e, t) {
              var n = (
                  "function" ==
                  typeof this.Reveal.getConfig().autoAnimateMatcher
                    ? this.Reveal.getConfig().autoAnimateMatcher
                    : this.getAutoAnimatePairs
                ).call(this, e, t),
                i = [];
              return n.filter(function (e, t) {
                if (-1 === i.indexOf(e.to)) return i.push(e.to), !0;
              });
            },
          },
          {
            key: "getAutoAnimatePairs",
            value: function (e, t) {
              var n = this,
                i = [],
                r = "h1, h2, h3, h4, h5, h6, p, li";
              return (
                this.findAutoAnimateMatches(i, e, t, "[data-id]", function (e) {
                  return e.nodeName + ":::" + e.getAttribute("data-id");
                }),
                this.findAutoAnimateMatches(i, e, t, r, function (e) {
                  return e.nodeName + ":::" + e.innerText;
                }),
                this.findAutoAnimateMatches(
                  i,
                  e,
                  t,
                  "img, video, iframe",
                  function (e) {
                    return (
                      e.nodeName +
                      ":::" +
                      (e.getAttribute("src") || e.getAttribute("data-src"))
                    );
                  }
                ),
                this.findAutoAnimateMatches(i, e, t, "pre", function (e) {
                  return e.nodeName + ":::" + e.innerText;
                }),
                i.forEach(function (e) {
                  Nh(e.from, r)
                    ? (e.options = { scale: !1 })
                    : Nh(e.from, "pre") &&
                      ((e.options = { scale: !1, styles: ["width", "height"] }),
                      n.findAutoAnimateMatches(
                        i,
                        e.from,
                        e.to,
                        ".hljs .hljs-ln-code",
                        function (e) {
                          return e.textContent;
                        },
                        {
                          scale: !1,
                          styles: [],
                          measure: n.getLocalBoundingBox.bind(n),
                        }
                      ),
                      n.findAutoAnimateMatches(
                        i,
                        e.from,
                        e.to,
                        ".hljs .hljs-ln-line[data-line-number]",
                        function (e) {
                          return e.getAttribute("data-line-number");
                        },
                        {
                          scale: !1,
                          styles: ["width"],
                          measure: n.getLocalBoundingBox.bind(n),
                        }
                      ));
                }, this),
                i
              );
            },
          },
          {
            key: "getLocalBoundingBox",
            value: function (e) {
              var t = this.Reveal.getScale();
              return {
                x: Math.round(e.offsetLeft * t * 100) / 100,
                y: Math.round(e.offsetTop * t * 100) / 100,
                width: Math.round(e.offsetWidth * t * 100) / 100,
                height: Math.round(e.offsetHeight * t * 100) / 100,
              };
            },
          },
          {
            key: "findAutoAnimateMatches",
            value: function (e, t, n, i, r, a) {
              var o = {},
                s = {};
              [].slice.call(t.querySelectorAll(i)).forEach(function (e, t) {
                var n = r(e);
                "string" == typeof n &&
                  n.length &&
                  ((o[n] = o[n] || []), o[n].push(e));
              }),
                [].slice.call(n.querySelectorAll(i)).forEach(function (t, n) {
                  var i,
                    l = r(t);
                  if (((s[l] = s[l] || []), s[l].push(t), o[l])) {
                    var u = s[l].length - 1,
                      c = o[l].length - 1;
                    o[l][u]
                      ? ((i = o[l][u]), (o[l][u] = null))
                      : o[l][c] && ((i = o[l][c]), (o[l][c] = null));
                  }
                  i && e.push({ from: i, to: t, options: a });
                });
            },
          },
          {
            key: "getUnmatchedAutoAnimateElements",
            value: function (e) {
              var t = this;
              return [].slice.call(e.children).reduce(function (e, n) {
                var i = n.querySelector("[data-auto-animate-target]");
                return (
                  n.hasAttribute("data-auto-animate-target") || i || e.push(n),
                  n.querySelector("[data-auto-animate-target]") &&
                    (e = e.concat(t.getUnmatchedAutoAnimateElements(n))),
                  e
                );
              }, []);
            },
          },
        ]),
        e
      );
    })(),
    sv = (function () {
      function e(t) {
        Ai(this, e), (this.Reveal = t);
      }
      return (
        xi(e, [
          {
            key: "configure",
            value: function (e, t) {
              !1 === e.fragments
                ? this.disable()
                : !1 === t.fragments && this.enable();
            },
          },
          {
            key: "disable",
            value: function () {
              xh(this.Reveal.getSlidesElement(), ".fragment").forEach(function (
                e
              ) {
                e.classList.add("visible"),
                  e.classList.remove("current-fragment");
              });
            },
          },
          {
            key: "enable",
            value: function () {
              xh(this.Reveal.getSlidesElement(), ".fragment").forEach(function (
                e
              ) {
                e.classList.remove("visible"),
                  e.classList.remove("current-fragment");
              });
            },
          },
          {
            key: "availableRoutes",
            value: function () {
              var e = this.Reveal.getCurrentSlide();
              if (e && this.Reveal.getConfig().fragments) {
                var t = e.querySelectorAll(".fragment:not(.disabled)"),
                  n = e.querySelectorAll(
                    ".fragment:not(.disabled):not(.visible)"
                  );
                return { prev: t.length - n.length > 0, next: !!n.length };
              }
              return { prev: !1, next: !1 };
            },
          },
          {
            key: "sort",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              e = Array.from(e);
              var n = [],
                i = [],
                r = [];
              e.forEach(function (e) {
                if (e.hasAttribute("data-fragment-index")) {
                  var t = parseInt(e.getAttribute("data-fragment-index"), 10);
                  n[t] || (n[t] = []), n[t].push(e);
                } else i.push([e]);
              }),
                (n = n.concat(i));
              var a = 0;
              return (
                n.forEach(function (e) {
                  e.forEach(function (e) {
                    r.push(e), e.setAttribute("data-fragment-index", a);
                  }),
                    a++;
                }),
                !0 === t ? n : r
              );
            },
          },
          {
            key: "sortAll",
            value: function () {
              var e = this;
              this.Reveal.getHorizontalSlides().forEach(function (t) {
                var n = xh(t, "section");
                n.forEach(function (t, n) {
                  e.sort(t.querySelectorAll(".fragment"));
                }, e),
                  0 === n.length && e.sort(t.querySelectorAll(".fragment"));
              });
            },
          },
          {
            key: "update",
            value: function (e, t) {
              var n = this,
                i = { shown: [], hidden: [] },
                r = this.Reveal.getCurrentSlide();
              if (
                r &&
                this.Reveal.getConfig().fragments &&
                (t = t || this.sort(r.querySelectorAll(".fragment"))).length
              ) {
                var a = 0;
                if ("number" != typeof e) {
                  var o = this.sort(
                    r.querySelectorAll(".fragment.visible")
                  ).pop();
                  o &&
                    (e = parseInt(
                      o.getAttribute("data-fragment-index") || 0,
                      10
                    ));
                }
                Array.from(t).forEach(function (t, r) {
                  if (
                    (t.hasAttribute("data-fragment-index") &&
                      (r = parseInt(t.getAttribute("data-fragment-index"), 10)),
                    (a = Math.max(a, r)),
                    r <= e)
                  ) {
                    var o = t.classList.contains("visible");
                    t.classList.add("visible"),
                      t.classList.remove("current-fragment"),
                      r === e &&
                        (n.Reveal.announceStatus(n.Reveal.getStatusText(t)),
                        t.classList.add("current-fragment"),
                        n.Reveal.slideContent.startEmbeddedContent(t)),
                      o ||
                        (i.shown.push(t),
                        n.Reveal.dispatchEvent({
                          target: t,
                          type: "visible",
                          bubbles: !1,
                        }));
                  } else {
                    var s = t.classList.contains("visible");
                    t.classList.remove("visible"),
                      t.classList.remove("current-fragment"),
                      s &&
                        (n.Reveal.slideContent.stopEmbeddedContent(t),
                        i.hidden.push(t),
                        n.Reveal.dispatchEvent({
                          target: t,
                          type: "hidden",
                          bubbles: !1,
                        }));
                  }
                }),
                  (e = "number" == typeof e ? e : -1),
                  (e = Math.max(Math.min(e, a), -1)),
                  r.setAttribute("data-fragment", e);
              }
              return i;
            },
          },
          {
            key: "sync",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.Reveal.getCurrentSlide();
              return this.sort(e.querySelectorAll(".fragment"));
            },
          },
          {
            key: "goto",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n = this.Reveal.getCurrentSlide();
              if (n && this.Reveal.getConfig().fragments) {
                var i = this.sort(
                  n.querySelectorAll(".fragment:not(.disabled)")
                );
                if (i.length) {
                  if ("number" != typeof e) {
                    var r = this.sort(
                      n.querySelectorAll(".fragment:not(.disabled).visible")
                    ).pop();
                    e = r
                      ? parseInt(r.getAttribute("data-fragment-index") || 0, 10)
                      : -1;
                  }
                  e += t;
                  var a = this.update(e, i);
                  return (
                    a.hidden.length &&
                      this.Reveal.dispatchEvent({
                        type: "fragmenthidden",
                        data: { fragment: a.hidden[0], fragments: a.hidden },
                      }),
                    a.shown.length &&
                      this.Reveal.dispatchEvent({
                        type: "fragmentshown",
                        data: { fragment: a.shown[0], fragments: a.shown },
                      }),
                    this.Reveal.controls.update(),
                    this.Reveal.progress.update(),
                    this.Reveal.getConfig().fragmentInURL &&
                      this.Reveal.location.writeURL(),
                    !(!a.shown.length && !a.hidden.length)
                  );
                }
              }
              return !1;
            },
          },
          {
            key: "next",
            value: function () {
              return this.goto(null, 1);
            },
          },
          {
            key: "prev",
            value: function () {
              return this.goto(null, -1);
            },
          },
        ]),
        e
      );
    })(),
    lv = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.active = !1),
          (this.onSlideClicked = this.onSlideClicked.bind(this));
      }
      return (
        xi(e, [
          {
            key: "activate",
            value: function () {
              var e = this;
              if (this.Reveal.getConfig().overview && !this.isActive()) {
                (this.active = !0),
                  this.Reveal.getRevealElement().classList.add("overview"),
                  this.Reveal.cancelAutoSlide(),
                  this.Reveal.getSlidesElement().appendChild(
                    this.Reveal.getBackgroundsElement()
                  ),
                  xh(this.Reveal.getRevealElement(), ev).forEach(function (t) {
                    t.classList.contains("stack") ||
                      t.addEventListener("click", e.onSlideClicked, !0);
                  });
                var t = this.Reveal.getComputedSlideSize();
                (this.overviewSlideWidth = t.width + 70),
                  (this.overviewSlideHeight = t.height + 70),
                  this.Reveal.getConfig().rtl &&
                    (this.overviewSlideWidth = -this.overviewSlideWidth),
                  this.Reveal.updateSlidesVisibility(),
                  this.layout(),
                  this.update(),
                  this.Reveal.layout();
                var n = this.Reveal.getIndices();
                this.Reveal.dispatchEvent({
                  type: "overviewshown",
                  data: {
                    indexh: n.h,
                    indexv: n.v,
                    currentSlide: this.Reveal.getCurrentSlide(),
                  },
                });
              }
            },
          },
          {
            key: "layout",
            value: function () {
              var e = this;
              this.Reveal.getHorizontalSlides().forEach(function (t, n) {
                t.setAttribute("data-index-h", n),
                  Ch(
                    t,
                    "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"
                  ),
                  t.classList.contains("stack") &&
                    xh(t, "section").forEach(function (t, i) {
                      t.setAttribute("data-index-h", n),
                        t.setAttribute("data-index-v", i),
                        Ch(
                          t,
                          "translate3d(0, " +
                            i * e.overviewSlideHeight +
                            "px, 0)"
                        );
                    });
              }),
                Array.from(
                  this.Reveal.getBackgroundsElement().childNodes
                ).forEach(function (t, n) {
                  Ch(
                    t,
                    "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"
                  ),
                    xh(t, ".slide-background").forEach(function (t, n) {
                      Ch(
                        t,
                        "translate3d(0, " + n * e.overviewSlideHeight + "px, 0)"
                      );
                    });
                });
            },
          },
          {
            key: "update",
            value: function () {
              var e = Math.min(window.innerWidth, window.innerHeight),
                t = Math.max(e / 5, 150) / e,
                n = this.Reveal.getIndices();
              this.Reveal.transformSlides({
                overview: [
                  "scale(" + t + ")",
                  "translateX(" + -n.h * this.overviewSlideWidth + "px)",
                  "translateY(" + -n.v * this.overviewSlideHeight + "px)",
                ].join(" "),
              });
            },
          },
          {
            key: "deactivate",
            value: function () {
              var e = this;
              if (this.Reveal.getConfig().overview) {
                (this.active = !1),
                  this.Reveal.getRevealElement().classList.remove("overview"),
                  this.Reveal.getRevealElement().classList.add(
                    "overview-deactivating"
                  ),
                  setTimeout(function () {
                    e.Reveal.getRevealElement().classList.remove(
                      "overview-deactivating"
                    );
                  }, 1),
                  this.Reveal.getRevealElement().appendChild(
                    this.Reveal.getBackgroundsElement()
                  ),
                  xh(this.Reveal.getRevealElement(), ev).forEach(function (t) {
                    Ch(t, ""),
                      t.removeEventListener("click", e.onSlideClicked, !0);
                  }),
                  xh(
                    this.Reveal.getBackgroundsElement(),
                    ".slide-background"
                  ).forEach(function (e) {
                    Ch(e, "");
                  }),
                  this.Reveal.transformSlides({ overview: "" });
                var t = this.Reveal.getIndices();
                this.Reveal.slide(t.h, t.v),
                  this.Reveal.layout(),
                  this.Reveal.cueAutoSlide(),
                  this.Reveal.dispatchEvent({
                    type: "overviewhidden",
                    data: {
                      indexh: t.h,
                      indexv: t.v,
                      currentSlide: this.Reveal.getCurrentSlide(),
                    },
                  });
              }
            },
          },
          {
            key: "toggle",
            value: function (e) {
              "boolean" == typeof e
                ? e
                  ? this.activate()
                  : this.deactivate()
                : this.isActive()
                ? this.deactivate()
                : this.activate();
            },
          },
          {
            key: "isActive",
            value: function () {
              return this.active;
            },
          },
          {
            key: "onSlideClicked",
            value: function (e) {
              if (this.isActive()) {
                e.preventDefault();
                for (var t = e.target; t && !t.nodeName.match(/section/gi); )
                  t = t.parentNode;
                if (
                  t &&
                  !t.classList.contains("disabled") &&
                  (this.deactivate(), t.nodeName.match(/section/gi))
                ) {
                  var n = parseInt(t.getAttribute("data-index-h"), 10),
                    i = parseInt(t.getAttribute("data-index-v"), 10);
                  this.Reveal.slide(n, i);
                }
              }
            },
          },
        ]),
        e
      );
    })(),
    uv = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.shortcuts = {}),
          (this.bindings = {}),
          (this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)),
          (this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this));
      }
      return (
        xi(e, [
          {
            key: "configure",
            value: function (e, t) {
              "linear" === e.navigationMode
                ? ((this.shortcuts[
                    "&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"
                  ] = "Next slide"),
                  (this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] =
                    "Previous slide"))
                : ((this.shortcuts["N  ,  SPACE"] = "Next slide"),
                  (this.shortcuts["P  ,  Shift SPACE"] = "Previous slide"),
                  (this.shortcuts["&#8592;  ,  H"] = "Navigate left"),
                  (this.shortcuts["&#8594;  ,  L"] = "Navigate right"),
                  (this.shortcuts["&#8593;  ,  K"] = "Navigate up"),
                  (this.shortcuts["&#8595;  ,  J"] = "Navigate down")),
                (this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] =
                  "Navigate without fragments"),
                (this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] =
                  "Jump to first/last slide"),
                (this.shortcuts["B  ,  ."] = "Pause"),
                (this.shortcuts.F = "Fullscreen"),
                (this.shortcuts.G = "Jump to slide"),
                (this.shortcuts["ESC, O"] = "Slide overview");
            },
          },
          {
            key: "bind",
            value: function () {
              document.addEventListener("keydown", this.onDocumentKeyDown, !1),
                document.addEventListener(
                  "keypress",
                  this.onDocumentKeyPress,
                  !1
                );
            },
          },
          {
            key: "unbind",
            value: function () {
              document.removeEventListener(
                "keydown",
                this.onDocumentKeyDown,
                !1
              ),
                document.removeEventListener(
                  "keypress",
                  this.onDocumentKeyPress,
                  !1
                );
            },
          },
          {
            key: "addKeyBinding",
            value: function (e, t) {
              "object" === Ei(e) && e.keyCode
                ? (this.bindings[e.keyCode] = {
                    callback: t,
                    key: e.key,
                    description: e.description,
                  })
                : (this.bindings[e] = {
                    callback: t,
                    key: null,
                    description: null,
                  });
            },
          },
          {
            key: "removeKeyBinding",
            value: function (e) {
              delete this.bindings[e];
            },
          },
          {
            key: "triggerKey",
            value: function (e) {
              this.onDocumentKeyDown({ keyCode: e });
            },
          },
          {
            key: "registerKeyboardShortcut",
            value: function (e, t) {
              this.shortcuts[e] = t;
            },
          },
          {
            key: "getShortcuts",
            value: function () {
              return this.shortcuts;
            },
          },
          {
            key: "getBindings",
            value: function () {
              return this.bindings;
            },
          },
          {
            key: "onDocumentKeyPress",
            value: function (e) {
              e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp();
            },
          },
          {
            key: "onDocumentKeyDown",
            value: function (e) {
              var t = this.Reveal.getConfig();
              if (
                "function" == typeof t.keyboardCondition &&
                !1 === t.keyboardCondition(e)
              )
                return !0;
              if ("focused" === t.keyboardCondition && !this.Reveal.isFocused())
                return !0;
              var n = e.keyCode,
                i = !this.Reveal.isAutoSliding();
              this.Reveal.onUserInput(e);
              var r =
                  document.activeElement &&
                  !0 === document.activeElement.isContentEditable,
                a =
                  document.activeElement &&
                  document.activeElement.tagName &&
                  /input|textarea/i.test(document.activeElement.tagName),
                o =
                  document.activeElement &&
                  document.activeElement.className &&
                  /speaker-notes/i.test(document.activeElement.className),
                s =
                  !(
                    (-1 !== [32, 37, 38, 39, 40, 78, 80].indexOf(e.keyCode) &&
                      e.shiftKey) ||
                    e.altKey
                  ) &&
                  (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
              if (!(r || a || o || s)) {
                var l,
                  u = [66, 86, 190, 191];
                if ("object" === Ei(t.keyboard))
                  for (l in t.keyboard)
                    "togglePause" === t.keyboard[l] && u.push(parseInt(l, 10));
                if (this.Reveal.isPaused() && -1 === u.indexOf(n)) return !1;
                var c,
                  d,
                  h =
                    "linear" === t.navigationMode ||
                    !this.Reveal.hasHorizontalSlides() ||
                    !this.Reveal.hasVerticalSlides(),
                  f = !1;
                if ("object" === Ei(t.keyboard))
                  for (l in t.keyboard)
                    if (parseInt(l, 10) === n) {
                      var v = t.keyboard[l];
                      "function" == typeof v
                        ? v.apply(null, [e])
                        : "string" == typeof v &&
                          "function" == typeof this.Reveal[v] &&
                          this.Reveal[v].call(),
                        (f = !0);
                    }
                if (!1 === f)
                  for (l in this.bindings)
                    if (parseInt(l, 10) === n) {
                      var p = this.bindings[l].callback;
                      "function" == typeof p
                        ? p.apply(null, [e])
                        : "string" == typeof p &&
                          "function" == typeof this.Reveal[p] &&
                          this.Reveal[p].call(),
                        (f = !0);
                    }
                !1 === f &&
                  ((f = !0),
                  80 === n || 33 === n
                    ? this.Reveal.prev({ skipFragments: e.altKey })
                    : 78 === n || 34 === n
                    ? this.Reveal.next({ skipFragments: e.altKey })
                    : 72 === n || 37 === n
                    ? e.shiftKey
                      ? this.Reveal.slide(0)
                      : !this.Reveal.overview.isActive() && h
                      ? this.Reveal.prev({ skipFragments: e.altKey })
                      : this.Reveal.left({ skipFragments: e.altKey })
                    : 76 === n || 39 === n
                    ? e.shiftKey
                      ? this.Reveal.slide(
                          this.Reveal.getHorizontalSlides().length - 1
                        )
                      : !this.Reveal.overview.isActive() && h
                      ? this.Reveal.next({ skipFragments: e.altKey })
                      : this.Reveal.right({ skipFragments: e.altKey })
                    : 75 === n || 38 === n
                    ? e.shiftKey
                      ? this.Reveal.slide(void 0, 0)
                      : !this.Reveal.overview.isActive() && h
                      ? this.Reveal.prev({ skipFragments: e.altKey })
                      : this.Reveal.up({ skipFragments: e.altKey })
                    : 74 === n || 40 === n
                    ? e.shiftKey
                      ? this.Reveal.slide(void 0, Number.MAX_VALUE)
                      : !this.Reveal.overview.isActive() && h
                      ? this.Reveal.next({ skipFragments: e.altKey })
                      : this.Reveal.down({ skipFragments: e.altKey })
                    : 36 === n
                    ? this.Reveal.slide(0)
                    : 35 === n
                    ? this.Reveal.slide(
                        this.Reveal.getHorizontalSlides().length - 1
                      )
                    : 32 === n
                    ? (this.Reveal.overview.isActive() &&
                        this.Reveal.overview.deactivate(),
                      e.shiftKey
                        ? this.Reveal.prev({ skipFragments: e.altKey })
                        : this.Reveal.next({ skipFragments: e.altKey }))
                    : 58 === n ||
                      59 === n ||
                      66 === n ||
                      86 === n ||
                      190 === n ||
                      191 === n
                    ? this.Reveal.togglePause()
                    : 70 === n
                    ? ((c = t.embedded
                        ? this.Reveal.getViewportElement()
                        : document.documentElement),
                      (d =
                        (c = c || document.documentElement).requestFullscreen ||
                        c.webkitRequestFullscreen ||
                        c.webkitRequestFullScreen ||
                        c.mozRequestFullScreen ||
                        c.msRequestFullscreen) && d.apply(c))
                    : 65 === n
                    ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(i)
                    : 71 === n
                    ? t.jumpToSlide && this.Reveal.toggleJumpToSlide()
                    : (f = !1)),
                  f
                    ? e.preventDefault && e.preventDefault()
                    : (27 !== n && 79 !== n) ||
                      (!1 === this.Reveal.closeOverlay() &&
                        this.Reveal.overview.toggle(),
                      e.preventDefault && e.preventDefault()),
                  this.Reveal.cueAutoSlide();
              }
            },
          },
        ]),
        e
      );
    })(),
    cv = (function () {
      function e(t) {
        Ai(this, e),
          Li(this, "MAX_REPLACE_STATE_FREQUENCY", 1e3),
          (this.Reveal = t),
          (this.writeURLTimeout = 0),
          (this.replaceStateTimestamp = 0),
          (this.onWindowHashChange = this.onWindowHashChange.bind(this));
      }
      return (
        xi(e, [
          {
            key: "bind",
            value: function () {
              window.addEventListener(
                "hashchange",
                this.onWindowHashChange,
                !1
              );
            },
          },
          {
            key: "unbind",
            value: function () {
              window.removeEventListener(
                "hashchange",
                this.onWindowHashChange,
                !1
              );
            },
          },
          {
            key: "getIndicesFromHash",
            value: function () {
              var e,
                t,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : window.location.hash,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = n.replace(/^#\/?/, ""),
                a = r.split("/");
              if (/^[0-9]*$/.test(a[0]) || !r.length) {
                var o,
                  s = this.Reveal.getConfig(),
                  l = s.hashOneBasedIndex || i.oneBasedIndex ? 1 : 0,
                  u = parseInt(a[0], 10) - l || 0,
                  c = parseInt(a[1], 10) - l || 0;
                return (
                  s.fragmentInURL &&
                    ((o = parseInt(a[2], 10)), isNaN(o) && (o = void 0)),
                  { h: u, v: c, f: o }
                );
              }
              /\/[-\d]+$/g.test(r) &&
                ((t = parseInt(r.split("/").pop(), 10)),
                (t = isNaN(t) ? void 0 : t),
                (r = r.split("/").shift()));
              try {
                e = document.getElementById(decodeURIComponent(r));
              } catch (e) {}
              return e
                ? Si(Si({}, this.Reveal.getIndices(e)), {}, { f: t })
                : null;
            },
          },
          {
            key: "readURL",
            value: function () {
              var e = this.Reveal.getIndices(),
                t = this.getIndicesFromHash();
              t
                ? (t.h === e.h && t.v === e.v && void 0 === t.f) ||
                  this.Reveal.slide(t.h, t.v, t.f)
                : this.Reveal.slide(e.h || 0, e.v || 0);
            },
          },
          {
            key: "writeURL",
            value: function (e) {
              var t = this.Reveal.getConfig(),
                n = this.Reveal.getCurrentSlide();
              if ((clearTimeout(this.writeURLTimeout), "number" == typeof e))
                this.writeURLTimeout = setTimeout(this.writeURL, e);
              else if (n) {
                var i = this.getHash();
                t.history
                  ? (window.location.hash = i)
                  : t.hash &&
                    ("/" === i
                      ? this.debouncedReplaceState(
                          window.location.pathname + window.location.search
                        )
                      : this.debouncedReplaceState("#" + i));
              }
            },
          },
          {
            key: "replaceState",
            value: function (e) {
              window.history.replaceState(null, null, e),
                (this.replaceStateTimestamp = Date.now());
            },
          },
          {
            key: "debouncedReplaceState",
            value: function (e) {
              var t = this;
              clearTimeout(this.replaceStateTimeout),
                Date.now() - this.replaceStateTimestamp >
                this.MAX_REPLACE_STATE_FREQUENCY
                  ? this.replaceState(e)
                  : (this.replaceStateTimeout = setTimeout(function () {
                      return t.replaceState(e);
                    }, this.MAX_REPLACE_STATE_FREQUENCY));
            },
          },
          {
            key: "getHash",
            value: function (e) {
              var t = "/",
                n = e || this.Reveal.getCurrentSlide(),
                i = n ? n.getAttribute("id") : null;
              i && (i = encodeURIComponent(i));
              var r = this.Reveal.getIndices(e);
              if (
                (this.Reveal.getConfig().fragmentInURL || (r.f = void 0),
                "string" == typeof i && i.length)
              )
                (t = "/" + i), r.f >= 0 && (t += "/" + r.f);
              else {
                var a = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
                (r.h > 0 || r.v > 0 || r.f >= 0) && (t += r.h + a),
                  (r.v > 0 || r.f >= 0) && (t += "/" + (r.v + a)),
                  r.f >= 0 && (t += "/" + r.f);
              }
              return t;
            },
          },
          {
            key: "onWindowHashChange",
            value: function (e) {
              this.readURL();
            },
          },
        ]),
        e
      );
    })(),
    dv = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this)),
          (this.onNavigateRightClicked =
            this.onNavigateRightClicked.bind(this)),
          (this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this)),
          (this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this)),
          (this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this)),
          (this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this));
      }
      return (
        xi(e, [
          {
            key: "render",
            value: function () {
              var e = this.Reveal.getConfig().rtl,
                t = this.Reveal.getRevealElement();
              (this.element = document.createElement("aside")),
                (this.element.className = "controls"),
                (this.element.innerHTML =
                  '<button class="navigate-left" aria-label="'
                    .concat(
                      e ? "next slide" : "previous slide",
                      '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="'
                    )
                    .concat(
                      e ? "previous slide" : "next slide",
                      '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'
                    )),
                this.Reveal.getRevealElement().appendChild(this.element),
                (this.controlsLeft = xh(t, ".navigate-left")),
                (this.controlsRight = xh(t, ".navigate-right")),
                (this.controlsUp = xh(t, ".navigate-up")),
                (this.controlsDown = xh(t, ".navigate-down")),
                (this.controlsPrev = xh(t, ".navigate-prev")),
                (this.controlsNext = xh(t, ".navigate-next")),
                (this.controlsRightArrow =
                  this.element.querySelector(".navigate-right")),
                (this.controlsLeftArrow =
                  this.element.querySelector(".navigate-left")),
                (this.controlsDownArrow =
                  this.element.querySelector(".navigate-down"));
            },
          },
          {
            key: "configure",
            value: function (e, t) {
              (this.element.style.display = e.controls ? "block" : "none"),
                this.element.setAttribute(
                  "data-controls-layout",
                  e.controlsLayout
                ),
                this.element.setAttribute(
                  "data-controls-back-arrows",
                  e.controlsBackArrows
                );
            },
          },
          {
            key: "bind",
            value: function () {
              var e = this,
                t = ["touchstart", "click"];
              Uh && (t = ["touchstart"]),
                t.forEach(function (t) {
                  e.controlsLeft.forEach(function (n) {
                    return n.addEventListener(t, e.onNavigateLeftClicked, !1);
                  }),
                    e.controlsRight.forEach(function (n) {
                      return n.addEventListener(
                        t,
                        e.onNavigateRightClicked,
                        !1
                      );
                    }),
                    e.controlsUp.forEach(function (n) {
                      return n.addEventListener(t, e.onNavigateUpClicked, !1);
                    }),
                    e.controlsDown.forEach(function (n) {
                      return n.addEventListener(t, e.onNavigateDownClicked, !1);
                    }),
                    e.controlsPrev.forEach(function (n) {
                      return n.addEventListener(t, e.onNavigatePrevClicked, !1);
                    }),
                    e.controlsNext.forEach(function (n) {
                      return n.addEventListener(t, e.onNavigateNextClicked, !1);
                    });
                });
            },
          },
          {
            key: "unbind",
            value: function () {
              var e = this;
              ["touchstart", "click"].forEach(function (t) {
                e.controlsLeft.forEach(function (n) {
                  return n.removeEventListener(t, e.onNavigateLeftClicked, !1);
                }),
                  e.controlsRight.forEach(function (n) {
                    return n.removeEventListener(
                      t,
                      e.onNavigateRightClicked,
                      !1
                    );
                  }),
                  e.controlsUp.forEach(function (n) {
                    return n.removeEventListener(t, e.onNavigateUpClicked, !1);
                  }),
                  e.controlsDown.forEach(function (n) {
                    return n.removeEventListener(
                      t,
                      e.onNavigateDownClicked,
                      !1
                    );
                  }),
                  e.controlsPrev.forEach(function (n) {
                    return n.removeEventListener(
                      t,
                      e.onNavigatePrevClicked,
                      !1
                    );
                  }),
                  e.controlsNext.forEach(function (n) {
                    return n.removeEventListener(
                      t,
                      e.onNavigateNextClicked,
                      !1
                    );
                  });
              });
            },
          },
          {
            key: "update",
            value: function () {
              var e = this.Reveal.availableRoutes();
              []
                .concat(
                  Pi(this.controlsLeft),
                  Pi(this.controlsRight),
                  Pi(this.controlsUp),
                  Pi(this.controlsDown),
                  Pi(this.controlsPrev),
                  Pi(this.controlsNext)
                )
                .forEach(function (e) {
                  e.classList.remove("enabled", "fragmented"),
                    e.setAttribute("disabled", "disabled");
                }),
                e.left &&
                  this.controlsLeft.forEach(function (e) {
                    e.classList.add("enabled"), e.removeAttribute("disabled");
                  }),
                e.right &&
                  this.controlsRight.forEach(function (e) {
                    e.classList.add("enabled"), e.removeAttribute("disabled");
                  }),
                e.up &&
                  this.controlsUp.forEach(function (e) {
                    e.classList.add("enabled"), e.removeAttribute("disabled");
                  }),
                e.down &&
                  this.controlsDown.forEach(function (e) {
                    e.classList.add("enabled"), e.removeAttribute("disabled");
                  }),
                (e.left || e.up) &&
                  this.controlsPrev.forEach(function (e) {
                    e.classList.add("enabled"), e.removeAttribute("disabled");
                  }),
                (e.right || e.down) &&
                  this.controlsNext.forEach(function (e) {
                    e.classList.add("enabled"), e.removeAttribute("disabled");
                  });
              var t = this.Reveal.getCurrentSlide();
              if (t) {
                var n = this.Reveal.fragments.availableRoutes();
                n.prev &&
                  this.controlsPrev.forEach(function (e) {
                    e.classList.add("fragmented", "enabled"),
                      e.removeAttribute("disabled");
                  }),
                  n.next &&
                    this.controlsNext.forEach(function (e) {
                      e.classList.add("fragmented", "enabled"),
                        e.removeAttribute("disabled");
                    }),
                  this.Reveal.isVerticalSlide(t)
                    ? (n.prev &&
                        this.controlsUp.forEach(function (e) {
                          e.classList.add("fragmented", "enabled"),
                            e.removeAttribute("disabled");
                        }),
                      n.next &&
                        this.controlsDown.forEach(function (e) {
                          e.classList.add("fragmented", "enabled"),
                            e.removeAttribute("disabled");
                        }))
                    : (n.prev &&
                        this.controlsLeft.forEach(function (e) {
                          e.classList.add("fragmented", "enabled"),
                            e.removeAttribute("disabled");
                        }),
                      n.next &&
                        this.controlsRight.forEach(function (e) {
                          e.classList.add("fragmented", "enabled"),
                            e.removeAttribute("disabled");
                        }));
              }
              if (this.Reveal.getConfig().controlsTutorial) {
                var i = this.Reveal.getIndices();
                !this.Reveal.hasNavigatedVertically() && e.down
                  ? this.controlsDownArrow.classList.add("highlight")
                  : (this.controlsDownArrow.classList.remove("highlight"),
                    this.Reveal.getConfig().rtl
                      ? !this.Reveal.hasNavigatedHorizontally() &&
                        e.left &&
                        0 === i.v
                        ? this.controlsLeftArrow.classList.add("highlight")
                        : this.controlsLeftArrow.classList.remove("highlight")
                      : !this.Reveal.hasNavigatedHorizontally() &&
                        e.right &&
                        0 === i.v
                      ? this.controlsRightArrow.classList.add("highlight")
                      : this.controlsRightArrow.classList.remove("highlight"));
              }
            },
          },
          {
            key: "destroy",
            value: function () {
              this.unbind(), this.element.remove();
            },
          },
          {
            key: "onNavigateLeftClicked",
            value: function (e) {
              e.preventDefault(),
                this.Reveal.onUserInput(),
                "linear" === this.Reveal.getConfig().navigationMode
                  ? this.Reveal.prev()
                  : this.Reveal.left();
            },
          },
          {
            key: "onNavigateRightClicked",
            value: function (e) {
              e.preventDefault(),
                this.Reveal.onUserInput(),
                "linear" === this.Reveal.getConfig().navigationMode
                  ? this.Reveal.next()
                  : this.Reveal.right();
            },
          },
          {
            key: "onNavigateUpClicked",
            value: function (e) {
              e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
            },
          },
          {
            key: "onNavigateDownClicked",
            value: function (e) {
              e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
            },
          },
          {
            key: "onNavigatePrevClicked",
            value: function (e) {
              e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
            },
          },
          {
            key: "onNavigateNextClicked",
            value: function (e) {
              e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
            },
          },
        ]),
        e
      );
    })(),
    hv = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.onProgressClicked = this.onProgressClicked.bind(this));
      }
      return (
        xi(e, [
          {
            key: "render",
            value: function () {
              (this.element = document.createElement("div")),
                (this.element.className = "progress"),
                this.Reveal.getRevealElement().appendChild(this.element),
                (this.bar = document.createElement("span")),
                this.element.appendChild(this.bar);
            },
          },
          {
            key: "configure",
            value: function (e, t) {
              this.element.style.display = e.progress ? "block" : "none";
            },
          },
          {
            key: "bind",
            value: function () {
              this.Reveal.getConfig().progress &&
                this.element &&
                this.element.addEventListener(
                  "click",
                  this.onProgressClicked,
                  !1
                );
            },
          },
          {
            key: "unbind",
            value: function () {
              this.Reveal.getConfig().progress &&
                this.element &&
                this.element.removeEventListener(
                  "click",
                  this.onProgressClicked,
                  !1
                );
            },
          },
          {
            key: "update",
            value: function () {
              if (this.Reveal.getConfig().progress && this.bar) {
                var e = this.Reveal.getProgress();
                this.Reveal.getTotalSlides() < 2 && (e = 0),
                  (this.bar.style.transform = "scaleX(" + e + ")");
              }
            },
          },
          {
            key: "getMaxWidth",
            value: function () {
              return this.Reveal.getRevealElement().offsetWidth;
            },
          },
          {
            key: "onProgressClicked",
            value: function (e) {
              this.Reveal.onUserInput(e), e.preventDefault();
              var t = this.Reveal.getSlides(),
                n = t.length,
                i = Math.floor((e.clientX / this.getMaxWidth()) * n);
              this.Reveal.getConfig().rtl && (i = n - i);
              var r = this.Reveal.getIndices(t[i]);
              this.Reveal.slide(r.h, r.v);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.element.remove();
            },
          },
        ]),
        e
      );
    })(),
    fv = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.lastMouseWheelStep = 0),
          (this.cursorHidden = !1),
          (this.cursorInactiveTimeout = 0),
          (this.onDocumentCursorActive =
            this.onDocumentCursorActive.bind(this)),
          (this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this));
      }
      return (
        xi(e, [
          {
            key: "configure",
            value: function (e, t) {
              e.mouseWheel
                ? (document.addEventListener(
                    "DOMMouseScroll",
                    this.onDocumentMouseScroll,
                    !1
                  ),
                  document.addEventListener(
                    "mousewheel",
                    this.onDocumentMouseScroll,
                    !1
                  ))
                : (document.removeEventListener(
                    "DOMMouseScroll",
                    this.onDocumentMouseScroll,
                    !1
                  ),
                  document.removeEventListener(
                    "mousewheel",
                    this.onDocumentMouseScroll,
                    !1
                  )),
                e.hideInactiveCursor
                  ? (document.addEventListener(
                      "mousemove",
                      this.onDocumentCursorActive,
                      !1
                    ),
                    document.addEventListener(
                      "mousedown",
                      this.onDocumentCursorActive,
                      !1
                    ))
                  : (this.showCursor(),
                    document.removeEventListener(
                      "mousemove",
                      this.onDocumentCursorActive,
                      !1
                    ),
                    document.removeEventListener(
                      "mousedown",
                      this.onDocumentCursorActive,
                      !1
                    ));
            },
          },
          {
            key: "showCursor",
            value: function () {
              this.cursorHidden &&
                ((this.cursorHidden = !1),
                (this.Reveal.getRevealElement().style.cursor = ""));
            },
          },
          {
            key: "hideCursor",
            value: function () {
              !1 === this.cursorHidden &&
                ((this.cursorHidden = !0),
                (this.Reveal.getRevealElement().style.cursor = "none"));
            },
          },
          {
            key: "destroy",
            value: function () {
              this.showCursor(),
                document.removeEventListener(
                  "DOMMouseScroll",
                  this.onDocumentMouseScroll,
                  !1
                ),
                document.removeEventListener(
                  "mousewheel",
                  this.onDocumentMouseScroll,
                  !1
                ),
                document.removeEventListener(
                  "mousemove",
                  this.onDocumentCursorActive,
                  !1
                ),
                document.removeEventListener(
                  "mousedown",
                  this.onDocumentCursorActive,
                  !1
                );
            },
          },
          {
            key: "onDocumentCursorActive",
            value: function (e) {
              this.showCursor(),
                clearTimeout(this.cursorInactiveTimeout),
                (this.cursorInactiveTimeout = setTimeout(
                  this.hideCursor.bind(this),
                  this.Reveal.getConfig().hideCursorTime
                ));
            },
          },
          {
            key: "onDocumentMouseScroll",
            value: function (e) {
              if (Date.now() - this.lastMouseWheelStep > 1e3) {
                this.lastMouseWheelStep = Date.now();
                var t = e.detail || -e.wheelDelta;
                t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
              }
            },
          },
        ]),
        e
      );
    })(),
    vv = a,
    pv = Jt,
    gv = b,
    mv = o.f,
    yv = function (e) {
      return function (t) {
        for (var n, i = gv(t), r = pv(i), a = r.length, o = 0, s = []; a > o; )
          (n = r[o++]), (vv && !mv.call(i, n)) || s.push(e ? [n, i[n]] : i[n]);
        return s;
      };
    },
    bv = { entries: yv(!0), values: yv(!1) }.values;
  Gt(
    { target: "Object", stat: !0 },
    {
      values: function (e) {
        return bv(e);
      },
    }
  );
  var wv = function (e, t) {
      var n = document.createElement("script");
      (n.type = "text/javascript"),
        (n.async = !1),
        (n.defer = !1),
        (n.src = e),
        "function" == typeof t &&
          ((n.onload = n.onreadystatechange =
            function (e) {
              ("load" === e.type || /loaded|complete/.test(n.readyState)) &&
                ((n.onload = n.onreadystatechange = n.onerror = null), t());
            }),
          (n.onerror = function (e) {
            (n.onload = n.onreadystatechange = n.onerror = null),
              t(new Error("Failed loading script: " + n.src + "\n" + e));
          }));
      var i = document.querySelector("head");
      i.insertBefore(n, i.lastChild);
    },
    Sv = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.state = "idle"),
          (this.registeredPlugins = {}),
          (this.asyncDependencies = []);
      }
      return (
        xi(e, [
          {
            key: "load",
            value: function (e, t) {
              var n = this;
              return (
                (this.state = "loading"),
                e.forEach(this.registerPlugin.bind(this)),
                new Promise(function (e) {
                  var i = [],
                    r = 0;
                  if (
                    (t.forEach(function (e) {
                      (e.condition && !e.condition()) ||
                        (e.async ? n.asyncDependencies.push(e) : i.push(e));
                    }),
                    i.length)
                  ) {
                    r = i.length;
                    var a = function (t) {
                      t && "function" == typeof t.callback && t.callback(),
                        0 == --r && n.initPlugins().then(e);
                    };
                    i.forEach(function (e) {
                      "string" == typeof e.id
                        ? (n.registerPlugin(e), a(e))
                        : "string" == typeof e.src
                        ? wv(e.src, function () {
                            return a(e);
                          })
                        : (console.warn("Unrecognized plugin format", e), a());
                    });
                  } else n.initPlugins().then(e);
                })
              );
            },
          },
          {
            key: "initPlugins",
            value: function () {
              var e = this;
              return new Promise(function (t) {
                var n = Object.values(e.registeredPlugins),
                  i = n.length;
                if (0 === i) e.loadAsync().then(t);
                else {
                  var r,
                    a = function () {
                      0 == --i ? e.loadAsync().then(t) : r();
                    },
                    o = 0;
                  (r = function () {
                    var t = n[o++];
                    if ("function" == typeof t.init) {
                      var i = t.init(e.Reveal);
                      i && "function" == typeof i.then ? i.then(a) : a();
                    } else a();
                  }),
                    r();
                }
              });
            },
          },
          {
            key: "loadAsync",
            value: function () {
              return (
                (this.state = "loaded"),
                this.asyncDependencies.length &&
                  this.asyncDependencies.forEach(function (e) {
                    wv(e.src, e.callback);
                  }),
                Promise.resolve()
              );
            },
          },
          {
            key: "registerPlugin",
            value: function (e) {
              2 === arguments.length && "string" == typeof arguments[0]
                ? ((e = arguments[1]).id = arguments[0])
                : "function" == typeof e && (e = e());
              var t = e.id;
              "string" != typeof t
                ? console.warn(
                    "Unrecognized plugin format; can't find plugin.id",
                    e
                  )
                : void 0 === this.registeredPlugins[t]
                ? ((this.registeredPlugins[t] = e),
                  "loaded" === this.state &&
                    "function" == typeof e.init &&
                    e.init(this.Reveal))
                : console.warn(
                    'reveal.js: "' + t + '" plugin has already been registered'
                  );
            },
          },
          {
            key: "hasPlugin",
            value: function (e) {
              return !!this.registeredPlugins[e];
            },
          },
          {
            key: "getPlugin",
            value: function (e) {
              return this.registeredPlugins[e];
            },
          },
          {
            key: "getRegisteredPlugins",
            value: function () {
              return this.registeredPlugins;
            },
          },
          {
            key: "destroy",
            value: function () {
              Object.values(this.registeredPlugins).forEach(function (e) {
                "function" == typeof e.destroy && e.destroy();
              }),
                (this.registeredPlugins = {}),
                (this.asyncDependencies = []);
            },
          },
        ]),
        e
      );
    })();
  !(function (e) {
    var t = (function (e) {
      var t,
        n = Object.prototype,
        i = n.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        a = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        s = r.toStringTag || "@@toStringTag";
      function l(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        l({}, "");
      } catch (e) {
        l = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function u(e, t, n, i) {
        var r = t && t.prototype instanceof g ? t : g,
          a = Object.create(r.prototype),
          o = new P(i || []);
        return (
          (a._invoke = (function (e, t, n) {
            var i = d;
            return function (r, a) {
              if (i === f) throw new Error("Generator is already running");
              if (i === v) {
                if ("throw" === r) throw a;
                return N();
              }
              for (n.method = r, n.arg = a; ; ) {
                var o = n.delegate;
                if (o) {
                  var s = R(o, n);
                  if (s) {
                    if (s === p) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (i === d) throw ((i = v), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                i = f;
                var l = c(e, t, n);
                if ("normal" === l.type) {
                  if (((i = n.done ? v : h), l.arg === p)) continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((i = v), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          })(e, n, o)),
          a
        );
      }
      function c(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = u;
      var d = "suspendedStart",
        h = "suspendedYield",
        f = "executing",
        v = "completed",
        p = {};
      function g() {}
      function m() {}
      function y() {}
      var b = {};
      b[a] = function () {
        return this;
      };
      var w = Object.getPrototypeOf,
        S = w && w(w(C([])));
      S && S !== n && i.call(S, a) && (b = S);
      var E = (y.prototype = g.prototype = Object.create(b));
      function k(e) {
        ["next", "throw", "return"].forEach(function (t) {
          l(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function A(e, t) {
        function n(r, a, o, s) {
          var l = c(e[r], e, a);
          if ("throw" !== l.type) {
            var u = l.arg,
              d = u.value;
            return d && "object" == typeof d && i.call(d, "__await")
              ? t.resolve(d.__await).then(
                  function (e) {
                    n("next", e, o, s);
                  },
                  function (e) {
                    n("throw", e, o, s);
                  }
                )
              : t.resolve(d).then(
                  function (e) {
                    (u.value = e), o(u);
                  },
                  function (e) {
                    return n("throw", e, o, s);
                  }
                );
          }
          s(l.arg);
        }
        var r;
        this._invoke = function (e, i) {
          function a() {
            return new t(function (t, r) {
              n(e, i, t, r);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }
      function R(e, n) {
        var i = e.iterator[n.method];
        if (i === t) {
          if (((n.delegate = null), "throw" === n.method)) {
            if (
              e.iterator.return &&
              ((n.method = "return"),
              (n.arg = t),
              R(e, n),
              "throw" === n.method)
            )
              return p;
            (n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return p;
        }
        var r = c(i, e.iterator, n.arg);
        if ("throw" === r.type)
          return (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), p;
        var a = r.arg;
        return a
          ? a.done
            ? ((n[e.resultName] = a.value),
              (n.next = e.nextLoc),
              "return" !== n.method && ((n.method = "next"), (n.arg = t)),
              (n.delegate = null),
              p)
            : a
          : ((n.method = "throw"),
            (n.arg = new TypeError("iterator result is not an object")),
            (n.delegate = null),
            p);
      }
      function x(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function L(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function P(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(x, this),
          this.reset(!0);
      }
      function C(e) {
        if (e) {
          var n = e[a];
          if (n) return n.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function n() {
                for (; ++r < e.length; )
                  if (i.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                return (n.value = t), (n.done = !0), n;
              };
            return (o.next = o);
          }
        }
        return { next: N };
      }
      function N() {
        return { value: t, done: !0 };
      }
      return (
        (m.prototype = E.constructor = y),
        (y.constructor = m),
        (m.displayName = l(y, s, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === m || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, y)
              : ((e.__proto__ = y), l(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(E)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        k(A.prototype),
        (A.prototype[o] = function () {
          return this;
        }),
        (e.AsyncIterator = A),
        (e.async = function (t, n, i, r, a) {
          void 0 === a && (a = Promise);
          var o = new A(u(t, n, i, r), a);
          return e.isGeneratorFunction(n)
            ? o
            : o.next().then(function (e) {
                return e.done ? e.value : o.next();
              });
        }),
        k(E),
        l(E, s, "Generator"),
        (E[a] = function () {
          return this;
        }),
        (E.toString = function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var i = t.pop();
                if (i in e) return (n.value = i), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = C),
        (P.prototype = {
          constructor: P,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(L),
              !e)
            )
              for (var n in this)
                "t" === n.charAt(0) &&
                  i.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = t);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var n = this;
            function r(i, r) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (n.next = i),
                r && ((n.method = "next"), (n.arg = t)),
                !!r
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var o = this.tryEntries[a],
                s = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var l = i.call(o, "catchLoc"),
                  u = i.call(o, "finallyLoc");
                if (l && u) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (l) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (
                r.tryLoc <= this.prev &&
                i.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var a = r;
                break;
              }
            }
            a &&
              ("break" === e || "continue" === e) &&
              a.tryLoc <= t &&
              t <= a.finallyLoc &&
              (a = null);
            var o = a ? a.completion : {};
            return (
              (o.type = e),
              (o.arg = t),
              a
                ? ((this.method = "next"), (this.next = a.finallyLoc), p)
                : this.complete(o)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              p
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), L(n), p;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var i = n.completion;
                if ("throw" === i.type) {
                  var r = i.arg;
                  L(n);
                }
                return r;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, n, i) {
            return (
              (this.delegate = { iterator: C(e), resultName: n, nextLoc: i }),
              "next" === this.method && (this.arg = t),
              p
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = t;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(t);
    }
  })({ exports: {} });
  var Ev = (function () {
      function e(t) {
        Ai(this, e), (this.Reveal = t);
      }
      var t, n;
      return (
        xi(e, [
          {
            key: "setupPDF",
            value:
              ((t = regeneratorRuntime.mark(function e() {
                var t, n, i, r, a, o, s, l, u, c, d, h, f, v, p;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = this.Reveal.getConfig()),
                            (n = xh(this.Reveal.getRevealElement(), ev)),
                            (i =
                              t.slideNumber &&
                              /all|print/i.test(t.showSlideNumber)),
                            (r = this.Reveal.getComputedSlideSize(
                              window.innerWidth,
                              window.innerHeight
                            )),
                            (a = Math.floor(r.width * (1 + t.margin))),
                            (o = Math.floor(r.height * (1 + t.margin))),
                            (s = r.width),
                            (l = r.height),
                            (e.next = 8),
                            new Promise(requestAnimationFrame)
                          );
                        case 8:
                          return (
                            Mh(
                              "@page{size:" +
                                a +
                                "px " +
                                o +
                                "px; margin: 0px;}"
                            ),
                            Mh(
                              ".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " +
                                s +
                                "px; max-height:" +
                                l +
                                "px}"
                            ),
                            document.documentElement.classList.add("print-pdf"),
                            (document.body.style.width = a + "px"),
                            (document.body.style.height = o + "px"),
                            (u = document.querySelector(".reveal-viewport")) &&
                              (d = window.getComputedStyle(u)) &&
                              d.background &&
                              (c = d.background),
                            (e.next = 17),
                            new Promise(requestAnimationFrame)
                          );
                        case 17:
                          return (
                            this.Reveal.layoutSlideContents(s, l),
                            (e.next = 20),
                            new Promise(requestAnimationFrame)
                          );
                        case 20:
                          return (
                            (h = n.map(function (e) {
                              return e.scrollHeight;
                            })),
                            (f = []),
                            (v = n[0].parentNode),
                            (p = 1),
                            n.forEach(function (e, n) {
                              if (!1 === e.classList.contains("stack")) {
                                var r = (a - s) / 2,
                                  u = (o - l) / 2,
                                  d = h[n],
                                  v = Math.max(Math.ceil(d / o), 1);
                                ((1 ===
                                  (v = Math.min(v, t.pdfMaxPagesPerSlide)) &&
                                  t.center) ||
                                  e.classList.contains("center")) &&
                                  (u = Math.max((o - d) / 2, 0));
                                var g = document.createElement("div");
                                if (
                                  (f.push(g),
                                  (g.className = "pdf-page"),
                                  (g.style.height =
                                    (o + t.pdfPageHeightOffset) * v + "px"),
                                  c && (g.style.background = c),
                                  g.appendChild(e),
                                  (e.style.left = r + "px"),
                                  (e.style.top = u + "px"),
                                  (e.style.width = s + "px"),
                                  this.Reveal.slideContent.layout(e),
                                  e.slideBackgroundElement &&
                                    g.insertBefore(e.slideBackgroundElement, e),
                                  t.showNotes)
                                ) {
                                  var m = this.Reveal.getSlideNotes(e);
                                  if (m) {
                                    var y =
                                        "string" == typeof t.showNotes
                                          ? t.showNotes
                                          : "inline",
                                      b = document.createElement("div");
                                    b.classList.add("speaker-notes"),
                                      b.classList.add("speaker-notes-pdf"),
                                      b.setAttribute("data-layout", y),
                                      (b.innerHTML = m),
                                      "separate-page" === y
                                        ? f.push(b)
                                        : ((b.style.left = "8px"),
                                          (b.style.bottom = "8px"),
                                          (b.style.width = a - 16 + "px"),
                                          g.appendChild(b));
                                  }
                                }
                                if (i) {
                                  var w = document.createElement("div");
                                  w.classList.add("slide-number"),
                                    w.classList.add("slide-number-pdf"),
                                    (w.innerHTML = p++),
                                    g.appendChild(w);
                                }
                                if (t.pdfSeparateFragments) {
                                  var S,
                                    E = this.Reveal.fragments.sort(
                                      g.querySelectorAll(".fragment"),
                                      !0
                                    );
                                  E.forEach(function (e, t) {
                                    S &&
                                      S.forEach(function (e) {
                                        e.classList.remove("current-fragment");
                                      }),
                                      e.forEach(function (e) {
                                        e.classList.add(
                                          "visible",
                                          "current-fragment"
                                        );
                                      }, this);
                                    var n = g.cloneNode(!0);
                                    if (i) {
                                      var r = t + 1;
                                      n.querySelector(
                                        ".slide-number-pdf"
                                      ).innerHTML += "." + r;
                                    }
                                    f.push(n), (S = e);
                                  }, this),
                                    E.forEach(function (e) {
                                      e.forEach(function (e) {
                                        e.classList.remove(
                                          "visible",
                                          "current-fragment"
                                        );
                                      });
                                    });
                                } else
                                  xh(g, ".fragment:not(.fade-out)").forEach(
                                    function (e) {
                                      e.classList.add("visible");
                                    }
                                  );
                              }
                            }, this),
                            (e.next = 27),
                            new Promise(requestAnimationFrame)
                          );
                        case 27:
                          f.forEach(function (e) {
                            return v.appendChild(e);
                          }),
                            this.Reveal.slideContent.layout(
                              this.Reveal.getSlidesElement()
                            ),
                            this.Reveal.dispatchEvent({ type: "pdf-ready" });
                        case 30:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })),
              (n = function () {
                var e = this,
                  n = arguments;
                return new Promise(function (i, r) {
                  var a = t.apply(e, n);
                  function o(e) {
                    ki(a, i, r, o, s, "next", e);
                  }
                  function s(e) {
                    ki(a, i, r, o, s, "throw", e);
                  }
                  o(void 0);
                });
              }),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "isPrintingPDF",
            value: function () {
              return /print-pdf/gi.test(window.location.search);
            },
          },
        ]),
        e
      );
    })(),
    kv = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.touchStartX = 0),
          (this.touchStartY = 0),
          (this.touchStartCount = 0),
          (this.touchCaptured = !1),
          (this.onPointerDown = this.onPointerDown.bind(this)),
          (this.onPointerMove = this.onPointerMove.bind(this)),
          (this.onPointerUp = this.onPointerUp.bind(this)),
          (this.onTouchStart = this.onTouchStart.bind(this)),
          (this.onTouchMove = this.onTouchMove.bind(this)),
          (this.onTouchEnd = this.onTouchEnd.bind(this));
      }
      return (
        xi(e, [
          {
            key: "bind",
            value: function () {
              var e = this.Reveal.getRevealElement();
              "onpointerdown" in window
                ? (e.addEventListener("pointerdown", this.onPointerDown, !1),
                  e.addEventListener("pointermove", this.onPointerMove, !1),
                  e.addEventListener("pointerup", this.onPointerUp, !1))
                : window.navigator.msPointerEnabled
                ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1),
                  e.addEventListener("MSPointerMove", this.onPointerMove, !1),
                  e.addEventListener("MSPointerUp", this.onPointerUp, !1))
                : (e.addEventListener("touchstart", this.onTouchStart, !1),
                  e.addEventListener("touchmove", this.onTouchMove, !1),
                  e.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "unbind",
            value: function () {
              var e = this.Reveal.getRevealElement();
              e.removeEventListener("pointerdown", this.onPointerDown, !1),
                e.removeEventListener("pointermove", this.onPointerMove, !1),
                e.removeEventListener("pointerup", this.onPointerUp, !1),
                e.removeEventListener("MSPointerDown", this.onPointerDown, !1),
                e.removeEventListener("MSPointerMove", this.onPointerMove, !1),
                e.removeEventListener("MSPointerUp", this.onPointerUp, !1),
                e.removeEventListener("touchstart", this.onTouchStart, !1),
                e.removeEventListener("touchmove", this.onTouchMove, !1),
                e.removeEventListener("touchend", this.onTouchEnd, !1);
            },
          },
          {
            key: "isSwipePrevented",
            value: function (e) {
              if (Nh(e, "video, audio")) return !0;
              for (; e && "function" == typeof e.hasAttribute; ) {
                if (e.hasAttribute("data-prevent-swipe")) return !0;
                e = e.parentNode;
              }
              return !1;
            },
          },
          {
            key: "onTouchStart",
            value: function (e) {
              if (this.isSwipePrevented(e.target)) return !0;
              (this.touchStartX = e.touches[0].clientX),
                (this.touchStartY = e.touches[0].clientY),
                (this.touchStartCount = e.touches.length);
            },
          },
          {
            key: "onTouchMove",
            value: function (e) {
              if (this.isSwipePrevented(e.target)) return !0;
              var t = this.Reveal.getConfig();
              if (this.touchCaptured) Uh && e.preventDefault();
              else {
                this.Reveal.onUserInput(e);
                var n = e.touches[0].clientX,
                  i = e.touches[0].clientY;
                if (1 === e.touches.length && 2 !== this.touchStartCount) {
                  var r = this.Reveal.availableRoutes({ includeFragments: !0 }),
                    a = n - this.touchStartX,
                    o = i - this.touchStartY;
                  a > 40 && Math.abs(a) > Math.abs(o)
                    ? ((this.touchCaptured = !0),
                      "linear" === t.navigationMode
                        ? t.rtl
                          ? this.Reveal.next()
                          : this.Reveal.prev()
                        : this.Reveal.left())
                    : a < -40 && Math.abs(a) > Math.abs(o)
                    ? ((this.touchCaptured = !0),
                      "linear" === t.navigationMode
                        ? t.rtl
                          ? this.Reveal.prev()
                          : this.Reveal.next()
                        : this.Reveal.right())
                    : o > 40 && r.up
                    ? ((this.touchCaptured = !0),
                      "linear" === t.navigationMode
                        ? this.Reveal.prev()
                        : this.Reveal.up())
                    : o < -40 &&
                      r.down &&
                      ((this.touchCaptured = !0),
                      "linear" === t.navigationMode
                        ? this.Reveal.next()
                        : this.Reveal.down()),
                    t.embedded
                      ? (this.touchCaptured || this.Reveal.isVerticalSlide()) &&
                        e.preventDefault()
                      : e.preventDefault();
                }
              }
            },
          },
          {
            key: "onTouchEnd",
            value: function (e) {
              this.touchCaptured = !1;
            },
          },
          {
            key: "onPointerDown",
            value: function (e) {
              (e.pointerType !== e.MSPOINTER_TYPE_TOUCH &&
                "touch" !== e.pointerType) ||
                ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
                this.onTouchStart(e));
            },
          },
          {
            key: "onPointerMove",
            value: function (e) {
              (e.pointerType !== e.MSPOINTER_TYPE_TOUCH &&
                "touch" !== e.pointerType) ||
                ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
                this.onTouchMove(e));
            },
          },
          {
            key: "onPointerUp",
            value: function (e) {
              (e.pointerType !== e.MSPOINTER_TYPE_TOUCH &&
                "touch" !== e.pointerType) ||
                ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
                this.onTouchEnd(e));
            },
          },
        ]),
        e
      );
    })(),
    Av = "focus",
    Rv = "blur",
    xv = (function () {
      function e(t) {
        Ai(this, e),
          (this.Reveal = t),
          (this.onRevealPointerDown = this.onRevealPointerDown.bind(this)),
          (this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this));
      }
      return (
        xi(e, [
          {
            key: "configure",
            value: function (e, t) {
              e.embedded ? this.blur() : (this.focus(), this.unbind());
            },
          },
          {
            key: "bind",
            value: function () {
              this.Reveal.getConfig().embedded &&
                this.Reveal.getRevealElement().addEventListener(
                  "pointerdown",
                  this.onRevealPointerDown,
                  !1
                );
            },
          },
          {
            key: "unbind",
            value: function () {
              this.Reveal.getRevealElement().removeEventListener(
                "pointerdown",
                this.onRevealPointerDown,
                !1
              ),
                document.removeEventListener(
                  "pointerdown",
                  this.onDocumentPointerDown,
                  !1
                );
            },
          },
          {
            key: "focus",
            value: function () {
              this.state !== Av &&
                (this.Reveal.getRevealElement().classList.add("focused"),
                document.addEventListener(
                  "pointerdown",
                  this.onDocumentPointerDown,
                  !1
                )),
                (this.state = Av);
            },
          },
          {
            key: "blur",
            value: function () {
              this.state !== Rv &&
                (this.Reveal.getRevealElement().classList.remove("focused"),
                document.removeEventListener(
                  "pointerdown",
                  this.onDocumentPointerDown,
                  !1
                )),
                (this.state = Rv);
            },
          },
          {
            key: "isFocused",
            value: function () {
              return this.state === Av;
            },
          },
          {
            key: "destroy",
            value: function () {
              this.Reveal.getRevealElement().classList.remove("focused");
            },
          },
          {
            key: "onRevealPointerDown",
            value: function (e) {
              this.focus();
            },
          },
          {
            key: "onDocumentPointerDown",
            value: function (e) {
              var t = Ih(e.target, ".reveal");
              (t && t === this.Reveal.getRevealElement()) || this.blur();
            },
          },
        ]),
        e
      );
    })(),
    Lv = (function () {
      function e(t) {
        Ai(this, e), (this.Reveal = t);
      }
      return (
        xi(e, [
          {
            key: "render",
            value: function () {
              (this.element = document.createElement("div")),
                (this.element.className = "speaker-notes"),
                this.element.setAttribute("data-prevent-swipe", ""),
                this.element.setAttribute("tabindex", "0"),
                this.Reveal.getRevealElement().appendChild(this.element);
            },
          },
          {
            key: "configure",
            value: function (e, t) {
              e.showNotes &&
                this.element.setAttribute(
                  "data-layout",
                  "string" == typeof e.showNotes ? e.showNotes : "inline"
                );
            },
          },
          {
            key: "update",
            value: function () {
              this.Reveal.getConfig().showNotes &&
                this.element &&
                this.Reveal.getCurrentSlide() &&
                !this.Reveal.print.isPrintingPDF() &&
                (this.element.innerHTML =
                  this.getSlideNotes() ||
                  '<span class="notes-placeholder">No notes on this slide.</span>');
            },
          },
          {
            key: "updateVisibility",
            value: function () {
              this.Reveal.getConfig().showNotes &&
              this.hasNotes() &&
              !this.Reveal.print.isPrintingPDF()
                ? this.Reveal.getRevealElement().classList.add("show-notes")
                : this.Reveal.getRevealElement().classList.remove("show-notes");
            },
          },
          {
            key: "hasNotes",
            value: function () {
              return (
                this.Reveal.getSlidesElement().querySelectorAll(
                  "[data-notes], aside.notes"
                ).length > 0
              );
            },
          },
          {
            key: "isSpeakerNotesWindow",
            value: function () {
              return !!window.location.search.match(/receiver/gi);
            },
          },
          {
            key: "getSlideNotes",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.Reveal.getCurrentSlide();
              if (e.hasAttribute("data-notes"))
                return e.getAttribute("data-notes");
              var t = e.querySelectorAll("aside.notes");
              return t
                ? Array.from(t)
                    .map(function (e) {
                      return e.innerHTML;
                    })
                    .join("\n")
                : null;
            },
          },
          {
            key: "destroy",
            value: function () {
              this.element.remove();
            },
          },
        ]),
        e
      );
    })(),
    Pv = A,
    Cv = ut,
    Nv = at,
    Iv = function (e) {
      for (
        var t = Pv(this),
          n = Nv(t.length),
          i = arguments.length,
          r = Cv(i > 1 ? arguments[1] : void 0, n),
          a = i > 2 ? arguments[2] : void 0,
          o = void 0 === a ? n : Cv(a, n);
        o > r;

      )
        t[r++] = e;
      return t;
    },
    Tv = Nf;
  Gt({ target: "Array", proto: !0 }, { fill: Iv }), Tv("fill");
  var Mv = (function () {
      function e(t, n) {
        Ai(this, e),
          (this.diameter = 100),
          (this.diameter2 = this.diameter / 2),
          (this.thickness = 6),
          (this.playing = !1),
          (this.progress = 0),
          (this.progressOffset = 1),
          (this.container = t),
          (this.progressCheck = n),
          (this.canvas = document.createElement("canvas")),
          (this.canvas.className = "playback"),
          (this.canvas.width = this.diameter),
          (this.canvas.height = this.diameter),
          (this.canvas.style.width = this.diameter2 + "px"),
          (this.canvas.style.height = this.diameter2 + "px"),
          (this.context = this.canvas.getContext("2d")),
          this.container.appendChild(this.canvas),
          this.render();
      }
      return (
        xi(e, [
          {
            key: "setPlaying",
            value: function (e) {
              var t = this.playing;
              (this.playing = e),
                !t && this.playing ? this.animate() : this.render();
            },
          },
          {
            key: "animate",
            value: function () {
              var e = this.progress;
              (this.progress = this.progressCheck()),
                e > 0.8 &&
                  this.progress < 0.2 &&
                  (this.progressOffset = this.progress),
                this.render(),
                this.playing && requestAnimationFrame(this.animate.bind(this));
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.playing ? this.progress : 0,
                t = this.diameter2 - this.thickness,
                n = this.diameter2,
                i = this.diameter2,
                r = 28;
              this.progressOffset += 0.1 * (1 - this.progressOffset);
              var a = -Math.PI / 2 + e * (2 * Math.PI),
                o = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
              this.context.save(),
                this.context.clearRect(0, 0, this.diameter, this.diameter),
                this.context.beginPath(),
                this.context.arc(n, i, t + 4, 0, 2 * Math.PI, !1),
                (this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )"),
                this.context.fill(),
                this.context.beginPath(),
                this.context.arc(n, i, t, 0, 2 * Math.PI, !1),
                (this.context.lineWidth = this.thickness),
                (this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )"),
                this.context.stroke(),
                this.playing &&
                  (this.context.beginPath(),
                  this.context.arc(n, i, t, o, a, !1),
                  (this.context.lineWidth = this.thickness),
                  (this.context.strokeStyle = "#fff"),
                  this.context.stroke()),
                this.context.translate(n - 14, i - 14),
                this.playing
                  ? ((this.context.fillStyle = "#fff"),
                    this.context.fillRect(0, 0, 10, r),
                    this.context.fillRect(18, 0, 10, r))
                  : (this.context.beginPath(),
                    this.context.translate(4, 0),
                    this.context.moveTo(0, 0),
                    this.context.lineTo(24, 14),
                    this.context.lineTo(0, r),
                    (this.context.fillStyle = "#fff"),
                    this.context.fill()),
                this.context.restore();
            },
          },
          {
            key: "on",
            value: function (e, t) {
              this.canvas.addEventListener(e, t, !1);
            },
          },
          {
            key: "off",
            value: function (e, t) {
              this.canvas.removeEventListener(e, t, !1);
            },
          },
          {
            key: "destroy",
            value: function () {
              (this.playing = !1),
                this.canvas.parentNode &&
                  this.container.removeChild(this.canvas);
            },
          },
        ]),
        e
      );
    })(),
    Ov = {
      width: 960,
      height: 700,
      margin: 0.04,
      minScale: 0.2,
      maxScale: 2,
      controls: !0,
      controlsTutorial: !0,
      controlsLayout: "bottom-right",
      controlsBackArrows: "faded",
      progress: !0,
      slideNumber: !1,
      showSlideNumber: "all",
      hashOneBasedIndex: !1,
      hash: !1,
      respondToHashChanges: !0,
      jumpToSlide: !0,
      history: !1,
      keyboard: !0,
      keyboardCondition: null,
      disableLayout: !1,
      overview: !0,
      center: !0,
      touch: !0,
      loop: !1,
      rtl: !1,
      navigationMode: "default",
      shuffle: !1,
      fragments: !0,
      fragmentInURL: !0,
      embedded: !1,
      help: !0,
      pause: !0,
      showNotes: !1,
      showHiddenSlides: !1,
      autoPlayMedia: null,
      preloadIframes: null,
      autoAnimate: !0,
      autoAnimateMatcher: null,
      autoAnimateEasing: "ease",
      autoAnimateDuration: 1,
      autoAnimateUnmatched: !0,
      autoAnimateStyles: [
        "opacity",
        "color",
        "background-color",
        "padding",
        "font-size",
        "line-height",
        "letter-spacing",
        "border-width",
        "border-color",
        "border-radius",
        "outline",
        "outline-offset",
      ],
      autoSlide: 0,
      autoSlideStoppable: !0,
      autoSlideMethod: null,
      defaultTiming: null,
      mouseWheel: !1,
      previewLinks: !1,
      postMessage: !0,
      postMessageEvents: !1,
      focusBodyOnPageVisibilityChange: !0,
      transition: "slide",
      transitionSpeed: "default",
      backgroundTransition: "fade",
      parallaxBackgroundImage: "",
      parallaxBackgroundSize: "",
      parallaxBackgroundRepeat: "",
      parallaxBackgroundPosition: "",
      parallaxBackgroundHorizontal: null,
      parallaxBackgroundVertical: null,
      pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
      pdfSeparateFragments: !0,
      pdfPageHeightOffset: -1,
      viewDistance: 3,
      mobileViewDistance: 2,
      display: "block",
      hideInactiveCursor: !0,
      hideCursorTime: 5e3,
      sortFragmentsOnSync: !0,
      dependencies: [],
      plugins: [],
    },
    jv = "4.4.0";
  function Dv(e, t) {
    arguments.length < 2 &&
      ((t = arguments[0]), (e = document.querySelector(".reveal")));
    var n,
      i,
      r,
      a,
      o,
      s = {},
      l = {},
      u = !1,
      c = { hasNavigatedHorizontally: !1, hasNavigatedVertically: !1 },
      d = [],
      h = 1,
      f = { layout: "", overview: "" },
      v = {},
      p = "idle",
      g = 0,
      m = 0,
      y = -1,
      b = !1,
      w = new Wh(s),
      S = new Kh(s),
      E = new Df(s),
      k = new ov(s),
      A = new $f(s),
      R = new sv(s),
      x = new lv(s),
      L = new uv(s),
      P = new cv(s),
      C = new dv(s),
      N = new hv(s),
      I = new fv(s),
      T = new Sv(s),
      M = new Ev(s),
      O = new xv(s),
      j = new kv(s),
      D = new Lv(s);
    function F(n) {
      if (!e) throw 'Unable to find presentation root (<div class="reveal">).';
      if (((v.wrapper = e), (v.slides = e.querySelector(".slides")), !v.slides))
        throw 'Unable to find slides container (<div class="slides">).';
      return (
        (l = Si(Si(Si(Si(Si({}, Ov), l), t), n), Oh())),
        z(),
        window.addEventListener("load", ue, !1),
        T.load(l.plugins, l.dependencies).then(H),
        new Promise(function (e) {
          return s.on("ready", e);
        })
      );
    }
    function z() {
      !0 === l.embedded
        ? (v.viewport = Ih(e, ".reveal-viewport") || e)
        : ((v.viewport = document.body),
          document.documentElement.classList.add("reveal-full-page")),
        v.viewport.classList.add("reveal-viewport");
    }
    function H() {
      (u = !0),
        U(),
        _(),
        Y(),
        K(),
        V(),
        Pe(),
        G(),
        P.readURL(),
        A.update(!0),
        setTimeout(function () {
          v.slides.classList.remove("no-transition"),
            v.wrapper.classList.add("ready"),
            te({
              type: "ready",
              data: { indexh: n, indexv: i, currentSlide: a },
            });
        }, 1),
        M.isPrintingPDF() &&
          ($(),
          "complete" === document.readyState
            ? M.setupPDF()
            : window.addEventListener("load", function () {
                M.setupPDF();
              }));
    }
    function U() {
      l.showHiddenSlides ||
        xh(v.wrapper, 'section[data-visibility="hidden"]').forEach(function (
          e
        ) {
          e.parentNode.removeChild(e);
        });
    }
    function _() {
      v.slides.classList.add("no-transition"),
        Hh
          ? v.wrapper.classList.add("no-hover")
          : v.wrapper.classList.remove("no-hover"),
        A.render(),
        S.render(),
        E.render(),
        C.render(),
        N.render(),
        D.render(),
        (v.pauseOverlay = Th(
          v.wrapper,
          "div",
          "pause-overlay",
          l.controls
            ? '<button class="resume-button">Resume presentation</button>'
            : null
        )),
        (v.statusElement = B()),
        v.wrapper.setAttribute("role", "application");
    }
    function B() {
      var e = v.wrapper.querySelector(".aria-status");
      return (
        e ||
          (((e = document.createElement("div")).style.position = "absolute"),
          (e.style.height = "1px"),
          (e.style.width = "1px"),
          (e.style.overflow = "hidden"),
          (e.style.clip = "rect( 1px, 1px, 1px, 1px )"),
          e.classList.add("aria-status"),
          e.setAttribute("aria-live", "polite"),
          e.setAttribute("aria-atomic", "true"),
          v.wrapper.appendChild(e)),
        e
      );
    }
    function q(e) {
      v.statusElement.textContent = e;
    }
    function W(e) {
      var t = "";
      if (3 === e.nodeType) t += e.textContent;
      else if (1 === e.nodeType) {
        var n = e.getAttribute("aria-hidden"),
          i = "none" === window.getComputedStyle(e).display;
        "true" === n ||
          i ||
          Array.from(e.childNodes).forEach(function (e) {
            t += W(e);
          });
      }
      return "" === (t = t.trim()) ? "" : t + " ";
    }
    function K() {
      setInterval(function () {
        (0 === v.wrapper.scrollTop && 0 === v.wrapper.scrollLeft) ||
          ((v.wrapper.scrollTop = 0), (v.wrapper.scrollLeft = 0));
      }, 1e3);
    }
    function V() {
      document.addEventListener("fullscreenchange", ht),
        document.addEventListener("webkitfullscreenchange", ht);
    }
    function Y() {
      l.postMessage && window.addEventListener("message", st, !1);
    }
    function G(e) {
      var t = Si({}, l);
      if (("object" === Ei(e) && Rh(l, e), !1 !== s.isReady())) {
        var n = v.wrapper.querySelectorAll(ev).length;
        v.wrapper.classList.remove(t.transition),
          v.wrapper.classList.add(l.transition),
          v.wrapper.setAttribute("data-transition-speed", l.transitionSpeed),
          v.wrapper.setAttribute(
            "data-background-transition",
            l.backgroundTransition
          ),
          v.viewport.style.setProperty("--slide-width", l.width + "px"),
          v.viewport.style.setProperty("--slide-height", l.height + "px"),
          l.shuffle && Ce(),
          Lh(v.wrapper, "embedded", l.embedded),
          Lh(v.wrapper, "rtl", l.rtl),
          Lh(v.wrapper, "center", l.center),
          !1 === l.pause && be(),
          l.previewLinks
            ? (ie(), re("[data-preview-link=false]"))
            : (re(), ie("[data-preview-link]:not([data-preview-link=false])")),
          k.reset(),
          o && (o.destroy(), (o = null)),
          n > 1 &&
            l.autoSlide &&
            l.autoSlideStoppable &&
            ((o = new Mv(v.wrapper, function () {
              return Math.min(Math.max((Date.now() - y) / g, 0), 1);
            })).on("click", vt),
            (b = !1)),
          "default" !== l.navigationMode
            ? v.wrapper.setAttribute("data-navigation-mode", l.navigationMode)
            : v.wrapper.removeAttribute("data-navigation-mode"),
          D.configure(l, t),
          O.configure(l, t),
          I.configure(l, t),
          C.configure(l, t),
          N.configure(l, t),
          L.configure(l, t),
          R.configure(l, t),
          S.configure(l, t),
          xe();
      }
    }
    function X() {
      window.addEventListener("resize", ct, !1),
        l.touch && j.bind(),
        l.keyboard && L.bind(),
        l.progress && N.bind(),
        l.respondToHashChanges && P.bind(),
        C.bind(),
        O.bind(),
        v.slides.addEventListener("click", ut, !1),
        v.slides.addEventListener("transitionend", lt, !1),
        v.pauseOverlay.addEventListener("click", be, !1),
        l.focusBodyOnPageVisibilityChange &&
          document.addEventListener("visibilitychange", dt, !1);
    }
    function $() {
      j.unbind(),
        O.unbind(),
        L.unbind(),
        C.unbind(),
        N.unbind(),
        P.unbind(),
        window.removeEventListener("resize", ct, !1),
        v.slides.removeEventListener("click", ut, !1),
        v.slides.removeEventListener("transitionend", lt, !1),
        v.pauseOverlay.removeEventListener("click", be, !1);
    }
    function J() {
      $(),
        Je(),
        re(),
        D.destroy(),
        O.destroy(),
        T.destroy(),
        I.destroy(),
        C.destroy(),
        N.destroy(),
        A.destroy(),
        S.destroy(),
        E.destroy(),
        document.removeEventListener("fullscreenchange", ht),
        document.removeEventListener("webkitfullscreenchange", ht),
        document.removeEventListener("visibilitychange", dt, !1),
        window.removeEventListener("message", st, !1),
        window.removeEventListener("load", ue, !1),
        v.pauseOverlay && v.pauseOverlay.remove(),
        v.statusElement && v.statusElement.remove(),
        document.documentElement.classList.remove("reveal-full-page"),
        v.wrapper.classList.remove(
          "ready",
          "center",
          "has-horizontal-slides",
          "has-vertical-slides"
        ),
        v.wrapper.removeAttribute("data-transition-speed"),
        v.wrapper.removeAttribute("data-background-transition"),
        v.viewport.classList.remove("reveal-viewport"),
        v.viewport.style.removeProperty("--slide-width"),
        v.viewport.style.removeProperty("--slide-height"),
        v.slides.style.removeProperty("width"),
        v.slides.style.removeProperty("height"),
        v.slides.style.removeProperty("zoom"),
        v.slides.style.removeProperty("left"),
        v.slides.style.removeProperty("top"),
        v.slides.style.removeProperty("bottom"),
        v.slides.style.removeProperty("right"),
        v.slides.style.removeProperty("transform"),
        Array.from(v.wrapper.querySelectorAll(ev)).forEach(function (e) {
          e.style.removeProperty("display"),
            e.style.removeProperty("top"),
            e.removeAttribute("hidden"),
            e.removeAttribute("aria-hidden");
        });
    }
    function Q(t, n, i) {
      e.addEventListener(t, n, i);
    }
    function Z(t, n, i) {
      e.removeEventListener(t, n, i);
    }
    function ee(e) {
      "string" == typeof e.layout && (f.layout = e.layout),
        "string" == typeof e.overview && (f.overview = e.overview),
        f.layout
          ? Ch(v.slides, f.layout + " " + f.overview)
          : Ch(v.slides, f.overview);
    }
    function te(e) {
      var t = e.target,
        n = void 0 === t ? v.wrapper : t,
        i = e.type,
        r = e.data,
        a = e.bubbles,
        o = void 0 === a || a,
        s = document.createEvent("HTMLEvents", 1, 2);
      return (
        s.initEvent(i, o, !0),
        Rh(s, r),
        n.dispatchEvent(s),
        n === v.wrapper && ne(i),
        s
      );
    }
    function ne(e, t) {
      if (l.postMessageEvents && window.parent !== window.self) {
        var n = { namespace: "reveal", eventName: e, state: Ge() };
        Rh(n, t), window.parent.postMessage(JSON.stringify(n), "*");
      }
    }
    function ie() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
      Array.from(v.wrapper.querySelectorAll(e)).forEach(function (e) {
        /^(http|www)/gi.test(e.getAttribute("href")) &&
          e.addEventListener("click", ft, !1);
      });
    }
    function re() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
      Array.from(v.wrapper.querySelectorAll(e)).forEach(function (e) {
        /^(http|www)/gi.test(e.getAttribute("href")) &&
          e.removeEventListener("click", ft, !1);
      });
    }
    function ae(e) {
      le(),
        (v.overlay = document.createElement("div")),
        v.overlay.classList.add("overlay"),
        v.overlay.classList.add("overlay-preview"),
        v.wrapper.appendChild(v.overlay),
        (v.overlay.innerHTML =
          '<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="'
            .concat(
              e,
              '" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="'
            )
            .concat(
              e,
              '"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>'
            )),
        v.overlay.querySelector("iframe").addEventListener(
          "load",
          function (e) {
            v.overlay.classList.add("loaded");
          },
          !1
        ),
        v.overlay.querySelector(".close").addEventListener(
          "click",
          function (e) {
            le(), e.preventDefault();
          },
          !1
        ),
        v.overlay.querySelector(".external").addEventListener(
          "click",
          function (e) {
            le();
          },
          !1
        );
    }
    function oe(e) {
      "boolean" == typeof e ? (e ? se() : le()) : v.overlay ? le() : se();
    }
    function se() {
      if (l.help) {
        le(),
          (v.overlay = document.createElement("div")),
          v.overlay.classList.add("overlay"),
          v.overlay.classList.add("overlay-help"),
          v.wrapper.appendChild(v.overlay);
        var e = '<p class="title">Keyboard Shortcuts</p><br/>',
          t = L.getShortcuts(),
          n = L.getBindings();
        for (var i in ((e += "<table><th>KEY</th><th>ACTION</th>"), t))
          e += "<tr><td>".concat(i, "</td><td>").concat(t[i], "</td></tr>");
        for (var r in n)
          n[r].key &&
            n[r].description &&
            (e += "<tr><td>"
              .concat(n[r].key, "</td><td>")
              .concat(n[r].description, "</td></tr>"));
        (e += "</table>"),
          (v.overlay.innerHTML =
            '\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">'.concat(
              e,
              "</div>\n\t\t\t\t</div>\n\t\t\t"
            )),
          v.overlay.querySelector(".close").addEventListener(
            "click",
            function (e) {
              le(), e.preventDefault();
            },
            !1
          );
      }
    }
    function le() {
      return (
        !!v.overlay &&
        (v.overlay.parentNode.removeChild(v.overlay), (v.overlay = null), !0)
      );
    }
    function ue() {
      if (v.wrapper && !M.isPrintingPDF()) {
        if (!l.disableLayout) {
          Hh &&
            !l.embedded &&
            document.documentElement.style.setProperty(
              "--vh",
              0.01 * window.innerHeight + "px"
            );
          var e = de(),
            t = h;
          ce(l.width, l.height),
            (v.slides.style.width = e.width + "px"),
            (v.slides.style.height = e.height + "px"),
            (h = Math.min(
              e.presentationWidth / e.width,
              e.presentationHeight / e.height
            )),
            (h = Math.max(h, l.minScale)),
            1 === (h = Math.min(h, l.maxScale))
              ? ((v.slides.style.zoom = ""),
                (v.slides.style.left = ""),
                (v.slides.style.top = ""),
                (v.slides.style.bottom = ""),
                (v.slides.style.right = ""),
                ee({ layout: "" }))
              : ((v.slides.style.zoom = ""),
                (v.slides.style.left = "50%"),
                (v.slides.style.top = "50%"),
                (v.slides.style.bottom = "auto"),
                (v.slides.style.right = "auto"),
                ee({ layout: "translate(-50%, -50%) scale(" + h + ")" }));
          for (
            var n = Array.from(v.wrapper.querySelectorAll(ev)),
              i = 0,
              r = n.length;
            i < r;
            i++
          ) {
            var a = n[i];
            "none" !== a.style.display &&
              (l.center || a.classList.contains("center")
                ? a.classList.contains("stack")
                  ? (a.style.top = 0)
                  : (a.style.top =
                      Math.max((e.height - a.scrollHeight) / 2, 0) + "px")
                : (a.style.top = ""));
          }
          t !== h &&
            te({ type: "resize", data: { oldScale: t, scale: h, size: e } });
        }
        v.viewport.style.setProperty("--slide-scale", h),
          N.update(),
          A.updateParallax(),
          x.isActive() && x.update();
      }
    }
    function ce(e, t) {
      xh(v.slides, "section > .stretch, section > .r-stretch").forEach(
        function (n) {
          var i = jh(n, t);
          if (/(img|video)/gi.test(n.nodeName)) {
            var r = n.naturalWidth || n.videoWidth,
              a = n.naturalHeight || n.videoHeight,
              o = Math.min(e / r, i / a);
            (n.style.width = r * o + "px"), (n.style.height = a * o + "px");
          } else (n.style.width = e + "px"), (n.style.height = i + "px");
        }
      );
    }
    function de(e, t) {
      var n = {
        width: l.width,
        height: l.height,
        presentationWidth: e || v.wrapper.offsetWidth,
        presentationHeight: t || v.wrapper.offsetHeight,
      };
      return (
        (n.presentationWidth -= n.presentationWidth * l.margin),
        (n.presentationHeight -= n.presentationHeight * l.margin),
        "string" == typeof n.width &&
          /%$/.test(n.width) &&
          (n.width = (parseInt(n.width, 10) / 100) * n.presentationWidth),
        "string" == typeof n.height &&
          /%$/.test(n.height) &&
          (n.height = (parseInt(n.height, 10) / 100) * n.presentationHeight),
        n
      );
    }
    function he(e, t) {
      "object" === Ei(e) &&
        "function" == typeof e.setAttribute &&
        e.setAttribute("data-previous-indexv", t || 0);
    }
    function fe(e) {
      if (
        "object" === Ei(e) &&
        "function" == typeof e.setAttribute &&
        e.classList.contains("stack")
      ) {
        var t = e.hasAttribute("data-start-indexv")
          ? "data-start-indexv"
          : "data-previous-indexv";
        return parseInt(e.getAttribute(t) || 0, 10);
      }
      return 0;
    }
    function ve() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
      return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
    }
    function pe() {
      return !(!a || !ve(a)) && !a.nextElementSibling;
    }
    function ge() {
      return 0 === n && 0 === i;
    }
    function me() {
      return (
        !!a &&
        !a.nextElementSibling &&
        (!ve(a) || !a.parentNode.nextElementSibling)
      );
    }
    function ye() {
      if (l.pause) {
        var e = v.wrapper.classList.contains("paused");
        Je(),
          v.wrapper.classList.add("paused"),
          !1 === e && te({ type: "paused" });
      }
    }
    function be() {
      var e = v.wrapper.classList.contains("paused");
      v.wrapper.classList.remove("paused"), $e(), e && te({ type: "resumed" });
    }
    function we(e) {
      "boolean" == typeof e ? (e ? ye() : be()) : Se() ? be() : ye();
    }
    function Se() {
      return v.wrapper.classList.contains("paused");
    }
    function Ee(e) {
      "boolean" == typeof e
        ? e
          ? E.show()
          : E.hide()
        : E.isVisible()
        ? E.hide()
        : E.show();
    }
    function ke(e) {
      "boolean" == typeof e ? (e ? Ze() : Qe()) : b ? Ze() : Qe();
    }
    function Ae() {
      return !(!g || b);
    }
    function Re(e, t, o, s) {
      if (
        !te({
          type: "beforeslidechange",
          data: {
            indexh: void 0 === e ? n : e,
            indexv: void 0 === t ? i : t,
            origin: s,
          },
        }).defaultPrevented
      ) {
        r = a;
        var u = v.wrapper.querySelectorAll(tv);
        if (0 !== u.length) {
          void 0 !== t || x.isActive() || (t = fe(u[e])),
            r &&
              r.parentNode &&
              r.parentNode.classList.contains("stack") &&
              he(r.parentNode, i);
          var c = d.concat();
          d.length = 0;
          var h = n || 0,
            f = i || 0;
          (n = Ne(tv, void 0 === e ? n : e)),
            (i = Ne(nv, void 0 === t ? i : t));
          var g = n !== h || i !== f;
          g || (r = null);
          var m = u[n],
            y = m.querySelectorAll("section");
          a = y[i] || m;
          var b = !1;
          g &&
            r &&
            a &&
            !x.isActive() &&
            (r.hasAttribute("data-auto-animate") &&
              a.hasAttribute("data-auto-animate") &&
              r.getAttribute("data-auto-animate-id") ===
                a.getAttribute("data-auto-animate-id") &&
              !(n > h || i > f ? a : r).hasAttribute(
                "data-auto-animate-restart"
              ) &&
              ((b = !0), v.slides.classList.add("disable-slide-transitions")),
            (p = "running")),
            Me(),
            ue(),
            x.isActive() && x.update(),
            void 0 !== o && R.goto(o),
            r &&
              r !== a &&
              (r.classList.remove("present"),
              r.setAttribute("aria-hidden", "true"),
              ge() &&
                setTimeout(function () {
                  _e().forEach(function (e) {
                    he(e, 0);
                  });
                }, 0));
          e: for (var E = 0, L = d.length; E < L; E++) {
            for (var I = 0; I < c.length; I++)
              if (c[I] === d[E]) {
                c.splice(I, 1);
                continue e;
              }
            v.viewport.classList.add(d[E]), te({ type: d[E] });
          }
          for (; c.length; ) v.viewport.classList.remove(c.pop());
          g &&
            te({
              type: "slidechanged",
              data: {
                indexh: n,
                indexv: i,
                previousSlide: r,
                currentSlide: a,
                origin: s,
              },
            }),
            (!g && r) || (w.stopEmbeddedContent(r), w.startEmbeddedContent(a)),
            requestAnimationFrame(function () {
              q(W(a));
            }),
            N.update(),
            C.update(),
            D.update(),
            A.update(),
            A.updateParallax(),
            S.update(),
            R.update(),
            P.writeURL(),
            $e(),
            b &&
              (setTimeout(function () {
                v.slides.classList.remove("disable-slide-transitions");
              }, 0),
              l.autoAnimate && k.run(r, a));
        }
      }
    }
    function xe() {
      $(),
        X(),
        ue(),
        (g = l.autoSlide),
        $e(),
        A.create(),
        P.writeURL(),
        !0 === l.sortFragmentsOnSync && R.sortAll(),
        C.update(),
        N.update(),
        Me(),
        D.update(),
        D.updateVisibility(),
        A.update(!0),
        S.update(),
        w.formatEmbeddedContent(),
        !1 === l.autoPlayMedia
          ? w.stopEmbeddedContent(a, { unloadIframes: !1 })
          : w.startEmbeddedContent(a),
        x.isActive() && x.layout();
    }
    function Le() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
      A.sync(e), R.sync(e), w.load(e), A.update(), D.update();
    }
    function Pe() {
      He().forEach(function (e) {
        xh(e, "section").forEach(function (e, t) {
          t > 0 &&
            (e.classList.remove("present"),
            e.classList.remove("past"),
            e.classList.add("future"),
            e.setAttribute("aria-hidden", "true"));
        });
      });
    }
    function Ce() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He();
      e.forEach(function (t, n) {
        var i = e[Math.floor(Math.random() * e.length)];
        i.parentNode === t.parentNode && t.parentNode.insertBefore(t, i);
        var r = t.querySelectorAll("section");
        r.length && Ce(r);
      });
    }
    function Ne(e, t) {
      var n = xh(v.wrapper, e),
        i = n.length,
        r = M.isPrintingPDF(),
        a = !1,
        o = !1;
      if (i) {
        l.loop && (t >= i && (a = !0), (t %= i) < 0 && ((t = i + t), (o = !0))),
          (t = Math.max(Math.min(t, i - 1), 0));
        for (var s = 0; s < i; s++) {
          var u = n[s],
            c = l.rtl && !ve(u);
          u.classList.remove("past"),
            u.classList.remove("present"),
            u.classList.remove("future"),
            u.setAttribute("hidden", ""),
            u.setAttribute("aria-hidden", "true"),
            u.querySelector("section") && u.classList.add("stack"),
            r
              ? u.classList.add("present")
              : s < t
              ? (u.classList.add(c ? "future" : "past"), l.fragments && Ie(u))
              : s > t
              ? (u.classList.add(c ? "past" : "future"), l.fragments && Te(u))
              : s === t && l.fragments && (a ? Te(u) : o && Ie(u));
        }
        var h = n[t],
          f = h.classList.contains("present");
        h.classList.add("present"),
          h.removeAttribute("hidden"),
          h.removeAttribute("aria-hidden"),
          f || te({ target: h, type: "visible", bubbles: !1 });
        var p = h.getAttribute("data-state");
        p && (d = d.concat(p.split(" ")));
      } else t = 0;
      return t;
    }
    function Ie(e) {
      xh(e, ".fragment").forEach(function (e) {
        e.classList.add("visible"), e.classList.remove("current-fragment");
      });
    }
    function Te(e) {
      xh(e, ".fragment.visible").forEach(function (e) {
        e.classList.remove("visible", "current-fragment");
      });
    }
    function Me() {
      var e,
        t = He(),
        r = t.length;
      if (r && void 0 !== n) {
        var a = x.isActive() ? 10 : l.viewDistance;
        Hh && (a = x.isActive() ? 6 : l.mobileViewDistance),
          M.isPrintingPDF() && (a = Number.MAX_VALUE);
        for (var o = 0; o < r; o++) {
          var s = t[o],
            u = xh(s, "section"),
            c = u.length;
          if (
            ((e = Math.abs((n || 0) - o) || 0),
            l.loop && (e = Math.abs(((n || 0) - o) % (r - a)) || 0),
            e < a ? w.load(s) : w.unload(s),
            c)
          )
            for (var d = fe(s), h = 0; h < c; h++) {
              var f = u[h];
              e + (o === (n || 0) ? Math.abs((i || 0) - h) : Math.abs(h - d)) <
              a
                ? w.load(f)
                : w.unload(f);
            }
        }
        qe()
          ? v.wrapper.classList.add("has-vertical-slides")
          : v.wrapper.classList.remove("has-vertical-slides"),
          Be()
            ? v.wrapper.classList.add("has-horizontal-slides")
            : v.wrapper.classList.remove("has-horizontal-slides");
      }
    }
    function Oe() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.includeFragments,
        r = void 0 !== t && t,
        a = v.wrapper.querySelectorAll(tv),
        o = v.wrapper.querySelectorAll(nv),
        s = {
          left: n > 0,
          right: n < a.length - 1,
          up: i > 0,
          down: i < o.length - 1,
        };
      if (
        (l.loop &&
          (a.length > 1 && ((s.left = !0), (s.right = !0)),
          o.length > 1 && ((s.up = !0), (s.down = !0))),
        a.length > 1 &&
          "linear" === l.navigationMode &&
          ((s.right = s.right || s.down), (s.left = s.left || s.up)),
        !0 === r)
      ) {
        var u = R.availableRoutes();
        (s.left = s.left || u.prev),
          (s.up = s.up || u.prev),
          (s.down = s.down || u.next),
          (s.right = s.right || u.next);
      }
      if (l.rtl) {
        var c = s.left;
        (s.left = s.right), (s.right = c);
      }
      return s;
    }
    function je() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
        t = He(),
        n = 0;
      e: for (var i = 0; i < t.length; i++) {
        for (
          var r = t[i], o = r.querySelectorAll("section"), s = 0;
          s < o.length;
          s++
        ) {
          if (o[s] === e) break e;
          "uncounted" !== o[s].dataset.visibility && n++;
        }
        if (r === e) break;
        !1 === r.classList.contains("stack") &&
          "uncounted" !== r.dataset.visibility &&
          n++;
      }
      return n;
    }
    function De() {
      var e = Ke(),
        t = je();
      if (a) {
        var n = a.querySelectorAll(".fragment");
        if (n.length > 0) {
          t +=
            (a.querySelectorAll(".fragment.visible").length / n.length) * 0.9;
        }
      }
      return Math.min(t / (e - 1), 1);
    }
    function Fe(e) {
      var t,
        r = n,
        o = i;
      if (e) {
        var s = ve(e),
          l = s ? e.parentNode : e,
          u = He();
        (r = Math.max(u.indexOf(l), 0)),
          (o = void 0),
          s && (o = Math.max(xh(e.parentNode, "section").indexOf(e), 0));
      }
      if (!e && a && a.querySelectorAll(".fragment").length > 0) {
        var c = a.querySelector(".current-fragment");
        t =
          c && c.hasAttribute("data-fragment-index")
            ? parseInt(c.getAttribute("data-fragment-index"), 10)
            : a.querySelectorAll(".fragment.visible").length - 1;
      }
      return { h: r, v: o, f: t };
    }
    function ze() {
      return xh(
        v.wrapper,
        ev + ':not(.stack):not([data-visibility="uncounted"])'
      );
    }
    function He() {
      return xh(v.wrapper, tv);
    }
    function Ue() {
      return xh(v.wrapper, ".slides>section>section");
    }
    function _e() {
      return xh(v.wrapper, tv + ".stack");
    }
    function Be() {
      return He().length > 1;
    }
    function qe() {
      return Ue().length > 1;
    }
    function We() {
      return ze().map(function (e) {
        for (var t = {}, n = 0; n < e.attributes.length; n++) {
          var i = e.attributes[n];
          t[i.name] = i.value;
        }
        return t;
      });
    }
    function Ke() {
      return ze().length;
    }
    function Ve(e, t) {
      var n = He()[e],
        i = n && n.querySelectorAll("section");
      return i && i.length && "number" == typeof t ? (i ? i[t] : void 0) : n;
    }
    function Ye(e, t) {
      var n = "number" == typeof e ? Ve(e, t) : e;
      if (n) return n.slideBackgroundElement;
    }
    function Ge() {
      var e = Fe();
      return {
        indexh: e.h,
        indexv: e.v,
        indexf: e.f,
        paused: Se(),
        overview: x.isActive(),
      };
    }
    function Xe(e) {
      if ("object" === Ei(e)) {
        Re(Ph(e.indexh), Ph(e.indexv), Ph(e.indexf));
        var t = Ph(e.paused),
          n = Ph(e.overview);
        "boolean" == typeof t && t !== Se() && we(t),
          "boolean" == typeof n && n !== x.isActive() && x.toggle(n);
      }
    }
    function $e() {
      if ((Je(), a && !1 !== l.autoSlide)) {
        var e = a.querySelector(".current-fragment");
        e || (e = a.querySelector(".fragment"));
        var t = e ? e.getAttribute("data-autoslide") : null,
          n = a.parentNode ? a.parentNode.getAttribute("data-autoslide") : null,
          i = a.getAttribute("data-autoslide");
        t
          ? (g = parseInt(t, 10))
          : i
          ? (g = parseInt(i, 10))
          : n
          ? (g = parseInt(n, 10))
          : ((g = l.autoSlide),
            0 === a.querySelectorAll(".fragment").length &&
              xh(a, "video, audio").forEach(function (e) {
                e.hasAttribute("data-autoplay") &&
                  g &&
                  (1e3 * e.duration) / e.playbackRate > g &&
                  (g = (1e3 * e.duration) / e.playbackRate + 1e3);
              })),
          !g ||
            b ||
            Se() ||
            x.isActive() ||
            (me() && !R.availableRoutes().next && !0 !== l.loop) ||
            ((m = setTimeout(function () {
              "function" == typeof l.autoSlideMethod
                ? l.autoSlideMethod()
                : at(),
                $e();
            }, g)),
            (y = Date.now())),
          o && o.setPlaying(-1 !== m);
      }
    }
    function Je() {
      clearTimeout(m), (m = -1);
    }
    function Qe() {
      g &&
        !b &&
        ((b = !0),
        te({ type: "autoslidepaused" }),
        clearTimeout(m),
        o && o.setPlaying(!1));
    }
    function Ze() {
      g && b && ((b = !1), te({ type: "autoslideresumed" }), $e());
    }
    function et() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.skipFragments,
        r = void 0 !== t && t;
      (c.hasNavigatedHorizontally = !0),
        l.rtl
          ? (x.isActive() || r || !1 === R.next()) &&
            Oe().left &&
            Re(n + 1, "grid" === l.navigationMode ? i : void 0)
          : (x.isActive() || r || !1 === R.prev()) &&
            Oe().left &&
            Re(n - 1, "grid" === l.navigationMode ? i : void 0);
    }
    function tt() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.skipFragments,
        r = void 0 !== t && t;
      (c.hasNavigatedHorizontally = !0),
        l.rtl
          ? (x.isActive() || r || !1 === R.prev()) &&
            Oe().right &&
            Re(n - 1, "grid" === l.navigationMode ? i : void 0)
          : (x.isActive() || r || !1 === R.next()) &&
            Oe().right &&
            Re(n + 1, "grid" === l.navigationMode ? i : void 0);
    }
    function nt() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.skipFragments,
        r = void 0 !== t && t;
      (x.isActive() || r || !1 === R.prev()) && Oe().up && Re(n, i - 1);
    }
    function it() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.skipFragments,
        r = void 0 !== t && t;
      (c.hasNavigatedVertically = !0),
        (x.isActive() || r || !1 === R.next()) && Oe().down && Re(n, i + 1);
    }
    function rt() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = t.skipFragments,
        r = void 0 !== i && i;
      if (r || !1 === R.prev())
        if (Oe().up) nt({ skipFragments: r });
        else if (
          (e = l.rtl
            ? xh(v.wrapper, tv + ".future").pop()
            : xh(v.wrapper, tv + ".past").pop()) &&
          e.classList.contains("stack")
        ) {
          var a = e.querySelectorAll("section").length - 1 || void 0,
            o = n - 1;
          Re(o, a);
        } else et({ skipFragments: r });
    }
    function at() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.skipFragments,
        n = void 0 !== t && t;
      if (
        ((c.hasNavigatedHorizontally = !0),
        (c.hasNavigatedVertically = !0),
        n || !1 === R.next())
      ) {
        var i = Oe();
        i.down && i.right && l.loop && pe() && (i.down = !1),
          i.down
            ? it({ skipFragments: n })
            : l.rtl
            ? et({ skipFragments: n })
            : tt({ skipFragments: n });
      }
    }
    function ot(e) {
      l.autoSlideStoppable && Qe();
    }
    function st(e) {
      var t = e.data;
      if (
        "string" == typeof t &&
        "{" === t.charAt(0) &&
        "}" === t.charAt(t.length - 1) &&
        (t = JSON.parse(t)).method &&
        "function" == typeof s[t.method]
      )
        if (!1 === iv.test(t.method)) {
          var n = s[t.method].apply(s, t.args);
          ne("callback", { method: t.method, result: n });
        } else
          console.warn(
            'reveal.js: "' +
              t.method +
              '" is is blacklisted from the postMessage API'
          );
    }
    function lt(e) {
      "running" === p &&
        /section/gi.test(e.target.nodeName) &&
        ((p = "idle"),
        te({
          type: "slidetransitionend",
          data: { indexh: n, indexv: i, previousSlide: r, currentSlide: a },
        }));
    }
    function ut(e) {
      var t = Ih(e.target, 'a[href^="#"]');
      if (t) {
        var n = t.getAttribute("href"),
          i = P.getIndicesFromHash(n);
        i && (s.slide(i.h, i.v, i.f), e.preventDefault());
      }
    }
    function ct(e) {
      ue();
    }
    function dt(e) {
      !1 === document.hidden &&
        document.activeElement !== document.body &&
        ("function" == typeof document.activeElement.blur &&
          document.activeElement.blur(),
        document.body.focus());
    }
    function ht(e) {
      (document.fullscreenElement || document.webkitFullscreenElement) ===
        v.wrapper &&
        (e.stopImmediatePropagation(),
        setTimeout(function () {
          s.layout(), s.focus.focus();
        }, 1));
    }
    function ft(e) {
      if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
        var t = e.currentTarget.getAttribute("href");
        t && (ae(t), e.preventDefault());
      }
    }
    function vt(e) {
      me() && !1 === l.loop ? (Re(0, 0), Ze()) : b ? Ze() : Qe();
    }
    var pt = {
      VERSION: jv,
      initialize: F,
      configure: G,
      destroy: J,
      sync: xe,
      syncSlide: Le,
      syncFragments: R.sync.bind(R),
      slide: Re,
      left: et,
      right: tt,
      up: nt,
      down: it,
      prev: rt,
      next: at,
      navigateLeft: et,
      navigateRight: tt,
      navigateUp: nt,
      navigateDown: it,
      navigatePrev: rt,
      navigateNext: at,
      navigateFragment: R.goto.bind(R),
      prevFragment: R.prev.bind(R),
      nextFragment: R.next.bind(R),
      on: Q,
      off: Z,
      addEventListener: Q,
      removeEventListener: Z,
      layout: ue,
      shuffle: Ce,
      availableRoutes: Oe,
      availableFragments: R.availableRoutes.bind(R),
      toggleHelp: oe,
      toggleOverview: x.toggle.bind(x),
      togglePause: we,
      toggleAutoSlide: ke,
      toggleJumpToSlide: Ee,
      isFirstSlide: ge,
      isLastSlide: me,
      isLastVerticalSlide: pe,
      isVerticalSlide: ve,
      isPaused: Se,
      isAutoSliding: Ae,
      isSpeakerNotes: D.isSpeakerNotesWindow.bind(D),
      isOverview: x.isActive.bind(x),
      isFocused: O.isFocused.bind(O),
      isPrintingPDF: M.isPrintingPDF.bind(M),
      isReady: function () {
        return u;
      },
      loadSlide: w.load.bind(w),
      unloadSlide: w.unload.bind(w),
      showPreview: ae,
      hidePreview: le,
      addEventListeners: X,
      removeEventListeners: $,
      dispatchEvent: te,
      getState: Ge,
      setState: Xe,
      getProgress: De,
      getIndices: Fe,
      getSlidesAttributes: We,
      getSlidePastCount: je,
      getTotalSlides: Ke,
      getSlide: Ve,
      getPreviousSlide: function () {
        return r;
      },
      getCurrentSlide: function () {
        return a;
      },
      getSlideBackground: Ye,
      getSlideNotes: D.getSlideNotes.bind(D),
      getSlides: ze,
      getHorizontalSlides: He,
      getVerticalSlides: Ue,
      hasHorizontalSlides: Be,
      hasVerticalSlides: qe,
      hasNavigatedHorizontally: function () {
        return c.hasNavigatedHorizontally;
      },
      hasNavigatedVertically: function () {
        return c.hasNavigatedVertically;
      },
      addKeyBinding: L.addKeyBinding.bind(L),
      removeKeyBinding: L.removeKeyBinding.bind(L),
      triggerKey: L.triggerKey.bind(L),
      registerKeyboardShortcut: L.registerKeyboardShortcut.bind(L),
      getComputedSlideSize: de,
      getScale: function () {
        return h;
      },
      getConfig: function () {
        return l;
      },
      getQueryHash: Oh,
      getSlidePath: P.getHash.bind(P),
      getRevealElement: function () {
        return e;
      },
      getSlidesElement: function () {
        return v.slides;
      },
      getViewportElement: function () {
        return v.viewport;
      },
      getBackgroundsElement: function () {
        return A.element;
      },
      registerPlugin: T.registerPlugin.bind(T),
      hasPlugin: T.hasPlugin.bind(T),
      getPlugin: T.getPlugin.bind(T),
      getPlugins: T.getRegisteredPlugins.bind(T),
    };
    return (
      Rh(
        s,
        Si(
          Si({}, pt),
          {},
          {
            announceStatus: q,
            getStatusText: W,
            print: M,
            focus: O,
            progress: N,
            controls: C,
            location: P,
            overview: x,
            fragments: R,
            slideContent: w,
            slideNumber: S,
            onUserInput: ot,
            closeOverlay: le,
            updateSlidesVisibility: Me,
            layoutSlideContents: ce,
            transformSlides: ee,
            cueAutoSlide: $e,
            cancelAutoSlide: Je,
          }
        )
      ),
      pt
    );
  }
  var Fv = Dv,
    zv = [];
  return (
    (Fv.initialize = function (e) {
      return (
        Object.assign(Fv, new Dv(document.querySelector(".reveal"), e)),
        zv.map(function (e) {
          return e(Fv);
        }),
        Fv.initialize()
      );
    }),
    [
      "configure",
      "on",
      "off",
      "addEventListener",
      "removeEventListener",
      "registerPlugin",
    ].forEach(function (e) {
      Fv[e] = function () {
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
          n[i] = arguments[i];
        zv.push(function (t) {
          var i;
          return (i = t[e]).call.apply(i, [null].concat(n));
        });
      };
    }),
    (Fv.isReady = function () {
      return !1;
    }),
    (Fv.VERSION = jv),
    Fv
  );
});
