import Link from "next/link";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto py-24 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-slate-900">Blog Post: {params.slug}</h1>
        <p className="text-slate-600 text-lg">
          This is a placeholder for your individual blog posts. You can connect this to a database or CMS later!
        </p>
      </div>
    </div>
  );
}