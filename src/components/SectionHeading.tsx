import React from "react";

export type SectionHeadingProps = {
  title: string;
  description?: string;
};

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <h2 className="capitalize text-3xl font-medium mb-8 text-center leading-8">
      {title}
    </h2>
  );
};

export default SectionHeading;
