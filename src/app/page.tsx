import emailLogo from "@/img/emailLogo.png";
import githubLogo from "@/img/githubLogo.png";
import linkedinLogo from "@/img/linkedinLogo.png";
import me from "@/img/me.jpg";
import steamLogo from "@/img/steamLogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="min-h-screen flex items-center justify-center px-4 py-20 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-400">Stefano</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Site Reliability Engineer | Fullstack developer | Tech enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            DevOps engineer by day, gamer and passionate tinkerer by night
          </p>

          <Link
            href="#about"
            className="inline-block bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Keep reading ⬇️
          </Link>
        </div>
      </div>

      <div
        id="about"
        className="py-20 px-4 bg-opacity-50 bg-gray-900 border-t border-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                I&apos;m a passionate developer with expertise in modern web
                technologies and operation of cloud enterprise platforms.
              </p>
              <p>
                Currently I&apos;m working for{" "}
                <Link
                  href="https://www.swisscom.ch/en/about/company.html"
                  target="_blank"
                >
                  Swisscom
                </Link>
                , the leading ICT provider in Switzerland, while also making
                cool websites with my colleagues at{" "}
                <Link href="https://soulsbros.ch" target="_blank">
                  Soulsbros
                </Link>
                !
              </p>
              <p>
                When I&apos;m not coding, you can find me gaming, playing
                D&amp;D with friends, bothering our{" "}
                <Link href="https://cats.soulsbros.ch" target="_blank">
                  cats
                </Link>
                , or tinkering with some cool tech in my{" "}
                <Link href="https://lab.soulsbros.ch" target="_blank">
                  homelab
                </Link>
                .
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Docker", "Git"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={me}
                width="340"
                alt="Me"
                className="border-4 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fenice2",
                description:
                  "The new hub for our D&D sessions, featuring characters management, rulebooks, and various tools to help run and manage the campaigns.",
                tech: ["React", "Next.js", "MongoDB", "S3"],
                link: "https://fenice2.soulsbros.ch",
              },
              {
                title: "Homelab",
                description:
                  "All the stuff running in my garage. There's servers, cloud-native applications, and an entire phone system!",
                tech: ["Docker", "Networking", "Sysadmin", "YAML"],
                link: "https://lab.soulsbros.ch",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-3 text-blue-400">
                  <Link target="_blank" href={project.link}>
                    {project.title}
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  View Project →
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center mt-6">...and more to come!</p>
        </div>
      </div>

      <div
        id="contact"
        className="py-20 px-4 bg-opacity-50 bg-gray-900 border-t border-gray-800 mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Get in touch</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Check out some repos, scoff at my favourite games, or shoot me a
          message!
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com/Steeven9"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Image src={githubLogo} width="32" alt="GitHub logo" />
          </Link>
          <Link
            href="https://linkedin.com/in/stefano-taillefert"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Image src={linkedinLogo} width="32" alt="LinkedIn logo" />
          </Link>
          <Link
            href="https://steamcommunity.com/id/steeven9"
            target="_blank"
            rel="noopener noreferrer"
            title="Steam"
          >
            <Image src={steamLogo} width="32" alt="Steam logo" />
          </Link>
          <Link
            href="mailto:steeven@soulsbros.ch"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <Image src={emailLogo} width="32" alt="Email logo" />
          </Link>
        </div>
      </div>
    </>
  );
}
