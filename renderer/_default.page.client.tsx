import { hydrate as hydrateToDom } from "preact";
import { getPage } from "vite-plugin-ssr/client";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";

hydrate();

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>();
  const { Page, pageProps } = pageContext;
  const body = document.querySelector("body");

  if (body) {
    hydrateToDom(
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>,
      body
    );
  }
}
