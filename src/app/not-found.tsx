import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-start gap-4 py-16">
            <p className="font-mono text-sm text-muted-foreground">
                <span className="text-signal">$</span> cat ./404
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight">
                404 — route not found
            </h1>
            <p className="text-muted-foreground">
                That page doesn&apos;t exist. Let&apos;s get you back.
            </p>
            <Link
                href="/"
                className="font-mono text-sm underline-offset-4 hover:text-signal hover:underline"
            >
                → return home
            </Link>
        </div>
    );
}
