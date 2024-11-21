import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to My Next.js <em>v15</em> App
      </h1>
      <p className="text-center mt-4">
        This is a starter template using Tailwind CSS and ShadCN UI.
      </p>
      <div className="flex justify-center mt-6">
        <Button variant="outline">Get Started</Button>
      </div>
    </main>
  );
}
