"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [4376],
  {
    4376: (d, _, e) => {
      e.r(_), e.d(_, { ion_text: () => u });
      var o = e(1308),
        l = e(9658),
        i = e(2854);
      const u = class {
        constructor(s) {
          (0, o.r)(this, s);
        }
        render() {
          const s = (0, l.b)(this);
          return (0, o.h)(
            o.H,
            { class: (0, i.c)(this.color, { [s]: !0 }) },
            (0, o.h)("slot", null)
          );
        }
      };
      u.style = ":host(.ion-color){color:var(--ion-color-base)}";
    },
    2854: (d, _, e) => {
      e.d(_, { c: () => i, g: () => u, h: () => l, o: () => E });
      var o = e(5861);
      const l = (t, n) => null !== n.closest(t),
        i = (t, n) =>
          "string" == typeof t && t.length > 0
            ? Object.assign({ "ion-color": !0, [`ion-color-${t}`]: !0 }, n)
            : n,
        u = (t) => {
          const n = {};
          return (
            ((t) =>
              void 0 !== t
                ? (Array.isArray(t) ? t : t.split(" "))
                    .filter((r) => null != r)
                    .map((r) => r.trim())
                    .filter((r) => "" !== r)
                : [])(t).forEach((r) => (n[r] = !0)),
            n
          );
        },
        s = /^[a-z][a-z0-9+\-.]*:/,
        E = (function () {
          var t = (0, o.Z)(function* (n, r, f, h) {
            if (null != n && "#" !== n[0] && !s.test(n)) {
              const a = document.querySelector("ion-router");
              if (a) return r?.preventDefault(), a.push(n, f, h);
            }
            return !1;
          });
          return function (r, f, h, a) {
            return t.apply(this, arguments);
          };
        })();
    },
  },
]);
