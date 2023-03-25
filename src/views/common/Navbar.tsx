import type { FC } from "react";

import styles from "@/styles/MainLayout.module.css";

interface Props {}

export const Navbar: FC<Props> = () => {
  return (
    <nav className={`${styles.Navbar} border border-dashed`}>
      <div className="grid place-content-center h-full">
        <p className="text-xl text-noto-sans">This is navbar</p>
      </div>
    </nav>
  );
};

export default Navbar;
