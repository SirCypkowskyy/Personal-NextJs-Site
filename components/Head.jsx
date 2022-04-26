import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Cyprian 'SirCypkowskyy' Gburek is a passionate and goal-driven Computer Science student with 2+ years of non-commercial experience programming and developing video games"
      />
      <meta
        name="keywords"
        content="cyprian gburek, cyprian, gburek, sircypkowskyy, sircypkowskyy games, sircypkowskyy developer, cyprian gburek developer, cyprian gburek portfolio"
      />
      <meta property="og:title" content="Cyprian Gburek's Portfolio" />
      <meta
        property="og:description"
        content="A Computer Science student with 2+ years of non-commercial experience programming and developing video games."
      />
      <meta property="og:image" content="https://i.imgur.com/0yVq9BT.png" />
      <meta property="og:url" content="https://sircypkowskyy.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Cyprian Gburek',
};
