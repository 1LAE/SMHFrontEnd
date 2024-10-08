/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var j_ = Object.create;
  var an = Object.defineProperty;
  var z_ = Object.getOwnPropertyDescriptor;
  var K_ = Object.getOwnPropertyNames;
  var Y_ = Object.getPrototypeOf,
    $_ = Object.prototype.hasOwnProperty;
  var pe = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Pe = (e, t) => {
      for (var r in t) an(e, r, { get: t[r], enumerable: !0 });
    },
    Rs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of K_(t))
          !$_.call(e, i) &&
            i !== r &&
            an(e, i, {
              get: () => t[i],
              enumerable: !(n = z_(t, i)) || n.enumerable,
            });
      return e;
    };
  var ae = (e, t, r) => (
      (r = e != null ? j_(Y_(e)) : {}),
      Rs(
        t || !e || !e.__esModule
          ? an(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    et = (e) => Rs(an({}, "__esModule", { value: !0 }), e);
  var Li = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, _) {
        var O = new E.Bare();
        return O.init(f, _);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (_) {
          return "-" + _.toLowerCase();
        });
      }
      function n(f) {
        var _ = parseInt(f.slice(1), 16),
          O = (_ >> 16) & 255,
          C = (_ >> 8) & 255,
          I = 255 & _;
        return [O, C, I];
      }
      function i(f, _, O) {
        return (
          "#" + ((1 << 24) | (f << 16) | (_ << 8) | O).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, _) {
        d("Type warning: Expected: [" + f + "] Got: [" + typeof _ + "] " + _);
      }
      function s(f, _, O) {
        d("Units do not match [" + f + "]: " + _ + ", " + O);
      }
      function u(f, _, O) {
        if ((_ !== void 0 && (O = _), f === void 0)) return O;
        var C = O;
        return (
          lt.test(f) || !Ut.test(f)
            ? (C = parseInt(f, 10))
            : Ut.test(f) && (C = 1e3 * parseFloat(f)),
          0 > C && (C = 0),
          C === C ? C : O
        );
      }
      function d(f) {
        ne.debug && window && window.console.warn(f);
      }
      function y(f) {
        for (var _ = -1, O = f ? f.length : 0, C = []; ++_ < O; ) {
          var I = f[_];
          I && C.push(I);
        }
        return C;
      }
      var g = (function (f, _, O) {
          function C(ee) {
            return typeof ee == "object";
          }
          function I(ee) {
            return typeof ee == "function";
          }
          function N() {}
          function Y(ee, le) {
            function H() {
              var xe = new re();
              return I(xe.init) && xe.init.apply(xe, arguments), xe;
            }
            function re() {}
            le === O && ((le = ee), (ee = Object)), (H.Bare = re);
            var ie,
              Ee = (N[f] = ee[f]),
              Je = (re[f] = H[f] = new N());
            return (
              (Je.constructor = H),
              (H.mixin = function (xe) {
                return (re[f] = H[f] = Y(H, xe)[f]), H;
              }),
              (H.open = function (xe) {
                if (
                  ((ie = {}),
                  I(xe) ? (ie = xe.call(H, Je, Ee, H, ee)) : C(xe) && (ie = xe),
                  C(ie))
                )
                  for (var yr in ie) _.call(ie, yr) && (Je[yr] = ie[yr]);
                return I(Je.init) || (Je.init = ee), H;
              }),
              H.open(le)
            );
          }
          return Y;
        })("prototype", {}.hasOwnProperty),
        v = {
          ease: [
            "ease",
            function (f, _, O, C) {
              var I = (f /= C) * f,
                N = I * f;
              return (
                _ +
                O * (-2.75 * N * I + 11 * I * I + -15.5 * N + 8 * I + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, _, O, C) {
              var I = (f /= C) * f,
                N = I * f;
              return _ + O * (-1 * N * I + 3 * I * I + -3 * N + 2 * I);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, _, O, C) {
              var I = (f /= C) * f,
                N = I * f;
              return (
                _ +
                O * (0.3 * N * I + -1.6 * I * I + 2.2 * N + -1.8 * I + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, _, O, C) {
              var I = (f /= C) * f,
                N = I * f;
              return _ + O * (2 * N * I + -5 * I * I + 2 * N + 2 * I);
            },
          ],
          linear: [
            "linear",
            function (f, _, O, C) {
              return (O * f) / C + _;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, _, O, C) {
              return O * (f /= C) * f + _;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, _, O, C) {
              return -O * (f /= C) * (f - 2) + _;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, _, O, C) {
              return (f /= C / 2) < 1
                ? (O / 2) * f * f + _
                : (-O / 2) * (--f * (f - 2) - 1) + _;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, _, O, C) {
              return O * (f /= C) * f * f + _;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, _, O, C) {
              return O * ((f = f / C - 1) * f * f + 1) + _;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, _, O, C) {
              return (f /= C / 2) < 1
                ? (O / 2) * f * f * f + _
                : (O / 2) * ((f -= 2) * f * f + 2) + _;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, _, O, C) {
              return O * (f /= C) * f * f * f + _;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, _, O, C) {
              return -O * ((f = f / C - 1) * f * f * f - 1) + _;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, _, O, C) {
              return (f /= C / 2) < 1
                ? (O / 2) * f * f * f * f + _
                : (-O / 2) * ((f -= 2) * f * f * f - 2) + _;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, _, O, C) {
              return O * (f /= C) * f * f * f * f + _;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, _, O, C) {
              return O * ((f = f / C - 1) * f * f * f * f + 1) + _;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, _, O, C) {
              return (f /= C / 2) < 1
                ? (O / 2) * f * f * f * f * f + _
                : (O / 2) * ((f -= 2) * f * f * f * f + 2) + _;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, _, O, C) {
              return -O * Math.cos((f / C) * (Math.PI / 2)) + O + _;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, _, O, C) {
              return O * Math.sin((f / C) * (Math.PI / 2)) + _;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, _, O, C) {
              return (-O / 2) * (Math.cos((Math.PI * f) / C) - 1) + _;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, _, O, C) {
              return f === 0 ? _ : O * Math.pow(2, 10 * (f / C - 1)) + _;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, _, O, C) {
              return f === C
                ? _ + O
                : O * (-Math.pow(2, (-10 * f) / C) + 1) + _;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, _, O, C) {
              return f === 0
                ? _
                : f === C
                ? _ + O
                : (f /= C / 2) < 1
                ? (O / 2) * Math.pow(2, 10 * (f - 1)) + _
                : (O / 2) * (-Math.pow(2, -10 * --f) + 2) + _;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, _, O, C) {
              return -O * (Math.sqrt(1 - (f /= C) * f) - 1) + _;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, _, O, C) {
              return O * Math.sqrt(1 - (f = f / C - 1) * f) + _;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, _, O, C) {
              return (f /= C / 2) < 1
                ? (-O / 2) * (Math.sqrt(1 - f * f) - 1) + _
                : (O / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + _;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, _, O, C, I) {
              return (
                I === void 0 && (I = 1.70158),
                O * (f /= C) * f * ((I + 1) * f - I) + _
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, _, O, C, I) {
              return (
                I === void 0 && (I = 1.70158),
                O * ((f = f / C - 1) * f * ((I + 1) * f + I) + 1) + _
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, _, O, C, I) {
              return (
                I === void 0 && (I = 1.70158),
                (f /= C / 2) < 1
                  ? (O / 2) * f * f * (((I *= 1.525) + 1) * f - I) + _
                  : (O / 2) *
                      ((f -= 2) * f * (((I *= 1.525) + 1) * f + I) + 2) +
                    _
              );
            },
          ],
        },
        A = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        x = document,
        b = window,
        R = "bkwld-tram",
        T = /[\-\.0-9]/g,
        q = /[A-Z]/,
        L = "number",
        U = /^(rgb|#)/,
        V = /(em|cm|mm|in|pt|pc|px)$/,
        M = /(em|cm|mm|in|pt|pc|px|%)$/,
        K = /(deg|rad|turn)$/,
        j = "unitless",
        z = /(all|none) 0s ease 0s/,
        $ = /^(width|height)$/,
        B = " ",
        w = x.createElement("a"),
        h = ["Webkit", "Moz", "O", "ms"],
        P = ["-webkit-", "-moz-", "-o-", "-ms-"],
        D = function (f) {
          if (f in w.style) return { dom: f, css: f };
          var _,
            O,
            C = "",
            I = f.split("-");
          for (_ = 0; _ < I.length; _++)
            C += I[_].charAt(0).toUpperCase() + I[_].slice(1);
          for (_ = 0; _ < h.length; _++)
            if (((O = h[_] + C), O in w.style))
              return { dom: O, css: P[_] + f };
        },
        X = (t.support = {
          bind: Function.prototype.bind,
          transform: D("transform"),
          transition: D("transition"),
          backface: D("backface-visibility"),
          timing: D("transition-timing-function"),
        });
      if (X.transition) {
        var Q = X.timing.dom;
        if (((w.style[Q] = v["ease-in-back"][0]), !w.style[Q]))
          for (var Z in A) v[Z][0] = A[Z];
      }
      var k = (t.frame = (function () {
          var f =
            b.requestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.oRequestAnimationFrame ||
            b.msRequestAnimationFrame;
          return f && X.bind
            ? f.bind(b)
            : function (_) {
                b.setTimeout(_, 16);
              };
        })()),
        W = (t.now = (function () {
          var f = b.performance,
            _ = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return _ && X.bind
            ? _.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = g(function (f) {
          function _(J, oe) {
            var ve = y(("" + J).split(B)),
              ue = ve[0];
            oe = oe || {};
            var Se = Ze[ue];
            if (!Se) return d("Unsupported property: " + ue);
            if (!oe.weak || !this.props[ue]) {
              var Be = Se[0],
                Ne = this.props[ue];
              return (
                Ne || (Ne = this.props[ue] = new Be.Bare()),
                Ne.init(this.$el, ve, Se, oe),
                Ne
              );
            }
          }
          function O(J, oe, ve) {
            if (J) {
              var ue = typeof J;
              if (
                (oe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ue == "number" && oe)
              )
                return (
                  (this.timer = new te({
                    duration: J,
                    context: this,
                    complete: N,
                  })),
                  void (this.active = !0)
                );
              if (ue == "string" && oe) {
                switch (J) {
                  case "hide":
                    H.call(this);
                    break;
                  case "stop":
                    Y.call(this);
                    break;
                  case "redraw":
                    re.call(this);
                    break;
                  default:
                    _.call(this, J, ve && ve[1]);
                }
                return N.call(this);
              }
              if (ue == "function") return void J.call(this, this);
              if (ue == "object") {
                var Se = 0;
                Je.call(
                  this,
                  J,
                  function (me, H_) {
                    me.span > Se && (Se = me.span), me.stop(), me.animate(H_);
                  },
                  function (me) {
                    "wait" in me && (Se = u(me.wait, 0));
                  }
                ),
                  Ee.call(this),
                  Se > 0 &&
                    ((this.timer = new te({ duration: Se, context: this })),
                    (this.active = !0),
                    oe && (this.timer.complete = N));
                var Be = this,
                  Ne = !1,
                  on = {};
                k(function () {
                  Je.call(Be, J, function (me) {
                    me.active && ((Ne = !0), (on[me.name] = me.nextStyle));
                  }),
                    Ne && Be.$el.css(on);
                });
              }
            }
          }
          function C(J) {
            (J = u(J, 0)),
              this.active
                ? this.queue.push({ options: J })
                : ((this.timer = new te({
                    duration: J,
                    context: this,
                    complete: N,
                  })),
                  (this.active = !0));
          }
          function I(J) {
            return this.active
              ? (this.queue.push({ options: J, args: arguments }),
                void (this.timer.complete = N))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function N() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var J = this.queue.shift();
              O.call(this, J.options, !0, J.args);
            }
          }
          function Y(J) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var oe;
            typeof J == "string"
              ? ((oe = {}), (oe[J] = 1))
              : (oe = typeof J == "object" && J != null ? J : this.props),
              Je.call(this, oe, xe),
              Ee.call(this);
          }
          function ee(J) {
            Y.call(this, J), Je.call(this, J, yr, X_);
          }
          function le(J) {
            typeof J != "string" && (J = "block"), (this.el.style.display = J);
          }
          function H() {
            Y.call(this), (this.el.style.display = "none");
          }
          function re() {
            this.el.offsetHeight;
          }
          function ie() {
            Y.call(this), e.removeData(this.el, R), (this.$el = this.el = null);
          }
          function Ee() {
            var J,
              oe,
              ve = [];
            this.upstream && ve.push(this.upstream);
            for (J in this.props)
              (oe = this.props[J]), oe.active && ve.push(oe.string);
            (ve = ve.join(",")),
              this.style !== ve &&
                ((this.style = ve), (this.el.style[X.transition.dom] = ve));
          }
          function Je(J, oe, ve) {
            var ue,
              Se,
              Be,
              Ne,
              on = oe !== xe,
              me = {};
            for (ue in J)
              (Be = J[ue]),
                ue in we
                  ? (me.transform || (me.transform = {}),
                    (me.transform[ue] = Be))
                  : (q.test(ue) && (ue = r(ue)),
                    ue in Ze
                      ? (me[ue] = Be)
                      : (Ne || (Ne = {}), (Ne[ue] = Be)));
            for (ue in me) {
              if (((Be = me[ue]), (Se = this.props[ue]), !Se)) {
                if (!on) continue;
                Se = _.call(this, ue);
              }
              oe.call(this, Se, Be);
            }
            ve && Ne && ve.call(this, Ne);
          }
          function xe(J) {
            J.stop();
          }
          function yr(J, oe) {
            J.set(oe);
          }
          function X_(J) {
            this.$el.css(J);
          }
          function Ve(J, oe) {
            f[J] = function () {
              return this.children
                ? W_.call(this, oe, arguments)
                : (this.el && oe.apply(this, arguments), this);
            };
          }
          function W_(J, oe) {
            var ve,
              ue = this.children.length;
            for (ve = 0; ue > ve; ve++) J.apply(this.children[ve], oe);
            return this;
          }
          (f.init = function (J) {
            if (
              ((this.$el = e(J)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ne.keepInherited && !ne.fallback)
            ) {
              var oe = ye(this.el, "transition");
              oe && !z.test(oe) && (this.upstream = oe);
            }
            X.backface &&
              ne.hideBackface &&
              fe(this.el, X.backface.css, "hidden");
          }),
            Ve("add", _),
            Ve("start", O),
            Ve("wait", C),
            Ve("then", I),
            Ve("next", N),
            Ve("stop", Y),
            Ve("set", ee),
            Ve("show", le),
            Ve("hide", H),
            Ve("redraw", re),
            Ve("destroy", ie);
        }),
        E = g(p, function (f) {
          function _(O, C) {
            var I = e.data(O, R) || e.data(O, R, new p.Bare());
            return I.el || I.init(O), C ? I.start(C) : I;
          }
          f.init = function (O, C) {
            var I = e(O);
            if (!I.length) return this;
            if (I.length === 1) return _(I[0], C);
            var N = [];
            return (
              I.each(function (Y, ee) {
                N.push(_(ee, C));
              }),
              (this.children = N),
              this
            );
          };
        }),
        m = g(function (f) {
          function _() {
            var N = this.get();
            this.update("auto");
            var Y = this.get();
            return this.update(N), Y;
          }
          function O(N, Y, ee) {
            return Y !== void 0 && (ee = Y), N in v ? N : ee;
          }
          function C(N) {
            var Y = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
            return (Y ? i(Y[1], Y[2], Y[3]) : N).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var I = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (N, Y, ee, le) {
            (this.$el = N), (this.el = N[0]);
            var H = Y[0];
            ee[2] && (H = ee[2]),
              ke[H] && (H = ke[H]),
              (this.name = H),
              (this.type = ee[1]),
              (this.duration = u(Y[1], this.duration, I.duration)),
              (this.ease = O(Y[2], this.ease, I.ease)),
              (this.delay = u(Y[3], this.delay, I.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = $.test(this.name)),
              (this.unit = le.unit || this.unit || ne.defaultUnit),
              (this.angle = le.angle || this.angle || ne.defaultAngle),
              ne.fallback || le.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    B +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? B + v[this.ease][0] : "") +
                    (this.delay ? B + this.delay + "ms" : "")));
          }),
            (f.set = function (N) {
              (N = this.convert(N, this.type)), this.update(N), this.redraw();
            }),
            (f.transition = function (N) {
              (this.active = !0),
                (N = this.convert(N, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  N == "auto" && (N = _.call(this))),
                (this.nextStyle = N);
            }),
            (f.fallback = function (N) {
              var Y =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (N = this.convert(N, this.type)),
                this.auto &&
                  (Y == "auto" && (Y = this.convert(this.get(), this.type)),
                  N == "auto" && (N = _.call(this))),
                (this.tween = new S({
                  from: Y,
                  to: N,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return ye(this.el, this.name);
            }),
            (f.update = function (N) {
              fe(this.el, this.name, N);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                fe(this.el, this.name, this.get()));
              var N = this.tween;
              N && N.context && N.destroy();
            }),
            (f.convert = function (N, Y) {
              if (N == "auto" && this.auto) return N;
              var ee,
                le = typeof N == "number",
                H = typeof N == "string";
              switch (Y) {
                case L:
                  if (le) return N;
                  if (H && N.replace(T, "") === "") return +N;
                  ee = "number(unitless)";
                  break;
                case U:
                  if (H) {
                    if (N === "" && this.original) return this.original;
                    if (Y.test(N))
                      return N.charAt(0) == "#" && N.length == 7 ? N : C(N);
                  }
                  ee = "hex or rgb string";
                  break;
                case V:
                  if (le) return N + this.unit;
                  if (H && Y.test(N)) return N;
                  ee = "number(px) or string(unit)";
                  break;
                case M:
                  if (le) return N + this.unit;
                  if (H && Y.test(N)) return N;
                  ee = "number(px) or string(unit or %)";
                  break;
                case K:
                  if (le) return N + this.angle;
                  if (H && Y.test(N)) return N;
                  ee = "number(deg) or string(angle)";
                  break;
                case j:
                  if (le || (H && M.test(N))) return N;
                  ee = "number(unitless) or string(unit or %)";
              }
              return a(ee, N), N;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        l = g(m, function (f, _) {
          f.init = function () {
            _.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), U));
          };
        }),
        F = g(m, function (f, _) {
          (f.init = function () {
            _.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (O) {
              this.$el[this.name](O);
            });
        }),
        G = g(m, function (f, _) {
          function O(C, I) {
            var N, Y, ee, le, H;
            for (N in C)
              (le = we[N]),
                (ee = le[0]),
                (Y = le[1] || N),
                (H = this.convert(C[N], ee)),
                I.call(this, Y, H, ee);
          }
          (f.init = function () {
            _.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                we.perspective &&
                  ne.perspective &&
                  ((this.current.perspective = ne.perspective),
                  fe(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (C) {
              O.call(this, C, function (I, N) {
                this.current[I] = N;
              }),
                fe(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (C) {
              var I = this.values(C);
              this.tween = new se({
                current: this.current,
                values: I,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var N,
                Y = {};
              for (N in this.current) Y[N] = N in I ? I[N] : this.current[N];
              (this.active = !0), (this.nextStyle = this.style(Y));
            }),
            (f.fallback = function (C) {
              var I = this.values(C);
              this.tween = new se({
                current: this.current,
                values: I,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              fe(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (C) {
              var I,
                N = "";
              for (I in C) N += I + "(" + C[I] + ") ";
              return N;
            }),
            (f.values = function (C) {
              var I,
                N = {};
              return (
                O.call(this, C, function (Y, ee, le) {
                  (N[Y] = ee),
                    this.current[Y] === void 0 &&
                      ((I = 0),
                      ~Y.indexOf("scale") && (I = 1),
                      (this.current[Y] = this.convert(I, le)));
                }),
                N
              );
            });
        }),
        S = g(function (f) {
          function _(H) {
            ee.push(H) === 1 && k(O);
          }
          function O() {
            var H,
              re,
              ie,
              Ee = ee.length;
            if (Ee)
              for (k(O), re = W(), H = Ee; H--; )
                (ie = ee[H]), ie && ie.render(re);
          }
          function C(H) {
            var re,
              ie = e.inArray(H, ee);
            ie >= 0 &&
              ((re = ee.slice(ie + 1)),
              (ee.length = ie),
              re.length && (ee = ee.concat(re)));
          }
          function I(H) {
            return Math.round(H * le) / le;
          }
          function N(H, re, ie) {
            return i(
              H[0] + ie * (re[0] - H[0]),
              H[1] + ie * (re[1] - H[1]),
              H[2] + ie * (re[2] - H[2])
            );
          }
          var Y = { ease: v.ease[1], from: 0, to: 1 };
          (f.init = function (H) {
            (this.duration = H.duration || 0), (this.delay = H.delay || 0);
            var re = H.ease || Y.ease;
            v[re] && (re = v[re][1]),
              typeof re != "function" && (re = Y.ease),
              (this.ease = re),
              (this.update = H.update || o),
              (this.complete = H.complete || o),
              (this.context = H.context || this),
              (this.name = H.name);
            var ie = H.from,
              Ee = H.to;
            ie === void 0 && (ie = Y.from),
              Ee === void 0 && (Ee = Y.to),
              (this.unit = H.unit || ""),
              typeof ie == "number" && typeof Ee == "number"
                ? ((this.begin = ie), (this.change = Ee - ie))
                : this.format(Ee, ie),
              (this.value = this.begin + this.unit),
              (this.start = W()),
              H.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = W()), (this.active = !0), _(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), C(this));
            }),
            (f.render = function (H) {
              var re,
                ie = H - this.start;
              if (this.delay) {
                if (ie <= this.delay) return;
                ie -= this.delay;
              }
              if (ie < this.duration) {
                var Ee = this.ease(ie, 0, 1, this.duration);
                return (
                  (re = this.startRGB
                    ? N(this.startRGB, this.endRGB, Ee)
                    : I(this.begin + Ee * this.change)),
                  (this.value = re + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (re = this.endHex || this.begin + this.change),
                (this.value = re + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (H, re) {
              if (((re += ""), (H += ""), H.charAt(0) == "#"))
                return (
                  (this.startRGB = n(re)),
                  (this.endRGB = n(H)),
                  (this.endHex = H),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ie = re.replace(T, ""),
                  Ee = H.replace(T, "");
                ie !== Ee && s("tween", re, H), (this.unit = ie);
              }
              (re = parseFloat(re)),
                (H = parseFloat(H)),
                (this.begin = this.value = re),
                (this.change = H - re);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ee = [],
            le = 1e3;
        }),
        te = g(S, function (f) {
          (f.init = function (_) {
            (this.duration = _.duration || 0),
              (this.complete = _.complete || o),
              (this.context = _.context),
              this.play();
          }),
            (f.render = function (_) {
              var O = _ - this.start;
              O < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        se = g(S, function (f, _) {
          (f.init = function (O) {
            (this.context = O.context),
              (this.update = O.update),
              (this.tweens = []),
              (this.current = O.current);
            var C, I;
            for (C in O.values)
              (I = O.values[C]),
                this.current[C] !== I &&
                  this.tweens.push(
                    new S({
                      name: C,
                      from: this.current[C],
                      to: I,
                      duration: O.duration,
                      delay: O.delay,
                      ease: O.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (O) {
              var C,
                I,
                N = this.tweens.length,
                Y = !1;
              for (C = N; C--; )
                (I = this.tweens[C]),
                  I.context &&
                    (I.render(O), (this.current[I.name] = I.value), (Y = !0));
              return Y
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((_.destroy.call(this), this.tweens)) {
                var O,
                  C = this.tweens.length;
                for (O = C; O--; ) this.tweens[O].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ne = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !X.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!X.transition) return (ne.fallback = !0);
        ne.agentTests.push("(" + f + ")");
        var _ = new RegExp(ne.agentTests.join("|"), "i");
        ne.fallback = _.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new S(f);
        }),
        (t.delay = function (f, _, O) {
          return new te({ complete: _, duration: f, context: O });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var fe = e.style,
        ye = e.css,
        ke = { transform: X.transform && X.transform.css },
        Ze = {
          color: [l, U],
          background: [l, U, "background-color"],
          "outline-color": [l, U],
          "border-color": [l, U],
          "border-top-color": [l, U],
          "border-right-color": [l, U],
          "border-bottom-color": [l, U],
          "border-left-color": [l, U],
          "border-width": [m, V],
          "border-top-width": [m, V],
          "border-right-width": [m, V],
          "border-bottom-width": [m, V],
          "border-left-width": [m, V],
          "border-spacing": [m, V],
          "letter-spacing": [m, V],
          margin: [m, V],
          "margin-top": [m, V],
          "margin-right": [m, V],
          "margin-bottom": [m, V],
          "margin-left": [m, V],
          padding: [m, V],
          "padding-top": [m, V],
          "padding-right": [m, V],
          "padding-bottom": [m, V],
          "padding-left": [m, V],
          "outline-width": [m, V],
          opacity: [m, L],
          top: [m, M],
          right: [m, M],
          bottom: [m, M],
          left: [m, M],
          "font-size": [m, M],
          "text-indent": [m, M],
          "word-spacing": [m, M],
          width: [m, M],
          "min-width": [m, M],
          "max-width": [m, M],
          height: [m, M],
          "min-height": [m, M],
          "max-height": [m, M],
          "line-height": [m, j],
          "scroll-top": [F, L, "scrollTop"],
          "scroll-left": [F, L, "scrollLeft"],
        },
        we = {};
      X.transform &&
        ((Ze.transform = [G]),
        (we = {
          x: [M, "translateX"],
          y: [M, "translateY"],
          rotate: [K],
          rotateX: [K],
          rotateY: [K],
          scale: [L],
          scaleX: [L],
          scaleY: [L],
          skew: [K],
          skewX: [K],
          skewY: [K],
        })),
        X.transform &&
          X.backface &&
          ((we.z = [M, "translateZ"]),
          (we.rotateZ = [K]),
          (we.scaleZ = [L]),
          (we.perspective = [V]));
      var lt = /ms/,
        Ut = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ns = c((DV, Ls) => {
    "use strict";
    var Q_ = window.$,
      Z_ = Li() && Q_.tram;
    Ls.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        d = n.hasOwnProperty,
        y = r.forEach,
        g = r.map,
        v = r.reduce,
        A = r.reduceRight,
        x = r.filter,
        b = r.every,
        R = r.some,
        T = r.indexOf,
        q = r.lastIndexOf,
        L = Array.isArray,
        U = Object.keys,
        V = i.bind,
        M =
          (e.each =
          e.forEach =
            function (h, P, D) {
              if (h == null) return h;
              if (y && h.forEach === y) h.forEach(P, D);
              else if (h.length === +h.length) {
                for (var X = 0, Q = h.length; X < Q; X++)
                  if (P.call(D, h[X], X, h) === t) return;
              } else
                for (var Z = e.keys(h), X = 0, Q = Z.length; X < Q; X++)
                  if (P.call(D, h[Z[X]], Z[X], h) === t) return;
              return h;
            });
      (e.map = e.collect =
        function (h, P, D) {
          var X = [];
          return h == null
            ? X
            : g && h.map === g
            ? h.map(P, D)
            : (M(h, function (Q, Z, k) {
                X.push(P.call(D, Q, Z, k));
              }),
              X);
        }),
        (e.find = e.detect =
          function (h, P, D) {
            var X;
            return (
              K(h, function (Q, Z, k) {
                if (P.call(D, Q, Z, k)) return (X = Q), !0;
              }),
              X
            );
          }),
        (e.filter = e.select =
          function (h, P, D) {
            var X = [];
            return h == null
              ? X
              : x && h.filter === x
              ? h.filter(P, D)
              : (M(h, function (Q, Z, k) {
                  P.call(D, Q, Z, k) && X.push(Q);
                }),
                X);
          });
      var K =
        (e.some =
        e.any =
          function (h, P, D) {
            P || (P = e.identity);
            var X = !1;
            return h == null
              ? X
              : R && h.some === R
              ? h.some(P, D)
              : (M(h, function (Q, Z, k) {
                  if (X || (X = P.call(D, Q, Z, k))) return t;
                }),
                !!X);
          });
      (e.contains = e.include =
        function (h, P) {
          return h == null
            ? !1
            : T && h.indexOf === T
            ? h.indexOf(P) != -1
            : K(h, function (D) {
                return D === P;
              });
        }),
        (e.delay = function (h, P) {
          var D = a.call(arguments, 2);
          return setTimeout(function () {
            return h.apply(null, D);
          }, P);
        }),
        (e.defer = function (h) {
          return e.delay.apply(e, [h, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (h) {
          var P, D, X;
          return function () {
            P ||
              ((P = !0),
              (D = arguments),
              (X = this),
              Z_.frame(function () {
                (P = !1), h.apply(X, D);
              }));
          };
        }),
        (e.debounce = function (h, P, D) {
          var X,
            Q,
            Z,
            k,
            W,
            p = function () {
              var E = e.now() - k;
              E < P
                ? (X = setTimeout(p, P - E))
                : ((X = null), D || ((W = h.apply(Z, Q)), (Z = Q = null)));
            };
          return function () {
            (Z = this), (Q = arguments), (k = e.now());
            var E = D && !X;
            return (
              X || (X = setTimeout(p, P)),
              E && ((W = h.apply(Z, Q)), (Z = Q = null)),
              W
            );
          };
        }),
        (e.defaults = function (h) {
          if (!e.isObject(h)) return h;
          for (var P = 1, D = arguments.length; P < D; P++) {
            var X = arguments[P];
            for (var Q in X) h[Q] === void 0 && (h[Q] = X[Q]);
          }
          return h;
        }),
        (e.keys = function (h) {
          if (!e.isObject(h)) return [];
          if (U) return U(h);
          var P = [];
          for (var D in h) e.has(h, D) && P.push(D);
          return P;
        }),
        (e.has = function (h, P) {
          return d.call(h, P);
        }),
        (e.isObject = function (h) {
          return h === Object(h);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var j = /(.)^/,
        z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        $ = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function (h) {
          return "\\" + z[h];
        },
        w = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (h, P, D) {
          !P && D && (P = D), (P = e.defaults({}, P, e.templateSettings));
          var X = RegExp(
              [
                (P.escape || j).source,
                (P.interpolate || j).source,
                (P.evaluate || j).source,
              ].join("|") + "|$",
              "g"
            ),
            Q = 0,
            Z = "__p+='";
          h.replace(X, function (E, m, l, F, G) {
            return (
              (Z += h.slice(Q, G).replace($, B)),
              (Q = G + E.length),
              m
                ? (Z +=
                    `'+
((__t=(` +
                    m +
                    `))==null?'':_.escape(__t))+
'`)
                : l
                ? (Z +=
                    `'+
((__t=(` +
                    l +
                    `))==null?'':__t)+
'`)
                : F &&
                  (Z +=
                    `';
` +
                    F +
                    `
__p+='`),
              E
            );
          }),
            (Z += `';
`);
          var k = P.variable;
          if (k) {
            if (!w.test(k))
              throw new Error("variable is not a bare identifier: " + k);
          } else
            (Z =
              `with(obj||{}){
` +
              Z +
              `}
`),
              (k = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Z +
            `return __p;
`;
          var W;
          try {
            W = new Function(P.variable || "obj", "_", Z);
          } catch (E) {
            throw ((E.source = Z), E);
          }
          var p = function (E) {
            return W.call(this, E, e);
          };
          return (
            (p.source =
              "function(" +
              k +
              `){
` +
              Z +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var Ge = c((kV, Us) => {
    "use strict";
    var ce = {},
      Vt = {},
      Bt = [],
      Pi = window.Webflow || [],
      mt = window.jQuery,
      We = mt(window),
      J_ = mt(document),
      tt = mt.isFunction,
      Xe = (ce._ = Ns()),
      qs = (ce.tram = Li() && mt.tram),
      un = !1,
      qi = !1;
    qs.config.hideBackface = !1;
    qs.config.keepInherited = !0;
    ce.define = function (e, t, r) {
      Vt[e] && Fs(Vt[e]);
      var n = (Vt[e] = t(mt, Xe, r) || {});
      return Ms(n), n;
    };
    ce.require = function (e) {
      return Vt[e];
    };
    function Ms(e) {
      ce.env() &&
        (tt(e.design) && We.on("__wf_design", e.design),
        tt(e.preview) && We.on("__wf_preview", e.preview)),
        tt(e.destroy) && We.on("__wf_destroy", e.destroy),
        e.ready && tt(e.ready) && eb(e);
    }
    function eb(e) {
      if (un) {
        e.ready();
        return;
      }
      Xe.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function Fs(e) {
      tt(e.design) && We.off("__wf_design", e.design),
        tt(e.preview) && We.off("__wf_preview", e.preview),
        tt(e.destroy) && We.off("__wf_destroy", e.destroy),
        e.ready && tt(e.ready) && tb(e);
    }
    function tb(e) {
      Bt = Xe.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    ce.push = function (e) {
      if (un) {
        tt(e) && e();
        return;
      }
      Pi.push(e);
    };
    ce.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var sn = navigator.userAgent.toLowerCase(),
      Ds = (ce.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      rb = (ce.env.chrome =
        /chrome/.test(sn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(sn.match(/chrome\/(\d+)\./)[1], 10)),
      nb = (ce.env.ios = /(ipod|iphone|ipad)/.test(sn));
    ce.env.safari = /safari/.test(sn) && !rb && !nb;
    var Ni;
    Ds &&
      J_.on("touchstart mousedown", function (e) {
        Ni = e.target;
      });
    ce.validClick = Ds
      ? function (e) {
          return e === Ni || mt.contains(e, Ni);
        }
      : function () {
          return !0;
        };
    var ks = "resize.webflow orientationchange.webflow load.webflow",
      ib = "scroll.webflow " + ks;
    ce.resize = Mi(We, ks);
    ce.scroll = Mi(We, ib);
    ce.redraw = Mi();
    function Mi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Xe.throttle(function (i) {
          Xe.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Xe.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Xe.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ce.location = function (e) {
      window.location = e;
    };
    ce.env() && (ce.location = function () {});
    ce.ready = function () {
      (un = !0), qi ? ob() : Xe.each(Bt, Ps), Xe.each(Pi, Ps), ce.resize.up();
    };
    function Ps(e) {
      tt(e) && e();
    }
    function ob() {
      (qi = !1), Xe.each(Vt, Ms);
    }
    var St;
    ce.load = function (e) {
      St.then(e);
    };
    function Gs() {
      St && (St.reject(), We.off("load", St.resolve)),
        (St = new mt.Deferred()),
        We.on("load", St.resolve);
    }
    ce.destroy = function (e) {
      (e = e || {}),
        (qi = !0),
        We.triggerHandler("__wf_destroy"),
        e.domready != null && (un = e.domready),
        Xe.each(Vt, Fs),
        ce.resize.off(),
        ce.scroll.off(),
        ce.redraw.off(),
        (Bt = []),
        (Pi = []),
        St.state() === "pending" && Gs();
    };
    mt(ce.ready);
    Gs();
    Us.exports = window.Webflow = ce;
  });
  var Xs = c((GV, Bs) => {
    "use strict";
    var Vs = Ge();
    Vs.define(
      "brand",
      (Bs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var A = n.attr("data-wf-status"),
            x = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(x) && a.hostname !== x && (A = !0),
            A &&
              !s &&
              ((d = d || g()),
              v(),
              setTimeout(v, 500),
              e(r).off(u, y).on(u, y));
        };
        function y() {
          var A =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", A ? "display: none !important;" : "");
        }
        function g() {
          var A = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            x = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return A.append(x, b), A[0];
        }
        function v() {
          var A = i.children(o),
            x = A.length && A.get(0) === d,
            b = Vs.env("editor");
          if (x) {
            b && A.remove();
            return;
          }
          A.length && A.remove(), b || i.append(d);
        }
        return t;
      })
    );
  });
  var Hs = c((UV, Ws) => {
    "use strict";
    var ab = Ge();
    ab.define(
      "focus-visible",
      (Ws.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(L) {
            return !!(
              L &&
              L !== document &&
              L.nodeName !== "HTML" &&
              L.nodeName !== "BODY" &&
              "classList" in L &&
              "contains" in L.classList
            );
          }
          function u(L) {
            var U = L.type,
              V = L.tagName;
            return !!(
              (V === "INPUT" && a[U] && !L.readOnly) ||
              (V === "TEXTAREA" && !L.readOnly) ||
              L.isContentEditable
            );
          }
          function d(L) {
            L.getAttribute("data-wf-focus-visible") ||
              L.setAttribute("data-wf-focus-visible", "true");
          }
          function y(L) {
            L.getAttribute("data-wf-focus-visible") &&
              L.removeAttribute("data-wf-focus-visible");
          }
          function g(L) {
            L.metaKey ||
              L.altKey ||
              L.ctrlKey ||
              (s(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function v() {
            n = !1;
          }
          function A(L) {
            s(L.target) && (n || u(L.target)) && d(L.target);
          }
          function x(L) {
            s(L.target) &&
              L.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              y(L.target));
          }
          function b() {
            document.visibilityState === "hidden" && (i && (n = !0), R());
          }
          function R() {
            document.addEventListener("mousemove", q),
              document.addEventListener("mousedown", q),
              document.addEventListener("mouseup", q),
              document.addEventListener("pointermove", q),
              document.addEventListener("pointerdown", q),
              document.addEventListener("pointerup", q),
              document.addEventListener("touchmove", q),
              document.addEventListener("touchstart", q),
              document.addEventListener("touchend", q);
          }
          function T() {
            document.removeEventListener("mousemove", q),
              document.removeEventListener("mousedown", q),
              document.removeEventListener("mouseup", q),
              document.removeEventListener("pointermove", q),
              document.removeEventListener("pointerdown", q),
              document.removeEventListener("pointerup", q),
              document.removeEventListener("touchmove", q),
              document.removeEventListener("touchstart", q),
              document.removeEventListener("touchend", q);
          }
          function q(L) {
            (L.target.nodeName && L.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), T());
          }
          document.addEventListener("keydown", g, !0),
            document.addEventListener("mousedown", v, !0),
            document.addEventListener("pointerdown", v, !0),
            document.addEventListener("touchstart", v, !0),
            document.addEventListener("visibilitychange", b, !0),
            R(),
            r.addEventListener("focus", A, !0),
            r.addEventListener("blur", x, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ks = c((VV, zs) => {
    "use strict";
    var js = Ge();
    js.define(
      "focus",
      (zs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            js.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Qs = c((BV, $s) => {
    "use strict";
    var Fi = window.jQuery,
      rt = {},
      cn = [],
      Ys = ".w-ix",
      ln = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Fi(t).triggerHandler(rt.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Fi(t).triggerHandler(rt.types.OUTRO));
        },
      };
    rt.triggers = {};
    rt.types = { INTRO: "w-ix-intro" + Ys, OUTRO: "w-ix-outro" + Ys };
    rt.init = function () {
      for (var e = cn.length, t = 0; t < e; t++) {
        var r = cn[t];
        r[0](0, r[1]);
      }
      (cn = []), Fi.extend(rt.triggers, ln);
    };
    rt.async = function () {
      for (var e in ln) {
        var t = ln[e];
        ln.hasOwnProperty(e) &&
          (rt.triggers[e] = function (r, n) {
            cn.push([t, n]);
          });
      }
    };
    rt.async();
    $s.exports = rt;
  });
  var _r = c((XV, eu) => {
    "use strict";
    var Di = Qs();
    function Zs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var sb = window.jQuery,
      fn = {},
      Js = ".w-ix",
      ub = {
        reset: function (e, t) {
          Di.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Di.triggers.intro(e, t), Zs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Di.triggers.outro(e, t), Zs(t, "COMPONENT_INACTIVE");
        },
      };
    fn.triggers = {};
    fn.types = { INTRO: "w-ix-intro" + Js, OUTRO: "w-ix-outro" + Js };
    sb.extend(fn.triggers, ub);
    eu.exports = fn;
  });
  var tu = c((WV, ft) => {
    function ki(e) {
      return (
        (ft.exports = ki =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (ft.exports.__esModule = !0),
        (ft.exports.default = ft.exports),
        ki(e)
      );
    }
    (ft.exports = ki),
      (ft.exports.__esModule = !0),
      (ft.exports.default = ft.exports);
  });
  var dn = c((HV, br) => {
    var cb = tu().default;
    function ru(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (ru = function (i) {
        return i ? r : t;
      })(e);
    }
    function lb(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (cb(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = ru(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (br.exports = lb),
      (br.exports.__esModule = !0),
      (br.exports.default = br.exports);
  });
  var nu = c((jV, Tr) => {
    function fb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Tr.exports = fb),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var ge = c((zV, iu) => {
    var pn = function (e) {
      return e && e.Math == Math && e;
    };
    iu.exports =
      pn(typeof globalThis == "object" && globalThis) ||
      pn(typeof window == "object" && window) ||
      pn(typeof self == "object" && self) ||
      pn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Xt = c((KV, ou) => {
    ou.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Ct = c((YV, au) => {
    var db = Xt();
    au.exports = !db(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var gn = c(($V, su) => {
    var Ir = Function.prototype.call;
    su.exports = Ir.bind
      ? Ir.bind(Ir)
      : function () {
          return Ir.apply(Ir, arguments);
        };
  });
  var fu = c((lu) => {
    "use strict";
    var uu = {}.propertyIsEnumerable,
      cu = Object.getOwnPropertyDescriptor,
      pb = cu && !uu.call({ 1: 2 }, 1);
    lu.f = pb
      ? function (t) {
          var r = cu(this, t);
          return !!r && r.enumerable;
        }
      : uu;
  });
  var Gi = c((ZV, du) => {
    du.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var He = c((JV, gu) => {
    var pu = Function.prototype,
      Ui = pu.bind,
      Vi = pu.call,
      gb = Ui && Ui.bind(Vi);
    gu.exports = Ui
      ? function (e) {
          return e && gb(Vi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Vi.apply(e, arguments);
            }
          );
        };
  });
  var Eu = c((eB, hu) => {
    var vu = He(),
      vb = vu({}.toString),
      hb = vu("".slice);
    hu.exports = function (e) {
      return hb(vb(e), 8, -1);
    };
  });
  var yu = c((tB, mu) => {
    var Eb = ge(),
      mb = He(),
      yb = Xt(),
      _b = Eu(),
      Bi = Eb.Object,
      bb = mb("".split);
    mu.exports = yb(function () {
      return !Bi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return _b(e) == "String" ? bb(e, "") : Bi(e);
        }
      : Bi;
  });
  var Xi = c((rB, _u) => {
    var Tb = ge(),
      Ib = Tb.TypeError;
    _u.exports = function (e) {
      if (e == null) throw Ib("Can't call method on " + e);
      return e;
    };
  });
  var Ar = c((nB, bu) => {
    var Ab = yu(),
      Ob = Xi();
    bu.exports = function (e) {
      return Ab(Ob(e));
    };
  });
  var nt = c((iB, Tu) => {
    Tu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Wt = c((oB, Iu) => {
    var wb = nt();
    Iu.exports = function (e) {
      return typeof e == "object" ? e !== null : wb(e);
    };
  });
  var Or = c((aB, Au) => {
    var Wi = ge(),
      xb = nt(),
      Sb = function (e) {
        return xb(e) ? e : void 0;
      };
    Au.exports = function (e, t) {
      return arguments.length < 2 ? Sb(Wi[e]) : Wi[e] && Wi[e][t];
    };
  });
  var wu = c((sB, Ou) => {
    var Cb = He();
    Ou.exports = Cb({}.isPrototypeOf);
  });
  var Su = c((uB, xu) => {
    var Rb = Or();
    xu.exports = Rb("navigator", "userAgent") || "";
  });
  var Mu = c((cB, qu) => {
    var Pu = ge(),
      Hi = Su(),
      Cu = Pu.process,
      Ru = Pu.Deno,
      Lu = (Cu && Cu.versions) || (Ru && Ru.version),
      Nu = Lu && Lu.v8,
      je,
      vn;
    Nu &&
      ((je = Nu.split(".")),
      (vn = je[0] > 0 && je[0] < 4 ? 1 : +(je[0] + je[1])));
    !vn &&
      Hi &&
      ((je = Hi.match(/Edge\/(\d+)/)),
      (!je || je[1] >= 74) &&
        ((je = Hi.match(/Chrome\/(\d+)/)), je && (vn = +je[1])));
    qu.exports = vn;
  });
  var ji = c((lB, Du) => {
    var Fu = Mu(),
      Lb = Xt();
    Du.exports =
      !!Object.getOwnPropertySymbols &&
      !Lb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Fu && Fu < 41)
        );
      });
  });
  var zi = c((fB, ku) => {
    var Nb = ji();
    ku.exports = Nb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ki = c((dB, Gu) => {
    var Pb = ge(),
      qb = Or(),
      Mb = nt(),
      Fb = wu(),
      Db = zi(),
      kb = Pb.Object;
    Gu.exports = Db
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = qb("Symbol");
          return Mb(t) && Fb(t.prototype, kb(e));
        };
  });
  var Vu = c((pB, Uu) => {
    var Gb = ge(),
      Ub = Gb.String;
    Uu.exports = function (e) {
      try {
        return Ub(e);
      } catch {
        return "Object";
      }
    };
  });
  var Xu = c((gB, Bu) => {
    var Vb = ge(),
      Bb = nt(),
      Xb = Vu(),
      Wb = Vb.TypeError;
    Bu.exports = function (e) {
      if (Bb(e)) return e;
      throw Wb(Xb(e) + " is not a function");
    };
  });
  var Hu = c((vB, Wu) => {
    var Hb = Xu();
    Wu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : Hb(r);
    };
  });
  var zu = c((hB, ju) => {
    var jb = ge(),
      Yi = gn(),
      $i = nt(),
      Qi = Wt(),
      zb = jb.TypeError;
    ju.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e)))) ||
        ($i((r = e.valueOf)) && !Qi((n = Yi(r, e)))) ||
        (t !== "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e))))
      )
        return n;
      throw zb("Can't convert object to primitive value");
    };
  });
  var Yu = c((EB, Ku) => {
    Ku.exports = !1;
  });
  var hn = c((mB, Qu) => {
    var $u = ge(),
      Kb = Object.defineProperty;
    Qu.exports = function (e, t) {
      try {
        Kb($u, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        $u[e] = t;
      }
      return t;
    };
  });
  var En = c((yB, Ju) => {
    var Yb = ge(),
      $b = hn(),
      Zu = "__core-js_shared__",
      Qb = Yb[Zu] || $b(Zu, {});
    Ju.exports = Qb;
  });
  var Zi = c((_B, tc) => {
    var Zb = Yu(),
      ec = En();
    (tc.exports = function (e, t) {
      return ec[e] || (ec[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: Zb ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var nc = c((bB, rc) => {
    var Jb = ge(),
      eT = Xi(),
      tT = Jb.Object;
    rc.exports = function (e) {
      return tT(eT(e));
    };
  });
  var yt = c((TB, ic) => {
    var rT = He(),
      nT = nc(),
      iT = rT({}.hasOwnProperty);
    ic.exports =
      Object.hasOwn ||
      function (t, r) {
        return iT(nT(t), r);
      };
  });
  var Ji = c((IB, oc) => {
    var oT = He(),
      aT = 0,
      sT = Math.random(),
      uT = oT((1).toString);
    oc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + uT(++aT + sT, 36);
    };
  });
  var eo = c((AB, lc) => {
    var cT = ge(),
      lT = Zi(),
      ac = yt(),
      fT = Ji(),
      sc = ji(),
      cc = zi(),
      Ht = lT("wks"),
      Rt = cT.Symbol,
      uc = Rt && Rt.for,
      dT = cc ? Rt : (Rt && Rt.withoutSetter) || fT;
    lc.exports = function (e) {
      if (!ac(Ht, e) || !(sc || typeof Ht[e] == "string")) {
        var t = "Symbol." + e;
        sc && ac(Rt, e)
          ? (Ht[e] = Rt[e])
          : cc && uc
          ? (Ht[e] = uc(t))
          : (Ht[e] = dT(t));
      }
      return Ht[e];
    };
  });
  var gc = c((OB, pc) => {
    var pT = ge(),
      gT = gn(),
      fc = Wt(),
      dc = Ki(),
      vT = Hu(),
      hT = zu(),
      ET = eo(),
      mT = pT.TypeError,
      yT = ET("toPrimitive");
    pc.exports = function (e, t) {
      if (!fc(e) || dc(e)) return e;
      var r = vT(e, yT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = gT(r, e, t)), !fc(n) || dc(n))
        )
          return n;
        throw mT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), hT(e, t);
    };
  });
  var to = c((wB, vc) => {
    var _T = gc(),
      bT = Ki();
    vc.exports = function (e) {
      var t = _T(e, "string");
      return bT(t) ? t : t + "";
    };
  });
  var no = c((xB, Ec) => {
    var TT = ge(),
      hc = Wt(),
      ro = TT.document,
      IT = hc(ro) && hc(ro.createElement);
    Ec.exports = function (e) {
      return IT ? ro.createElement(e) : {};
    };
  });
  var io = c((SB, mc) => {
    var AT = Ct(),
      OT = Xt(),
      wT = no();
    mc.exports =
      !AT &&
      !OT(function () {
        return (
          Object.defineProperty(wT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var oo = c((_c) => {
    var xT = Ct(),
      ST = gn(),
      CT = fu(),
      RT = Gi(),
      LT = Ar(),
      NT = to(),
      PT = yt(),
      qT = io(),
      yc = Object.getOwnPropertyDescriptor;
    _c.f = xT
      ? yc
      : function (t, r) {
          if (((t = LT(t)), (r = NT(r)), qT))
            try {
              return yc(t, r);
            } catch {}
          if (PT(t, r)) return RT(!ST(CT.f, t, r), t[r]);
        };
  });
  var wr = c((RB, Tc) => {
    var bc = ge(),
      MT = Wt(),
      FT = bc.String,
      DT = bc.TypeError;
    Tc.exports = function (e) {
      if (MT(e)) return e;
      throw DT(FT(e) + " is not an object");
    };
  });
  var xr = c((Oc) => {
    var kT = ge(),
      GT = Ct(),
      UT = io(),
      Ic = wr(),
      VT = to(),
      BT = kT.TypeError,
      Ac = Object.defineProperty;
    Oc.f = GT
      ? Ac
      : function (t, r, n) {
          if ((Ic(t), (r = VT(r)), Ic(n), UT))
            try {
              return Ac(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw BT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var mn = c((NB, wc) => {
    var XT = Ct(),
      WT = xr(),
      HT = Gi();
    wc.exports = XT
      ? function (e, t, r) {
          return WT.f(e, t, HT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var so = c((PB, xc) => {
    var jT = He(),
      zT = nt(),
      ao = En(),
      KT = jT(Function.toString);
    zT(ao.inspectSource) ||
      (ao.inspectSource = function (e) {
        return KT(e);
      });
    xc.exports = ao.inspectSource;
  });
  var Rc = c((qB, Cc) => {
    var YT = ge(),
      $T = nt(),
      QT = so(),
      Sc = YT.WeakMap;
    Cc.exports = $T(Sc) && /native code/.test(QT(Sc));
  });
  var uo = c((MB, Nc) => {
    var ZT = Zi(),
      JT = Ji(),
      Lc = ZT("keys");
    Nc.exports = function (e) {
      return Lc[e] || (Lc[e] = JT(e));
    };
  });
  var yn = c((FB, Pc) => {
    Pc.exports = {};
  });
  var Gc = c((DB, kc) => {
    var eI = Rc(),
      Dc = ge(),
      co = He(),
      tI = Wt(),
      rI = mn(),
      lo = yt(),
      fo = En(),
      nI = uo(),
      iI = yn(),
      qc = "Object already initialized",
      go = Dc.TypeError,
      oI = Dc.WeakMap,
      _n,
      Sr,
      bn,
      aI = function (e) {
        return bn(e) ? Sr(e) : _n(e, {});
      },
      sI = function (e) {
        return function (t) {
          var r;
          if (!tI(t) || (r = Sr(t)).type !== e)
            throw go("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    eI || fo.state
      ? ((_t = fo.state || (fo.state = new oI())),
        (Mc = co(_t.get)),
        (po = co(_t.has)),
        (Fc = co(_t.set)),
        (_n = function (e, t) {
          if (po(_t, e)) throw new go(qc);
          return (t.facade = e), Fc(_t, e, t), t;
        }),
        (Sr = function (e) {
          return Mc(_t, e) || {};
        }),
        (bn = function (e) {
          return po(_t, e);
        }))
      : ((Lt = nI("state")),
        (iI[Lt] = !0),
        (_n = function (e, t) {
          if (lo(e, Lt)) throw new go(qc);
          return (t.facade = e), rI(e, Lt, t), t;
        }),
        (Sr = function (e) {
          return lo(e, Lt) ? e[Lt] : {};
        }),
        (bn = function (e) {
          return lo(e, Lt);
        }));
    var _t, Mc, po, Fc, Lt;
    kc.exports = { set: _n, get: Sr, has: bn, enforce: aI, getterFor: sI };
  });
  var Bc = c((kB, Vc) => {
    var vo = Ct(),
      uI = yt(),
      Uc = Function.prototype,
      cI = vo && Object.getOwnPropertyDescriptor,
      ho = uI(Uc, "name"),
      lI = ho && function () {}.name === "something",
      fI = ho && (!vo || (vo && cI(Uc, "name").configurable));
    Vc.exports = { EXISTS: ho, PROPER: lI, CONFIGURABLE: fI };
  });
  var zc = c((GB, jc) => {
    var dI = ge(),
      Xc = nt(),
      pI = yt(),
      Wc = mn(),
      gI = hn(),
      vI = so(),
      Hc = Gc(),
      hI = Bc().CONFIGURABLE,
      EI = Hc.get,
      mI = Hc.enforce,
      yI = String(String).split("String");
    (jc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Xc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!pI(r, "name") || (hI && r.name !== s)) && Wc(r, "name", s),
          (u = mI(r)),
          u.source || (u.source = yI.join(typeof s == "string" ? s : ""))),
        e === dI)
      ) {
        o ? (e[t] = r) : gI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Wc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Xc(this) && EI(this).source) || vI(this);
    });
  });
  var Eo = c((UB, Kc) => {
    var _I = Math.ceil,
      bI = Math.floor;
    Kc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? bI : _I)(t);
    };
  });
  var $c = c((VB, Yc) => {
    var TI = Eo(),
      II = Math.max,
      AI = Math.min;
    Yc.exports = function (e, t) {
      var r = TI(e);
      return r < 0 ? II(r + t, 0) : AI(r, t);
    };
  });
  var Zc = c((BB, Qc) => {
    var OI = Eo(),
      wI = Math.min;
    Qc.exports = function (e) {
      return e > 0 ? wI(OI(e), 9007199254740991) : 0;
    };
  });
  var el = c((XB, Jc) => {
    var xI = Zc();
    Jc.exports = function (e) {
      return xI(e.length);
    };
  });
  var mo = c((WB, rl) => {
    var SI = Ar(),
      CI = $c(),
      RI = el(),
      tl = function (e) {
        return function (t, r, n) {
          var i = SI(t),
            o = RI(i),
            a = CI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    rl.exports = { includes: tl(!0), indexOf: tl(!1) };
  });
  var _o = c((HB, il) => {
    var LI = He(),
      yo = yt(),
      NI = Ar(),
      PI = mo().indexOf,
      qI = yn(),
      nl = LI([].push);
    il.exports = function (e, t) {
      var r = NI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !yo(qI, o) && yo(r, o) && nl(i, o);
      for (; t.length > n; ) yo(r, (o = t[n++])) && (~PI(i, o) || nl(i, o));
      return i;
    };
  });
  var Tn = c((jB, ol) => {
    ol.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var sl = c((al) => {
    var MI = _o(),
      FI = Tn(),
      DI = FI.concat("length", "prototype");
    al.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return MI(t, DI);
      };
  });
  var cl = c((ul) => {
    ul.f = Object.getOwnPropertySymbols;
  });
  var fl = c((YB, ll) => {
    var kI = Or(),
      GI = He(),
      UI = sl(),
      VI = cl(),
      BI = wr(),
      XI = GI([].concat);
    ll.exports =
      kI("Reflect", "ownKeys") ||
      function (t) {
        var r = UI.f(BI(t)),
          n = VI.f;
        return n ? XI(r, n(t)) : r;
      };
  });
  var pl = c(($B, dl) => {
    var WI = yt(),
      HI = fl(),
      jI = oo(),
      zI = xr();
    dl.exports = function (e, t) {
      for (var r = HI(t), n = zI.f, i = jI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        WI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var vl = c((QB, gl) => {
    var KI = Xt(),
      YI = nt(),
      $I = /#|\.prototype\./,
      Cr = function (e, t) {
        var r = ZI[QI(e)];
        return r == e0 ? !0 : r == JI ? !1 : YI(t) ? KI(t) : !!t;
      },
      QI = (Cr.normalize = function (e) {
        return String(e).replace($I, ".").toLowerCase();
      }),
      ZI = (Cr.data = {}),
      JI = (Cr.NATIVE = "N"),
      e0 = (Cr.POLYFILL = "P");
    gl.exports = Cr;
  });
  var El = c((ZB, hl) => {
    var bo = ge(),
      t0 = oo().f,
      r0 = mn(),
      n0 = zc(),
      i0 = hn(),
      o0 = pl(),
      a0 = vl();
    hl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        d,
        y;
      if (
        (n
          ? (a = bo)
          : i
          ? (a = bo[r] || i0(r, {}))
          : (a = (bo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((d = t[s]),
            e.noTargetGet ? ((y = t0(a, s)), (u = y && y.value)) : (u = a[s]),
            (o = a0(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof d == typeof u) continue;
            o0(d, u);
          }
          (e.sham || (u && u.sham)) && r0(d, "sham", !0), n0(a, s, d, e);
        }
    };
  });
  var yl = c((JB, ml) => {
    var s0 = _o(),
      u0 = Tn();
    ml.exports =
      Object.keys ||
      function (t) {
        return s0(t, u0);
      };
  });
  var bl = c((e5, _l) => {
    var c0 = Ct(),
      l0 = xr(),
      f0 = wr(),
      d0 = Ar(),
      p0 = yl();
    _l.exports = c0
      ? Object.defineProperties
      : function (t, r) {
          f0(t);
          for (var n = d0(r), i = p0(r), o = i.length, a = 0, s; o > a; )
            l0.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Il = c((t5, Tl) => {
    var g0 = Or();
    Tl.exports = g0("document", "documentElement");
  });
  var Ll = c((r5, Rl) => {
    var v0 = wr(),
      h0 = bl(),
      Al = Tn(),
      E0 = yn(),
      m0 = Il(),
      y0 = no(),
      _0 = uo(),
      Ol = ">",
      wl = "<",
      Io = "prototype",
      Ao = "script",
      Sl = _0("IE_PROTO"),
      To = function () {},
      Cl = function (e) {
        return wl + Ao + Ol + e + wl + "/" + Ao + Ol;
      },
      xl = function (e) {
        e.write(Cl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      b0 = function () {
        var e = y0("iframe"),
          t = "java" + Ao + ":",
          r;
        return (
          (e.style.display = "none"),
          m0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Cl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      In,
      An = function () {
        try {
          In = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && In
              ? xl(In)
              : b0()
            : xl(In);
        for (var e = Al.length; e--; ) delete An[Io][Al[e]];
        return An();
      };
    E0[Sl] = !0;
    Rl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((To[Io] = v0(t)), (n = new To()), (To[Io] = null), (n[Sl] = t))
            : (n = An()),
          r === void 0 ? n : h0(n, r)
        );
      };
  });
  var Pl = c((n5, Nl) => {
    var T0 = eo(),
      I0 = Ll(),
      A0 = xr(),
      Oo = T0("unscopables"),
      wo = Array.prototype;
    wo[Oo] == null && A0.f(wo, Oo, { configurable: !0, value: I0(null) });
    Nl.exports = function (e) {
      wo[Oo][e] = !0;
    };
  });
  var ql = c(() => {
    "use strict";
    var O0 = El(),
      w0 = mo().includes,
      x0 = Pl();
    O0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return w0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    x0("includes");
  });
  var Fl = c((a5, Ml) => {
    var S0 = ge(),
      C0 = He();
    Ml.exports = function (e, t) {
      return C0(S0[e].prototype[t]);
    };
  });
  var kl = c((s5, Dl) => {
    ql();
    var R0 = Fl();
    Dl.exports = R0("Array", "includes");
  });
  var Ul = c((u5, Gl) => {
    var L0 = kl();
    Gl.exports = L0;
  });
  var Bl = c((c5, Vl) => {
    var N0 = Ul();
    Vl.exports = N0;
  });
  var xo = c((l5, Xl) => {
    var P0 =
      typeof global == "object" && global && global.Object === Object && global;
    Xl.exports = P0;
  });
  var ze = c((f5, Wl) => {
    var q0 = xo(),
      M0 = typeof self == "object" && self && self.Object === Object && self,
      F0 = q0 || M0 || Function("return this")();
    Wl.exports = F0;
  });
  var jt = c((d5, Hl) => {
    var D0 = ze(),
      k0 = D0.Symbol;
    Hl.exports = k0;
  });
  var Yl = c((p5, Kl) => {
    var jl = jt(),
      zl = Object.prototype,
      G0 = zl.hasOwnProperty,
      U0 = zl.toString,
      Rr = jl ? jl.toStringTag : void 0;
    function V0(e) {
      var t = G0.call(e, Rr),
        r = e[Rr];
      try {
        e[Rr] = void 0;
        var n = !0;
      } catch {}
      var i = U0.call(e);
      return n && (t ? (e[Rr] = r) : delete e[Rr]), i;
    }
    Kl.exports = V0;
  });
  var Ql = c((g5, $l) => {
    var B0 = Object.prototype,
      X0 = B0.toString;
    function W0(e) {
      return X0.call(e);
    }
    $l.exports = W0;
  });
  var bt = c((v5, ef) => {
    var Zl = jt(),
      H0 = Yl(),
      j0 = Ql(),
      z0 = "[object Null]",
      K0 = "[object Undefined]",
      Jl = Zl ? Zl.toStringTag : void 0;
    function Y0(e) {
      return e == null
        ? e === void 0
          ? K0
          : z0
        : Jl && Jl in Object(e)
        ? H0(e)
        : j0(e);
    }
    ef.exports = Y0;
  });
  var So = c((h5, tf) => {
    function $0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    tf.exports = $0;
  });
  var Co = c((E5, rf) => {
    var Q0 = So(),
      Z0 = Q0(Object.getPrototypeOf, Object);
    rf.exports = Z0;
  });
  var dt = c((m5, nf) => {
    function J0(e) {
      return e != null && typeof e == "object";
    }
    nf.exports = J0;
  });
  var Ro = c((y5, af) => {
    var eA = bt(),
      tA = Co(),
      rA = dt(),
      nA = "[object Object]",
      iA = Function.prototype,
      oA = Object.prototype,
      of = iA.toString,
      aA = oA.hasOwnProperty,
      sA = of.call(Object);
    function uA(e) {
      if (!rA(e) || eA(e) != nA) return !1;
      var t = tA(e);
      if (t === null) return !0;
      var r = aA.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && of.call(r) == sA;
    }
    af.exports = uA;
  });
  var sf = c((Lo) => {
    "use strict";
    Object.defineProperty(Lo, "__esModule", { value: !0 });
    Lo.default = cA;
    function cA(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var uf = c((Po, No) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    var lA = sf(),
      fA = dA(lA);
    function dA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var zt;
    typeof self < "u"
      ? (zt = self)
      : typeof window < "u"
      ? (zt = window)
      : typeof global < "u"
      ? (zt = global)
      : typeof No < "u"
      ? (zt = No)
      : (zt = Function("return this")());
    var pA = (0, fA.default)(zt);
    Po.default = pA;
  });
  var qo = c((Lr) => {
    "use strict";
    Lr.__esModule = !0;
    Lr.ActionTypes = void 0;
    Lr.default = df;
    var gA = Ro(),
      vA = ff(gA),
      hA = uf(),
      cf = ff(hA);
    function ff(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var lf = (Lr.ActionTypes = { INIT: "@@redux/INIT" });
    function df(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(df)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function d() {
        s === a && (s = a.slice());
      }
      function y() {
        return o;
      }
      function g(b) {
        if (typeof b != "function")
          throw new Error("Expected listener to be a function.");
        var R = !0;
        return (
          d(),
          s.push(b),
          function () {
            if (R) {
              (R = !1), d();
              var q = s.indexOf(b);
              s.splice(q, 1);
            }
          }
        );
      }
      function v(b) {
        if (!(0, vA.default)(b))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof b.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, b));
        } finally {
          u = !1;
        }
        for (var R = (a = s), T = 0; T < R.length; T++) R[T]();
        return b;
      }
      function A(b) {
        if (typeof b != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = b), v({ type: lf.INIT });
      }
      function x() {
        var b,
          R = g;
        return (
          (b = {
            subscribe: function (q) {
              if (typeof q != "object")
                throw new TypeError("Expected the observer to be an object.");
              function L() {
                q.next && q.next(y());
              }
              L();
              var U = R(L);
              return { unsubscribe: U };
            },
          }),
          (b[cf.default] = function () {
            return this;
          }),
          b
        );
      }
      return (
        v({ type: lf.INIT }),
        (n = { dispatch: v, subscribe: g, getState: y, replaceReducer: A }),
        (n[cf.default] = x),
        n
      );
    }
  });
  var Fo = c((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = EA;
    function EA(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var vf = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = TA;
    var pf = qo(),
      mA = Ro(),
      I5 = gf(mA),
      yA = Fo(),
      A5 = gf(yA);
    function gf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _A(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function bA(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: pf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                pf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function TA(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        bA(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (s) throw s;
        if (!1) var g;
        for (var v = !1, A = {}, x = 0; x < o.length; x++) {
          var b = o[x],
            R = r[b],
            T = d[b],
            q = R(T, y);
          if (typeof q > "u") {
            var L = _A(b, y);
            throw new Error(L);
          }
          (A[b] = q), (v = v || q !== T);
        }
        return v ? A : d;
      };
    }
  });
  var Ef = c((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = IA;
    function hf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function IA(e, t) {
      if (typeof e == "function") return hf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = hf(a, t));
      }
      return n;
    }
  });
  var Uo = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = AA;
    function AA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var mf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    var OA =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Vo.default = CA;
    var wA = Uo(),
      xA = SA(wA);
    function SA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function CA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            d = [],
            y = {
              getState: s.getState,
              dispatch: function (v) {
                return u(v);
              },
            };
          return (
            (d = t.map(function (g) {
              return g(y);
            })),
            (u = xA.default.apply(void 0, d)(s.dispatch)),
            OA({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Bo = c((Ue) => {
    "use strict";
    Ue.__esModule = !0;
    Ue.compose =
      Ue.applyMiddleware =
      Ue.bindActionCreators =
      Ue.combineReducers =
      Ue.createStore =
        void 0;
    var RA = qo(),
      LA = Kt(RA),
      NA = vf(),
      PA = Kt(NA),
      qA = Ef(),
      MA = Kt(qA),
      FA = mf(),
      DA = Kt(FA),
      kA = Uo(),
      GA = Kt(kA),
      UA = Fo(),
      C5 = Kt(UA);
    function Kt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ue.createStore = LA.default;
    Ue.combineReducers = PA.default;
    Ue.bindActionCreators = MA.default;
    Ue.applyMiddleware = DA.default;
    Ue.compose = GA.default;
  });
  var Ke,
    Xo,
    it,
    VA,
    BA,
    On,
    XA,
    Wo = pe(() => {
      "use strict";
      (Ke = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Xo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (it = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (VA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (BA = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (On = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (XA = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var qe,
    WA,
    wn = pe(() => {
      "use strict";
      (qe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (WA = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var HA,
    yf = pe(() => {
      "use strict";
      HA = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    Ho,
    _f = pe(() => {
      "use strict";
      wn();
      ({
        TRANSFORM_MOVE: jA,
        TRANSFORM_SCALE: zA,
        TRANSFORM_ROTATE: KA,
        TRANSFORM_SKEW: YA,
        STYLE_SIZE: $A,
        STYLE_FILTER: QA,
        STYLE_FONT_VARIATION: ZA,
      } = qe),
        (Ho = {
          [jA]: !0,
          [zA]: !0,
          [KA]: !0,
          [YA]: !0,
          [$A]: !0,
          [QA]: !0,
          [ZA]: !0,
        });
    });
  var _e = {};
  Pe(_e, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => vO,
    IX2_ANIMATION_FRAME_CHANGED: () => cO,
    IX2_CLEAR_REQUESTED: () => aO,
    IX2_ELEMENT_STATE_CHANGED: () => gO,
    IX2_EVENT_LISTENER_ADDED: () => sO,
    IX2_EVENT_STATE_CHANGED: () => uO,
    IX2_INSTANCE_ADDED: () => fO,
    IX2_INSTANCE_REMOVED: () => pO,
    IX2_INSTANCE_STARTED: () => dO,
    IX2_MEDIA_QUERIES_DEFINED: () => EO,
    IX2_PARAMETER_CHANGED: () => lO,
    IX2_PLAYBACK_REQUESTED: () => iO,
    IX2_PREVIEW_REQUESTED: () => nO,
    IX2_RAW_DATA_IMPORTED: () => JA,
    IX2_SESSION_INITIALIZED: () => eO,
    IX2_SESSION_STARTED: () => tO,
    IX2_SESSION_STOPPED: () => rO,
    IX2_STOP_REQUESTED: () => oO,
    IX2_TEST_FRAME_RENDERED: () => mO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => hO,
  });
  var JA,
    eO,
    tO,
    rO,
    nO,
    iO,
    oO,
    aO,
    sO,
    uO,
    cO,
    lO,
    fO,
    dO,
    pO,
    gO,
    vO,
    hO,
    EO,
    mO,
    bf = pe(() => {
      "use strict";
      (JA = "IX2_RAW_DATA_IMPORTED"),
        (eO = "IX2_SESSION_INITIALIZED"),
        (tO = "IX2_SESSION_STARTED"),
        (rO = "IX2_SESSION_STOPPED"),
        (nO = "IX2_PREVIEW_REQUESTED"),
        (iO = "IX2_PLAYBACK_REQUESTED"),
        (oO = "IX2_STOP_REQUESTED"),
        (aO = "IX2_CLEAR_REQUESTED"),
        (sO = "IX2_EVENT_LISTENER_ADDED"),
        (uO = "IX2_EVENT_STATE_CHANGED"),
        (cO = "IX2_ANIMATION_FRAME_CHANGED"),
        (lO = "IX2_PARAMETER_CHANGED"),
        (fO = "IX2_INSTANCE_ADDED"),
        (dO = "IX2_INSTANCE_STARTED"),
        (pO = "IX2_INSTANCE_REMOVED"),
        (gO = "IX2_ELEMENT_STATE_CHANGED"),
        (vO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (hO = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (EO = "IX2_MEDIA_QUERIES_DEFINED"),
        (mO = "IX2_TEST_FRAME_RENDERED");
    });
  var Oe = {};
  Pe(Oe, {
    ABSTRACT_NODE: () => hw,
    AUTO: () => ow,
    BACKGROUND: () => JO,
    BACKGROUND_COLOR: () => ZO,
    BAR_DELIMITER: () => uw,
    BORDER_COLOR: () => ew,
    BOUNDARY_SELECTOR: () => IO,
    CHILDREN: () => cw,
    COLON_DELIMITER: () => sw,
    COLOR: () => tw,
    COMMA_DELIMITER: () => aw,
    CONFIG_UNIT: () => LO,
    CONFIG_VALUE: () => xO,
    CONFIG_X_UNIT: () => SO,
    CONFIG_X_VALUE: () => AO,
    CONFIG_Y_UNIT: () => CO,
    CONFIG_Y_VALUE: () => OO,
    CONFIG_Z_UNIT: () => RO,
    CONFIG_Z_VALUE: () => wO,
    DISPLAY: () => rw,
    FILTER: () => KO,
    FLEX: () => nw,
    FONT_VARIATION_SETTINGS: () => YO,
    HEIGHT: () => QO,
    HTML_ELEMENT: () => gw,
    IMMEDIATE_CHILDREN: () => lw,
    IX2_ID_DELIMITER: () => yO,
    OPACITY: () => zO,
    PARENT: () => dw,
    PLAIN_OBJECT: () => vw,
    PRESERVE_3D: () => pw,
    RENDER_GENERAL: () => mw,
    RENDER_PLUGIN: () => _w,
    RENDER_STYLE: () => yw,
    RENDER_TRANSFORM: () => Ew,
    ROTATE_X: () => VO,
    ROTATE_Y: () => BO,
    ROTATE_Z: () => XO,
    SCALE_3D: () => UO,
    SCALE_X: () => DO,
    SCALE_Y: () => kO,
    SCALE_Z: () => GO,
    SIBLINGS: () => fw,
    SKEW: () => WO,
    SKEW_X: () => HO,
    SKEW_Y: () => jO,
    TRANSFORM: () => NO,
    TRANSLATE_3D: () => FO,
    TRANSLATE_X: () => PO,
    TRANSLATE_Y: () => qO,
    TRANSLATE_Z: () => MO,
    WF_PAGE: () => _O,
    WIDTH: () => $O,
    WILL_CHANGE: () => iw,
    W_MOD_IX: () => TO,
    W_MOD_JS: () => bO,
  });
  var yO,
    _O,
    bO,
    TO,
    IO,
    AO,
    OO,
    wO,
    xO,
    SO,
    CO,
    RO,
    LO,
    NO,
    PO,
    qO,
    MO,
    FO,
    DO,
    kO,
    GO,
    UO,
    VO,
    BO,
    XO,
    WO,
    HO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    ew,
    tw,
    rw,
    nw,
    iw,
    ow,
    aw,
    sw,
    uw,
    cw,
    lw,
    fw,
    dw,
    pw,
    gw,
    vw,
    hw,
    Ew,
    mw,
    yw,
    _w,
    Tf = pe(() => {
      "use strict";
      (yO = "|"),
        (_O = "data-wf-page"),
        (bO = "w-mod-js"),
        (TO = "w-mod-ix"),
        (IO = ".w-dyn-item"),
        (AO = "xValue"),
        (OO = "yValue"),
        (wO = "zValue"),
        (xO = "value"),
        (SO = "xUnit"),
        (CO = "yUnit"),
        (RO = "zUnit"),
        (LO = "unit"),
        (NO = "transform"),
        (PO = "translateX"),
        (qO = "translateY"),
        (MO = "translateZ"),
        (FO = "translate3d"),
        (DO = "scaleX"),
        (kO = "scaleY"),
        (GO = "scaleZ"),
        (UO = "scale3d"),
        (VO = "rotateX"),
        (BO = "rotateY"),
        (XO = "rotateZ"),
        (WO = "skew"),
        (HO = "skewX"),
        (jO = "skewY"),
        (zO = "opacity"),
        (KO = "filter"),
        (YO = "font-variation-settings"),
        ($O = "width"),
        (QO = "height"),
        (ZO = "backgroundColor"),
        (JO = "background"),
        (ew = "borderColor"),
        (tw = "color"),
        (rw = "display"),
        (nw = "flex"),
        (iw = "willChange"),
        (ow = "AUTO"),
        (aw = ","),
        (sw = ":"),
        (uw = "|"),
        (cw = "CHILDREN"),
        (lw = "IMMEDIATE_CHILDREN"),
        (fw = "SIBLINGS"),
        (dw = "PARENT"),
        (pw = "preserve-3d"),
        (gw = "HTML_ELEMENT"),
        (vw = "PLAIN_OBJECT"),
        (hw = "ABSTRACT_NODE"),
        (Ew = "RENDER_TRANSFORM"),
        (mw = "RENDER_GENERAL"),
        (yw = "RENDER_STYLE"),
        (_w = "RENDER_PLUGIN");
    });
  var If = {};
  Pe(If, {
    ActionAppliesTo: () => WA,
    ActionTypeConsts: () => qe,
    EventAppliesTo: () => Xo,
    EventBasedOn: () => it,
    EventContinuousMouseAxes: () => VA,
    EventLimitAffectedElements: () => BA,
    EventTypeConsts: () => Ke,
    IX2EngineActionTypes: () => _e,
    IX2EngineConstants: () => Oe,
    InteractionTypeConsts: () => HA,
    QuickEffectDirectionConsts: () => XA,
    QuickEffectIds: () => On,
    ReducedMotionTypes: () => Ho,
  });
  var Me = pe(() => {
    "use strict";
    Wo();
    wn();
    yf();
    _f();
    bf();
    Tf();
    wn();
    Wo();
  });
  var bw,
    Af,
    Of = pe(() => {
      "use strict";
      Me();
      ({ IX2_RAW_DATA_IMPORTED: bw } = _e),
        (Af = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case bw:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Yt = c((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    var Tw =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    he.clone = Sn;
    he.addLast = Sf;
    he.addFirst = Cf;
    he.removeLast = Rf;
    he.removeFirst = Lf;
    he.insert = Nf;
    he.removeAt = Pf;
    he.replaceAt = qf;
    he.getIn = Cn;
    he.set = Rn;
    he.setIn = Ln;
    he.update = Ff;
    he.updateIn = Df;
    he.merge = kf;
    he.mergeDeep = Gf;
    he.mergeIn = Uf;
    he.omit = Vf;
    he.addDefaults = Bf;
    var wf = "INVALID_ARGS";
    function xf(e) {
      throw new Error(e);
    }
    function jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Iw = {}.hasOwnProperty;
    function Sn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Fe(e, t, r) {
      var n = r;
      n == null && xf(wf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (d != null) {
          var y = jo(d);
          if (y.length)
            for (var g = 0; g <= y.length; g++) {
              var v = y[g];
              if (!(e && n[v] !== void 0)) {
                var A = d[v];
                t && xn(n[v]) && xn(A) && (A = Fe(e, t, n[v], A)),
                  !(A === void 0 || A === n[v]) &&
                    (i || ((i = !0), (n = Sn(n))), (n[v] = A));
              }
            }
        }
      }
      return n;
    }
    function xn(e) {
      var t = typeof e > "u" ? "undefined" : Tw(e);
      return e != null && (t === "object" || t === "function");
    }
    function Sf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Cf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Rf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Lf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Nf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Pf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function qf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Cn(e, t) {
      if ((!Array.isArray(t) && xf(wf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Rn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Sn(i);
      return (o[t] = r), o;
    }
    function Mf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          xn(e) && xn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Mf(a, t, r, n + 1);
      }
      return Rn(e, o, i);
    }
    function Ln(e, t, r) {
      return t.length ? Mf(e, t, r, 0) : r;
    }
    function Ff(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Rn(e, t, i);
    }
    function Df(e, t, r) {
      var n = Cn(e, t),
        i = r(n);
      return Ln(e, t, i);
    }
    function kf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Fe(!1, !1, e, t, r, n, i, o);
    }
    function Gf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Fe(!1, !0, e, t, r, n, i, o);
    }
    function Uf(e, t, r, n, i, o, a) {
      var s = Cn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          d = arguments.length,
          y = Array(d > 7 ? d - 7 : 0),
          g = 7;
        g < d;
        g++
      )
        y[g - 7] = arguments[g];
      return (
        y.length
          ? (u = Fe.call.apply(Fe, [null, !1, !1, s, r, n, i, o, a].concat(y)))
          : (u = Fe(!1, !1, s, r, n, i, o, a)),
        Ln(e, t, u)
      );
    }
    function Vf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (Iw.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = jo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Bf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Fe(!0, !1, e, t, r, n, i, o);
    }
    var Aw = {
      clone: Sn,
      addLast: Sf,
      addFirst: Cf,
      removeLast: Rf,
      removeFirst: Lf,
      insert: Nf,
      removeAt: Pf,
      replaceAt: qf,
      getIn: Cn,
      set: Rn,
      setIn: Ln,
      update: Ff,
      updateIn: Df,
      merge: kf,
      mergeDeep: Gf,
      mergeIn: Uf,
      omit: Vf,
      addDefaults: Bf,
    };
    he.default = Aw;
  });
  var Wf,
    Ow,
    ww,
    xw,
    Sw,
    Cw,
    Xf,
    Hf,
    jf = pe(() => {
      "use strict";
      Me();
      (Wf = ae(Yt())),
        ({
          IX2_PREVIEW_REQUESTED: Ow,
          IX2_PLAYBACK_REQUESTED: ww,
          IX2_STOP_REQUESTED: xw,
          IX2_CLEAR_REQUESTED: Sw,
        } = _e),
        (Cw = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Xf = Object.create(null, {
          [Ow]: { value: "preview" },
          [ww]: { value: "playback" },
          [xw]: { value: "stop" },
          [Sw]: { value: "clear" },
        })),
        (Hf = (e = Cw, t) => {
          if (t.type in Xf) {
            let r = [Xf[t.type]];
            return (0, Wf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ce,
    Rw,
    Lw,
    Nw,
    Pw,
    qw,
    Mw,
    Fw,
    Dw,
    kw,
    Gw,
    zf,
    Uw,
    Kf,
    Yf = pe(() => {
      "use strict";
      Me();
      (Ce = ae(Yt())),
        ({
          IX2_SESSION_INITIALIZED: Rw,
          IX2_SESSION_STARTED: Lw,
          IX2_TEST_FRAME_RENDERED: Nw,
          IX2_SESSION_STOPPED: Pw,
          IX2_EVENT_LISTENER_ADDED: qw,
          IX2_EVENT_STATE_CHANGED: Mw,
          IX2_ANIMATION_FRAME_CHANGED: Fw,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Dw,
          IX2_VIEWPORT_WIDTH_CHANGED: kw,
          IX2_MEDIA_QUERIES_DEFINED: Gw,
        } = _e),
        (zf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (Uw = 20),
        (Kf = (e = zf, t) => {
          switch (t.type) {
            case Rw: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ce.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case Lw:
              return (0, Ce.set)(e, "active", !0);
            case Nw: {
              let {
                payload: { step: r = Uw },
              } = t;
              return (0, Ce.set)(e, "tick", e.tick + r);
            }
            case Pw:
              return zf;
            case Fw: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ce.set)(e, "tick", r);
            }
            case qw: {
              let r = (0, Ce.addLast)(e.eventListeners, t.payload);
              return (0, Ce.set)(e, "eventListeners", r);
            }
            case Mw: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ce.setIn)(e, ["eventState", r], n);
            }
            case Dw: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ce.setIn)(e, ["playbackState", r], n);
            }
            case kw: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: d } = n[a];
                if (r >= u && r <= d) {
                  o = s;
                  break;
                }
              }
              return (0, Ce.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Gw:
              return (0, Ce.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Qf = c((Y5, $f) => {
    function Vw() {
      (this.__data__ = []), (this.size = 0);
    }
    $f.exports = Vw;
  });
  var Nn = c(($5, Zf) => {
    function Bw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Zf.exports = Bw;
  });
  var Nr = c((Q5, Jf) => {
    var Xw = Nn();
    function Ww(e, t) {
      for (var r = e.length; r--; ) if (Xw(e[r][0], t)) return r;
      return -1;
    }
    Jf.exports = Ww;
  });
  var td = c((Z5, ed) => {
    var Hw = Nr(),
      jw = Array.prototype,
      zw = jw.splice;
    function Kw(e) {
      var t = this.__data__,
        r = Hw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : zw.call(t, r, 1), --this.size, !0;
    }
    ed.exports = Kw;
  });
  var nd = c((J5, rd) => {
    var Yw = Nr();
    function $w(e) {
      var t = this.__data__,
        r = Yw(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    rd.exports = $w;
  });
  var od = c((eX, id) => {
    var Qw = Nr();
    function Zw(e) {
      return Qw(this.__data__, e) > -1;
    }
    id.exports = Zw;
  });
  var sd = c((tX, ad) => {
    var Jw = Nr();
    function ex(e, t) {
      var r = this.__data__,
        n = Jw(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    ad.exports = ex;
  });
  var Pr = c((rX, ud) => {
    var tx = Qf(),
      rx = td(),
      nx = nd(),
      ix = od(),
      ox = sd();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = tx;
    $t.prototype.delete = rx;
    $t.prototype.get = nx;
    $t.prototype.has = ix;
    $t.prototype.set = ox;
    ud.exports = $t;
  });
  var ld = c((nX, cd) => {
    var ax = Pr();
    function sx() {
      (this.__data__ = new ax()), (this.size = 0);
    }
    cd.exports = sx;
  });
  var dd = c((iX, fd) => {
    function ux(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    fd.exports = ux;
  });
  var gd = c((oX, pd) => {
    function cx(e) {
      return this.__data__.get(e);
    }
    pd.exports = cx;
  });
  var hd = c((aX, vd) => {
    function lx(e) {
      return this.__data__.has(e);
    }
    vd.exports = lx;
  });
  var ot = c((sX, Ed) => {
    function fx(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Ed.exports = fx;
  });
  var zo = c((uX, md) => {
    var dx = bt(),
      px = ot(),
      gx = "[object AsyncFunction]",
      vx = "[object Function]",
      hx = "[object GeneratorFunction]",
      Ex = "[object Proxy]";
    function mx(e) {
      if (!px(e)) return !1;
      var t = dx(e);
      return t == vx || t == hx || t == gx || t == Ex;
    }
    md.exports = mx;
  });
  var _d = c((cX, yd) => {
    var yx = ze(),
      _x = yx["__core-js_shared__"];
    yd.exports = _x;
  });
  var Id = c((lX, Td) => {
    var Ko = _d(),
      bd = (function () {
        var e = /[^.]+$/.exec((Ko && Ko.keys && Ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function bx(e) {
      return !!bd && bd in e;
    }
    Td.exports = bx;
  });
  var Yo = c((fX, Ad) => {
    var Tx = Function.prototype,
      Ix = Tx.toString;
    function Ax(e) {
      if (e != null) {
        try {
          return Ix.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Ad.exports = Ax;
  });
  var wd = c((dX, Od) => {
    var Ox = zo(),
      wx = Id(),
      xx = ot(),
      Sx = Yo(),
      Cx = /[\\^$.*+?()[\]{}|]/g,
      Rx = /^\[object .+?Constructor\]$/,
      Lx = Function.prototype,
      Nx = Object.prototype,
      Px = Lx.toString,
      qx = Nx.hasOwnProperty,
      Mx = RegExp(
        "^" +
          Px.call(qx)
            .replace(Cx, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Fx(e) {
      if (!xx(e) || wx(e)) return !1;
      var t = Ox(e) ? Mx : Rx;
      return t.test(Sx(e));
    }
    Od.exports = Fx;
  });
  var Sd = c((pX, xd) => {
    function Dx(e, t) {
      return e?.[t];
    }
    xd.exports = Dx;
  });
  var Tt = c((gX, Cd) => {
    var kx = wd(),
      Gx = Sd();
    function Ux(e, t) {
      var r = Gx(e, t);
      return kx(r) ? r : void 0;
    }
    Cd.exports = Ux;
  });
  var Pn = c((vX, Rd) => {
    var Vx = Tt(),
      Bx = ze(),
      Xx = Vx(Bx, "Map");
    Rd.exports = Xx;
  });
  var qr = c((hX, Ld) => {
    var Wx = Tt(),
      Hx = Wx(Object, "create");
    Ld.exports = Hx;
  });
  var qd = c((EX, Pd) => {
    var Nd = qr();
    function jx() {
      (this.__data__ = Nd ? Nd(null) : {}), (this.size = 0);
    }
    Pd.exports = jx;
  });
  var Fd = c((mX, Md) => {
    function zx(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Md.exports = zx;
  });
  var kd = c((yX, Dd) => {
    var Kx = qr(),
      Yx = "__lodash_hash_undefined__",
      $x = Object.prototype,
      Qx = $x.hasOwnProperty;
    function Zx(e) {
      var t = this.__data__;
      if (Kx) {
        var r = t[e];
        return r === Yx ? void 0 : r;
      }
      return Qx.call(t, e) ? t[e] : void 0;
    }
    Dd.exports = Zx;
  });
  var Ud = c((_X, Gd) => {
    var Jx = qr(),
      eS = Object.prototype,
      tS = eS.hasOwnProperty;
    function rS(e) {
      var t = this.__data__;
      return Jx ? t[e] !== void 0 : tS.call(t, e);
    }
    Gd.exports = rS;
  });
  var Bd = c((bX, Vd) => {
    var nS = qr(),
      iS = "__lodash_hash_undefined__";
    function oS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = nS && t === void 0 ? iS : t),
        this
      );
    }
    Vd.exports = oS;
  });
  var Wd = c((TX, Xd) => {
    var aS = qd(),
      sS = Fd(),
      uS = kd(),
      cS = Ud(),
      lS = Bd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = aS;
    Qt.prototype.delete = sS;
    Qt.prototype.get = uS;
    Qt.prototype.has = cS;
    Qt.prototype.set = lS;
    Xd.exports = Qt;
  });
  var zd = c((IX, jd) => {
    var Hd = Wd(),
      fS = Pr(),
      dS = Pn();
    function pS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Hd(),
          map: new (dS || fS)(),
          string: new Hd(),
        });
    }
    jd.exports = pS;
  });
  var Yd = c((AX, Kd) => {
    function gS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Kd.exports = gS;
  });
  var Mr = c((OX, $d) => {
    var vS = Yd();
    function hS(e, t) {
      var r = e.__data__;
      return vS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    $d.exports = hS;
  });
  var Zd = c((wX, Qd) => {
    var ES = Mr();
    function mS(e) {
      var t = ES(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Qd.exports = mS;
  });
  var ep = c((xX, Jd) => {
    var yS = Mr();
    function _S(e) {
      return yS(this, e).get(e);
    }
    Jd.exports = _S;
  });
  var rp = c((SX, tp) => {
    var bS = Mr();
    function TS(e) {
      return bS(this, e).has(e);
    }
    tp.exports = TS;
  });
  var ip = c((CX, np) => {
    var IS = Mr();
    function AS(e, t) {
      var r = IS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    np.exports = AS;
  });
  var qn = c((RX, op) => {
    var OS = zd(),
      wS = Zd(),
      xS = ep(),
      SS = rp(),
      CS = ip();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = OS;
    Zt.prototype.delete = wS;
    Zt.prototype.get = xS;
    Zt.prototype.has = SS;
    Zt.prototype.set = CS;
    op.exports = Zt;
  });
  var sp = c((LX, ap) => {
    var RS = Pr(),
      LS = Pn(),
      NS = qn(),
      PS = 200;
    function qS(e, t) {
      var r = this.__data__;
      if (r instanceof RS) {
        var n = r.__data__;
        if (!LS || n.length < PS - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new NS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ap.exports = qS;
  });
  var $o = c((NX, up) => {
    var MS = Pr(),
      FS = ld(),
      DS = dd(),
      kS = gd(),
      GS = hd(),
      US = sp();
    function Jt(e) {
      var t = (this.__data__ = new MS(e));
      this.size = t.size;
    }
    Jt.prototype.clear = FS;
    Jt.prototype.delete = DS;
    Jt.prototype.get = kS;
    Jt.prototype.has = GS;
    Jt.prototype.set = US;
    up.exports = Jt;
  });
  var lp = c((PX, cp) => {
    var VS = "__lodash_hash_undefined__";
    function BS(e) {
      return this.__data__.set(e, VS), this;
    }
    cp.exports = BS;
  });
  var dp = c((qX, fp) => {
    function XS(e) {
      return this.__data__.has(e);
    }
    fp.exports = XS;
  });
  var gp = c((MX, pp) => {
    var WS = qn(),
      HS = lp(),
      jS = dp();
    function Mn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new WS(); ++t < r; ) this.add(e[t]);
    }
    Mn.prototype.add = Mn.prototype.push = HS;
    Mn.prototype.has = jS;
    pp.exports = Mn;
  });
  var hp = c((FX, vp) => {
    function zS(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    vp.exports = zS;
  });
  var mp = c((DX, Ep) => {
    function KS(e, t) {
      return e.has(t);
    }
    Ep.exports = KS;
  });
  var Qo = c((kX, yp) => {
    var YS = gp(),
      $S = hp(),
      QS = mp(),
      ZS = 1,
      JS = 2;
    function eC(e, t, r, n, i, o) {
      var a = r & ZS,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var d = o.get(e),
        y = o.get(t);
      if (d && y) return d == t && y == e;
      var g = -1,
        v = !0,
        A = r & JS ? new YS() : void 0;
      for (o.set(e, t), o.set(t, e); ++g < s; ) {
        var x = e[g],
          b = t[g];
        if (n) var R = a ? n(b, x, g, t, e, o) : n(x, b, g, e, t, o);
        if (R !== void 0) {
          if (R) continue;
          v = !1;
          break;
        }
        if (A) {
          if (
            !$S(t, function (T, q) {
              if (!QS(A, q) && (x === T || i(x, T, r, n, o))) return A.push(q);
            })
          ) {
            v = !1;
            break;
          }
        } else if (!(x === b || i(x, b, r, n, o))) {
          v = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), v;
    }
    yp.exports = eC;
  });
  var bp = c((GX, _p) => {
    var tC = ze(),
      rC = tC.Uint8Array;
    _p.exports = rC;
  });
  var Ip = c((UX, Tp) => {
    function nC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Tp.exports = nC;
  });
  var Op = c((VX, Ap) => {
    function iC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ap.exports = iC;
  });
  var Rp = c((BX, Cp) => {
    var wp = jt(),
      xp = bp(),
      oC = Nn(),
      aC = Qo(),
      sC = Ip(),
      uC = Op(),
      cC = 1,
      lC = 2,
      fC = "[object Boolean]",
      dC = "[object Date]",
      pC = "[object Error]",
      gC = "[object Map]",
      vC = "[object Number]",
      hC = "[object RegExp]",
      EC = "[object Set]",
      mC = "[object String]",
      yC = "[object Symbol]",
      _C = "[object ArrayBuffer]",
      bC = "[object DataView]",
      Sp = wp ? wp.prototype : void 0,
      Zo = Sp ? Sp.valueOf : void 0;
    function TC(e, t, r, n, i, o, a) {
      switch (r) {
        case bC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case _C:
          return !(e.byteLength != t.byteLength || !o(new xp(e), new xp(t)));
        case fC:
        case dC:
        case vC:
          return oC(+e, +t);
        case pC:
          return e.name == t.name && e.message == t.message;
        case hC:
        case mC:
          return e == t + "";
        case gC:
          var s = sC;
        case EC:
          var u = n & cC;
          if ((s || (s = uC), e.size != t.size && !u)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= lC), a.set(e, t);
          var y = aC(s(e), s(t), n, i, o, a);
          return a.delete(e), y;
        case yC:
          if (Zo) return Zo.call(e) == Zo.call(t);
      }
      return !1;
    }
    Cp.exports = TC;
  });
  var Fn = c((XX, Lp) => {
    function IC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Lp.exports = IC;
  });
  var be = c((WX, Np) => {
    var AC = Array.isArray;
    Np.exports = AC;
  });
  var Jo = c((HX, Pp) => {
    var OC = Fn(),
      wC = be();
    function xC(e, t, r) {
      var n = t(e);
      return wC(e) ? n : OC(n, r(e));
    }
    Pp.exports = xC;
  });
  var Mp = c((jX, qp) => {
    function SC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    qp.exports = SC;
  });
  var ea = c((zX, Fp) => {
    function CC() {
      return [];
    }
    Fp.exports = CC;
  });
  var ta = c((KX, kp) => {
    var RC = Mp(),
      LC = ea(),
      NC = Object.prototype,
      PC = NC.propertyIsEnumerable,
      Dp = Object.getOwnPropertySymbols,
      qC = Dp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                RC(Dp(e), function (t) {
                  return PC.call(e, t);
                }));
          }
        : LC;
    kp.exports = qC;
  });
  var Up = c((YX, Gp) => {
    function MC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Gp.exports = MC;
  });
  var Bp = c(($X, Vp) => {
    var FC = bt(),
      DC = dt(),
      kC = "[object Arguments]";
    function GC(e) {
      return DC(e) && FC(e) == kC;
    }
    Vp.exports = GC;
  });
  var Fr = c((QX, Hp) => {
    var Xp = Bp(),
      UC = dt(),
      Wp = Object.prototype,
      VC = Wp.hasOwnProperty,
      BC = Wp.propertyIsEnumerable,
      XC = Xp(
        (function () {
          return arguments;
        })()
      )
        ? Xp
        : function (e) {
            return UC(e) && VC.call(e, "callee") && !BC.call(e, "callee");
          };
    Hp.exports = XC;
  });
  var zp = c((ZX, jp) => {
    function WC() {
      return !1;
    }
    jp.exports = WC;
  });
  var Dn = c((Dr, er) => {
    var HC = ze(),
      jC = zp(),
      $p = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
      Kp = $p && typeof er == "object" && er && !er.nodeType && er,
      zC = Kp && Kp.exports === $p,
      Yp = zC ? HC.Buffer : void 0,
      KC = Yp ? Yp.isBuffer : void 0,
      YC = KC || jC;
    er.exports = YC;
  });
  var kn = c((JX, Qp) => {
    var $C = 9007199254740991,
      QC = /^(?:0|[1-9]\d*)$/;
    function ZC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? $C),
        !!t &&
          (r == "number" || (r != "symbol" && QC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Qp.exports = ZC;
  });
  var Gn = c((eW, Zp) => {
    var JC = 9007199254740991;
    function eR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= JC;
    }
    Zp.exports = eR;
  });
  var eg = c((tW, Jp) => {
    var tR = bt(),
      rR = Gn(),
      nR = dt(),
      iR = "[object Arguments]",
      oR = "[object Array]",
      aR = "[object Boolean]",
      sR = "[object Date]",
      uR = "[object Error]",
      cR = "[object Function]",
      lR = "[object Map]",
      fR = "[object Number]",
      dR = "[object Object]",
      pR = "[object RegExp]",
      gR = "[object Set]",
      vR = "[object String]",
      hR = "[object WeakMap]",
      ER = "[object ArrayBuffer]",
      mR = "[object DataView]",
      yR = "[object Float32Array]",
      _R = "[object Float64Array]",
      bR = "[object Int8Array]",
      TR = "[object Int16Array]",
      IR = "[object Int32Array]",
      AR = "[object Uint8Array]",
      OR = "[object Uint8ClampedArray]",
      wR = "[object Uint16Array]",
      xR = "[object Uint32Array]",
      de = {};
    de[yR] =
      de[_R] =
      de[bR] =
      de[TR] =
      de[IR] =
      de[AR] =
      de[OR] =
      de[wR] =
      de[xR] =
        !0;
    de[iR] =
      de[oR] =
      de[ER] =
      de[aR] =
      de[mR] =
      de[sR] =
      de[uR] =
      de[cR] =
      de[lR] =
      de[fR] =
      de[dR] =
      de[pR] =
      de[gR] =
      de[vR] =
      de[hR] =
        !1;
    function SR(e) {
      return nR(e) && rR(e.length) && !!de[tR(e)];
    }
    Jp.exports = SR;
  });
  var rg = c((rW, tg) => {
    function CR(e) {
      return function (t) {
        return e(t);
      };
    }
    tg.exports = CR;
  });
  var ig = c((kr, tr) => {
    var RR = xo(),
      ng = typeof kr == "object" && kr && !kr.nodeType && kr,
      Gr = ng && typeof tr == "object" && tr && !tr.nodeType && tr,
      LR = Gr && Gr.exports === ng,
      ra = LR && RR.process,
      NR = (function () {
        try {
          var e = Gr && Gr.require && Gr.require("util").types;
          return e || (ra && ra.binding && ra.binding("util"));
        } catch {}
      })();
    tr.exports = NR;
  });
  var Un = c((nW, sg) => {
    var PR = eg(),
      qR = rg(),
      og = ig(),
      ag = og && og.isTypedArray,
      MR = ag ? qR(ag) : PR;
    sg.exports = MR;
  });
  var na = c((iW, ug) => {
    var FR = Up(),
      DR = Fr(),
      kR = be(),
      GR = Dn(),
      UR = kn(),
      VR = Un(),
      BR = Object.prototype,
      XR = BR.hasOwnProperty;
    function WR(e, t) {
      var r = kR(e),
        n = !r && DR(e),
        i = !r && !n && GR(e),
        o = !r && !n && !i && VR(e),
        a = r || n || i || o,
        s = a ? FR(e.length, String) : [],
        u = s.length;
      for (var d in e)
        (t || XR.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (i && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              UR(d, u))
          ) &&
          s.push(d);
      return s;
    }
    ug.exports = WR;
  });
  var Vn = c((oW, cg) => {
    var HR = Object.prototype;
    function jR(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || HR;
      return e === r;
    }
    cg.exports = jR;
  });
  var fg = c((aW, lg) => {
    var zR = So(),
      KR = zR(Object.keys, Object);
    lg.exports = KR;
  });
  var Bn = c((sW, dg) => {
    var YR = Vn(),
      $R = fg(),
      QR = Object.prototype,
      ZR = QR.hasOwnProperty;
    function JR(e) {
      if (!YR(e)) return $R(e);
      var t = [];
      for (var r in Object(e)) ZR.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    dg.exports = JR;
  });
  var Nt = c((uW, pg) => {
    var eL = zo(),
      tL = Gn();
    function rL(e) {
      return e != null && tL(e.length) && !eL(e);
    }
    pg.exports = rL;
  });
  var Ur = c((cW, gg) => {
    var nL = na(),
      iL = Bn(),
      oL = Nt();
    function aL(e) {
      return oL(e) ? nL(e) : iL(e);
    }
    gg.exports = aL;
  });
  var hg = c((lW, vg) => {
    var sL = Jo(),
      uL = ta(),
      cL = Ur();
    function lL(e) {
      return sL(e, cL, uL);
    }
    vg.exports = lL;
  });
  var yg = c((fW, mg) => {
    var Eg = hg(),
      fL = 1,
      dL = Object.prototype,
      pL = dL.hasOwnProperty;
    function gL(e, t, r, n, i, o) {
      var a = r & fL,
        s = Eg(e),
        u = s.length,
        d = Eg(t),
        y = d.length;
      if (u != y && !a) return !1;
      for (var g = u; g--; ) {
        var v = s[g];
        if (!(a ? v in t : pL.call(t, v))) return !1;
      }
      var A = o.get(e),
        x = o.get(t);
      if (A && x) return A == t && x == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var R = a; ++g < u; ) {
        v = s[g];
        var T = e[v],
          q = t[v];
        if (n) var L = a ? n(q, T, v, t, e, o) : n(T, q, v, e, t, o);
        if (!(L === void 0 ? T === q || i(T, q, r, n, o) : L)) {
          b = !1;
          break;
        }
        R || (R = v == "constructor");
      }
      if (b && !R) {
        var U = e.constructor,
          V = t.constructor;
        U != V &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof U == "function" &&
            U instanceof U &&
            typeof V == "function" &&
            V instanceof V
          ) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    mg.exports = gL;
  });
  var bg = c((dW, _g) => {
    var vL = Tt(),
      hL = ze(),
      EL = vL(hL, "DataView");
    _g.exports = EL;
  });
  var Ig = c((pW, Tg) => {
    var mL = Tt(),
      yL = ze(),
      _L = mL(yL, "Promise");
    Tg.exports = _L;
  });
  var Og = c((gW, Ag) => {
    var bL = Tt(),
      TL = ze(),
      IL = bL(TL, "Set");
    Ag.exports = IL;
  });
  var ia = c((vW, wg) => {
    var AL = Tt(),
      OL = ze(),
      wL = AL(OL, "WeakMap");
    wg.exports = wL;
  });
  var Xn = c((hW, Pg) => {
    var oa = bg(),
      aa = Pn(),
      sa = Ig(),
      ua = Og(),
      ca = ia(),
      Ng = bt(),
      rr = Yo(),
      xg = "[object Map]",
      xL = "[object Object]",
      Sg = "[object Promise]",
      Cg = "[object Set]",
      Rg = "[object WeakMap]",
      Lg = "[object DataView]",
      SL = rr(oa),
      CL = rr(aa),
      RL = rr(sa),
      LL = rr(ua),
      NL = rr(ca),
      Pt = Ng;
    ((oa && Pt(new oa(new ArrayBuffer(1))) != Lg) ||
      (aa && Pt(new aa()) != xg) ||
      (sa && Pt(sa.resolve()) != Sg) ||
      (ua && Pt(new ua()) != Cg) ||
      (ca && Pt(new ca()) != Rg)) &&
      (Pt = function (e) {
        var t = Ng(e),
          r = t == xL ? e.constructor : void 0,
          n = r ? rr(r) : "";
        if (n)
          switch (n) {
            case SL:
              return Lg;
            case CL:
              return xg;
            case RL:
              return Sg;
            case LL:
              return Cg;
            case NL:
              return Rg;
          }
        return t;
      });
    Pg.exports = Pt;
  });
  var Vg = c((EW, Ug) => {
    var la = $o(),
      PL = Qo(),
      qL = Rp(),
      ML = yg(),
      qg = Xn(),
      Mg = be(),
      Fg = Dn(),
      FL = Un(),
      DL = 1,
      Dg = "[object Arguments]",
      kg = "[object Array]",
      Wn = "[object Object]",
      kL = Object.prototype,
      Gg = kL.hasOwnProperty;
    function GL(e, t, r, n, i, o) {
      var a = Mg(e),
        s = Mg(t),
        u = a ? kg : qg(e),
        d = s ? kg : qg(t);
      (u = u == Dg ? Wn : u), (d = d == Dg ? Wn : d);
      var y = u == Wn,
        g = d == Wn,
        v = u == d;
      if (v && Fg(e)) {
        if (!Fg(t)) return !1;
        (a = !0), (y = !1);
      }
      if (v && !y)
        return (
          o || (o = new la()),
          a || FL(e) ? PL(e, t, r, n, i, o) : qL(e, t, u, r, n, i, o)
        );
      if (!(r & DL)) {
        var A = y && Gg.call(e, "__wrapped__"),
          x = g && Gg.call(t, "__wrapped__");
        if (A || x) {
          var b = A ? e.value() : e,
            R = x ? t.value() : t;
          return o || (o = new la()), i(b, R, r, n, o);
        }
      }
      return v ? (o || (o = new la()), ML(e, t, r, n, i, o)) : !1;
    }
    Ug.exports = GL;
  });
  var fa = c((mW, Wg) => {
    var UL = Vg(),
      Bg = dt();
    function Xg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Bg(e) && !Bg(t))
        ? e !== e && t !== t
        : UL(e, t, r, n, Xg, i);
    }
    Wg.exports = Xg;
  });
  var jg = c((yW, Hg) => {
    var VL = $o(),
      BL = fa(),
      XL = 1,
      WL = 2;
    function HL(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          d = e[u],
          y = s[1];
        if (a && s[2]) {
          if (d === void 0 && !(u in e)) return !1;
        } else {
          var g = new VL();
          if (n) var v = n(d, y, u, e, t, g);
          if (!(v === void 0 ? BL(y, d, XL | WL, n, g) : v)) return !1;
        }
      }
      return !0;
    }
    Hg.exports = HL;
  });
  var da = c((_W, zg) => {
    var jL = ot();
    function zL(e) {
      return e === e && !jL(e);
    }
    zg.exports = zL;
  });
  var Yg = c((bW, Kg) => {
    var KL = da(),
      YL = Ur();
    function $L(e) {
      for (var t = YL(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, KL(i)];
      }
      return t;
    }
    Kg.exports = $L;
  });
  var pa = c((TW, $g) => {
    function QL(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    $g.exports = QL;
  });
  var Zg = c((IW, Qg) => {
    var ZL = jg(),
      JL = Yg(),
      eN = pa();
    function tN(e) {
      var t = JL(e);
      return t.length == 1 && t[0][2]
        ? eN(t[0][0], t[0][1])
        : function (r) {
            return r === e || ZL(r, e, t);
          };
    }
    Qg.exports = tN;
  });
  var Vr = c((AW, Jg) => {
    var rN = bt(),
      nN = dt(),
      iN = "[object Symbol]";
    function oN(e) {
      return typeof e == "symbol" || (nN(e) && rN(e) == iN);
    }
    Jg.exports = oN;
  });
  var Hn = c((OW, ev) => {
    var aN = be(),
      sN = Vr(),
      uN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      cN = /^\w*$/;
    function lN(e, t) {
      if (aN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        sN(e)
        ? !0
        : cN.test(e) || !uN.test(e) || (t != null && e in Object(t));
    }
    ev.exports = lN;
  });
  var nv = c((wW, rv) => {
    var tv = qn(),
      fN = "Expected a function";
    function ga(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(fN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ga.Cache || tv)()), r;
    }
    ga.Cache = tv;
    rv.exports = ga;
  });
  var ov = c((xW, iv) => {
    var dN = nv(),
      pN = 500;
    function gN(e) {
      var t = dN(e, function (n) {
          return r.size === pN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    iv.exports = gN;
  });
  var sv = c((SW, av) => {
    var vN = ov(),
      hN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      EN = /\\(\\)?/g,
      mN = vN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(hN, function (r, n, i, o) {
            t.push(i ? o.replace(EN, "$1") : n || r);
          }),
          t
        );
      });
    av.exports = mN;
  });
  var va = c((CW, uv) => {
    function yN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    uv.exports = yN;
  });
  var gv = c((RW, pv) => {
    var cv = jt(),
      _N = va(),
      bN = be(),
      TN = Vr(),
      IN = 1 / 0,
      lv = cv ? cv.prototype : void 0,
      fv = lv ? lv.toString : void 0;
    function dv(e) {
      if (typeof e == "string") return e;
      if (bN(e)) return _N(e, dv) + "";
      if (TN(e)) return fv ? fv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -IN ? "-0" : t;
    }
    pv.exports = dv;
  });
  var hv = c((LW, vv) => {
    var AN = gv();
    function ON(e) {
      return e == null ? "" : AN(e);
    }
    vv.exports = ON;
  });
  var Br = c((NW, Ev) => {
    var wN = be(),
      xN = Hn(),
      SN = sv(),
      CN = hv();
    function RN(e, t) {
      return wN(e) ? e : xN(e, t) ? [e] : SN(CN(e));
    }
    Ev.exports = RN;
  });
  var nr = c((PW, mv) => {
    var LN = Vr(),
      NN = 1 / 0;
    function PN(e) {
      if (typeof e == "string" || LN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -NN ? "-0" : t;
    }
    mv.exports = PN;
  });
  var jn = c((qW, yv) => {
    var qN = Br(),
      MN = nr();
    function FN(e, t) {
      t = qN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[MN(t[r++])];
      return r && r == n ? e : void 0;
    }
    yv.exports = FN;
  });
  var zn = c((MW, _v) => {
    var DN = jn();
    function kN(e, t, r) {
      var n = e == null ? void 0 : DN(e, t);
      return n === void 0 ? r : n;
    }
    _v.exports = kN;
  });
  var Tv = c((FW, bv) => {
    function GN(e, t) {
      return e != null && t in Object(e);
    }
    bv.exports = GN;
  });
  var Av = c((DW, Iv) => {
    var UN = Br(),
      VN = Fr(),
      BN = be(),
      XN = kn(),
      WN = Gn(),
      HN = nr();
    function jN(e, t, r) {
      t = UN(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = HN(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && WN(i) && XN(a, i) && (BN(e) || VN(e)));
    }
    Iv.exports = jN;
  });
  var wv = c((kW, Ov) => {
    var zN = Tv(),
      KN = Av();
    function YN(e, t) {
      return e != null && KN(e, t, zN);
    }
    Ov.exports = YN;
  });
  var Sv = c((GW, xv) => {
    var $N = fa(),
      QN = zn(),
      ZN = wv(),
      JN = Hn(),
      eP = da(),
      tP = pa(),
      rP = nr(),
      nP = 1,
      iP = 2;
    function oP(e, t) {
      return JN(e) && eP(t)
        ? tP(rP(e), t)
        : function (r) {
            var n = QN(r, e);
            return n === void 0 && n === t ? ZN(r, e) : $N(t, n, nP | iP);
          };
    }
    xv.exports = oP;
  });
  var Kn = c((UW, Cv) => {
    function aP(e) {
      return e;
    }
    Cv.exports = aP;
  });
  var ha = c((VW, Rv) => {
    function sP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Rv.exports = sP;
  });
  var Nv = c((BW, Lv) => {
    var uP = jn();
    function cP(e) {
      return function (t) {
        return uP(t, e);
      };
    }
    Lv.exports = cP;
  });
  var qv = c((XW, Pv) => {
    var lP = ha(),
      fP = Nv(),
      dP = Hn(),
      pP = nr();
    function gP(e) {
      return dP(e) ? lP(pP(e)) : fP(e);
    }
    Pv.exports = gP;
  });
  var It = c((WW, Mv) => {
    var vP = Zg(),
      hP = Sv(),
      EP = Kn(),
      mP = be(),
      yP = qv();
    function _P(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? EP
        : typeof e == "object"
        ? mP(e)
          ? hP(e[0], e[1])
          : vP(e)
        : yP(e);
    }
    Mv.exports = _P;
  });
  var Ea = c((HW, Fv) => {
    var bP = It(),
      TP = Nt(),
      IP = Ur();
    function AP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!TP(t)) {
          var o = bP(r, 3);
          (t = IP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Fv.exports = AP;
  });
  var ma = c((jW, Dv) => {
    function OP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Dv.exports = OP;
  });
  var Gv = c((zW, kv) => {
    var wP = /\s/;
    function xP(e) {
      for (var t = e.length; t-- && wP.test(e.charAt(t)); );
      return t;
    }
    kv.exports = xP;
  });
  var Vv = c((KW, Uv) => {
    var SP = Gv(),
      CP = /^\s+/;
    function RP(e) {
      return e && e.slice(0, SP(e) + 1).replace(CP, "");
    }
    Uv.exports = RP;
  });
  var Yn = c((YW, Wv) => {
    var LP = Vv(),
      Bv = ot(),
      NP = Vr(),
      Xv = 0 / 0,
      PP = /^[-+]0x[0-9a-f]+$/i,
      qP = /^0b[01]+$/i,
      MP = /^0o[0-7]+$/i,
      FP = parseInt;
    function DP(e) {
      if (typeof e == "number") return e;
      if (NP(e)) return Xv;
      if (Bv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Bv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = LP(e);
      var r = qP.test(e);
      return r || MP.test(e) ? FP(e.slice(2), r ? 2 : 8) : PP.test(e) ? Xv : +e;
    }
    Wv.exports = DP;
  });
  var zv = c(($W, jv) => {
    var kP = Yn(),
      Hv = 1 / 0,
      GP = 17976931348623157e292;
    function UP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = kP(e)), e === Hv || e === -Hv)) {
        var t = e < 0 ? -1 : 1;
        return t * GP;
      }
      return e === e ? e : 0;
    }
    jv.exports = UP;
  });
  var ya = c((QW, Kv) => {
    var VP = zv();
    function BP(e) {
      var t = VP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Kv.exports = BP;
  });
  var $v = c((ZW, Yv) => {
    var XP = ma(),
      WP = It(),
      HP = ya(),
      jP = Math.max;
    function zP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : HP(r);
      return i < 0 && (i = jP(n + i, 0)), XP(e, WP(t, 3), i);
    }
    Yv.exports = zP;
  });
  var _a = c((JW, Qv) => {
    var KP = Ea(),
      YP = $v(),
      $P = KP(YP);
    Qv.exports = $P;
  });
  var eh = {};
  Pe(eh, {
    ELEMENT_MATCHES: () => QP,
    FLEX_PREFIXED: () => ba,
    IS_BROWSER_ENV: () => Ye,
    TRANSFORM_PREFIXED: () => At,
    TRANSFORM_STYLE_PREFIXED: () => Qn,
    withBrowser: () => $n,
  });
  var Jv,
    Ye,
    $n,
    QP,
    ba,
    At,
    Zv,
    Qn,
    Zn = pe(() => {
      "use strict";
      (Jv = ae(_a())),
        (Ye = typeof window < "u"),
        ($n = (e, t) => (Ye ? e() : t)),
        (QP = $n(() =>
          (0, Jv.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (ba = $n(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (At = $n(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Zv = At.split("transform")[0]),
        (Qn = Zv ? Zv + "TransformStyle" : "transformStyle");
    });
  var Ta = c((eH, oh) => {
    var ZP = 4,
      JP = 0.001,
      eq = 1e-7,
      tq = 10,
      Xr = 11,
      Jn = 1 / (Xr - 1),
      rq = typeof Float32Array == "function";
    function th(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function rh(e, t) {
      return 3 * t - 6 * e;
    }
    function nh(e) {
      return 3 * e;
    }
    function ei(e, t, r) {
      return ((th(t, r) * e + rh(t, r)) * e + nh(t)) * e;
    }
    function ih(e, t, r) {
      return 3 * th(t, r) * e * e + 2 * rh(t, r) * e + nh(t);
    }
    function nq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ei(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > eq && ++s < tq);
      return a;
    }
    function iq(e, t, r, n) {
      for (var i = 0; i < ZP; ++i) {
        var o = ih(t, r, n);
        if (o === 0) return t;
        var a = ei(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    oh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = rq ? new Float32Array(Xr) : new Array(Xr);
      if (t !== r || n !== i)
        for (var a = 0; a < Xr; ++a) o[a] = ei(a * Jn, t, n);
      function s(u) {
        for (var d = 0, y = 1, g = Xr - 1; y !== g && o[y] <= u; ++y) d += Jn;
        --y;
        var v = (u - o[y]) / (o[y + 1] - o[y]),
          A = d + v * Jn,
          x = ih(A, t, n);
        return x >= JP ? iq(u, A, t, n) : x === 0 ? A : nq(u, d, d + Jn, t, n);
      }
      return function (d) {
        return t === r && n === i
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : ei(s(d), r, i);
      };
    };
  });
  var Hr = {};
  Pe(Hr, {
    bounce: () => Uq,
    bouncePast: () => Vq,
    ease: () => oq,
    easeIn: () => aq,
    easeInOut: () => uq,
    easeOut: () => sq,
    inBack: () => Lq,
    inCirc: () => xq,
    inCubic: () => dq,
    inElastic: () => qq,
    inExpo: () => Aq,
    inOutBack: () => Pq,
    inOutCirc: () => Cq,
    inOutCubic: () => gq,
    inOutElastic: () => Fq,
    inOutExpo: () => wq,
    inOutQuad: () => fq,
    inOutQuart: () => Eq,
    inOutQuint: () => _q,
    inOutSine: () => Iq,
    inQuad: () => cq,
    inQuart: () => vq,
    inQuint: () => mq,
    inSine: () => bq,
    outBack: () => Nq,
    outBounce: () => Rq,
    outCirc: () => Sq,
    outCubic: () => pq,
    outElastic: () => Mq,
    outExpo: () => Oq,
    outQuad: () => lq,
    outQuart: () => hq,
    outQuint: () => yq,
    outSine: () => Tq,
    swingFrom: () => kq,
    swingFromTo: () => Dq,
    swingTo: () => Gq,
  });
  function cq(e) {
    return Math.pow(e, 2);
  }
  function lq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function fq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function dq(e) {
    return Math.pow(e, 3);
  }
  function pq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function gq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function vq(e) {
    return Math.pow(e, 4);
  }
  function hq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Eq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function mq(e) {
    return Math.pow(e, 5);
  }
  function yq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function _q(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function bq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Tq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Iq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Aq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Oq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function wq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function xq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Sq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Cq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Rq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Lq(e) {
    let t = pt;
    return e * e * ((t + 1) * e - t);
  }
  function Nq(e) {
    let t = pt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Pq(e) {
    let t = pt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function qq(e) {
    let t = pt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Mq(e) {
    let t = pt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Fq(e) {
    let t = pt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Dq(e) {
    let t = pt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function kq(e) {
    let t = pt;
    return e * e * ((t + 1) * e - t);
  }
  function Gq(e) {
    let t = pt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Uq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Vq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Wr,
    pt,
    oq,
    aq,
    sq,
    uq,
    Ia = pe(() => {
      "use strict";
      (Wr = ae(Ta())),
        (pt = 1.70158),
        (oq = (0, Wr.default)(0.25, 0.1, 0.25, 1)),
        (aq = (0, Wr.default)(0.42, 0, 1, 1)),
        (sq = (0, Wr.default)(0, 0, 0.58, 1)),
        (uq = (0, Wr.default)(0.42, 0, 0.58, 1));
    });
  var sh = {};
  Pe(sh, {
    applyEasing: () => Xq,
    createBezierEasing: () => Bq,
    optimizeFloat: () => jr,
  });
  function jr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Bq(e) {
    return (0, ah.default)(...e);
  }
  function Xq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : jr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Hr[e] ? Hr[e](t) : t);
  }
  var ah,
    Aa = pe(() => {
      "use strict";
      Ia();
      ah = ae(Ta());
    });
  var lh = {};
  Pe(lh, {
    createElementState: () => ch,
    ixElements: () => nM,
    mergeActionState: () => Oa,
  });
  function ch(e, t, r, n, i) {
    let o =
      r === Wq ? (0, ir.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, ir.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Oa(e, t, r, n, i) {
    let o = oM(i);
    return (0, ir.mergeIn)(e, [t, rM, r], n, o);
  }
  function oM(e) {
    let { config: t } = e;
    return iM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var ir,
    rH,
    Wq,
    nH,
    Hq,
    jq,
    zq,
    Kq,
    Yq,
    $q,
    Qq,
    Zq,
    Jq,
    eM,
    tM,
    uh,
    rM,
    nM,
    iM,
    fh = pe(() => {
      "use strict";
      ir = ae(Yt());
      Me();
      ({
        HTML_ELEMENT: rH,
        PLAIN_OBJECT: Wq,
        ABSTRACT_NODE: nH,
        CONFIG_X_VALUE: Hq,
        CONFIG_Y_VALUE: jq,
        CONFIG_Z_VALUE: zq,
        CONFIG_VALUE: Kq,
        CONFIG_X_UNIT: Yq,
        CONFIG_Y_UNIT: $q,
        CONFIG_Z_UNIT: Qq,
        CONFIG_UNIT: Zq,
      } = Oe),
        ({
          IX2_SESSION_STOPPED: Jq,
          IX2_INSTANCE_ADDED: eM,
          IX2_ELEMENT_STATE_CHANGED: tM,
        } = _e),
        (uh = {}),
        (rM = "refState"),
        (nM = (e = uh, t = {}) => {
          switch (t.type) {
            case Jq:
              return uh;
            case eM: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, ir.getIn)(u, [r, n]) !== n && (u = ch(u, n, a, r, o)),
                Oa(u, r, s, i, o)
              );
            }
            case tM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Oa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      iM = [
        [Hq, Yq],
        [jq, $q],
        [zq, Qq],
        [Kq, Zq],
      ];
    });
  var dh = c((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    Te.renderPlugin =
      Te.getPluginOrigin =
      Te.getPluginDuration =
      Te.getPluginDestination =
      Te.getPluginConfig =
      Te.createPluginInstance =
      Te.clearPlugin =
        void 0;
    var aM = (e) => e.value;
    Te.getPluginConfig = aM;
    var sM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Te.getPluginDuration = sM;
    var uM = (e) => e || { value: 0 };
    Te.getPluginOrigin = uM;
    var cM = (e) => ({ value: e.value });
    Te.getPluginDestination = cM;
    var lM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Te.createPluginInstance = lM;
    var fM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Te.renderPlugin = fM;
    var dM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Te.clearPlugin = dM;
  });
  var gh = c((Ie) => {
    "use strict";
    Object.defineProperty(Ie, "__esModule", { value: !0 });
    Ie.renderPlugin =
      Ie.getPluginOrigin =
      Ie.getPluginDuration =
      Ie.getPluginDestination =
      Ie.getPluginConfig =
      Ie.createPluginInstance =
      Ie.clearPlugin =
        void 0;
    var pM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      gM = () => window.Webflow.require("spline"),
      vM = (e, t) => e.filter((r) => !t.includes(r)),
      hM = (e, t) => e.value[t];
    Ie.getPluginConfig = hM;
    var EM = () => null;
    Ie.getPluginDuration = EM;
    var ph = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      mM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = vM(n, o);
          return a.length ? a.reduce((u, d) => ((u[d] = ph[d]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = ph[a]), o), {});
      };
    Ie.getPluginOrigin = mM;
    var yM = (e) => e.value;
    Ie.getPluginDestination = yM;
    var _M = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? pM(n) : null;
    };
    Ie.createPluginInstance = _M;
    var bM = (e, t, r) => {
      let n = gM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (u.position.x = d.positionX),
            d.positionY != null && (u.position.y = d.positionY),
            d.positionZ != null && (u.position.z = d.positionZ),
            d.rotationX != null && (u.rotation.x = d.rotationX),
            d.rotationY != null && (u.rotation.y = d.rotationY),
            d.rotationZ != null && (u.rotation.z = d.rotationZ),
            d.scaleX != null && (u.scale.x = d.scaleX),
            d.scaleY != null && (u.scale.y = d.scaleY),
            d.scaleZ != null && (u.scale.z = d.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ie.renderPlugin = bM;
    var TM = () => null;
    Ie.clearPlugin = TM;
  });
  var xa = c((wa) => {
    "use strict";
    Object.defineProperty(wa, "__esModule", { value: !0 });
    wa.normalizeColor = IM;
    var vh = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function IM(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof vh[o] == "string" ? vh[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          d = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          g = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let v = (1 - Math.abs(2 * g - 1)) * y,
          A = v * (1 - Math.abs(((d / 60) % 2) - 1)),
          x = g - v / 2,
          b,
          R,
          T;
        d >= 0 && d < 60
          ? ((b = v), (R = A), (T = 0))
          : d >= 60 && d < 120
          ? ((b = A), (R = v), (T = 0))
          : d >= 120 && d < 180
          ? ((b = 0), (R = v), (T = A))
          : d >= 180 && d < 240
          ? ((b = 0), (R = A), (T = v))
          : d >= 240 && d < 300
          ? ((b = A), (R = 0), (T = v))
          : ((b = v), (R = 0), (T = A)),
          (t = Math.round((b + x) * 255)),
          (r = Math.round((R + x) * 255)),
          (n = Math.round((T + x) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          d = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          g = parseFloat(u[2].replace("%", "")) / 100,
          v = (1 - Math.abs(2 * g - 1)) * y,
          A = v * (1 - Math.abs(((d / 60) % 2) - 1)),
          x = g - v / 2,
          b,
          R,
          T;
        d >= 0 && d < 60
          ? ((b = v), (R = A), (T = 0))
          : d >= 60 && d < 120
          ? ((b = A), (R = v), (T = 0))
          : d >= 120 && d < 180
          ? ((b = 0), (R = v), (T = A))
          : d >= 180 && d < 240
          ? ((b = 0), (R = A), (T = v))
          : d >= 240 && d < 300
          ? ((b = A), (R = 0), (T = v))
          : ((b = v), (R = 0), (T = A)),
          (t = Math.round((b + x) * 255)),
          (r = Math.round((R + x) * 255)),
          (n = Math.round((T + x) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var hh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var AM = xa(),
      OM = (e, t) => e.value[t];
    Ae.getPluginConfig = OM;
    var wM = () => null;
    Ae.getPluginDuration = wM;
    var xM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, AM.normalizeColor)(i);
    };
    Ae.getPluginOrigin = xM;
    var SM = (e) => e.value;
    Ae.getPluginDestination = SM;
    var CM = () => null;
    Ae.createPluginInstance = CM;
    var RM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: d, alpha: y } = o,
        g;
      a != null && (g = a + i),
        s != null &&
          d != null &&
          u != null &&
          y != null &&
          (g = `rgba(${s}, ${u}, ${d}, ${y})`),
        g != null && document.documentElement.style.setProperty(n, g);
    };
    Ae.renderPlugin = RM;
    var LM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Ae.clearPlugin = LM;
  });
  var Eh = c((ti) => {
    "use strict";
    var Ca = dn().default;
    Object.defineProperty(ti, "__esModule", { value: !0 });
    ti.pluginMethodMap = void 0;
    var Sa = (Me(), et(If)),
      NM = Ca(dh()),
      PM = Ca(gh()),
      qM = Ca(hh()),
      uH = (ti.pluginMethodMap = new Map([
        [Sa.ActionTypeConsts.PLUGIN_LOTTIE, { ...NM }],
        [Sa.ActionTypeConsts.PLUGIN_SPLINE, { ...PM }],
        [Sa.ActionTypeConsts.PLUGIN_VARIABLE, { ...qM }],
      ]));
  });
  var mh = {};
  Pe(mh, {
    clearPlugin: () => Ma,
    createPluginInstance: () => FM,
    getPluginConfig: () => La,
    getPluginDestination: () => Pa,
    getPluginDuration: () => MM,
    getPluginOrigin: () => Na,
    isPluginType: () => qt,
    renderPlugin: () => qa,
  });
  function qt(e) {
    return Ra.pluginMethodMap.has(e);
  }
  var Ra,
    Mt,
    La,
    Na,
    MM,
    Pa,
    FM,
    qa,
    Ma,
    Fa = pe(() => {
      "use strict";
      Zn();
      Ra = ae(Eh());
      (Mt = (e) => (t) => {
        if (!Ye) return () => null;
        let r = Ra.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (La = Mt("getPluginConfig")),
        (Na = Mt("getPluginOrigin")),
        (MM = Mt("getPluginDuration")),
        (Pa = Mt("getPluginDestination")),
        (FM = Mt("createPluginInstance")),
        (qa = Mt("renderPlugin")),
        (Ma = Mt("clearPlugin"));
    });
  var _h = c((fH, yh) => {
    function DM(e, t) {
      return e == null || e !== e ? t : e;
    }
    yh.exports = DM;
  });
  var Th = c((dH, bh) => {
    function kM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    bh.exports = kM;
  });
  var Ah = c((pH, Ih) => {
    function GM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Ih.exports = GM;
  });
  var wh = c((gH, Oh) => {
    var UM = Ah(),
      VM = UM();
    Oh.exports = VM;
  });
  var Da = c((vH, xh) => {
    var BM = wh(),
      XM = Ur();
    function WM(e, t) {
      return e && BM(e, t, XM);
    }
    xh.exports = WM;
  });
  var Ch = c((hH, Sh) => {
    var HM = Nt();
    function jM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!HM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Sh.exports = jM;
  });
  var ka = c((EH, Rh) => {
    var zM = Da(),
      KM = Ch(),
      YM = KM(zM);
    Rh.exports = YM;
  });
  var Nh = c((mH, Lh) => {
    function $M(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Lh.exports = $M;
  });
  var qh = c((yH, Ph) => {
    var QM = Th(),
      ZM = ka(),
      JM = It(),
      eF = Nh(),
      tF = be();
    function rF(e, t, r) {
      var n = tF(e) ? QM : eF,
        i = arguments.length < 3;
      return n(e, JM(t, 4), r, i, ZM);
    }
    Ph.exports = rF;
  });
  var Fh = c((_H, Mh) => {
    var nF = ma(),
      iF = It(),
      oF = ya(),
      aF = Math.max,
      sF = Math.min;
    function uF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = oF(r)), (i = r < 0 ? aF(n + i, 0) : sF(i, n - 1))),
        nF(e, iF(t, 3), i, !0)
      );
    }
    Mh.exports = uF;
  });
  var kh = c((bH, Dh) => {
    var cF = Ea(),
      lF = Fh(),
      fF = cF(lF);
    Dh.exports = fF;
  });
  function Gh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function dF(e, t) {
    if (Gh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Gh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Ga,
    Uh = pe(() => {
      "use strict";
      Ga = dF;
    });
  var iE = {};
  Pe(iE, {
    cleanupHTMLElement: () => c1,
    clearAllStyles: () => u1,
    clearObjectCache: () => CF,
    getActionListProgress: () => f1,
    getAffectedElements: () => Wa,
    getComputedStyle: () => DF,
    getDestinationValues: () => WF,
    getElementId: () => PF,
    getInstanceId: () => LF,
    getInstanceOrigin: () => UF,
    getItemConfigByKey: () => XF,
    getMaxDurationItemIndex: () => nE,
    getNamespacedParameterId: () => g1,
    getRenderType: () => eE,
    getStyleProp: () => HF,
    mediaQueriesEqual: () => h1,
    observeStore: () => FF,
    reduceListToGroup: () => d1,
    reifyState: () => qF,
    renderHTMLElement: () => jF,
    shallowEqual: () => Ga,
    shouldAllowMediaQuery: () => v1,
    shouldNamespaceEventParameter: () => p1,
    stringifyTarget: () => E1,
  });
  function CF() {
    ri.clear();
  }
  function LF() {
    return "i" + RF++;
  }
  function PF(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + NF++;
  }
  function qF({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ai.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function FF({ store: e, select: t, onChange: r, comparator: n = MF }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let d = t(i());
      if (d == null) {
        a();
        return;
      }
      n(d, s) || ((s = d), r(s, e));
    }
    return a;
  }
  function Xh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Wa({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (w, h) =>
          w.concat(
            Wa({
              config: { target: h },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: d,
        getSiblingElements: y,
        matchSelector: g,
        elementContains: v,
        isSiblingNode: A,
      } = i,
      { target: x } = e;
    if (!x) return [];
    let {
      id: b,
      objectId: R,
      selector: T,
      selectorGuids: q,
      appliesTo: L,
      useEventTarget: U,
    } = Xh(x);
    if (R) return [ri.has(R) ? ri.get(R) : ri.set(R, {}).get(R)];
    if (L === Xo.PAGE) {
      let w = a(b);
      return w ? [w] : [];
    }
    let M = (t?.action?.config?.affectedElements ?? {})[b || T] || {},
      K = !!(M.id || M.selector),
      j,
      z,
      $,
      B = t && s(Xh(t.target));
    if (
      (K
        ? ((j = M.limitAffectedElements), (z = B), ($ = s(M)))
        : (z = $ = s({ id: b, selector: T, selectorGuids: q })),
      t && U)
    ) {
      let w = r && ($ || U === !0) ? [r] : u(B);
      if ($) {
        if (U === wF) return u($).filter((h) => w.some((P) => v(h, P)));
        if (U === Vh) return u($).filter((h) => w.some((P) => v(P, h)));
        if (U === Bh) return u($).filter((h) => w.some((P) => A(P, h)));
      }
      return w;
    }
    return z == null || $ == null
      ? []
      : Ye && n
      ? u($).filter((w) => n.contains(w))
      : j === Vh
      ? u(z, $)
      : j === OF
      ? d(u(z)).filter(g($))
      : j === Bh
      ? y(u(z)).filter(g($))
      : u($);
  }
  function DF({ element: e, actionItem: t }) {
    if (!Ye) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case cr:
      case lr:
      case fr:
      case dr:
      case ui:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function UF(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (qt(a)) return Na(a)(t[a], n);
    switch (n.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case $r:
        return t[n.actionTypeId] || Ha[n.actionTypeId];
      case Qr:
        return kF(t[n.actionTypeId], n.config.filters);
      case Zr:
        return GF(t[n.actionTypeId], n.config.fontVariations);
      case Qh:
        return { value: (0, gt.default)(parseFloat(o(e, ii)), 1) };
      case cr: {
        let s = o(e, at),
          u = o(e, st),
          d,
          y;
        return (
          n.config.widthUnit === Ot
            ? (d = Wh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (d = (0, gt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === Ot
            ? (y = Wh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (y = (0, gt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: d, heightValue: y }
        );
      }
      case lr:
      case fr:
      case dr:
        return o1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ui:
        return { value: (0, gt.default)(o(e, oi), r.display) };
      case SF:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function WF({ element: e, actionItem: t, elementApi: r }) {
    if (qt(t.actionTypeId)) return Pa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case $r: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case cr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: d } = t.config;
        if (!Ye) return { widthValue: u, heightValue: d };
        if (a === Ot) {
          let y = n(e, at);
          i(e, at, ""), (u = o(e, "offsetWidth")), i(e, at, y);
        }
        if (s === Ot) {
          let y = n(e, st);
          i(e, st, ""), (d = o(e, "offsetHeight")), i(e, st, y);
        }
        return { widthValue: u, heightValue: d };
      }
      case lr:
      case fr:
      case dr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            d = u(e, s),
            y = (0, zh.normalizeColor)(d);
          return {
            rValue: y.red,
            gValue: y.green,
            bValue: y.blue,
            aValue: y.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Qr:
        return t.config.filters.reduce(VF, {});
      case Zr:
        return t.config.fontVariations.reduce(BF, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function eE(e) {
    if (/^TRANSFORM_/.test(e)) return Yh;
    if (/^STYLE_/.test(e)) return Ba;
    if (/^GENERAL_/.test(e)) return Va;
    if (/^PLUGIN_/.test(e)) return $h;
  }
  function HF(e, t) {
    return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function jF(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Yh:
        return QF(e, t, r, i, a);
      case Ba:
        return a1(e, t, r, i, o, a);
      case Va:
        return s1(e, i, a);
      case $h: {
        let { actionTypeId: d } = i;
        if (qt(d)) return qa(d)(u, t, i);
      }
    }
  }
  function QF(e, t, r, n, i) {
    let o = $F
        .map((s) => {
          let u = Ha[s],
            {
              xValue: d = u.xValue,
              yValue: y = u.yValue,
              zValue: g = u.zValue,
              xUnit: v = "",
              yUnit: A = "",
              zUnit: x = "",
            } = t[s] || {};
          switch (s) {
            case ar:
              return `${vF}(${d}${v}, ${y}${A}, ${g}${x})`;
            case sr:
              return `${hF}(${d}${v}, ${y}${A}, ${g}${x})`;
            case ur:
              return `${EF}(${d}${v}) ${mF}(${y}${A}) ${yF}(${g}${x})`;
            case $r:
              return `${_F}(${d}${v}, ${y}${A})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    Ft(e, At, i), a(e, At, o), e1(n, r) && a(e, Qn, bF);
  }
  function ZF(e, t, r, n) {
    let i = (0, ai.default)(t, (a, s, u) => `${a} ${u}(${s}${YF(u, r)})`, ""),
      { setStyle: o } = n;
    Ft(e, zr, n), o(e, zr, i);
  }
  function JF(e, t, r, n) {
    let i = (0, ai.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Ft(e, Kr, n), o(e, Kr, i);
  }
  function e1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === ar && n !== void 0) ||
      (e === sr && n !== void 0) ||
      (e === ur && (t !== void 0 || r !== void 0))
    );
  }
  function i1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function o1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Xa[t],
      o = n(e, i),
      a = r1.test(o) ? o : r[i],
      s = i1(n1, a).split(Yr);
    return {
      rValue: (0, gt.default)(parseInt(s[0], 10), 255),
      gValue: (0, gt.default)(parseInt(s[1], 10), 255),
      bValue: (0, gt.default)(parseInt(s[2], 10), 255),
      aValue: (0, gt.default)(parseFloat(s[3]), 1),
    };
  }
  function a1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case cr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: d, heightValue: y } = r;
        d !== void 0 && (s === Ot && (s = "px"), Ft(e, at, o), a(e, at, d + s)),
          y !== void 0 &&
            (u === Ot && (u = "px"), Ft(e, st, o), a(e, st, y + u));
        break;
      }
      case Qr: {
        ZF(e, r, n.config, o);
        break;
      }
      case Zr: {
        JF(e, r, n.config, o);
        break;
      }
      case lr:
      case fr:
      case dr: {
        let s = Xa[n.actionTypeId],
          u = Math.round(r.rValue),
          d = Math.round(r.gValue),
          y = Math.round(r.bValue),
          g = r.aValue;
        Ft(e, s, o),
          a(e, s, g >= 1 ? `rgb(${u},${d},${y})` : `rgba(${u},${d},${y},${g})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Ft(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function s1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ui: {
        let { value: i } = t.config;
        i === TF && Ye ? n(e, oi, ba) : n(e, oi, i);
        return;
      }
    }
  }
  function Ft(e, t, r) {
    if (!Ye) return;
    let n = Jh[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    if (!a) {
      o(e, or, n);
      return;
    }
    let s = a.split(Yr).map(Zh);
    s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Yr));
  }
  function tE(e, t, r) {
    if (!Ye) return;
    let n = Jh[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        or,
        a
          .split(Yr)
          .map(Zh)
          .filter((s) => s !== n)
          .join(Yr)
      );
  }
  function u1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        d = i[u];
      d && Hh({ actionList: d, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Hh({ actionList: i[o], elementApi: t });
      });
  }
  function Hh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        jh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            jh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function jh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      qt(o)
        ? (s = (u) => Ma(o)(u, i))
        : (s = rE({ effect: l1, actionTypeId: o, elementApi: r })),
        Wa({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function c1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === cr) {
      let { config: a } = t;
      a.widthUnit === Ot && n(e, at, ""), a.heightUnit === Ot && n(e, st, "");
    }
    i(e, or) && rE({ effect: tE, actionTypeId: o, elementApi: r })(e);
  }
  function l1(e, t, r) {
    let { setStyle: n } = r;
    tE(e, t, r), n(e, t, ""), t === At && n(e, Qn, "");
  }
  function nE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function f1(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, d) => {
        if (n && d === 0) return;
        let { actionItems: y } = u,
          g = y[nE(y)],
          { config: v, actionTypeId: A } = g;
        i.id === g.id && (s = a + o);
        let x = eE(A) === Va ? 0 : v.duration;
        a += v.delay + x;
      }),
      a > 0 ? jr(s / a) : 0
    );
  }
  function d1({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, si.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: d }) => d.some(a));
        }),
      (0, si.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function p1(e, { basedOn: t }) {
    return (
      (e === Ke.SCROLLING_IN_VIEW && (t === it.ELEMENT || t == null)) ||
      (e === Ke.MOUSE_MOVE && t === it.ELEMENT)
    );
  }
  function g1(e, t) {
    return e + xF + t;
  }
  function v1(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function h1(e, t) {
    return Ga(e && e.sort(), t && t.sort());
  }
  function E1(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ua + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ua + r + Ua + n;
  }
  var gt,
    ai,
    ni,
    si,
    zh,
    pF,
    gF,
    vF,
    hF,
    EF,
    mF,
    yF,
    _F,
    bF,
    TF,
    ii,
    zr,
    Kr,
    at,
    st,
    Kh,
    IF,
    AF,
    Vh,
    OF,
    Bh,
    wF,
    oi,
    or,
    Ot,
    Yr,
    xF,
    Ua,
    Yh,
    Va,
    Ba,
    $h,
    ar,
    sr,
    ur,
    $r,
    Qh,
    Qr,
    Zr,
    cr,
    lr,
    fr,
    dr,
    ui,
    SF,
    Zh,
    Xa,
    Jh,
    ri,
    RF,
    NF,
    MF,
    Wh,
    kF,
    GF,
    VF,
    BF,
    XF,
    Ha,
    zF,
    KF,
    YF,
    $F,
    t1,
    r1,
    n1,
    rE,
    oE = pe(() => {
      "use strict";
      (gt = ae(_h())), (ai = ae(qh())), (ni = ae(kh())), (si = ae(Yt()));
      Me();
      Uh();
      Aa();
      zh = ae(xa());
      Fa();
      Zn();
      ({
        BACKGROUND: pF,
        TRANSFORM: gF,
        TRANSLATE_3D: vF,
        SCALE_3D: hF,
        ROTATE_X: EF,
        ROTATE_Y: mF,
        ROTATE_Z: yF,
        SKEW: _F,
        PRESERVE_3D: bF,
        FLEX: TF,
        OPACITY: ii,
        FILTER: zr,
        FONT_VARIATION_SETTINGS: Kr,
        WIDTH: at,
        HEIGHT: st,
        BACKGROUND_COLOR: Kh,
        BORDER_COLOR: IF,
        COLOR: AF,
        CHILDREN: Vh,
        IMMEDIATE_CHILDREN: OF,
        SIBLINGS: Bh,
        PARENT: wF,
        DISPLAY: oi,
        WILL_CHANGE: or,
        AUTO: Ot,
        COMMA_DELIMITER: Yr,
        COLON_DELIMITER: xF,
        BAR_DELIMITER: Ua,
        RENDER_TRANSFORM: Yh,
        RENDER_GENERAL: Va,
        RENDER_STYLE: Ba,
        RENDER_PLUGIN: $h,
      } = Oe),
        ({
          TRANSFORM_MOVE: ar,
          TRANSFORM_SCALE: sr,
          TRANSFORM_ROTATE: ur,
          TRANSFORM_SKEW: $r,
          STYLE_OPACITY: Qh,
          STYLE_FILTER: Qr,
          STYLE_FONT_VARIATION: Zr,
          STYLE_SIZE: cr,
          STYLE_BACKGROUND_COLOR: lr,
          STYLE_BORDER: fr,
          STYLE_TEXT_COLOR: dr,
          GENERAL_DISPLAY: ui,
          OBJECT_VALUE: SF,
        } = qe),
        (Zh = (e) => e.trim()),
        (Xa = Object.freeze({ [lr]: Kh, [fr]: IF, [dr]: AF })),
        (Jh = Object.freeze({
          [At]: gF,
          [Kh]: pF,
          [ii]: ii,
          [zr]: zr,
          [at]: at,
          [st]: st,
          [Kr]: Kr,
        })),
        (ri = new Map());
      RF = 1;
      NF = 1;
      MF = (e, t) => e === t;
      (Wh = /px/),
        (kF = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = zF[n.type]), r),
            e || {}
          )),
        (GF = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = KF[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (VF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (BF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (XF = (e, t, r) => {
          if (qt(e)) return La(e)(r, t);
          switch (e) {
            case Qr: {
              let n = (0, ni.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Zr: {
              let n = (0, ni.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ha = {
        [ar]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [sr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ur]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [$r]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (zF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (KF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (YF = (e, t) => {
          let r = (0, ni.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        ($F = Object.keys(Ha));
      (t1 = "\\(([^)]+)\\)"), (r1 = /^rgb/), (n1 = RegExp(`rgba?${t1}`));
      rE =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case ar:
            case sr:
            case ur:
            case $r:
              e(n, At, r);
              break;
            case Qr:
              e(n, zr, r);
              break;
            case Zr:
              e(n, Kr, r);
              break;
            case Qh:
              e(n, ii, r);
              break;
            case cr:
              e(n, at, r), e(n, st, r);
              break;
            case lr:
            case fr:
            case dr:
              e(n, Xa[t], r);
              break;
            case ui:
              e(n, oi, r);
              break;
          }
        };
    });
  var Dt = c((Re) => {
    "use strict";
    var pr = dn().default;
    Object.defineProperty(Re, "__esModule", { value: !0 });
    Re.IX2VanillaUtils =
      Re.IX2VanillaPlugins =
      Re.IX2ElementsReducer =
      Re.IX2Easings =
      Re.IX2EasingUtils =
      Re.IX2BrowserSupport =
        void 0;
    var m1 = pr((Zn(), et(eh)));
    Re.IX2BrowserSupport = m1;
    var y1 = pr((Ia(), et(Hr)));
    Re.IX2Easings = y1;
    var _1 = pr((Aa(), et(sh)));
    Re.IX2EasingUtils = _1;
    var b1 = pr((fh(), et(lh)));
    Re.IX2ElementsReducer = b1;
    var T1 = pr((Fa(), et(mh)));
    Re.IX2VanillaPlugins = T1;
    var I1 = pr((oE(), et(iE)));
    Re.IX2VanillaUtils = I1;
  });
  var li,
    vt,
    A1,
    O1,
    w1,
    x1,
    S1,
    C1,
    ci,
    aE,
    R1,
    L1,
    ja,
    N1,
    P1,
    q1,
    M1,
    sE,
    uE = pe(() => {
      "use strict";
      Me();
      (li = ae(Dt())),
        (vt = ae(Yt())),
        ({
          IX2_RAW_DATA_IMPORTED: A1,
          IX2_SESSION_STOPPED: O1,
          IX2_INSTANCE_ADDED: w1,
          IX2_INSTANCE_STARTED: x1,
          IX2_INSTANCE_REMOVED: S1,
          IX2_ANIMATION_FRAME_CHANGED: C1,
        } = _e),
        ({
          optimizeFloat: ci,
          applyEasing: aE,
          createBezierEasing: R1,
        } = li.IX2EasingUtils),
        ({ RENDER_GENERAL: L1 } = Oe),
        ({
          getItemConfigByKey: ja,
          getRenderType: N1,
          getStyleProp: P1,
        } = li.IX2VanillaUtils),
        (q1 = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: d,
              skipMotion: y,
              skipToValue: g,
            } = e,
            { parameters: v } = t.payload,
            A = Math.max(1 - a, 0.01),
            x = v[n];
          x == null && ((A = 1), (x = s));
          let b = Math.max(x, 0) || 0,
            R = ci(b - r),
            T = y ? g : ci(r + R * A),
            q = T * 100;
          if (T === r && e.current) return e;
          let L, U, V, M;
          for (let j = 0, { length: z } = i; j < z; j++) {
            let { keyframe: $, actionItems: B } = i[j];
            if ((j === 0 && (L = B[0]), q >= $)) {
              L = B[0];
              let w = i[j + 1],
                h = w && q !== $;
              (U = h ? w.actionItems[0] : null),
                h && ((V = $ / 100), (M = (w.keyframe - $) / 100));
            }
          }
          let K = {};
          if (L && !U)
            for (let j = 0, { length: z } = o; j < z; j++) {
              let $ = o[j];
              K[$] = ja(u, $, L.config);
            }
          else if (L && U && V !== void 0 && M !== void 0) {
            let j = (T - V) / M,
              z = L.config.easing,
              $ = aE(z, j, d);
            for (let B = 0, { length: w } = o; B < w; B++) {
              let h = o[B],
                P = ja(u, h, L.config),
                Q = (ja(u, h, U.config) - P) * $ + P;
              K[h] = Q;
            }
          }
          return (0, vt.merge)(e, { position: T, current: K });
        }),
        (M1 = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: d,
              destinationKeys: y,
              pluginDuration: g,
              instanceDelay: v,
              customEasingFn: A,
              skipMotion: x,
            } = e,
            b = u.config.easing,
            { duration: R, delay: T } = u.config;
          g != null && (R = g),
            (T = v ?? T),
            a === L1 ? (R = 0) : (o || x) && (R = T = 0);
          let { now: q } = t.payload;
          if (r && n) {
            let L = q - (i + T);
            if (s) {
              let j = q - i,
                z = R + T,
                $ = ci(Math.min(Math.max(0, j / z), 1));
              e = (0, vt.set)(e, "verboseTimeElapsed", z * $);
            }
            if (L < 0) return e;
            let U = ci(Math.min(Math.max(0, L / R), 1)),
              V = aE(b, U, A),
              M = {},
              K = null;
            return (
              y.length &&
                (K = y.reduce((j, z) => {
                  let $ = d[z],
                    B = parseFloat(n[z]) || 0,
                    h = (parseFloat($) - B) * V + B;
                  return (j[z] = h), j;
                }, {})),
              (M.current = K),
              (M.position = U),
              U === 1 && ((M.active = !1), (M.complete = !0)),
              (0, vt.merge)(e, M)
            );
          }
          return e;
        }),
        (sE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case A1:
              return t.payload.ixInstances || Object.freeze({});
            case O1:
              return Object.freeze({});
            case w1: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: d,
                  isCarrier: y,
                  origin: g,
                  destination: v,
                  immediate: A,
                  verbose: x,
                  continuous: b,
                  parameterId: R,
                  actionGroups: T,
                  smoothing: q,
                  restingValue: L,
                  pluginInstance: U,
                  pluginDuration: V,
                  instanceDelay: M,
                  skipMotion: K,
                  skipToValue: j,
                } = t.payload,
                { actionTypeId: z } = i,
                $ = N1(z),
                B = P1($, z),
                w = Object.keys(v).filter(
                  (P) => v[P] != null && typeof v[P] != "string"
                ),
                { easing: h } = i.config;
              return (0, vt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: g,
                destination: v,
                destinationKeys: w,
                immediate: A,
                verbose: x,
                current: null,
                actionItem: i,
                actionTypeId: z,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: d,
                renderType: $,
                isCarrier: y,
                styleProp: B,
                continuous: b,
                parameterId: R,
                actionGroups: T,
                smoothing: q,
                restingValue: L,
                pluginInstance: U,
                pluginDuration: V,
                instanceDelay: M,
                skipMotion: K,
                skipToValue: j,
                customEasingFn:
                  Array.isArray(h) && h.length === 4 ? R1(h) : void 0,
              });
            }
            case x1: {
              let { instanceId: r, time: n } = t.payload;
              return (0, vt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case S1: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case C1: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? q1 : M1;
                r = (0, vt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var F1,
    D1,
    k1,
    cE,
    lE = pe(() => {
      "use strict";
      Me();
      ({
        IX2_RAW_DATA_IMPORTED: F1,
        IX2_SESSION_STOPPED: D1,
        IX2_PARAMETER_CHANGED: k1,
      } = _e),
        (cE = (e = {}, t) => {
          switch (t.type) {
            case F1:
              return t.payload.ixParameters || {};
            case D1:
              return {};
            case k1: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var pE = {};
  Pe(pE, { default: () => U1 });
  var fE,
    dE,
    G1,
    U1,
    gE = pe(() => {
      "use strict";
      fE = ae(Bo());
      Of();
      jf();
      Yf();
      dE = ae(Dt());
      uE();
      lE();
      ({ ixElements: G1 } = dE.IX2ElementsReducer),
        (U1 = (0, fE.combineReducers)({
          ixData: Af,
          ixRequest: Hf,
          ixSession: Kf,
          ixElements: G1,
          ixInstances: sE,
          ixParameters: cE,
        }));
    });
  var hE = c((kH, vE) => {
    var V1 = bt(),
      B1 = be(),
      X1 = dt(),
      W1 = "[object String]";
    function H1(e) {
      return typeof e == "string" || (!B1(e) && X1(e) && V1(e) == W1);
    }
    vE.exports = H1;
  });
  var mE = c((GH, EE) => {
    var j1 = ha(),
      z1 = j1("length");
    EE.exports = z1;
  });
  var _E = c((UH, yE) => {
    var K1 = "\\ud800-\\udfff",
      Y1 = "\\u0300-\\u036f",
      $1 = "\\ufe20-\\ufe2f",
      Q1 = "\\u20d0-\\u20ff",
      Z1 = Y1 + $1 + Q1,
      J1 = "\\ufe0e\\ufe0f",
      eD = "\\u200d",
      tD = RegExp("[" + eD + K1 + Z1 + J1 + "]");
    function rD(e) {
      return tD.test(e);
    }
    yE.exports = rD;
  });
  var CE = c((VH, SE) => {
    var TE = "\\ud800-\\udfff",
      nD = "\\u0300-\\u036f",
      iD = "\\ufe20-\\ufe2f",
      oD = "\\u20d0-\\u20ff",
      aD = nD + iD + oD,
      sD = "\\ufe0e\\ufe0f",
      uD = "[" + TE + "]",
      za = "[" + aD + "]",
      Ka = "\\ud83c[\\udffb-\\udfff]",
      cD = "(?:" + za + "|" + Ka + ")",
      IE = "[^" + TE + "]",
      AE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      OE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      lD = "\\u200d",
      wE = cD + "?",
      xE = "[" + sD + "]?",
      fD = "(?:" + lD + "(?:" + [IE, AE, OE].join("|") + ")" + xE + wE + ")*",
      dD = xE + wE + fD,
      pD = "(?:" + [IE + za + "?", za, AE, OE, uD].join("|") + ")",
      bE = RegExp(Ka + "(?=" + Ka + ")|" + pD + dD, "g");
    function gD(e) {
      for (var t = (bE.lastIndex = 0); bE.test(e); ) ++t;
      return t;
    }
    SE.exports = gD;
  });
  var LE = c((BH, RE) => {
    var vD = mE(),
      hD = _E(),
      ED = CE();
    function mD(e) {
      return hD(e) ? ED(e) : vD(e);
    }
    RE.exports = mD;
  });
  var PE = c((XH, NE) => {
    var yD = Bn(),
      _D = Xn(),
      bD = Nt(),
      TD = hE(),
      ID = LE(),
      AD = "[object Map]",
      OD = "[object Set]";
    function wD(e) {
      if (e == null) return 0;
      if (bD(e)) return TD(e) ? ID(e) : e.length;
      var t = _D(e);
      return t == AD || t == OD ? e.size : yD(e).length;
    }
    NE.exports = wD;
  });
  var ME = c((WH, qE) => {
    var xD = "Expected a function";
    function SD(e) {
      if (typeof e != "function") throw new TypeError(xD);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    qE.exports = SD;
  });
  var Ya = c((HH, FE) => {
    var CD = Tt(),
      RD = (function () {
        try {
          var e = CD(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    FE.exports = RD;
  });
  var $a = c((jH, kE) => {
    var DE = Ya();
    function LD(e, t, r) {
      t == "__proto__" && DE
        ? DE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    kE.exports = LD;
  });
  var UE = c((zH, GE) => {
    var ND = $a(),
      PD = Nn(),
      qD = Object.prototype,
      MD = qD.hasOwnProperty;
    function FD(e, t, r) {
      var n = e[t];
      (!(MD.call(e, t) && PD(n, r)) || (r === void 0 && !(t in e))) &&
        ND(e, t, r);
    }
    GE.exports = FD;
  });
  var XE = c((KH, BE) => {
    var DD = UE(),
      kD = Br(),
      GD = kn(),
      VE = ot(),
      UD = nr();
    function VD(e, t, r, n) {
      if (!VE(e)) return e;
      t = kD(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = UD(t[i]),
          d = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var y = s[u];
          (d = n ? n(y, u, s) : void 0),
            d === void 0 && (d = VE(y) ? y : GD(t[i + 1]) ? [] : {});
        }
        DD(s, u, d), (s = s[u]);
      }
      return e;
    }
    BE.exports = VD;
  });
  var HE = c((YH, WE) => {
    var BD = jn(),
      XD = XE(),
      WD = Br();
    function HD(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = BD(e, a);
        r(s, a) && XD(o, WD(a, e), s);
      }
      return o;
    }
    WE.exports = HD;
  });
  var zE = c(($H, jE) => {
    var jD = Fn(),
      zD = Co(),
      KD = ta(),
      YD = ea(),
      $D = Object.getOwnPropertySymbols,
      QD = $D
        ? function (e) {
            for (var t = []; e; ) jD(t, KD(e)), (e = zD(e));
            return t;
          }
        : YD;
    jE.exports = QD;
  });
  var YE = c((QH, KE) => {
    function ZD(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    KE.exports = ZD;
  });
  var QE = c((ZH, $E) => {
    var JD = ot(),
      e2 = Vn(),
      t2 = YE(),
      r2 = Object.prototype,
      n2 = r2.hasOwnProperty;
    function i2(e) {
      if (!JD(e)) return t2(e);
      var t = e2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !n2.call(e, n))) || r.push(n);
      return r;
    }
    $E.exports = i2;
  });
  var JE = c((JH, ZE) => {
    var o2 = na(),
      a2 = QE(),
      s2 = Nt();
    function u2(e) {
      return s2(e) ? o2(e, !0) : a2(e);
    }
    ZE.exports = u2;
  });
  var tm = c((ej, em) => {
    var c2 = Jo(),
      l2 = zE(),
      f2 = JE();
    function d2(e) {
      return c2(e, f2, l2);
    }
    em.exports = d2;
  });
  var nm = c((tj, rm) => {
    var p2 = va(),
      g2 = It(),
      v2 = HE(),
      h2 = tm();
    function E2(e, t) {
      if (e == null) return {};
      var r = p2(h2(e), function (n) {
        return [n];
      });
      return (
        (t = g2(t)),
        v2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    rm.exports = E2;
  });
  var om = c((rj, im) => {
    var m2 = It(),
      y2 = ME(),
      _2 = nm();
    function b2(e, t) {
      return _2(e, y2(m2(t)));
    }
    im.exports = b2;
  });
  var sm = c((nj, am) => {
    var T2 = Bn(),
      I2 = Xn(),
      A2 = Fr(),
      O2 = be(),
      w2 = Nt(),
      x2 = Dn(),
      S2 = Vn(),
      C2 = Un(),
      R2 = "[object Map]",
      L2 = "[object Set]",
      N2 = Object.prototype,
      P2 = N2.hasOwnProperty;
    function q2(e) {
      if (e == null) return !0;
      if (
        w2(e) &&
        (O2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          x2(e) ||
          C2(e) ||
          A2(e))
      )
        return !e.length;
      var t = I2(e);
      if (t == R2 || t == L2) return !e.size;
      if (S2(e)) return !T2(e).length;
      for (var r in e) if (P2.call(e, r)) return !1;
      return !0;
    }
    am.exports = q2;
  });
  var cm = c((ij, um) => {
    var M2 = $a(),
      F2 = Da(),
      D2 = It();
    function k2(e, t) {
      var r = {};
      return (
        (t = D2(t, 3)),
        F2(e, function (n, i, o) {
          M2(r, i, t(n, i, o));
        }),
        r
      );
    }
    um.exports = k2;
  });
  var fm = c((oj, lm) => {
    function G2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    lm.exports = G2;
  });
  var pm = c((aj, dm) => {
    var U2 = Kn();
    function V2(e) {
      return typeof e == "function" ? e : U2;
    }
    dm.exports = V2;
  });
  var vm = c((sj, gm) => {
    var B2 = fm(),
      X2 = ka(),
      W2 = pm(),
      H2 = be();
    function j2(e, t) {
      var r = H2(e) ? B2 : X2;
      return r(e, W2(t));
    }
    gm.exports = j2;
  });
  var Em = c((uj, hm) => {
    var z2 = ze(),
      K2 = function () {
        return z2.Date.now();
      };
    hm.exports = K2;
  });
  var _m = c((cj, ym) => {
    var Y2 = ot(),
      Qa = Em(),
      mm = Yn(),
      $2 = "Expected a function",
      Q2 = Math.max,
      Z2 = Math.min;
    function J2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        d = 0,
        y = !1,
        g = !1,
        v = !0;
      if (typeof e != "function") throw new TypeError($2);
      (t = mm(t) || 0),
        Y2(r) &&
          ((y = !!r.leading),
          (g = "maxWait" in r),
          (o = g ? Q2(mm(r.maxWait) || 0, t) : o),
          (v = "trailing" in r ? !!r.trailing : v));
      function A(M) {
        var K = n,
          j = i;
        return (n = i = void 0), (d = M), (a = e.apply(j, K)), a;
      }
      function x(M) {
        return (d = M), (s = setTimeout(T, t)), y ? A(M) : a;
      }
      function b(M) {
        var K = M - u,
          j = M - d,
          z = t - K;
        return g ? Z2(z, o - j) : z;
      }
      function R(M) {
        var K = M - u,
          j = M - d;
        return u === void 0 || K >= t || K < 0 || (g && j >= o);
      }
      function T() {
        var M = Qa();
        if (R(M)) return q(M);
        s = setTimeout(T, b(M));
      }
      function q(M) {
        return (s = void 0), v && n ? A(M) : ((n = i = void 0), a);
      }
      function L() {
        s !== void 0 && clearTimeout(s), (d = 0), (n = u = i = s = void 0);
      }
      function U() {
        return s === void 0 ? a : q(Qa());
      }
      function V() {
        var M = Qa(),
          K = R(M);
        if (((n = arguments), (i = this), (u = M), K)) {
          if (s === void 0) return x(u);
          if (g) return clearTimeout(s), (s = setTimeout(T, t)), A(u);
        }
        return s === void 0 && (s = setTimeout(T, t)), a;
      }
      return (V.cancel = L), (V.flush = U), V;
    }
    ym.exports = J2;
  });
  var Tm = c((lj, bm) => {
    var ek = _m(),
      tk = ot(),
      rk = "Expected a function";
    function nk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(rk);
      return (
        tk(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        ek(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    bm.exports = nk;
  });
  var Am = {};
  Pe(Am, {
    actionListPlaybackChanged: () => vr,
    animationFrameChanged: () => di,
    clearRequested: () => Sk,
    elementStateChanged: () => os,
    eventListenerAdded: () => fi,
    eventStateChanged: () => rs,
    instanceAdded: () => ns,
    instanceRemoved: () => is,
    instanceStarted: () => pi,
    mediaQueriesDefined: () => ss,
    parameterChanged: () => gr,
    playbackRequested: () => wk,
    previewRequested: () => Ok,
    rawDataImported: () => Za,
    sessionInitialized: () => Ja,
    sessionStarted: () => es,
    sessionStopped: () => ts,
    stopRequested: () => xk,
    testFrameRendered: () => Ck,
    viewportWidthChanged: () => as,
  });
  var Im,
    ik,
    ok,
    ak,
    sk,
    uk,
    ck,
    lk,
    fk,
    dk,
    pk,
    gk,
    vk,
    hk,
    Ek,
    mk,
    yk,
    _k,
    bk,
    Tk,
    Ik,
    Ak,
    Za,
    Ja,
    es,
    ts,
    Ok,
    wk,
    xk,
    Sk,
    fi,
    Ck,
    rs,
    di,
    gr,
    ns,
    pi,
    is,
    os,
    vr,
    as,
    ss,
    gi = pe(() => {
      "use strict";
      Me();
      (Im = ae(Dt())),
        ({
          IX2_RAW_DATA_IMPORTED: ik,
          IX2_SESSION_INITIALIZED: ok,
          IX2_SESSION_STARTED: ak,
          IX2_SESSION_STOPPED: sk,
          IX2_PREVIEW_REQUESTED: uk,
          IX2_PLAYBACK_REQUESTED: ck,
          IX2_STOP_REQUESTED: lk,
          IX2_CLEAR_REQUESTED: fk,
          IX2_EVENT_LISTENER_ADDED: dk,
          IX2_TEST_FRAME_RENDERED: pk,
          IX2_EVENT_STATE_CHANGED: gk,
          IX2_ANIMATION_FRAME_CHANGED: vk,
          IX2_PARAMETER_CHANGED: hk,
          IX2_INSTANCE_ADDED: Ek,
          IX2_INSTANCE_STARTED: mk,
          IX2_INSTANCE_REMOVED: yk,
          IX2_ELEMENT_STATE_CHANGED: _k,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: bk,
          IX2_VIEWPORT_WIDTH_CHANGED: Tk,
          IX2_MEDIA_QUERIES_DEFINED: Ik,
        } = _e),
        ({ reifyState: Ak } = Im.IX2VanillaUtils),
        (Za = (e) => ({ type: ik, payload: { ...Ak(e) } })),
        (Ja = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: ok,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (es = () => ({ type: ak })),
        (ts = () => ({ type: sk })),
        (Ok = ({ rawData: e, defer: t }) => ({
          type: uk,
          payload: { defer: t, rawData: e },
        })),
        (wk = ({
          actionTypeId: e = qe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: ck,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (xk = (e) => ({ type: lk, payload: { actionListId: e } })),
        (Sk = () => ({ type: fk })),
        (fi = (e, t) => ({
          type: dk,
          payload: { target: e, listenerParams: t },
        })),
        (Ck = (e = 1) => ({ type: pk, payload: { step: e } })),
        (rs = (e, t) => ({ type: gk, payload: { stateKey: e, newState: t } })),
        (di = (e, t) => ({ type: vk, payload: { now: e, parameters: t } })),
        (gr = (e, t) => ({ type: hk, payload: { key: e, value: t } })),
        (ns = (e) => ({ type: Ek, payload: { ...e } })),
        (pi = (e, t) => ({ type: mk, payload: { instanceId: e, time: t } })),
        (is = (e) => ({ type: yk, payload: { instanceId: e } })),
        (os = (e, t, r, n) => ({
          type: _k,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (vr = ({ actionListId: e, isPlaying: t }) => ({
          type: bk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (as = ({ width: e, mediaQueries: t }) => ({
          type: Tk,
          payload: { width: e, mediaQueries: t },
        })),
        (ss = () => ({ type: Ik }));
    });
  var Le = {};
  Pe(Le, {
    elementContains: () => ls,
    getChildElements: () => Gk,
    getClosestElement: () => Jr,
    getProperty: () => qk,
    getQuerySelector: () => cs,
    getRefType: () => fs,
    getSiblingElements: () => Uk,
    getStyle: () => Pk,
    getValidDocument: () => Fk,
    isSiblingNode: () => kk,
    matchSelector: () => Mk,
    queryDocument: () => Dk,
    setStyle: () => Nk,
  });
  function Nk(e, t, r) {
    e.style[t] = r;
  }
  function Pk(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function qk(e, t) {
    return e[t];
  }
  function Mk(e) {
    return (t) => t[us](e);
  }
  function cs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Om) !== -1) {
        let n = e.split(Om),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(xm)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function Fk(e) {
    return e == null || e === document.documentElement.getAttribute(xm)
      ? document
      : null;
  }
  function Dk(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ls(e, t) {
    return e.contains(t);
  }
  function kk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function Gk(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function Uk(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function fs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Rk
        : Lk
      : null;
  }
  var wm,
    us,
    Om,
    Rk,
    Lk,
    xm,
    Jr,
    Sm = pe(() => {
      "use strict";
      wm = ae(Dt());
      Me();
      ({ ELEMENT_MATCHES: us } = wm.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Om,
          HTML_ELEMENT: Rk,
          PLAIN_OBJECT: Lk,
          WF_PAGE: xm,
        } = Oe);
      Jr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[us] && r[us](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ds = c((pj, Rm) => {
    var Vk = ot(),
      Cm = Object.create,
      Bk = (function () {
        function e() {}
        return function (t) {
          if (!Vk(t)) return {};
          if (Cm) return Cm(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Rm.exports = Bk;
  });
  var vi = c((gj, Lm) => {
    function Xk() {}
    Lm.exports = Xk;
  });
  var Ei = c((vj, Nm) => {
    var Wk = ds(),
      Hk = vi();
    function hi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    hi.prototype = Wk(Hk.prototype);
    hi.prototype.constructor = hi;
    Nm.exports = hi;
  });
  var Fm = c((hj, Mm) => {
    var Pm = jt(),
      jk = Fr(),
      zk = be(),
      qm = Pm ? Pm.isConcatSpreadable : void 0;
    function Kk(e) {
      return zk(e) || jk(e) || !!(qm && e && e[qm]);
    }
    Mm.exports = Kk;
  });
  var Gm = c((Ej, km) => {
    var Yk = Fn(),
      $k = Fm();
    function Dm(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = $k), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Dm(s, t - 1, r, n, i)
            : Yk(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    km.exports = Dm;
  });
  var Vm = c((mj, Um) => {
    var Qk = Gm();
    function Zk(e) {
      var t = e == null ? 0 : e.length;
      return t ? Qk(e, 1) : [];
    }
    Um.exports = Zk;
  });
  var Xm = c((yj, Bm) => {
    function Jk(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Bm.exports = Jk;
  });
  var jm = c((_j, Hm) => {
    var eG = Xm(),
      Wm = Math.max;
    function tG(e, t, r) {
      return (
        (t = Wm(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Wm(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), eG(e, this, s);
        }
      );
    }
    Hm.exports = tG;
  });
  var Km = c((bj, zm) => {
    function rG(e) {
      return function () {
        return e;
      };
    }
    zm.exports = rG;
  });
  var Qm = c((Tj, $m) => {
    var nG = Km(),
      Ym = Ya(),
      iG = Kn(),
      oG = Ym
        ? function (e, t) {
            return Ym(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: nG(t),
              writable: !0,
            });
          }
        : iG;
    $m.exports = oG;
  });
  var Jm = c((Ij, Zm) => {
    var aG = 800,
      sG = 16,
      uG = Date.now;
    function cG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = uG(),
          i = sG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= aG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Zm.exports = cG;
  });
  var ty = c((Aj, ey) => {
    var lG = Qm(),
      fG = Jm(),
      dG = fG(lG);
    ey.exports = dG;
  });
  var ny = c((Oj, ry) => {
    var pG = Vm(),
      gG = jm(),
      vG = ty();
    function hG(e) {
      return vG(gG(e, void 0, pG), e + "");
    }
    ry.exports = hG;
  });
  var ay = c((wj, oy) => {
    var iy = ia(),
      EG = iy && new iy();
    oy.exports = EG;
  });
  var uy = c((xj, sy) => {
    function mG() {}
    sy.exports = mG;
  });
  var ps = c((Sj, ly) => {
    var cy = ay(),
      yG = uy(),
      _G = cy
        ? function (e) {
            return cy.get(e);
          }
        : yG;
    ly.exports = _G;
  });
  var dy = c((Cj, fy) => {
    var bG = {};
    fy.exports = bG;
  });
  var gs = c((Rj, gy) => {
    var py = dy(),
      TG = Object.prototype,
      IG = TG.hasOwnProperty;
    function AG(e) {
      for (
        var t = e.name + "", r = py[t], n = IG.call(py, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    gy.exports = AG;
  });
  var yi = c((Lj, vy) => {
    var OG = ds(),
      wG = vi(),
      xG = 4294967295;
    function mi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = xG),
        (this.__views__ = []);
    }
    mi.prototype = OG(wG.prototype);
    mi.prototype.constructor = mi;
    vy.exports = mi;
  });
  var Ey = c((Nj, hy) => {
    function SG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    hy.exports = SG;
  });
  var yy = c((Pj, my) => {
    var CG = yi(),
      RG = Ei(),
      LG = Ey();
    function NG(e) {
      if (e instanceof CG) return e.clone();
      var t = new RG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = LG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    my.exports = NG;
  });
  var Ty = c((qj, by) => {
    var PG = yi(),
      _y = Ei(),
      qG = vi(),
      MG = be(),
      FG = dt(),
      DG = yy(),
      kG = Object.prototype,
      GG = kG.hasOwnProperty;
    function _i(e) {
      if (FG(e) && !MG(e) && !(e instanceof PG)) {
        if (e instanceof _y) return e;
        if (GG.call(e, "__wrapped__")) return DG(e);
      }
      return new _y(e);
    }
    _i.prototype = qG.prototype;
    _i.prototype.constructor = _i;
    by.exports = _i;
  });
  var Ay = c((Mj, Iy) => {
    var UG = yi(),
      VG = ps(),
      BG = gs(),
      XG = Ty();
    function WG(e) {
      var t = BG(e),
        r = XG[t];
      if (typeof r != "function" || !(t in UG.prototype)) return !1;
      if (e === r) return !0;
      var n = VG(r);
      return !!n && e === n[0];
    }
    Iy.exports = WG;
  });
  var Sy = c((Fj, xy) => {
    var Oy = Ei(),
      HG = ny(),
      jG = ps(),
      vs = gs(),
      zG = be(),
      wy = Ay(),
      KG = "Expected a function",
      YG = 8,
      $G = 32,
      QG = 128,
      ZG = 256;
    function JG(e) {
      return HG(function (t) {
        var r = t.length,
          n = r,
          i = Oy.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(KG);
          if (i && !a && vs(o) == "wrapper") var a = new Oy([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = vs(o),
            u = s == "wrapper" ? jG(o) : void 0;
          u &&
          wy(u[0]) &&
          u[1] == (QG | YG | $G | ZG) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[vs(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && wy(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var d = arguments,
            y = d[0];
          if (a && d.length == 1 && zG(y)) return a.plant(y).value();
          for (var g = 0, v = r ? t[g].apply(this, d) : y; ++g < r; )
            v = t[g].call(this, v);
          return v;
        };
      });
    }
    xy.exports = JG;
  });
  var Ry = c((Dj, Cy) => {
    var eU = Sy(),
      tU = eU();
    Cy.exports = tU;
  });
  var Ny = c((kj, Ly) => {
    function rU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Ly.exports = rU;
  });
  var qy = c((Gj, Py) => {
    var nU = Ny(),
      hs = Yn();
    function iU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = hs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = hs(t)), (t = t === t ? t : 0)),
        nU(hs(e), t, r)
      );
    }
    Py.exports = iU;
  });
  var Xy,
    Wy,
    Hy,
    jy,
    oU,
    aU,
    sU,
    uU,
    cU,
    lU,
    fU,
    dU,
    pU,
    gU,
    vU,
    hU,
    EU,
    mU,
    yU,
    zy,
    Ky,
    _U,
    bU,
    TU,
    Yy,
    IU,
    AU,
    $y,
    OU,
    Es,
    Qy,
    My,
    Fy,
    Zy,
    tn,
    wU,
    ut,
    Jy,
    xU,
    De,
    $e,
    rn,
    e_,
    ms,
    Dy,
    ys,
    SU,
    en,
    CU,
    RU,
    LU,
    t_,
    ky,
    NU,
    Gy,
    PU,
    qU,
    MU,
    Uy,
    bi,
    Ti,
    Vy,
    By,
    r_,
    n_ = pe(() => {
      "use strict";
      (Xy = ae(Ry())), (Wy = ae(zn())), (Hy = ae(qy()));
      Me();
      _s();
      gi();
      (jy = ae(Dt())),
        ({
          MOUSE_CLICK: oU,
          MOUSE_SECOND_CLICK: aU,
          MOUSE_DOWN: sU,
          MOUSE_UP: uU,
          MOUSE_OVER: cU,
          MOUSE_OUT: lU,
          DROPDOWN_CLOSE: fU,
          DROPDOWN_OPEN: dU,
          SLIDER_ACTIVE: pU,
          SLIDER_INACTIVE: gU,
          TAB_ACTIVE: vU,
          TAB_INACTIVE: hU,
          NAVBAR_CLOSE: EU,
          NAVBAR_OPEN: mU,
          MOUSE_MOVE: yU,
          PAGE_SCROLL_DOWN: zy,
          SCROLL_INTO_VIEW: Ky,
          SCROLL_OUT_OF_VIEW: _U,
          PAGE_SCROLL_UP: bU,
          SCROLLING_IN_VIEW: TU,
          PAGE_FINISH: Yy,
          ECOMMERCE_CART_CLOSE: IU,
          ECOMMERCE_CART_OPEN: AU,
          PAGE_START: $y,
          PAGE_SCROLL: OU,
        } = Ke),
        (Es = "COMPONENT_ACTIVE"),
        (Qy = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: My } = Oe),
        ({ getNamespacedParameterId: Fy } = jy.IX2VanillaUtils),
        (Zy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (tn = Zy(({ element: e, nativeEvent: t }) => e === t.target)),
        (wU = Zy(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ut = (0, Xy.default)([tn, wU])),
        (Jy = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !SU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (xU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Jy(e, n);
        }),
        (De = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            d = Jy(e, u);
          return (
            d &&
              hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + My + n.split(My)[1],
                actionListId: (0, Wy.default)(d, "action.config.actionListId"),
              }),
            hr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            nn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        ($e = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (rn = { handler: $e(ut, De) }),
        (e_ = { ...rn, types: [Es, Qy].join(" ") }),
        (ms = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Dy = "mouseover mouseout"),
        (ys = { types: ms }),
        (SU = { PAGE_START: $y, PAGE_FINISH: Yy }),
        (en = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Hy.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (CU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (RU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (LU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = en(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return CU(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (t_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Es, Qy].indexOf(n) !== -1 ? n === Es : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (ky = (e) => (t, r) => {
          let n = { elementHovered: RU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (NU = (e) => (t, r) => {
          let n = { ...r, elementVisible: LU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Gy =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = en(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = a,
              y = d === "PX",
              g = i - o,
              v = Number((n / g).toFixed(2));
            if (r && r.percentTop === v) return r;
            let A = (y ? u : (o * (u || 0)) / 100) / g,
              x,
              b,
              R = 0;
            r &&
              ((x = v > r.percentTop),
              (b = r.scrollingDown !== x),
              (R = b ? v : r.anchorTop));
            let T = s === zy ? v >= R + A : v <= R - A,
              q = {
                ...r,
                percentTop: v,
                inBounds: T,
                anchorTop: R,
                scrollingDown: x,
              };
            return (r && T && (b || q.inBounds !== r.inBounds) && e(t, q)) || q;
          }),
        (PU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (qU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (MU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Uy =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (bi = (e = !0) => ({
          ...e_,
          handler: $e(
            e ? ut : tn,
            t_((t, r) => (r.isActive ? rn.handler(t, r) : r))
          ),
        })),
        (Ti = (e = !0) => ({
          ...e_,
          handler: $e(
            e ? ut : tn,
            t_((t, r) => (r.isActive ? r : rn.handler(t, r)))
          ),
        })),
        (Vy = {
          ...ys,
          handler: NU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Ky) === r
              ? (De(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (By = 0.05),
        (r_ = {
          [pU]: bi(),
          [gU]: Ti(),
          [dU]: bi(),
          [fU]: Ti(),
          [mU]: bi(!1),
          [EU]: Ti(!1),
          [vU]: bi(),
          [hU]: Ti(),
          [AU]: { types: "ecommerce-cart-open", handler: $e(ut, De) },
          [IU]: { types: "ecommerce-cart-close", handler: $e(ut, De) },
          [oU]: {
            types: "click",
            handler: $e(
              ut,
              Uy((e, { clickCount: t }) => {
                xU(e) ? t === 1 && De(e) : De(e);
              })
            ),
          },
          [aU]: {
            types: "click",
            handler: $e(
              ut,
              Uy((e, { clickCount: t }) => {
                t === 2 && De(e);
              })
            ),
          },
          [sU]: { ...rn, types: "mousedown" },
          [uU]: { ...rn, types: "mouseup" },
          [cU]: {
            types: Dy,
            handler: $e(
              ut,
              ky((e, t) => {
                t.elementHovered && De(e);
              })
            ),
          },
          [lU]: {
            types: Dy,
            handler: $e(
              ut,
              ky((e, t) => {
                t.elementHovered || De(e);
              })
            ),
          },
          [yU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: y = 0,
                } = r,
                {
                  clientX: g = o.clientX,
                  clientY: v = o.clientY,
                  pageX: A = o.pageX,
                  pageY: x = o.pageY,
                } = n,
                b = s === "X_AXIS",
                R = n.type === "mouseout",
                T = y / 100,
                q = u,
                L = !1;
              switch (a) {
                case it.VIEWPORT: {
                  T = b
                    ? Math.min(g, window.innerWidth) / window.innerWidth
                    : Math.min(v, window.innerHeight) / window.innerHeight;
                  break;
                }
                case it.PAGE: {
                  let {
                    scrollLeft: U,
                    scrollTop: V,
                    scrollWidth: M,
                    scrollHeight: K,
                  } = en();
                  T = b ? Math.min(U + A, M) / M : Math.min(V + x, K) / K;
                  break;
                }
                case it.ELEMENT:
                default: {
                  q = Fy(i, u);
                  let U = n.type.indexOf("mouse") === 0;
                  if (U && ut({ element: t, nativeEvent: n }) !== !0) break;
                  let V = t.getBoundingClientRect(),
                    { left: M, top: K, width: j, height: z } = V;
                  if (!U && !PU({ left: g, top: v }, V)) break;
                  (L = !0), (T = b ? (g - M) / j : (v - K) / z);
                  break;
                }
              }
              return (
                R && (T > 1 - By || T < By) && (T = Math.round(T)),
                (a !== it.ELEMENT || L || L !== o.elementHovered) &&
                  ((T = d ? 1 - T : T), e.dispatch(gr(q, T))),
                {
                  elementHovered: L,
                  clientX: g,
                  clientY: v,
                  pageX: A,
                  pageY: x,
                }
              );
            },
          },
          [OU]: {
            types: ms,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = en(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(gr(r, s));
            },
          },
          [TU]: {
            types: ms,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: d,
                } = en(),
                {
                  basedOn: y,
                  selectedAxis: g,
                  continuousParameterGroupId: v,
                  startsEntering: A,
                  startsExiting: x,
                  addEndOffset: b,
                  addStartOffset: R,
                  addOffsetValue: T = 0,
                  endOffsetValue: q = 0,
                } = r,
                L = g === "X_AXIS";
              if (y === it.VIEWPORT) {
                let U = L ? o / s : a / u;
                return (
                  U !== i.scrollPercent && t.dispatch(gr(v, U)),
                  { scrollPercent: U }
                );
              } else {
                let U = Fy(n, v),
                  V = e.getBoundingClientRect(),
                  M = (R ? T : 0) / 100,
                  K = (b ? q : 0) / 100;
                (M = A ? M : 1 - M), (K = x ? K : 1 - K);
                let j = V.top + Math.min(V.height * M, d),
                  $ = V.top + V.height * K - j,
                  B = Math.min(d + $, u),
                  h = Math.min(Math.max(0, d - j), B) / B;
                return (
                  h !== i.scrollPercent && t.dispatch(gr(U, h)),
                  { scrollPercent: h }
                );
              }
            },
          },
          [Ky]: Vy,
          [_U]: Vy,
          [zy]: {
            ...ys,
            handler: Gy((e, t) => {
              t.scrollingDown && De(e);
            }),
          },
          [bU]: {
            ...ys,
            handler: Gy((e, t) => {
              t.scrollingDown || De(e);
            }),
          },
          [Yy]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $e(tn, qU(De)),
          },
          [$y]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $e(tn, MU(De)),
          },
        });
    });
  var __ = {};
  Pe(__, {
    observeRequests: () => tV,
    startActionGroup: () => nn,
    startEngine: () => Si,
    stopActionGroup: () => hr,
    stopAllActionGroups: () => E_,
    stopEngine: () => Ci,
  });
  function tV(e) {
    kt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: iV }),
      kt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: oV }),
      kt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: aV }),
      kt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: sV });
  }
  function rV(e) {
    kt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ci(e),
          p_({ store: e, elementApi: Le }),
          Si({ store: e, allowEvents: !0 }),
          g_();
      },
    });
  }
  function nV(e, t) {
    let r = kt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function iV({ rawData: e, defer: t }, r) {
    let n = () => {
      Si({ store: r, rawData: e, allowEvents: !0 }), g_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function g_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function oV(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: d = !0,
      } = e,
      { rawData: y } = e;
    if (n && i && y && s) {
      let g = y.actionLists[n];
      g && (y = WU({ actionList: g, actionItemId: i, rawData: y }));
    }
    if (
      (Si({ store: t, rawData: y, allowEvents: a, testManual: u }),
      (n && r === qe.GENERAL_START_ACTION) || bs(r))
    ) {
      hr({ store: t, actionListId: n }),
        h_({ store: t, actionListId: n, eventId: o });
      let g = nn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: d,
      });
      d && g && t.dispatch(vr({ actionListId: n, isPlaying: !s }));
    }
  }
  function aV({ actionListId: e }, t) {
    e ? hr({ store: t, actionListId: e }) : E_({ store: t }), Ci(t);
  }
  function sV(e, t) {
    Ci(t), p_({ store: t, elementApi: Le });
  }
  function Si({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Za(t)),
      i.active ||
        (e.dispatch(
          Ja({
            hasBoundaryNodes: !!document.querySelector(Ai),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (pV(e), uV(), e.getState().ixSession.hasDefinedMediaQueries && rV(e)),
        e.dispatch(es()),
        cV(e, n));
  }
  function uV() {
    let { documentElement: e } = document;
    e.className.indexOf(i_) === -1 && (e.className += ` ${i_}`);
  }
  function cV(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(di(n, o)), t ? nV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ci(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(lV), KU(), e.dispatch(ts());
    }
  }
  function lV({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function fV({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: d, ixSession: y } = e.getState(),
      { events: g } = d,
      v = g[n],
      { eventTypeId: A } = v,
      x = {},
      b = {},
      R = [],
      { continuousActionGroups: T } = a,
      { id: q } = a;
    HU(A, i) && (q = jU(t, q));
    let L = y.hasBoundaryNodes && r ? Jr(r, Ai) : null;
    T.forEach((U) => {
      let { keyframe: V, actionItems: M } = U;
      M.forEach((K) => {
        let { actionTypeId: j } = K,
          { target: z } = K.config;
        if (!z) return;
        let $ = z.boundaryMode ? L : null,
          B = YU(z) + Ts + j;
        if (((b[B] = dV(b[B], V, K)), !x[B])) {
          x[B] = !0;
          let { config: w } = K;
          Oi({
            config: w,
            event: v,
            eventTarget: r,
            elementRoot: $,
            elementApi: Le,
          }).forEach((h) => {
            R.push({ element: h, key: B });
          });
        }
      });
    }),
      R.forEach(({ element: U, key: V }) => {
        let M = b[V],
          K = (0, ht.default)(M, "[0].actionItems[0]", {}),
          { actionTypeId: j } = K,
          z = xi(j) ? As(j)(U, K) : null,
          $ = Is({ element: U, actionItem: K, elementApi: Le }, z);
        Os({
          store: e,
          element: U,
          eventId: n,
          actionListId: o,
          actionItem: K,
          destination: $,
          continuous: !0,
          parameterId: q,
          actionGroups: M,
          smoothing: s,
          restingValue: u,
          pluginInstance: z,
        });
      });
  }
  function dV(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function pV(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    v_(e),
      (0, Er.default)(r, (i, o) => {
        let a = r_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        yV({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && vV(e);
  }
  function vV(e) {
    let t = () => {
      v_(e);
    };
    gV.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(fi(window, [r, t]));
    }),
      t();
  }
  function v_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(as({ width: n, mediaQueries: i }));
    }
  }
  function yV({ logic: e, store: t, events: r }) {
    _V(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = hV(r, mV);
    if (!(0, s_.default)(s)) return;
    (0, Er.default)(s, (g, v) => {
      let A = r[v],
        { action: x, id: b, mediaQueries: R = o.mediaQueryKeys } = A,
        { actionListId: T } = x.config;
      $U(R, o.mediaQueryKeys) || t.dispatch(ss()),
        x.actionTypeId === qe.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(A.config) ? A.config : [A.config]).forEach((L) => {
            let { continuousParameterGroupId: U } = L,
              V = (0, ht.default)(a, `${T}.continuousParameterGroups`, []),
              M = (0, a_.default)(V, ({ id: z }) => z === U),
              K = (L.smoothing || 0) / 100,
              j = (L.restingState || 0) / 100;
            M &&
              g.forEach((z, $) => {
                let B = b + Ts + $;
                fV({
                  store: t,
                  eventStateKey: B,
                  eventTarget: z,
                  eventId: b,
                  eventConfig: L,
                  actionListId: T,
                  parameterGroup: M,
                  smoothing: K,
                  restingValue: j,
                });
              });
          }),
        (x.actionTypeId === qe.GENERAL_START_ACTION || bs(x.actionTypeId)) &&
          h_({ store: t, actionListId: T, eventId: b });
    });
    let u = (g) => {
        let { ixSession: v } = t.getState();
        EV(s, (A, x, b) => {
          let R = r[x],
            T = v.eventState[b],
            { action: q, mediaQueries: L = o.mediaQueryKeys } = R;
          if (!wi(L, v.mediaQueryKey)) return;
          let U = (V = {}) => {
            let M = i(
              {
                store: t,
                element: A,
                event: R,
                eventConfig: V,
                nativeEvent: g,
                eventStateKey: b,
              },
              T
            );
            QU(M, T) || t.dispatch(rs(b, M));
          };
          q.actionTypeId === qe.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(U)
            : U();
        });
      },
      d = (0, f_.default)(u, eV),
      y = ({ target: g = document, types: v, throttle: A }) => {
        v.split(" ")
          .filter(Boolean)
          .forEach((x) => {
            let b = A ? d : u;
            g.addEventListener(x, b), t.dispatch(fi(g, [x, b]));
          });
      };
    Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e);
  }
  function _V(e) {
    if (!JU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = cs(o);
      t[a] ||
        ((i === Ke.MOUSE_CLICK || i === Ke.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function h_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let d = (0, ht.default)(u, "actionItemGroups[0].actionItems", []),
        y = (0, ht.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!wi(y, i.mediaQueryKey)) return;
      d.forEach((g) => {
        let { config: v, actionTypeId: A } = g,
          x =
            v?.target?.useEventTarget === !0 && v?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : v,
          b = Oi({ config: x, event: s, elementApi: Le }),
          R = xi(A);
        b.forEach((T) => {
          let q = R ? As(A)(T, g) : null;
          Os({
            destination: Is({ element: T, actionItem: g, elementApi: Le }, q),
            immediate: !0,
            store: e,
            element: T,
            eventId: r,
            actionItem: g,
            actionListId: t,
            pluginInstance: q,
          });
        });
      });
    }
  }
  function E_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Er.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        ws(r, e), i && e.dispatch(vr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function hr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Jr(r, Ai) : null;
    (0, Er.default)(o, (u) => {
      let d = (0, ht.default)(u, "actionItem.config.target.boundaryMode"),
        y = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && y) {
        if (s && d && !ls(s, u.element)) return;
        ws(u, e),
          u.verbose && e.dispatch(vr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function nn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: d } = e.getState(),
      { events: y } = u,
      g = y[t] || {},
      { mediaQueries: v = u.mediaQueryKeys } = g,
      A = (0, ht.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: x, useFirstGroupAsInitialState: b } = A;
    if (!x || !x.length) return !1;
    o >= x.length && (0, ht.default)(g, "config.loop") && (o = 0),
      o === 0 && b && o++;
    let T =
        (o === 0 || (o === 1 && b)) && bs(g.action?.actionTypeId)
          ? g.config.delay
          : void 0,
      q = (0, ht.default)(x, [o, "actionItems"], []);
    if (!q.length || !wi(v, d.mediaQueryKey)) return !1;
    let L = d.hasBoundaryNodes && r ? Jr(r, Ai) : null,
      U = VU(q),
      V = !1;
    return (
      q.forEach((M, K) => {
        let { config: j, actionTypeId: z } = M,
          $ = xi(z),
          { target: B } = j;
        if (!B) return;
        let w = B.boundaryMode ? L : null;
        Oi({
          config: j,
          event: g,
          eventTarget: r,
          elementRoot: w,
          elementApi: Le,
        }).forEach((P, D) => {
          let X = $ ? As(z)(P, M) : null,
            Q = $ ? ZU(z)(P, M) : null;
          V = !0;
          let Z = U === K && D === 0,
            k = BU({ element: P, actionItem: M }),
            W = Is({ element: P, actionItem: M, elementApi: Le }, X);
          Os({
            store: e,
            element: P,
            actionItem: M,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: Z,
            computedStyle: k,
            destination: W,
            immediate: a,
            verbose: s,
            pluginInstance: X,
            pluginDuration: Q,
            instanceDelay: T,
          });
        });
      }),
      V
    );
  }
  function Os(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: d,
        eventId: y,
      } = n,
      g = !u,
      v = GU(),
      { ixElements: A, ixSession: x, ixData: b } = t.getState(),
      R = kU(A, i),
      { refState: T } = A[R] || {},
      q = fs(i),
      L = x.reducedMotion && Ho[o.actionTypeId],
      U;
    if (L && u)
      switch (b.events[y]?.eventTypeId) {
        case Ke.MOUSE_MOVE:
        case Ke.MOUSE_MOVE_IN_VIEWPORT:
          U = d;
          break;
        default:
          U = 0.5;
          break;
      }
    let V = XU(i, T, r, o, Le, s);
    if (
      (t.dispatch(
        ns({
          instanceId: v,
          elementId: R,
          origin: V,
          refType: q,
          skipMotion: L,
          skipToValue: U,
          ...n,
        })
      ),
      m_(document.body, "ix2-animation-started", v),
      a)
    ) {
      bV(t, v);
      return;
    }
    kt({ store: t, select: ({ ixInstances: M }) => M[v], onChange: y_ }),
      g && t.dispatch(pi(v, x.tick));
  }
  function ws(e, t) {
    m_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === d_ && zU(o, n, Le), t.dispatch(is(e.id));
  }
  function m_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function bV(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(pi(t, 0)), e.dispatch(di(performance.now(), r));
    let { ixInstances: n } = e.getState();
    y_(n[t], e);
  }
  function y_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: d,
        groupIndex: y,
        eventId: g,
        eventTarget: v,
        eventStateKey: A,
        actionListId: x,
        isCarrier: b,
        styleProp: R,
        verbose: T,
        pluginInstance: q,
      } = e,
      { ixData: L, ixSession: U } = t.getState(),
      { events: V } = L,
      M = V[g] || {},
      { mediaQueries: K = L.mediaQueryKeys } = M;
    if (wi(K, U.mediaQueryKey) && (n || r || i)) {
      if (d || (u === DU && i)) {
        t.dispatch(os(o, s, d, a));
        let { ixElements: j } = t.getState(),
          { ref: z, refType: $, refState: B } = j[o] || {},
          w = B && B[s];
        ($ === d_ || xi(s)) && UU(z, B, w, g, a, R, Le, u, q);
      }
      if (i) {
        if (b) {
          let j = nn({
            store: t,
            eventId: g,
            eventTarget: v,
            eventStateKey: A,
            actionListId: x,
            groupIndex: y + 1,
            verbose: T,
          });
          T && !j && t.dispatch(vr({ actionListId: x, isPlaying: !1 }));
        }
        ws(e, t);
      }
    }
  }
  var a_,
    ht,
    s_,
    u_,
    c_,
    l_,
    Er,
    f_,
    Ii,
    FU,
    bs,
    Ts,
    Ai,
    d_,
    DU,
    i_,
    Oi,
    kU,
    Is,
    kt,
    GU,
    UU,
    p_,
    VU,
    BU,
    XU,
    WU,
    HU,
    jU,
    wi,
    zU,
    KU,
    YU,
    $U,
    QU,
    xi,
    As,
    ZU,
    o_,
    JU,
    eV,
    gV,
    hV,
    EV,
    mV,
    _s = pe(() => {
      "use strict";
      (a_ = ae(_a())),
        (ht = ae(zn())),
        (s_ = ae(PE())),
        (u_ = ae(om())),
        (c_ = ae(sm())),
        (l_ = ae(cm())),
        (Er = ae(vm())),
        (f_ = ae(Tm()));
      Me();
      Ii = ae(Dt());
      gi();
      Sm();
      n_();
      (FU = Object.keys(On)),
        (bs = (e) => FU.includes(e)),
        ({
          COLON_DELIMITER: Ts,
          BOUNDARY_SELECTOR: Ai,
          HTML_ELEMENT: d_,
          RENDER_GENERAL: DU,
          W_MOD_IX: i_,
        } = Oe),
        ({
          getAffectedElements: Oi,
          getElementId: kU,
          getDestinationValues: Is,
          observeStore: kt,
          getInstanceId: GU,
          renderHTMLElement: UU,
          clearAllStyles: p_,
          getMaxDurationItemIndex: VU,
          getComputedStyle: BU,
          getInstanceOrigin: XU,
          reduceListToGroup: WU,
          shouldNamespaceEventParameter: HU,
          getNamespacedParameterId: jU,
          shouldAllowMediaQuery: wi,
          cleanupHTMLElement: zU,
          clearObjectCache: KU,
          stringifyTarget: YU,
          mediaQueriesEqual: $U,
          shallowEqual: QU,
        } = Ii.IX2VanillaUtils),
        ({
          isPluginType: xi,
          createPluginInstance: As,
          getPluginDuration: ZU,
        } = Ii.IX2VanillaPlugins),
        (o_ = navigator.userAgent),
        (JU = o_.match(/iPad/i) || o_.match(/iPhone/)),
        (eV = 12);
      gV = ["resize", "orientationchange"];
      (hV = (e, t) => (0, u_.default)((0, l_.default)(e, t), c_.default)),
        (EV = (e, t) => {
          (0, Er.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Ts + o;
              t(i, n, a);
            });
          });
        }),
        (mV = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Oi({ config: t, elementApi: Le });
        });
    });
  var T_ = c((Et) => {
    "use strict";
    var TV = dn().default,
      IV = nu().default;
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.actions = void 0;
    Et.destroy = b_;
    Et.init = SV;
    Et.setEnv = xV;
    Et.store = void 0;
    Bl();
    var AV = Bo(),
      OV = IV((gE(), et(pE))),
      xs = (_s(), et(__)),
      wV = TV((gi(), et(Am)));
    Et.actions = wV;
    var Ss = (Et.store = (0, AV.createStore)(OV.default));
    function xV(e) {
      e() && (0, xs.observeRequests)(Ss);
    }
    function SV(e) {
      b_(), (0, xs.startEngine)({ store: Ss, rawData: e, allowEvents: !0 });
    }
    function b_() {
      (0, xs.stopEngine)(Ss);
    }
  });
  var w_ = c((Kj, O_) => {
    "use strict";
    var I_ = Ge(),
      A_ = T_();
    A_.setEnv(I_.env);
    I_.define(
      "ix2",
      (O_.exports = function () {
        return A_;
      })
    );
  });
  var S_ = c((Yj, x_) => {
    "use strict";
    var mr = Ge();
    mr.define(
      "links",
      (x_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = mr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          d = /index\.(html|php)$/,
          y = /\/$/,
          g,
          v;
        r.ready = r.design = r.preview = A;
        function A() {
          (i = o && mr.env("design")),
            (v = mr.env("slug") || a.pathname || ""),
            mr.scroll.off(b),
            (g = []);
          for (var T = document.links, q = 0; q < T.length; ++q) x(T[q]);
          g.length && (mr.scroll.on(b), b());
        }
        function x(T) {
          if (!T.getAttribute("hreflang")) {
            var q =
              (i && T.getAttribute("href-disabled")) || T.getAttribute("href");
            if (((s.href = q), !(q.indexOf(":") >= 0))) {
              var L = e(T);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var U = e(s.hash);
                U.length && g.push({ link: L, sec: U, active: !1 });
                return;
              }
              if (!(q === "#" || q === "")) {
                var V =
                  s.href === a.href || q === v || (d.test(q) && y.test(v));
                R(L, u, V);
              }
            }
          }
        }
        function b() {
          var T = n.scrollTop(),
            q = n.height();
          t.each(g, function (L) {
            if (!L.link.attr("hreflang")) {
              var U = L.link,
                V = L.sec,
                M = V.offset().top,
                K = V.outerHeight(),
                j = q * 0.5,
                z = V.is(":visible") && M + K - j >= T && M + j <= T + q;
              L.active !== z && ((L.active = z), R(U, u, z));
            }
          });
        }
        function R(T, q, L) {
          var U = T.hasClass(q);
          (L && U) || (!L && !U) || (L ? T.addClass(q) : T.removeClass(q));
        }
        return r;
      })
    );
  });
  var R_ = c(($j, C_) => {
    "use strict";
    var Ri = Ge();
    Ri.define(
      "scroll",
      (C_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = x() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (w) {
              window.setTimeout(w, 15);
            },
          u = Ri.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          g = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          A = document.createElement("style");
        A.appendChild(document.createTextNode(v));
        function x() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var b = /^#[a-zA-Z0-9][\w:.-]*$/;
        function R(w) {
          return b.test(w.hash) && w.host + w.pathname === r.host + r.pathname;
        }
        let T =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function q() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            T.matches
          );
        }
        function L(w, h) {
          var P;
          switch (h) {
            case "add":
              (P = w.attr("tabindex")),
                P
                  ? w.attr("data-wf-tabindex-swap", P)
                  : w.attr("tabindex", "-1");
              break;
            case "remove":
              (P = w.attr("data-wf-tabindex-swap")),
                P
                  ? (w.attr("tabindex", P),
                    w.removeAttr("data-wf-tabindex-swap"))
                  : w.removeAttr("tabindex");
              break;
          }
          w.toggleClass("wf-force-outline-none", h === "add");
        }
        function U(w) {
          var h = w.currentTarget;
          if (
            !(
              Ri.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(h.className))
            )
          ) {
            var P = R(h) ? h.hash : "";
            if (P !== "") {
              var D = e(P);
              D.length &&
                (w && (w.preventDefault(), w.stopPropagation()),
                V(P, w),
                window.setTimeout(
                  function () {
                    M(D, function () {
                      L(D, "add"),
                        D.get(0).focus({ preventScroll: !0 }),
                        L(D, "remove");
                    });
                  },
                  w ? 0 : 300
                ));
            }
          }
        }
        function V(w) {
          if (
            r.hash !== w &&
            n &&
            n.pushState &&
            !(Ri.env.chrome && r.protocol === "file:")
          ) {
            var h = n.state && n.state.hash;
            h !== w && n.pushState({ hash: w }, "", w);
          }
        }
        function M(w, h) {
          var P = i.scrollTop(),
            D = K(w);
          if (P !== D) {
            var X = j(w, P, D),
              Q = Date.now(),
              Z = function () {
                var k = Date.now() - Q;
                window.scroll(0, z(P, D, k, X)),
                  k <= X ? s(Z) : typeof h == "function" && h();
              };
            s(Z);
          }
        }
        function K(w) {
          var h = e(d),
            P = h.css("position") === "fixed" ? h.outerHeight() : 0,
            D = w.offset().top - P;
          if (w.data("scroll") === "mid") {
            var X = i.height() - P,
              Q = w.outerHeight();
            Q < X && (D -= Math.round((X - Q) / 2));
          }
          return D;
        }
        function j(w, h, P) {
          if (q()) return 0;
          var D = 1;
          return (
            a.add(w).each(function (X, Q) {
              var Z = parseFloat(Q.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (D = Z);
            }),
            (472.143 * Math.log(Math.abs(h - P) + 125) - 2e3) * D
          );
        }
        function z(w, h, P, D) {
          return P > D ? h : w + (h - w) * $(P / D);
        }
        function $(w) {
          return w < 0.5
            ? 4 * w * w * w
            : (w - 1) * (2 * w - 2) * (2 * w - 2) + 1;
        }
        function B() {
          var { WF_CLICK_EMPTY: w, WF_CLICK_SCROLL: h } = t;
          o.on(h, g, U),
            o.on(w, y, function (P) {
              P.preventDefault();
            }),
            document.head.insertBefore(A, document.head.firstChild);
        }
        return { ready: B };
      })
    );
  });
  var N_ = c((Qj, L_) => {
    "use strict";
    var CV = Ge();
    CV.define(
      "touch",
      (L_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            y;
          o.addEventListener("touchstart", g, !1),
            o.addEventListener("touchmove", v, !1),
            o.addEventListener("touchend", A, !1),
            o.addEventListener("touchcancel", x, !1),
            o.addEventListener("mousedown", g, !1),
            o.addEventListener("mousemove", v, !1),
            o.addEventListener("mouseup", A, !1),
            o.addEventListener("mouseout", x, !1);
          function g(R) {
            var T = R.touches;
            (T && T.length > 1) ||
              ((a = !0),
              T ? ((s = !0), (d = T[0].clientX)) : (d = R.clientX),
              (y = d));
          }
          function v(R) {
            if (a) {
              if (s && R.type === "mousemove") {
                R.preventDefault(), R.stopPropagation();
                return;
              }
              var T = R.touches,
                q = T ? T[0].clientX : R.clientX,
                L = q - y;
              (y = q),
                Math.abs(L) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", R, { direction: L > 0 ? "right" : "left" }), x());
            }
          }
          function A(R) {
            if (a && ((a = !1), s && R.type === "mouseup")) {
              R.preventDefault(), R.stopPropagation(), (s = !1);
              return;
            }
          }
          function x() {
            a = !1;
          }
          function b() {
            o.removeEventListener("touchstart", g, !1),
              o.removeEventListener("touchmove", v, !1),
              o.removeEventListener("touchend", A, !1),
              o.removeEventListener("touchcancel", x, !1),
              o.removeEventListener("mousedown", g, !1),
              o.removeEventListener("mousemove", v, !1),
              o.removeEventListener("mouseup", A, !1),
              o.removeEventListener("mouseout", x, !1),
              (o = null);
          }
          this.destroy = b;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var M_ = c((Zj, q_) => {
    "use strict";
    var Gt = Ge(),
      RV = _r(),
      Qe = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      P_ = !0,
      LV = /^#[a-zA-Z0-9\-_]+$/;
    Gt.define(
      "dropdown",
      (q_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Gt.env(),
          o = !1,
          a,
          s = Gt.env.touch,
          u = ".w-dropdown",
          d = "w--open",
          y = RV.triggers,
          g = 900,
          v = "focusout" + u,
          A = "keydown" + u,
          x = "mouseenter" + u,
          b = "mousemove" + u,
          R = "mouseleave" + u,
          T = (s ? "click" : "mouseup") + u,
          q = "w-close" + u,
          L = "setting" + u,
          U = e(document),
          V;
        (n.ready = M),
          (n.design = function () {
            o && h(), (o = !1), M();
          }),
          (n.preview = function () {
            (o = !0), M();
          });
        function M() {
          (a = i && Gt.env("design")), (V = U.find(u)), V.each(K);
        }
        function K(l, F) {
          var G = e(F),
            S = e.data(F, u);
          S ||
            (S = e.data(F, u, {
              open: !1,
              el: G,
              config: {},
              selectedIdx: -1,
            })),
            (S.toggle = S.el.children(".w-dropdown-toggle")),
            (S.list = S.el.children(".w-dropdown-list")),
            (S.links = S.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (S.complete = X(S)),
            (S.mouseLeave = Z(S)),
            (S.mouseUpOutside = D(S)),
            (S.mouseMoveOutside = k(S)),
            j(S);
          var te = S.toggle.attr("id"),
            se = S.list.attr("id");
          te || (te = "w-dropdown-toggle-" + l),
            se || (se = "w-dropdown-list-" + l),
            S.toggle.attr("id", te),
            S.toggle.attr("aria-controls", se),
            S.toggle.attr("aria-haspopup", "menu"),
            S.toggle.attr("aria-expanded", "false"),
            S.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            S.toggle.prop("tagName") !== "BUTTON" &&
              (S.toggle.attr("role", "button"),
              S.toggle.attr("tabindex") || S.toggle.attr("tabindex", "0")),
            S.list.attr("id", se),
            S.list.attr("aria-labelledby", te),
            S.links.each(function (fe, ye) {
              ye.hasAttribute("tabindex") || ye.setAttribute("tabindex", "0"),
                LV.test(ye.hash) &&
                  ye.addEventListener("click", w.bind(null, S));
            }),
            S.el.off(u),
            S.toggle.off(u),
            S.nav && S.nav.off(u);
          var ne = $(S, P_);
          a && S.el.on(L, z(S)),
            a ||
              (i && ((S.hovering = !1), w(S)),
              S.config.hover && S.toggle.on(x, Q(S)),
              S.el.on(q, ne),
              S.el.on(A, W(S)),
              S.el.on(v, m(S)),
              S.toggle.on(T, ne),
              S.toggle.on(A, E(S)),
              (S.nav = S.el.closest(".w-nav")),
              S.nav.on(q, ne));
        }
        function j(l) {
          var F = Number(l.el.css("z-index"));
          (l.manageZ = F === g || F === g + 1),
            (l.config = {
              hover: l.el.attr("data-hover") === "true" && !s,
              delay: l.el.attr("data-delay"),
            });
        }
        function z(l) {
          return function (F, G) {
            (G = G || {}),
              j(l),
              G.open === !0 && B(l, !0),
              G.open === !1 && w(l, { immediate: !0 });
          };
        }
        function $(l, F) {
          return r(function (G) {
            if (l.open || (G && G.type === "w-close"))
              return w(l, { forceClose: F });
            B(l);
          });
        }
        function B(l) {
          if (!l.open) {
            P(l),
              (l.open = !0),
              l.list.addClass(d),
              l.toggle.addClass(d),
              l.toggle.attr("aria-expanded", "true"),
              y.intro(0, l.el[0]),
              Gt.redraw.up(),
              l.manageZ && l.el.css("z-index", g + 1);
            var F = Gt.env("editor");
            a || U.on(T, l.mouseUpOutside),
              l.hovering && !F && l.el.on(R, l.mouseLeave),
              l.hovering && F && U.on(b, l.mouseMoveOutside),
              window.clearTimeout(l.delayId);
          }
        }
        function w(l, { immediate: F, forceClose: G } = {}) {
          if (l.open && !(l.config.hover && l.hovering && !G)) {
            l.toggle.attr("aria-expanded", "false"), (l.open = !1);
            var S = l.config;
            if (
              (y.outro(0, l.el[0]),
              U.off(T, l.mouseUpOutside),
              U.off(b, l.mouseMoveOutside),
              l.el.off(R, l.mouseLeave),
              window.clearTimeout(l.delayId),
              !S.delay || F)
            )
              return l.complete();
            l.delayId = window.setTimeout(l.complete, S.delay);
          }
        }
        function h() {
          U.find(u).each(function (l, F) {
            e(F).triggerHandler(q);
          });
        }
        function P(l) {
          var F = l.el[0];
          V.each(function (G, S) {
            var te = e(S);
            te.is(F) || te.has(F).length || te.triggerHandler(q);
          });
        }
        function D(l) {
          return (
            l.mouseUpOutside && U.off(T, l.mouseUpOutside),
            r(function (F) {
              if (l.open) {
                var G = e(F.target);
                if (!G.closest(".w-dropdown-toggle").length) {
                  var S = e.inArray(l.el[0], G.parents(u)) === -1,
                    te = Gt.env("editor");
                  if (S) {
                    if (te) {
                      var se =
                          G.parents().length === 1 &&
                          G.parents("svg").length === 1,
                        ne = G.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (se || ne) return;
                    }
                    w(l);
                  }
                }
              }
            })
          );
        }
        function X(l) {
          return function () {
            l.list.removeClass(d),
              l.toggle.removeClass(d),
              l.manageZ && l.el.css("z-index", "");
          };
        }
        function Q(l) {
          return function () {
            (l.hovering = !0), B(l);
          };
        }
        function Z(l) {
          return function () {
            (l.hovering = !1), l.links.is(":focus") || w(l);
          };
        }
        function k(l) {
          return r(function (F) {
            if (l.open) {
              var G = e(F.target),
                S = e.inArray(l.el[0], G.parents(u)) === -1;
              if (S) {
                var te = G.parents(".w-editor-bem-EditorHoverControls").length,
                  se = G.parents(".w-editor-bem-RTToolbar").length,
                  ne = e(".w-editor-bem-EditorOverlay"),
                  fe =
                    ne.find(".w-editor-edit-outline").length ||
                    ne.find(".w-editor-bem-RTToolbar").length;
                if (te || se || fe) return;
                (l.hovering = !1), w(l);
              }
            }
          });
        }
        function W(l) {
          return function (F) {
            if (!(a || !l.open))
              switch (
                ((l.selectedIdx = l.links.index(document.activeElement)),
                F.keyCode)
              ) {
                case Qe.HOME:
                  return l.open
                    ? ((l.selectedIdx = 0), p(l), F.preventDefault())
                    : void 0;
                case Qe.END:
                  return l.open
                    ? ((l.selectedIdx = l.links.length - 1),
                      p(l),
                      F.preventDefault())
                    : void 0;
                case Qe.ESCAPE:
                  return w(l), l.toggle.focus(), F.stopPropagation();
                case Qe.ARROW_RIGHT:
                case Qe.ARROW_DOWN:
                  return (
                    (l.selectedIdx = Math.min(
                      l.links.length - 1,
                      l.selectedIdx + 1
                    )),
                    p(l),
                    F.preventDefault()
                  );
                case Qe.ARROW_LEFT:
                case Qe.ARROW_UP:
                  return (
                    (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)),
                    p(l),
                    F.preventDefault()
                  );
              }
          };
        }
        function p(l) {
          l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
        }
        function E(l) {
          var F = $(l, P_);
          return function (G) {
            if (!a) {
              if (!l.open)
                switch (G.keyCode) {
                  case Qe.ARROW_UP:
                  case Qe.ARROW_DOWN:
                    return G.stopPropagation();
                }
              switch (G.keyCode) {
                case Qe.SPACE:
                case Qe.ENTER:
                  return F(), G.stopPropagation(), G.preventDefault();
              }
            }
          };
        }
        function m(l) {
          return r(function (F) {
            var { relatedTarget: G, target: S } = F,
              te = l.el[0],
              se = te.contains(G) || te.contains(S);
            return se || w(l), F.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var D_ = c((Jj, F_) => {
    "use strict";
    var Cs = Ge();
    Cs.define(
      "forms",
      (F_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          d = /e(-)?mail/i,
          y = /^\S+@\S+$/,
          g = window.alert,
          v = Cs.env(),
          A,
          x,
          b,
          R = /list-manage[1-9]?.com/i,
          T = t.debounce(function () {
            g(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              q(), !v && !A && U();
            };
        function q() {
          (u = e("html").attr("data-wf-site")),
            (x = "https://webflow.com/api/v1/form/" + u),
            a &&
              x.indexOf("https://webflow.com") >= 0 &&
              (x = x.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (b = `${x}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(L);
        }
        function L(k, W) {
          var p = e(W),
            E = e.data(W, s);
          E || (E = e.data(W, s, { form: p })), V(E);
          var m = p.closest("div.w-form");
          (E.done = m.find("> .w-form-done")),
            (E.fail = m.find("> .w-form-fail")),
            (E.fileUploads = m.find(".w-file-upload")),
            E.fileUploads.each(function (G) {
              X(G, E);
            });
          var l =
            E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
          E.done.attr("aria-label") || E.form.attr("aria-label", l),
            E.done.attr("tabindex", "-1"),
            E.done.attr("role", "region"),
            E.done.attr("aria-label") ||
              E.done.attr("aria-label", l + " success"),
            E.fail.attr("tabindex", "-1"),
            E.fail.attr("role", "region"),
            E.fail.attr("aria-label") ||
              E.fail.attr("aria-label", l + " failure");
          var F = (E.action = p.attr("action"));
          if (
            ((E.handler = null),
            (E.redirect = p.attr("data-redirect")),
            R.test(F))
          ) {
            E.handler = h;
            return;
          }
          if (!F) {
            if (u) {
              E.handler = w;
              return;
            }
            T();
          }
        }
        function U() {
          (A = !0),
            n.on("submit", s + " form", function (G) {
              var S = e.data(this, s);
              S.handler && ((S.evt = G), S.handler(S));
            });
          let k = ".w-checkbox-input",
            W = ".w-radio-input",
            p = "w--redirected-checked",
            E = "w--redirected-focus",
            m = "w--redirected-focus-visible",
            l = ":focus-visible, [data-wf-focus-visible]",
            F = [
              ["checkbox", k],
              ["radio", W],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + k + ")",
            (G) => {
              e(G.target).siblings(k).toggleClass(p);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (G) => {
              e(`input[name="${G.target.name}"]:not(${k})`).map((te, se) =>
                e(se).siblings(W).removeClass(p)
              );
              let S = e(G.target);
              S.hasClass("w-radio-input") || S.siblings(W).addClass(p);
            }),
            F.forEach(([G, S]) => {
              n.on(
                "focus",
                s + ` form input[type="${G}"]:not(` + S + ")",
                (te) => {
                  e(te.target).siblings(S).addClass(E),
                    e(te.target).filter(l).siblings(S).addClass(m);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${G}"]:not(` + S + ")",
                  (te) => {
                    e(te.target).siblings(S).removeClass(`${E} ${m}`);
                  }
                );
            });
        }
        function V(k) {
          var W = (k.btn = k.form.find(':input[type="submit"]'));
          (k.wait = k.btn.attr("data-wait") || null),
            (k.success = !1),
            W.prop("disabled", !1),
            k.label && W.val(k.label);
        }
        function M(k) {
          var W = k.btn,
            p = k.wait;
          W.prop("disabled", !0), p && ((k.label = W.val()), W.val(p));
        }
        function K(k, W) {
          var p = null;
          return (
            (W = W || {}),
            k
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (E, m) {
                var l = e(m),
                  F = l.attr("type"),
                  G =
                    l.attr("data-name") || l.attr("name") || "Field " + (E + 1);
                G = encodeURIComponent(G);
                var S = l.val();
                if (F === "checkbox") S = l.is(":checked");
                else if (F === "radio") {
                  if (W[G] === null || typeof W[G] == "string") return;
                  S =
                    k
                      .find('input[name="' + l.attr("name") + '"]:checked')
                      .val() || null;
                }
                typeof S == "string" && (S = e.trim(S)),
                  (W[G] = S),
                  (p = p || B(l, F, G, S));
              }),
            p
          );
        }
        function j(k) {
          var W = {};
          return (
            k.find(':input[type="file"]').each(function (p, E) {
              var m = e(E),
                l = m.attr("data-name") || m.attr("name") || "File " + (p + 1),
                F = m.attr("data-value");
              typeof F == "string" && (F = e.trim(F)), (W[l] = F);
            }),
            W
          );
        }
        let z = { _mkto_trk: "marketo" };
        function $() {
          return document.cookie.split("; ").reduce(function (W, p) {
            let E = p.split("="),
              m = E[0];
            if (m in z) {
              let l = z[m],
                F = E.slice(1).join("=");
              W[l] = F;
            }
            return W;
          }, {});
        }
        function B(k, W, p, E) {
          var m = null;
          return (
            W === "password"
              ? (m = "Passwords cannot be submitted.")
              : k.attr("required")
              ? E
                ? d.test(k.attr("type")) &&
                  (y.test(E) ||
                    (m = "Please enter a valid email address for: " + p))
                : (m = "Please fill out the required field: " + p)
              : p === "g-recaptcha-response" &&
                !E &&
                (m = "Please confirm you\u2019re not a robot."),
            m
          );
        }
        function w(k) {
          D(k), P(k);
        }
        function h(k) {
          V(k);
          var W = k.form,
            p = {};
          if (/^https/.test(o.href) && !/^https/.test(k.action)) {
            W.attr("method", "post");
            return;
          }
          D(k);
          var E = K(W, p);
          if (E) return g(E);
          M(k);
          var m;
          t.each(p, function (S, te) {
            d.test(te) && (p.EMAIL = S),
              /^((full[ _-]?)?name)$/i.test(te) && (m = S),
              /^(first[ _-]?name)$/i.test(te) && (p.FNAME = S),
              /^(last[ _-]?name)$/i.test(te) && (p.LNAME = S);
          }),
            m &&
              !p.FNAME &&
              ((m = m.split(" ")),
              (p.FNAME = m[0]),
              (p.LNAME = p.LNAME || m[1]));
          var l = k.action.replace("/post?", "/post-json?") + "&c=?",
            F = l.indexOf("u=") + 2;
          F = l.substring(F, l.indexOf("&", F));
          var G = l.indexOf("id=") + 3;
          (G = l.substring(G, l.indexOf("&", G))),
            (p["b_" + F + "_" + G] = ""),
            e
              .ajax({ url: l, data: p, dataType: "jsonp" })
              .done(function (S) {
                (k.success = S.result === "success" || /already/.test(S.msg)),
                  k.success || console.info("MailChimp error: " + S.msg),
                  P(k);
              })
              .fail(function () {
                P(k);
              });
        }
        function P(k) {
          var W = k.form,
            p = k.redirect,
            E = k.success;
          if (E && p) {
            Cs.location(p);
            return;
          }
          k.done.toggle(E),
            k.fail.toggle(!E),
            E ? k.done.focus() : k.fail.focus(),
            W.toggle(!E),
            V(k);
        }
        function D(k) {
          k.evt && k.evt.preventDefault(), (k.evt = null);
        }
        function X(k, W) {
          if (!W.fileUploads || !W.fileUploads[k]) return;
          var p,
            E = e(W.fileUploads[k]),
            m = E.find("> .w-file-upload-default"),
            l = E.find("> .w-file-upload-uploading"),
            F = E.find("> .w-file-upload-success"),
            G = E.find("> .w-file-upload-error"),
            S = m.find(".w-file-upload-input"),
            te = m.find(".w-file-upload-label"),
            se = te.children(),
            ne = G.find(".w-file-upload-error-msg"),
            fe = F.find(".w-file-upload-file"),
            ye = F.find(".w-file-remove-link"),
            ke = fe.find(".w-file-upload-file-name"),
            Ze = ne.attr("data-w-size-error"),
            we = ne.attr("data-w-type-error"),
            lt = ne.attr("data-w-generic-error");
          if (
            (v ||
              te.on("click keydown", function (I) {
                (I.type === "keydown" && I.which !== 13 && I.which !== 32) ||
                  (I.preventDefault(), S.click());
              }),
            te.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            ye.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            v)
          )
            S.on("click", function (I) {
              I.preventDefault();
            }),
              te.on("click", function (I) {
                I.preventDefault();
              }),
              se.on("click", function (I) {
                I.preventDefault();
              });
          else {
            ye.on("click keydown", function (I) {
              if (I.type === "keydown") {
                if (I.which !== 13 && I.which !== 32) return;
                I.preventDefault();
              }
              S.removeAttr("data-value"),
                S.val(""),
                ke.html(""),
                m.toggle(!0),
                F.toggle(!1),
                te.focus();
            }),
              S.on("change", function (I) {
                (p = I.target && I.target.files && I.target.files[0]),
                  p &&
                    (m.toggle(!1),
                    G.toggle(!1),
                    l.toggle(!0),
                    l.focus(),
                    ke.text(p.name),
                    C() || M(W),
                    (W.fileUploads[k].uploading = !0),
                    Q(p, _));
              });
            var Ut = te.outerHeight();
            S.height(Ut), S.width(1);
          }
          function f(I) {
            var N = I.responseJSON && I.responseJSON.msg,
              Y = lt;
            typeof N == "string" && N.indexOf("InvalidFileTypeError") === 0
              ? (Y = we)
              : typeof N == "string" &&
                N.indexOf("MaxFileSizeError") === 0 &&
                (Y = Ze),
              ne.text(Y),
              S.removeAttr("data-value"),
              S.val(""),
              l.toggle(!1),
              m.toggle(!0),
              G.toggle(!0),
              G.focus(),
              (W.fileUploads[k].uploading = !1),
              C() || V(W);
          }
          function _(I, N) {
            if (I) return f(I);
            var Y = N.fileName,
              ee = N.postData,
              le = N.fileId,
              H = N.s3Url;
            S.attr("data-value", le), Z(H, ee, p, Y, O);
          }
          function O(I) {
            if (I) return f(I);
            l.toggle(!1),
              F.css("display", "inline-block"),
              F.focus(),
              (W.fileUploads[k].uploading = !1),
              C() || V(W);
          }
          function C() {
            var I = (W.fileUploads && W.fileUploads.toArray()) || [];
            return I.some(function (N) {
              return N.uploading;
            });
          }
        }
        function Q(k, W) {
          var p = new URLSearchParams({ name: k.name, size: k.size });
          e.ajax({ type: "GET", url: `${b}?${p}`, crossDomain: !0 })
            .done(function (E) {
              W(null, E);
            })
            .fail(function (E) {
              W(E);
            });
        }
        function Z(k, W, p, E, m) {
          var l = new FormData();
          for (var F in W) l.append(F, W[F]);
          l.append("file", p, E),
            e
              .ajax({
                type: "POST",
                url: k,
                data: l,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                m(null);
              })
              .fail(function (G) {
                m(G);
              });
        }
        return r;
      })
    );
  });
  var U_ = c((ez, G_) => {
    "use strict";
    var wt = Ge(),
      NV = _r(),
      ct = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      k_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    wt.define(
      "slider",
      (G_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = wt.env(),
          u = ".w-slider",
          d = '<div class="w-slider-dot" data-wf-ignore />',
          y =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          g = "w-slider-force-show",
          v = NV.triggers,
          A,
          x = !1;
        (r.ready = function () {
          (a = wt.env("design")), b();
        }),
          (r.design = function () {
            (a = !0), setTimeout(b, 1e3);
          }),
          (r.preview = function () {
            (a = !1), b();
          }),
          (r.redraw = function () {
            (x = !0), b(), (x = !1);
          }),
          (r.destroy = R);
        function b() {
          (o = i.find(u)), o.length && (o.each(L), !A && (R(), T()));
        }
        function R() {
          wt.resize.off(q), wt.redraw.off(r.redraw);
        }
        function T() {
          wt.resize.on(q), wt.redraw.on(r.redraw);
        }
        function q() {
          o.filter(":visible").each(X);
        }
        function L(p, E) {
          var m = e(E),
            l = e.data(E, u);
          l ||
            (l = e.data(E, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: m,
              config: {},
            })),
            (l.mask = m.children(".w-slider-mask")),
            (l.left = m.children(".w-slider-arrow-left")),
            (l.right = m.children(".w-slider-arrow-right")),
            (l.nav = m.children(".w-slider-nav")),
            (l.slides = l.mask.children(".w-slide")),
            l.slides.each(v.reset),
            x && (l.maskWidth = 0),
            m.attr("role") === void 0 && m.attr("role", "region"),
            m.attr("aria-label") === void 0 && m.attr("aria-label", "carousel");
          var F = l.mask.attr("id");
          if (
            (F || ((F = "w-slider-mask-" + p), l.mask.attr("id", F)),
            !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(y).appendTo(l.mask)),
            l.left.attr("role", "button"),
            l.left.attr("tabindex", "0"),
            l.left.attr("aria-controls", F),
            l.left.attr("aria-label") === void 0 &&
              l.left.attr("aria-label", "previous slide"),
            l.right.attr("role", "button"),
            l.right.attr("tabindex", "0"),
            l.right.attr("aria-controls", F),
            l.right.attr("aria-label") === void 0 &&
              l.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            l.left.hide(), l.right.hide(), l.nav.hide(), (A = !0);
            return;
          }
          l.el.off(u),
            l.left.off(u),
            l.right.off(u),
            l.nav.off(u),
            U(l),
            a
              ? (l.el.on("setting" + u, h(l)), w(l), (l.hasTimer = !1))
              : (l.el.on("swipe" + u, h(l)),
                l.left.on("click" + u, j(l)),
                l.right.on("click" + u, z(l)),
                l.left.on("keydown" + u, K(l, j)),
                l.right.on("keydown" + u, K(l, z)),
                l.nav.on("keydown" + u, "> div", h(l)),
                l.config.autoplay &&
                  !l.hasTimer &&
                  ((l.hasTimer = !0), (l.timerCount = 1), B(l)),
                l.el.on("mouseenter" + u, M(l, !0, "mouse")),
                l.el.on("focusin" + u, M(l, !0, "keyboard")),
                l.el.on("mouseleave" + u, M(l, !1, "mouse")),
                l.el.on("focusout" + u, M(l, !1, "keyboard"))),
            l.nav.on("click" + u, "> div", h(l)),
            s ||
              l.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var G = m.filter(":hidden");
          G.addClass(g);
          var S = m.parents(":hidden");
          S.addClass(g), x || X(p, E), G.removeClass(g), S.removeClass(g);
        }
        function U(p) {
          var E = {};
          (E.crossOver = 0),
            (E.animation = p.el.attr("data-animation") || "slide"),
            E.animation === "outin" &&
              ((E.animation = "cross"), (E.crossOver = 0.5)),
            (E.easing = p.el.attr("data-easing") || "ease");
          var m = p.el.attr("data-duration");
          if (
            ((E.duration = m != null ? parseInt(m, 10) : 500),
            V(p.el.attr("data-infinite")) && (E.infinite = !0),
            V(p.el.attr("data-disable-swipe")) && (E.disableSwipe = !0),
            V(p.el.attr("data-hide-arrows"))
              ? (E.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            V(p.el.attr("data-autoplay")))
          ) {
            (E.autoplay = !0),
              (E.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (E.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var l = "mousedown" + u + " touchstart" + u;
            a ||
              p.el.off(l).one(l, function () {
                w(p);
              });
          }
          var F = p.right.width();
          (E.edge = F ? F + 40 : 100), (p.config = E);
        }
        function V(p) {
          return p === "1" || p === "true";
        }
        function M(p, E, m) {
          return function (l) {
            if (E) p.hasFocus[m] = E;
            else if (
              e.contains(p.el.get(0), l.relatedTarget) ||
              ((p.hasFocus[m] = E),
              (p.hasFocus.mouse && m === "keyboard") ||
                (p.hasFocus.keyboard && m === "mouse"))
            )
              return;
            E
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && w(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && B(p));
          };
        }
        function K(p, E) {
          return function (m) {
            switch (m.keyCode) {
              case ct.SPACE:
              case ct.ENTER:
                return E(p)(), m.preventDefault(), m.stopPropagation();
            }
          };
        }
        function j(p) {
          return function () {
            D(p, { index: p.index - 1, vector: -1 });
          };
        }
        function z(p) {
          return function () {
            D(p, { index: p.index + 1, vector: 1 });
          };
        }
        function $(p, E) {
          var m = null;
          E === p.slides.length && (b(), Q(p)),
            t.each(p.anchors, function (l, F) {
              e(l.els).each(function (G, S) {
                e(S).index() === E && (m = F);
              });
            }),
            m != null && D(p, { index: m, immediate: !0 });
        }
        function B(p) {
          w(p);
          var E = p.config,
            m = E.timerMax;
          (m && p.timerCount++ > m) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || (z(p)(), B(p));
            }, E.delay));
        }
        function w(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function h(p) {
          return function (E, m) {
            m = m || {};
            var l = p.config;
            if (a && E.type === "setting") {
              if (m.select === "prev") return j(p)();
              if (m.select === "next") return z(p)();
              if ((U(p), Q(p), m.select == null)) return;
              $(p, m.select);
              return;
            }
            if (E.type === "swipe")
              return l.disableSwipe || wt.env("editor")
                ? void 0
                : m.direction === "left"
                ? z(p)()
                : m.direction === "right"
                ? j(p)()
                : void 0;
            if (p.nav.has(E.target).length) {
              var F = e(E.target).index();
              if (
                (E.type === "click" && D(p, { index: F }), E.type === "keydown")
              )
                switch (E.keyCode) {
                  case ct.ENTER:
                  case ct.SPACE: {
                    D(p, { index: F }), E.preventDefault();
                    break;
                  }
                  case ct.ARROW_LEFT:
                  case ct.ARROW_UP: {
                    P(p.nav, Math.max(F - 1, 0)), E.preventDefault();
                    break;
                  }
                  case ct.ARROW_RIGHT:
                  case ct.ARROW_DOWN: {
                    P(p.nav, Math.min(F + 1, p.pages)), E.preventDefault();
                    break;
                  }
                  case ct.HOME: {
                    P(p.nav, 0), E.preventDefault();
                    break;
                  }
                  case ct.END: {
                    P(p.nav, p.pages), E.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function P(p, E) {
          var m = p.children().eq(E).focus();
          p.children().not(m);
        }
        function D(p, E) {
          E = E || {};
          var m = p.config,
            l = p.anchors;
          p.previous = p.index;
          var F = E.index,
            G = {};
          F < 0
            ? ((F = l.length - 1),
              m.infinite &&
                ((G.x = -p.endX), (G.from = 0), (G.to = l[0].width)))
            : F >= l.length &&
              ((F = 0),
              m.infinite &&
                ((G.x = l[l.length - 1].width),
                (G.from = -l[l.length - 1].x),
                (G.to = G.from - G.x))),
            (p.index = F);
          var S = p.nav
            .children()
            .eq(F)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(S)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            m.hideArrows &&
              (p.index === l.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var te = p.offsetX || 0,
            se = (p.offsetX = -l[p.index].x),
            ne = { x: se, opacity: 1, visibility: "" },
            fe = e(l[p.index].els),
            ye = e(l[p.previous] && l[p.previous].els),
            ke = p.slides.not(fe),
            Ze = m.animation,
            we = m.easing,
            lt = Math.round(m.duration),
            Ut = E.vector || (p.index > p.previous ? 1 : -1),
            f = "opacity " + lt + "ms " + we,
            _ = "transform " + lt + "ms " + we;
          if (
            (fe.find(k_).removeAttr("tabindex"),
            fe.removeAttr("aria-hidden"),
            fe.find("*").removeAttr("aria-hidden"),
            ke.find(k_).attr("tabindex", "-1"),
            ke.attr("aria-hidden", "true"),
            ke.find("*").attr("aria-hidden", "true"),
            a || (fe.each(v.intro), ke.each(v.outro)),
            E.immediate && !x)
          ) {
            n(fe).set(ne), I();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${F + 1} of ${l.length}.`),
            Ze === "cross")
          ) {
            var O = Math.round(lt - lt * m.crossOver),
              C = Math.round(lt - O);
            (f = "opacity " + O + "ms " + we),
              n(ye).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(fe)
                .set({ visibility: "", x: se, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .wait(C)
                .then({ opacity: 1 })
                .then(I);
            return;
          }
          if (Ze === "fade") {
            n(ye).set({ visibility: "" }).stop(),
              n(fe)
                .set({ visibility: "", x: se, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(I);
            return;
          }
          if (Ze === "over") {
            (ne = { x: p.endX }),
              n(ye).set({ visibility: "" }).stop(),
              n(fe)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: se + l[p.index].width * Ut,
                })
                .add(_)
                .start({ x: se })
                .then(I);
            return;
          }
          m.infinite && G.x
            ? (n(p.slides.not(ye))
                .set({ visibility: "", x: G.x })
                .add(_)
                .start({ x: se }),
              n(ye)
                .set({ visibility: "", x: G.from })
                .add(_)
                .start({ x: G.to }),
              (p.shifted = ye))
            : (m.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: te }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(_).start({ x: se }));
          function I() {
            (fe = e(l[p.index].els)),
              (ke = p.slides.not(fe)),
              Ze !== "slide" && (ne.visibility = "hidden"),
              n(ke).set(ne);
          }
        }
        function X(p, E) {
          var m = e.data(E, u);
          if (m) {
            if (k(m)) return Q(m);
            a && W(m) && Q(m);
          }
        }
        function Q(p) {
          var E = 1,
            m = 0,
            l = 0,
            F = 0,
            G = p.maskWidth,
            S = G - p.config.edge;
          S < 0 && (S = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (se, ne) {
              l - m > S &&
                (E++,
                (m += G),
                (p.anchors[E - 1] = { els: [], x: l, width: 0 })),
                (F = e(ne).outerWidth(!0)),
                (l += F),
                (p.anchors[E - 1].width += F),
                p.anchors[E - 1].els.push(ne);
              var fe = se + 1 + " of " + p.slides.length;
              e(ne).attr("aria-label", fe), e(ne).attr("role", "group");
            }),
            (p.endX = l),
            a && (p.pages = null),
            p.nav.length && p.pages !== E && ((p.pages = E), Z(p));
          var te = p.index;
          te >= E && (te = E - 1), D(p, { immediate: !0, index: te });
        }
        function Z(p) {
          var E = [],
            m,
            l = p.el.attr("data-nav-spacing");
          l && (l = parseFloat(l) + "px");
          for (var F = 0, G = p.pages; F < G; F++)
            (m = e(d)),
              m
                .attr("aria-label", "Show slide " + (F + 1) + " of " + G)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && m.text(F + 1),
              l != null && m.css({ "margin-left": l, "margin-right": l }),
              E.push(m);
          p.nav.empty().append(E);
        }
        function k(p) {
          var E = p.mask.width();
          return p.maskWidth !== E ? ((p.maskWidth = E), !0) : !1;
        }
        function W(p) {
          var E = 0;
          return (
            p.slides.each(function (m, l) {
              E += e(l).outerWidth(!0);
            }),
            p.slidesWidth !== E ? ((p.slidesWidth = E), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var B_ = c((tz, V_) => {
    "use strict";
    var xt = Ge(),
      PV = _r();
    xt.define(
      "tabs",
      (V_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = xt.env,
          s = a.safari,
          u = a(),
          TabWTab = "data-w-tab",
          y = "data-w-pane",
          g = ".w-tabs",
          v = "w--current",
          A = "w--tab-active",
          x = PV.triggers,
          b = !1;
        (t.ready = t.design = t.preview = R),
          (t.redraw = function () {
            (b = !0), R(), (b = !1);
          }),
          (t.destroy = function () {
            (i = n.find(g)), i.length && (i.each(L), T());
          });
        function R() {
          (o = u && xt.env("design")),
            (i = n.find(g)),
            i.length &&
              (i.each(U), xt.env("preview") && !b && i.each(L), T(), q());
        }
        function T() {
          xt.redraw.off(t.redraw);
        }
        function q() {
          xt.redraw.on(t.redraw);
        }
        function L(B, w) {
          var h = e.data(w, g);
          h &&
            (h.links && h.links.each(x.reset),
            h.panes && h.panes.each(x.reset));
        }
        function U(B, w) {
          var h = g.substr(1) + "-" + B,
            P = e(w),
            D = e.data(w, g);
          if (
            (D || (D = e.data(w, g, { el: P, config: {} })),
            (D.current = null),
            (D.tabIdentifier = h + "-" + TabWTab),
            (D.paneIdentifier = h + "-" + y),
            (D.menu = P.children(".w-tab-menu")),
            (D.links = D.menu.children(".w-tab-link")),
            (D.content = P.children(".w-tab-content")),
            (D.panes = D.content.children(".w-tab-pane")),
            D.el.off(g),
            D.links.off(g),
            D.menu.attr("role", "tablist"),
            D.links.attr("tabindex", "-1"),
            V(D),
            !o)
          ) {
            D.links.on("click" + g, K(D)), D.links.on("keydown" + g, j(D));
            var X = D.links.filter("." + v),
              Q = X.attr(TabWTab);
            Q && z(D, { tab: Q, immediate: !0 });
          }
        }
        function V(B) {
          var w = {};
          w.easing = B.el.attr("data-easing") || "ease";
          var h = parseInt(B.el.attr("data-duration-in"), 10);
          h = w.intro = h === h ? h : 0;
          var P = parseInt(B.el.attr("data-duration-out"), 10);
          (P = w.outro = P === P ? P : 0),
            (w.immediate = !h && !P),
            (B.config = w);
        }
        function M(B) {
          var w = B.current;
          return Array.prototype.findIndex.call(
            B.links,
            (h) => h.getAttribute(TabWTab) === w,
            null
          );
        }
        function K(B) {
          return function (w) {
            w.preventDefault();
            var h = w.currentTarget.getAttribute(TabWTab);
            h && z(B, { tab: h });
          };
        }
        function j(B) {
          return function (w) {
            var h = M(B),
              P = w.key,
              D = {
                ArrowLeft: h - 1,
                ArrowUp: h - 1,
                ArrowRight: h + 1,
                ArrowDown: h + 1,
                End: B.links.length - 1,
                Home: 0,
              };
            if (P in D) {
              w.preventDefault();
              var X = D[P];
              X === -1 && (X = B.links.length - 1),
                X === B.links.length && (X = 0);
              var Q = B.links[X],
                Z = Q.getAttribute(TabWTab);
              Z && z(B, { tab: Z });
            }
          };
        }
        function z(B, w) {
          w = w || {};
          var h = B.config,
            P = h.easing,
            D = w.tab;
          if (D !== B.current) {
            B.current = D;
            var X;
            B.links.each(function (m, l) {
              var F = e(l);
              if (w.immediate || h.immediate) {
                var G = B.panes[m];
                l.id || (l.id = B.tabIdentifier + "-" + m),
                  G.id || (G.id = B.paneIdentifier + "-" + m),
                  (l.href = "#" + G.id),
                  l.setAttribute("role", "tab"),
                  l.setAttribute("aria-controls", G.id),
                  l.setAttribute("aria-selected", "false"),
                  G.setAttribute("role", "tabpanel"),
                  G.setAttribute("aria-labelledby", l.id);
              }
              l.getAttribute(TabWTab) === D
                ? ((X = l),
                  F.addClass(v)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(x.intro))
                : F.hasClass(v) &&
                  F.removeClass(v)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(x.outro);
            });
            var Q = [],
              Z = [];
            B.panes.each(function (m, l) {
              var F = e(l);
              l.getAttribute(TabWTab) === D ? Q.push(l) : F.hasClass(A) && Z.push(l);
            });
            var k = e(Q),
              W = e(Z);
            if (w.immediate || h.immediate) {
              k.addClass(A).each(x.intro),
                W.removeClass(A),
                b || xt.redraw.up();
              return;
            } else {
              var p = window.scrollX,
                E = window.scrollY;
              X.focus(), window.scrollTo(p, E);
            }
            W.length && h.outro
              ? (W.each(x.outro),
                r(W)
                  .add("opacity " + h.outro + "ms " + P, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => $(h, W, k)))
              : $(h, W, k);
          }
        }
        function $(B, w, h) {
          if (
            (w
              .removeClass(A)
              .css({
                opacity: "",
                transition: "",
                transform: "",
                width: "",
                height: "",
              }),
            h.addClass(A).each(x.intro),
            xt.redraw.up(),
            !B.intro)
          )
            return r(h).set({ opacity: 1 });
          r(h)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + B.intro + "ms " + B.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Xs();
  Hs();
  Ks();
  _r();
  w_();
  S_();
  R_();
  N_();
  M_();
  D_();
  U_();
  B_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|b5467d06-57b6-3f0c-8671-7111a7bfb18d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|b5467d06-57b6-3f0c-8671-7111a7bfb18d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718121116632,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|0c3b3996-f50a-ab1b-ebf6-db3dbb329dc2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|0c3b3996-f50a-ab1b-ebf6-db3dbb329dc2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718224379802,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|e3044a04-c27d-165f-cf94-560858ea9d9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|e3044a04-c27d-165f-cf94-560858ea9d9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718224463865,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|b72d066f-b007-dcba-0fa4-5040ab0d57c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|b72d066f-b007-dcba-0fa4-5040ab0d57c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718226568895,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|81a62940-0fab-7376-f188-e8e6e41d1dab",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|81a62940-0fab-7376-f188-e8e6e41d1dab",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719325842747,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|ce1106bb-b83e-4bcb-cd52-0d4a1c21639e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|ce1106bb-b83e-4bcb-cd52-0d4a1c21639e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719334038053,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|c23e07fc-9f51-5575-6b51-e334b557bb7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|c23e07fc-9f51-5575-6b51-e334b557bb7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719506520699,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|09d3afba-611c-9719-0ded-d9964277b1f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|09d3afba-611c-9719-0ded-d9964277b1f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719507199204,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|bcfbfa1d-902c-3f2e-4d1e-fc1c32433294",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|bcfbfa1d-902c-3f2e-4d1e-fc1c32433294",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719936530221,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|bcfbfa1d-902c-3f2e-4d1e-fc1c324333b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|bcfbfa1d-902c-3f2e-4d1e-fc1c324333b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719936530221,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|e67066cf-538b-3403-9934-949c8022b7dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|e67066cf-538b-3403-9934-949c8022b7dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719939149945,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|02245eb5-7a25-52bf-aea9-f66a00f4080e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|02245eb5-7a25-52bf-aea9-f66a00f4080e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719943189421,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|384aa25c-50fd-d209-8ecc-6c44bcdafca3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|384aa25c-50fd-d209-8ecc-6c44bcdafca3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719945792179,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|41e84024-aea0-a65c-de11-1a1c3698c686",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|41e84024-aea0-a65c-de11-1a1c3698c686",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720017243309,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|b837c669-b3d4-92a2-da1f-538423537606",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|b837c669-b3d4-92a2-da1f-538423537606",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720018198743,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|56368065-5e7c-880e-bbec-7fdcaaa9d298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|56368065-5e7c-880e-bbec-7fdcaaa9d298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720019337319,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|999f5eca-a277-eb04-222e-773b6156770d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|999f5eca-a277-eb04-222e-773b6156770d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030727938,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|999f5eca-a277-eb04-222e-773b61567832",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|999f5eca-a277-eb04-222e-773b61567832",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030727938,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|b0676c00-ce71-9a0d-9679-deb7bb0d3d80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|b0676c00-ce71-9a0d-9679-deb7bb0d3d80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030736874,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|b0676c00-ce71-9a0d-9679-deb7bb0d3ea5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|b0676c00-ce71-9a0d-9679-deb7bb0d3ea5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030736874,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-110",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|fbfd1e88-7a79-caee-1f83-9a30ffb0da32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|fbfd1e88-7a79-caee-1f83-9a30ffb0da32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030740081,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|fbfd1e88-7a79-caee-1f83-9a30ffb0db57",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|fbfd1e88-7a79-caee-1f83-9a30ffb0db57",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030740081,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|f15e6aa8-80a5-885b-47e6-bdde292a486f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|f15e6aa8-80a5-885b-47e6-bdde292a486f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030744166,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|f15e6aa8-80a5-885b-47e6-bdde292a4994",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|f15e6aa8-80a5-885b-47e6-bdde292a4994",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030744166,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|96a44c7f-a1d4-fb42-13ed-ef49b09570b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|96a44c7f-a1d4-fb42-13ed-ef49b09570b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030747037,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|96a44c7f-a1d4-fb42-13ed-ef49b09571de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|96a44c7f-a1d4-fb42-13ed-ef49b09571de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030747037,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|73fbd3e2-f080-6b71-b3fb-f74cb38eaebc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|73fbd3e2-f080-6b71-b3fb-f74cb38eaebc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030750946,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|73fbd3e2-f080-6b71-b3fb-f74cb38eafe1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|73fbd3e2-f080-6b71-b3fb-f74cb38eafe1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030750946,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-126",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|99f75b63-085e-cbc6-e51f-19412400eb98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|99f75b63-085e-cbc6-e51f-19412400eb98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030754268,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-128",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|99f75b63-085e-cbc6-e51f-19412400ecbd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|99f75b63-085e-cbc6-e51f-19412400ecbd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030754268,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-130",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|c751e62c-4322-0334-2ca1-0e1c965809ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|c751e62c-4322-0334-2ca1-0e1c965809ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030758253,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-132",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|c751e62c-4322-0334-2ca1-0e1c96580b11",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|c751e62c-4322-0334-2ca1-0e1c96580b11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030758253,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|fc44c72a-de70-acd7-e807-63db919806ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|fc44c72a-de70-acd7-e807-63db919806ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030761435,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|fc44c72a-de70-acd7-e807-63db919807d3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|fc44c72a-de70-acd7-e807-63db919807d3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720030761435,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|141b29d7-d483-4884-c566-d9dcdd8411c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|141b29d7-d483-4884-c566-d9dcdd8411c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720032534356,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-140",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|54d9df85-47e4-d773-aea6-21a6c89367e5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|54d9df85-47e4-d773-aea6-21a6c89367e5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720032712687,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|0c8b0ed1-9b22-ca59-d051-6f0c2f4119d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|0c8b0ed1-9b22-ca59-d051-6f0c2f4119d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720033581777,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|5d32aaa5-3991-c2a2-996f-170e13fa7995",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|5d32aaa5-3991-c2a2-996f-170e13fa7995",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720033584255,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-154",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|edc3bf61-0237-5008-6f98-029b3c702fb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|edc3bf61-0237-5008-6f98-029b3c702fb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720033585818,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|5d5cb4be-180f-ea97-dd4c-041ddb474639",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|5d5cb4be-180f-ea97-dd4c-041ddb474639",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720033587293,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ece47",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ece47",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720109057566,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-160",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ece5e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ece5e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720109057566,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-162",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ece75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ece75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720109057566,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ece8c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ece8c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720109057566,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ecea3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6ecea3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720109057566,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6eceac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6eceac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720109057566,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6eceb2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|1b2dd4bd-3dc5-91c2-daaf-5b0e3d6eceb2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720110520314,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|ca43c43d-f65c-ee43-f09a-494aa8c14b82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|ca43c43d-f65c-ee43-f09a-494aa8c14b82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720111822904,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|384aa25c-50fd-d209-8ecc-6c44bcdaff07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|384aa25c-50fd-d209-8ecc-6c44bcdaff07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720115405821,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-176",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|3edecb80-bf3c-ccc7-25d1-b9f567a61b6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|3edecb80-bf3c-ccc7-25d1-b9f567a61b6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720457782034,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|38da839a-c60c-a6ac-b20e-3a49b3d72d72",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|38da839a-c60c-a6ac-b20e-3a49b3d72d72",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720457811599,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|427ba20b-e049-264b-c606-374595b8437c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|427ba20b-e049-264b-c606-374595b8437c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720457835968,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-182",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|6f123ec2-ea39-4741-f1cd-a70ca457d7be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|6f123ec2-ea39-4741-f1cd-a70ca457d7be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720457900088,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-184",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|ccd52b69-2c4a-143d-5d2b-a3336985b2cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|ccd52b69-2c4a-143d-5d2b-a3336985b2cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720457906355,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-186",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|653f6664-acbe-9d9e-6a3f-eaad9b2e41c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|653f6664-acbe-9d9e-6a3f-eaad9b2e41c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720457925805,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-188",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c711fa2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c711fa2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-190",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c711fc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c711fc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-192",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7120ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7120ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-194",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7120fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7120fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-195": {
      id: "e-195",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-196",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712221",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712221",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-197": {
      id: "e-197",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-198",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712233",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712233",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-200",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712358",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712358",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-202",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71236a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71236a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-204",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71248f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71248f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-206",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7124a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7124a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7125c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7125c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-210",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7125d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7125d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-212",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7126fd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c7126fd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-214",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71270f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71270f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712834",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712834",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712846",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712846",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71296b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71296b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-222",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71297d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71297d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-224",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712aa2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712aa2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-226",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712ab4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712ab4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-228",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712bd9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712bd9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-229": {
      id: "e-229",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-230",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712bf6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712bf6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-232",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712d40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712d40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-234",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712e8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712e8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-236",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712fd4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c712fd4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-238",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71311e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "665cb26fe7c709241be3eefe|50a5238c-eb37-d4b3-aef3-21db2c71311e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720543934972,
    },
  },
  actionLists: {
    "a-25": {
      id: "a-25",
      title: "Animation_Pop_Up_Open_Tabs_InOutPackage",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_inoutpackage",
                  selectorGuids: ["73c3f1f4-725e-1716-e82c-ccd14bdb956c"],
                },
                value: "none",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_inoutpackage",
                  selectorGuids: ["73c3f1f4-725e-1716-e82c-ccd14bdb956c"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_inoutpackage",
                  selectorGuids: ["73c3f1f4-725e-1716-e82c-ccd14bdb956c"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_inoutpackage",
                  selectorGuids: ["73c3f1f4-725e-1716-e82c-ccd14bdb956c"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718121123138,
    },
    "a-26": {
      id: "a-26",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_container_manualout",
                  selectorGuids: ["18c668a8-26cf-a2f2-5047-cd99b264727d"],
                },
                value: "none",
              },
            },
            {
              id: "a-26-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_container_manualout",
                  selectorGuids: ["18c668a8-26cf-a2f2-5047-cd99b264727d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_container_manualout",
                  selectorGuids: ["18c668a8-26cf-a2f2-5047-cd99b264727d"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_container_manualout",
                  selectorGuids: ["18c668a8-26cf-a2f2-5047-cd99b264727d"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718224396758,
    },
    "a-27": {
      id: "a-27",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_container_manualin",
                  selectorGuids: ["ebf48f2d-d910-1c1a-3c85-450ce249ee9c"],
                },
                value: "none",
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_container_manualin",
                  selectorGuids: ["ebf48f2d-d910-1c1a-3c85-450ce249ee9c"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_container_manualin",
                  selectorGuids: ["ebf48f2d-d910-1c1a-3c85-450ce249ee9c"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_container_manualin",
                  selectorGuids: ["ebf48f2d-d910-1c1a-3c85-450ce249ee9c"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718224468283,
    },
    "a-28": {
      id: "a-28",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_transferpackage",
                  selectorGuids: ["2306e7d8-6a90-3df0-b45d-7e0a1f86aa92"],
                },
                value: "none",
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_transferpackage",
                  selectorGuids: ["2306e7d8-6a90-3df0-b45d-7e0a1f86aa92"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_transferpackage",
                  selectorGuids: ["2306e7d8-6a90-3df0-b45d-7e0a1f86aa92"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_transferpackage",
                  selectorGuids: ["2306e7d8-6a90-3df0-b45d-7e0a1f86aa92"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718226573580,
    },
    "a-32": {
      id: "a-32",
      title: "Закрытие_Modal2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_container_manualin",
                  selectorGuids: ["ebf48f2d-d910-1c1a-3c85-450ce249ee9c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-32-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_container_manualin",
                  selectorGuids: ["ebf48f2d-d910-1c1a-3c85-450ce249ee9c"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_container_manualin",
                  selectorGuids: ["ebf48f2d-d910-1c1a-3c85-450ce249ee9c"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_container_manualin",
                  selectorGuids: ["ebf48f2d-d910-1c1a-3c85-450ce249ee9c"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1719327322323,
    },
    "a-34": {
      id: "a-34",
      title: "Закрытие_Modal1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_container_manualout",
                  selectorGuids: ["18c668a8-26cf-a2f2-5047-cd99b264727d"],
                },
                value: "block",
              },
            },
            {
              id: "a-34-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_container_manualout",
                  selectorGuids: ["18c668a8-26cf-a2f2-5047-cd99b264727d"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_container_manualout",
                  selectorGuids: ["18c668a8-26cf-a2f2-5047-cd99b264727d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_container_manualout",
                  selectorGuids: ["18c668a8-26cf-a2f2-5047-cd99b264727d"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1719327322323,
    },
    "a-31": {
      id: "a-31",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: {},
                target: {
                  useEventTarget: true,
                  id: "665cb26fe7c709241be3eefe|a841f546-6339-116f-4e7e-b407fad2cfb6",
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: {},
                target: {
                  useEventTarget: true,
                  id: "665cb26fe7c709241be3eefe|a841f546-6339-116f-4e7e-b407fad2cfb6",
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "665cb26fe7c709241be3eefe|a841f546-6339-116f-4e7e-b407fad2cfb6",
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0.41,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1719244773929,
    },
    "a-30": {
      id: "a-30",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n-2",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: { red: 0, green: 0, blue: 0, alpha: 1 },
                target: {
                  objectId: "--black",
                  useEventTarget: true,
                  id: "665cb26fe7c709241be3eefe|b0992b47-20fa-8e35-b05e-3b2555afa58f",
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: { red: 127, green: 86, blue: 217, alpha: 1 },
                target: {
                  objectId: "--untitled-ui--primary600",
                  useEventTarget: true,
                  id: "665cb26fe7c709241be3eefe|b0992b47-20fa-8e35-b05e-3b2555afa58f",
                },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718900142207,
    },
    "a-35": {
      id: "a-35",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_transferpackage",
                  selectorGuids: ["2306e7d8-6a90-3df0-b45d-7e0a1f86aa92"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_transferpackage",
                  selectorGuids: ["2306e7d8-6a90-3df0-b45d-7e0a1f86aa92"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1719939157482,
    },
    "a-37": {
      id: "a-37",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".first-page_into",
                  selectorGuids: ["38d33035-5aeb-b4db-2ebe-eab4b7d3b1eb"],
                },
                value: "block",
              },
            },
            {
              id: "a-37-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".first-page_into",
                  selectorGuids: ["38d33035-5aeb-b4db-2ebe-eab4b7d3b1eb"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".second-page_into",
                  selectorGuids: ["1d43fc15-17fe-27b7-2012-621a53453f3e"],
                },
                value: "none",
              },
            },
            {
              id: "a-37-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".second-page_into",
                  selectorGuids: ["1d43fc15-17fe-27b7-2012-621a53453f3e"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button_secondpage_into_submit.ghostboxgrey",
                  selectorGuids: [
                    "e45dfc05-090c-253d-f4be-b01f39117802",
                    "4932bfbb-a04c-2aab-a633-a45034310ebb",
                  ],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".first-page_into",
                  selectorGuids: ["38d33035-5aeb-b4db-2ebe-eab4b7d3b1eb"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".first-page_into",
                  selectorGuids: ["38d33035-5aeb-b4db-2ebe-eab4b7d3b1eb"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".second-page_into",
                  selectorGuids: ["1d43fc15-17fe-27b7-2012-621a53453f3e"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".second-page_into",
                  selectorGuids: ["1d43fc15-17fe-27b7-2012-621a53453f3e"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720017247077,
    },
    "a-36": {
      id: "a-36",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_animationaddpackage",
                  selectorGuids: ["ed46d4db-7ec4-ca94-3d24-b8b24afb785d"],
                },
                value: "none",
              },
            },
            {
              id: "a-36-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_animationaddpackage",
                  selectorGuids: ["ed46d4db-7ec4-ca94-3d24-b8b24afb785d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "665cb26fe7c709241be3eefe|56368065-5e7c-880e-bbec-7fdcaaa9d297",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-36-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button_firstpage_into_submit.ghostboxgrey",
                  selectorGuids: [
                    "c83f4ec3-e362-8d28-d0b8-3c79eb6b9f95",
                    "23d3f5e7-c763-242a-a237-259788d4184b",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "665cb26fe7c709241be3eefe|56368065-5e7c-880e-bbec-7fdcaaa9d297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button_firstpage_into_submit.ghostboxgrey",
                  selectorGuids: [
                    "c83f4ec3-e362-8d28-d0b8-3c79eb6b9f95",
                    "23d3f5e7-c763-242a-a237-259788d4184b",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".pop_up_animationaddpackage",
                  selectorGuids: ["ed46d4db-7ec4-ca94-3d24-b8b24afb785d"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 1000,
                target: {
                  selector: ".pop_up_animationaddpackage",
                  selectorGuids: ["ed46d4db-7ec4-ca94-3d24-b8b24afb785d"],
                },
                value: 0.5,
                unit: "",
              },
            },
            {
              id: "a-36-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "665cb26fe7c709241be3eefe|56368065-5e7c-880e-bbec-7fdcaaa9d297",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".pop_up_animationaddpackage",
                  selectorGuids: ["ed46d4db-7ec4-ca94-3d24-b8b24afb785d"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "665cb26fe7c709241be3eefe|56368065-5e7c-880e-bbec-7fdcaaa9d297",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button_firstpage_into_submit.ghostboxgrey",
                  selectorGuids: [
                    "c83f4ec3-e362-8d28-d0b8-3c79eb6b9f95",
                    "23d3f5e7-c763-242a-a237-259788d4184b",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1719944887331,
    },
    "a-38": {
      id: "a-38",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".first-page_out",
                  selectorGuids: ["43fef2d3-177b-1248-d9c7-c75a4a9e44e2"],
                },
                value: "block",
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".first-page_out",
                  selectorGuids: ["43fef2d3-177b-1248-d9c7-c75a4a9e44e2"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".second-page_out",
                  selectorGuids: ["3126cf10-85a9-c786-17fc-acfdaf6e3643"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".second-page_out",
                  selectorGuids: ["3126cf10-85a9-c786-17fc-acfdaf6e3643"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".first-page_out",
                  selectorGuids: ["43fef2d3-177b-1248-d9c7-c75a4a9e44e2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".first-page_out",
                  selectorGuids: ["43fef2d3-177b-1248-d9c7-c75a4a9e44e2"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".second-page_out",
                  selectorGuids: ["3126cf10-85a9-c786-17fc-acfdaf6e3643"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".second-page_out",
                  selectorGuids: ["3126cf10-85a9-c786-17fc-acfdaf6e3643"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720110525185,
    },
    "a-39": {
      id: "a-39",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_inoutpackage",
                  selectorGuids: ["73c3f1f4-725e-1716-e82c-ccd14bdb956c"],
                },
                value: "block",
              },
            },
            {
              id: "a-39-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_inoutpackage",
                  selectorGuids: ["73c3f1f4-725e-1716-e82c-ccd14bdb956c"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_inoutpackage",
                  selectorGuids: ["73c3f1f4-725e-1716-e82c-ccd14bdb956c"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".pop_up_inoutpackage",
                  selectorGuids: ["73c3f1f4-725e-1716-e82c-ccd14bdb956c"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".first-page_into",
                  selectorGuids: ["38d33035-5aeb-b4db-2ebe-eab4b7d3b1eb"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".first-page_into",
                  selectorGuids: ["38d33035-5aeb-b4db-2ebe-eab4b7d3b1eb"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".second-page_into",
                  selectorGuids: ["1d43fc15-17fe-27b7-2012-621a53453f3e"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".second-page_into",
                  selectorGuids: ["1d43fc15-17fe-27b7-2012-621a53453f3e"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720115409876,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
