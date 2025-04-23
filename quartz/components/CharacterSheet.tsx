import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { JSX } from "preact"
import style from "./styles/characterSheet.scss"

interface CharacterSheetOptions {
  /**
   * Character name to display
   */
  name?: string
  /**
   * Alternative name parameter (for backward compatibility)
   */
  me?: string
  /**
   * Image filename in the static directory
   */
  img: string
  /**
   * Bean count for the character
   */
  beans?: number
}

const defaultOptions: CharacterSheetOptions = {
  name: "",
  me: "",
  img: "",
  beans: 10
}

export default ((opts?: Partial<CharacterSheetOptions>) => {
  // Merge options with defaults
  const options: CharacterSheetOptions = { ...defaultOptions, ...opts }

  function CharacterSheet(props: QuartzComponentProps) {
      // Use me parameter as fallback for name
      const displayName = options.name || options.me || ""
      
      // Create a direct link to the character's page
      const getCharacterLink = (name: string) => {
        const lowerName = name.toLowerCase()
        return `/${lowerName}`
      }
      
      return (
          <div class="character-sheet">
            <img src={'static/' + options.img} width='100' height='100' alt={displayName}/>
            <div class="character-info">
              {displayName && (
                <h3>
                  <a href={getCharacterLink(displayName)}>{displayName}</a>
                </h3>
              )}
              <ul>
                  <li><code>beans: {options.beans}</code></li>
              </ul>
            </div>
          </div>
      )
  }

  CharacterSheet.css = style

  return CharacterSheet
}) satisfies QuartzComponentConstructor
