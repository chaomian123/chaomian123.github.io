import React from 'react';
import { Link } from 'gatsby';
import Layout from '../component/layout';
export default () => {
  return (
    <Layout>
      首页&nbsp;
      <Link to="/about/">关于我</Link>
      &nbsp;
      <Link to="/post/">归档</Link>
    </Layout>
  );
};
