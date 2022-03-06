import WaitListForm from "../components/WaitListForm";

export default function Home() {
  return (
    <div className="bg-primary flex h-screen w-full flex-col items-center">
      <div className="flex h-12 w-full flex-row  justify-between">
        <h1>Riga</h1>
        <WaitListForm />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex max-w-xl flex-col py-24">
          <h1>Less meeting</h1>
          <h1>More doing</h1>
          <p>
            Asynchronous meetings powered by Claap help you reduce the number of
            meetings needed to share updates, get feedback and make decisions.
          </p>
          <WaitListForm />
        </div>
      </div>
    </div>
  );
}
