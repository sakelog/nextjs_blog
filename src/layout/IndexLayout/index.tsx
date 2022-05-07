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
  <>
    {head}
    <section className="flex flex-col h-full">
      <div className="flex-1">{children}</div>
      <div className="border-t border-gray-400 mt-2">
        {pagination}
      </div>
    </section>
  </>
);

export default IndexLayout;
