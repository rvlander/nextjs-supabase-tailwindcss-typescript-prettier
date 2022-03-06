import WaitListForm from "../components/WaitListForm";

export default function Home() {
  return (
    <div className="w-full h-screen bg-primary flex flex-col items-center">
      <div className="w-full flex flex-row h-12  justify-between">
        <h1>Riga</h1>
        <WaitListForm />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="max-w-xl flex flex-col py-24">
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
