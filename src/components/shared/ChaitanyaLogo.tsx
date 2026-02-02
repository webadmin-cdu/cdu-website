const ChaitanyaLogo = ({
  width = 900,
  height = 160,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 900 160"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap');
    `}</style>

    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#c80e13"
      fontSize="120"
      fontWeight="700"
      letterSpacing="6"
      fontFamily="Cinzel, serif"
    >
      CHAITANYA
    </text>
  </svg>
);

export default ChaitanyaLogo;
