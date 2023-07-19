import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleTagManager = () => {
  return (
    <Helmet>
      <script
        id='google-tag-manager'
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-DYW3JZXH72'
      ></script>
      <script id='google-tag-manager-script'>
        {`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-DYW3JZXH72');
			`}
      </script>
    </Helmet>
  );
};

export default GoogleTagManager;
