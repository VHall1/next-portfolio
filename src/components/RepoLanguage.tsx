import React from "react";

interface RepoLanguageProps {
  color?: string | undefined;
}

export const RepoLanguage: React.FC<RepoLanguageProps> = ({
  color = "#F1E05A",
}) => {
  return (
    <div
      style={{
        background: color,
        borderRadius: "100%",
        width: "8px",
        height: "8px",
      }}
    />
  );
};
