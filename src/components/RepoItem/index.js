import {Link} from 'react-router-dom'
import './index.css'

const RepoItem = props => {
  const {repoData} = props
  const {owner, name} = repoData
  const ownerName = owner.login
  const getPublishedTime = () => {
    const pubDate = Date.parse(repoData.pushedAt)
    const date = new Date(pubDate)
    return date.getSeconds()
  }

  return (
    <Link
      to={`/repos/${ownerName}/${name}`}
      style={{textDecoration: 'none', color: 'black'}}
    >
      <li className="repo-item">
        <img src={repoData.owner.avatarUrl} alt="avatar" className="avatar" />
        <div style={{padding: 0, margin: 0}}>
          <h4>
            <span style={{fontWeight: 'bold'}}>Title:</span> {repoData.name}
          </h4>
          <p>
            <span style={{fontWeight: 'bold'}}>Description:</span>{' '}
            {repoData.description}
          </p>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <p className="counts-element">
              <span style={{fontWeight: 'bold'}}>Stars Count: </span>{' '}
              {repoData.starsCnt}{' '}
            </p>
            <p className="counts-element">
              <span style={{fontWeight: 'bold'}}>Issues Count: </span>{' '}
              {repoData.issuesCnt}
            </p>
            <p>
              <span style={{fontWeight: 'bold'}}> Last Pushed: </span>{' '}
              {getPublishedTime()} seconds ago By {repoData.owner.login}
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RepoItem
