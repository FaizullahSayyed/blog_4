import {Component} from 'react'
import Loader from 'react-loader-spinner'

import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.fetchBlogsList()
  }

  fetchBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const dataList = await response.json()
    const updatedDataList = dataList.map(item => ({
      id: item.id,
      title: item.title,
      author: item.author,
      avatarUrl: item.avatar_url,
      imageUrl: item.image_url,
      topic: item.topic,
    }))
    this.setState({blogsList: updatedDataList, isLoading: false})
  }

  render() {
    const {isLoading, blogsList} = this.state

    return (
      <div className="home-container">
        <UserInfo />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <BlogList blogsList={blogsList} />
        )}
      </div>
    )
  }
}

// const Home = () => (
//   <div className="home-container">Render UserInfo and BlogList</div>
// )

export default Home
