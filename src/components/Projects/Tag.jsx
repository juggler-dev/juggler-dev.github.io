import { tagColorCheck } from "../../utils/utils";

export default function Tag({ content, color }) {
  const styles = {
    container: {
      display: "flex",
      backgroundColor: tagColorCheck(color),
      padding: 5,
      marginHorizontal: 5,
      borderRadius: "8px",
    },
    text: {
      fontSize: '14px'
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>{content}</p>
    </div>
  );
}
