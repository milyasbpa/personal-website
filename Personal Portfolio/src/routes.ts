import { createBrowserRouter } from 'react-router'
import Home from './App.home'
import WritingList from './pages/WritingList'
import ArticleDetail from './pages/ArticleDetail'

export const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/writing', Component: WritingList },
  { path: '/writing/:slug', Component: ArticleDetail },
])
