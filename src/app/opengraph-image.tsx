import { renderShareImage } from "@/lib/og";

export const alt = "Xally Points: the right card, every single time";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return renderShareImage();
}
