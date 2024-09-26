import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@Amin/app1",
  app: () => System.import("@Amin/app1"),
  activeWhen: "/1",
});

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@Amin/navbar",
//   app: () =>
//     System.import(
//       "@Amin/navbar"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
