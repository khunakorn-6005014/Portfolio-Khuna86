// src/app/projects/page.tsx
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link 
          href="/projects/ecommerce" 
          className="p-6 border rounded-lg hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold mb-2">E-Commerce REST API</h3>
          <p>Microservices backend with Kafka, JWT auth, Docker & Kubernetes observability.</p>
        </Link>
        {/* Add more project cards as you go */}
      </div>
    </section>
  );
}