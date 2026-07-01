"use client";

import { useState } from "react";

/**
 * LinkedIn avatar image. Mirrors the original markup's
 * `onerror="this.remove()"` — if the remote image fails to load,
 * it's removed so the gradient initials background shows through.
 */
export default function Avatar({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} onError={() => setFailed(true)} />;
}
