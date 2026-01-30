export default function PieChart({ data, size = 200 }) {
  const total = data.reduce((sum, item) => sum + item.percent, 0);

  const generateSlices = () => {
    let cumulativePercent = 0;

    return data.map((item, index) => {
      const startAngle = (cumulativePercent / total) * 360;
      const endAngle = ((cumulativePercent + item.percent) / total) * 360;
      cumulativePercent += item.percent;

      const startRad = (startAngle - 90) * (Math.PI / 180);
      const endRad = (endAngle - 90) * (Math.PI / 180);

      const radius = size / 2;
      const x1 = radius + radius * Math.cos(startRad);
      const y1 = radius + radius * Math.sin(startRad);
      const x2 = radius + radius * Math.cos(endRad);
      const y2 = radius + radius * Math.sin(endRad);

      const largeArc = item.percent / total > 0.5 ? 1 : 0;

      const pathData = [
        `M ${radius} ${radius}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
        "Z",
      ].join(" ");

      return <path key={index} d={pathData} fill={item.color} stroke="white" strokeWidth="2" />;
    });
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {generateSlices()}
    </svg>
  );
}
