import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        events: resolve(__dirname, "events.html"),
        lineup: resolve(__dirname, "lineup.html"),
        project: resolve(__dirname, "project.html"),
        contact: resolve(__dirname, "contact.html"),
        "event-info": resolve(__dirname, "event-info.html"),
        gallery: resolve(__dirname, "gallery.html"),
        surya: resolve(__dirname, "surya.html"),
      },
    },
    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
      "**/*.mp3",
    ],
    copyPublicDir: true,
  },
});
