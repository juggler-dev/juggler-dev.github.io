import { Link } from "react-router-dom";

export default function HeaderNav({ pressableLabel }) {
  const styles = {
    headerNavPressable: {
      textTransform: "uppercase",
    },
  };

  return (
    <Link to="/">
      <p style={styles.headerNavPressable}>
        {pressableLabel}
      </p>
    </Link>
  );
}
