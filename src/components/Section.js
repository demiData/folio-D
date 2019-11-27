import React from "react"
import styled from "styled-components"

const SectionGroup = styled.h1`
  font-size: 3em;
  color: pink;
`

const Section = props => <SectionGroup>{props.title}</SectionGroup>

export default Section
