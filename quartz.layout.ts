import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'imcbee/blog',
      // from data-repo-id
      repoId: 'R_kgDOQCpUtA',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDOQCpUtM4CxDmL',
      // from data-lang
      lang: 'en',
      // theme
      darkTheme: 'catppuccin_frappe',
      lightTheme: 'catppuccin_latte'
    }
  }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/imcbee/blog",
      Instagram: "https://www.instagram.com/iancmcbee/",
      Linkedin: "https://www.linkedin.com/in/ian-mcbee/"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
