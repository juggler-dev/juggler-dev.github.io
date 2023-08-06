export default function Contact() {
  const styles = {
    container: {
      backgroundColor: "#176CC0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    content: {
      width: "60%",
      alignItems: "center",
    },
    title: {
      fontSize: "70px",
    },
    message: {
    },
  };

  return (
    <div className="aboutContainer" style={styles.container}>
      <div className="content" style={styles.content}>
        <p style={styles.title}>Contact Me</p>
        <p style={styles.message}>
          Feel free to contact me to gonzalo.santacruzm@gmail.com. You can
          follow me in my social media too!
        </p>
      </div>
    </div>
  );
}
