import { ImageZoom } from "fumadocs-ui/components/image-zoom"

interface Props {
  width: number
  height: number
  src: string
  className?: string
  alt?: string
  subtitle?: string
}

export default function ImageSection({
  width,
  height,
  className,
  alt,
  src,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-4 flex w-fit max-w-2xl flex-col items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 p-2 dark:border-neutral-800 dark:bg-neutral-900 [&_img]:m-0 [&>span]:w-fit">
      <ImageZoom
        width={width}
        height={height}
        className={`min-w-content mx-auto w-auto max-w-full rounded-md ${className ?? ""}`}
        alt={alt ?? ""}
        src={src}
      />
      {subtitle ? (
        <div className="mx-auto mt-2 flex-shrink text-center text-sm text-pretty break-words whitespace-normal opacity-50">
          {subtitle}
        </div>
      ) : null}
    </div>
  )
}
