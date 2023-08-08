import { Link } from "react-router-dom";

export default function RedirectButton({ linkURL, buttonText }) {

    const styles= {
        button: {
            background: 'dodgerblue',
            color: 'inherit',
            border: 'none',
            padding: '10px',
            font: 'inherit',
            cursor: 'pointer',
            outline: 'inherit',
            borderRadius: '8px',
        }
    }

    return (
      <Link to={linkURL}>
        <button style={styles.button}>{buttonText}</button>
      </Link>
    );
  }
  