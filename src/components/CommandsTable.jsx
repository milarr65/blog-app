export default function CommandsTable() {
  return (
    <div className="rounded-box border-base-content/10 mt-2 overflow-x-auto border">
      <table className="table-zebra table-sm md:table-md table">
        <thead>
          <tr>
            <th>Style</th>
            <th>Keyboard command</th>
            <th>Inline command</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Bold</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +
              <kbd className="kbd">B</kbd>
            </td>
            <td>
              Use <span className="text-secondary">**double asterisks**</span> or{' '}
              <span className="text-secondary">__two underlines__</span>
            </td>
          </tr>

          <tr>
            <td>Italic</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +
              <kbd className="kbd">I</kbd>
            </td>
            <td>
              Use <span className="text-secondary">*one asterisk*</span> or{' '}
              <span className="text-secondary">_one underline_</span>
            </td>
          </tr>

          <tr>
            <td>Strike</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">Shift</kbd> +<kbd className="kbd">S</kbd>
            </td>
            <td>
              Use <span className="text-secondary">~~double tildes~~</span>
            </td>
          </tr>

          <tr>
            <td>Bullet list</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">Shift</kbd> + <kbd className="kbd">8</kbd>
            </td>
            <td>
              Type <span className="text-secondary">*</span>,{' '}
              <span className="text-secondary">-</span> or <span className="text-secondary">+</span>{' '}
              at line start
            </td>
          </tr>

          <tr>
            <td>Numbered list</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">Shift</kbd> + <kbd className="kbd">7</kbd>
            </td>
            <td>
              Type <span className="text-secondary">1. </span> (or any other number followed by a
              dot) at line start
            </td>
          </tr>

          <tr>
            <td>Code span</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">E</kbd>
            </td>
            <td>
              Use <span className="text-secondary">`backticks`</span>
            </td>
          </tr>

          <tr>
            <td>Code block</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">Alt</kbd> + <kbd className="kbd">C</kbd>
            </td>
            <td>
              Type <span className="text-secondary">``` </span> (three backticks and a space) or{' '}
              <span className="text-secondary">~~~ </span> (three tildes and a space) on a new line.
              To specify a coding language do it like this:{' '}
              <span className="text-secondary">```css </span> <br />
              Press <span className="text-secondary">Cmd/Ctrl + Enter</span> to start a new line
              outside the fenced code block.
            </td>
          </tr>

          <tr>
            <td>Block quote</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">Shift</kbd> + <kbd className="kbd">B</kbd>
            </td>
            <td>
              Type <span className="text-secondary">&gt; </span> on a new line followed by a space.
            </td>
          </tr>

          <tr>
            <td>Link</td>
            <td>
              <kbd className="kbd">None</kbd>
            </td>
            <td>
              You can simply select the target text and paste your link with{' '}
              <span className="text-secondary">Ctrl/Cmd + v</span> Or use the bubble menu.
            </td>
          </tr>
        </tbody>

        {/* HEADINGS COMMANDS */}
        <thead>
          <tr>
            <th>Headings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Level 1</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">Alt</kbd> + <kbd className="kbd">1</kbd>
            </td>
            <td>
              Type <span className="text-secondary">#</span> at line start
            </td>
          </tr>
          <tr>
            <td>Level 2</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">Alt</kbd> + <kbd className="kbd">2</kbd>
            </td>
            <td>
              Type <span className="text-secondary">##</span> at line start
            </td>
          </tr>
          <tr>
            <td>Level 3</td>
            <td>
              <kbd className="kbd">Ctrl</kbd> / <kbd className="kbd">Cmd</kbd> +{' '}
              <kbd className="kbd">Alt</kbd> + <kbd className="kbd">3</kbd>
            </td>
            <td>
              Type <span className="text-secondary">###</span> at line start
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
