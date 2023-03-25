import noto_sans from "@/fonts/noto_sans";

import type { FC, PropsWithChildren } from "react";

interface Props {}

export const RootLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className={`${noto_sans.variable} font-sans`}>{children}</div>;
};

export default RootLayout;
