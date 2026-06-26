// Re-mounted by the App Router on every navigation, so the enter animation
// runs on each tab switch. The fade-up shares the navbar bar's easing token
// (--ease-glide) and starts ~60ms later, so the content reads as following
// the bar rather than competing with it. Reduced motion shows it instantly.
export default function Template({ children }: { children: React.ReactNode }) {
    return <div className="animate-fade-up motion-reduce:animate-none">{children}</div>;
}
