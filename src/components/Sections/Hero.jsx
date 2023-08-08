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
          Hi! I'm Diego, a fullstack developer and game designer/programmer based in Vancouver.
        </p>
      </div>
    </div>
  );
}
