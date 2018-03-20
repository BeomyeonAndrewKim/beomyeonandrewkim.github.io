import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      instagram: author.instagram,
      facebook: author.facebook,
      github: author.github,
      linkedin: author.linkedin,
      rss: author.rss,
      email: author.email
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.facebook.com/${links.facebook}`} target="_blank">
              <i className="icon-facebook" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.github.com/${links.github}`} target="_blank">
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.linkedin.com/in/${links.linkedin}`} target="_blank">
              <i className="icon-linkedin" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.instagram.com/${links.instagram}`} target="_blank">
              <i className="icon-instagram" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
