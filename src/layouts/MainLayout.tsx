import styles from "@/styles/MainLayout.module.css";
import Footer from "@/views/common/Footer";
import Navbar from "@/views/common/Navbar";

import type { FC, PropsWithChildren } from "react";

interface Props {}

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className={`${styles.MainLayout} min-h-screen`}>
      <Navbar />
      <main className={`${styles.Main}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
