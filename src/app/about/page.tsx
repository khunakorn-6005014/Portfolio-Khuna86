// src/app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Profile Image */}
      <div className="md:col-span-1 flex justify-center">
        <Image
          src="/images/profile.jpg"
          alt="Khunakorn Wongsriprasert"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Bio Text */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p>
          Motivated full-stack web developer with hands-on experience in
          frontend and backend technologies, including React, Node.js, Java,
          Python, and MongoDB. I thrive on solving complex problems—whether
          that’s optimizing a React component or tuning machine learning models
          with NumPy and Scikit-Learn. A detail-oriented collaborator, I hold a
          B.Sc. in Applied Physics from Mahidol University and am currently
          expanding my skill set through the Greystone College Co-op
          Full-Stack Program.
        </p>
        <p>
          I&apos;m passionate about science and programming. I&apos;ve always
          loved life sciences, particularly because I want to understand how
          things work, and computer programming sits at that beautiful,
          rare intersection of logic and creativity.
        </p>
      </div>

      {/* Core Skills */}
      <h1 className="text-4xl font-bold md:col-span-3">Core Skills</h1>
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div>
          <h2 className="font-bold">Full-Stack Development :</h2>
          <ul className="list-disc ml-5">
            <li>Frontend: React, HTML, CSS, TypeScript</li>
            <li>Backend: Node.js, RESTful APIs</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Languages & Frameworks :</h2>
          <ul className="list-disc ml-5">
            <li>Python, Java, SQL, Pandas</li>
            <li>NumPy, Scikit-Learn, Matplotlib</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Databases & Tools :</h2>
          <ul className="list-disc ml-5">
            <li>MongoDB, MySQL, SQLite, Mongoose</li>
            <li>Docker, AWS, Git, Jenkins, MATLAB</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Platforms :</h2>
          <ul className="list-disc ml-5">
            <li>Jupyter Notebook, Visual Studio Code</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Soft Skills :</h2>
          <ul className="list-disc ml-5">
            <li>Attention to Detail</li>
            <li>Excellent Communication</li>
            <li>Creative Problem Solving</li>
          </ul>
        </div>
      </div>

      {/* Education & Co-op */}
      <div className="space-y-8 mt-4 md:col-span-2">
        <h1 className="text-4xl font-bold">Education</h1>

        <div>
          <h2 className="font-bold">
            Greystone College — Co­­op Full-Stack Development Program
          </h2>
          <p className="text-sm text-gray-600">May 2024 – Present</p>
          <ul className="list-disc ml-5">
            <li>
              Built dynamic web applications by integrating Node.js servers,
              MongoDB/Mongoose databases, and RESTful APIs.
            </li>
            <li>
              Collaborated on UI design and implementation using React and
              Angular, deploying with GitHub CI/CD pipelines.
            </li>
            <li>
              Enhanced professional skills through project-based learning,
              technical workshops, and real-world client scenarios.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">
            Mahidol University — B.Sc. Applied Science (Physics)
          </h2>
          <p className="text-sm text-gray-600">Oct 2017 – Feb 2022</p>
          <ul className="list-disc ml-5">
            <li>
              Mastered computational research methods, numerical analysis, and
              data visualization in Python and MATLAB.
            </li>
            <li>
              Gained parallel computing experience using OpenCL, MPI, and OpenMP.
            </li>
            <li>
              Researched Martian surface structures by analyzing seismic
              frequency data from NASA’s InSight mission.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}