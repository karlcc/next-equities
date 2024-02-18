const Page = () => {
  return (
    <section className="container mx-auto mb-10 mt-20 md:absolute md:left-1/2 md:top-1/3 md:-translate-x-1/2 md:-translate-y-1/3">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          CAR25 and Safef
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          We are pleased to introduce the integration of CAR25 and Safe-f
          metrics into Next-Equities, a web app designed to provide a
          comprehensive evaluation of your investment portfolio. Unlike other
          tools that present risk and rewards separately, our system combines
          these metrics, offering a holistic view of portfolio performance.
        </p>
        <p className="text-muted-foreground max-w-2xl">
          CAR25, or Compound Annual Rate of Return at the 25th percentile,
          enables effective comparisons between investment options by
          considering risk-normalized profit potential. By focusing on
          conservative return estimates, CAR25 supports informed decision-making
          when allocating funds.
        </p>
        <p className="text-muted-foreground max-w-2xl">
          Safe-f measures the portion of your account equity that can be safely
          used for trading, incorporating potential drawdowns into the
          calculation. It acts as a protective measure against excessive risk,
          promoting prudent investment management.
        </p>
        <p className="text-muted-foreground max-w-2xl">
          Through Next-Equities, you can easily calculate and monitor CAR25 and
          Safe-f for your portfolio, providing valuable insights into its health
          and performance. By tracking these metrics over time, you can make
          adjustments to your investment strategy, optimize fund allocations,
          and proactively manage potential risks.
        </p>
        <p className="text-muted-foreground max-w-2xl">
          Embrace the combined power of CAR25 and Safe-f within Next-Equities,
          and gain control over your investment journey. Join us today to unlock
          a new level of portfolio analysis and monitoring capabilities.
        </p>
      </div>
    </section>
  );
};

export default Page;
