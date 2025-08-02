// src/app/certificates/page.tsx
import Image from 'next/image';
import Link from 'next/link';

const certificates = [
  {
    title: 'IBM Machine Learning Professional Certificate',
    period: 'Feb 2025 – Apr 2025',
    description: [
      'Developed expertise in KNN, PCA, and recommender systems in Python.',
      'Built regression & classification models, trained neural networks.',
      'Completed a capstone with real-world ML solutions.',
      'Proficient in ensemble learning, decision trees, and deep learning.'
    ],
    imgSrc: '/certs/ibm-ml.jpg',
    pdfHref: '/certs/ibm-ml.pdf',
    verifyLink:
      'https://www.coursera.org/account/accomplishments/specialization/S054X592KNIF',
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    period: 'Dec 2024 – Feb 2025',
    description: [
      'Identified and mitigated common security risks and vulnerabilities.',
      'Worked with IDS, SIEM tools, and network security practices.',
      'Developed Python, Linux, and SQL skills for cybersecurity analysis.'
    ],
    imgSrc: '/certs/google-cyber.jpg',
    pdfHref: '/certs/google-cyber.pdf',
    verifyLink:
      'https://www.coursera.org/account/accomplishments/specialization/4ICI4OCG2TA1',
  },
];

export default function CertificatesPage() {
  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold">Certificates</h2>

      {certificates.map((cert, idx) => (
        <article
          key={idx}
          className="flex flex-col md:flex-row items-center md:items-start p-6 border rounded-lg hover:shadow-lg transition"
        >
          <div className="w-48 flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <Image
              src={cert.imgSrc}
              alt={cert.title + ' Badge'}
              width={192}
              height={192}
              className="rounded-lg"
            />
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-2xl font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-500">{cert.period}</p>
            <ul className="list-disc list-inside space-y-1">
              {cert.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <div className="flex space-x-4 mt-4">
              <Link
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Verify Online
              </Link>
              <Link
                href={cert.pdfHref}
                download
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}