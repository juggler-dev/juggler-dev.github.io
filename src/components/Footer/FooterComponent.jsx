export default function FooterComponent() {
  const styles = {
    container: {
      height: 50,
      backgroundColor: "#252525",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "dodgerblue",
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>Copyright © 2023 by Diego Santa Cruz</p>
    </div>
  );
}
