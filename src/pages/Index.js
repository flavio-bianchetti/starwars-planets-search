import React from 'react';
import Header from '../components/Header';
import ArticleTable from '../components/ArticleTable';
import Filter from '../components/Filter';

function Index() {
  return (
    <section>
      <Header />
      <Filter />
      <ArticleTable />
    </section>
  );
}

export default Index;
