import {
  ErrorCon,
  ErrorImg,
  ErrorHeading,
  ErrorPara,
  ErrorRetryBtn,
} from './styledComponents'

import GlobalContext from '../../context/GlobalContext'

const ErrorComponent = props => (
  <GlobalContext.Consumer>
    {value => {
      const {isDark} = value
      const {retryBtn} = props

      return (
        <ErrorCon isDark={isDark}>
          <ErrorImg
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="failure view"
          />
          <ErrorHeading isDark={isDark}>
            Oops! Something Went Wrong
          </ErrorHeading>
          <ErrorPara>
            We are having some trouble to complete your request. Please try
            again.
          </ErrorPara>
          <ErrorRetryBtn type="button" onClick={retryBtn}>
            Retry
          </ErrorRetryBtn>
        </ErrorCon>
      )
    }}
  </GlobalContext.Consumer>
)
export default ErrorComponent
