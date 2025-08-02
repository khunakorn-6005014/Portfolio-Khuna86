// src/app/projects/ecommerce/page.tsx
export default function EcommercePage() {
  return (
    <article className="prose lg:prose-xl dark:prose-invert">
      <h1>E-Commerce REST API Server</h1>
      <p>
        I architected a microservices-based e-commerce backend from the ground up to  
        handle millions of user interactions with reliable, asynchronous workflows.
      </p>
      <h2>Role & Scope</h2>
      <ul>
        <li>Solo developer: design, implementation, deployment</li>
        <li>Owned data modeling through observability</li>
      </ul>
      <h2>Tech Stack</h2>
      <ul>
        <li>Node.js / Express</li>
        <li>MongoDB / Mongoose</li>
        <li>Kafka, Docker, Kubernetes (Kind)</li>
        <li>Prometheus & Grafana</li>
      </ul>
      <h2>Outcomes & Next Steps</h2>
      <ul>
        <li>Modular, horizontally scalable architecture</li>
        <li>Foundation for CI/CD, testing, network policies</li>
        <li>Upcoming: order analytics dashboards, AI recommendation</li>
      </ul>
      <p>
        I’m open to suggestions for improvement and happy to discuss next steps.
      </p>
    </article>
  );
}