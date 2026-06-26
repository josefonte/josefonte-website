// Each listing page's <h1>. Visually hidden (the terminal path motif was
// removed), but kept in the DOM as the page's accessible heading for
// screen readers and SEO.
export default function PageHeader({ path }: { path: string }) {
    return <h1 className="sr-only">{path}</h1>;
}
