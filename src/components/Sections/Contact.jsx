import {
  GithubFilled,
  LinkedinFilled,
} from '@ant-design/icons';

export default function Contact() {
  const styles = {
    container: {
      backgroundColor: "#176CC0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    content: {
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
        <div className="socialIconsContainer" style={{display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px'}}>
          <GithubFilled style={{ fontSize: '32px', color: 'white' }}/>
          <LinkedinFilled style={{ fontSize: '32px', color: 'white' }}/>
        </div>
      </div>
    </div>
  );
}
