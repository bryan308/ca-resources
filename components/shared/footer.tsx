import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-card text-secondary-foreground mt-10 border-t py-12">
      <div className="flex flex-col gap-4 px-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">CA Resources</p>
          <p className="text-xs">
            Built with 💖 by{" "}
            <Link
              href="https://cedricc.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium underline"
            >
              Cedric Angulo
            </Link>
          </p>
        </div>
        <div>
          <p className="text-xs">
            Powered by{" "}
            <Link
              href="https://fumadocs.dev"
              target="_blank"
              rel="noreferrer noopener"
              prefetch={false}
              className="font-medium underline"
            >
              fumadocs
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
