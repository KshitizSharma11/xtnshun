import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  
  manifest: {
    name: "LinkedIn AutoReply",
    description: "An extension that automates replies on LinkedIn messages.",
    version: "1.0",
    action: {
      default_popup: "popup.html", // Specify the popup HTML file if you have one
      default_icon: {
        16: "/icon/Vector.svg",
        48: "/icon/Vector.svg",
        128: "/icon/Vector.svg",
      },
    },
    permissions: [
      "activeTab", // Allows interaction with the current active tab
      "storage", // If you need to store user settings or data
    ],
    background: {
      service_worker: "background.js", // Specify a background script if required
    },
  },
});
