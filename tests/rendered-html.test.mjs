import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the international portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Mathew Loulas — AI Systems &amp; Venture Architect<\/title>/i);
  assert.match(html, /I build the operating system behind/);
  assert.match(html, /MINDFAX/);
  assert.match(html, /SFC/);
  assert.match(html, /PESES since 2009/);
  assert.match(html, /linkedin\.com\/in\/mathew-loulas-81b358426/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /â€”|â€¢|Â·|BrasÃ/);
});

test("keeps durable metadata and public boundaries", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(layout, /mateus-lolas-architect\.mateus-lolas-unb\.chatgpt\.site/);
  assert.match(layout, /alternates:\{canonical:"\/"\}/);
  assert.match(page, /Strategies, credentials, capital positions, parameters and performance remain private/);
  assert.match(page, /functional technical English supported by AI-assisted workflows/);
  assert.doesNotMatch(page, /189 public commits|professional English workflows|Seven public product experiences/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /focus-visible/);
});
