"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [5780],
  {
    179: (h, s, t) => {
      t.r(s), t.d(s, { startStatusTap: () => a });
      var r = t(5861),
        _ = t(1308),
        o = t(6642),
        d = t(5730);
      const a = () => {
        const e = window;
        e.addEventListener("statusTap", () => {
          (0, _.f)(() => {
            const i = document.elementFromPoint(
              e.innerWidth / 2,
              e.innerHeight / 2
            );
            if (!i) return;
            const n = (0, o.f)(i);
            n &&
              new Promise((c) => (0, d.c)(n, c)).then(() => {
                (0, _.c)(
                  (0, r.Z)(function* () {
                    n.style.setProperty("--overflow", "hidden"),
                      yield (0, o.s)(n, 300),
                      n.style.removeProperty("--overflow");
                  })
                );
              });
          });
        });
      };
    },
  },
]);
