import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  ],
  footer: Component.CustomFooter({
  links: {
      //GitHub: "https://github.com/jackyzha0/quartz",
      //"Discord Community": "https://discord.gg/cRFFHYye7t",
  },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    //Component.PageTitle(),
    //Component.Breadcrumbs({rootName: "~", spacerSymbol: "⫽"}),
    Component.ArticleTitle(),
    Component.ContentMeta({showReadingTime: false, showComma: false, hideOnRoot: true}),
    Component.TagList(),
  ],
  left: [
//     Component.PageTitle(),
    Component.CharacterSheet({me: "website", img: "oestronaut.jpg", beans: 0}),
    Component.CharacterSheet({me: "oestronaut", img: "oestronaut.jpg", beans: 10}),
    Component.CharacterSheet({me: "you?", img: "you.jpeg", beans: 12}),
    //Component.MobileOnly(Component.Spacer()),
    //Component.Search(),
    //Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    //Component.Graph(),
    //Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
      Component.Breadcrumbs({rootName: "~", spacerSymbol: "⫽"}),
      Component.ArticleTitle(),
      Component.ContentMeta({showReadingTime: false, showComma: false}),
      ],
  left: [
//     Component.PageTitle(),
    Component.CharacterSheet({me: "website", img: "oestronaut.jpg", beans: 0}),
    Component.CharacterSheet({me: "oestronaut", img: "oestronaut.jpg", beans: 10}),
    Component.CharacterSheet({me: "you?", img: "you.jpeg", beans: 12}),
    //Component.MobileOnly(Component.Spacer()),
    //Component.Search(),
    //Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
  ],
}
