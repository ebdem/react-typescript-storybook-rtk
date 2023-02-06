import { forwardRef } from "react";
import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder?: string;
  fontSizes?: string;
  padding?: string;
  margin?: string;
  background?: string;
  placeholderColor?: string;
  className?: string;
  innerRef?: any;
  fontWeights?: string;
}


const Input = styled.input<InputProps>`
  font-size: ${(props) => props.fontSizes || "18px"};
  padding: ${(props) => props.padding || "10px"};
  margin: ${(props) => props.margin || "10px"};
  background: ${(props) => props.background || "papayawhip"};
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: ${(props) => props.placeholderColor || "palevioletred"};
  }
  font-weight: ${(props) => props.fontWeights || "Bold"};
`;

const StyledInput = (
  {
    type = "text",
    placeholder = "Name",
    fontSizes,
    placeholderColor,
    padding,
    margin,
    background,
    className,
    innerRef,
    fontWeights,
    ...props
  }: InputProps,
  ref: any
) => {
  return (
    <Input
      ref={ref}
      className={className}
      background={background}
      padding={padding}
      margin={margin}
      placeholderColor={placeholderColor}
      fontSizes={fontSizes}
      type={type}
      placeholder={placeholder}
      fontWeights={fontWeights}
      {...props}
    />
  );
};

export default forwardRef(StyledInput);
