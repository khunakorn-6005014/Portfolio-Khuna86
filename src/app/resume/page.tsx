// src/app/resume/page.tsx
import Link from 'next/link';

export default function ResumePage() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold text-center">My Resume</h2>

      {/* PDF Viewer */}
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <object
          data="/Khunakorn-cv.pdf"
          type="application/pdf"
          width="100%"
          height="800px"
          className="block"
        >
         <p className="p-4 text-center">
            It looks like your browser doesn’t support embedded PDFs.&nbsp;
            <Link
              href="/resume.pdf"
              className="text-blue-600 underline"
            >
              Download the resume here.
            </Link>
          </p>
        </object>
      </div>

      {/* Download Button */}  
        <div className="text-center">
        <a
          href="/Khunakorn-cv.pdf"
          download="Khunakorn_Wongsriprasert_Resume.pdf"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Download PDF
        </a>
      </div>


    </section>
  );
}