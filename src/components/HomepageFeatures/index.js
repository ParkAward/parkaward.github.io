import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "공부",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>공식 문서, 책등의 근본을 바탕으로 기록합니다.</>,
  },
  {
    title: "기술",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>깊은 전공지식을 기록합니다.</>,
  },
  {
    title: "툴",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>엔지니어링, 툴등을 셋팅 행동을 기록합니다.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
