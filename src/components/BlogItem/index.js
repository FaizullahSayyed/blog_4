import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  render() {
    const {blogDetails} = this.props
    const {id, imageUrl, topic, title, avatarUrl, author} = blogDetails

    return (
      <li className="list-item">
        <Link to={`/blogs/${id}`} className="link-item">
          <div className="blog-container">
            <div className="blog-image-container">
              <img src={imageUrl} alt={topic} className="blog-image" />
            </div>
            <div className="blog-info-container">
              <p className="blog-topic">{topic}</p>
              <h1 className="blog-title">{title}</h1>
              <div className="blog-author-container">
                <div className="author-image-container">
                  <img src={avatarUrl} alt={title} className="author-image" />
                </div>
                <p className="author-name">{author}</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default BlogItem
