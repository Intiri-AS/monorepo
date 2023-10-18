"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [2349],
  {
    4147: (ie, U, c) => {
      c.d(U, { a: () => O, b: () => l, p: () => x });
      const x = (y, ...I) => console.warn(`[Ionic Warning]: ${y}`, ...I),
        l = (y, ...I) => console.error(`[Ionic Error]: ${y}`, ...I),
        O = (y, ...I) =>
          console.error(
            `<${y.tagName.toLowerCase()}> must be used inside ${I.join(
              " or "
            )}.`
          );
    },
    2349: (ie, U, c) => {
      c.r(U), c.d(U, { ion_modal: () => fe });
      var x = c(5861),
        l = c(1308),
        O = c(9658),
        y = c(6642),
        I = c(4127),
        f = c(5730),
        V = c(1316),
        m = c(4147),
        h = c(4414),
        S = c(2854),
        q = c(664),
        p = c(5942),
        G = c(8685),
        se = c(1911),
        D = c(3457),
        F =
          (c(4349),
          (() => {
            return (
              ((e = F || (F = {})).Dark = "DARK"),
              (e.Light = "LIGHT"),
              (e.Default = "DEFAULT"),
              F
            );
            var e;
          })());
      const J = {
          getEngine() {
            var e;
            return (
              (null === (e = null == D.w ? void 0 : D.w.Capacitor) ||
              void 0 === e
                ? void 0
                : e.isPluginAvailable("StatusBar")) &&
              (null == D.w ? void 0 : D.w.Capacitor.Plugins.StatusBar)
            );
          },
          supportsDefaultStatusBarStyle() {
            var e;
            return !(
              null === (e = null == D.w ? void 0 : D.w.Capacitor) ||
              void 0 === e ||
              !e.PluginHeaders
            );
          },
          setStyle(e) {
            const t = this.getEngine();
            !t || t.setStyle(e);
          },
        },
        ee = (e, t) => {
          if (1 === t) return 0;
          const n = 1 / (1 - t);
          return e * n + -t * n;
        },
        ae = () => {
          !D.w ||
            D.w.innerWidth >= 768 ||
            !J.supportsDefaultStatusBarStyle() ||
            J.setStyle({ style: F.Dark });
        },
        de = () => {
          !D.w ||
            D.w.innerWidth >= 768 ||
            !J.supportsDefaultStatusBarStyle() ||
            J.setStyle({ style: F.Default });
        },
        le = (function () {
          var e = (0, x.Z)(function* (t, n) {
            "function" != typeof t.canDismiss ||
              !(yield t.canDismiss()) ||
              (n.isRunning()
                ? n.onFinish(
                    () => {
                      t.dismiss(void 0, "handler");
                    },
                    { oneTimeCallback: !0 }
                  )
                : t.dismiss(void 0, "handler"));
          });
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        te = (e) =>
          0.00255275 * 2.71828 ** (-14.9619 * e) -
          1.00255 * 2.71828 ** (-0.0380968 * e) +
          1,
        ce = (e, t) => (0, f.l)(400, e / Math.abs(1.1 * t), 500),
        pe = (e) => {
          const { currentBreakpoint: t, backdropBreakpoint: n } = e,
            r = void 0 === n || n < t,
            o = r ? `calc(var(--backdrop-opacity) * ${t})` : "0",
            s = (0, p.c)("backdropAnimation").fromTo("opacity", 0, o);
          return (
            r &&
              s
                .beforeStyles({ "pointer-events": "none" })
                .afterClearStyles(["pointer-events"]),
            {
              wrapperAnimation: (0, p.c)("wrapperAnimation").keyframes([
                { offset: 0, opacity: 1, transform: "translateY(100%)" },
                {
                  offset: 1,
                  opacity: 1,
                  transform: `translateY(${100 - 100 * t}%)`,
                },
              ]),
              backdropAnimation: s,
            }
          );
        },
        he = (e) => {
          const { currentBreakpoint: t, backdropBreakpoint: n } = e,
            r = `calc(var(--backdrop-opacity) * ${ee(t, n)})`,
            o = [
              { offset: 0, opacity: r },
              { offset: 1, opacity: 0 },
            ],
            s = [
              { offset: 0, opacity: r },
              { offset: n, opacity: 0 },
              { offset: 1, opacity: 0 },
            ],
            a = (0, p.c)("backdropAnimation").keyframes(0 !== n ? s : o);
          return {
            wrapperAnimation: (0, p.c)("wrapperAnimation").keyframes([
              {
                offset: 0,
                opacity: 1,
                transform: `translateY(${100 - 100 * t}%)`,
              },
              { offset: 1, opacity: 1, transform: "translateY(100%)" },
            ]),
            backdropAnimation: a,
          };
        },
        me = (e, t) => {
          const { presentingEl: n, currentBreakpoint: r } = t,
            o = (0, f.g)(e),
            { wrapperAnimation: s, backdropAnimation: a } =
              void 0 !== r
                ? pe(t)
                : {
                    backdropAnimation: (0, p.c)()
                      .fromTo("opacity", 0.01, "var(--backdrop-opacity)")
                      .beforeStyles({ "pointer-events": "none" })
                      .afterClearStyles(["pointer-events"]),
                    wrapperAnimation: (0, p.c)().fromTo(
                      "transform",
                      "translateY(100vh)",
                      "translateY(0vh)"
                    ),
                  };
          a.addElement(o.querySelector("ion-backdrop")),
            s
              .addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow"))
              .beforeStyles({ opacity: 1 });
          const i = (0, p.c)("entering-base")
            .addElement(e)
            .easing("cubic-bezier(0.32,0.72,0,1)")
            .duration(500)
            .addAnimation(s);
          if (n) {
            const g = window.innerWidth < 768,
              A = "ION-MODAL" === n.tagName && void 0 !== n.presentingElement,
              v = (0, f.g)(n),
              b = (0, p.c)().beforeStyles({
                transform: "translateY(0)",
                "transform-origin": "top center",
                overflow: "hidden",
              }),
              C = document.body;
            if (g) {
              const E = CSS.supports("width", "max(0px, 1px)")
                  ? "max(30px, var(--ion-safe-area-top))"
                  : "30px",
                _ = `translateY(${A ? "-10px" : E}) scale(0.93)`;
              b
                .afterStyles({ transform: _ })
                .beforeAddWrite(() =>
                  C.style.setProperty("background-color", "black")
                )
                .addElement(n)
                .keyframes([
                  {
                    offset: 0,
                    filter: "contrast(1)",
                    transform: "translateY(0px) scale(1)",
                    borderRadius: "0px",
                  },
                  {
                    offset: 1,
                    filter: "contrast(0.85)",
                    transform: _,
                    borderRadius: "10px 10px 0 0",
                  },
                ]),
                i.addAnimation(b);
            } else if ((i.addAnimation(a), A)) {
              const w = `translateY(-10px) scale(${A ? 0.93 : 1})`;
              b.afterStyles({ transform: w })
                .addElement(v.querySelector(".modal-wrapper"))
                .keyframes([
                  {
                    offset: 0,
                    filter: "contrast(1)",
                    transform: "translateY(0) scale(1)",
                  },
                  { offset: 1, filter: "contrast(0.85)", transform: w },
                ]);
              const d = (0, p.c)()
                .afterStyles({ transform: w })
                .addElement(v.querySelector(".modal-shadow"))
                .keyframes([
                  {
                    offset: 0,
                    opacity: "1",
                    transform: "translateY(0) scale(1)",
                  },
                  { offset: 1, opacity: "0", transform: w },
                ]);
              i.addAnimation([b, d]);
            } else s.fromTo("opacity", "0", "1");
          } else i.addAnimation(a);
          return i;
        },
        ue = (e, t, n = 500) => {
          const { presentingEl: r, currentBreakpoint: o } = t,
            s = (0, f.g)(e),
            { wrapperAnimation: a, backdropAnimation: i } =
              void 0 !== o
                ? he(t)
                : {
                    backdropAnimation: (0, p.c)().fromTo(
                      "opacity",
                      "var(--backdrop-opacity)",
                      0
                    ),
                    wrapperAnimation: (0, p.c)().fromTo(
                      "transform",
                      "translateY(0vh)",
                      "translateY(100vh)"
                    ),
                  };
          i.addElement(s.querySelector("ion-backdrop")),
            a
              .addElement(s.querySelectorAll(".modal-wrapper, .modal-shadow"))
              .beforeStyles({ opacity: 1 });
          const g = (0, p.c)("leaving-base")
            .addElement(e)
            .easing("cubic-bezier(0.32,0.72,0,1)")
            .duration(n)
            .addAnimation(a);
          if (r) {
            const A = window.innerWidth < 768,
              v = "ION-MODAL" === r.tagName && void 0 !== r.presentingElement,
              b = (0, f.g)(r),
              C = (0, p.c)()
                .beforeClearStyles(["transform"])
                .afterClearStyles(["transform"])
                .onFinish((w) => {
                  1 === w &&
                    (r.style.setProperty("overflow", ""),
                    Array.from(E.querySelectorAll("ion-modal")).filter(
                      (_) => void 0 !== _.presentingElement
                    ).length <= 1 &&
                      E.style.setProperty("background-color", ""));
                }),
              E = document.body;
            if (A) {
              const w = CSS.supports("width", "max(0px, 1px)")
                  ? "max(30px, var(--ion-safe-area-top))"
                  : "30px",
                Y = `translateY(${v ? "-10px" : w}) scale(0.93)`;
              C.addElement(r).keyframes([
                {
                  offset: 0,
                  filter: "contrast(0.85)",
                  transform: Y,
                  borderRadius: "10px 10px 0 0",
                },
                {
                  offset: 1,
                  filter: "contrast(1)",
                  transform: "translateY(0px) scale(1)",
                  borderRadius: "0px",
                },
              ]),
                g.addAnimation(C);
            } else if ((g.addAnimation(i), v)) {
              const d = `translateY(-10px) scale(${v ? 0.93 : 1})`;
              C.addElement(b.querySelector(".modal-wrapper"))
                .afterStyles({ transform: "translate3d(0, 0, 0)" })
                .keyframes([
                  { offset: 0, filter: "contrast(0.85)", transform: d },
                  {
                    offset: 1,
                    filter: "contrast(1)",
                    transform: "translateY(0) scale(1)",
                  },
                ]);
              const _ = (0, p.c)()
                .addElement(b.querySelector(".modal-shadow"))
                .afterStyles({ transform: "translateY(0) scale(1)" })
                .keyframes([
                  { offset: 0, opacity: "0", transform: d },
                  {
                    offset: 1,
                    opacity: "1",
                    transform: "translateY(0) scale(1)",
                  },
                ]);
              g.addAnimation([C, _]);
            } else a.fromTo("opacity", "1", "0");
          } else g.addAnimation(i);
          return g;
        },
        xe = (e, t) => {
          const { currentBreakpoint: n } = t,
            r = (0, f.g)(e),
            { wrapperAnimation: o, backdropAnimation: s } =
              void 0 !== n
                ? pe(t)
                : {
                    backdropAnimation: (0, p.c)()
                      .fromTo("opacity", 0.01, "var(--backdrop-opacity)")
                      .beforeStyles({ "pointer-events": "none" })
                      .afterClearStyles(["pointer-events"]),
                    wrapperAnimation: (0, p.c)().keyframes([
                      {
                        offset: 0,
                        opacity: 0.01,
                        transform: "translateY(40px)",
                      },
                      { offset: 1, opacity: 1, transform: "translateY(0px)" },
                    ]),
                  };
          return (
            s.addElement(r.querySelector("ion-backdrop")),
            o.addElement(r.querySelector(".modal-wrapper")),
            (0, p.c)()
              .addElement(e)
              .easing("cubic-bezier(0.36,0.66,0.04,1)")
              .duration(280)
              .addAnimation([s, o])
          );
        },
        Ee = (e, t) => {
          const { currentBreakpoint: n } = t,
            r = (0, f.g)(e),
            { wrapperAnimation: o, backdropAnimation: s } =
              void 0 !== n
                ? he(t)
                : {
                    backdropAnimation: (0, p.c)().fromTo(
                      "opacity",
                      "var(--backdrop-opacity)",
                      0
                    ),
                    wrapperAnimation: (0, p.c)().keyframes([
                      {
                        offset: 0,
                        opacity: 0.99,
                        transform: "translateY(0px)",
                      },
                      { offset: 1, opacity: 0, transform: "translateY(40px)" },
                    ]),
                  };
          return (
            s.addElement(r.querySelector("ion-backdrop")),
            o.addElement(r.querySelector(".modal-wrapper")),
            (0, p.c)()
              .easing("cubic-bezier(0.47,0,0.745,0.715)")
              .duration(200)
              .addAnimation([s, o])
          );
        },
        fe = class {
          constructor(e) {
            (0, l.r)(this, e),
              (this.didPresent = (0, l.e)(this, "ionModalDidPresent", 7)),
              (this.willPresent = (0, l.e)(this, "ionModalWillPresent", 7)),
              (this.willDismiss = (0, l.e)(this, "ionModalWillDismiss", 7)),
              (this.didDismiss = (0, l.e)(this, "ionModalDidDismiss", 7)),
              (this.ionBreakpointDidChange = (0, l.e)(
                this,
                "ionBreakpointDidChange",
                7
              )),
              (this.didPresentShorthand = (0, l.e)(this, "didPresent", 7)),
              (this.willPresentShorthand = (0, l.e)(this, "willPresent", 7)),
              (this.willDismissShorthand = (0, l.e)(this, "willDismiss", 7)),
              (this.didDismissShorthand = (0, l.e)(this, "didDismiss", 7)),
              (this.modalIndex = Ce++),
              (this.coreDelegate = (0, I.C)()),
              (this.isSheetModal = !1),
              (this.inheritedAttributes = {}),
              (this.inline = !1),
              (this.gestureAnimationDismissing = !1),
              (this.presented = !1),
              (this.hasController = !1),
              (this.keyboardClose = !0),
              (this.backdropBreakpoint = 0),
              (this.handleBehavior = "none"),
              (this.backdropDismiss = !0),
              (this.showBackdrop = !0),
              (this.animated = !0),
              (this.swipeToClose = !1),
              (this.isOpen = !1),
              (this.keepContentsMounted = !1),
              (this.configureTriggerInteraction = () => {
                const {
                  trigger: t,
                  el: n,
                  destroyTriggerInteraction: r,
                } = this;
                r && r();
                const o = void 0 !== t ? document.getElementById(t) : null;
                o &&
                  (this.destroyTriggerInteraction = ((a, i) => {
                    const g = () => {
                      i.present();
                    };
                    return (
                      a.addEventListener("click", g),
                      () => {
                        a.removeEventListener("click", g);
                      }
                    );
                  })(o, n));
              }),
              (this.onHandleClick = () => {
                const { sheetTransition: t, handleBehavior: n } = this;
                "cycle" !== n || void 0 !== t || this.moveToNextBreakpoint();
              }),
              (this.onBackdropTap = () => {
                const { sheetTransition: t } = this;
                void 0 === t && this.dismiss(void 0, h.B);
              }),
              (this.onLifecycle = (t) => {
                const n = this.usersElement,
                  r = Ae[t.type];
                if (n && r) {
                  const o = new CustomEvent(r, {
                    bubbles: !1,
                    cancelable: !1,
                    detail: t.detail,
                  });
                  n.dispatchEvent(o);
                }
              });
          }
          onIsOpenChange(e, t) {
            !0 === e && !1 === t
              ? this.present()
              : !1 === e && !0 === t && this.dismiss();
          }
          onTriggerChange() {
            this.configureTriggerInteraction();
          }
          swipeToCloseChanged(e) {
            var t = this;
            return (0, x.Z)(function* () {
              t.gesture
                ? t.gesture.enable(e)
                : e && (yield t.initSwipeToClose());
            })();
          }
          breakpointsChanged(e) {
            void 0 !== e && (this.sortedBreakpoints = e.sort((t, n) => t - n));
          }
          connectedCallback() {
            (0, h.e)(this.el);
          }
          componentWillLoad() {
            const {
              breakpoints: e,
              initialBreakpoint: t,
              swipeToClose: n,
              el: r,
            } = this;
            (this.inheritedAttributes = (0, f.j)(r, ["role"])),
              (this.modalId = this.el.hasAttribute("id")
                ? this.el.getAttribute("id")
                : `ion-modal-${this.modalIndex}`),
              (this.isSheetModal = void 0 !== e && void 0 !== t) &&
                (this.currentBreakpoint = this.initialBreakpoint),
              void 0 !== e &&
                void 0 !== t &&
                !e.includes(t) &&
                (0, m.p)(
                  "Your breakpoints array must include the initialBreakpoint value."
                ),
              n &&
                (0, m.p)(
                  "swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default."
                );
          }
          componentDidLoad() {
            !0 === this.isOpen && (0, f.r)(() => this.present()),
              this.breakpointsChanged(this.breakpoints),
              this.configureTriggerInteraction();
          }
          getDelegate(e = !1) {
            if (this.workingDelegate && !e)
              return { delegate: this.workingDelegate, inline: this.inline };
            const n = (this.inline =
              null !== this.el.parentNode && !this.hasController);
            return {
              inline: n,
              delegate: (this.workingDelegate = n
                ? this.delegate || this.coreDelegate
                : this.delegate),
            };
          }
          checkCanDismiss() {
            var e = this;
            return (0, x.Z)(function* () {
              const { canDismiss: t } = e;
              return void 0 === t || ("function" == typeof t ? t() : t);
            })();
          }
          present() {
            var e = this;
            return (0, x.Z)(function* () {
              if (e.presented) return;
              void 0 !== e.currentTransition && (yield e.currentTransition),
                (e.currentBreakpoint = e.initialBreakpoint);
              const t = Object.assign(Object.assign({}, e.componentProps), {
                  modal: e.el,
                }),
                { inline: n, delegate: r } = e.getDelegate(!0);
              (e.usersElement = yield (0, I.a)(
                r,
                e.el,
                e.component,
                ["ion-page"],
                t,
                n
              )),
                yield (0, q.e)(e.usersElement),
                (0, l.c)(() => e.el.classList.add("show-modal")),
                (e.currentTransition = (0, h.d)(e, "modalEnter", me, xe, {
                  presentingEl: e.presentingElement,
                  currentBreakpoint: e.initialBreakpoint,
                  backdropBreakpoint: e.backdropBreakpoint,
                }));
              const o =
                e.swipeToClose ||
                (void 0 !== e.canDismiss && void 0 !== e.presentingElement);
              o && "ios" === (0, O.b)(e) && ae(),
                yield e.currentTransition,
                e.isSheetModal
                  ? e.initSheetGesture()
                  : o && (yield e.initSwipeToClose()),
                typeof window < "u" &&
                  ((e.keyboardOpenCallback = () => {
                    e.gesture &&
                      (e.gesture.enable(!1),
                      (0, f.r)(() => {
                        e.gesture && e.gesture.enable(!0);
                      }));
                  }),
                  window.addEventListener(
                    V.KEYBOARD_DID_OPEN,
                    e.keyboardOpenCallback
                  )),
                (e.currentTransition = void 0);
            })();
          }
          initSwipeToClose() {
            var e = this;
            if ("ios" !== (0, O.b)(this)) return;
            const { el: t } = this,
              n = this.leaveAnimation || O.c.get("modalLeave", ue),
              r = (this.animation = n(t, {
                presentingEl: this.presentingElement,
              }));
            (0, y.a)(t)
              ? ((this.gesture = ((e, t, n) => {
                  const o = e.offsetHeight;
                  let s = !1,
                    a = !1,
                    i = null,
                    g = null,
                    v = !0,
                    b = 0;
                  const Y = (0, se.createGesture)({
                    el: e,
                    gestureName: "modalSwipeToClose",
                    gesturePriority: 39,
                    direction: "y",
                    threshold: 10,
                    canStart: (T) => {
                      const u = T.event.target;
                      return (
                        null === u ||
                        !u.closest ||
                        ((i = (0, y.f)(u)),
                        i
                          ? ((g = (0, y.i)(i)
                              ? (0, f.g)(i).querySelector(".inner-scroll")
                              : i),
                            !i.querySelector("ion-refresher") &&
                              0 === g.scrollTop)
                          : null === u.closest("ion-footer"))
                      );
                    },
                    onStart: (T) => {
                      const { deltaY: u } = T;
                      (v = !i || !(0, y.i)(i) || i.scrollY),
                        (a = void 0 !== e.canDismiss && !0 !== e.canDismiss),
                        u > 0 && i && (0, y.d)(i),
                        t.progressStart(!0, s ? 1 : 0);
                    },
                    onMove: (T) => {
                      const { deltaY: u } = T;
                      u > 0 && i && (0, y.d)(i);
                      const k = T.deltaY / o,
                        L = k >= 0 && a,
                        W = L ? 0.2 : 0.9999,
                        z = L ? te(k / W) : k,
                        M = (0, f.l)(1e-4, z, W);
                      t.progressStep(M),
                        M >= 0.5 && b < 0.5
                          ? de()
                          : M < 0.5 && b >= 0.5 && ae(),
                        (b = M);
                    },
                    onEnd: (T) => {
                      const u = T.velocityY,
                        k = T.deltaY / o,
                        L = k >= 0 && a,
                        W = L ? 0.2 : 0.9999,
                        z = L ? te(k / W) : k,
                        M = (0, f.l)(1e-4, z, W),
                        K = !L && (T.deltaY + 1e3 * u) / o >= 0.5;
                      let Z = K ? -0.001 : 0.001;
                      K
                        ? (t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),
                          (Z += (0, G.g)(
                            [0, 0],
                            [0.32, 0.72],
                            [0, 1],
                            [1, 1],
                            M
                          )[0]))
                        : (t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),
                          (Z += (0, G.g)(
                            [0, 0],
                            [1, 0],
                            [0.68, 0.28],
                            [1, 1],
                            M
                          )[0]));
                      const re = ce(K ? k * o : (1 - M) * o, u);
                      (s = K),
                        Y.enable(!1),
                        i && (0, y.r)(i, v),
                        t
                          .onFinish(() => {
                            K || Y.enable(!0);
                          })
                          .progressEnd(K ? 1 : 0, Z, re),
                        L && M > W / 4 ? le(e, t) : K && n();
                    },
                  });
                  return Y;
                })(t, r, () => {
                  (this.gestureAnimationDismissing = !0),
                    this.animation.onFinish(
                      (0, x.Z)(function* () {
                        yield e.dismiss(void 0, "gesture"),
                          (e.gestureAnimationDismissing = !1);
                      })
                    );
                })),
                this.gesture.enable(!0))
              : (0, y.p)(t);
          }
          initSheetGesture() {
            const {
              wrapperEl: e,
              initialBreakpoint: t,
              backdropBreakpoint: n,
            } = this;
            if (!e || void 0 === t) return;
            const r = this.enterAnimation || O.c.get("modalEnter", me),
              o = (this.animation = r(this.el, {
                presentingEl: this.presentingElement,
                currentBreakpoint: t,
                backdropBreakpoint: n,
              }));
            o.progressStart(!0, 1);
            const { gesture: s, moveSheetToBreakpoint: a } = ((
              e,
              t,
              n,
              r,
              o,
              s,
              a = [],
              i,
              g,
              A
            ) => {
              const C = {
                  WRAPPER_KEYFRAMES: [
                    { offset: 0, transform: "translateY(0%)" },
                    { offset: 1, transform: "translateY(100%)" },
                  ],
                  BACKDROP_KEYFRAMES:
                    0 !== o
                      ? [
                          { offset: 0, opacity: "var(--backdrop-opacity)" },
                          { offset: 1 - o, opacity: 0 },
                          { offset: 1, opacity: 0 },
                        ]
                      : [
                          { offset: 0, opacity: "var(--backdrop-opacity)" },
                          { offset: 1, opacity: 0.01 },
                        ],
                },
                E = e.querySelector("ion-content"),
                w = n.clientHeight;
              let d = r,
                _ = 0,
                Y = !1;
              const u = s.childAnimations.find(
                  (B) => "wrapperAnimation" === B.id
                ),
                k = s.childAnimations.find((B) => "backdropAnimation" === B.id),
                L = a[a.length - 1],
                W = a[0],
                z = () => {
                  e.style.setProperty("pointer-events", "auto"),
                    t.style.setProperty("pointer-events", "auto"),
                    e.classList.remove("ion-disable-focus-trap");
                },
                M = () => {
                  e.style.setProperty("pointer-events", "none"),
                    t.style.setProperty("pointer-events", "none"),
                    e.classList.add("ion-disable-focus-trap");
                };
              u &&
                k &&
                (u.keyframes([...C.WRAPPER_KEYFRAMES]),
                k.keyframes([...C.BACKDROP_KEYFRAMES]),
                s.progressStart(!0, 1 - d),
                d > o ? z() : M()),
                E && d !== L && (E.scrollY = !1);
              const ge = (B) => {
                  const {
                      breakpoint: N,
                      canDismiss: R,
                      breakpointOffset: j,
                    } = B,
                    $ = R && 0 === N,
                    P = $ ? d : N,
                    H = 0 !== P;
                  return (
                    (d = 0),
                    u &&
                      k &&
                      (u.keyframes([
                        { offset: 0, transform: `translateY(${100 * j}%)` },
                        {
                          offset: 1,
                          transform: `translateY(${100 * (1 - P)}%)`,
                        },
                      ]),
                      k.keyframes([
                        {
                          offset: 0,
                          opacity: `calc(var(--backdrop-opacity) * ${ee(
                            1 - j,
                            o
                          )})`,
                        },
                        {
                          offset: 1,
                          opacity: `calc(var(--backdrop-opacity) * ${ee(
                            P,
                            o
                          )})`,
                        },
                      ]),
                      s.progressStep(0)),
                    X.enable(!1),
                    $ ? le(e, s) : H || g(),
                    new Promise((oe) => {
                      s.onFinish(
                        () => {
                          H
                            ? u && k
                              ? (0, f.r)(() => {
                                  u.keyframes([...C.WRAPPER_KEYFRAMES]),
                                    k.keyframes([...C.BACKDROP_KEYFRAMES]),
                                    s.progressStart(!0, 1 - P),
                                    (d = P),
                                    A(d),
                                    E &&
                                      d === a[a.length - 1] &&
                                      (E.scrollY = !0),
                                    d > o ? z() : M(),
                                    X.enable(!0),
                                    oe();
                                })
                              : (X.enable(!0), oe())
                            : oe();
                        },
                        { oneTimeCallback: !0 }
                      ).progressEnd(1, 0, 500);
                    })
                  );
                },
                X = (0, se.createGesture)({
                  el: n,
                  gestureName: "modalSheet",
                  gesturePriority: 40,
                  direction: "y",
                  threshold: 10,
                  canStart: (B) => {
                    const N = B.event.target.closest("ion-content");
                    return (d = i()), !(1 === d && N);
                  },
                  onStart: () => {
                    (Y =
                      void 0 !== e.canDismiss &&
                      !0 !== e.canDismiss &&
                      0 === W),
                      E && (E.scrollY = !1),
                      (0, f.r)(() => {
                        e.focus();
                      }),
                      s.progressStart(!0, 1 - d);
                  },
                  onMove: (B) => {
                    const R = a.length > 1 ? 1 - a[1] : void 0,
                      j = 1 - d + B.deltaY / w,
                      $ = void 0 !== R && j >= R && Y,
                      P = $ ? 0.95 : 0.9999,
                      H = $ && void 0 !== R ? R + te((j - R) / (P - R)) : j;
                    (_ = (0, f.l)(1e-4, H, P)), s.progressStep(_);
                  },
                  onEnd: (B) => {
                    const j = d - (B.deltaY + 350 * B.velocityY) / w,
                      $ = a.reduce((P, H) =>
                        Math.abs(H - j) < Math.abs(P - j) ? H : P
                      );
                    ge({ breakpoint: $, breakpointOffset: _, canDismiss: Y });
                  },
                });
              return { gesture: X, moveSheetToBreakpoint: ge };
            })(
              this.el,
              this.backdropEl,
              e,
              t,
              n,
              o,
              this.sortedBreakpoints,
              () => {
                var i;
                return null !== (i = this.currentBreakpoint) && void 0 !== i
                  ? i
                  : 0;
              },
              () => this.sheetOnDismiss(),
              (i) => {
                this.currentBreakpoint !== i &&
                  ((this.currentBreakpoint = i),
                  this.ionBreakpointDidChange.emit({ breakpoint: i }));
              }
            );
            (this.gesture = s),
              (this.moveSheetToBreakpoint = a),
              this.gesture.enable(!0);
          }
          sheetOnDismiss() {
            var e = this;
            (this.gestureAnimationDismissing = !0),
              this.animation.onFinish(
                (0, x.Z)(function* () {
                  (e.currentBreakpoint = 0),
                    e.ionBreakpointDidChange.emit({
                      breakpoint: e.currentBreakpoint,
                    }),
                    yield e.dismiss(void 0, "gesture"),
                    (e.gestureAnimationDismissing = !1);
                })
              );
          }
          dismiss(e, t) {
            var n = this;
            return (0, x.Z)(function* () {
              if (
                (n.gestureAnimationDismissing && "gesture" !== t) ||
                ("handler" !== t && !(yield n.checkCanDismiss()))
              )
                return !1;
              (n.swipeToClose ||
                (void 0 !== n.canDismiss && void 0 !== n.presentingElement)) &&
                "ios" === (0, O.b)(n) &&
                de(),
                typeof window < "u" &&
                  n.keyboardOpenCallback &&
                  window.removeEventListener(
                    V.KEYBOARD_DID_OPEN,
                    n.keyboardOpenCallback
                  ),
                void 0 !== n.currentTransition && (yield n.currentTransition);
              const o = h.h.get(n) || [];
              n.currentTransition = (0, h.f)(n, e, t, "modalLeave", ue, Ee, {
                presentingEl: n.presentingElement,
                currentBreakpoint:
                  void 0 !== n.currentBreakpoint || n.initialBreakpoint,
                backdropBreakpoint: n.backdropBreakpoint,
              });
              const s = yield n.currentTransition;
              if (s) {
                const { delegate: a } = n.getDelegate();
                yield (0, I.d)(a, n.usersElement),
                  (0, l.c)(() => n.el.classList.remove("show-modal")),
                  n.animation && n.animation.destroy(),
                  n.gesture && n.gesture.destroy(),
                  o.forEach((i) => i.destroy());
              }
              return (
                (n.currentBreakpoint = void 0),
                (n.currentTransition = void 0),
                (n.animation = void 0),
                s
              );
            })();
          }
          onDidDismiss() {
            return (0, h.g)(this.el, "ionModalDidDismiss");
          }
          onWillDismiss() {
            return (0, h.g)(this.el, "ionModalWillDismiss");
          }
          setCurrentBreakpoint(e) {
            var t = this;
            return (0, x.Z)(function* () {
              if (!t.isSheetModal)
                return void (0, m.p)(
                  "setCurrentBreakpoint is only supported on sheet modals."
                );
              if (!t.breakpoints.includes(e))
                return void (0, m.p)(
                  `Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`
                );
              const {
                currentBreakpoint: n,
                moveSheetToBreakpoint: r,
                canDismiss: o,
                breakpoints: s,
              } = t;
              n !== e &&
                r &&
                ((t.sheetTransition = r({
                  breakpoint: e,
                  breakpointOffset: 1 - n,
                  canDismiss: void 0 !== o && !0 !== o && 0 === s[0],
                })),
                yield t.sheetTransition,
                (t.sheetTransition = void 0));
            })();
          }
          getCurrentBreakpoint() {
            var e = this;
            return (0, x.Z)(function* () {
              return e.currentBreakpoint;
            })();
          }
          moveToNextBreakpoint() {
            var e = this;
            return (0, x.Z)(function* () {
              const { breakpoints: t, currentBreakpoint: n } = e;
              if (!t || null == n) return !1;
              const r = t.filter((i) => 0 !== i),
                s = (r.indexOf(n) + 1) % r.length,
                a = r[s];
              return yield e.setCurrentBreakpoint(a), !0;
            })();
          }
          render() {
            const {
                handle: e,
                isSheetModal: t,
                presentingElement: n,
                htmlAttributes: r,
                handleBehavior: o,
                inheritedAttributes: s,
              } = this,
              a = !1 !== e && t,
              i = (0, O.b)(this),
              { modalId: g } = this,
              A = void 0 !== n && "ios" === i,
              v = "cycle" === o;
            return (0, l.h)(
              l.H,
              Object.assign(
                {
                  "no-router": !0,
                  "aria-modal": "true",
                  role: "dialog",
                  tabindex: "-1",
                },
                r,
                s,
                {
                  style: { zIndex: `${2e4 + this.overlayIndex}` },
                  class: Object.assign(
                    {
                      [i]: !0,
                      "modal-default": !A && !t,
                      "modal-card": A,
                      "modal-sheet": t,
                      "overlay-hidden": !0,
                    },
                    (0, S.g)(this.cssClass)
                  ),
                  id: g,
                  onIonBackdropTap: this.onBackdropTap,
                  onIonModalDidPresent: this.onLifecycle,
                  onIonModalWillPresent: this.onLifecycle,
                  onIonModalWillDismiss: this.onLifecycle,
                  onIonModalDidDismiss: this.onLifecycle,
                }
              ),
              (0, l.h)("ion-backdrop", {
                ref: (b) => (this.backdropEl = b),
                visible: this.showBackdrop,
                tappable: this.backdropDismiss,
                part: "backdrop",
              }),
              "ios" === i && (0, l.h)("div", { class: "modal-shadow" }),
              (0, l.h)(
                "div",
                {
                  class: "modal-wrapper ion-overlay-wrapper",
                  part: "content",
                  ref: (b) => (this.wrapperEl = b),
                },
                a &&
                  (0, l.h)("button", {
                    class: "modal-handle",
                    tabIndex: v ? 0 : -1,
                    "aria-label":
                      "Activate to adjust the size of the dialog overlaying the screen",
                    onClick: v ? this.onHandleClick : void 0,
                    part: "handle",
                  }),
                (0, l.h)("slot", null)
              )
            );
          }
          get el() {
            return (0, l.i)(this);
          }
          static get watchers() {
            return {
              isOpen: ["onIsOpenChange"],
              trigger: ["onTriggerChange"],
              swipeToClose: ["swipeToCloseChanged"],
            };
          }
        },
        Ae = {
          ionModalDidPresent: "ionViewDidEnter",
          ionModalWillPresent: "ionViewWillEnter",
          ionModalWillDismiss: "ionViewWillLeave",
          ionModalDidDismiss: "ionViewDidLeave",
        };
      let Ce = 0;
      fe.style = {
        ios: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}',
        md: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}',
      };
    },
    2854: (ie, U, c) => {
      c.d(U, { c: () => O, g: () => I, h: () => l, o: () => V });
      var x = c(5861);
      const l = (m, h) => null !== h.closest(m),
        O = (m, h) =>
          "string" == typeof m && m.length > 0
            ? Object.assign({ "ion-color": !0, [`ion-color-${m}`]: !0 }, h)
            : h,
        I = (m) => {
          const h = {};
          return (
            ((m) =>
              void 0 !== m
                ? (Array.isArray(m) ? m : m.split(" "))
                    .filter((S) => null != S)
                    .map((S) => S.trim())
                    .filter((S) => "" !== S)
                : [])(m).forEach((S) => (h[S] = !0)),
            h
          );
        },
        f = /^[a-z][a-z0-9+\-.]*:/,
        V = (function () {
          var m = (0, x.Z)(function* (h, S, q, p) {
            if (null != h && "#" !== h[0] && !f.test(h)) {
              const G = document.querySelector("ion-router");
              if (G) return S?.preventDefault(), G.push(h, q, p);
            }
            return !1;
          });
          return function (S, q, p, G) {
            return m.apply(this, arguments);
          };
        })();
    },
  },
]);
