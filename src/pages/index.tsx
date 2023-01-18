import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <a href="/menu">Menu</a>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Cotorritos</title>;
