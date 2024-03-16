export const ChartTemplate = ({
  data,
  title,
  props,
}: {
  data: string | null;
  title: string;
  props?: {
    height: number;
    width: number;
  };
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {title}
      </p>
      {data ? (
        <img src={data} {...props} className="w-full" alt="SVG" />
      ) : (
        "Loading..."
      )}
    </div>
  );
};
