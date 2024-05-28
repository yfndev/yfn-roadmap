import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import React from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle text-black">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageMain() {
  return (
    <div>
      <div className="main-container">
        <p>
          Uns verbindet der Wille, Probleme mit innovativen Produkten zu lösen.
          Aber wie soll ich denn anfangen?
          <br /> Das Young Founders Network ist ein Non-Profit Verein mit einer
          Community aus 400+ der jüngsten Gründer aus ganz Deutschland.
        </p>
        <br />
        <h2>Unsere Mission:</h2>
        <br />
        <p>
          1. Community von jungen Gründern für junge Gründer <br />
          2. Weniger get rich quick, mehr Macher <br />
          3. Rahmenbedingungen für junge Gründer in Deutschland verändern <br />
          <br />
          Diese Roadmap ist das, was wir gerne gehabt hätten, als wir angefangen
          haben, unsere Ideen umzusetzen Kompakt, aufs Wesentliche reduziert,
          aber mit vielen sorgfältig ausgewählten Links, damit du mit den besten
          Ressourcen deiner Neugierde nachgehen kannst. <br />
          <br /> Hilfreich, egal, ob du eine App, ein Hardware-Produkt oder
          etwas anderes aufbauen möchtest Unser Wiki hat eine klare Meinung. Wir
          geben dir keinen Überblick über Tools, wir sagen, welches wir am
          besten finden, damit du so schnell wie möglich anfangen kannst.
        </p>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/startup-basics/start"
          >
            Mit Roadmap starten
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Die erste Anlaufstelle für alle jungen Leute, die etwas aufbauen wollen, was wichtige Probleme löst"
    >
      <HomepageHeader />
      <HomepageMain />
    </Layout>
  );
}
