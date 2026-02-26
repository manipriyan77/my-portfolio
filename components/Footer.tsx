import { GENERAL_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="pb-5 text-center" id="contact">
      <div className="container mx-auto">
        <p className="text-lg">You know how to find me</p>
        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="mt-5 mb-10 inline-block text-3xl hover:underline sm:text-4xl font-bold"
        >
          {GENERAL_INFO.email}
        </a>

        <div>
          <a
            href="https://github.com/manipriyan"
            target="_blank"
            rel="noreferrer noopener"
            className="leading-none text-white/80 hover:text-white hover:underline"
          >
            built by Mani Priyan {"<3"}
          </a>
        </div>
      </div>
    </footer>
  );
}
