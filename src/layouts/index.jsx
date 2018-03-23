import React from 'react';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism-okaidia.css';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="Andrea's Devlog">
          <meta
            name="google-site-verification"
            content="LvvVOBdmRebfztwULm5AFnz_qu0JV8rIGCzyYesTw1o"
          />
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default Layout;
