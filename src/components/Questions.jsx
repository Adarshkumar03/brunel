import union from "../assets/Union.svg";
import Accordion from "./Accordian";

const questions = [
  {
    id: 1,
    ques: "Do you offer freelancers?",
    ans: "Yes",
  },
  {
    id: 2,
    ques: "What's the guarantee that I will be satisfied with the hired talent?",
    ans: "There is guarantee",
  },
  {
    id: 3,
    ques: "Can I hire multiple talents at once",
    ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    id: 4,
    ques: "Why should I not go to an agency directly?",
    ans: "Working directly with a company can give you greater control over your application and how you present yourself to the hiring manager. You might have access to a wider range of job opportunities by searching independently instead of relying solely on an agency's network.",
  },
  {
    id: 5,
    ques: "Who can help me pick a right skillset and duration for me?",
    ans: "We will",
  },
];

export default function Questions() {
  const items = questions.map((q) => {
    return <Accordion title={q.ques} answer={q.ans} key={q.id} />;
  });

  return (
    <div className="bg-slate-200 m-5 pt-20 pl-20 rounded-3xl flex">
      <div className="mr-28">
        <p className="covered-by-your-grace-regular text-3xl text-gray-500">
          What&apos;s on your mind
        </p>
        <h1 className="text-6xl font-medium mb-24">Ask Questions</h1>
        <img src={union} className="relative right-20 " />
      </div>
      <div className="w-1/2 mx-auto divide-y divide-gray-400">{items}</div>
    </div>
  );
}
