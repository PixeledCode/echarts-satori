export const ChartTemplate = ({
  data,
  title,
}: {
  data: string | undefined;
  title: string;
  props?: {
    height: number;
    width: number;
  };
}) => {
  const date = new Date();
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        paddingTop: "24px",
        border: "1px solid #cecdd6",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "16px",
          borderBottom: "1px solid #cecdd6",
        }}
      >
        <h1
          style={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "4px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "4px",
            fontWeight: "400",
            marginTop: "8px",
            display: "flex",
            gap: "4px",
          }}
        >
          <span
            style={{
              color: "#6c6a83",
            }}
          >
            from
          </span>
          Batadraba Morigaon Part, Bhurbandha, Dolongghat morigaon Part, Kapili,
          Laharighat, Mayong, Moirabari
        </p>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "4px",
            fontWeight: "400",
            marginTop: "8px",
            display: "flex",
            gap: "4px",
          }}
        >
          <span
            style={{
              color: "#6c6a83",
            }}
          >
            in
          </span>
          FY 2023-24
        </p>
      </div>
      <img
        src={data}
        width={844}
        alt="chart"
        style={{
          width: "100%",
          objectFit: "contain",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginTop: "16px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderTop: "1px solid #cecdd6",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            marginTop: "8px",
            display: "flex",
            gap: "4px",
          }}
        >
          <span
            style={{
              color: "#6c6a83",
            }}
          >
            accessed on
          </span>
          {`${day} ${month}, ${year}`}
        </p>
        <div
          style={{
            width: "1px",
            height: "50%",
            backgroundColor: "#cecdd6",
            marginBottom: "8px",
          }}
        />
        <p
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            marginTop: "8px",
            display: "flex",
            gap: "4px",
          }}
        >
          <span
            style={{
              color: "#6c6a83",
            }}
          >
            last updated on
          </span>
          29 December, 2023
        </p>
      </div>
    </div>
  );
};
