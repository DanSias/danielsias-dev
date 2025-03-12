import React from "react";

const PaperLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen place-items-center bg-gray-400">
      <main className="m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg">
        {children}
      </main>
    </div>
  );
};

export default PaperLayout;
