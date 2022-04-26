import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'https://sircypkowskyy.github.io',
    href: 'https://sircypkowskyy.github.io',
  },
  {
    social: 'email',
    link: 'dcyprian.a.gburek@gmail.com',
    href: 'mailto:dcyprian.a.gburek@gmail.com',
  },
  {
    social: 'github',
    link: 'SirCypkowskyy',
    href: 'https://github.com/SirCypkowskyy/',
  },
  {
    social: 'linkedin',
    link: 'Cyprian Gburek',
    href: 'https://www.linkedin.com/in/cyprian-gburek-a58190213/',
  },
  {
    social: 'telegram',
    link: 'SirCypkowskyy',
    href: 'https://t.me/SirCypkowskyy',
  },
  {
    social: 'itch.io',
    link: 'SirCypkowskyy',
    href: 'https://sircypkowskyy.itch.io/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
