import heroSectionImage from "../../assets/hero/heroSectionImage_dark.jpg"

export default function Hero() {
  const styles = {
    container: {
      display: 'flex',
      height: '900px',
      backgroundImage: `url(${heroSectionImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    columnContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: "column",
    },
    textContainer: {
      paddingRight: "100px",
      gap: "20px",
      justifyContent: "center",
    },
    heroSectionTitle: {
      fontSize: "72px",
    },
    heroSectionMessage: {
      fontSize: "24px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.columnContainer}></div>
      <div style={{...styles.columnContainer, ...styles.textContainer}}>
        <p style={styles.heroSectionTitle}>Hello there!</p>
        <p style={styles.heroSectionMessage}>
          Hi! I'm Diego, a fullstack developer and game designer/programmer from
          Peru. In my portfolio, you can explore some of the web and game
          projects I have worked on, both individually and as part of a team.If
          you have any questions or comments, please feel free to contact me.
          You can find my resume available here.
        </p>
      </div>
    </div>
  );
}
