export function tagColorCheck(color) {
  switch (color) {
    case 'redTag':
      return "#990000";
    case 'blueTag':
      return "#0080FF";
    case 'yellowTag':
      return "#999900";
    case 'greenTag':
      return "#008800";
    case 'orangeTag':
      return "#CC6600";
    case 'purpleTag':
      return "#7F00FF";
    default:
      return "#404040";
  }
}
