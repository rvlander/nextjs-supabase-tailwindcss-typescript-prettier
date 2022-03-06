export default function WaitListForm() {
  return (
    <div className="flex flex-row flex-wrap">
      <form>
        <input type="email" />
        <button type="submit">{"Rejoindre la liste d'attente"}</button>
      </form>
    </div>
  );
}
