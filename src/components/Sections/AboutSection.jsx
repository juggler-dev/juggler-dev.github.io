import GlobalStyle from "../../utils/GlobalStyle";

export default function AboutSection() {
  const styles = {
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
    },
    imageTextContainer: {
      flex: 1,
      flexDirection: "row",
      paddingVertical: 50,
      paddingHorizontal: 50,
      gap: 50,
      width: "80%",
    },
    content: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      fontSize: "16px",
    },
    title: {
      fontSize: "70px",
      alignSelf: "flex-start",
      color: "white",
    },
    message: {
      fontSize: "20px",
      textAlign: "justify",
      color: "white",
    },
  };

  return (
    <div className="aboutContainer" style={styles.container}>
      <div style={styles.imageTextContainer}>
        {/* <Image
          source={require("../../../assets/photos/diego_portfolio_portrait.jpg")}
          style={{ width: "480px", height: "350px", borderRadius: 16 }}
        ></Image> */}
        <div className="content" style={styles.content}>
          <p style={styles.title}>Hello there!</p>
          <p style={styles.message}>
            Hello! I'm Diego, a fullstack developer and game designer/programmer
            from Peru. I'm currently seeking job opportunities and I'd like to
            showcase my work to you. I graduated with distinction from Langara
            College's Web and Mobile App Design and Development program. In my
            portfolio, you can explore some of the web and game projects I have
            worked on, both individually and as part of a team. I am a
            self-taught individual who constantly grows by experimenting and
            learning from various projects. I value clean and simple code as
            well as well-defined projects. If you have any questions or
            comments, please feel free to contact me. You can find my resume
            available here.
          </p>
        </div>
      </div>
    </div>
  );
}
