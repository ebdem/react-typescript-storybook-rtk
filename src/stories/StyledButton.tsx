import styled from "styled-components";

const StyledButtonn = styled.button<{
  width?: string;
  padding?: string;
  height?: string;
  borderColor?: string;
}>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${(props) => props.color || "black"};
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "0"};
  height: ${(props) => props.height || "0"};
  border: ${(props) =>props.borderColor ? `2px solid ${props.borderColor}` : "none"};
`;

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   *  Optional border color
   */
  borderColor?: string;
  padding?: string;
  width?: string;
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const StyledButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  borderColor,
  ...props
}: ButtonProps) => {
  return (
    <StyledButtonn
      type="button"
      color={primary ? "red" : "blue"}
      style={{ backgroundColor }}
      width={size === "small" ? "100px" : size === "medium" ? "200px" : "300px"}
      height={size === "small" ? "50px" : size === "medium" ? "100px" : "150px"}
      padding={size === "small" ? "10px" : size === "medium" ? "20px" : "30px"}
      borderColor={borderColor}
      {...props}
    >
      {label}
    </StyledButtonn>
  );
};
