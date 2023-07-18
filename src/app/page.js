import { Footer } from "../../components/Footer";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";
import { Header } from "../../components/Header";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />

      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput />
        <Task title="Read a book" />
        <Task title="Take a shower" />
        <Task title="Sleep" />
      </div>

      <Footer year="2023" fullname="Chayathon Punpang" studentId="640610690" />
    </div>
  );
}
