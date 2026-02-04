export default function ProfileForm({ name, umur, setName, setUmur }) {
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleChangeUmur (events) {
    setUmur(events.target.value);
  }

  return (
    <>
      <h2>Profile Form</h2>
      <input
        type="text"
        placeholder="Input Nama"
        value={name}
        onChange={handleChange}
      />
      <input 
        type="text"
        placeholder="Input Umur"
        value={umur}
        onChange={handleChangeUmur}
      />
    </>
  );
}
