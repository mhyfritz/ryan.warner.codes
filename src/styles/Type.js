import { css, createGlobalStyle } from 'styled-components'

import Breakpoints from './Breakpoints'
import Colors from './Colors'

const sansSerifFallback = "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif'"
export const fontFace = `'Jost', ${sansSerifFallback}`
export const monospace = "Menlo, Monaco, 'Courier New', monospace"

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 'bold'
}

export const body = css`
  font-size: 14px;

  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 16px;
  }
`

export const header1 = css`
  font-size: 43px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};

  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 28px;
    line-height: 138%;
  }
`

export const header3 = css`
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  margin: 0;
`


export const GlobalType = createGlobalStyle`
  body {
    ${body};
    font-family: ${fontFace};
  }

  h1 {
    ${header1};
  }

  h3 {
    ${header3};
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    transition: color 300ms ease;
    color: ${Colors.text10};
    cursor: pointer;

    &:hover {
      color: ${Colors.glow20};
    }
  }
`
