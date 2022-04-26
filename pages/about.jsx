const linkStyle = {
  color: 'white',
  backgroundcolor: 'transparnet',
};
const imageMargin = {
  marginRight: '0%',
  marginTop: '-2%'
};

const AboutPage = () => {
  return (
    <>
      <h3>🧑🏻‍🏫&nbsp;Personal Info</h3>
      <img align="right" width="350px" height="350px" style={imageMargin} alt="My typical day" src="https://media3.giphy.com/media/5eLDrEaRGHegx2FeF2/giphy.gif?cid=790b761157vrk7gdew8yfsk2i9nrr4pm1jtlxzvrqz605ex0&rid=giphy.gif&ct=s"/>

      <br />
      I am a passionate and goal-driven Computer Science student with 2+ years of non-commercial experience programming and developing (mainly) video games.
      <br />
      <br />
      Few words about me:
      <br />
      
        &nbsp;📖&nbsp;I study Computer Science at the <a href="https://www.pja.edu.pl/en">Polish-Japanese Academy of Information Technology</a>
        <br />
        &nbsp;🧑‍💻&nbsp;In my spare time I enjoy improving my web (HTML5, CSS, JS, Python [Flask], React), video games (C# [Unity]) and software development skills
        <br />
        &nbsp;🪂&nbsp;I take joy in working on various video games, front-end & back-end projects
        <br />
        &nbsp;⚡&nbsp;My main hobbies include: playing board & video games, reading books, playing guitar, studying history and role-playing...as well as, obviously, coding
        <br />
        &nbsp;🎮&nbsp;My favourite video games genres to play and develop are shooter, strategy, story-driven & RPG
        <br />
        &nbsp;🔖&nbsp;You can get my cv by clicking <a href="https://github.com/SirCypkowskyy/SirCypkowskyy/raw/main/cv/Cyprian_Gburek_Resume_18-03-2022-11-50-09.pdf" style={linkStyle}>here</a>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
