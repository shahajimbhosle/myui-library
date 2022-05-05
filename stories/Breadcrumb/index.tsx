import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "../Link";

interface LinkProps {
  content: ReactNode;
  order: number;
}

interface BreadcrumbProps {
  links: LinkProps[];
  seperator?: ReactNode;
  color?: string;
}

const sortByOrderCb = (a: LinkProps, b: LinkProps) => {
  if (a.order < b.order) return -1;
  if (a.order > b.order) return 1;
  return 0;
};

const BreadcrumbContainer = styled.div`
  display: inline-flex;
`;

const StyledSpan = styled.span`
  margin-right: 10px;
`;

export const Breadcrumb = ({
  links,
  seperator = "/",
  color,
}: BreadcrumbProps) => {
  links.sort(sortByOrderCb);

  return (
    <BreadcrumbContainer>
      {links.map(({ content, ...props }: LinkProps, index: number) => (
        <>
          <StyledSpan>
            <Link color={color} {...props}>
              {content}
            </Link>
          </StyledSpan>
          {index != links.length - 1 && <StyledSpan>{seperator}</StyledSpan>}
        </>
      ))}
    </BreadcrumbContainer>
  );
};
