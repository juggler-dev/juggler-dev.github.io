export default function SectionHeader({ title }) {
  const styles = {
    container: {
      backgroundColor: "rgb(25, 25, 25)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderTop: '1px solid silver',
      borderBottom: '1px solid silver',
      padding: '20px 0px'
    },
    title: {
      fontSize: "50px",
    },
  };

  return (
    <div className="sectionHeaderContainer" style={styles.container}>
      <p 
        className="sectionHeaderTitle"
        style={styles.title}
      >
        {title}
      </p>
    </div>
  );
}
