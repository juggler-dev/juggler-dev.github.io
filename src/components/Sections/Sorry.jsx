export default function Sorry() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "yellow",
      height: 500,
      gap: 50,
    },
    message: {
      fontSize: 64,
    },
  };

  return (
    <div style={styles.container}>
      {/* <Image source={require('../../assets/bowing_icon.png')} style={{width: 400, height: 300, objectFit: 'fill'}}/> */}
      <p style={styles.message}>Sorry! We are under maintenance.</p>
    </div>
  );
}
