export default function SectionHeader({ title }) {
  const styles = {
    container: {
      backgroundColor: "rgba(25, 25, 25, 0.95)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderTopWidth: '1px',
      borderTopColor: 'white',
      borderBottomWidth: '1px',
      borderBottomColor: 'white',
    },
    title: {
      paddingVertical: "20px",
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
