import { Link } from "react-router-dom";

import GlobalStyle from "../../utils/GlobalStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons/faEarthAmericas";
import { faGamepad } from "@fortawesome/free-solid-svg-icons/faGamepad";

import HeaderNav from "./HeaderNav";

export default function HeaderComponent() {
  const styles = {
    container: {
      backgroundColor: 'rgba(25, 25, 25, 0.95)',
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "20px 30px",
      gap: "40px",
      borderBottom: '1px solid silver',
      position: 'fixed',
      top: 0,
      width: '100%',
    },
    nameText: {
      fontSize: "36px",
      textTransform: 'uppercase'
    },
  };

  return (
    <div style={styles.container}>
      <Link to="/">
        <p style={styles.nameText}>Diego Santa Cruz</p>
      </Link>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <FontAwesomeIcon icon={faGamepad} color="white" />

          <HeaderNav pressableLabel={"Gaming Projects"} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <FontAwesomeIcon icon={faEarthAmericas} color="white" />
          <HeaderNav pressableLabel={"Web Projects"} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <HeaderNav pressableLabel={"About"} />
        </div>
      </div>
    </div>
  );
}
