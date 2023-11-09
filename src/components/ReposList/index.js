import {Component} from 'react'
import RepoItem from '../RepoItem'
import './index.css'

class ReposList extends Component {
  constructor() {
    super()
    this.state = {reposList: []}
  }

  componentDidMount() {
    this.getReposList()
  }

  getReposList = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer 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`,
      },
    }
    const response = await fetch(
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2',
      options,
    )
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.items.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        issuesCnt: item.open_issues_count,
        starsCnt: item.stargazers_count,
        pushedAt: item.pushed_at,
        owner: {
          id: item.owner.id,
          avatarUrl: item.owner.avatar_url,
          login: item.owner.login,
        },
      }))
      console.log(data)
      this.setState({reposList: formattedData})
    }
  }

  render() {
    const {reposList} = this.state
    console.log(reposList)
    return (
      <div className="main-container">
        <h1>Most Starred Repos</h1>
        <ul className="items-container">
          {reposList.map(repoData => (
            <RepoItem key={repoData.id} repoData={repoData} />
          ))}
        </ul>
      </div>
    )
  }
}
export default ReposList
