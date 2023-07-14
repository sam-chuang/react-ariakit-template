import { forwardRef } from "react"
import { css } from "@emotion/react"

export const Orientation = {
  Horizontal: "horizontal",
  Vertical: "vertical"
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
  right: "flex-end",
  apart: "space-between"
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
    case Orientation.Horizontal:
      return "row"
    default:
      return "column"
  }
}

const propertyOfAlignX = (orientation) => {
  switch (orientation) {
    case Orientation.Horizontal:
      return "justify-content"
    default:
      return "align-items"
  }
}

const propertyOfAlignY = (orientation) => {
  switch (orientation) {
    case Orientation.Horizontal:
      return "align-items"
    default:
      return "justify-content"
  }
}

const gap = (value) => (Number.isFinite(value) ? `${value}px` : value)

//TODO: verticalBelow? breakpoints
export const Box = forwardRef(
  (
    {
      orientation = Vertical,
      alignX,
      alignY,
      spacing,
      isFilled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        css={css`
          display: flex;
          flex-direction: ${flexDiection(orientation)};

          ${!isFilled &&
          css`
            align-items: flex-start;
          `}

          ${alignX &&
          css`
            ${propertyOfAlignX(orientation)}: ${HorizontalAlign[alignX]};
          `}

          ${alignY &&
          css`
            ${propertyOfAlignY(orientation)}: ${VerticalAlign[alignY]};
          `}

          ${(Number.isFinite(spacing) || spacing) &&
          css`
            gap: ${gap(spacing)};
          `}
        `}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export const Horizontal = (props) => (
  <Box orientation={Orientation.Horizontal} {...props} />
)

export const Vertical = (props) => (
  <Box orientation={Orientation.Vertical} {...props} />
)

export default Box
