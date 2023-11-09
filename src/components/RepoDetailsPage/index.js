import {useState, useEffect} from 'react'
import './index.css'

const RepoDetailsPage = props => {
  const [repoDetails, setRepoDetails] = useState({})
  const {match} = props
  const {params} = match
  const {owner, repo} = params
  console.log(owner, repo)

  const getRepoDetails = async () => {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer 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`,
        },
      },
    )
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        id: data.id,
        name: data.name,
        language: data.language,
        publishedAt: data.pushed_at,
        description: data.description,
        forksCount: data.forks_count,
        owner: {
          id: data.owner.id,
          avatarUrl: data.owner.avatar_url,
          name: data.owner.login,
        },
      }
      setRepoDetails(formattedData)
      console.log(data)
    }
  }

  useEffect(() => {
    getRepoDetails()
  }, [])

  return (
    <div className="repo-details-container">
      <h1>Repo Details Page</h1>
      <div className="details-container">
        <h4>Title: {repoDetails.name}</h4>
        <p>
          {' '}
          <span style={{fontWeight: 'bold'}}>Description: </span>{' '}
          {repoDetails.description}
        </p>
        <p>
          {' '}
          <span style={{fontWeight: 'bold'}}>Language: </span>{' '}
          {repoDetails.language}
        </p>
        <p>
          {' '}
          <span style={{fontWeight: 'bold'}}>Published At: </span>{' '}
          {repoDetails.publishedAt}
        </p>
        <p>
          {' '}
          <span style={{fontWeight: 'bold'}}>Forks Count: </span>{' '}
          {repoDetails.forksCount}
        </p>
        <div>
          <h4>Owner Details</h4>
          <p>
            {' '}
            <span style={{fontWeight: 'bold'}}>Name: </span>{' '}
            {repoDetails?.owner?.name}
          </p>
          <p>
            {' '}
            <span style={{fontWeight: 'bold'}}>Id: </span>{' '}
            {repoDetails?.owner?.id}
          </p>
        </div>
      </div>
    </div>
  )
}
export default RepoDetailsPage
