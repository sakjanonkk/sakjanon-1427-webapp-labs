import { people } from "./data-q1.js";
import { getImageUrl } from "./utils-q1.js";

export default function List() {
  const chemistry = people.filter((person) => person.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );
  const listItems = chemistry.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article className="pl-5 ">
      {/* <h1 className="text-3xl">Scientists</h1> */}
      <h2 className="text-3xl font-bold">Scientists Chemists</h2>
      <ul className="">
        {chemistry.map((person) => (
          <li className="pt-2" key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold">Everyone Else</h2>
      <ul>
        {everyoneElse.map((person) => (
          <li className="pt-2" key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
