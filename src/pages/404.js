import * as React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { PageTemplate } from '../templates/Page'
import { HomeTemplate } from './index'

const NotFoundPage = () => (
  <div>
    <h1>Page not found!</h1>
  </div>
)

// e.g., If an unpublished document is previewed, these templates will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    page: PageTemplate,
    homepage: HomeTemplate,
    prismicPage: PageTemplate,
    prismicHomepage: HomeTemplate,
  },
})