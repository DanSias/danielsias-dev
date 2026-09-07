import Link from "next/link";

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
        &ldquo;This should be easier.&rdquo;
      </p>
      <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed text-center">
        That&apos;s the thought behind almost every project I&apos;ve enjoyed
        building: the internal tool nobody asked for until they saw it, the
        dashboard that replaced a week of manual reporting, the platform
        that finally gave a team visibility into work they&apos;d been
        tracking by hand. It&apos;s less a mission statement than a reflex:
        when something feels harder than it should, I want to go fix it.
      </p>

      <div className="mt-14 space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Why internal tools
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m drawn to the software that runs quietly behind the
            scenes: internal platforms and developer tooling that a team
            depends on without thinking about it.{" "}
            <Link
              href="/projects/workflow-intelligence"
              className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
              Workflow Intelligence
            </Link>{" "}
            exists because engineering leadership shouldn&apos;t have to
            manually cross-reference three different tools just to know
            where things stand. That&apos;s the kind of problem I find
            genuinely satisfying: not glamorous, but real, and immediately
            felt by the people who use it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            How I get there
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            My background is in physics before it was in software, and that
            still shapes how I approach engineering: understand a system
            before you change it, model it before you build it, and trust
            data over intuition when the two disagree. Given the choice,
            I&apos;ll ship something boring and reliable over something
            impressive and fragile.
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            That approach also comes out of a decade-plus of digital
            marketing, SEO, and analytics — full-stack development was part
            of that work from the start, and it became the deeper focus
            over time.{" "}
            <Link
              href="/marketing"
              className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
              More on that background →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Where AI fits
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            AI removes the repetitive parts of my process (boilerplate,
            scaffolding, first drafts of things I already know how to build)
            so I can iterate faster on the parts that actually need
            judgment. It doesn&apos;t replace understanding the problem;
            generating code was never the hard part. I use it to spend more
            time solving the right problems, not to avoid thinking about
            them.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            What I&apos;m building now
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            Right now that means Workflow Intelligence at{" "}
            <Link
              href="/experience"
              className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
              RocketGate
            </Link>
            : replacing status meetings, spreadsheets, and manual
            reporting with a single place to understand how engineering work
            is actually moving. It&apos;s the clearest example of how I like
            to work: find the friction, build the thing that removes it. If
            you&apos;re curious what this looks like in practice,{" "}
            <Link
              href="/projects/workflow-intelligence"
              className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
              Workflow Intelligence
            </Link>{" "}
            is probably the best place to start.
          </p>
        </section>
      </div>

      <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Outside of software
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
          Outside of engineering, I&apos;m probably out with my dog, working
          through a mid-90s Japanese project car that has strong opinions
          about being finished, or enjoying a good craft beer while thinking
          about none of the above.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
