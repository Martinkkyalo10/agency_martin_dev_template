import TeamCard from "@/components/ui/TeamCard";

const team = [
  {
    name: "Martin Kyalo",
    role: "Founder & Lead Developer",
    image: "/img/team-1.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jane Doe",
    role: "DevOps Engineer",
    image: "/img/team-2.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function TeamMembers() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-lg-6">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
