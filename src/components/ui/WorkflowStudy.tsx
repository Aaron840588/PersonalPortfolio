import Link from "next/link";
import Image from "next/image";

const studies = [
  {
    id: "pet",
    name: "Pet-Care CRM",
    nodes: ["Client", "Pet", "Booking", "Invoice", "Visit report"],
    description:
      "Connecting the details of a visit, from client records to billing and reports.",
    href: "/work/pet-care-crm",
    screenshot: "/projects/pet-care-crm/dashboard.png",
  },
  {
    id: "food",
    name: "H+H Hub",
    nodes: ["Recipe", "Stock", "Production", "Costing", "Orders"],
    description:
      "Mapping how recipes, stock, production, costing, and orders relate to one another.",
    href: "/work/hh-hub",
    screenshot: "/projects/hh-hub/dashboard.png",
  },
] as const;

/** Native radios keep the illustration usable before hydration and without JS. */
export function WorkflowStudy() {
  return (
    <aside className="workflow-study" aria-label="Explore project workflows">
      <div className="workflow-study__heading">
        <p className="workflow-study__eyebrow">
          <span aria-hidden="true" /> Inside the work
        </p>
        <h2>From process to prototype.</h2>
        <p>Explore the systems behind two everyday operations.</p>
      </div>
      <fieldset className="workflow-study__switcher">
        <legend className="sr-only">Choose a project workflow</legend>
        <input
          className="sr-only"
          type="radio"
          name="workflow"
          id="workflow-pet"
          defaultChecked
        />
        <label htmlFor="workflow-pet">Pet-care</label>
        <input
          className="sr-only"
          type="radio"
          name="workflow"
          id="workflow-food"
        />
        <label htmlFor="workflow-food">Food operations</label>
        <div className="workflow-study__panels">
          {studies.map((study) => (
            <div
              className={`workflow-study__panel workflow-study__panel--${study.id}`}
              key={study.id}
            >
              <div className="workflow-preview" aria-hidden="true">
                <div className="workflow-preview__chrome">
                  <span>01 / {study.name}</span>
                  <span>PROJECT STUDY ↗</span>
                </div>
                <Image
                  src={study.screenshot}
                  alt=""
                  width={1280}
                  height={720}
                  sizes="(max-width: 959px) 90vw, 44vw"
                  loading="eager"
                />
                <span className="workflow-preview__tag">
                  Built around a real workflow
                </span>
              </div>
              <div
                className="workflow-map"
                role="img"
                aria-label={`${study.name}: ${study.nodes[0]} and ${study.nodes[1]} connect to ${study.nodes[2]}, which connects to ${study.nodes[3]} and ${study.nodes[4]}. Simplified workflow illustration.`}
              >
                <svg
                  className="workflow-map__connections"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="workflow-map__base"
                    d="M16 14 V50 H50 M16 86 V50 H50 M50 50 H84 V14 M50 50 H84 V86"
                  />
                  <path
                    className="workflow-map__trace"
                    pathLength="1"
                    d="M16 14 V50 H50 M16 86 V50 H50 M50 50 H84 V14 M50 50 H84 V86"
                  />
                </svg>
                {study.nodes.map((node, index) => (
                  <span
                    key={node}
                    className={`workflow-map__node workflow-map__node--${index + 1}`}
                    aria-hidden="true"
                  >
                    {node}
                  </span>
                ))}
              </div>
              <div className="workflow-study__caption">
                <span className="workflow-study__figure" aria-hidden="true">
                  {study.id === "pet" ? "FIG. 01" : "FIG. 02"}
                </span>
                <p>{study.description}</p>
              </div>
              <Link className="workflow-study__link" href={study.href}>
                Explore {study.name} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ))}
        </div>
      </fieldset>
    </aside>
  );
}
