import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import Disqus from '../Disqus/Disqus';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    const links = {
      instagram: author.instagram,
      facebook: author.facebook,
      github: author.github,
      linkedin: author.linkedin,
      rss: author.rss,
      email: author.email
    };

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">
          Home
        </Link>
      </div>
    );

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );

    const commentsBlock = (
      <div>
        <Disqus postNode={post} siteMetadata={this.props.data.site.siteMetadata} />
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-single__date">
              <em>Published {moment(post.frontmatter.date).format('D MMM YYYY')}</em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            <div className="post-single__footer__profile">
              <div className="post-single__footer__profile-imgWrapper">
                <img
                  src={profilePic}
                  className="post-single__footer__profile-img"
                  width="120"
                  height="120"
                  alt={author.name}
                />
              </div>
              <span className="post-single__footer__profile-name">
                <strong>{author.name}</strong>
              </span>
              <a
                className="post-single__footer__profile-link"
                href={`https://www.facebook.com/${links.facebook}`}
                target="_blank"
              >
                <i className="icon-facebook" />
              </a>
              <a
                className="post-single__footer__profile-link"
                href={`https://www.github.com/${links.github}`}
                target="_blank"
              >
                <i className="icon-github" />
              </a>
              <a
                className="post-single__footer__profile-link"
                href={`https://www.linkedin.com/in/${links.linkedin}`}
                target="_blank"
              >
                <i className="icon-linkedin" />
              </a>
              <a className="post-single__footer__profile-link" href={`mailto:${links.email}`}>
                <i className="icon-mail" />
              </a>
              <a
                className="post-single__footer__profile-link"
                href={`https://www.instagram.com/${links.instagram}`}
                target="_blank"
              >
                <i className="icon-instagram" />
              </a>
              <a className="post-single__footer__profile-link" href={links.rss}>
                <i className="icon-rss" />
              </a>
              <p className="post-single__footer__profile-subtitle">{subtitle}</p>
              <hr />
            </div>
            {commentsBlock}
          </div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
