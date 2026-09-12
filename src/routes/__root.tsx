import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { logo, site } from "../lib/content";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold text-deep">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-body">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-deep px-6 py-2.5 text-sm font-semibold text-deep-foreground transition-colors hover:bg-ocean"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-body">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-deep px-6 py-2.5 text-sm font-semibold text-deep-foreground transition-colors hover:bg-ocean"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-deep px-6 py-2 text-sm font-semibold text-deep transition-colors hover:bg-deep hover:text-deep-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "PURE3ON" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PURE3ON" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass =
    "rounded-full px-4 py-2 text-sm font-semibold text-deep transition-colors hover:bg-mist";
  const activeClass = "bg-mist";

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="PURE3ON home">
          <img src={logo} alt="PURE3ON wave logo" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-extrabold tracking-tight text-deep">
            PURE<span className="text-ocean">3</span>ON
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          <Link to="/" className={linkClass} activeProps={{ className: `${linkClass} ${activeClass}` }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/team" className={linkClass} activeProps={{ className: `${linkClass} ${activeClass}` }}>
            Team
          </Link>
          <a
            href={`mailto:${site.contactEmail}`}
            className="ml-2 rounded-full bg-deep px-5 py-2 text-sm font-semibold text-deep-foreground transition-colors hover:bg-ocean"
          >
            Get Involved
          </a>
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-deep hover:bg-mist md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border/60 bg-background px-6 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            <Link to="/" className={linkClass} onClick={() => setMenuOpen(false)} activeOptions={{ exact: true }}>
              Home
            </Link>
            <Link to="/team" className={linkClass} onClick={() => setMenuOpen(false)}>
              Team
            </Link>
            <a href={`mailto:${site.contactEmail}`} className="mt-2 rounded-full bg-deep px-5 py-2.5 text-center text-sm font-semibold text-deep-foreground">
              Get Involved
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
        <img src={logo} alt="PURE3ON wave logo" className="h-16 w-16 rounded-full bg-white object-contain p-1" />
        <p className="font-display text-2xl font-extrabold tracking-tight">
          PURE<span className="text-mist">3</span>ON
        </p>
        <p className="max-w-md text-sm text-deep-foreground/80">
          {site.tagline} {site.motto}
        </p>
        <nav className="flex items-center gap-6 text-sm font-semibold" aria-label="Footer navigation">
          <Link to="/" className="transition-colors hover:text-mist">
            Home
          </Link>
          <Link to="/team" className="transition-colors hover:text-mist">
            Team
          </Link>
          <a href={`mailto:${site.contactEmail}`} className="transition-colors hover:text-mist">
            Contact
          </a>
        </nav>
        <p className="text-xs text-deep-foreground/60">
          A student-led environmental non-profit at Walton High School.
        </p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
