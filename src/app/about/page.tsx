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
          I graduated with a Bachelor of Applied Science in Physics from Mahidol University, 
          where I honed my numerical analysis and computational research skills. Through the 
          Greystone Co-op Full-Stack Program, I mastered React, Node.js, and MongoDB, 
          building end-to-end applications deployed on Kubernetes.
        </p>
        <p>
          I’m passionate about accessible design and performance optimization. When I need 
          a break, I grab my camera and chase Vancouver sunsets to fuel my astrophotography hobby.
        </p>
      </div>
    </section>
  );
}
