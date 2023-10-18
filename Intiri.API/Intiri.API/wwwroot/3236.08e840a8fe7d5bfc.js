"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3236],
  {
    4147: (D, w, a) => {
      a.d(w, { a: () => c, b: () => i, p: () => g });
      const g = (u, ...x) => console.warn(`[Ionic Warning]: ${u}`, ...x),
        i = (u, ...x) => console.error(`[Ionic Error]: ${u}`, ...x),
        c = (u, ...x) =>
          console.error(
            `<${u.tagName.toLowerCase()}> must be used inside ${x.join(
              " or "
            )}.`
          );
    },
    53: (D, w, a) => {
      a.r(w),
        a.d(w, {
          ion_app: () => P,
          ion_buttons: () => O,
          ion_content: () => R,
          ion_footer: () => H,
          ion_header: () => Y,
          ion_router_outlet: () => N,
          ion_title: () => W,
          ion_toolbar: () => F,
        });
      var g = a(5861),
        i = a(1308),
        c = a(9658),
        u = a(5730),
        x = a(5062),
        y = a(2854),
        v = a(6642),
        b = a(9852),
        h = a(8685),
        m = a(4127),
        T = a(664);
      a(3457);
      const P = class {
          constructor(t) {
            (0, i.r)(this, t);
          }
          componentDidLoad() {
            var t = this;
            X(
              (0, g.Z)(function* () {
                const o = (0, c.a)(window, "hybrid");
                c.c.getBoolean("_testing") ||
                  a
                    .e(9718)
                    .then(a.bind(a, 9718))
                    .then((n) => n.startTapClick(c.c)),
                  c.c.getBoolean("statusTap", o) &&
                    a
                      .e(5780)
                      .then(a.bind(a, 179))
                      .then((n) => n.startStatusTap()),
                  c.c.getBoolean("inputShims", G()) &&
                    a
                      .e(3269)
                      .then(a.bind(a, 3269))
                      .then((n) => n.startInputShims(c.c));
                const e = yield Promise.resolve().then(a.bind(a, 7593));
                c.c.getBoolean("hardwareBackButton", o)
                  ? e.startHardwareBackButton()
                  : e.blockHardwareBackButton(),
                  typeof window < "u" &&
                    a
                      .e(8592)
                      .then(a.bind(a, 1316))
                      .then((n) => n.startKeyboardAssist(window)),
                  a
                    .e(8592)
                    .then(a.bind(a, 5106))
                    .then((n) => (t.focusVisible = n.startFocusVisible()));
              })
            );
          }
          setFocus(t) {
            var o = this;
            return (0, g.Z)(function* () {
              o.focusVisible && o.focusVisible.setFocus(t);
            })();
          }
          render() {
            const t = (0, c.b)(this);
            return (0, i.h)(i.H, {
              class: {
                [t]: !0,
                "ion-page": !0,
                "force-statusbar-padding": c.c.getBoolean(
                  "_forceStatusbarPadding"
                ),
              },
            });
          }
          get el() {
            return (0, i.i)(this);
          }
        },
        G = () => (0, c.a)(window, "ios") && (0, c.a)(window, "mobile"),
        X = (t) => {
          "requestIdleCallback" in window
            ? window.requestIdleCallback(t)
            : setTimeout(t, 32);
        };
      P.style =
        "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
      const O = class {
        constructor(t) {
          (0, i.r)(this, t), (this.collapse = !1);
        }
        render() {
          const t = (0, c.b)(this);
          return (0, i.h)(i.H, {
            class: { [t]: !0, "buttons-collapse": this.collapse },
          });
        }
      };
      O.style = {
        ios: ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}",
        md: ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}",
      };
      const R = class {
          constructor(t) {
            (0, i.r)(this, t),
              (this.ionScrollStart = (0, i.e)(this, "ionScrollStart", 7)),
              (this.ionScroll = (0, i.e)(this, "ionScroll", 7)),
              (this.ionScrollEnd = (0, i.e)(this, "ionScrollEnd", 7)),
              (this.isScrolling = !1),
              (this.lastScroll = 0),
              (this.queued = !1),
              (this.cTop = -1),
              (this.cBottom = -1),
              (this.isMainContent = !0),
              (this.detail = {
                scrollTop: 0,
                scrollLeft: 0,
                type: "scroll",
                event: void 0,
                startX: 0,
                startY: 0,
                startTime: 0,
                currentX: 0,
                currentY: 0,
                velocityX: 0,
                velocityY: 0,
                deltaX: 0,
                deltaY: 0,
                currentTime: 0,
                data: void 0,
                isScrolling: !0,
              }),
              (this.fullscreen = !1),
              (this.scrollX = !1),
              (this.scrollY = !0),
              (this.scrollEvents = !1);
          }
          connectedCallback() {
            this.isMainContent =
              null === this.el.closest("ion-menu, ion-popover, ion-modal");
          }
          disconnectedCallback() {
            this.onScrollEnd();
          }
          onAppLoad() {
            this.resize();
          }
          shouldForceOverscroll() {
            const { forceOverscroll: t } = this,
              o = (0, c.b)(this);
            return void 0 === t ? "ios" === o && (0, c.a)("ios") : t;
          }
          resize() {
            this.fullscreen
              ? (0, i.f)(() => this.readDimensions())
              : (0 !== this.cTop || 0 !== this.cBottom) &&
                ((this.cTop = this.cBottom = 0), (0, i.j)(this));
          }
          readDimensions() {
            const t = K(this.el),
              o = Math.max(this.el.offsetTop, 0),
              e = Math.max(t.offsetHeight - o - this.el.offsetHeight, 0);
            (o !== this.cTop || e !== this.cBottom) &&
              ((this.cTop = o), (this.cBottom = e), (0, i.j)(this));
          }
          onScroll(t) {
            const o = Date.now(),
              e = !this.isScrolling;
            (this.lastScroll = o),
              e && this.onScrollStart(),
              !this.queued &&
                this.scrollEvents &&
                ((this.queued = !0),
                (0, i.f)((n) => {
                  (this.queued = !1),
                    (this.detail.event = t),
                    $(this.detail, this.scrollEl, n, e),
                    this.ionScroll.emit(this.detail);
                }));
          }
          getScrollElement() {
            var t = this;
            return (0, g.Z)(function* () {
              return (
                t.scrollEl || (yield new Promise((o) => (0, u.c)(t.el, o))),
                Promise.resolve(t.scrollEl)
              );
            })();
          }
          getBackgroundElement() {
            var t = this;
            return (0, g.Z)(function* () {
              return (
                t.backgroundContentEl ||
                  (yield new Promise((o) => (0, u.c)(t.el, o))),
                Promise.resolve(t.backgroundContentEl)
              );
            })();
          }
          scrollToTop(t = 0) {
            return this.scrollToPoint(void 0, 0, t);
          }
          scrollToBottom(t = 0) {
            var o = this;
            return (0, g.Z)(function* () {
              const e = yield o.getScrollElement();
              return o.scrollToPoint(
                void 0,
                e.scrollHeight - e.clientHeight,
                t
              );
            })();
          }
          scrollByPoint(t, o, e) {
            var n = this;
            return (0, g.Z)(function* () {
              const r = yield n.getScrollElement();
              return n.scrollToPoint(t + r.scrollLeft, o + r.scrollTop, e);
            })();
          }
          scrollToPoint(t, o, e = 0) {
            var n = this;
            return (0, g.Z)(function* () {
              const r = yield n.getScrollElement();
              if (e < 32)
                return (
                  null != o && (r.scrollTop = o),
                  void (null != t && (r.scrollLeft = t))
                );
              let s,
                l = 0;
              const d = new Promise((k) => (s = k)),
                p = r.scrollTop,
                f = r.scrollLeft,
                A = null != o ? o - p : 0,
                E = null != t ? t - f : 0,
                M = (k) => {
                  const ht = Math.min(1, (k - l) / e) - 1,
                    B = Math.pow(ht, 3) + 1;
                  0 !== A && (r.scrollTop = Math.floor(B * A + p)),
                    0 !== E && (r.scrollLeft = Math.floor(B * E + f)),
                    B < 1 ? requestAnimationFrame(M) : s();
                };
              return (
                requestAnimationFrame((k) => {
                  (l = k), M(k);
                }),
                d
              );
            })();
          }
          onScrollStart() {
            (this.isScrolling = !0),
              this.ionScrollStart.emit({ isScrolling: !0 }),
              this.watchDog && clearInterval(this.watchDog),
              (this.watchDog = setInterval(() => {
                this.lastScroll < Date.now() - 120 && this.onScrollEnd();
              }, 100));
          }
          onScrollEnd() {
            clearInterval(this.watchDog),
              (this.watchDog = null),
              this.isScrolling &&
                ((this.isScrolling = !1),
                this.ionScrollEnd.emit({ isScrolling: !1 }));
          }
          render() {
            const { isMainContent: t, scrollX: o, scrollY: e, el: n } = this,
              r = (0, x.i)(n) ? "rtl" : "ltr",
              s = (0, c.b)(this),
              l = this.shouldForceOverscroll(),
              d = "ios" === s,
              p = t ? "main" : "div";
            return (
              this.resize(),
              (0, i.h)(
                i.H,
                {
                  class: (0, y.c)(this.color, {
                    [s]: !0,
                    "content-sizing": (0, y.h)("ion-popover", this.el),
                    overscroll: l,
                    [`content-${r}`]: !0,
                  }),
                  style: {
                    "--offset-top": `${this.cTop}px`,
                    "--offset-bottom": `${this.cBottom}px`,
                  },
                },
                (0, i.h)("div", {
                  ref: (f) => (this.backgroundContentEl = f),
                  id: "background-content",
                  part: "background",
                }),
                (0, i.h)(
                  p,
                  {
                    class: {
                      "inner-scroll": !0,
                      "scroll-x": o,
                      "scroll-y": e,
                      overscroll: (o || e) && l,
                    },
                    ref: (f) => (this.scrollEl = f),
                    onScroll: this.scrollEvents
                      ? (f) => this.onScroll(f)
                      : void 0,
                    part: "scroll",
                  },
                  (0, i.h)("slot", null)
                ),
                d
                  ? (0, i.h)(
                      "div",
                      { class: "transition-effect" },
                      (0, i.h)("div", { class: "transition-cover" }),
                      (0, i.h)("div", { class: "transition-shadow" })
                    )
                  : null,
                (0, i.h)("slot", { name: "fixed" })
              )
            );
          }
          get el() {
            return (0, i.i)(this);
          }
        },
        K = (t) => {
          const o = t.closest("ion-tabs");
          return (
            o ||
            t.closest(
              "ion-app, ion-page, .ion-page, page-inner, .popover-content"
            ) ||
            ((t) => {
              var o;
              return t.parentElement
                ? t.parentElement
                : null !== (o = t.parentNode) && void 0 !== o && o.host
                ? t.parentNode.host
                : null;
            })(t)
          );
        },
        $ = (t, o, e, n) => {
          const r = t.currentX,
            s = t.currentY,
            d = o.scrollLeft,
            p = o.scrollTop,
            f = e - t.currentTime;
          if (
            (n &&
              ((t.startTime = e),
              (t.startX = d),
              (t.startY = p),
              (t.velocityX = t.velocityY = 0)),
            (t.currentTime = e),
            (t.currentX = t.scrollLeft = d),
            (t.currentY = t.scrollTop = p),
            (t.deltaX = d - t.startX),
            (t.deltaY = p - t.startY),
            f > 0 && f < 100)
          ) {
            const E = (p - s) / f;
            (t.velocityX = ((d - r) / f) * 0.7 + 0.3 * t.velocityX),
              (t.velocityY = 0.7 * E + 0.3 * t.velocityY);
          }
        };
      R.style =
        ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';
      const Z = (t, o) => {
          (0, i.f)(() => {
            const d = (0, u.l)(
              0,
              1 - (t.scrollTop - (t.scrollHeight - t.clientHeight - 10)) / 10,
              1
            );
            (0, i.c)(() => {
              o.style.setProperty("--opacity-scale", d.toString());
            });
          });
        },
        H = class {
          constructor(t) {
            var o = this;
            (0, i.r)(this, t),
              (this.keyboardCtrl = null),
              (this.keyboardVisible = !1),
              (this.translucent = !1),
              (this.checkCollapsibleFooter = () => {
                if ("ios" !== (0, c.b)(this)) return;
                const { collapse: n } = this,
                  r = "fade" === n;
                if ((this.destroyCollapsibleFooter(), r)) {
                  const s = this.el.closest(
                      "ion-app,ion-page,.ion-page,page-inner"
                    ),
                    l = s ? (0, v.a)(s) : null;
                  if (!l) return void (0, v.p)(this.el);
                  this.setupFadeFooter(l);
                }
              }),
              (this.setupFadeFooter = (function () {
                var e = (0, g.Z)(function* (n) {
                  const r = (o.scrollEl = yield (0, v.g)(n));
                  (o.contentScrollCallback = () => {
                    Z(r, o.el);
                  }),
                    r.addEventListener("scroll", o.contentScrollCallback),
                    Z(r, o.el);
                });
                return function (n) {
                  return e.apply(this, arguments);
                };
              })());
          }
          componentDidLoad() {
            this.checkCollapsibleFooter();
          }
          componentDidUpdate() {
            this.checkCollapsibleFooter();
          }
          connectedCallback() {
            this.keyboardCtrl = (0, b.c)((t) => {
              this.keyboardVisible = t;
            });
          }
          disconnectedCallback() {
            this.keyboardCtrl && this.keyboardCtrl.destroy();
          }
          destroyCollapsibleFooter() {
            this.scrollEl &&
              this.contentScrollCallback &&
              (this.scrollEl.removeEventListener(
                "scroll",
                this.contentScrollCallback
              ),
              (this.contentScrollCallback = void 0));
          }
          render() {
            const { translucent: t, collapse: o } = this,
              e = (0, c.b)(this),
              r = this.el
                .closest("ion-tabs")
                ?.querySelector(":scope > ion-tab-bar");
            return (0, i.h)(
              i.H,
              {
                role: "contentinfo",
                class: {
                  [e]: !0,
                  [`footer-${e}`]: !0,
                  "footer-translucent": t,
                  [`footer-translucent-${e}`]: t,
                  "footer-toolbar-padding": !(
                    this.keyboardVisible ||
                    (r && "bottom" === r.slot)
                  ),
                  [`footer-collapse-${o}`]: void 0 !== o,
                },
              },
              "ios" === e &&
                t &&
                (0, i.h)("div", { class: "footer-background" }),
              (0, i.h)("slot", null)
            );
          }
          get el() {
            return (0, i.i)(this);
          }
        };
      H.style = {
        ios: "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}",
        md: 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md::before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{left:unset;right:unset;right:0}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{background-position:right 0 top 0}.footer-md.ion-no-border::before{display:none}',
      };
      const L = (t) => {
          const o = document.querySelector(`${t}.ion-cloned-element`);
          if (null !== o) return o;
          const e = document.createElement(t);
          return (
            e.classList.add("ion-cloned-element"),
            e.style.setProperty("display", "none"),
            document.body.appendChild(e),
            e
          );
        },
        j = (t) => {
          if (!t) return;
          const o = t.querySelectorAll("ion-toolbar");
          return {
            el: t,
            toolbars: Array.from(o).map((e) => {
              const n = e.querySelector("ion-title");
              return {
                el: e,
                background: e.shadowRoot.querySelector(".toolbar-background"),
                ionTitleEl: n,
                innerTitleEl: n
                  ? n.shadowRoot.querySelector(".toolbar-title")
                  : null,
                ionButtonsEl: Array.from(e.querySelectorAll("ion-buttons")),
              };
            }),
          };
        },
        I = (t, o) => {
          "fade" !== t.collapse &&
            (void 0 === o
              ? t.style.removeProperty("--opacity-scale")
              : t.style.setProperty("--opacity-scale", o.toString()));
        },
        S = (t, o = !0) => {
          const e = t.el;
          o
            ? (e.classList.remove("header-collapse-condense-inactive"),
              e.removeAttribute("aria-hidden"))
            : (e.classList.add("header-collapse-condense-inactive"),
              e.setAttribute("aria-hidden", "true"));
        },
        U = (t, o, e) => {
          (0, i.f)(() => {
            const n = t.scrollTop,
              r = o.clientHeight,
              s = e ? e.clientHeight : 0;
            if (null !== e && n < s)
              return (
                o.style.setProperty("--opacity-scale", "0"),
                void t.style.setProperty(
                  "clip-path",
                  `inset(${r}px 0px 0px 0px)`
                )
              );
            const p = (0, u.l)(0, (n - s) / 10, 1);
            (0, i.c)(() => {
              t.style.removeProperty("clip-path"),
                o.style.setProperty("--opacity-scale", p.toString());
            });
          });
        },
        Y = class {
          constructor(t) {
            var o = this;
            (0, i.r)(this, t),
              (this.inheritedAttributes = {}),
              (this.translucent = !1),
              (this.setupFadeHeader = (function () {
                var e = (0, g.Z)(function* (n, r) {
                  const s = (o.scrollEl = yield (0, v.g)(n));
                  (o.contentScrollCallback = () => {
                    U(o.scrollEl, o.el, r);
                  }),
                    s.addEventListener("scroll", o.contentScrollCallback),
                    U(o.scrollEl, o.el, r);
                });
                return function (n, r) {
                  return e.apply(this, arguments);
                };
              })());
          }
          componentWillLoad() {
            this.inheritedAttributes = (0, u.i)(this.el);
          }
          componentDidLoad() {
            this.checkCollapsibleHeader();
          }
          componentDidUpdate() {
            this.checkCollapsibleHeader();
          }
          disconnectedCallback() {
            this.destroyCollapsibleHeader();
          }
          checkCollapsibleHeader() {
            var t = this;
            return (0, g.Z)(function* () {
              if ("ios" !== (0, c.b)(t)) return;
              const { collapse: e } = t,
                n = "condense" === e,
                r = "fade" === e;
              if ((t.destroyCollapsibleHeader(), n)) {
                const s = t.el.closest("ion-app,ion-page,.ion-page,page-inner"),
                  l = s ? (0, v.a)(s) : null;
                (0, i.c)(() => {
                  (L("ion-title").size = "large"), L("ion-back-button");
                }),
                  yield t.setupCondenseHeader(l, s);
              } else if (r) {
                const s = t.el.closest("ion-app,ion-page,.ion-page,page-inner"),
                  l = s ? (0, v.a)(s) : null;
                if (!l) return void (0, v.p)(t.el);
                const d = l.querySelector('ion-header[collapse="condense"]');
                yield t.setupFadeHeader(l, d);
              }
            })();
          }
          destroyCollapsibleHeader() {
            this.intersectionObserver &&
              (this.intersectionObserver.disconnect(),
              (this.intersectionObserver = void 0)),
              this.scrollEl &&
                this.contentScrollCallback &&
                (this.scrollEl.removeEventListener(
                  "scroll",
                  this.contentScrollCallback
                ),
                (this.contentScrollCallback = void 0)),
              this.collapsibleMainHeader &&
                (this.collapsibleMainHeader.classList.remove(
                  "header-collapse-main"
                ),
                (this.collapsibleMainHeader = void 0));
          }
          setupCondenseHeader(t, o) {
            var e = this;
            return (0, g.Z)(function* () {
              if (!t || !o) return void (0, v.p)(e.el);
              if (typeof IntersectionObserver > "u") return;
              e.scrollEl = yield (0, v.g)(t);
              const n = o.querySelectorAll("ion-header");
              if (
                ((e.collapsibleMainHeader = Array.from(n).find(
                  (d) => "condense" !== d.collapse
                )),
                !e.collapsibleMainHeader)
              )
                return;
              const r = j(e.collapsibleMainHeader),
                s = j(e.el);
              r &&
                s &&
                (S(r, !1),
                I(r.el, 0),
                (e.intersectionObserver = new IntersectionObserver(
                  (d) => {
                    ((t, o, e, n) => {
                      (0, i.c)(() => {
                        const r = n.scrollTop;
                        ((t, o, e) => {
                          if (!t[0].isIntersecting) return;
                          const n =
                            t[0].intersectionRatio > 0.9 || e <= 0
                              ? 0
                              : (100 * (1 - t[0].intersectionRatio)) / 75;
                          I(o.el, 1 === n ? void 0 : n);
                        })(t, o, r);
                        const s = t[0],
                          l = s.intersectionRect,
                          d = l.width * l.height,
                          f =
                            0 === d &&
                            0 == s.rootBounds.width * s.rootBounds.height,
                          A = Math.abs(l.left - s.boundingClientRect.left),
                          E = Math.abs(l.right - s.boundingClientRect.right);
                        f ||
                          (d > 0 && (A >= 5 || E >= 5)) ||
                          (s.isIntersecting
                            ? (S(o, !1), S(e))
                            : ((0 === l.x && 0 === l.y) ||
                                (0 !== l.width && 0 !== l.height)) &&
                              r > 0 &&
                              (S(o), S(e, !1), I(o.el)));
                      });
                    })(d, r, s, e.scrollEl);
                  },
                  {
                    root: t,
                    threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                  }
                )),
                e.intersectionObserver.observe(
                  s.toolbars[s.toolbars.length - 1].el
                ),
                (e.contentScrollCallback = () => {
                  ((t, o, e) => {
                    (0, i.f)(() => {
                      const r = (0, u.l)(1, 1 + -t.scrollTop / 500, 1.1);
                      null ===
                        e.querySelector("ion-refresher.refresher-native") &&
                        (0, i.c)(() => {
                          ((t = [], o = 1, e = !1) => {
                            t.forEach((n) => {
                              const r = n.ionTitleEl,
                                s = n.innerTitleEl;
                              !r ||
                                "large" !== r.size ||
                                ((s.style.transition = e
                                  ? "all 0.2s ease-in-out"
                                  : ""),
                                (s.style.transform = `scale3d(${o}, ${o}, 1)`));
                            });
                          })(o.toolbars, r);
                        });
                    });
                  })(e.scrollEl, s, t);
                }),
                e.scrollEl.addEventListener("scroll", e.contentScrollCallback),
                (0, i.c)(() => {
                  void 0 !== e.collapsibleMainHeader &&
                    e.collapsibleMainHeader.classList.add(
                      "header-collapse-main"
                    );
                }));
            })();
          }
          render() {
            const { translucent: t, inheritedAttributes: o } = this,
              e = (0, c.b)(this),
              n = this.collapse || "none",
              r = (0, y.h)("ion-menu", this.el) ? "none" : "banner";
            return (0, i.h)(
              i.H,
              Object.assign(
                {
                  role: r,
                  class: {
                    [e]: !0,
                    [`header-${e}`]: !0,
                    "header-translucent": this.translucent,
                    [`header-collapse-${n}`]: !0,
                    [`header-translucent-${e}`]: this.translucent,
                  },
                },
                o
              ),
              "ios" === e &&
                t &&
                (0, i.h)("div", { class: "header-background" }),
              (0, i.h)("slot", null)
            );
          }
          get el() {
            return (0, i.i)(this);
          }
        };
      Y.style = {
        ios: "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}",
        md: 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}',
      };
      const N = class {
        constructor(t) {
          (0, i.r)(this, t),
            (this.ionNavWillLoad = (0, i.e)(this, "ionNavWillLoad", 7)),
            (this.ionNavWillChange = (0, i.e)(this, "ionNavWillChange", 3)),
            (this.ionNavDidChange = (0, i.e)(this, "ionNavDidChange", 3)),
            (this.gestureOrAnimationInProgress = !1),
            (this.mode = (0, c.b)(this)),
            (this.animated = !0);
        }
        swipeHandlerChanged() {
          this.gesture && this.gesture.enable(void 0 !== this.swipeHandler);
        }
        connectedCallback() {
          var t = this;
          return (0, g.Z)(function* () {
            (t.gesture = (yield a
              .e(8592)
              .then(a.bind(a, 4464))).createSwipeBackGesture(
              t.el,
              () =>
                !t.gestureOrAnimationInProgress &&
                !!t.swipeHandler &&
                t.swipeHandler.canStart(),
              () => (
                (t.gestureOrAnimationInProgress = !0),
                void (t.swipeHandler && t.swipeHandler.onStart())
              ),
              (e) => {
                var n;
                return null === (n = t.ani) || void 0 === n
                  ? void 0
                  : n.progressStep(e);
              },
              (e, n, r) => {
                if (t.ani) {
                  t.ani.onFinish(
                    () => {
                      (t.gestureOrAnimationInProgress = !1),
                        t.swipeHandler && t.swipeHandler.onEnd(e);
                    },
                    { oneTimeCallback: !0 }
                  );
                  let s = e ? -0.001 : 0.001;
                  e
                    ? (s += (0, h.g)(
                        [0, 0],
                        [0.32, 0.72],
                        [0, 1],
                        [1, 1],
                        n
                      )[0])
                    : (t.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),
                      (s += (0, h.g)(
                        [0, 0],
                        [1, 0],
                        [0.68, 0.28],
                        [1, 1],
                        n
                      )[0])),
                    t.ani.progressEnd(e ? 1 : 0, s, r);
                } else t.gestureOrAnimationInProgress = !1;
              }
            )),
              t.swipeHandlerChanged();
          })();
        }
        componentWillLoad() {
          this.ionNavWillLoad.emit();
        }
        disconnectedCallback() {
          this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
        }
        commit(t, o, e) {
          var n = this;
          return (0, g.Z)(function* () {
            const r = yield n.lock();
            let s = !1;
            try {
              s = yield n.transition(t, o, e);
            } catch (l) {
              console.error(l);
            }
            return r(), s;
          })();
        }
        setRouteId(t, o, e, n) {
          var r = this;
          return (0, g.Z)(function* () {
            return {
              changed: yield r.setRoot(t, o, {
                duration: "root" === e ? 0 : void 0,
                direction: "back" === e ? "back" : "forward",
                animationBuilder: n,
              }),
              element: r.activeEl,
            };
          })();
        }
        getRouteId() {
          var t = this;
          return (0, g.Z)(function* () {
            const o = t.activeEl;
            return o
              ? { id: o.tagName, element: o, params: t.activeParams }
              : void 0;
          })();
        }
        setRoot(t, o, e) {
          var n = this;
          return (0, g.Z)(function* () {
            if (n.activeComponent === t && (0, u.s)(o, n.activeParams))
              return !1;
            const r = n.activeEl,
              s = yield (0, m.a)(
                n.delegate,
                n.el,
                t,
                ["ion-page", "ion-page-invisible"],
                o
              );
            return (
              (n.activeComponent = t),
              (n.activeEl = s),
              (n.activeParams = o),
              yield n.commit(s, r, e),
              yield (0, m.d)(n.delegate, r),
              !0
            );
          })();
        }
        transition(t, o, e = {}) {
          var n = this;
          return (0, g.Z)(function* () {
            if (o === t) return !1;
            n.ionNavWillChange.emit();
            const { el: r, mode: s } = n,
              l = n.animated && c.c.getBoolean("animated", !0),
              d = e.animationBuilder || n.animation || c.c.get("navAnimation");
            return (
              yield (0, T.t)(
                Object.assign(
                  Object.assign(
                    {
                      mode: s,
                      animated: l,
                      enteringEl: t,
                      leavingEl: o,
                      baseEl: r,
                      progressCallback: e.progressAnimation
                        ? (p) => {
                            void 0 === p || n.gestureOrAnimationInProgress
                              ? (n.ani = p)
                              : ((n.gestureOrAnimationInProgress = !0),
                                p.onFinish(
                                  () => {
                                    (n.gestureOrAnimationInProgress = !1),
                                      n.swipeHandler &&
                                        n.swipeHandler.onEnd(!1);
                                  },
                                  { oneTimeCallback: !0 }
                                ),
                                p.progressEnd(0, 0, 0));
                          }
                        : void 0,
                    },
                    e
                  ),
                  { animationBuilder: d }
                )
              ),
              n.ionNavDidChange.emit(),
              !0
            );
          })();
        }
        lock() {
          var t = this;
          return (0, g.Z)(function* () {
            const o = t.waitPromise;
            let e;
            return (
              (t.waitPromise = new Promise((n) => (e = n))),
              void 0 !== o && (yield o),
              e
            );
          })();
        }
        render() {
          return (0, i.h)("slot", null);
        }
        get el() {
          return (0, i.i)(this);
        }
        static get watchers() {
          return { swipeHandler: ["swipeHandlerChanged"] };
        }
      };
      N.style =
        ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
      const W = class {
        constructor(t) {
          (0, i.r)(this, t), (this.ionStyle = (0, i.e)(this, "ionStyle", 7));
        }
        sizeChanged() {
          this.emitStyle();
        }
        connectedCallback() {
          this.emitStyle();
        }
        emitStyle() {
          const t = this.getSize();
          this.ionStyle.emit({ [`title-${t}`]: !0 });
        }
        getSize() {
          return void 0 !== this.size ? this.size : "default";
        }
        render() {
          const t = (0, c.b)(this),
            o = this.getSize();
          return (0, i.h)(
            i.H,
            {
              class: (0, y.c)(this.color, {
                [t]: !0,
                [`title-${o}`]: !0,
                "title-rtl": "rtl" === document.dir,
              }),
            },
            (0, i.h)("div", { class: "toolbar-title" }, (0, i.h)("slot", null))
          );
        }
        get el() {
          return (0, i.i)(this);
        }
        static get watchers() {
          return { size: ["sizeChanged"] };
        }
      };
      W.style = {
        ios: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}",
        md: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}",
      };
      const F = class {
        constructor(t) {
          (0, i.r)(this, t), (this.childrenStyles = new Map());
        }
        componentWillLoad() {
          const t = Array.from(this.el.querySelectorAll("ion-buttons")),
            o = t.find((r) => "start" === r.slot);
          o && o.classList.add("buttons-first-slot");
          const e = t.reverse(),
            n =
              e.find((r) => "end" === r.slot) ||
              e.find((r) => "primary" === r.slot) ||
              e.find((r) => "secondary" === r.slot);
          n && n.classList.add("buttons-last-slot");
        }
        childrenStyle(t) {
          t.stopPropagation();
          const o = t.target.tagName,
            e = t.detail,
            n = {},
            r = this.childrenStyles.get(o) || {};
          let s = !1;
          Object.keys(e).forEach((l) => {
            const d = `toolbar-${l}`,
              p = e[l];
            p !== r[d] && (s = !0), p && (n[d] = !0);
          }),
            s && (this.childrenStyles.set(o, n), (0, i.j)(this));
        }
        render() {
          const t = (0, c.b)(this),
            o = {};
          return (
            this.childrenStyles.forEach((e) => {
              Object.assign(o, e);
            }),
            (0, i.h)(
              i.H,
              {
                class: Object.assign(
                  Object.assign({}, o),
                  (0, y.c)(this.color, {
                    [t]: !0,
                    "in-toolbar": (0, y.h)("ion-toolbar", this.el),
                  })
                ),
              },
              (0, i.h)("div", { class: "toolbar-background" }),
              (0, i.h)(
                "div",
                { class: "toolbar-container" },
                (0, i.h)("slot", { name: "start" }),
                (0, i.h)("slot", { name: "secondary" }),
                (0, i.h)(
                  "div",
                  { class: "toolbar-content" },
                  (0, i.h)("slot", null)
                ),
                (0, i.h)("slot", { name: "primary" }),
                (0, i.h)("slot", { name: "end" })
              )
            )
          );
        }
        get el() {
          return (0, i.i)(this);
        }
      };
      F.style = {
        ios: ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",
        md: ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}",
      };
    },
    2854: (D, w, a) => {
      a.d(w, { c: () => c, g: () => x, h: () => i, o: () => v });
      var g = a(5861);
      const i = (b, h) => null !== h.closest(b),
        c = (b, h) =>
          "string" == typeof b && b.length > 0
            ? Object.assign({ "ion-color": !0, [`ion-color-${b}`]: !0 }, h)
            : h,
        x = (b) => {
          const h = {};
          return (
            ((b) =>
              void 0 !== b
                ? (Array.isArray(b) ? b : b.split(" "))
                    .filter((m) => null != m)
                    .map((m) => m.trim())
                    .filter((m) => "" !== m)
                : [])(b).forEach((m) => (h[m] = !0)),
            h
          );
        },
        y = /^[a-z][a-z0-9+\-.]*:/,
        v = (function () {
          var b = (0, g.Z)(function* (h, m, T, z) {
            if (null != h && "#" !== h[0] && !y.test(h)) {
              const C = document.querySelector("ion-router");
              if (C) return m?.preventDefault(), C.push(h, T, z);
            }
            return !1;
          });
          return function (m, T, z, C) {
            return b.apply(this, arguments);
          };
        })();
    },
  },
]);
