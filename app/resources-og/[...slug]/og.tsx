import type { ReactElement, ReactNode } from "react"

import { ImageResponse } from "next/og"
import { ImageResponseOptions } from "next/server"

interface GenerateProps {
  title: ReactNode
  description?: ReactNode
  primaryTextColor?: string
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions,
): ImageResponse {
  const { title, description, primaryTextColor, ...rest } = options

  return new ImageResponse(
    generate({
      title,
      description,
      primaryTextColor,
    }),
    {
      width: 1200,
      height: 630,
      ...rest,
    },
  )
}

export function generate({
  primaryTextColor = "rgb(0,0,0)",
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "black",
        backgroundImage: "linear-gradient(to bottom, #f5f5f5, #fff)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "4rem",
        }}
      >
        <p
          style={{
            fontWeight: 400,
            fontSize: "24px",
            color: "rgba(0,0,0)",
            paddingBottom: "0px",
          }}
        >
          Resources
        </p>
        <p
          style={{
            fontWeight: 600,
            fontSize: "76px",
            color: "rgba(0,0,0)",
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontSize: "38px",
            color: "rgba(0,0,0,0.7)",
          }}
        >
          {props.description}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "24px",
            marginTop: "auto",
            color: primaryTextColor,
          }}
        >
          <svg
            width="67"
            height="50"
            viewBox="0 0 1363 950"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M474.891 0.00231934C530.229 0.00231934 583.356 9.46964 632.742 26.8734L574.194 240.654C543.683 227.703 510.124 220.538 474.891 220.538C334.386 220.539 220.485 334.466 220.485 475.002C220.485 615.539 334.386 729.466 474.891 729.466C594.649 729.466 695.08 646.698 722.127 535.232L826.165 155.351C902.963 239.736 949.782 351.9 949.782 475.002C949.782 737.338 737.166 950.002 474.891 950.002C212.616 950.002 1.64983e-05 737.337 0 475.002C0 212.667 212.616 0.00245138 474.891 0.00231934Z"
              fill="black"
            />
            <path
              d="M1363 950.002H1167.51L998.635 373.217L926.288 620.308L625.16 858.278L867.913 0H1094.3L1363 950.002Z"
              fill="black"
            />
          </svg>
          <p
            style={{
              fontSize: "46px",
              fontWeight: 600,
            }}
          >
            CA Resources
          </p>
        </div>
      </div>
    </div>
  )
}
