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

const flexDiection = (orientation) => {
  switch (orientation) {
    case Horizontal:
      return "row"
    default:
      return "column"
  }
}

const propertyOfAlignX = (orientation) => {
  switch (orientation) {
    case Horizontal:
      return "justify-content"
    default:
      return "align-items"
  }
}

const propertyOfAlignY = (orientation) => {
  switch (orientation) {
    case Horizontal:
      return "align-items"
    default:
      return "justify-content"
  }
}

//TODO: support spacing for children, flexbox gap? or css child margin?
//TODO: verticalBelow?
export const Box = forwardRef(
  ({ orientation, alignX, alignY, spacing, children, ...props }, ref) => {
    let isAlign = alignX || alignY
    let direction = flexDiection(orientation)

    return (
      <div
        ref={ref}
        css={css`
          ${isAlign &&
          css`
            display: flex;
          `}

          ${isAlign &&
          css`
            flex-direction: ${direction};
          `}

          ${alignX &&
          css`
            ${propertyOfAlignX(orientation)}: ${HorizontalAlign[alignX]};
          `}

          ${alignY &&
          css`
            ${propertyOfAlignY(orientation)}: ${VerticalAlign[alignY]};
          `}
        `}
        {...props}
      >
        {children}
      </div>
    )
  }
)
