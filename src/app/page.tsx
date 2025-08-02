// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        Hi, I’m Khunakorn.
      </h1>
      <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-300 mb-6">
        I’m a Junior Full-Stack Developer in Vancouver, BC, blending a physics-driven analytical mindset  
        with creative problem solving to build responsive React UIs and resilient Node.js microservices.
      </p>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        When I’m not coding, I’m out chasing Vancouver sunsets through my astrophotography lens.
      </p>
      <Link
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        View My Work
      </Link>
    </section>
  );
}
