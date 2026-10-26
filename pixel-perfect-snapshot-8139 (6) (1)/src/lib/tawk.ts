export interface TawkApi {
  onChatMessageAgent?: (message: unknown) => void;
  showWidget?: () => void;
  maximize?: () => void;
}

declare global {
  interface Window {
    Tawk_API?: TawkApi;
    Tawk_LoadStart?: Date;
  }
}

export function configureAgentMessages(api: TawkApi) {
  api.onChatMessageAgent = () => {
    api.showWidget?.();
    api.maximize?.();
  };
}

// Called only after React mounts; never touches browser globals during SSR.
export function loadTawkChat() {
  const api = window.Tawk_API ?? {};
  window.Tawk_API = api;
  configureAgentMessages(api);
  if (document.getElementById("scamguide-tawk-script")) return;

  window.Tawk_LoadStart = new Date();
  const script = document.createElement("script");
  script.id = "scamguide-tawk-script";
  script.async = true;
  script.src = "https://embed.tawk.to/6adf6beeacddd8347a46c883/1k5sbr7e9";
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  document.head.appendChild(script);
}