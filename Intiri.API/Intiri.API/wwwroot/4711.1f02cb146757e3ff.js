"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [4711],
  {
    4147: (j, f, a) => {
      a.d(f, { a: () => u, b: () => i, p: () => v });
      const v = (o, ...m) => console.warn(`[Ionic Warning]: ${o}`, ...m),
        i = (o, ...m) => console.error(`[Ionic Error]: ${o}`, ...m),
        u = (o, ...m) =>
          console.error(
            `<${o.tagName.toLowerCase()}> must be used inside ${m.join(
              " or "
            )}.`
          );
    },
    4711: (j, f, a) => {
      a.r(f),
        a.d(f, {
          ion_item: () => s,
          ion_item_divider: () => x,
          ion_item_group: () => E,
          ion_label: () => O,
          ion_list: () => A,
          ion_list_header: () => M,
          ion_note: () => L,
          ion_skeleton_text: () => D,
        });
      var v = a(5861),
        i = a(1308),
        u = a(3938),
        o = a(9658),
        m = a(5730),
        y = a(4147),
        d = a(2854);
      const s = class {
        constructor(t) {
          (0, i.r)(this, t),
            (this.labelColorStyles = {}),
            (this.itemStyles = new Map()),
            (this.inheritedAriaAttributes = {}),
            (this.multipleInputs = !1),
            (this.focusable = !0),
            (this.button = !1),
            (this.detailIcon = u.o),
            (this.disabled = !1),
            (this.counter = !1),
            (this.routerDirection = "forward"),
            (this.type = "button");
        }
        counterFormatterChanged() {
          this.updateCounterOutput(this.getFirstInput());
        }
        handleIonChange(t) {
          this.counter &&
            t.target === this.getFirstInput() &&
            this.updateCounterOutput(t.target);
        }
        labelColorChanged(t) {
          const { color: e } = this;
          void 0 === e && (this.labelColorStyles = t.detail);
        }
        itemStyle(t) {
          t.stopPropagation();
          const e = t.target.tagName,
            n = t.detail,
            h = {},
            p = this.itemStyles.get(e) || {};
          let g = !1;
          Object.keys(n).forEach((c) => {
            if (n[c]) {
              const b = `item-${c}`;
              p[b] || (g = !0), (h[b] = !0);
            }
          }),
            !g && Object.keys(h).length !== Object.keys(p).length && (g = !0),
            g && (this.itemStyles.set(e, h), (0, i.j)(this));
        }
        connectedCallback() {
          this.counter && this.updateCounterOutput(this.getFirstInput()),
            this.hasStartEl();
        }
        componentDidUpdate() {
          const t = this.getFirstInput();
          void 0 !== t &&
            !this.clickListener &&
            ((this.clickListener = (e) => this.delegateFocus(e, t)),
            this.el.addEventListener("click", this.clickListener));
        }
        disconnectedCallback() {
          void 0 !== this.getFirstInput() &&
            this.clickListener &&
            (this.el.removeEventListener("click", this.clickListener),
            (this.clickListener = void 0));
        }
        componentDidLoad() {
          (0, m.r)(() => {
            (this.inheritedAriaAttributes = (0, m.j)(this.el, ["aria-label"])),
              this.setMultipleInputs(),
              (this.focusable = this.isFocusable());
          });
        }
        setMultipleInputs() {
          const t = this.el.querySelectorAll(
              "ion-checkbox, ion-datetime, ion-select, ion-radio"
            ),
            e = this.el.querySelectorAll(
              "ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"
            ),
            n = this.el.querySelectorAll("ion-anchor, ion-button, a, button");
          this.multipleInputs =
            t.length + e.length > 1 ||
            t.length + n.length > 1 ||
            (t.length > 0 && this.isClickable());
        }
        hasCover() {
          return (
            1 ===
              this.el.querySelectorAll(
                "ion-checkbox, ion-datetime, ion-select, ion-radio"
              ).length && !this.multipleInputs
          );
        }
        isClickable() {
          return void 0 !== this.href || this.button;
        }
        canActivate() {
          return this.isClickable() || this.hasCover();
        }
        isFocusable() {
          const t = this.el.querySelector(".ion-focusable");
          return this.canActivate() || null !== t;
        }
        getFirstInput() {
          return this.el.querySelectorAll("ion-input, ion-textarea")[0];
        }
        delegateFocus(t, e) {
          const n = "ION-ITEM" === t.target.tagName;
          let h = !1;
          document.activeElement &&
            (h = e.querySelector("input, textarea") === document.activeElement),
            n &&
              (h || !this.multipleInputs) &&
              ((e.fireFocusEvents = !1),
              e.setBlur(),
              e.setFocus(),
              (0, m.r)(() => {
                e.fireFocusEvents = !0;
              }));
        }
        updateCounterOutput(t) {
          var e, n;
          const {
            counter: h,
            counterFormatter: p,
            defaultCounterFormatter: g,
          } = this;
          if (h && !this.multipleInputs && void 0 !== t?.maxlength) {
            const c =
              null !==
                (n =
                  null === (e = t?.value) || void 0 === e
                    ? void 0
                    : e.toString().length) && void 0 !== n
                ? n
                : 0;
            if (void 0 === p) this.counterString = g(c, t.maxlength);
            else
              try {
                this.counterString = p(c, t.maxlength);
              } catch (b) {
                (0, y.b)("Exception in provided `counterFormatter`.", b),
                  (this.counterString = g(c, t.maxlength));
              }
          }
        }
        defaultCounterFormatter(t, e) {
          return `${t} / ${e}`;
        }
        hasStartEl() {
          null !== this.el.querySelector('[slot="start"]') &&
            this.el.classList.add("item-has-start-slot");
        }
        render() {
          const {
              counterString: t,
              detail: e,
              detailIcon: n,
              download: h,
              fill: p,
              labelColorStyles: g,
              lines: c,
              disabled: b,
              href: z,
              rel: q,
              shape: F,
              target: V,
              routerAnimation: J,
              routerDirection: Q,
              inheritedAriaAttributes: tt,
            } = this,
            _ = {},
            C = (0, o.b)(this),
            I = this.isClickable(),
            $ = this.canActivate(),
            X = I ? (void 0 === z ? "button" : "a") : "div",
            it =
              "button" === X
                ? { type: this.type }
                : { download: h, href: z, rel: q, target: V },
            et = I
              ? {
                  onClick: (S) => {
                    (0, d.o)(z, S, Q, J);
                  },
                }
              : {},
            ot = void 0 !== e ? e : "ios" === C && I;
          this.itemStyles.forEach((S) => {
            Object.assign(_, S);
          });
          const nt = b || _["item-interactive-disabled"] ? "true" : null,
            rt = p || "none",
            P = (0, d.h)("ion-list", this.el);
          return (0, i.h)(
            i.H,
            {
              "aria-disabled": nt,
              class: Object.assign(
                Object.assign(Object.assign({}, _), g),
                (0, d.c)(this.color, {
                  item: !0,
                  [C]: !0,
                  [`item-lines-${c}`]: void 0 !== c,
                  [`item-fill-${rt}`]: !0,
                  [`item-shape-${F}`]: void 0 !== F,
                  "item-disabled": b,
                  "in-list": P,
                  "item-multiple-inputs": this.multipleInputs,
                  "ion-activatable": $,
                  "ion-focusable": this.focusable,
                  "item-rtl": "rtl" === document.dir,
                })
              ),
              role: P ? "listitem" : null,
            },
            (0, i.h)(
              X,
              Object.assign(
                {},
                it,
                tt,
                { class: "item-native", part: "native", disabled: b },
                et
              ),
              (0, i.h)("slot", { name: "start" }),
              (0, i.h)(
                "div",
                { class: "item-inner" },
                (0, i.h)(
                  "div",
                  { class: "input-wrapper" },
                  (0, i.h)("slot", null)
                ),
                (0, i.h)("slot", { name: "end" }),
                ot &&
                  (0, i.h)("ion-icon", {
                    icon: n,
                    lazy: !1,
                    class: "item-detail-icon",
                    part: "detail-icon",
                    "aria-hidden": "true",
                    "flip-rtl": n === u.o,
                  }),
                (0, i.h)("div", { class: "item-inner-highlight" })
              ),
              $ && "md" === C && (0, i.h)("ion-ripple-effect", null),
              (0, i.h)("div", { class: "item-highlight" })
            ),
            (0, i.h)(
              "div",
              { class: "item-bottom" },
              (0, i.h)("slot", { name: "error" }),
              (0, i.h)("slot", { name: "helper" }),
              t && (0, i.h)("ion-note", { class: "item-counter" }, t)
            )
          );
        }
        static get delegatesFocus() {
          return !0;
        }
        get el() {
          return (0, i.i)(this);
        }
        static get watchers() {
          return { counterFormatter: ["counterFormatterChanged"] };
        }
      };
      s.style = {
        ios: ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-bottom{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end)}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{margin-left:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-counter{margin-left:unset;-webkit-margin-start:auto;margin-inline-start:auto}}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:20px;--inner-padding-end:10px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:#000;--background-focused:#000;--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--color:var(--ion-item-color, var(--ion-text-color, #000));--highlight-height:0px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--bottom-padding-start:0px;font-size:17px}:host(.ion-activated){--transition:none}:host(.ion-color.ion-focused) .item-native::after{background:#000;opacity:0.15}:host(.ion-color.ion-activated) .item-native::after{background:#000;opacity:0.12}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus) .item-highlight{border-top:none;border-right:none;border-left:none}::slotted([slot=start]){margin-left:0;margin-right:20px;margin-top:2px;margin-bottom:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:20px;margin-inline-end:20px}}::slotted([slot=end]){margin-left:10px;margin-right:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0px;margin-inline-start:0px}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}:host(.item-label-fixed) ::slotted(ion-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:0}',
        md: ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-bottom{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end)}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{margin-left:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-counter{margin-left:unset;-webkit-margin-start:auto;margin-inline-start:auto}}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:48px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--color:var(--ion-item-color, var(--ion-text-color, #000));--transition:opacity 15ms linear, background-color 15ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:1px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:16px;font-weight:normal;text-transform:none}:host(.item-fill-outline){--highlight-height:2px}:host(.item-fill-none.item-interactive.ion-focus) .item-highlight,:host(.item-fill-none.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-none.item-interactive.ion-focus) .item-native,:host(.item-fill-none.item-interactive.item-has-focus) .item-native,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-highlight{border-width:var(--full-highlight-height);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-native{border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-highlight,:host(.item-fill-solid.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-native,:host(.item-fill-solid.item-interactive.item-has-focus) .item-native,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.ion-color.ion-activated) .item-native::after{background:transparent}:host(.item-has-focus) .item-native{caret-color:var(--highlight-background)}:host(.item-interactive){--border-width:0 0 1px 0;--inner-border-width:0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-fill-outline) .item-highlight{--position-offset:calc(-1 * var(--border-width));left:var(--position-offset);top:var(--position-offset);width:calc(100% + 2 * var(--border-width));height:calc(100% + 2 * var(--border-width));-webkit-transition:none;transition:none}:host-context([dir=rtl]):host(.item-fill-outline) .item-highlight,:host-context([dir=rtl]).item-fill-outline .item-highlight{left:unset;right:unset;right:var(--position-offset)}:host(.item-fill-outline.ion-focused) .item-native,:host(.item-fill-outline.item-has-focus) .item-native{border-color:transparent}:host(.item-multi-line) ::slotted([slot=start]),:host(.item-multi-line) ::slotted([slot=end]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted([slot=start]){margin-right:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted([slot=end]){margin-left:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:24px}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){margin-right:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted(ion-icon[slot=end]){margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}:host(.item-fill-solid) ::slotted(ion-icon[slot=start]),:host(.item-fill-outline) ::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-fill-solid) ::slotted(ion-icon[slot=start]),:host(.item-fill-outline) ::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:start;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]:not([slot=helper]):not([slot=error])){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){padding-right:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-note[slot=start]){padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-note[slot=end]){padding-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-note[slot=end]){padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:10px;margin-bottom:10px}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-fixed) ::slotted(ion-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:8px}:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.ion-focused:not(.ion-color)) ::slotted(.label-stacked),:host(.ion-focused:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating){color:var(--ion-color-primary, #3880ff)}:host(.ion-color){--highlight-color-focused:var(--ion-color-contrast)}:host(.item-label-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid.ion-color),:host(.item-fill-outline.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid){--background:var(--ion-color-step-50, #f2f2f2);--background-hover:var(--ion-color-step-100, #e6e6e6);--background-focused:var(--ion-color-step-150, #d9d9d9);--border-width:0 0 1px 0;--inner-border-width:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid),:host-context([dir=rtl]).item-fill-solid{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.item-fill-solid) .item-native{--border-color:var(--ion-color-step-500, gray)}:host(.item-fill-solid.ion-focused) .item-native,:host(.item-fill-solid.item-has-focus) .item-native{--background:var(--background-focused)}:host(.item-fill-solid.item-shape-round){border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid.item-shape-round),:host-context([dir=rtl]).item-fill-solid.item-shape-round{border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}@media (any-hover: hover){:host(.item-fill-solid:hover) .item-native{--background:var(--background-hover);--border-color:var(--ion-color-step-750, #404040)}}:host(.item-fill-outline){--ripple-color:transparent;--background-focused:transparent;--background-hover:transparent;--border-color:var(--ion-color-step-500, gray);--border-width:1px;border:none;overflow:visible}:host(.item-fill-outline) .item-native{--native-padding-left:16px;border-radius:4px}:host(.item-fill-outline.item-shape-round) .item-native{--inner-padding-start:16px;border-radius:28px}:host(.item-fill-outline.item-shape-round) .item-bottom{padding-left:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-fill-outline.item-shape-round) .item-bottom{padding-left:unset;-webkit-padding-start:32px;padding-inline-start:32px}}:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-textarea:not(:first-child)){-webkit-transform:translateY(-14px);transform:translateY(-14px)}@media (any-hover: hover){:host(.item-fill-outline:hover) .item-native{--border-color:var(--ion-color-step-750, #404040)}}.item-counter{letter-spacing:0.0333333333em}',
      };
      const x = class {
        constructor(t) {
          (0, i.r)(this, t), (this.sticky = !1);
        }
        render() {
          const t = (0, o.b)(this);
          return (0, i.h)(
            i.H,
            {
              class: (0, d.c)(this.color, {
                [t]: !0,
                "item-divider-sticky": this.sticky,
                item: !0,
              }),
            },
            (0, i.h)("slot", { name: "start" }),
            (0, i.h)(
              "div",
              { class: "item-divider-inner" },
              (0, i.h)(
                "div",
                { class: "item-divider-wrapper" },
                (0, i.h)("slot", null)
              ),
              (0, i.h)("slot", { name: "end" })
            )
          );
        }
        get el() {
          return (0, i.i)(this);
        }
      };
      x.style = {
        ios: ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--inner-padding-top:0px;--inner-padding-end:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.item-divider-sticky){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-divider-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-divider-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}:host{--background:var(--ion-color-step-100, #e6e6e6);--color:var(--ion-color-step-850, #262626);--padding-start:20px;--inner-padding-end:10px;border-radius:0;position:relative;min-height:28px;font-size:17px;font-weight:600}:host([slot=start]){margin-left:0;margin-right:20px;margin-top:2px;margin-bottom:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:20px;margin-inline-end:20px}}:host([slot=end]){margin-left:10px;margin-right:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(h1){margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}::slotted(h2){margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}::slotted(p){margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}::slotted(h2:last-child) ::slotted(h3:last-child),::slotted(h4:last-child),::slotted(h5:last-child),::slotted(h6:last-child),::slotted(p:last-child){margin-bottom:0}",
        md: ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--inner-padding-top:0px;--inner-padding-end:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.item-divider-sticky){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-divider-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-divider-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}:host{--background:var(--ion-background-color, #fff);--color:var(--ion-color-step-400, #999999);--padding-start:16px;--inner-padding-end:0;min-height:30px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));font-size:14px}::slotted([slot=start]){margin-right:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted([slot=end]){margin-left:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:13px;margin-bottom:10px}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:24px}:host(.ion-color) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){margin-right:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted(ion-icon[slot=end]){margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:start;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){padding-right:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-note[slot=start]){padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-note[slot=end]){padding-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-note[slot=end]){padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(h1){margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}::slotted(h2){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}::slotted(h3,h4,h5,h6){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}::slotted(p){margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;color:var(--ion-color-step-600, #666666);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}",
      };
      const E = class {
        constructor(t) {
          (0, i.r)(this, t);
        }
        render() {
          const t = (0, o.b)(this);
          return (0, i.h)(i.H, {
            role: "group",
            class: { [t]: !0, [`item-group-${t}`]: !0, item: !0 },
          });
        }
      };
      E.style = {
        ios: "ion-item-group{display:block}",
        md: "ion-item-group{display:block}",
      };
      const O = class {
        constructor(t) {
          (0, i.r)(this, t),
            (this.ionColor = (0, i.e)(this, "ionColor", 7)),
            (this.ionStyle = (0, i.e)(this, "ionStyle", 7)),
            (this.inRange = !1),
            (this.noAnimate = !1);
        }
        componentWillLoad() {
          (this.inRange = !!this.el.closest("ion-range")),
            (this.noAnimate = "floating" === this.position),
            this.emitStyle(),
            this.emitColor();
        }
        componentDidLoad() {
          this.noAnimate &&
            setTimeout(() => {
              this.noAnimate = !1;
            }, 1e3);
        }
        colorChanged() {
          this.emitColor();
        }
        positionChanged() {
          this.emitStyle();
        }
        emitColor() {
          const { color: t } = this;
          this.ionColor.emit({
            "item-label-color": void 0 !== t,
            [`ion-color-${t}`]: void 0 !== t,
          });
        }
        emitStyle() {
          const { inRange: t, position: e } = this;
          t || this.ionStyle.emit({ label: !0, [`label-${e}`]: void 0 !== e });
        }
        render() {
          const t = this.position,
            e = (0, o.b)(this);
          return (0, i.h)(i.H, {
            class: (0, d.c)(this.color, {
              [e]: !0,
              "in-item-color": (0, d.h)("ion-item.ion-color", this.el),
              [`label-${t}`]: void 0 !== t,
              "label-no-animate": this.noAnimate,
              "label-rtl": "rtl" === document.dir,
            }),
          });
        }
        get el() {
          return (0, i.i)(this);
        }
        static get watchers() {
          return { color: ["colorChanged"], position: ["positionChanged"] };
        }
      };
      O.style = {
        ios: ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:14px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:22px;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}",
        md: '.item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--ion-item-background, var(--ion-background-color, #fff));overflow:visible;z-index:3}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{position:absolute;width:4px;height:100%;background-color:var(--ion-item-background, var(--ion-background-color, #fff));content:""}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before{left:calc(-1 * 4px)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{right:calc(-1 * 4px)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-ion-label-md-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.item-fill-solid.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-base)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}',
      };
      const A = class {
        constructor(t) {
          (0, i.r)(this, t), (this.inset = !1);
        }
        closeSlidingItems() {
          var t = this;
          return (0, v.Z)(function* () {
            const e = t.el.querySelector("ion-item-sliding");
            return !!e?.closeOpened && e.closeOpened();
          })();
        }
        render() {
          const t = (0, o.b)(this),
            { lines: e, inset: n } = this;
          return (0, i.h)(i.H, {
            role: "list",
            class: {
              [t]: !0,
              [`list-${t}`]: !0,
              "list-inset": n,
              [`list-lines-${e}`]: void 0 !== e,
              [`list-${t}-lines-${e}`]: void 0 !== e,
            },
          });
        }
        get el() {
          return (0, i.i)(this);
        }
      };
      A.style = {
        ios: "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{background:var(--ion-item-background, var(--ion-background-color, #fff))}.list-ios.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.list-ios.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-ios.list-inset ion-item{--border-width:0 0 1px 0;--inner-border-width:0}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item{--border-width:0;--inner-border-width:0}.list-ios-lines-full .item,.list-ios .item-lines-full{--border-width:0 0 0.55px 0}.list-ios-lines-full .item{--inner-border-width:0}.list-ios-lines-inset .item,.list-ios .item-lines-inset{--inner-border-width:0 0 0.55px 0}.list-ios .item-lines-inset{--border-width:0}.list-ios .item-lines-full{--inner-border-width:0}.list-ios .item-lines-none{--border-width:0;--inner-border-width:0}ion-card .list-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
        md: "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background, var(--ion-background-color, #fff))}.list-md>.input:last-child::after{left:0}[dir=rtl] .list-md>.input:last-child::after,:host-context([dir=rtl]) .list-md>.input:last-child::after{left:unset;right:unset;right:0}.list-md.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.list-md.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px, 2px;--border-width:0;--inner-border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md-lines-full .item,.list-md .item-lines-full{--border-width:0 0 1px 0}.list-md-lines-full .item{--inner-border-width:0}.list-md-lines-inset .item,.list-md .item-lines-inset{--inner-border-width:0 0 1px 0}.list-md .item-lines-inset{--border-width:0}.list-md .item-lines-full{--inner-border-width:0}.list-md .item-lines-none{--border-width:0;--inner-border-width:0}ion-card .list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
      };
      const M = class {
        constructor(t) {
          (0, i.r)(this, t);
        }
        render() {
          const { lines: t } = this,
            e = (0, o.b)(this);
          return (0, i.h)(
            i.H,
            {
              class: (0, d.c)(this.color, {
                [e]: !0,
                [`list-header-lines-${t}`]: void 0 !== t,
              }),
            },
            (0, i.h)(
              "div",
              { class: "list-header-inner" },
              (0, i.h)("slot", null)
            )
          );
        }
      };
      M.style = {
        ios: ":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex:1 1 auto;flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-color-step-850, #262626);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));padding-left:calc(var(--ion-safe-area-left, 0px) + 20px);position:relative;-ms-flex-align:end;align-items:flex-end;font-size:22px;font-weight:700;letter-spacing:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 20px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 20px)}}::slotted(ion-button),::slotted(ion-label){margin-top:29px;margin-bottom:6px}::slotted(ion-button){margin-left:3px;margin-right:3px;height:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-button){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:3px;margin-inline-end:3px}}:host(.list-header-lines-full){--border-width:0 0 0.55px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 0.55px 0}",
        md: ":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex:1 1 auto;flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-text-color, #000);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));padding-left:calc(var(--ion-safe-area-left, 0) + 16px);min-height:45px;font-size:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0) + 16px)}}:host(.list-header-lines-full){--border-width:0 0 1px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 1px 0}",
      };
      const L = class {
        constructor(t) {
          (0, i.r)(this, t);
        }
        render() {
          const t = (0, o.b)(this);
          return (0, i.h)(
            i.H,
            { class: (0, d.c)(this.color, { [t]: !0 }) },
            (0, i.h)("slot", null)
          );
        }
      };
      L.style = {
        ios: ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350, #a6a6a6)}",
        md: ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);font-size:14px}",
      };
      const D = class {
        constructor(t) {
          (0, i.r)(this, t), (this.animated = !1);
        }
        render() {
          const t = this.animated && o.c.getBoolean("animated", !0),
            e =
              (0, d.h)("ion-avatar", this.el) ||
              (0, d.h)("ion-thumbnail", this.el),
            n = (0, o.b)(this);
          return (0, i.h)(
            i.H,
            { class: { [n]: !0, "skeleton-text-animated": t, "in-media": e } },
            (0, i.h)("span", null, "\xa0")
          );
        }
        get el() {
          return (0, i.i)(this);
        }
      };
      D.style =
        ":host{--background:rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);border-radius:var(--border-radius, inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:-webkit-gradient(linear, left top, right top, color-stop(8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065)), color-stop(18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135)), color-stop(33%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065)));background:linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);background-size:800px 104px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:shimmer;animation-name:shimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}";
    },
    2854: (j, f, a) => {
      a.d(f, { c: () => u, g: () => m, h: () => i, o: () => d });
      var v = a(5861);
      const i = (r, l) => null !== l.closest(r),
        u = (r, l) =>
          "string" == typeof r && r.length > 0
            ? Object.assign({ "ion-color": !0, [`ion-color-${r}`]: !0 }, l)
            : l,
        m = (r) => {
          const l = {};
          return (
            ((r) =>
              void 0 !== r
                ? (Array.isArray(r) ? r : r.split(" "))
                    .filter((s) => null != s)
                    .map((s) => s.trim())
                    .filter((s) => "" !== s)
                : [])(r).forEach((s) => (l[s] = !0)),
            l
          );
        },
        y = /^[a-z][a-z0-9+\-.]*:/,
        d = (function () {
          var r = (0, v.Z)(function* (l, s, w, k) {
            if (null != l && "#" !== l[0] && !y.test(l)) {
              const x = document.querySelector("ion-router");
              if (x) return s?.preventDefault(), x.push(l, w, k);
            }
            return !1;
          });
          return function (s, w, k, x) {
            return r.apply(this, arguments);
          };
        })();
    },
  },
]);
