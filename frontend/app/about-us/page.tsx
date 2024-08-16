import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unique Auditing & Tax Consultancy
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We are a leading auditing, accounting, and tax consultancy
                    firm dedicated to helping businesses navigate the
                    complexities of financial management and compliance. Our
                    team of experts provides comprehensive services to ensure
                    the success and growth of our clients.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex text-white h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video  rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-primary text-white rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive Financial Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Unique Auditing & Tax Consultancy, we offer a wide range of
                  services to help businesses thrive in the modern financial
                  landscape. Our expertise spans auditing, accounting, taxation,
                  and business consultancy, ensuring our clients have the tools
                  and guidance they need to succeed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Auditing</h3>
                      <p className="text-muted-foreground">
                        Our team of experienced auditors ensures the accuracy
                        and integrity of your financial records, providing
                        valuable insights to help you make informed decisions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Accounting</h3>
                      <p className="text-muted-foreground">
                        From bookkeeping to financial reporting, our accounting
                        services help you maintain a clear and organized
                        financial picture of your business.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Taxation</h3>
                      <p className="text-muted-foreground">
                        Our tax experts ensure you&apos;re compliant with all
                        relevant regulations and help you maximize your tax
                        savings, allowing you to focus on growing your business.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Business Consultancy
                      </h3>
                      <p className="text-muted-foreground">
                        Our business consultancy services provide strategic
                        guidance and support to help you navigate the
                        complexities of the modern business landscape and
                        achieve your goals.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Services"
                className="mx-auto aspect-video  rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 lg:grid-cols-2 lg:gap-20">
              <div className="space-y-4">
                <div className="inline-block text-white bg-primary rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Commitment
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Professionalism, Expertise, and Personalized Service
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Unique Auditing & Tax Consultancy, we are committed to
                  providing our clients with the highest level of
                  professionalism, expertise, and personalized service. Our team
                  of seasoned professionals is dedicated to helping businesses
                  navigate the complex world of financial management and
                  compliance, ensuring their success and growth.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 text-white items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Meet Our Team
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block bg-primary text-white rounded-lg bg-muted px-3 py-1 text-sm">
                  Why Choose Us
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Unique Auditing & Tax Consultancy is the trusted partner for
                  businesses seeking comprehensive financial solutions. Our
                  commitment to excellence, attention to detail, and
                  personalized approach have earned us a reputation for
                  delivering exceptional results. Let us help you navigate the
                  complexities of financial management and compliance,
                  empowering your business to thrive.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
