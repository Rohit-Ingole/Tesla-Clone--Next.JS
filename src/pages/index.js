import Head from "next/head";
import * as s from "../styles/index.styles";
import homeData from "../assets/homedata";

import Section from "../components/Section/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <s.HomeContainer>
        {homeData.map(({ title, image, subtitle, other, special }, index) => (
            <Section
              title={title}
              image={image}
              subtitle={subtitle}
              other={other}
              special={special}
              key={index}
            />
        ))}
      </s.HomeContainer>
    </>
  );
}
