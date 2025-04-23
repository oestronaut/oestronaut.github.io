import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
import PageTitle from "./PageTitle"

interface CharacterSheetOptions {
  /**
   * Whether to display reading time
   */
  name: string
  img: string
}

const defaultOptions: CharacterSheetOptions = {
  name: "",
  img: ""
}

export default ((opts?: Partial<CharacterSheetOptions>) => {
  // Merge options with defaults
  const options: CharacterSheetOptions = { ...defaultOptions, ...opts }

  function CharacterSheet(props: QuartzComponentProps) {
      console.log("props", props)

      return (
          <div>
            <PageTitle {...props} />
            <img src={'static/' + options.img} width='100'/>
            <ul>
                <li><tt>beans: 10</tt></li>
            </ul>
          </div>
      )
  }

  CharacterSheet.css = style

  return CharacterSheet
}) satisfies QuartzComponentConstructor
