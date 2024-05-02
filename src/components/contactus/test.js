<form onSubmit={handleSubmit}>
  <label htmlFor="name">Name</label>
  <input id="name" type="text" name="name" />
  <ValidationError prefix="Name" field="name" errors={state.errors} />

  <label htmlFor="email">Email Address</label>
  <input id="email" type="email" name="email" />
  <ValidationError prefix="Email" field="email" errors={state.errors} />

  <textarea id="message" name="message" />
  <ValidationError prefix="Message" field="message" errors={state.errors} />

  <button type="submit" disabled={state.submitting}>
    Submit
  </button>
</form>;
