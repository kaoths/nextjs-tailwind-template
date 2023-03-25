import { Noto_Sans } from "next/font/google";

export const noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default noto_sans;
