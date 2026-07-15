import Container from "../common/Container";

const stats = [
  {
    number: "50,000+",
    title: "Khelaiyas",
    subtitle: "Across 9 Days of the Event",
    color: "bg-[#B31911]",
    size: "large",
  },
  {
    number: "9+",
    title: "Industry",
    subtitle: "Partners",
    color: "bg-[#B31911]",
    size: "vertical",
  },
  {
    number: "120+",
    title: "Celebrities",
    subtitle: "& Influencers",
    color: "bg-[#195A99]",
    size: "large",
  },
  {
    number: "1 Million+",
    title: "Digital",
    subtitle: "Impressions",
    color: "bg-[#B31911]",
    size: "large",
  },
];

export default function ImpactNumbers() {
  return (
    <section className="relative bg-[#FFF8E8] py-28">

      <Container>

        <div className="mb-20 text-center">

          <p className="tracking-[0.35em] uppercase text-[#D4AF37] text-sm">
            Our Impact
          </p>

          <h2 className="mt-5 text-5xl font-semibold text-[#111]">
            Numbers that define
            <br />
            Vrindavan Nagari
          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-12">

          {/* Left Column */}

          <div className="lg:col-span-7 flex flex-col gap-6">

            <Card {...stats[0]} />

            <Card {...stats[2]} />

          </div>

          {/* Right Column */}

          <div className="lg:col-span-5 flex flex-col gap-6">

            <div className="grid grid-cols-[1fr_auto] gap-6">

              <Card {...stats[1]} />

              <div className="hidden lg:flex items-center justify-center">

                <div
                  className="
                    h-40
                    w-40
                    rounded-full
                    border-[18px]
                    border-[#B31911]
                    border-dashed
                    opacity-30
                  "
                />

              </div>

            </div>

            <Card {...stats[3]} />

          </div>

        </div>

      </Container>

    </section>
  );
}

function Card({
  number,
  title,
  subtitle,
  color,
  size,
}) {
  return (
    <div
      className={`
        ${color}
        rounded-[40px]
        p-10
        text-[#FFF8E8]
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        ${
          size === "vertical"
            ? "min-h-[320px]"
            : "min-h-[250px]"
        }
      `}
    >
      <h3 className="text-6xl font-bold">

        {number}

      </h3>

      <div className="mt-12">

        <p className="text-2xl font-semibold">

          {title}

        </p>

        <p className="mt-2 text-xl opacity-90">

          {subtitle}

        </p>

      </div>

    </div>
  );
}