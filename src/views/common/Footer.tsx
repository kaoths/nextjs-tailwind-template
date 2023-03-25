import type { FC } from "react";

import styles from "@/styles/MainLayout.module.css";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <div className={`${styles.Footer} h-[200px] border border-dashed`}>
      <div className="grid place-content-center h-full">
        <p className="text-xl text-noto-sans">This is Footer</p>
      </div>
    </div>
  );
};

export default Footer;
