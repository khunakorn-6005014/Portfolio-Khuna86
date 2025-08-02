// src/app/projects/ecommerce/page.tsx
import Image from 'next/image';
export default function EcommercePage() {
  return (
    <article className="prose lg:prose-xl dark:prose-invert mx-auto py-8">
      <h1 className="text-4xl font-bold">E-Commerce REST API Server</h1>

      {/* Introduction */}
      <h2 className="text-4xl font-bold">Introduction</h2>
      <p>
        This is my hands-on microservices workshop where I practice building a
        scalable e-commerce backend. I’ve developed independent services for
        user management, product catalog, cart, orders, payments, shipping,
        notifications, authentication, and an API gateway. Everything runs in
        Docker and Kubernetes to simulate a real-world production environment.
      </p>
       {/* Project Link */}
      <p>
        <a
          href="https://github.com/khunakorn-6005014/Project-API-shop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Source on GitHub
        </a>
      </p>

       <div className="md:col-span-1 flex justify-center">
              <Image
                src="/images/architecture.png"
                alt="Khunakorn Wongsriprasert"
                width={500}
                height={500}
              />
            </div>
      
      {/* Goals */}
      <h2 className="text-4xl font-bold">Goals</h2>
      <ul>
        <li>Gain confidence in server-side development with Node.js and Express</li>
        <li>Improve JavaScript skills</li>
        <li>Design and implement RESTful APIs</li>
        <li>Secure services with JWT-based authentication and role-based authorization</li>
        <li>Work with MongoDB in a microservice architecture</li>
        <li>Build event-driven communication using Kafka</li>
        <li>Set up monitoring with Prometheus, Alertmanager, and Grafana</li>
        <li>Containerize services and orchestrate them in Kubernetes (Kind)</li>
      </ul>

      {/* User & Admin Features */}
      <h2 className="text-4xl font-bold">User Features</h2>
      <ul>
        <li>Register, log in, and manage profile</li>
        <li>View product catalog and add personal products</li>
        <li>Add, update, or remove items in the shopping cart</li>
        <li>Checkout cart → creates an order in pending status</li>
        <li>Process payment → pay or refund</li>
        <li>Return products → trigger refund and shipping return flow</li>
        <li>View order history and shipping notifications</li>
        <li>Accept delivered products → mark order completed</li>
      </ul>

      <h2 className="text-4xl font-bold">Admin Features</h2>
      <ul>
        <li>Manage (create, update, delete) all products</li>
        <li>View and delete user accounts</li>
        <li>Inspect all orders and payment/refund statuses</li>
        <li>Update shipping records (create shipments, mark delivered/returned)</li>
      </ul>

      {/* Tech Stack */}
      <h2 className="text-4xl font-bold">Tech Stack</h2>
      <ul>
        <li>Node.js & Express</li>
        <li>MongoDB with Mongoose</li>
        <li>Kafka (KafkaJS) for event buses</li>
        <li>JWT for authentication & authorization</li>
        <li>Docker & Docker Compose for local development</li>
        <li>Kind (Kubernetes in Docker) for orchestration</li>
        <li>Prometheus, Alertmanager, Grafana for monitoring</li>
        <li>Postman / Insomnia for API testing</li>
      </ul>

      {/* Service Overview */}
      <h2 className="text-4xl font-bold">Service Overview</h2>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-black-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Service</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Responsibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">auth-service</td>
            <td className="border border-gray-300 px-4 py-2">JWT issuance and user authentication</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">api-gateway</td>
            <td className="border border-gray-300 px-4 py-2">Centralized reverse-proxy, routing, CORS</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">user-service</td>
            <td className="border border-gray-300 px-4 py-2">User account CRUD and admin controls</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">product-service</td>
            <td className="border border-gray-300 px-4 py-2">Product catalog CRUD and owner features</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">cart-service</td>
            <td className="border border-gray-300 px-4 py-2">Shopping cart management</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">order-service</td>
            <td className="border border-gray-300 px-4 py-2">Order lifecycle and status updates</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">payment-service</td>
            <td className="border border-gray-300 px-4 py-2">Payment processing and refunds</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">shipping-service</td>
            <td className="border border-gray-300 px-4 py-2">Shipment creation, tracking, returns</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">notifications</td>
            <td className="border border-gray-300 px-4 py-2">Email/SMS/Push notifications</td>
          </tr>
        </tbody>
      </table>

      {/* Architecture */}
      <h2 className="text-4xl font-bold">Architecture</h2>
      <p>
        This system uses an event-driven architecture powered by Kafka. Each
        service emits or consumes topics to remain loosely coupled and scalable.
      </p>
      <h3 className="text-4xl font-bold">Event Flows</h3>
      <ul>
        <li>
          <strong>Product → User / Cart:</strong> ProductCreated, ProductUpdated,
          ProductRemoved update user’s product lists and cart metadata.
        </li>
        <li>
          <strong>Cart → Order:</strong> CartCheckout → OrderService creates a
          pending order.
        </li>
        <li>
          <strong>Order → Payment & Shipping:</strong> orderCreated →
          PaymentService and ShippingService kick off their workflows.
        </li>
        <li>
          <strong>Payment → Order & Notification:</strong> payment.completed →
          OrderService marks paid; NotificationService sends confirmation.
        </li>
        <li>
          <strong>Shipping → Order & Notification:</strong> awaiting.shipment,
          shipment.delivered, shipment.returned update order status and notify.
        </li>
        <li>
          <strong>Returns:</strong> shipment.returned → PaymentService triggers
          refund and emits payment.refunded.
        </li>
        <li>
          <strong>Order Completion & Inventory:</strong> userAcceptProduct →
          OrderService marks completed; ProductService decrements stock.
        </li>
      </ul>

      {/* Future Goals */}
      <h2 className="text-4xl font-bold">Future Goals</h2>
      <ul>
        <li>Write unit and integration tests (Jest, Supertest, Testcontainers)</li>
        <li>Automate CI/CD pipelines</li>
        <li>Harden security with network policies and secret management</li>
        <li>Extend features: order analytics, AI-driven recommendations</li>
      </ul>

      {/* Getting Started */}
      <h2 className="text-4xl font-bold">Getting Started</h2>
      <pre className="bg-black-100 p-4 rounded">
{`# Run all services locally
docker-compose -f docker-compose.yml -f docker-compose-metric.yml up --build

# To stop and clean up
docker-compose -f docker-compose.yml -f docker-compose-metric.yml down --volumes --remove-orphans`}
      </pre>

      {/* Monitoring */}
      <h3>Monitoring Dashboards</h3>
      <ul>
        <li>
          Grafana: <a href="http://localhost:4000">http://localhost:4000</a>
        </li>
        <li>
          Prometheus: <a href="http://localhost:9090/targets">http://localhost:9090/targets</a>
        </li>
      </ul>

      {/* Kubernetes Deployment */}
      <h3 className="text-4xl font-bold">Kubernetes (Kind) Deployment</h3>
      <pre className="bg-black-100 p-4 rounded">
{`# Create a kind cluster
kind create cluster --name my-cluster

# Apply Kubernetes manifests
kubectl apply -f kubernetes/`}
      </pre>
    </article>
  );
}