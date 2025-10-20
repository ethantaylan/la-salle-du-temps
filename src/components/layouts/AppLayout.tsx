import { PropsWithChildren } from "react";
import { CommunitySection } from "../../pages/Home/components/CommunitySection";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="container mx-auto p-4">{children}</main>
      <CommunitySection />
    </>
  );
};
