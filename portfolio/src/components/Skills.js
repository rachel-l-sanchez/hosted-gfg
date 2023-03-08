
import React from "react";
import { __DATA__ } from "../data";
import styled, { css } from "styled-components";

import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar
} from "../styles";

class Skills extends React.Component {
  state= {
    hover: false,
  }
  handleMouseEnter = () => {
    this.setState({ hover: true });
  }
  handleMouseLeave = () => {
    this.setState({ hover: false });
  }


  render() {
    const { hover } = this.state;
    return(
      <div
        className="circle"
        style={{
          ...(hover && { boxShadow: `0px 0px 4px 2px`}),
        }}
        onMouseEnter={this.handleMouseEnter} // Or onMouseOver
        onMouseLeave={this.handleMouseLeave}
      >
        <h1>Skills</h1>
        <Container>
            <MainContainer>
              {__DATA__.map(({ hours, labels, colors }, i) => {
                return (
                  <BarChartContainer key={i}>
                    <Number color={colors[1]}> {labels } {hours} hours</Number>
                    <MakeBar height={hours/5} colors={colors} />
                  </BarChartContainer>
                );
              })}
            </MainContainer>
          <BlackLine />
      </Container>
</div>
    )
  }
}

export default Skills;


