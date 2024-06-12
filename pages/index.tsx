import Head from "next/head";
import HomePage from "../src/components/home/HomePage";
import Layout from "@/src/layouts/Layout";

export default function Home() {
  return (
    <Layout pageName="Home">
      <HomePage />
    </Layout>
  );
}
