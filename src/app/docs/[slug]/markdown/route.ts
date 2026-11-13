import { getDoc, docsBySection } from "@/lib/docs";

// Prerendered at build; the markdown files ship with the repo.
export function generateStaticParams() {
  return docsBySection().flatMap((g) => g.docs.map((d) => ({ slug: d.slug })));
}

export async function GET(
  _req: Request,
  ctx: RouteContext<"/docs/[slug]/markdown">,
) {
  const { slug } = await ctx.params;
  const doc = getDoc(slug);
  if (!doc) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(doc.body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
