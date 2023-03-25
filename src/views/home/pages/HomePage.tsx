import MainLayout from "@/layouts/MainLayout";

import type { NextPage } from "next";

export const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <div className="grid h-full place-content-center border border-dashed">
        <h1 className="text-4xl font-bold">Hello World!</h1>
      </div>
    </MainLayout>
  );
};
