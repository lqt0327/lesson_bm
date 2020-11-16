import React from 'react';
import styles from './index.less';
import { Helmet } from 'umi';

export default () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
}