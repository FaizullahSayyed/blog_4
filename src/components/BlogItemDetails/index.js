import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogDetails: {}}

  componentDidMount() {
    this.fetchBlogDetails()
  }

  fetchBlogDetails = async () => {
    const {match} = this.props
    const response = await fetch(
      `https://apis.ccbp.in/blogs/${match.params.id}`,
    )
    const fetchedData = await response.json()
    this.setState({
      blogDetails: {
        author: fetchedData.author,
        avatarUrl: fetchedData.avatar_url,
        content: fetchedData.content,
        id: fetchedData.id,
        imageUrl: fetchedData.image_url,
        title: fetchedData.title,
        topic: fetchedData.topic,
      },
      isLoading: false,
    })
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {author, avatarUrl, content, imageUrl, title, topic} = blogDetails
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-detail-container">
        <h1 className="blog-detail-title"> {title}</h1>
        <div className="blog-detail-author-container">
          <div className="blog-detail-author-image">
            <img
              src={avatarUrl}
              alt={author}
              className="blog-detail-author-image"
            />
          </div>
          <p className="blog-detail-author-name">{author}</p>
        </div>
        <div className="blog-detail-blog-image-container">
          <img src={imageUrl} alt={title} className="blog-detail-blog-image" />
        </div>
        <p className="content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
