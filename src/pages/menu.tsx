import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { gql } from "@apollo/client";
import { client } from "../server-side/Client";
import Main from "../components/Main";

const MenuPage: React.FC<PageProps> = ({ serverData }) => {
  return (
    <main>
      <Main serverData={serverData} />
    </main>
  );
};

export default MenuPage;

export const Head: HeadFC = () => <title>Menu</title>;

export async function getMenuDataServerSide() {
  const { data } = await client.query({
    query: gql`
      query Alimentos {
        menus {
          carta {
            id
            url
          }
        }
      }
    `,
  });
  return data;
}

export async function getServerData() {
  try {
    return {
      props: await getMenuDataServerSide(),
      status: 200,
    };
  } catch (error) {
    return { props: { error } };
  }
}
