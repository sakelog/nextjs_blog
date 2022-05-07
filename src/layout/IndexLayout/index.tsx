import React from 'react';

type PropTypes = {
  head: React.ReactNode;
  children: React.ReactNode;
  pagination: React.ReactNode;
};

const IndexLayout = ({
  head,
  children,
  pagination,
}: PropTypes) => (
  <div className="bg-white h-full">
    {head}
    <section className="flex flex-col h-full p-2">
      <div className="flex-1 p-2">{children}</div>
      <div className="border-t border-gray-400 mt-2">
        {pagination}
      </div>
    </section>
  </div>
);

export default IndexLayout;
