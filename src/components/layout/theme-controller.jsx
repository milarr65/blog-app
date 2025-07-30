import useTheme from '../../hooks/useTheme'
import { capitalize } from '../../utils'

const dark_themes = ['dracula', 'synthwave', 'abyss', 'night', , 'luxury']
const light_themes = ['cupcake', 'valentine', 'caramellatte', 'nord', 'retro']

export default function ThemeController() {
  const [theme, setTheme] = useTheme()
  return (
    <>
      <li>
        <h2 className="menu-title">Dark</h2>
        <ul>
          {dark_themes.map((item, idx) => (
            <li key={idx} onClick={() => setTheme(item)}>
              <a className={theme === item ? 'menu-active' : ''}>{capitalize(item)}</a>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h2 className="menu-title">Light</h2>
        <ul>
          {light_themes.map((item, idx) => (
            <li key={idx} onClick={() => setTheme(item)}>
              <a className={theme === item ? 'menu-active' : ''}>{capitalize(item)}</a>
            </li>
          ))}
        </ul>
      </li>
    </>
  )
}
