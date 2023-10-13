export default defineAppConfig({
  title: "Hello Nuxt",
  theme: {
    dark: false,
    colors: {
      primary: "#ff0000",
    },
  },
  ui: {
    primary: "lime",
    gray: "neutral",
    button: {
      default: {
        color: "lime",
      },
    },
    safelistColors: ["orange", "lime"],
  },
});
