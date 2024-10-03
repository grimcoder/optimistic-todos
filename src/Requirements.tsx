export function Requirements() {
  return (
    <section className="requirements">
      <h1>Requirements</h1>
      <ol>
        <li>
          <label>
            <input type="checkbox" />
            Add a Todo
          </label>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            Toggle status
          </label>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            Delete a Todo
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Integrate with an API
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Use optimistic updates (use already installed{' '}
            <a href="https://github.com/fkhadra/react-toastify" target="_blank">
              react-toastify
            </a>{' '}
            for notifications)
          </label>
        </li>
      </ol>
    </section>
  );
}
