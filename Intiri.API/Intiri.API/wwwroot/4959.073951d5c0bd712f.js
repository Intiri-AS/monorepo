"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [4959],
  {
    4959: (st, V, y) => {
      y.r(V),
        y.d(V, {
          ion_datetime: () => W,
          ion_picker: () => R,
          ion_picker_column: () => F,
        });
      var w = y(5861),
        a = y(1308),
        O = y(3938),
        A = y(9658),
        $ = y(5106),
        C = y(5730),
        D = y(4147),
        _ = y(5062),
        I = y(2854),
        o = y(2366),
        v = y(4414),
        M = y(5942),
        z = y(7683);
      y(3457);
      const L = (e, t, i, n) =>
          !!(
            null === e.day ||
            (void 0 !== n && !n.includes(e.day)) ||
            (t && (0, o.i)(e, t)) ||
            (i && (0, o.b)(e, i))
          ),
        T = (e, { minParts: t, maxParts: i }) =>
          !!(
            ((e, t, i) => !!((t && t.year > e) || (i && i.year < e)))(
              e.year,
              t,
              i
            ) ||
            (t && (0, o.i)(e, t)) ||
            (i && (0, o.b)(e, i))
          ),
        W = class {
          constructor(e) {
            (0, a.r)(this, e),
              (this.ionCancel = (0, a.e)(this, "ionCancel", 7)),
              (this.ionChange = (0, a.e)(this, "ionChange", 7)),
              (this.ionFocus = (0, a.e)(this, "ionFocus", 7)),
              (this.ionBlur = (0, a.e)(this, "ionBlur", 7)),
              (this.ionStyle = (0, a.e)(this, "ionStyle", 7)),
              (this.ionRender = (0, a.e)(this, "ionRender", 7)),
              (this.inputId = "ion-dt-" + J++),
              (this.todayParts = (0, o.p)((0, o.f)())),
              (this.prevPresentation = null),
              (this.activePartsClone = []),
              (this.showMonthAndYear = !1),
              (this.activeParts = []),
              (this.workingParts = {
                month: 5,
                day: 28,
                year: 2021,
                hour: 13,
                minute: 52,
                ampm: "pm",
              }),
              (this.isPresented = !1),
              (this.isTimePopoverOpen = !1),
              (this.color = "primary"),
              (this.name = this.inputId),
              (this.disabled = !1),
              (this.readonly = !1),
              (this.presentation = "date-time"),
              (this.cancelText = "Cancel"),
              (this.doneText = "Done"),
              (this.clearText = "Clear"),
              (this.locale = "default"),
              (this.firstDayOfWeek = 0),
              (this.multiple = !1),
              (this.showDefaultTitle = !1),
              (this.showDefaultButtons = !1),
              (this.showClearButton = !1),
              (this.showDefaultTimeLabel = !0),
              (this.size = "fixed"),
              (this.preferWheel = !1),
              (this.getDefaultPart = () => {
                const { activePartsClone: t, todayParts: i } = this;
                return (Array.isArray(t) ? t[0] : t) ?? i;
              }),
              (this.closeParentOverlay = () => {
                const t = this.el.closest("ion-modal, ion-popover");
                t && t.dismiss();
              }),
              (this.setWorkingParts = (t) => {
                this.workingParts = Object.assign({}, t);
              }),
              (this.setActiveParts = (t, i = !1) => {
                const { multiple: n, activePartsClone: r } = this,
                  s = (0, o.v)(t);
                if ((this.setWorkingParts(s), n)) {
                  const h = Array.isArray(r) ? r : [r];
                  this.activeParts = i
                    ? h.filter((c) => !(0, o.c)(c, s))
                    : [...h, s];
                } else this.activeParts = Object.assign({}, s);
                null !== this.el.querySelector('[slot="buttons"]') ||
                  this.showDefaultButtons ||
                  this.confirm();
              }),
              (this.initializeKeyboardListeners = () => {
                const t = this.calendarBodyRef;
                if (!t) return;
                const i = this.el.shadowRoot,
                  n = t.querySelector(".calendar-month:nth-of-type(2)"),
                  s = new MutationObserver((d) => {
                    var h;
                    (null === (h = d[0].oldValue) || void 0 === h
                      ? void 0
                      : h.includes("ion-focused")) ||
                      !t.classList.contains("ion-focused") ||
                      this.focusWorkingDay(n);
                  });
                s.observe(t, {
                  attributeFilter: ["class"],
                  attributeOldValue: !0,
                }),
                  (this.destroyKeyboardMO = () => {
                    s?.disconnect();
                  }),
                  t.addEventListener("keydown", (d) => {
                    const h = i.activeElement;
                    if (!h || !h.classList.contains("calendar-day")) return;
                    const c = (0, o.h)(h);
                    let l;
                    switch (d.key) {
                      case "ArrowDown":
                        d.preventDefault(), (l = (0, o.o)(c));
                        break;
                      case "ArrowUp":
                        d.preventDefault(), (l = (0, o.n)(c));
                        break;
                      case "ArrowRight":
                        d.preventDefault(), (l = (0, o.m)(c));
                        break;
                      case "ArrowLeft":
                        d.preventDefault(), (l = (0, o.l)(c));
                        break;
                      case "Home":
                        d.preventDefault(), (l = (0, o.k)(c));
                        break;
                      case "End":
                        d.preventDefault(), (l = (0, o.j)(c));
                        break;
                      case "PageUp":
                        d.preventDefault(),
                          (l = d.shiftKey ? (0, o.N)(c) : (0, o.d)(c));
                        break;
                      case "PageDown":
                        d.preventDefault(),
                          (l = d.shiftKey ? (0, o.M)(c) : (0, o.e)(c));
                        break;
                      default:
                        return;
                    }
                    L(l, this.minParts, this.maxParts) ||
                      (this.setWorkingParts(
                        Object.assign(Object.assign({}, this.workingParts), l)
                      ),
                      requestAnimationFrame(() => this.focusWorkingDay(n)));
                  });
              }),
              (this.focusWorkingDay = (t) => {
                const i = t.querySelectorAll(".calendar-day-padding"),
                  { day: n } = this.workingParts;
                if (null === n) return;
                const r = t.querySelector(
                  `.calendar-day:nth-of-type(${i.length + n})`
                );
                r && r.focus();
              }),
              (this.processMinParts = () => {
                const { min: t, todayParts: i } = this;
                this.minParts = void 0 !== t ? (0, o.q)(t, i) : void 0;
              }),
              (this.processMaxParts = () => {
                const { max: t, todayParts: i } = this;
                this.maxParts = void 0 !== t ? (0, o.r)(t, i) : void 0;
              }),
              (this.initializeCalendarListener = () => {
                const t = this.calendarBodyRef;
                if (!t) return;
                const i = t.querySelectorAll(".calendar-month"),
                  n = i[0],
                  r = i[1],
                  s = i[2],
                  h =
                    "ios" === (0, A.b)(this) &&
                    typeof navigator < "u" &&
                    navigator.maxTouchPoints > 1;
                (0, a.c)(() => {
                  t.scrollLeft = n.clientWidth * ((0, _.i)(this.el) ? -1 : 1);
                  const c = (m) => {
                      const g = t.getBoundingClientRect(),
                        x = this.el.shadowRoot.elementFromPoint(
                          g.x + g.width / 2,
                          g.y + g.height / 2
                        );
                      if (!x) return;
                      const k = x.closest(".calendar-month");
                      if (!k) return;
                      const P = k.getBoundingClientRect();
                      return Math.abs(P.x - g.x) > 2
                        ? void 0
                        : k === n
                        ? (0, o.d)(m)
                        : k === s
                        ? (0, o.e)(m)
                        : void 0;
                    },
                    l = () => {
                      h && (t.style.removeProperty("pointer-events"), (p = !1));
                      const m = c(this.workingParts);
                      if (!m) return;
                      const { month: g, day: b, year: x } = m;
                      T(
                        { month: g, year: x, day: null },
                        {
                          minParts: Object.assign(
                            Object.assign({}, this.minParts),
                            { day: null }
                          ),
                          maxParts: Object.assign(
                            Object.assign({}, this.maxParts),
                            { day: null }
                          ),
                        }
                      ) ||
                        (t.style.setProperty("overflow", "hidden"),
                        (0, a.c)(() => {
                          this.setWorkingParts(
                            Object.assign(
                              Object.assign({}, this.workingParts),
                              { month: g, day: b, year: x }
                            )
                          ),
                            (t.scrollLeft =
                              r.clientWidth * ((0, _.i)(this.el) ? -1 : 1)),
                            t.style.removeProperty("overflow");
                        }));
                    };
                  let f,
                    p = !1;
                  const u = () => {
                    f && clearTimeout(f),
                      !p &&
                        h &&
                        (t.style.setProperty("pointer-events", "none"),
                        (p = !0)),
                      (f = setTimeout(l, 50));
                  };
                  t.addEventListener("scroll", u),
                    (this.destroyCalendarListener = () => {
                      t.removeEventListener("scroll", u);
                    });
                });
              }),
              (this.destroyInteractionListeners = () => {
                const { destroyCalendarListener: t, destroyKeyboardMO: i } =
                  this;
                void 0 !== t && t(), void 0 !== i && i();
              }),
              (this.processValue = (t) => {
                const i = null != t;
                let n = (0, o.p)(t ?? (0, o.f)());
                const { minParts: r, maxParts: s, multiple: d } = this;
                !d && Array.isArray(t) && ((this.value = t[0]), (n = n[0])),
                  i && (0, o.w)(n, r, s);
                const h = Array.isArray(n) ? n[0] : n,
                  {
                    month: c,
                    day: l,
                    year: f,
                    hour: p,
                    minute: u,
                    tzOffset: m,
                  } = (0, o.O)(h, r, s),
                  g = (0, o.P)(p);
                this.setWorkingParts({
                  month: c,
                  day: l,
                  year: f,
                  hour: p,
                  minute: u,
                  tzOffset: m,
                  ampm: g,
                }),
                  i &&
                    (this.activeParts = Array.isArray(n)
                      ? [...n]
                      : {
                          month: c,
                          day: l,
                          year: f,
                          hour: p,
                          minute: u,
                          tzOffset: m,
                          ampm: g,
                        });
              }),
              (this.onFocus = () => {
                this.ionFocus.emit();
              }),
              (this.onBlur = () => {
                this.ionBlur.emit();
              }),
              (this.hasValue = () => null != this.value && "" !== this.value),
              (this.nextMonth = () => {
                const t = this.calendarBodyRef;
                if (!t) return;
                const i = t.querySelector(".calendar-month:last-of-type");
                i &&
                  t.scrollTo({
                    top: 0,
                    left: 2 * i.offsetWidth * ((0, _.i)(this.el) ? -1 : 1),
                    behavior: "smooth",
                  });
              }),
              (this.prevMonth = () => {
                const t = this.calendarBodyRef;
                !t ||
                  !t.querySelector(".calendar-month:first-of-type") ||
                  t.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }),
              (this.toggleMonthAndYearView = () => {
                this.showMonthAndYear = !this.showMonthAndYear;
              });
          }
          disabledChanged() {
            this.emitStyle();
          }
          minChanged() {
            this.processMinParts();
          }
          maxChanged() {
            this.processMaxParts();
          }
          yearValuesChanged() {
            this.parsedYearValues = (0, o.s)(this.yearValues);
          }
          monthValuesChanged() {
            this.parsedMonthValues = (0, o.s)(this.monthValues);
          }
          dayValuesChanged() {
            this.parsedDayValues = (0, o.s)(this.dayValues);
          }
          hourValuesChanged() {
            this.parsedHourValues = (0, o.s)(this.hourValues);
          }
          minuteValuesChanged() {
            this.parsedMinuteValues = (0, o.s)(this.minuteValues);
          }
          activePartsChanged() {
            this.activePartsClone = this.activeParts;
          }
          valueChanged() {
            const {
              value: e,
              minParts: t,
              maxParts: i,
              workingParts: n,
              multiple: r,
            } = this;
            if (this.hasValue()) {
              if (!r && Array.isArray(e)) return void (this.value = e[0]);
              const s = (0, o.p)(e);
              if (s)
                if (((0, o.w)(s, t, i), Array.isArray(s)))
                  this.activePartsClone = [...s];
                else {
                  const { month: d, day: h, year: c, hour: l, minute: f } = s,
                    p = null != l ? (l >= 12 ? "pm" : "am") : void 0;
                  (this.activePartsClone = Object.assign(
                    Object.assign({}, this.activeParts),
                    { month: d, day: h, year: c, hour: l, minute: f, ampm: p }
                  )),
                    this.setWorkingParts(
                      Object.assign(Object.assign({}, n), { ampm: p })
                    );
                }
              else
                (0, D.p)(
                  `Unable to parse date string: ${e}. Please provide a valid ISO 8601 datetime string.`
                );
            }
            this.emitStyle(), this.ionChange.emit({ value: e });
          }
          confirm(e = !1) {
            var t = this;
            return (0, w.Z)(function* () {
              const { isCalendarPicker: i, activeParts: n } = t;
              if (void 0 !== n || !i) {
                const r = Array.isArray(n);
                if (r && 0 === n.length) t.value = void 0;
                else {
                  if (r) {
                    const s = (0, o.t)(n).map((d) => new Date(d));
                    for (let d = 0; d < s.length; d++)
                      n[d].tzOffset = -1 * s[d].getTimezoneOffset();
                  } else {
                    const s = new Date((0, o.t)(n));
                    n.tzOffset = -1 * s.getTimezoneOffset();
                  }
                  t.value = (0, o.t)(n);
                }
              }
              e && t.closeParentOverlay();
            })();
          }
          reset(e) {
            var t = this;
            return (0, w.Z)(function* () {
              t.processValue(e);
            })();
          }
          cancel(e = !1) {
            var t = this;
            return (0, w.Z)(function* () {
              t.ionCancel.emit(), e && t.closeParentOverlay();
            })();
          }
          get isCalendarPicker() {
            const { presentation: e } = this;
            return "date" === e || "date-time" === e || "time-date" === e;
          }
          connectedCallback() {
            this.clearFocusVisible = (0, $.startFocusVisible)(this.el).destroy;
          }
          disconnectedCallback() {
            this.clearFocusVisible &&
              (this.clearFocusVisible(), (this.clearFocusVisible = void 0));
          }
          initializeListeners() {
            this.initializeCalendarListener(),
              this.initializeKeyboardListeners();
          }
          componentDidLoad() {
            const t = new IntersectionObserver(
              (s) => {
                !s[0].isIntersecting ||
                  (this.initializeListeners(),
                  (0, a.c)(() => {
                    this.el.classList.add("datetime-ready");
                  }));
              },
              { threshold: 0.01 }
            );
            (0, C.r)(() => t?.observe(this.el));
            const n = new IntersectionObserver(
              (s) => {
                s[0].isIntersecting ||
                  (this.destroyInteractionListeners(),
                  (this.showMonthAndYear = !1),
                  (0, a.c)(() => {
                    this.el.classList.remove("datetime-ready");
                  }));
              },
              { threshold: 0 }
            );
            (0, C.r)(() => n?.observe(this.el));
            const r = (0, C.g)(this.el);
            r.addEventListener("ionFocus", (s) => s.stopPropagation()),
              r.addEventListener("ionBlur", (s) => s.stopPropagation());
          }
          componentDidRender() {
            const {
                presentation: e,
                prevPresentation: t,
                calendarBodyRef: i,
                minParts: n,
                preferWheel: r,
              } = this,
              s = !r && ["date-time", "time-date", "date"].includes(e);
            if (void 0 !== n && s && i) {
              const d = i.querySelector(".calendar-month:nth-of-type(1)");
              d &&
                (i.scrollLeft = d.clientWidth * ((0, _.i)(this.el) ? -1 : 1));
            }
            null !== t
              ? e !== t &&
                ((this.prevPresentation = e),
                this.destroyInteractionListeners(),
                this.initializeListeners(),
                (this.showMonthAndYear = !1),
                (0, C.r)(() => {
                  this.ionRender.emit();
                }))
              : (this.prevPresentation = e);
          }
          componentWillLoad() {
            const {
              el: e,
              multiple: t,
              presentation: i,
              preferWheel: n,
            } = this;
            t &&
              ("date" !== i &&
                (0, D.p)(
                  'Multiple date selection is only supported for presentation="date".',
                  e
                ),
              n &&
                (0, D.p)(
                  'Multiple date selection is not supported with preferWheel="true".',
                  e
                )),
              this.processMinParts(),
              this.processMaxParts(),
              this.processValue(this.value),
              (this.parsedHourValues = (0, o.s)(this.hourValues)),
              (this.parsedMinuteValues = (0, o.s)(this.minuteValues)),
              (this.parsedMonthValues = (0, o.s)(this.monthValues)),
              (this.parsedYearValues = (0, o.s)(this.yearValues)),
              (this.parsedDayValues = (0, o.s)(this.dayValues)),
              this.emitStyle();
          }
          emitStyle() {
            this.ionStyle.emit({
              interactive: !0,
              datetime: !0,
              "interactive-disabled": this.disabled,
            });
          }
          renderFooter() {
            const { showDefaultButtons: e, showClearButton: t } = this;
            if (null === this.el.querySelector('[slot="buttons"]') && !e && !t)
              return;
            const n = () => {
              this.reset(), (this.value = void 0);
            };
            return (0, a.h)(
              "div",
              { class: "datetime-footer" },
              (0, a.h)(
                "div",
                { class: "datetime-buttons" },
                (0, a.h)(
                  "div",
                  {
                    class: {
                      "datetime-action-buttons": !0,
                      "has-clear-button": this.showClearButton,
                    },
                  },
                  (0, a.h)(
                    "slot",
                    { name: "buttons" },
                    (0, a.h)(
                      "ion-buttons",
                      null,
                      e &&
                        (0, a.h)(
                          "ion-button",
                          {
                            id: "cancel-button",
                            color: this.color,
                            onClick: () => this.cancel(!0),
                          },
                          this.cancelText
                        ),
                      (0, a.h)(
                        "div",
                        null,
                        t &&
                          (0, a.h)(
                            "ion-button",
                            {
                              id: "clear-button",
                              color: this.color,
                              onClick: () => n(),
                            },
                            this.clearText
                          ),
                        e &&
                          (0, a.h)(
                            "ion-button",
                            {
                              id: "confirm-button",
                              color: this.color,
                              onClick: () => this.confirm(!0),
                            },
                            this.doneText
                          )
                      )
                    )
                  )
                )
              )
            );
          }
          renderWheelPicker(e = this.presentation) {
            const t =
              "time-date" === e
                ? [
                    this.renderTimePickerColumns(e),
                    this.renderDatePickerColumns(e),
                  ]
                : [
                    this.renderDatePickerColumns(e),
                    this.renderTimePickerColumns(e),
                  ];
            return (0, a.h)("ion-picker-internal", null, t);
          }
          renderDatePickerColumns(e) {
            return "date-time" === e || "time-date" === e
              ? this.renderCombinedDatePickerColumn()
              : this.renderIndividualDatePickerColumns(e);
          }
          renderCombinedDatePickerColumn() {
            const {
                activeParts: e,
                workingParts: t,
                locale: i,
                minParts: n,
                maxParts: r,
                todayParts: s,
                isDateEnabled: d,
              } = this,
              h = (0, o.H)(t),
              c = h[h.length - 1];
            (h[0].day = 1), (c.day = (0, o.u)(c.month, c.year));
            const l = void 0 !== n && (0, o.b)(n, h[0]) ? n : h[0],
              f = void 0 !== r && (0, o.i)(r, c) ? r : c,
              p = (0, o.x)(
                i,
                s,
                l,
                f,
                this.parsedDayValues,
                this.parsedMonthValues
              );
            let u = p.items;
            const m = p.parts;
            return (
              d &&
                (u = u.map((b, x) => {
                  const k = m[x];
                  let P;
                  try {
                    P = !d((0, o.t)(k));
                  } catch (j) {
                    (0, D.b)(
                      "Exception thrown from provided `isDateEnabled` function. Please check your function and try again.",
                      j
                    );
                  }
                  return Object.assign(Object.assign({}, b), { disabled: P });
                })),
              (0, a.h)("ion-picker-column-internal", {
                class: "date-column",
                color: this.color,
                items: u,
                value:
                  null !== t.day
                    ? `${t.year}-${t.month}-${t.day}`
                    : `${s.year}-${s.month}-${s.day}`,
                onIonChange: (b) => {
                  this.destroyCalendarListener &&
                    this.destroyCalendarListener();
                  const { value: x } = b.detail,
                    k = m.find(
                      ({ month: P, day: j, year: E }) => x === `${E}-${P}-${j}`
                    );
                  this.setWorkingParts(Object.assign(Object.assign({}, t), k)),
                    Array.isArray(e) ||
                      this.setActiveParts(
                        Object.assign(Object.assign({}, e), k)
                      ),
                    this.initializeCalendarListener(),
                    b.stopPropagation();
                },
              })
            );
          }
          renderIndividualDatePickerColumns(e) {
            const { workingParts: t, isDateEnabled: i } = this,
              r =
                "year" !== e && "time" !== e
                  ? (0, o.y)(
                      this.locale,
                      t,
                      this.minParts,
                      this.maxParts,
                      this.parsedMonthValues
                    )
                  : [];
            let d =
              "date" === e
                ? (0, o.z)(
                    this.locale,
                    t,
                    this.minParts,
                    this.maxParts,
                    this.parsedDayValues
                  )
                : [];
            i &&
              (d = d.map((p) => {
                const { value: u } = p,
                  m = "string" == typeof u ? parseInt(u) : u,
                  g = { month: t.month, day: m, year: t.year };
                let b;
                try {
                  b = !i((0, o.t)(g));
                } catch (x) {
                  (0, D.b)(
                    "Exception thrown from provided `isDateEnabled` function. Please check your function and try again.",
                    x
                  );
                }
                return Object.assign(Object.assign({}, p), { disabled: b });
              }));
            const c =
              "month" !== e && "time" !== e
                ? (0, o.A)(
                    this.locale,
                    this.todayParts,
                    this.minParts,
                    this.maxParts,
                    this.parsedYearValues
                  )
                : [];
            let f = [];
            return (
              (f = (0, o.B)(this.locale, { month: "numeric", day: "numeric" })
                ? [
                    this.renderMonthPickerColumn(r),
                    this.renderDayPickerColumn(d),
                    this.renderYearPickerColumn(c),
                  ]
                : [
                    this.renderDayPickerColumn(d),
                    this.renderMonthPickerColumn(r),
                    this.renderYearPickerColumn(c),
                  ]),
              f
            );
          }
          renderDayPickerColumn(e) {
            var t;
            if (0 === e.length) return [];
            const { activeParts: i, workingParts: n } = this;
            return (0, a.h)("ion-picker-column-internal", {
              class: "day-column",
              color: this.color,
              items: e,
              value:
                null !== (t = null !== n.day ? n.day : this.todayParts.day) &&
                void 0 !== t
                  ? t
                  : void 0,
              onIonChange: (r) => {
                this.destroyCalendarListener && this.destroyCalendarListener(),
                  this.setWorkingParts(
                    Object.assign(Object.assign({}, n), { day: r.detail.value })
                  ),
                  Array.isArray(i) ||
                    this.setActiveParts(
                      Object.assign(Object.assign({}, i), {
                        day: r.detail.value,
                      })
                    ),
                  this.initializeCalendarListener(),
                  r.stopPropagation();
              },
            });
          }
          renderMonthPickerColumn(e) {
            if (0 === e.length) return [];
            const { activeParts: t, workingParts: i } = this;
            return (0, a.h)("ion-picker-column-internal", {
              class: "month-column",
              color: this.color,
              items: e,
              value: i.month,
              onIonChange: (n) => {
                this.destroyCalendarListener && this.destroyCalendarListener(),
                  this.setWorkingParts(
                    Object.assign(Object.assign({}, i), {
                      month: n.detail.value,
                    })
                  ),
                  Array.isArray(t) ||
                    this.setActiveParts(
                      Object.assign(Object.assign({}, t), {
                        month: n.detail.value,
                      })
                    ),
                  this.initializeCalendarListener(),
                  n.stopPropagation();
              },
            });
          }
          renderYearPickerColumn(e) {
            if (0 === e.length) return [];
            const { activeParts: t, workingParts: i } = this;
            return (0, a.h)("ion-picker-column-internal", {
              class: "year-column",
              color: this.color,
              items: e,
              value: i.year,
              onIonChange: (n) => {
                this.destroyCalendarListener && this.destroyCalendarListener(),
                  this.setWorkingParts(
                    Object.assign(Object.assign({}, i), {
                      year: n.detail.value,
                    })
                  ),
                  Array.isArray(t) ||
                    this.setActiveParts(
                      Object.assign(Object.assign({}, t), {
                        year: n.detail.value,
                      })
                    ),
                  this.initializeCalendarListener(),
                  n.stopPropagation();
              },
            });
          }
          renderTimePickerColumns(e) {
            if (["date", "month", "month-year", "year"].includes(e)) return [];
            const t = null != this.value,
              {
                hoursData: i,
                minutesData: n,
                dayPeriodData: r,
              } = (0, o.C)(
                this.locale,
                this.workingParts,
                this.hourCycle,
                t ? this.minParts : void 0,
                t ? this.maxParts : void 0,
                this.parsedHourValues,
                this.parsedMinuteValues
              );
            return [
              this.renderHourPickerColumn(i),
              this.renderMinutePickerColumn(n),
              this.renderDayPeriodPickerColumn(r),
            ];
          }
          renderHourPickerColumn(e) {
            const { workingParts: t } = this;
            if (0 === e.length) return [];
            const i = this.getDefaultPart();
            return (0, a.h)("ion-picker-column-internal", {
              color: this.color,
              value: i.hour,
              items: e,
              numericInput: !0,
              onIonChange: (n) => {
                this.setWorkingParts(
                  Object.assign(Object.assign({}, t), { hour: n.detail.value })
                ),
                  Array.isArray(i) ||
                    this.setActiveParts(
                      Object.assign(Object.assign({}, i), {
                        hour: n.detail.value,
                      })
                    ),
                  n.stopPropagation();
              },
            });
          }
          renderMinutePickerColumn(e) {
            const { workingParts: t } = this;
            if (0 === e.length) return [];
            const i = this.getDefaultPart();
            return (0, a.h)("ion-picker-column-internal", {
              color: this.color,
              value: i.minute,
              items: e,
              numericInput: !0,
              onIonChange: (n) => {
                this.setWorkingParts(
                  Object.assign(Object.assign({}, t), {
                    minute: n.detail.value,
                  })
                ),
                  Array.isArray(i) ||
                    this.setActiveParts(
                      Object.assign(Object.assign({}, i), {
                        minute: n.detail.value,
                      })
                    ),
                  n.stopPropagation();
              },
            });
          }
          renderDayPeriodPickerColumn(e) {
            const { workingParts: t } = this;
            if (0 === e.length) return [];
            const i = this.getDefaultPart(),
              n = (0, o.D)(this.locale);
            return (0, a.h)("ion-picker-column-internal", {
              style: n ? { order: "-1" } : {},
              color: this.color,
              value: i.ampm,
              items: e,
              onIonChange: (r) => {
                const s = (0, o.Q)(t, r.detail.value);
                this.setWorkingParts(
                  Object.assign(Object.assign({}, t), {
                    ampm: r.detail.value,
                    hour: s,
                  })
                ),
                  Array.isArray(i) ||
                    this.setActiveParts(
                      Object.assign(Object.assign({}, i), {
                        ampm: r.detail.value,
                        hour: s,
                      })
                    ),
                  r.stopPropagation();
              },
            });
          }
          renderWheelView(e) {
            const { locale: t } = this,
              n = (0, o.B)(t) ? "month-first" : "year-first";
            return (0, a.h)(
              "div",
              { class: { [`wheel-order-${n}`]: !0 } },
              this.renderWheelPicker(e)
            );
          }
          renderCalendarHeader(e) {
            const t = "ios" === e ? O.l : O.p,
              i = "ios" === e ? O.o : O.q,
              n = ((e, t, i) => {
                const n = Object.assign(
                  Object.assign({}, (0, o.d)(this.workingParts)),
                  { day: null }
                );
                return T(n, { minParts: t, maxParts: i });
              })(0, this.minParts, this.maxParts),
              r = ((e, t) => {
                const i = Object.assign(
                  Object.assign({}, (0, o.e)(this.workingParts)),
                  { day: null }
                );
                return T(i, { maxParts: t });
              })(0, this.maxParts);
            return (0, a.h)(
              "div",
              { class: "calendar-header" },
              (0, a.h)(
                "div",
                { class: "calendar-action-buttons" },
                (0, a.h)(
                  "div",
                  { class: "calendar-month-year" },
                  (0, a.h)(
                    "ion-item",
                    {
                      button: !0,
                      detail: !1,
                      lines: "none",
                      onClick: () => this.toggleMonthAndYearView(),
                    },
                    (0, a.h)(
                      "ion-label",
                      null,
                      (0, o.F)(this.locale, this.workingParts),
                      " ",
                      (0, a.h)("ion-icon", {
                        "aria-hidden": "true",
                        icon: this.showMonthAndYear ? t : i,
                        lazy: !1,
                      })
                    )
                  )
                ),
                (0, a.h)(
                  "div",
                  { class: "calendar-next-prev" },
                  (0, a.h)(
                    "ion-buttons",
                    null,
                    (0, a.h)(
                      "ion-button",
                      {
                        "aria-label": "previous month",
                        disabled: n,
                        onClick: () => this.prevMonth(),
                      },
                      (0, a.h)("ion-icon", {
                        "aria-hidden": "true",
                        slot: "icon-only",
                        icon: O.c,
                        lazy: !1,
                        flipRtl: !0,
                      })
                    ),
                    (0, a.h)(
                      "ion-button",
                      {
                        "aria-label": "next month",
                        disabled: r,
                        onClick: () => this.nextMonth(),
                      },
                      (0, a.h)("ion-icon", {
                        "aria-hidden": "true",
                        slot: "icon-only",
                        icon: O.o,
                        lazy: !1,
                        flipRtl: !0,
                      })
                    )
                  )
                )
              ),
              (0, a.h)(
                "div",
                { class: "calendar-days-of-week" },
                (0, o.E)(this.locale, e, this.firstDayOfWeek % 7).map((s) =>
                  (0, a.h)("div", { class: "day-of-week" }, s)
                )
              )
            );
          }
          renderMonth(e, t) {
            const i =
                void 0 === this.parsedYearValues ||
                this.parsedYearValues.includes(t),
              n =
                void 0 === this.parsedMonthValues ||
                this.parsedMonthValues.includes(e),
              r = !i || !n,
              s = T(
                { month: e, year: t, day: null },
                {
                  minParts: Object.assign(Object.assign({}, this.minParts), {
                    day: null,
                  }),
                  maxParts: Object.assign(Object.assign({}, this.maxParts), {
                    day: null,
                  }),
                }
              ),
              d = this.workingParts.month === e && this.workingParts.year === t;
            return (0, a.h)(
              "div",
              {
                "aria-hidden": d ? null : "true",
                class: {
                  "calendar-month": !0,
                  "calendar-month-disabled": !d && s,
                },
              },
              (0, a.h)(
                "div",
                { class: "calendar-month-grid" },
                (0, o.G)(e, t, this.firstDayOfWeek % 7).map((h, c) => {
                  const { day: l, dayOfWeek: f } = h,
                    { isDateEnabled: p, multiple: u } = this,
                    m = { month: e, day: l, year: t },
                    {
                      isActive: g,
                      isToday: b,
                      ariaLabel: x,
                      ariaSelected: k,
                      disabled: P,
                      text: j,
                    } = ((e, t, i, n, r, s, d) => {
                      const c =
                          void 0 !==
                          (Array.isArray(i) ? i : [i]).find((p) =>
                            (0, o.c)(t, p)
                          ),
                        l = (0, o.c)(t, n);
                      return {
                        disabled: L(t, r, s, d),
                        isActive: c,
                        isToday: l,
                        ariaSelected: c ? "true" : null,
                        ariaLabel: (0, o.g)(e, l, t),
                        text: null != t.day ? (0, o.a)(e, t) : null,
                      };
                    })(
                      this.locale,
                      m,
                      this.activePartsClone,
                      this.todayParts,
                      this.minParts,
                      this.maxParts,
                      this.parsedDayValues
                    );
                  let E = r || P;
                  if (!E && void 0 !== p)
                    try {
                      E = !p((0, o.t)(m));
                    } catch (ot) {
                      (0, D.b)(
                        "Exception thrown from provided `isDateEnabled` function. Please check your function and try again.",
                        ot
                      );
                    }
                  return (0, a.h)(
                    "button",
                    {
                      tabindex: "-1",
                      "data-day": l,
                      "data-month": e,
                      "data-year": t,
                      "data-index": c,
                      "data-day-of-week": f,
                      disabled: E,
                      class: {
                        "calendar-day-padding": null === l,
                        "calendar-day": !0,
                        "calendar-day-active": g,
                        "calendar-day-today": b,
                      },
                      "aria-selected": k,
                      "aria-label": x,
                      onClick: () => {
                        null !== l &&
                          (this.setWorkingParts(
                            Object.assign(
                              Object.assign({}, this.workingParts),
                              { month: e, day: l, year: t }
                            )
                          ),
                          u
                            ? this.setActiveParts(
                                { month: e, day: l, year: t },
                                g
                              )
                            : this.setActiveParts(
                                Object.assign(
                                  Object.assign({}, this.activeParts),
                                  { month: e, day: l, year: t }
                                )
                              ));
                      },
                    },
                    j
                  );
                })
              )
            );
          }
          renderCalendarBody() {
            return (0, a.h)(
              "div",
              {
                class: "calendar-body ion-focusable",
                ref: (e) => (this.calendarBodyRef = e),
                tabindex: "0",
              },
              (0, o.H)(this.workingParts).map(({ month: e, year: t }) =>
                this.renderMonth(e, t)
              )
            );
          }
          renderCalendar(e) {
            return (0, a.h)(
              "div",
              { class: "datetime-calendar", key: "datetime-calendar" },
              this.renderCalendarHeader(e),
              this.renderCalendarBody()
            );
          }
          renderTimeLabel() {
            if (
              null !== this.el.querySelector('[slot="time-label"]') ||
              this.showDefaultTimeLabel
            )
              return (0, a.h)("slot", { name: "time-label" }, "Time");
          }
          renderTimeOverlay() {
            var e = this;
            const t = (0, o.I)(this.locale, this.hourCycle),
              i = this.getDefaultPart();
            return [
              (0, a.h)("div", { class: "time-header" }, this.renderTimeLabel()),
              (0, a.h)(
                "button",
                {
                  class: {
                    "time-body": !0,
                    "time-body-active": this.isTimePopoverOpen,
                  },
                  "aria-expanded": "false",
                  "aria-haspopup": "true",
                  onClick:
                    ((n = (0, w.Z)(function* (r) {
                      const { popoverRef: s } = e;
                      s &&
                        ((e.isTimePopoverOpen = !0),
                        s.present(
                          new CustomEvent("ionShadowTarget", {
                            detail: { ionShadowTarget: r.target },
                          })
                        ),
                        yield s.onWillDismiss(),
                        (e.isTimePopoverOpen = !1));
                    })),
                    function (s) {
                      return n.apply(this, arguments);
                    }),
                },
                (0, o.J)(this.locale, i, t)
              ),
              (0, a.h)(
                "ion-popover",
                {
                  alignment: "center",
                  translucent: !0,
                  overlayIndex: 1,
                  arrow: !1,
                  onWillPresent: (n) => {
                    n.target
                      .querySelectorAll("ion-picker-column-internal")
                      .forEach((s) => s.scrollActiveItemIntoView());
                  },
                  style: {
                    "--offset-y": "-10px",
                    "--min-width": "fit-content",
                  },
                  keyboardEvents: !0,
                  ref: (n) => (this.popoverRef = n),
                },
                this.renderWheelPicker("time")
              ),
            ];
            var n;
          }
          renderCalendarViewHeader() {
            if (
              null === this.el.querySelector('[slot="title"]') &&
              !this.showDefaultTitle
            )
              return;
            const { activeParts: t, titleSelectedDatesFormatter: i } = this;
            let r;
            if (Array.isArray(t) && 1 !== t.length) {
              if (((r = `${t.length} days`), void 0 !== i))
                try {
                  r = i((0, o.t)(t));
                } catch (s) {
                  (0, D.b)(
                    "Exception in provided `titleSelectedDatesFormatter`: ",
                    s
                  );
                }
            } else r = (0, o.K)(this.locale, this.getDefaultPart());
            return (0, a.h)(
              "div",
              { class: "datetime-header" },
              (0, a.h)(
                "div",
                { class: "datetime-title" },
                (0, a.h)("slot", { name: "title" }, "Select Date")
              ),
              (0, a.h)("div", { class: "datetime-selected-date" }, r)
            );
          }
          renderTime() {
            const { presentation: e } = this;
            return (0, a.h)(
              "div",
              { class: "datetime-time" },
              "time" === e ? this.renderWheelPicker() : this.renderTimeOverlay()
            );
          }
          renderCalendarViewMonthYearPicker() {
            return (0, a.h)(
              "div",
              { class: "datetime-year" },
              this.renderWheelView("month-year")
            );
          }
          renderDatetime(e) {
            const { presentation: t, preferWheel: i } = this;
            if (i && ("date" === t || "date-time" === t || "time-date" === t))
              return [this.renderWheelView(), this.renderFooter()];
            switch (t) {
              case "date-time":
                return [
                  this.renderCalendarViewHeader(),
                  this.renderCalendar(e),
                  this.renderCalendarViewMonthYearPicker(),
                  this.renderTime(),
                  this.renderFooter(),
                ];
              case "time-date":
                return [
                  this.renderCalendarViewHeader(),
                  this.renderTime(),
                  this.renderCalendar(e),
                  this.renderCalendarViewMonthYearPicker(),
                  this.renderFooter(),
                ];
              case "time":
                return [this.renderTime(), this.renderFooter()];
              case "month":
              case "month-year":
              case "year":
                return [this.renderWheelView(), this.renderFooter()];
              default:
                return [
                  this.renderCalendarViewHeader(),
                  this.renderCalendar(e),
                  this.renderCalendarViewMonthYearPicker(),
                  this.renderFooter(),
                ];
            }
          }
          render() {
            const {
                name: e,
                value: t,
                disabled: i,
                el: n,
                color: r,
                isPresented: s,
                readonly: d,
                showMonthAndYear: h,
                preferWheel: c,
                presentation: l,
                size: f,
              } = this,
              p = (0, A.b)(this),
              u = "year" === l || "month" === l || "month-year" === l,
              m = h || u,
              g = h && !u,
              b = "date" === l || "date-time" === l || "time-date" === l,
              x = b && c,
              k = b && !c;
            return (
              (0, C.e)(!0, n, e, (0, o.L)(t), i),
              (0, a.h)(
                a.H,
                {
                  "aria-disabled": i ? "true" : null,
                  onFocus: this.onFocus,
                  onBlur: this.onBlur,
                  class: Object.assign(
                    {},
                    (0, I.c)(r, {
                      [p]: !0,
                      "datetime-presented": s,
                      "datetime-readonly": d,
                      "datetime-disabled": i,
                      "show-month-and-year": m,
                      "month-year-picker-open": g,
                      [`datetime-presentation-${l}`]: !0,
                      [`datetime-size-${f}`]: !0,
                      "datetime-prefer-wheel": x,
                      "datetime-grid": k,
                    })
                  ),
                },
                this.renderDatetime(p)
              )
            );
          }
          get el() {
            return (0, a.i)(this);
          }
          static get watchers() {
            return {
              disabled: ["disabledChanged"],
              min: ["minChanged"],
              max: ["maxChanged"],
              yearValues: ["yearValuesChanged"],
              monthValues: ["monthValuesChanged"],
              dayValues: ["dayValuesChanged"],
              hourValues: ["hourValuesChanged"],
              minuteValues: ["minuteValuesChanged"],
              activeParts: ["activePartsChanged"],
              value: ["valueChanged"],
            };
          }
        };
      let J = 0;
      W.style = {
        ios: ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px;position:absolute;visibility:hidden;pointer-events:none}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{padding-left:4px;padding-right:0;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-action-buttons ion-item ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr);height:100%}:host .calendar-day{padding-left:0px;padding-right:0px;padding-top:0px;padding-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{margin-left:unset;margin-right:unset;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px}}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}:host .calendar-day:after{border-radius:32px;padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;top:50%;left:50%;width:32px;height:32px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:" ";z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day:after{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .time-body{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-light, #ffffff);--background-rgb:var(--ion-color-light-rgb);--title-color:var(--ion-color-step-600, #666666)}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, #cccccc);font-size:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-header{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}:host .calendar-action-buttons ion-item{--padding-start:16px;--background-hover:transparent;--background-activated:transparent;font-size:16px;font-weight:600}:host .calendar-action-buttons ion-item ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, #b3b3b3);font-size:12px;font-weight:600;line-height:24px;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-days-of-week{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .calendar-body .calendar-month .calendar-month-grid{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;height:calc(100% - 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-body .calendar-month .calendar-month-grid{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .calendar-day{font-size:20px}:host .calendar-day:after{opacity:0.2}:host .calendar-day:focus:after{background:var(--ion-color-base)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-active:after{background:var(--ion-color-base)}:host .calendar-day.calendar-day-today.calendar-day-active{color:var(--ion-color-contrast)}:host .calendar-day.calendar-day-today.calendar-day-active:after{background:var(--ion-color-base);opacity:1}:host .datetime-time{padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:16px;font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-time{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, #cccccc)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-buttons{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}',
        md: ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px;position:absolute;visibility:hidden;pointer-events:none}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{padding-left:4px;padding-right:0;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-action-buttons ion-item ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr);height:100%}:host .calendar-day{padding-left:0px;padding-right:0px;padding-top:0px;padding-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{margin-left:unset;margin-right:unset;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px}}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}:host .calendar-day:after{border-radius:32px;padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;top:50%;left:50%;width:32px;height:32px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:" ";z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day:after{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .time-body{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-step-100, #ffffff);--title-color:var(--ion-color-contrast)}:host .datetime-header{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-header{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host .datetime-header .datetime-title{font-size:12px;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:34px}:host .datetime-calendar .calendar-action-buttons ion-item{--padding-start:20px}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{color:var(--ion-color-step-650, #595959)}:host .calendar-days-of-week{padding-left:10px;padding-right:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, gray);font-size:14px;line-height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-days-of-week{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .calendar-body .calendar-month .calendar-month-grid{padding-left:10px;padding-right:10px;padding-top:3px;padding-bottom:0px;grid-template-rows:repeat(6, 1fr)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-body .calendar-month .calendar-month-grid{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .calendar-day{padding-left:0px;padding-right:0;padding-top:13px;padding-bottom:13px;font-size:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-day:focus:after{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-today:after{border:1px solid var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}:host .calendar-day.calendar-day-active:after{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-time{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .time-header{color:var(--ion-color-step-650, #595959)}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-buttons{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .datetime-view-buttons ion-button{color:var(--ion-color-step-800, #333333)}',
      };
      const B = (e) => {
          const t = (0, M.c)(),
            i = (0, M.c)(),
            n = (0, M.c)();
          return (
            i
              .addElement(e.querySelector("ion-backdrop"))
              .fromTo("opacity", 0.01, "var(--backdrop-opacity)")
              .beforeStyles({ "pointer-events": "none" })
              .afterClearStyles(["pointer-events"]),
            n
              .addElement(e.querySelector(".picker-wrapper"))
              .fromTo("transform", "translateY(100%)", "translateY(0%)"),
            t
              .addElement(e)
              .easing("cubic-bezier(.36,.66,.04,1)")
              .duration(400)
              .addAnimation([i, n])
          );
        },
        S = (e) => {
          const t = (0, M.c)(),
            i = (0, M.c)(),
            n = (0, M.c)();
          return (
            i
              .addElement(e.querySelector("ion-backdrop"))
              .fromTo("opacity", "var(--backdrop-opacity)", 0.01),
            n
              .addElement(e.querySelector(".picker-wrapper"))
              .fromTo("transform", "translateY(0%)", "translateY(100%)"),
            t
              .addElement(e)
              .easing("cubic-bezier(.36,.66,.04,1)")
              .duration(400)
              .addAnimation([i, n])
          );
        },
        R = class {
          constructor(e) {
            (0, a.r)(this, e),
              (this.didPresent = (0, a.e)(this, "ionPickerDidPresent", 7)),
              (this.willPresent = (0, a.e)(this, "ionPickerWillPresent", 7)),
              (this.willDismiss = (0, a.e)(this, "ionPickerWillDismiss", 7)),
              (this.didDismiss = (0, a.e)(this, "ionPickerDidDismiss", 7)),
              (this.presented = !1),
              (this.keyboardClose = !0),
              (this.buttons = []),
              (this.columns = []),
              (this.duration = 0),
              (this.showBackdrop = !0),
              (this.backdropDismiss = !0),
              (this.animated = !0),
              (this.onBackdropTap = () => {
                this.dismiss(void 0, v.B);
              }),
              (this.dispatchCancelHandler = (t) => {
                if ((0, v.i)(t.detail.role)) {
                  const n = this.buttons.find((r) => "cancel" === r.role);
                  this.callButtonHandler(n);
                }
              });
          }
          connectedCallback() {
            (0, v.e)(this.el);
          }
          present() {
            var e = this;
            return (0, w.Z)(function* () {
              yield (0, v.d)(e, "pickerEnter", B, B, void 0),
                e.duration > 0 &&
                  (e.durationTimeout = setTimeout(
                    () => e.dismiss(),
                    e.duration
                  ));
            })();
          }
          dismiss(e, t) {
            return (
              this.durationTimeout && clearTimeout(this.durationTimeout),
              (0, v.f)(this, e, t, "pickerLeave", S, S)
            );
          }
          onDidDismiss() {
            return (0, v.g)(this.el, "ionPickerDidDismiss");
          }
          onWillDismiss() {
            return (0, v.g)(this.el, "ionPickerWillDismiss");
          }
          getColumn(e) {
            return Promise.resolve(this.columns.find((t) => t.name === e));
          }
          buttonClick(e) {
            var t = this;
            return (0, w.Z)(function* () {
              const i = e.role;
              return (0, v.i)(i)
                ? t.dismiss(void 0, i)
                : (yield t.callButtonHandler(e))
                ? t.dismiss(t.getSelected(), e.role)
                : Promise.resolve();
            })();
          }
          callButtonHandler(e) {
            var t = this;
            return (0, w.Z)(function* () {
              return !(
                e && !1 === (yield (0, v.s)(e.handler, t.getSelected()))
              );
            })();
          }
          getSelected() {
            const e = {};
            return (
              this.columns.forEach((t, i) => {
                const n =
                  void 0 !== t.selectedIndex
                    ? t.options[t.selectedIndex]
                    : void 0;
                e[t.name] = {
                  text: n ? n.text : void 0,
                  value: n ? n.value : void 0,
                  columnIndex: i,
                };
              }),
              e
            );
          }
          render() {
            const { htmlAttributes: e } = this,
              t = (0, A.b)(this);
            return (0, a.h)(
              a.H,
              Object.assign({ "aria-modal": "true", tabindex: "-1" }, e, {
                style: { zIndex: `${2e4 + this.overlayIndex}` },
                class: Object.assign(
                  { [t]: !0, [`picker-${t}`]: !0, "overlay-hidden": !0 },
                  (0, I.g)(this.cssClass)
                ),
                onIonBackdropTap: this.onBackdropTap,
                onIonPickerWillDismiss: this.dispatchCancelHandler,
              }),
              (0, a.h)("ion-backdrop", {
                visible: this.showBackdrop,
                tappable: this.backdropDismiss,
              }),
              (0, a.h)("div", { tabindex: "0" }),
              (0, a.h)(
                "div",
                { class: "picker-wrapper ion-overlay-wrapper", role: "dialog" },
                (0, a.h)(
                  "div",
                  { class: "picker-toolbar" },
                  this.buttons.map((i) =>
                    (0, a.h)(
                      "div",
                      { class: et(i) },
                      (0, a.h)(
                        "button",
                        {
                          type: "button",
                          onClick: () => this.buttonClick(i),
                          class: it(i),
                        },
                        i.text
                      )
                    )
                  )
                ),
                (0, a.h)(
                  "div",
                  { class: "picker-columns" },
                  (0, a.h)("div", { class: "picker-above-highlight" }),
                  this.presented &&
                    this.columns.map((i) =>
                      (0, a.h)("ion-picker-column", { col: i })
                    ),
                  (0, a.h)("div", { class: "picker-below-highlight" })
                )
              ),
              (0, a.h)("div", { tabindex: "0" })
            );
          }
          get el() {
            return (0, a.i)(this);
          }
        },
        et = (e) => ({
          [`picker-toolbar-${e.role}`]: void 0 !== e.role,
          "picker-toolbar-button": !0,
        }),
        it = (e) =>
          Object.assign(
            { "picker-button": !0, "ion-activatable": !0 },
            (0, I.g)(e.cssClass)
          );
      R.style = {
        ios: ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}",
        md: ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}",
      };
      const F = class {
          constructor(e) {
            (0, a.r)(this, e),
              (this.ionPickerColChange = (0, a.e)(
                this,
                "ionPickerColChange",
                7
              )),
              (this.optHeight = 0),
              (this.rotateFactor = 0),
              (this.scaleFactor = 1),
              (this.velocity = 0),
              (this.y = 0),
              (this.noAnimate = !0);
          }
          colChanged() {
            this.refresh();
          }
          connectedCallback() {
            var e = this;
            return (0, w.Z)(function* () {
              let t = 0,
                i = 0.81;
              "ios" === (0, A.b)(e) && ((t = -0.46), (i = 1)),
                (e.rotateFactor = t),
                (e.scaleFactor = i),
                (e.gesture = (yield Promise.resolve().then(
                  y.bind(y, 1911)
                )).createGesture({
                  el: e.el,
                  gestureName: "picker-swipe",
                  gesturePriority: 100,
                  threshold: 0,
                  passive: !1,
                  onStart: (r) => e.onStart(r),
                  onMove: (r) => e.onMove(r),
                  onEnd: (r) => e.onEnd(r),
                })),
                e.gesture.enable(),
                (e.tmrId = setTimeout(() => {
                  (e.noAnimate = !1), e.refresh(!0);
                }, 250));
            })();
          }
          componentDidLoad() {
            const e = this.optsEl;
            e &&
              (this.optHeight = e.firstElementChild
                ? e.firstElementChild.clientHeight
                : 0),
              this.refresh();
          }
          disconnectedCallback() {
            cancelAnimationFrame(this.rafId),
              clearTimeout(this.tmrId),
              this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
          }
          emitColChange() {
            this.ionPickerColChange.emit(this.col);
          }
          setSelected(e, t) {
            const i = e > -1 ? -e * this.optHeight : 0;
            (this.velocity = 0),
              cancelAnimationFrame(this.rafId),
              this.update(i, t, !0),
              this.emitColChange();
          }
          update(e, t, i) {
            if (!this.optsEl) return;
            let n = 0,
              r = 0;
            const { col: s, rotateFactor: d } = this,
              h = (s.selectedIndex = this.indexForY(-e)),
              c = 0 === t ? "" : t + "ms",
              l = `scale(${this.scaleFactor})`,
              f = this.optsEl.children;
            for (let p = 0; p < f.length; p++) {
              const u = f[p],
                m = s.options[p],
                g = p * this.optHeight + e;
              let b = "";
              if (0 !== d) {
                const k = g * d;
                Math.abs(k) <= 90
                  ? ((n = 0), (r = 90), (b = `rotateX(${k}deg) `))
                  : (n = -9999);
              } else (r = 0), (n = g);
              const x = h === p;
              (b += `translate3d(0px,${n}px,${r}px) `),
                1 !== this.scaleFactor && !x && (b += l),
                this.noAnimate
                  ? ((m.duration = 0), (u.style.transitionDuration = ""))
                  : t !== m.duration &&
                    ((m.duration = t), (u.style.transitionDuration = c)),
                b !== m.transform && (m.transform = b),
                (u.style.transform = b),
                x !== m.selected &&
                  ((m.selected = x),
                  x ? u.classList.add(Y) : u.classList.remove(Y));
            }
            (this.col.prevSelected = h),
              i && (this.y = e),
              this.lastIndex !== h && ((0, z.b)(), (this.lastIndex = h));
          }
          decelerate() {
            if (0 !== this.velocity) {
              (this.velocity *= rt),
                (this.velocity =
                  this.velocity > 0
                    ? Math.max(this.velocity, 1)
                    : Math.min(this.velocity, -1));
              let e = this.y + this.velocity;
              e > this.minY
                ? ((e = this.minY), (this.velocity = 0))
                : e < this.maxY && ((e = this.maxY), (this.velocity = 0)),
                this.update(e, 0, !0),
                Math.round(e) % this.optHeight != 0 ||
                Math.abs(this.velocity) > 1
                  ? (this.rafId = requestAnimationFrame(() =>
                      this.decelerate()
                    ))
                  : ((this.velocity = 0), this.emitColChange(), (0, z.h)());
            } else if (this.y % this.optHeight != 0) {
              const e = Math.abs(this.y % this.optHeight);
              (this.velocity = e > this.optHeight / 2 ? 1 : -1),
                this.decelerate();
            }
          }
          indexForY(e) {
            return Math.min(
              Math.max(Math.abs(Math.round(e / this.optHeight)), 0),
              this.col.options.length - 1
            );
          }
          onStart(e) {
            e.event.cancelable && e.event.preventDefault(),
              e.event.stopPropagation(),
              (0, z.a)(),
              cancelAnimationFrame(this.rafId);
            const t = this.col.options;
            let i = t.length - 1,
              n = 0;
            for (let r = 0; r < t.length; r++)
              t[r].disabled || ((i = Math.min(i, r)), (n = Math.max(n, r)));
            (this.minY = -i * this.optHeight),
              (this.maxY = -n * this.optHeight);
          }
          onMove(e) {
            e.event.cancelable && e.event.preventDefault(),
              e.event.stopPropagation();
            let t = this.y + e.deltaY;
            t > this.minY
              ? ((t = Math.pow(t, 0.8)), (this.bounceFrom = t))
              : t < this.maxY
              ? ((t += Math.pow(this.maxY - t, 0.9)), (this.bounceFrom = t))
              : (this.bounceFrom = 0),
              this.update(t, 0, !1);
          }
          onEnd(e) {
            if (this.bounceFrom > 0)
              return this.update(this.minY, 100, !0), void this.emitColChange();
            if (this.bounceFrom < 0)
              return this.update(this.maxY, 100, !0), void this.emitColChange();
            if (
              ((this.velocity = (0, C.l)(-H, 23 * e.velocityY, H)),
              0 === this.velocity && 0 === e.deltaY)
            ) {
              const t = e.event.target.closest(".picker-opt");
              t?.hasAttribute("opt-index") &&
                this.setSelected(parseInt(t.getAttribute("opt-index"), 10), K);
            } else {
              if (((this.y += e.deltaY), Math.abs(e.velocityY) < 0.05)) {
                const t = e.deltaY > 0,
                  i = (Math.abs(this.y) % this.optHeight) / this.optHeight;
                t && i > 0.5
                  ? (this.velocity = -1 * Math.abs(this.velocity))
                  : !t && i <= 0.5 && (this.velocity = Math.abs(this.velocity));
              }
              this.decelerate();
            }
          }
          refresh(e) {
            var t;
            let i = this.col.options.length - 1,
              n = 0;
            const r = this.col.options;
            for (let d = 0; d < r.length; d++)
              r[d].disabled || ((i = Math.min(i, d)), (n = Math.max(n, d)));
            if (0 !== this.velocity) return;
            const s = (0, C.l)(
              i,
              null !== (t = this.col.selectedIndex) && void 0 !== t ? t : 0,
              n
            );
            if (this.col.prevSelected !== s || e) {
              const d = s * this.optHeight * -1;
              (this.velocity = 0), this.update(d, K, !0);
            }
          }
          render() {
            const e = this.col,
              i = (0, A.b)(this);
            return (0, a.h)(
              a.H,
              {
                class: {
                  [i]: !0,
                  "picker-col": !0,
                  "picker-opts-left": "left" === this.col.align,
                  "picker-opts-right": "right" === this.col.align,
                },
                style: { "max-width": this.col.columnWidth },
              },
              e.prefix &&
                (0, a.h)(
                  "div",
                  { class: "picker-prefix", style: { width: e.prefixWidth } },
                  e.prefix
                ),
              (0, a.h)(
                "div",
                {
                  class: "picker-opts",
                  style: { maxWidth: e.optionsWidth },
                  ref: (n) => (this.optsEl = n),
                },
                e.options.map((n, r) =>
                  (0, a.h)(
                    "button",
                    {
                      type: "button",
                      class: {
                        "picker-opt": !0,
                        "picker-opt-disabled": !!n.disabled,
                      },
                      "opt-index": r,
                    },
                    n.text
                  )
                )
              ),
              e.suffix &&
                (0, a.h)(
                  "div",
                  { class: "picker-suffix", style: { width: e.suffixWidth } },
                  e.suffix
                )
            );
          }
          get el() {
            return (0, a.i)(this);
          }
          static get watchers() {
            return { col: ["colChanged"] };
          }
        },
        Y = "picker-opt-selected",
        rt = 0.97,
        H = 90,
        K = 150;
      F.style = {
        ios: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}",
        md: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}",
      };
    },
  },
]);
