import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ serverData }) => {
  return (
    <main>
      <Link to="/menu">Menu</Link>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Cotorritos</title>;
