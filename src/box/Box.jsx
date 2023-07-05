import { forwardRef } from "react"
import { css } from "@emotion/react"

const Horizontal = "horizontal"
const Vertical = "vertical"
export const Orientation = {
  Horizontal,
  Vertical
}

const Left = "left"
const Center = "center"
const Right = "right"
const Top = "top"
const Bottom = "bottom"

export const AlignX = {
  Left,
  Center,
  Right
}
const HorizontalAlign = {
  left: "flex-start",
  center: "center",
  right: "flex-end"
}

export const AlignY = {
  Top,
  Center,
  Bottom
}
const VerticalAlign = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end"
}

export const Box = forwardRef(
  ({ orientation = Vertical, alignX, alignY, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        css={css`
          ${(alignX || alignY) &&
          css`
            display: flex;
          `}

          ${orientation === Vertical &&
          css`
            flex-direction: column;
          `}

          ${alignY &&
          css`
            justify-content: ${VerticalAlign[alignY]};
          `}

        ${alignX &&
          css`
            align-items: ${HorizontalAlign[alignX]};
          `}
        `}
      >
        {children}
      </div>
    )
  }
)
