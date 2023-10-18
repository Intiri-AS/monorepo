"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [8592],
  {
    3245: (C, p, m) => {
      m.d(p, { c: () => c });
      var h = m(1308),
        f = m(7683),
        u = m(1911);
      const c = (r, n) => {
        let t, e;
        const i = (a, w, g) => {
            if (typeof document > "u") return;
            const _ = document.elementFromPoint(a, w);
            _ && n(_) ? _ !== t && (l(), s(_, g)) : l();
          },
          s = (a, w) => {
            (t = a), e || (e = t);
            const g = t;
            (0, h.c)(() => g.classList.add("ion-activated")), w();
          },
          l = (a = !1) => {
            if (!t) return;
            const w = t;
            (0, h.c)(() => w.classList.remove("ion-activated")),
              a && e !== t && t.click(),
              (t = void 0);
          };
        return (0, u.createGesture)({
          el: r,
          gestureName: "buttonActiveDrag",
          threshold: 0,
          onStart: (a) => i(a.currentX, a.currentY, f.a),
          onMove: (a) => i(a.currentX, a.currentY, f.b),
          onEnd: () => {
            l(!0), (0, f.h)(), (e = void 0);
          },
        });
      };
    },
    8685: (C, p, m) => {
      m.d(p, { g: () => h });
      const h = (n, t, e, i, s) =>
          u(n[1], t[1], e[1], i[1], s).map((l) => f(n[0], t[0], e[0], i[0], l)),
        f = (n, t, e, i, s) =>
          s * (3 * t * Math.pow(s - 1, 2) + s * (-3 * e * s + 3 * e + i * s)) -
          n * Math.pow(s - 1, 3),
        u = (n, t, e, i, s) =>
          r(
            (i -= s) - 3 * (e -= s) + 3 * (t -= s) - (n -= s),
            3 * e - 6 * t + 3 * n,
            3 * t - 3 * n,
            n
          ).filter((a) => a >= 0 && a <= 1),
        r = (n, t, e, i) => {
          if (0 === n)
            return ((n, t, e) => {
              const i = t * t - 4 * n * e;
              return i < 0
                ? []
                : [
                    (-t + Math.sqrt(i)) / (2 * n),
                    (-t - Math.sqrt(i)) / (2 * n),
                  ];
            })(t, e, i);
          const s = (3 * (e /= n) - (t /= n) * t) / 3,
            l = (2 * t * t * t - 9 * t * e + 27 * (i /= n)) / 27;
          if (0 === s) return [Math.pow(-l, 1 / 3)];
          if (0 === l) return [Math.sqrt(-s), -Math.sqrt(-s)];
          const a = Math.pow(l / 2, 2) + Math.pow(s / 3, 3);
          if (0 === a) return [Math.pow(l / 2, 0.5) - t / 3];
          if (a > 0)
            return [
              Math.pow(-l / 2 + Math.sqrt(a), 1 / 3) -
                Math.pow(l / 2 + Math.sqrt(a), 1 / 3) -
                t / 3,
            ];
          const w = Math.sqrt(Math.pow(-s / 3, 3)),
            g = Math.acos(-l / (2 * Math.sqrt(Math.pow(-s / 3, 3)))),
            _ = 2 * Math.pow(w, 1 / 3);
          return [
            _ * Math.cos(g / 3) - t / 3,
            _ * Math.cos((g + 2 * Math.PI) / 3) - t / 3,
            _ * Math.cos((g + 4 * Math.PI) / 3) - t / 3,
          ];
        };
    },
    5062: (C, p, m) => {
      m.d(p, { i: () => h });
      const h = (f) =>
        f && "" !== f.dir
          ? "rtl" === f.dir.toLowerCase()
          : "rtl" === document?.dir.toLowerCase();
    },
    5106: (C, p, m) => {
      m.r(p), m.d(p, { startFocusVisible: () => c });
      const h = "ion-focused",
        u = [
          "Tab",
          "ArrowDown",
          "Space",
          "Escape",
          " ",
          "Shift",
          "Enter",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "Home",
          "End",
        ],
        c = (r) => {
          let n = [],
            t = !0;
          const e = r ? r.shadowRoot : document,
            i = r || document.body,
            s = (E) => {
              n.forEach((d) => d.classList.remove(h)),
                E.forEach((d) => d.classList.add(h)),
                (n = E);
            },
            l = () => {
              (t = !1), s([]);
            },
            a = (E) => {
              (t = u.includes(E.key)), t || s([]);
            },
            w = (E) => {
              if (t && void 0 !== E.composedPath) {
                const d = E.composedPath().filter(
                  (v) => !!v.classList && v.classList.contains("ion-focusable")
                );
                s(d);
              }
            },
            g = () => {
              e.activeElement === i && s([]);
            };
          return (
            e.addEventListener("keydown", a),
            e.addEventListener("focusin", w),
            e.addEventListener("focusout", g),
            e.addEventListener("touchstart", l),
            e.addEventListener("mousedown", l),
            {
              destroy: () => {
                e.removeEventListener("keydown", a),
                  e.removeEventListener("focusin", w),
                  e.removeEventListener("focusout", g),
                  e.removeEventListener("touchstart", l),
                  e.removeEventListener("mousedown", l);
              },
              setFocus: s,
            }
          );
        };
    },
    4127: (C, p, m) => {
      m.d(p, { C: () => r, a: () => u, d: () => c });
      var h = m(5861),
        f = m(5730);
      const u = (function () {
          var n = (0, h.Z)(function* (t, e, i, s, l, a) {
            var w;
            if (t) return t.attachViewToDom(e, i, l, s);
            if (!(a || "string" == typeof i || i instanceof HTMLElement))
              throw new Error("framework delegate is missing");
            const g =
              "string" == typeof i
                ? null === (w = e.ownerDocument) || void 0 === w
                  ? void 0
                  : w.createElement(i)
                : i;
            return (
              s && s.forEach((_) => g.classList.add(_)),
              l && Object.assign(g, l),
              e.appendChild(g),
              yield new Promise((_) => (0, f.c)(g, _)),
              g
            );
          });
          return function (e, i, s, l, a, w) {
            return n.apply(this, arguments);
          };
        })(),
        c = (n, t) => {
          if (t) {
            if (n) return n.removeViewFromDom(t.parentElement, t);
            t.remove();
          }
          return Promise.resolve();
        },
        r = () => {
          let n, t;
          return {
            attachViewToDom: (function () {
              var s = (0, h.Z)(function* (l, a, w = {}, g = []) {
                var _, E;
                if (((n = l), a)) {
                  const v =
                    "string" == typeof a
                      ? null === (_ = n.ownerDocument) || void 0 === _
                        ? void 0
                        : _.createElement(a)
                      : a;
                  g.forEach((o) => v.classList.add(o)),
                    Object.assign(v, w),
                    n.appendChild(v),
                    yield new Promise((o) => (0, f.c)(v, o));
                } else if (n.children.length > 0) {
                  const v =
                    null === (E = n.ownerDocument) || void 0 === E
                      ? void 0
                      : E.createElement("div");
                  g.forEach((o) => v.classList.add(o)),
                    v.append(...n.children),
                    n.appendChild(v);
                }
                const d = document.querySelector("ion-app") || document.body;
                return (
                  (t = document.createComment("ionic teleport")),
                  n.parentNode.insertBefore(t, n),
                  d.appendChild(n),
                  n
                );
              });
              return function (a, w) {
                return s.apply(this, arguments);
              };
            })(),
            removeViewFromDom: () => (
              n && t && (t.parentNode.insertBefore(n, t), t.remove()),
              Promise.resolve()
            ),
          };
        };
    },
    7683: (C, p, m) => {
      m.d(p, { a: () => u, b: () => c, c: () => f, d: () => n, h: () => r });
      const h = {
          getEngine() {
            var t;
            const e = window;
            return (
              e.TapticEngine ||
              ((null === (t = e.Capacitor) || void 0 === t
                ? void 0
                : t.isPluginAvailable("Haptics")) &&
                e.Capacitor.Plugins.Haptics)
            );
          },
          available() {
            return !!this.getEngine();
          },
          isCordova: () => !!window.TapticEngine,
          isCapacitor: () => !!window.Capacitor,
          impact(t) {
            const e = this.getEngine();
            if (!e) return;
            const i = this.isCapacitor() ? t.style.toUpperCase() : t.style;
            e.impact({ style: i });
          },
          notification(t) {
            const e = this.getEngine();
            if (!e) return;
            const i = this.isCapacitor() ? t.style.toUpperCase() : t.style;
            e.notification({ style: i });
          },
          selection() {
            this.impact({ style: "light" });
          },
          selectionStart() {
            const t = this.getEngine();
            !t ||
              (this.isCapacitor()
                ? t.selectionStart()
                : t.gestureSelectionStart());
          },
          selectionChanged() {
            const t = this.getEngine();
            !t ||
              (this.isCapacitor()
                ? t.selectionChanged()
                : t.gestureSelectionChanged());
          },
          selectionEnd() {
            const t = this.getEngine();
            !t ||
              (this.isCapacitor() ? t.selectionEnd() : t.gestureSelectionEnd());
          },
        },
        f = () => {
          h.selection();
        },
        u = () => {
          h.selectionStart();
        },
        c = () => {
          h.selectionChanged();
        },
        r = () => {
          h.selectionEnd();
        },
        n = (t) => {
          h.impact(t);
        };
    },
    3938: (C, p, m) => {
      m.d(p, {
        a: () => h,
        b: () => a,
        c: () => t,
        d: () => w,
        e: () => D,
        f: () => n,
        g: () => g,
        h: () => u,
        i: () => f,
        j: () => o,
        k: () => y,
        l: () => e,
        m: () => s,
        n: () => _,
        o: () => i,
        p: () => r,
        q: () => c,
        r: () => v,
        s: () => M,
        t: () => l,
        u: () => E,
        v: () => d,
      });
      const h =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",
        f =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",
        u =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",
        c =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",
        r =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",
        n =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        t =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",
        e =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",
        i =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        s =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        l =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",
        a =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",
        w =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",
        g =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        _ =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",
        E =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        d =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",
        v =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        o =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        y =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",
        M =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        D =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";
    },
    6642: (C, p, m) => {
      m.d(p, {
        I: () => r,
        a: () => s,
        b: () => n,
        c: () => w,
        d: () => _,
        f: () => l,
        g: () => i,
        i: () => e,
        p: () => g,
        r: () => E,
        s: () => a,
      });
      var h = m(5861),
        f = m(5730),
        u = m(4147);
      const r = "ion-content",
        n = ".ion-content-scroll-host",
        t = `${r}, ${n}`,
        e = (d) => "ION-CONTENT" === d.tagName,
        i = (function () {
          var d = (0, h.Z)(function* (v) {
            return e(v)
              ? (yield new Promise((o) => (0, f.c)(v, o)), v.getScrollElement())
              : v;
          });
          return function (o) {
            return d.apply(this, arguments);
          };
        })(),
        s = (d) => d.querySelector(n) || d.querySelector(t),
        l = (d) => d.closest(t),
        a = (d, v) =>
          e(d)
            ? d.scrollToTop(v)
            : Promise.resolve(
                d.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: v > 0 ? "smooth" : "auto",
                })
              ),
        w = (d, v, o, y) =>
          e(d)
            ? d.scrollByPoint(v, o, y)
            : Promise.resolve(
                d.scrollBy({
                  top: o,
                  left: v,
                  behavior: y > 0 ? "smooth" : "auto",
                })
              ),
        g = (d) => (0, u.a)(d, r),
        _ = (d) => {
          if (e(d)) {
            const o = d.scrollY;
            return (d.scrollY = !1), o;
          }
          return d.style.setProperty("overflow", "hidden"), !0;
        },
        E = (d, v) => {
          e(d) ? (d.scrollY = v) : d.style.removeProperty("overflow");
        };
    },
    8439: (C, p, m) => {
      m.d(p, { s: () => h });
      const h = (e) => {
          try {
            if (
              e instanceof
              class t {
                constructor(i) {
                  this.value = i;
                }
              }
            )
              return e.value;
            if (!c() || "string" != typeof e || "" === e) return e;
            const i = document.createDocumentFragment(),
              s = document.createElement("div");
            i.appendChild(s),
              (s.innerHTML = e),
              n.forEach((g) => {
                const _ = i.querySelectorAll(g);
                for (let E = _.length - 1; E >= 0; E--) {
                  const d = _[E];
                  d.parentNode ? d.parentNode.removeChild(d) : i.removeChild(d);
                  const v = u(d);
                  for (let o = 0; o < v.length; o++) f(v[o]);
                }
              });
            const l = u(i);
            for (let g = 0; g < l.length; g++) f(l[g]);
            const a = document.createElement("div");
            a.appendChild(i);
            const w = a.querySelector("div");
            return null !== w ? w.innerHTML : a.innerHTML;
          } catch (i) {
            return console.error(i), "";
          }
        },
        f = (e) => {
          if (e.nodeType && 1 !== e.nodeType) return;
          for (let s = e.attributes.length - 1; s >= 0; s--) {
            const l = e.attributes.item(s),
              a = l.name;
            if (!r.includes(a.toLowerCase())) {
              e.removeAttribute(a);
              continue;
            }
            const w = l.value;
            null != w &&
              w.toLowerCase().includes("javascript:") &&
              e.removeAttribute(a);
          }
          const i = u(e);
          for (let s = 0; s < i.length; s++) f(i[s]);
        },
        u = (e) => (null != e.children ? e.children : e.childNodes),
        c = () => {
          var e;
          const s =
            null === (e = window?.Ionic) || void 0 === e ? void 0 : e.config;
          return (
            !s ||
            (s.get
              ? s.get("sanitizerEnabled", !0)
              : !0 === s.sanitizerEnabled || void 0 === s.sanitizerEnabled)
          );
        },
        r = ["class", "id", "href", "src", "name", "slot"],
        n = ["script", "style", "iframe", "meta", "link", "object", "embed"];
    },
    1316: (C, p, m) => {
      m.r(p),
        m.d(p, {
          KEYBOARD_DID_CLOSE: () => f,
          KEYBOARD_DID_OPEN: () => h,
          copyVisualViewport: () => v,
          keyboardDidClose: () => g,
          keyboardDidOpen: () => a,
          keyboardDidResize: () => w,
          resetKeyboardAssist: () => t,
          setKeyboardClose: () => l,
          setKeyboardOpen: () => s,
          startKeyboardAssist: () => e,
          trackViewportChanges: () => d,
        });
      const h = "ionKeyboardDidShow",
        f = "ionKeyboardDidHide";
      let c = {},
        r = {},
        n = !1;
      const t = () => {
          (c = {}), (r = {}), (n = !1);
        },
        e = (o) => {
          i(o),
            o.visualViewport &&
              ((r = v(o.visualViewport)),
              (o.visualViewport.onresize = () => {
                d(o), a() || w(o) ? s(o) : g(o) && l(o);
              }));
        },
        i = (o) => {
          o.addEventListener("keyboardDidShow", (y) => s(o, y)),
            o.addEventListener("keyboardDidHide", () => l(o));
        },
        s = (o, y) => {
          _(o, y), (n = !0);
        },
        l = (o) => {
          E(o), (n = !1);
        },
        a = () =>
          !n && c.width === r.width && (c.height - r.height) * r.scale > 150,
        w = (o) => n && !g(o),
        g = (o) => n && r.height === o.innerHeight,
        _ = (o, y) => {
          const D = new CustomEvent(h, {
            detail: {
              keyboardHeight: y ? y.keyboardHeight : o.innerHeight - r.height,
            },
          });
          o.dispatchEvent(D);
        },
        E = (o) => {
          const y = new CustomEvent(f);
          o.dispatchEvent(y);
        },
        d = (o) => {
          (c = Object.assign({}, r)), (r = v(o.visualViewport));
        },
        v = (o) => ({
          width: Math.round(o.width),
          height: Math.round(o.height),
          offsetTop: o.offsetTop,
          offsetLeft: o.offsetLeft,
          pageTop: o.pageTop,
          pageLeft: o.pageLeft,
          scale: o.scale,
        });
    },
    9852: (C, p, m) => {
      m.d(p, { c: () => f });
      var h = m(3457);
      const f = (u) => {
        let c, r, n;
        const t = () => {
          (c = () => {
            (n = !0), u && u(!0);
          }),
            (r = () => {
              (n = !1), u && u(!1);
            }),
            null == h.w || h.w.addEventListener("keyboardWillShow", c),
            null == h.w || h.w.addEventListener("keyboardWillHide", r);
        };
        return (
          t(),
          {
            init: t,
            destroy: () => {
              null == h.w || h.w.removeEventListener("keyboardWillShow", c),
                null == h.w || h.w.removeEventListener("keyboardWillHide", r),
                (c = r = void 0);
            },
            isKeyboardVisible: () => n,
          }
        );
      };
    },
    7741: (C, p, m) => {
      m.d(p, { S: () => f });
      const f = {
        bubbles: {
          dur: 1e3,
          circles: 9,
          fn: (u, c, r) => {
            const n = (u * c) / r - u + "ms",
              t = (2 * Math.PI * c) / r;
            return {
              r: 5,
              style: {
                top: 9 * Math.sin(t) + "px",
                left: 9 * Math.cos(t) + "px",
                "animation-delay": n,
              },
            };
          },
        },
        circles: {
          dur: 1e3,
          circles: 8,
          fn: (u, c, r) => {
            const n = c / r,
              t = u * n - u + "ms",
              e = 2 * Math.PI * n;
            return {
              r: 5,
              style: {
                top: 9 * Math.sin(e) + "px",
                left: 9 * Math.cos(e) + "px",
                "animation-delay": t,
              },
            };
          },
        },
        circular: {
          dur: 1400,
          elmDuration: !0,
          circles: 1,
          fn: () => ({
            r: 20,
            cx: 48,
            cy: 48,
            fill: "none",
            viewBox: "24 24 48 48",
            transform: "translate(0,0)",
            style: {},
          }),
        },
        crescent: { dur: 750, circles: 1, fn: () => ({ r: 26, style: {} }) },
        dots: {
          dur: 750,
          circles: 3,
          fn: (u, c) => ({
            r: 6,
            style: {
              left: 9 - 9 * c + "px",
              "animation-delay": -110 * c + "ms",
            },
          }),
        },
        lines: {
          dur: 1e3,
          lines: 8,
          fn: (u, c, r) => ({
            y1: 14,
            y2: 26,
            style: {
              transform: `rotate(${
                (360 / r) * c + (c < r / 2 ? 180 : -180)
              }deg)`,
              "animation-delay": (u * c) / r - u + "ms",
            },
          }),
        },
        "lines-small": {
          dur: 1e3,
          lines: 8,
          fn: (u, c, r) => ({
            y1: 12,
            y2: 20,
            style: {
              transform: `rotate(${
                (360 / r) * c + (c < r / 2 ? 180 : -180)
              }deg)`,
              "animation-delay": (u * c) / r - u + "ms",
            },
          }),
        },
        "lines-sharp": {
          dur: 1e3,
          lines: 12,
          fn: (u, c, r) => ({
            y1: 17,
            y2: 29,
            style: {
              transform: `rotate(${30 * c + (c < 6 ? 180 : -180)}deg)`,
              "animation-delay": (u * c) / r - u + "ms",
            },
          }),
        },
        "lines-sharp-small": {
          dur: 1e3,
          lines: 12,
          fn: (u, c, r) => ({
            y1: 12,
            y2: 20,
            style: {
              transform: `rotate(${30 * c + (c < 6 ? 180 : -180)}deg)`,
              "animation-delay": (u * c) / r - u + "ms",
            },
          }),
        },
      };
    },
    4464: (C, p, m) => {
      m.r(p), m.d(p, { createSwipeBackGesture: () => r });
      var h = m(5730),
        f = m(5062),
        u = m(1911);
      m(4349);
      const r = (n, t, e, i, s) => {
        const l = n.ownerDocument.defaultView,
          a = (0, f.i)(n),
          g = (o) => (a ? -o.deltaX : o.deltaX);
        return (0, u.createGesture)({
          el: n,
          gestureName: "goback-swipe",
          gesturePriority: 40,
          threshold: 10,
          canStart: (o) =>
            ((o) => {
              const { startX: M } = o;
              return a ? M >= l.innerWidth - 50 : M <= 50;
            })(o) && t(),
          onStart: e,
          onMove: (o) => {
            const M = g(o) / l.innerWidth;
            i(M);
          },
          onEnd: (o) => {
            const y = g(o),
              M = l.innerWidth,
              D = y / M,
              x = ((o) => (a ? -o.velocityX : o.velocityX))(o),
              k = x >= 0 && (x > 0.2 || y > M / 2),
              L = (k ? 1 - D : D) * M;
            let O = 0;
            if (L > 5) {
              const T = L / Math.abs(x);
              O = Math.min(T, 540);
            }
            s(k, D <= 0 ? 0.01 : (0, h.l)(0, D, 0.9999), O);
          },
        });
      };
    },
  },
]);
