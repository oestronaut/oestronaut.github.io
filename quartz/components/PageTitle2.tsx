import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle2: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title-2")}>
      <a href={baseDir + "/you"}>you?</a>
    </h2>
  )
}

PageTitle2.css = `
.page-title-2 {
  font-size: 1.75rem;
  margin: 0;
}

.page-title-2 > a {
  float: right;
}

/* Hide PageTitle2 on tablet and mobile */
@media (max-width: 1200px) {
  .page-title-2 {
    display: none;
  }
}
`

export default (() => PageTitle2) satisfies QuartzComponentConstructor
